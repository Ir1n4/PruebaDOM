"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Select the div element using the id property
const app = document.getElementById("app");
//Defino un array de tipo Socie, lo inicio vacio
let socies = [];
//fetch que devuelve los datos
fetch("http://localhost:5000/socies/")
    .then(resp => {
    resp.json()
        .then(data => {
        socies = data.socies;
    });
});
//for loop de cada socie dentro del array 
socies.forEach(socie => {
    let tr = document.createElement("tr");
    //Nombre
    let td_nombre = document.createElement("td");
    td_nombre.textContent = socie.nombre;
    //Apellido
    let td_apellido = document.createElement("td");
    td_apellido.textContent = socie.apellido;
    //Nickname
    let td_nick = document.createElement("td");
    td_nick.textContent = socie.nick;
    //Edad
    let td_edad = document.createElement("td");
    td_edad.textContent = socie.edad.toString(10);
    tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nombre);
    tr === null || tr === void 0 ? void 0 : tr.appendChild(td_apellido);
    tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nick);
    tr === null || tr === void 0 ? void 0 : tr.appendChild(td_edad);
    app === null || app === void 0 ? void 0 : app.appendChild(tr);
});
