module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/product/add-product",
      handler: "api::product.product.addProduct",
    },
  ],
};
