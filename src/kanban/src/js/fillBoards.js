export default function fillBoards(dataMock) {
    let board = document.getElementsByClassName('boards__inner')[0];
    for (let cardNumber = 0; cardNumber < dataMock.length; cardNumber++) {
        board.innerHTML += `
            <div class="list">
                <div class="list__inner">
                    <div class="list__header">
                        <span>${dataMock[cardNumber].title}</span>
                        <div class="more">
                            <div class="more-svg">
                                <object type="image/svg+xml" data="src/images/container/more.svg">
                                    <img src="src/images/container/more.png" alt="more">
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
        if (cardNumber === 0) {
            editable = 'contenteditable';
        }
        let dataMockTitle = dataMock[cardNumber].title;
        let amountOfKeys = 0;
        for (let i = 0; i < localStorage.length; i++) {
            if(localStorage.key(i).startsWith(dataMockTitle)) {
                amountOfKeys++;
            }
        }
        let taskNumberEnd = dataMock[cardNumber].issues.length;
        if (amountOfKeys > 0) {
            if (taskNumberEnd > amountOfKeys) {
                taskNumberEnd += amountOfKeys;
            }
            else if (taskNumberEnd < amountOfKeys) {
                taskNumberEnd += amountOfKeys - taskNumberEnd;
            }
        }
        for (let taskNumber = 0; taskNumber < taskNumberEnd; taskNumber++) {
            let taskText = window.localStorage.getItem(dataMock[cardNumber].title + ': ' + `task${taskNumber + 1}`);
            if (taskText !== window.localStorage.getItem(dataMock[cardNumber].title + ': ' + `task${taskNumber + 1}`) || taskText === null) {
                taskText = dataMock[cardNumber].issues[taskNumber].name;
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
                        <object type="image/svg+xml" data="src/images/container/add.svg">
                            <img src="src/images/container/add.png" alt="add">
                        </object>
                    </div>
                    <span>Add card</span>
                </button>
            </div>
        `;
    }  
}