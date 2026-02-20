import axios from "axios";
import React, {useEffect, useState} from "react";


export default function HomeUser(){
    const token = localStorage.getItem('token')

    const listar = async ()=>{
        const response = await axios.get('http://127.0.0.1:8000/api/usuarios')
        console.log(response.data[0]);
    }

    useEffect(()=>{
        listar()
    },{})

    return(
        <div>
            <h1>Tabela de Usuários</h1>
                <table border="1">
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                    </tr>
                    <tr>
                        <td>xxx</td>
                        <td>xxx</td>
                    </tr>
                    <tr>
                        <td>xxx</td>
                        <td>xxx</td>
                    </tr>
                </table>
            <p>{token}</p>
        </div>
    )
}