import axios from "axios";
import React, { useEffect, useState } from "react";


export default function HomeUser() {
    const [user, setUser] = useState([])
    const [textoPesquisa, setTextoPesquisa] = useState("")
    const [resultado, setResultado] = useState([])

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
    };

    const buscar = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/usuarios?nome=${textoPesquisa}`,
                {
                    headers: {Authorization: `Bearer ${token}`}
                }
            )
            setResultado(response.data)
        } catch (error) {
            console.log("Erro: ", error);
        }
    };

    useEffect(() => {
        listar()
    }, [])

    return (
        <div>
            <h1>Tabela de Usuários</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
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
            <div>
                <input
                    placeholder="buscar"
                    type="text"
                    value={textoPesquisa}
                    onChange={(e) => setTextoPesquisa(e.target.value)}
                />
                <button onClick={buscar}>enter</button>
            </div>
            <div >
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultado.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                                <td>{user.telefone}</td>
                                <td>{user.tipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}