import React, { useState, useEffect } from 'react';
import './styles.css';

import api from '../../services/api';

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
                <div className="hold-div" key={fornecedor.id}>
                    <h4>ID: {fornecedor.id}</h4>
                    <p>Nome: {fornecedor.Nome}</p>
                    <p>email: {fornecedor.email}</p>
                    <p>CPF/CNPJ: {fornecedor.CPF_CNPJ}</p>
                </div>
            ))}
        </div>
    );
};

export default FornecedorReadAll;