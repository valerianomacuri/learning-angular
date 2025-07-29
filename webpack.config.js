module.exports = {
  module: {
    rules: [
      {
        test: /\.(html|css|ts)$/,
        resourceQuery: /raw/,
        type: "asset/source",
      },
    ],
  },
};
