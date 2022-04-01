module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5433),
      database: env("DATABASE_NAME", "rodrigo-blog-api"),
      user: env("DATABASE_USERNAME", "rodsnts"),
      password: env("DATABASE_PASSWORD", "chegada11."),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
