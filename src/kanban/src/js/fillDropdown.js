export default function fillDropdown(dataMock, targetCard, index) {
    let dropdown = document.createElement('div');
    dropdown.setAttribute('class', 'dropdown');
    targetCard.insertBefore(dropdown, targetCard.getElementsByClassName('list__footer')[0]);
    targetCard.getElementsByClassName('dropdown')[0]
        .appendChild(document.createElement('ul'))
        .setAttribute('class', 'dropdown__inner');
    for (let cardNumber = index - 1; cardNumber < index; cardNumber++) {
        let dataMockTitle = dataMock[cardNumber].title;
        let amountOfKeys = 0;
        for (let i = 0; i < localStorage.length; i++) {
            if(localStorage.key(i).startsWith(dataMockTitle)) {
                amountOfKeys++;
            }
        }
        let taskNumberEnd = dataMock[cardNumber].issues.length;
        if (taskNumberEnd > amountOfKeys && amountOfKeys > 0) {
            taskNumberEnd += amountOfKeys;
        }
        if (taskNumberEnd < amountOfKeys && amountOfKeys > 0) {
            taskNumberEnd += amountOfKeys - taskNumberEnd;
        }
        for (let taskNumber = 0; taskNumber < taskNumberEnd; taskNumber++) {
            let taskText = window.localStorage.getItem(dataMock[cardNumber].title + ': ' + `task${taskNumber + 1}`);
            if (taskText === null) {
                taskText = dataMock[cardNumber].issues[taskNumber].name;
            }
            targetCard.getElementsByClassName('dropdown__inner')[0]
                .appendChild(document.createElement('li'))
                .setAttribute('class', 'dropdown__item');
            let dropdownTask = targetCard.getElementsByClassName('dropdown__item')[taskNumber]
                .appendChild(document.createElement('div'));
            dropdownTask.setAttribute('class', 'dropdown__item__inner');
            dropdownTask.innerText = taskText.trim();
        }
    }
}