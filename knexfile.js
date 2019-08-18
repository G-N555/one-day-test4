// Update with your config settings.

module.exports = {
  production: {
    client: "pg",
    connection:
      process.env.PORT || `postgres://${process.env.USER}/127.0.0.1:5432/test4`
  }
};
