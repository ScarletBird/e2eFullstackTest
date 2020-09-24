exports.up = function(knex) {
    // CRIAR a tabela
    return knex.schema.createTable('empresa', table =>{
        table.increments('id').primary();
        table.string('UF').notNullable();
        table.string('Nome_Fantasia').notNullable();
        table.string('CNPJ').notNullable().unique();
    })
}

exports.down = function(knex){
    // VOLTAR a tabela (DELETAR)
    return knex.schema.dropTable('empresa');
}