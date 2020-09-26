import React from 'react';

import './styles.css';
import EmpresaReadAll from '../../subpages/EmpresaReadAll';
import FornecedorReadAll from '../../subpages/FornecedorReadAll';

const Home = () => {
    return(
        <div id="page-home">
            <header>
                <h1>Empresas e Fornecedores</h1>
            </header>
            <div className="content">
                <main>
                    <h2> Empresas </h2>
                    <EmpresaReadAll/>
                    <button> Criar nova empresa </button>
                </main>
                <main>
                    <h2> Fornecedores </h2>
                    <FornecedorReadAll/>
                    <button> Criar novo fornecedor </button>
                </main>
            </div>
        </div>
    );
};

export default Home;