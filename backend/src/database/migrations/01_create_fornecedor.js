exports.up = function(knex){
    // CRIAR a tabela
    return knex.schema.createTable('fornecedor', table =>{
        table.increments('id').primary();
        table.string('Nome').notNullable();
        table.string('e-mail').notNullable().unique();
        table.string('CPF/CNPJ').notNullable().unique();
    })
}

exports.down = function(knex){
    // VOLTAR a tabela (DELETAR)
    return knex.schema.dropTable('fornecedor');
}