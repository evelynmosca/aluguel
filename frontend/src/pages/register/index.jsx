import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [tipo, setTipo] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    const cadastrar = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/register/", 
                {
                    username: nome,
                    email: email,
                    telefone: telefone,
                    tipo: tipo,
                    password: password
                }

            )

            const resp = await axios.post('http://127.0.0.1:8000/api/token/',
                {
                    username: nome,
                    password: password,
                }
            )

            localStorage.setItem('token', resp.data.access)
            
            navigate('/homeuser')

        } catch (error) {
            console.log("Erro:", error);
            setMessage("Erro ao cadastrar usuário.")
        }
    }

    return (
        <div className="container">
            <section className="section">

                <p className="user">Register</p>

                <p>Nome</p>
                <input
                    type="nome"
                    className="caixa"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                />

                <p>Email</p>
                <input
                    type="email"
                    className="caixa"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                />

                <p>Telefone</p>
                <input
                    className="caixa"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="Digite seu telefone"
                />

                <p>Tipo</p>
                <select
                    className="caixa"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                >
                    <option value="">Selecione</option>
                    <option value="LOCADOR">Locador</option>
                    <option value="LOCATARIO">Locatário</option>
                </select>

                <p>Senha</p>
                <input
                    type="password"
                    className="caixa"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                />

                <p>Confirmar Senha</p>
                <input
                    type="password"
                    className="caixa"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirme sua senha"
                />

                <div className="text_1">
                    <p>{message}</p>
                </div>

                <button className="btn_1" onClick={cadastrar}>
                    Cadastrar
                </button>
            </section>
        </div>
    )
}