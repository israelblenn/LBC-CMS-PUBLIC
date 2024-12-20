module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        local: {
          path: '/data/uploads',
        },
      },
    },
  },
  graphql: {
    config: {
      defaultLimit: 100, // Default number of items returned per query
      maxLimit: 2000,    // Maximum number of items allowed per query
    },
  },
});
