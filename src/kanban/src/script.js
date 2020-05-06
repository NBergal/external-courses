import {dataMock} from './js/dataMock.js';
import {openUserMenuEvent} from './js/openMenu.js';
import fillBoards from './js/fillBoards.js';
import addTask from './js/addTask.js';
import selectTask from './js/selectTask.js';
import blurTask from './js/blurTask.js';
window.addEventListener('click', openUserMenuEvent);
window.addEventListener('click', selectTask);
window.addEventListener('click', addTask);
window.addEventListener('click', blurTask);
window.onload = function (){
    fillBoards(dataMock);
};