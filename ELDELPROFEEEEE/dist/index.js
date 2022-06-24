"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Select the div element using the id property
const app = document.getElementById("app");
const table = document.getElementById("socies-table");
let socies = [
    {
        nombre: 'Irina',
        apellido: 'Almazan',
        nick: 'Ir1n4',
        edad: 20
    },
    {
        nombre: 'Johnny',
        apellido: 'Arvelo',
        nick: 'J0hnn7',
        edad: 22
    },
    {
        nombre: 'Lucas',
        apellido: 'Santillán',
        nick: 'Luk4s',
        edad: 23
    },
    {
        nombre: 'Rocco',
        apellido: 'Hernandez',
        nick: 'R0cc0',
        edad: 24
    },
];
fetch("http://localhost:5000/socies")
    .then(resp => {
    resp.json()
        .then(data => {
        data.socies.forEach((socie) => {
            let tr = document.createElement("tr");
            //Link
            let link = document.createElement("a");
            link.href = "http://localhost:5000/socie/" + socie.nick;
            link.innerText = socie.nombre;
            //td
            let td_nombre = document.createElement("td");
            td_nombre.appendChild(link);
            let td_apellido = document.createElement("td");
            td_apellido.textContent = socie.apellido;
            let td_nick = document.createElement("td");
            td_nick.textContent = socie.nick;
            let td_edad = document.createElement("td");
            td_edad.textContent = socie.edad.toString(10);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nombre);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_apellido);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nick);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_edad);
            table === null || table === void 0 ? void 0 : table.appendChild(tr);
        });
    });
});
