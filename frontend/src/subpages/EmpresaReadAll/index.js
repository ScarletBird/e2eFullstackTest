import React, { useState, useEffect } from 'react';
import './styles.css';

import api from '../../services/api';

const EmpresaReadAll = () => {
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        api.get('empresa').then(response => {
            setEmpresas(response.data);
        })
    })

    return (
        <div>
            {empresas.map(empresa => (
                <div className="hold-div" key={empresa.id}>
                    <h4>ID: {empresa.id}
                    <span>UF: {empresa.UF}</span>
                    </h4>
                    
                    <p>Nome_Fantasia: {empresa.Nome_Fantasia}</p>
                    <p>CNPJ: {empresa.CNPJ}</p>
                </div>
            ))}
        </div>
    );
};

export default EmpresaReadAll;