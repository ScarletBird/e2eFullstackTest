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
        const fornecedor = await connection('fornecedor')
        .leftJoin('fornecedor_fisico', 'fornecedor.id', 'fornecedor_fisico.fornecedor_id')
        .select('fornecedor.id', 'fornecedor.Nome', 'fornecedor.email', 'fornecedor.CPF_CNPJ', 'fornecedor_fisico.RG', 'fornecedor_fisico.Data_de_Nascimento');
        
        return res.json(fornecedor);
    },

    async readOne(req, res) {
        const {id} = req.params;
        const fornecedor = await connection('fornecedor').where('fornecedor.id', id)
        .leftJoin('empresa_fornecedor', 'fornecedor.id', 'empresa_fornecedor.fornecedor_id')
        .leftJoin('empresa', 'empresa_fornecedor.empresa_id', 'empresa.id')
        .leftJoin('fornecedor_fisico', 'fornecedor.id','fornecedor_fisico.fornecedor_id')
        .select('fornecedor.id', 'fornecedor.Nome', 'fornecedor.email', 'fornecedor.CPF_CNPJ', 'fornecedor_fisico.RG', 'fornecedor_fisico.Data_de_Nascimento', 'empresa_fornecedor.empresa_id', 'empresa.UF', 'empresa.Nome_Fantasia', 'empresa.CNPJ');
        
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