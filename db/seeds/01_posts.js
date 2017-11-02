exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function() {
      // Inserts seed entries
      return knex('posts').insert([
        { id: 1, title: 'hello woild', content: 'crippity crap flibbity floop' }
        // { id: 2, title: 'hello woilds', content: 'crippity crap flibbity floop klerpitty klarp' }

      ])
    }).then(() => {
      knex.raw(`SELECT setval('posts_id_seq', (SELECT MAX(id) FROM posts));`)
    })
}
