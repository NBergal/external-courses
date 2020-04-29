const dataMock = [
    {
        title: 'backlog',
        issues: [
            {
                id: 'task1',
                name: 'Login page – performance issues'
            },
            {
                id: 'task2',
                name: 'Sprint bugfix'
            }
        ]
    },
    {
        title: 'Ready',
        issues: [
            {
                id: 'task1',
                name: 'Shop page – performance issues'
            },
            {
                id: 'task2',
                name: 'Checkout bugfix'
            },
            {
                id: 'task3',
                name: 'Shop bug1'
            },
            {
                id: 'task4',
                name: 'Shop bug2'
            },
            {
                id: 'task5',
                name: 'Shop bug3'
            },
            {
                id: 'task6',
                name: 'Shop bug4'
            },
            {
                id: 'task7',
                name: 'Shop bug5'
            },
            {
                id: 'task8',
                name: 'Shop bug6'
            }
        ]
    },
    {
        title: 'In Progress',
        issues: [
            {
                id: 'task1',
                name: 'User page – performance issues'
            },
            {
                id: 'task2',
                name: 'Sprint bugfix'
            },
            {
                id: 'task3',
                name: 'Auth bugfix'
            }
        ]
    },
    {
        title: 'Finished',
        issues: [
            {
                id: 'task1',
                name: 'Main page – performance issues'
            },
            {
                id: 'task2',
                name: 'Main page bugfix'
            }
        ]
    }
];
function openUserMenu() {
    let menuItems = ['My account', 'My taskNumber', 'Log out', ];
    document.getElementsByClassName('header__menu')[0]
        .appendChild(document.createElement('div'))
        .setAttribute('class', 'user-menu_open');
    document.getElementsByClassName('user-menu_open')[0]
        .appendChild(document.createElement('div'))
        .setAttribute('class', 'user-menu_open__inner');
    document.getElementsByClassName('user-menu_open__inner')[0]
        .appendChild(document.createElement('ul'))
        .setAttribute('class', 'menu');
    for (let i = 0; i < menuItems.length; i++) {
        document.getElementsByClassName('menu')[0]
            .appendChild(document.createElement('li'))
            .setAttribute('class', 'menu-item');
        let menuItemInner = document.createElement('div');
        menuItemInner.setAttribute('class', 'menu-item__inner');
        document.getElementsByClassName('menu-item')[i].appendChild(menuItemInner);
        menuItemInner.innerText = menuItems[i];
    }
}
/////////////////////////////////////////////////////////////////////////////////////
// 2 --- Функция
function fillBoards(dataMock) {
    let board = document.getElementsByClassName('boards__inner')[0];

    // 3 --- Считаю карты и для каждой выполняется следующее...
    for (let cardNumber = 0; cardNumber < dataMock.length; cardNumber++) {
        board.innerHTML += `
            <div class="list">
                <div class="list__inner">
                    <div class="list__header">
                        <span>${dataMock[cardNumber].title}</span>
                        <div class="more">
                            <div class="more-svg">
                                <object type="image/svg+xml" data="images/container/more.svg">
                                    <img src="images/container/more.png" alt="more">
                                </object>
                            </div>
                        </div>
                    </div>
                    <div class="list__container">
                    </div>
                </div>
            </div>
        `;
        let card = document.getElementsByClassName('list__container')[cardNumber];   
        let editable = '';

        // 4 --- Если карта первая, то ее задачи можно изменять вводом
        if (cardNumber === 0) {
            editable = 'contenteditable';
        }
        let dataMockTitle = dataMock[cardNumber].title;
        let amountOfKeys = 0;

        // 5 --- Если карта первая, то ее задачи можно изменять вводом
        for (let i = 0; i < localStorage.length; i++) {
            // 6 --- Если строка в localStorage существует начинается также, как и 
            // название карты, то считается количество ключей
            if(localStorage.key(i).startsWith(dataMockTitle)) {
                amountOfKeys++;
            }
        }

        
        let taskNumberEnd = dataMock[cardNumber].issues.length;
        // 7 --- Если количество ключей localStorage не совпадает с dataMock
        // то данные были изменены и именно столько задач должно быть отображено.
        // иначе количество не изменится и выведуться данные из dataMock
        if (taskNumberEnd !== amountOfKeys && amountOfKeys !== 0) {
            taskNumberEnd = amountOfKeys;
        }
        for (let taskNumber = 0; taskNumber < taskNumberEnd; taskNumber++) {
            let taskText;
            if (taskText !== window.localStorage.getItem(dataMock[cardNumber].title + ': ' + `task${taskNumber + 1}`) || taskText === null) {
                taskText = dataMock[cardNumber].issues[taskNumber].name;
            }
            else {
                taskText = window.localStorage.getItem(dataMock[cardNumber].title + ': ' + `task${taskNumber + 1}`);
            }
            card.innerHTML += `
                <div class="button_list-item">
                    <div class="button_list-item__inner" ${editable}>
                        ${taskText}
                    </div>
                </div>
            `;
        }
        card.innerHTML += `
            <div class="list__footer">
                <button class="button_add-list-item">
                    <div class="add-svg">
                        <object type="image/svg+xml" data="images/container/add.svg">
                            <img src="images/container/add.png" alt="add">
                        </object>
                    </div>
                    <span>Add card</span>
                </button>
            </div>
        `;
    }  
}
// заполнение выпадающего списка
function fillDropdown(dataMock, targetCard, index) {
    // 8 --- Заполнение выпадающего списка // НЕ РАБОТАЕТ
    let dropdown = document.createElement('div');
    dropdown.setAttribute('class', 'dropdown');
    targetCard.insertBefore(dropdown, targetCard.getElementsByClassName('list__footer')[0]);
    targetCard.getElementsByClassName('dropdown')[0]
        .appendChild(document.createElement('ul'))
        .setAttribute('class', 'dropdown__inner');
    for (let cardNumber = index - 1; cardNumber < index; cardNumber++) {
        console.log('card' + cardNumber);
        let dataMockTitle = dataMock[cardNumber].title;
        for (let i = 0; i < localStorage.length; i++) {
            if(localStorage.key(i).startsWith(dataMockTitle)) {
                amountOfKeys++;
            }
        }
        let taskNumberEnd = dataMock[cardNumber].issues.length;
        if (taskNumberEnd !== amountOfKeys && amountOfKeys !== 0) {
            taskNumberEnd = taskNumberEnd + amountOfKeys;
        }
        console.log(taskNumberEnd);
        for (let taskNumber = 0; taskNumber < taskNumberEnd + 10; taskNumber++) {
            if (window.localStorage.getItem(dataMock[cardNumber].title + ': ' + `task${taskNumber + 1}`) !== null) {
                console.log(dataMock[cardNumber].title + ': ' + `task${taskNumber + 1}`);
                let taskText;
                targetCard.getElementsByClassName('dropdown__inner')[0]
                    .appendChild(document.createElement('li'))
                    .setAttribute('class', 'dropdown__item');
                let dropdownTask = targetCard.getElementsByClassName('dropdown__item')[taskNumber]
                    .appendChild(document.createElement('div'));
                dropdownTask.setAttribute('class', 'dropdown__item__inner');
                taskText = window.localStorage.getItem(dataMock[cardNumber].title + ': ' + `task${taskNumber + 1}`);
                dropdownTask.innerText = taskText;
                console.log(taskText + 'aaa');
            }
        }
    }
}
window.addEventListener('click', function(openMenuEvent) {
    let openedMenu = document.getElementsByClassName('user-menu_open')[0];
    let openMenuButton = document.getElementsByClassName('button_open-menu')[0];
    if (openMenuButton.contains(openMenuEvent.target)){
        if (openedMenu) {
            openMenuButton.style.animation = "arrowUp 0.2s linear forwards";
            openedMenu.remove();
        }
        else {
            openMenuButton.style.animation = "arrowDown 0.2s linear forwards";
            openUserMenu();
        }
    }
    else {
        if (openedMenu) {
            openMenuButton.style.animation = "arrowUp 0.2s linear forwards";
            openedMenu.remove();
        }
    }
});

