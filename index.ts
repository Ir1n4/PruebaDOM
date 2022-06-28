import { Socie } from "./models/socie.model";
// 1. Select the div element using the id property
const app = document.getElementById("app");
const table = document.getElementById("socies-table");
let socies: Array<Socie>=[
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
        .then (data => {
            data.socies.forEach((socie:Socie) => {

                let tr = document.createElement("tr");
                //Link
                let link = document.createElement("a");
                link.href = "http://localhost:5000/socie/"+socie.nick;
                link.innerText = socie.nombre
                
                //td
                let td_nombre = document.createElement("td");
                td_nombre.appendChild(link);
                
                let td_apellido = document.createElement("td");
                td_apellido.textContent = socie.apellido;
            
                let td_nick = document.createElement("td");
                td_nick.textContent = socie.nick;
            
                let td_edad = document.createElement("td");
                td_edad.textContent = socie.edad.toString(10);
            
                //Boton
                let td_button = document.createElement("button");
                td_button.textContent = "Mostrar";
                td_button.onclick = function(){
                    showSocie(socie);
                };
                tr?.appendChild(td_nombre);
                tr?.appendChild(td_apellido);
                tr?.appendChild(td_nick);
                tr?.appendChild(td_edad);
                tr?.appendChild(td_button);
                table?.appendChild(tr);
             });

             function showSocie (socie:Socie){
                fetch("http://localhost:5000/socie/"+socie.nick)
                .then (resp => {
                    resp.json()
                    .then (data => {
                        // aca dentro debe ir todo el cod. q genera el html para mostrar el usuario dentro de form.
                        //LIMPIAR EL CONTENT DE app antes! 
                        let form =document.createElement("form");
                        //imput nombre 
                        let input_nombre = document.createElement("input");
                        input_nombre.type = "text";
                        input_nombre.value = socie.nombre;
                        input_nombre.className = "input-edit-socie";
                        //input apellido
                        let input_apellido = document.createElement("input");
                        input_apellido.value = socie.apellido;
                        input_apellido.className = "input-edit-socie";
                        //input nick 
                        let input_nick = document.createElement("input");
                        input_nick.value = socie.nick;
                        input_nick.className = "input-edit-socie";

                        form.appendChild(input_nombre);
                        form.appendChild(input_apellido);
                        form.appendChild(input_nick);

                        let p = document.createElement("p");
                        p.textContent = data.socie.nombre;
                        
                        app?.appendChild(p);
                    })
                });
            }
