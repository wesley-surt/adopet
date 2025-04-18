import { StorageService } from "../services/StorageService.js";

const tagEnter = document.querySelectorAll('.menu_entrar');
const tagExit = document.querySelectorAll('.menu_sair');

const token = StorageService.get('token');

if (token && tagEnter.length > 0) tagEnter.forEach(e => e.classList.add('hiddenEnterExit'))
else if (!token) tagExit.forEach(e => e.classList.add('hiddenEnterExit'));