// --- клик на кнопку Add card
window.addEventListener('click', function(selectTaskEvent) {
    let addTaskButton = document.getElementsByClassName('button_add-list-item');
    for (let i = 0; i < addTaskButton.length; i++) {
        if (addTaskButton[i].contains(selectTaskEvent.target)) {
            let card = document.getElementsByClassName('list__container')[i];
            if (i === 0) {
                let task = card.getElementsByClassName('button_list-item')[0];
                let newTask = card
                    .insertBefore(task.cloneNode(true), card.getElementsByClassName('list__footer')[0]);
                let newTaskInner = newTask.getElementsByClassName('button_list-item__inner')[0];
                newTaskInner.innerText = '';
            }
            else {
                fillDropdown(dataMock, card, i);
            }
        }
    }
});

// --- клик на задачу в выпадающем списке, ее добавление и закрытие выпадающего списка
window.addEventListener('click', function (addTaskEvent) {
    let dropdown = document.getElementsByClassName('dropdown')[0];
    if (dropdown) {
        let card = dropdown.closest('.list__inner');
        let cardInner = card.getElementsByClassName('list__container')[0];
        let task = cardInner.getElementsByClassName('button_list-item');
        let dropdownTask = cardInner.getElementsByClassName('dropdown__item__inner');
        for (let taskNumber = 0; taskNumber < dropdownTask.length; taskNumber++) {
            if (dropdownTask[taskNumber].contains(addTaskEvent.target)) {
                if (dropdownTask[taskNumber]) {
                    let newTaskInner = cardInner
                        .insertBefore(task[0].cloneNode(true), dropdown);
                        newTaskInner.getElementsByClassName('button_list-item__inner')[0].innerText = dropdownTask[taskNumber].innerText;
                    let cardName = card.getElementsByTagName('span')[0].innerHTML;
                    window.localStorage.setItem(cardName + ': ' + `task${task.length}`, newTaskInner.textContent);
                    cardInner.getElementsByClassName('dropdown')[0].remove();
                }
            }
        }
    }
});

// --- данные сохраняются при изменении на первой карте
document.addEventListener('click', function (blurTask) {
    let firstVard = document.getElementsByClassName('list__container')[0];
    let newTaskInner = firstVard.getElementsByClassName('button_list-item__inner');
    for (let i = 0; i < newTaskInner.length; i++) {
        if (!newTaskInner[i].contains(blurTask.target)) {
            window.localStorage.setItem('backlog: ' + `task${[i + 1]}`, newTaskInner[i].textContent);
        }
    }
});

// 1 --- При загрузке скрипта выполняется функция
window.onload = function () {
    fillBoards(dataMock);
};

// ---------------------------- BUGS ----------------------------
// DISABLE TO CREATE NEW TASK WHEN CARD IS EMPTY