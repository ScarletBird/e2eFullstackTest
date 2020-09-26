const connection = require ('../database/connection');

module.exports = {
    // Utilizando o CRUD

    async create(req, res) {
        // Na criação é capturada os dados a inserir no corpo e adicionados ao BD
        const {Nome, email, CPF_CNPJ} = req.body;

        const [id] = await connection('fornecedor').insert({
            Nome,
            email,
            CPF_CNPJ,
        });

        return res.json({id});
    },

    async read(req, res) {
        // Na leitura é feita a busca dos dados no BD
        const fornecedor = await connection('fornecedor').select('*');
        
        return res.json(fornecedor);
    },

    async readOne(req, res) {
        const {id} = req.params;
        const fornecedor = await connection('fornecedor').select().where('id', id);

        return res.json(fornecedor);
    },

    async update(req, res) {
        // Na atualização, busca-se o id do fornecedor e recoloca todos os dados a serem atualizados
        const {id} = req.params;
        const {Nome, email, CPF_CNPJ} = req.body;

        await connection('fornecedor')
        .where('id', id)
        .update({ 
            Nome,
            email,
            CPF_CNPJ,
        })

        return res.json({id});
    },

    async delete(req, res) {
        // Para deletar, busca-se o id e o deleta.
        const {id} = req.params;

        await connection('fornecedor').where('id', id).del();

        return res.json({id});
    }
}