import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

import './styles.css';

import api from '../../services/api';

function FornecedorRead ({id}) {
    const [fornecedores, setFornecedores] = useState([]);
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [cpfcnpj, setCpfcnpj] = useState();
    const [rg, setRg] = useState();
    const [dataNasc, setDataNasc] = useState();

    useEffect(() => {
        api.get(`fornecedor/${id.id}`).then(response => {
            setFornecedores(response.data);
        })
        fornecedores.map(fornecedor => (
            setNome(fornecedor.Nome),
            setEmail(fornecedor.email),
            setCpfcnpj(fornecedor.CPF_CNPJ),
            setRg(fornecedor.RG),
            setDataNasc(fornecedor.Data_de_Nascimento)
        ))
    })

    return (
        <div id="mother_box">
            <div id="main_info">
                <h4>ID: {id.id}</h4>
                <p>Nome: {nome}</p>
                <p>email: {email}
                {(dataNasc) ? 
                <span>Data de Nascimento: {new Date(dataNasc).toLocaleDateString()}
                </span> : <></>}
                </p>
                <p>CPF/CNPJ: {cpfcnpj}
                    {(rg) ? <span>RG: {rg}</span> : <></>}
                </p>
            </div>
            <h3>Empresas vinculadas:</h3>
            {fornecedores.map(fornecedor => (
                <div key={fornecedor.empresa_id}>
                    <h4>Empresa ID: {fornecedor.empresa_id}</h4>
                    <p>Nome Fantasia: {fornecedor.Nome_Fantasia}</p>
                </div>
            ))}
            <div className="button_box">
                <span className="link_span">Editar vínculos</span>
                <span className="link_span">Editar</span>
                <span className="link_span">Deletar</span>
            </div>
        </div>
    )
}

export default FornecedorRead;