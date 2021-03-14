module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./styles/shared.scss";`,
      },
    },
  },
};
