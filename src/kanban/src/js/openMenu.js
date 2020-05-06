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
        document.getElementsByClassName('menu')[0].appendChild(document.createElement('li'))
            .setAttribute('class', 'menu-item');
        let menuItemInner = document.createElement('div');
        menuItemInner.setAttribute('class', 'menu-item__inner');
        document.getElementsByClassName('menu-item')[i].appendChild(menuItemInner);
        menuItemInner.innerText = menuItems[i];
    }
}
export function openUserMenuEvent(openMenuEvent) {
    let openedMenu = document.getElementsByClassName('user-menu_open')[0];
    let openMenuButton = document.getElementsByClassName('button_open-menu')[0];
    if (openMenuButton.contains(openMenuEvent.target)){
        if (openedMenu) {
            openMenuButton.style.animation = "arrowUp 0.2s linear forwards";
            openedMenu.remove();
        } else {
            openMenuButton.style.animation = "arrowDown 0.2s linear forwards";
            openUserMenu();
        }
    } else {
        if (openedMenu) {
            openMenuButton.style.animation = "arrowUp 0.2s linear forwards";
            openedMenu.remove();
        }
    }
}