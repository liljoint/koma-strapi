module.exports = {
  routes: [
    {
      method: "POST",
      path: "/request-order/get-current-request-order",
      handler: "api::request-order.request-order.getCurrentRequestOrder",
    },
    {
      method: "POST",
      path: "/request-order/update-request-order",
      handler: "api::request-order.request-order.updateRequestOrder",
    },
  ],
};
