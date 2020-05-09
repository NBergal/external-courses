export default function blurTitle(blurTitleEvent) {
    let cards = document.getElementsByClassName('list');
    for (let cardNumber = 0; cardNumber < cards.length; cardNumber++) {
        let cardTitle = cards[cardNumber].getElementsByTagName('span')[0];
        let isTitleFocused = (document.activeElement === cardTitle);
        if (cardTitle) {
            if (cardTitle.contains(blurTitleEvent.target)) {
                if (!isTitleFocused) {
                    cardTitle.setAttribute('contenteditable', 'true');
                }
            }
            else {
                if (cardTitle.innerText === '') {
                    cards[cardNumber].remove();
                }
                else {
                    if (cards[cardNumber].getElementsByClassName('list__container')[0].innerHTML === '' && cardNumber === 0) {
                        cards[cardNumber].getElementsByClassName('list__container')[0].innerHTML += `
                            <div class="button_list-item">
                                <div class="button_list-item__inner" contenteditable=true>
                                </div>
                            </div>
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
            }
        }
    }
}