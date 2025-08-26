module.exports = {
  routes: [
    {
      method: "POST",
      path: "/waiter/validatePassword",
      handler: "api::waiter.waiter.validateWaiter",
    },
  ],
};
