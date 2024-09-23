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
  });
  