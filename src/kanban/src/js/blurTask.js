export default function blurTask(event) {
    let firstVard = document.getElementsByClassName('list__container')[0];
    let newTaskInner = firstVard.getElementsByClassName('button_list-item__inner');
    for (let i = 0; i < newTaskInner.length; i++) {
        if (!newTaskInner[i].contains(event.target)) {
            window.localStorage.setItem('backlog: ' + `task${[i + 1]}`, newTaskInner[i].textContent);
        }
    }
}