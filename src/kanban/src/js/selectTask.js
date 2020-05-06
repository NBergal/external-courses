import fillDropdown from './fillDropdown.js';
import {dataMock} from './dataMock.js';
export default function selectTask(selectTaskEvent) {
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
            } else {
                fillDropdown(dataMock, card, i);
            }
        }
    }
}