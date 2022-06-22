import { Socie } from "./models/socie.model";

// 1. Select the div element using the id property
const app = document.getElementById("app");
//Defino un array de tipo Socie, lo inicio vacio
let socies: Array<Socie>=[];
//fetch que devuelve los datos

fetch("http://localhost:5000/socies/")
.then(resp =>{
    resp.json()
        .then (data=>{
            socies=data.socies;
        })
    });
    //for loop de cada socie dentro del array 
    socies.forEach(socie=>{
        let tr=document.createElement("tr");
        //Nombre
        let td_nombre=document.createElement("td");td_nombre.textContent=socie.nombre;
        //Apellido
        let td_apellido=document.createElement("td");td_apellido.textContent=socie.apellido;
        //Nickname
        let td_nick=document.createElement("td");td_nick.textContent=socie.nick
        //Edad
        let td_edad=document.createElement("td");td_edad.textContent=socie.edad.toString(10);
        
        tr?.appendChild(td_nombre);
        tr?.appendChild(td_apellido);
        tr?.appendChild(td_nick);
        tr?.appendChild(td_edad);
        app?.appendChild(tr);
    });