"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PostSchema extends Schema {
  up() {
<<<<<<< HEAD
    this.create("posts", table => {
      table.increments();
      table.string("title").notNullable();
      table.string("content").notNullable();
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("users.id");
      table.integer("category_id").unsigned();
      table.foreign("category_id").references("categories.id");
      table.timestamps();
    });
=======
    this.create('posts', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('content').notNullable()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.integer('category_id').unsigned()
      table.foreign('category_id').references('categories.id')
      table.timestamps()
    })
>>>>>>> 90299ea955d7064c5ba2ff391b8455334a913436
  }

  down() {
    this.drop("posts");
  }
}

module.exports = PostSchema;
