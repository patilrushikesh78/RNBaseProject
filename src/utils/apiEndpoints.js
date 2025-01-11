
const apiEndpoints = {
    auth: {
        login: `/auth/login`,
    },
    products: {
        list: '/products',
        create: '/products',
        update: (id) => `/products/${id}`,
        delete: (id) => `/products/${id}`,
    },
    categories: {
        list: '/categories',
    }
};

export default apiEndpoints;