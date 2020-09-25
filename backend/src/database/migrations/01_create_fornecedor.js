exports.up = function(knex){
    // CRIAR a tabela
    return knex.schema.createTable('fornecedor', table =>{
        table.increments('id').primary();
        table.string('Nome').notNullable();
        table.string('email').notNullable().unique();
        table.string('CPF_CNPJ').notNullable().unique();
    })
}

exports.down = function(knex){
    // VOLTAR a tabela (DELETAR)
    return knex.schema.dropTable('fornecedor');
}