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
        const empresas = await connection('empresa').select('*');
        
        return res.json(empresas);
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