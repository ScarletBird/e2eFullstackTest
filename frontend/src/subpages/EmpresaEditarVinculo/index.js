import React, { useState, useEffect } from 'react';

import './styles.css';

import api from '../../services/api';

function EmpresaEditarVinculo({id}) {
    const [fornecedores, setFornecedores] = useState([]);
    const [fornecedoresAtual, setFornecedoresAtual] = useState([])
    const [fornecedoresTotal, setFornecedoresTotal] = useState([]);
    
    useEffect(() => {
        api.get('fornecedor').then(response => {
            setFornecedoresTotal(response.data);
        })

        api.get(`emp_for/emp/${id.id}`).then(response => {
            setFornecedoresAtual(response.data);
        })

        fornecedoresAtual.map(fornecedorAtual => (
            setFornecedores([...fornecedores,fornecedorAtual.fornecedor_id])
        ))
    })

    function handleClick(id) {
        const jaSelecionado = fornecedores.findIndex(fornecedor => fornecedor === id)

        if (jaSelecionado >= 0){
            const filtro = fornecedores.filter(fornecedor => fornecedor !== id);
            setFornecedores(filtro);
        } else {
            setFornecedores([...fornecedores, id]);
        }
    }

    return (
        <div id="mother_box-vinculo">
            <ul>
                {fornecedoresTotal.map(fornecedor => (
                    <li 
                    key={fornecedor.id}
                    onClick={() => handleClick(fornecedor.id)}
                    className={fornecedores.includes(fornecedor.id) ? 'active' : ''}>
                        ID: {fornecedor.id}
                    </li>
                ))}
            </ul>
        </div>
    )


}

export default EmpresaEditarVinculo;