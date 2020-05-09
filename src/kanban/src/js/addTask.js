export default function addTask(addTaskEvent) {
    let dropdown = document.getElementsByClassName('dropdown')[0];
    if (dropdown) {
        let card = dropdown.closest('.list');
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
}