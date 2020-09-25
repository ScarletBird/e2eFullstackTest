const connection = require ('../database/connection');

module.exports = {
    // Utilizando o CRUD

    async create(req, res) {
        // Na criação é capturada os dados a inserir no corpo e adicionados ao BD
        const {fornecedor_id, RG, Data_de_Nascimento} = req.body;

        const [id] = await connection('fornecedor_fisico').insert({
            fornecedor_id,
            RG,
            Data_de_Nascimento,
        });

        return res.json({id});
    },

    async read(req, res) {
        // Na leitura é feita a busca dos dados no BD
        const fornecedor_fisico = await connection('fornecedor_fisico').select('*');
        
        return res.json(fornecedor_fisico);
    },

    async update(req, res) {
        // Na atualização, busca-se o id do fornecedor_fisico e recoloca todos os dados a serem atualizados
        const {id} = req.params;
        const {fornecedor_id, RG, Data_de_Nascimento} = req.body;

        await connection('fornecedor_fisico')
        .where('id', id)
        .update({ 
            fornecedor_id,
            RG,
            Data_de_Nascimento,
        })

        return res.json({id});
    },

    async delete(req, res) {
        // Para deletar, busca-se o id e o deleta.
        const {id} = req.params;

        await connection('fornecedor_fisico').where('id', id).del();

        return res.json({id});
    }
}