exports.up = function(knex) {
    // CRIAR a tabela
    return knex.schema.createTable('empresa_fornecedor', table =>{
        table.increments('id').primary();
        table.integer('empresa_id').unsigned().notNullable();
        table.foreign('empresa_id').references('id').inTable('empresa');
        table.integer('fornecedor_id').unsigned().notNullable();
        table.foreign('fornecedor_id').references('id').inTable('fornecedor');
    })
}

exports.down = function(knex) {
    // VOLTAR a tabela (DELETAR)
    return knex.schema.dropTable('empresa_fornecedor');
}