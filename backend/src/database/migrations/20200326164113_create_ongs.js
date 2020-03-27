// metodo up é pra criação de tabelas

exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('cidade').notNullable();
        table.string('uf', 2).notNullable();
    });
};

//metodo dowm é pra caso de algum problema , podera voltar atras no bd, por ex excluir uma table
exports.down = function (knex) {
    return knex.schema.dropTable('ongs');
};
