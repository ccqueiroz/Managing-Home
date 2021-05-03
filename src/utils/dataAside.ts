export default [
    {

        title: 'Dashboard',
        id: 1,
        href: '/dashboard',
        sub: false,
        submenu: []
    },
    // {
    //     title: 'Supermercado',
    //     id: 2,
    //     href: '/supermarket',
    //     sub: true,
    //     submenu: [
    //         {
    //             id: 1,
    //             title: 'Criar Lista',
    //             bgColor: '#4E41F0',
    //             type: 'newList'
    //         },
    //         {
    //             id: 2,
    //             title: 'Ir às Compras',
    //             bgColor: '#E44C4E',
    //             type: 'purchase'

    //         },
    //         {
    //             id: 3,
    //             title: 'Comprar itens avulsos',
    //             bgColor: '#3ad41c',
    //             type: 'buySingle'

    //         },

    //     ]
    // },
    {
        title: 'Entrada',
        id: 3,
        href: '/list/:entrada',
        sub: false,
        submenu: []
    },

    {
        title: 'Saída',
        id: 4,
        href: '/list/:saida',
        sub: false,
        submenu: []
    },
    {
        title: 'Sair',
        id: 5,
        href: '/logout',
        sub: false,
        submenu: []
    },

]