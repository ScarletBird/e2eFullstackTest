const express = require('express');

const EmpresaController = require('./controllers/EmpresaController');
const FornecedorController = require('./controllers/FornecedorController');
const FornecedorFisicoController = require('./controllers/FornecedorFisicoController');
const EmpresaFornecedorController = require('./controllers/EmpresaFornecedorController');


const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json("Hello World");
})

routes.get('/empresa', EmpresaController.read);
routes.get('/empresa/:id', EmpresaController.readOne);
routes.post('/empresa', EmpresaController.create);
routes.put('/empresa/:id', EmpresaController.update);
routes.delete('/empresa/:id', EmpresaController.delete);

routes.get('/fornecedor', FornecedorController.read);
routes.get('/fornecedor/:id', FornecedorController.readOne);
routes.post('/fornecedor', FornecedorController.create);
routes.put('/fornecedor/:id', FornecedorController.update);
routes.delete('/fornecedor/:id', FornecedorController.delete);

routes.get('/fornecedor_fis', FornecedorFisicoController.read);
routes.post('/fornecedor_fis', FornecedorFisicoController.create);
routes.put('/fornecedor_fis/:id', FornecedorFisicoController.update);
routes.delete('/fornecedor_fis/:id', FornecedorFisicoController.delete);

routes.get('/emp_for', EmpresaFornecedorController.read);
routes.post('/emp_for', EmpresaFornecedorController.create);
routes.put('/emp_for/:id', EmpresaFornecedorController.update);
routes.delete('/emp_for/:id', EmpresaFornecedorController.delete);

module.exports = routes