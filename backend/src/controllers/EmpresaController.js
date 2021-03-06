const connection = require('../database/connection');

module.exports = {
    // Utilizando o CRUD

    async create(req, res) {
        // Na criação é capturada os dados a inserir no corpo e adicionados ao BD
        const {UF, Nome_Fantasia, CNPJ} = req.body;

        const [id] = await connection('empresa').insert({
            UF,
            Nome_Fantasia,
            CNPJ,
        });

        return res.json({id});
    },

    async read(req, res) {
        // Na leitura é feita a busca dos dados no BD
        const empresas = await connection('empresa').select();
        
        return res.json(empresas);

    },

    async readOne(req, res) {
        const {id} = req.params;
        const empresa = await connection('empresa').where('empresa.id', id)
        .leftJoin('empresa_fornecedor', 'empresa.id', 'empresa_fornecedor.empresa_id')
        .leftJoin('fornecedor', 'empresa_fornecedor.fornecedor_id', 'fornecedor.id')
        .leftJoin('fornecedor_fisico', 'fornecedor.id','fornecedor_fisico.fornecedor_id')
        .select('empresa.id','empresa.UF', 'empresa.Nome_Fantasia', 'empresa.CNPJ', 'empresa_fornecedor.fornecedor_id', 'fornecedor.Nome', 'fornecedor.email', 'fornecedor.CPF_CNPJ', 'fornecedor_fisico.RG', 'fornecedor_fisico.Data_de_Nascimento');

        return res.json(empresa);
    },

    async update(req, res) {
        // Na atualização, busca-se o id da empresa e recoloca todos os dados a serem atualizados
        const {id} = req.params;
        const {CNPJ, Nome_Fantasia, UF} = req.body;

        await connection('empresa')
        .where('id', id)
        .update({ 
            CNPJ,
            Nome_Fantasia,
            UF
        })

        return res.json({id});
    },

    async delete(req, res) {
        // Para deletar, busca-se o id e o deleta.
        const {id} = req.params;

        await connection('empresa').where('id', id).del();

        return res.json({id});

    }
}