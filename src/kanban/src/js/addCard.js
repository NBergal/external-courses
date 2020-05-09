export default function addCard(addCardEvent) {
    let addButton = document.getElementsByClassName('button_new-list')[0];
    if (addButton.contains(addCardEvent.target)){
        let card = document.getElementsByClassName('list')[0];
        let board = document.getElementsByClassName('boards__inner')[0];
        let newCard = board.insertBefore(card.cloneNode(true), card);
        newCard.getElementsByClassName('list__container')[0].innerHTML = '';
        console.log(newCard);
        let cardTitle = newCard.getElementsByTagName('span')[0];
        cardTitle.setAttribute('contenteditable', 'true');
        cardTitle.innerHTML = '';
        cardTitle.focus();
    }
}