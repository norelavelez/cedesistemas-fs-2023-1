import React, { useState } from "react"
import { Button } from "./Button"

export const App = () => {

    
    
    //eventos 
    //Estructuras de datos
    //const pets = ['bruno', 'lucas', 'simba'];
    // hooks
    const  [pets, setPets] = useState(['bruno', 'lucas', 'simba']);
    const  [inputPet, setinputPet] = useState("");

    // funciones
    const onAddPet = () => {
        alert ('Agregar mascota al arreglo')
        const newPet = inputPet;
        //pets.push(newPet);
        setPets([...pets, inputPet]);
        setinputPet("");
    }

    const onChangeInputPet = (event) => {
        setinputPet(event.target.value);
    }

    return (
        <React.Fragment>
            <h1> Hola react :) </h1>
            <Button name = "Enviar"/>
            <br />
            <Button name = "Descargar"/>
            <br />
            <input value={inputPet} onChange ={onChangeInputPet} type="text" placeholder="Ingresar mascota" />
            <Button name = "Agregar" onPress ={onAddPet}/>
            <ul>
                {
                    pets.map(item => <li>{item}</li>)
                }
            </ul>
        </React.Fragment>
        
    )
}

