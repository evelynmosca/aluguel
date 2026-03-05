import React, { useState, useEffect } from "react";
import axios from 'axios'


export default function HomeUser() {
    const [user, setUser] = useState([])
    const [filter, setFilter] = useState([])
    const [textFilter, setTextFilter] = useState('')

    const token = localStorage.getItem('token')

    const listar = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/usuarios',
                {
                    headers: {Authorization: `Bearer ${token}`}
                }
            )
            setUser(response.data)
        } catch (error) {
            console.log("Erro: ", error);
        }
    }

    const pesquisar = async ()=>{
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/usuarios?nome=${textFilter}`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                }
            )
            setFilter(response.data)
        } catch (error) {
            
        }

    }

    useEffect(() => {
        listar()
    }, [])

    return (
        <div>
            <p>Essa é a página Home!!!</p>
            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.nome}</td>
                                <td>{u.email}</td>
                                <td>{u.telefone}</td>
                                <td>{u.tipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Digite um nome de usuário"
                    value={textFilter}
                    onChange={(e)=>{setTextFilter(e.target.value)}}
                />
                <button onClick={pesquisar}>Pesquisar</button>
                
            </div>
            <div><table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {filter.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.nome}</td>
                            <td>{u.email}</td>
                            <td>{u.telefone}</td>
                            <td>{u.tipo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

        </div>
    )
}