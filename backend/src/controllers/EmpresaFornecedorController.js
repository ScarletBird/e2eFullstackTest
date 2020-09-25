const connection = require ('../database/connection');

module.exports = {
    // Utilizando o CRUD

    async create(req, res) {
        // Na criação é capturada os dados a inserir no corpo e adicionados ao BD
        const {empresa_id, fornecedor_id} = req.body;

        const [id] = await connection('empresa_fornecedor').insert({
            empresa_id,
            fornecedor_id,
        });

        return res.json({id});
    },

    async read(req, res) {
        // Na leitura é feita a busca dos dados no BD
        const empresa_fornecedor = await connection('empresa_fornecedor').select('*');
        
        return res.json(empresa_fornecedor);
    },

    async update(req, res) {
        // Na atualização, busca-se o id do empresa_fornecedor e recoloca todos os dados a serem atualizados
        const {id} = req.params;
        const {empresa_id, fornecedor_id} = req.body;

        await connection('empresa_fornecedor')
        .where('id', id)
        .update({ 
            empresa_id,
            fornecedor_id,
        })

        return res.json({id});
    },

    async delete(req, res) {
        // Para deletar, busca-se o id e o deleta.
        const {id} = req.params;

        await connection('empresa_fornecedor').where('id', id).del();

        return res.json({id});
    }
}