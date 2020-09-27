import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

import './styles.css';

import api from '../../services/api';
import FornecedorRead from '../FornecedorRead';

const FornecedorReadAll = () => {
    const [fornecedores, setFornecedores] = useState([]);

    useEffect(() => {
        api.get('fornecedor').then(response => {
            setFornecedores(response.data);
        })
    })

    return (
        <div>
            {fornecedores.map(fornecedor => (
                <Popup trigger={
                    <div className="hold-div" key={fornecedor.id}>
                        <h4>ID: {fornecedor.id}</h4>
                        <p>Nome: {fornecedor.Nome}</p>
                        <p>email: {fornecedor.email}
                        {(fornecedor.Data_de_Nascimento) ? 
                        <span>Data de Nascimento: {new Date(fornecedor.Data_de_Nascimento).toLocaleDateString()}
                        </span> : <></>}
                        </p>
                        <p>CPF/CNPJ: {fornecedor.CPF_CNPJ}
                            {(fornecedor.RG) ? <span>RG: {fornecedor.RG}</span> : <></>}
                        </p>
                    </div>
                } position="center">
                    <FornecedorRead id={fornecedor} />
                </Popup>
            ))}
        </div>
    );
};

export default FornecedorReadAll;