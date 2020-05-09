export default function openMore(openMoreEvent) {
    let cards = document.getElementsByClassName('list');
    let openedMoreMenu = document.getElementsByClassName('more-menu_open')[0];
    for (let cardNumber = 0; cardNumber < cards.length; cardNumber++) {
        let moreButton = cards[cardNumber].getElementsByClassName('more-svg')[0];
        if (moreButton.contains(openMoreEvent.target)) {
            if (openedMoreMenu) {
                openedMoreMenu.remove();
            } else {
                let menuItems = ['Удалить', 'Good Action', 'Boops'];
                document.getElementsByClassName('list__header')[cardNumber]
                    .appendChild(document.createElement('div'))
                    .setAttribute('class', 'more-menu_open');
                document.getElementsByClassName('more-menu_open')[0]
                    .appendChild(document.createElement('div'))
                    .setAttribute('class', 'more-menu_open__inner');
                document.getElementsByClassName('more-menu_open__inner')[0]
                    .appendChild(document.createElement('ul'))
                    .setAttribute('class', 'menu');
                for (let i = 0; i < menuItems.length; i++) {
                    document.getElementsByClassName('menu')[0].appendChild(document.createElement('li'))
                        .setAttribute('class', 'menu-item');
                    let menuItemInner = document.createElement('div');
                    menuItemInner.setAttribute('class', 'menu-item__inner');
                    document.getElementsByClassName('menu-item')[i].appendChild(menuItemInner);
                    menuItemInner.innerText = menuItems[i];
                }
            }
        } else {
            if (openedMoreMenu) {
                if (document.getElementsByClassName('menu-item__inner')[0] !== undefined &&
                    document.getElementsByClassName('menu-item__inner')[0].contains(openMoreEvent.target)) {
                    document.getElementsByClassName('menu-item__inner')[0].closest('.list').remove();
                    //console.log(document.getElementsByClassName('boards__inner')[0]);
                    if (document.getElementsByClassName('boards__inner')[0].innerHTML.trim() === '') {
                        document.getElementsByClassName('boards__inner')[0]
                            .appendChild(document.createElement('div'))
                            .setAttribute('class', 'boardMessage');
                        let title = document.getElementsByClassName('boardMessage')[0];
                        title.innerText = 'Your list is empty!';
                        title.style.margin = 'auto';
                    }
                }
                openedMoreMenu.remove();
            }
        }
    }
}