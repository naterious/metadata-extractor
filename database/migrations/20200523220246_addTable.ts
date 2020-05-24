import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable("books", (table) => {
    table
      .increments("bookId")
      .unique()
      .primary()
      .notNullable();

    table
      .integer("id")
      .notNullable();
    
    table
      .string("title")
      .index("bookTitleIdx")
      .nullable();

    table
      .string("author")
      .index("bookAuthorIdx")
      .nullable();

    table
      .string("publisher")
      .notNullable();

    table
      .string("publicationDate")
      .index("bookPublishDateIdx")
      .notNullable();

    table
      .string("language")
      .nullable();

    table
      .string("subject", 255)
      .nullable();

    table
      .string("licenseRights")
      .nullable();
  });
}


export async function down(knex: Knex): Promise<any> {
  knex.schema.dropTable('books')
}

