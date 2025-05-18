module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/tables/create-and-open",
      handler: "api::table.table.createAndOpenTable",
    },
  ],
};
