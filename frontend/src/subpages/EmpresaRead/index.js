import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

import './styles.css';

import api from '../../services/api';
import EmpresaEditarVinculo from '../EmpresaEditarVinculo';

function EmpresaRead ({id}) {
    const [empresas, setEmpresas] = useState([]);
    const [nomeFantasia, setNomeFantasia] = useState();
    const [uf, setUf] = useState();
    const [cnpj, setCnpj] = useState();

    useEffect(() => {
        api.get(`empresa/${id.id}`).then(response => {
            setEmpresas(response.data);
        })
        empresas.map(empresa => (
            setNomeFantasia(empresa.Nome_Fantasia),
            setUf(empresa.UF),
            setCnpj(empresa.CNPJ)
        ))
    })

    return (
        <div id="mother_box">
            <div id="main_info">
                <h4>ID: {id.id}
                <span>UF: {uf}</span>
                </h4>
                <p>Nome Fantasia: {nomeFantasia}</p>
                <p>CNPJ: {cnpj}</p>
            </div>
            <h3>Fornecedores:</h3>
            {empresas.map(empresa => (
                <div key={empresa.fornecedor_id}>
                    <h4>Fornecedor ID: {empresa.fornecedor_id}</h4>
                    <p>Nome: {empresa.Nome}</p>
                    <p>email: {empresa.email}</p>
                    <p>CPF/CNPJ: {empresa.CPF_CNPJ}</p>
                </div>
            ))}
            <div className="button_box">
                <Popup  trigger={
                <span className="link_span">Editar vínculos</span>
                } position="center">
                    <EmpresaEditarVinculo id={id} />
                </Popup>
                <span className="link_span">Editar</span>
                <span className="link_span">Deletar</span>
            </div>
        </div>
    )
}

export default EmpresaRead;