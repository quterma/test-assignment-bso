export default () => ({
  io: {
    enabled: true,
    config: {
      contentTypes: ['product', 'user'],
      events: [
        {
          name: 'product.create',
          description: 'Notify on product creation',
          handler: async ({ strapi, result }) => {
            strapi.$io.emit('product.created', {
              id: result.id,
              title: result.title,
              price: result.price,
            });

            console.log(`Product created: ${result.title} (ID: ${result.id})`);
          },
        },
        {
          name: 'product.update',
          description: 'Notify on product update',
          handler: async ({ strapi, result }) => {
            strapi.$io.emit('product.updated', {
              id: result.id,
              title: result.title,
              price: result.price,
            });

            console.log(`Product updated: ${result.title} (ID: ${result.id})`);
          },
        },
        {
          name: 'product.delete',
          description: 'Notify on product deletion',
          handler: async ({ strapi, params }) => {
            strapi.$io.emit('product.deleted', {
              id: params.where.id,
            });

            console.log(`Product deleted: ID ${params.where.id}`);
          },
        },
        {
          name: 'user.update',
          description: 'Notify on user update',
          handler: async ({ strapi, result }) => {
            strapi.$io.emit('user.updated', {
              id: result.id,
              email: result.email,
            });

            console.log(`User updated: ${result.email} (ID: ${result.id})`);
          },
        },
      ],
    },
  },
});
