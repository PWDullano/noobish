
exports.up = function(knex, Promise) {
knex.schema.table('users', function (table) {
  table.dropColumn('fb_id');
  table.string('fb_id');
})
};

exports.down = function(knex, Promise) {
  knex.schema.table('users', function (table) {
  table.dropColumn('fb_id');
  table.integer('fb_id');
  })
};
