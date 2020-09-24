exports.up = function(knex) {
    // CRIAR a tabela
    return knex.schema.createTable('fornecedor_fisico', table =>{
        table.increments('id').primary();
        table.integer('fornecedor_id').unsigned().notNullable();
        table.foreign('fornecedor_id').references('id').inTable('fornecedor');
        table.string('RG').notNullable().unique();
        table.date('Data_de_Nascimento').notNullable();
    })
}

exports.down = function(knex) {
    // VOLTAR a tabela (DELETAR)
    return knex.schema.dropTable('fornecedor_fisico');
}