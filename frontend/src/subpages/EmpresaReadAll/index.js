import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

import './styles.css';

import api from '../../services/api';
import EmpresaRead from '../EmpresaRead';

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
                <Popup trigger={
                    <div className="hold-div" key={empresa.id}>
                    <h4>ID: {empresa.id}
                    <span>UF: {empresa.UF}</span>
                    </h4>
                    
                    <p>Nome Fantasia: {empresa.Nome_Fantasia}</p>
                    <p>CNPJ: {empresa.CNPJ}</p>
                </div>
                } position="center">
                    <EmpresaRead id={empresa} />
                </Popup>
                
            ))}
        </div>
    );
};

export default EmpresaReadAll;