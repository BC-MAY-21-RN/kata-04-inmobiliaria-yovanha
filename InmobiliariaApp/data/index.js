const images = [
    require('../img/casaBlanca.jpg'),
    require('../img/casaBlancaDosPisos.jpg'),
    require('../img/casaCristal.jpg'),
    require('../img/casaGrande.jpg'),
    require('../img/casaGris.jpg'),
    require('../img/casaMadera.jpg'),
];

const data = [
    {
        address: '7221 W. Cerritos Ave',
        title: 'Altamira',
        src: images[0],
        bedroom: '2',
        bathroom: '1',
        size: '220 ft²',
        price: '$180/m',
    },
    {
        address: '10530 Lowden St',
        title: 'Bonanza',
        src: images[1],
        bedroom: '3',
        bathroom: '2',
        size: '270 ft²',
        price: '$240/m',
    },
    {
        address: '7460 Bock Ave',
        title: 'Narvarte Golden',
        src: images[2],
        bedroom: '5',
        bathroom: '3',
        size: '420 ft²',
        price: '$480/m',

    },
    {
        address: '8101 Catherine Ave,',
        title: 'Hills',
        src: images[3],
        bedroom: '4',
        bathroom: '3',
        size: '450 ft²',
        price: '$520/m',
    },
    {
        address: '13113 Caravel St,',
        title: 'Pirineos',
        src: images[4],
        bedroom: '1',
        bathroom: '1',
        size: '210 ft²',
        price: '$150/m',
    },
    {
        address: '2066 Stanwood Dr',
        title: 'Woods',
        src: images[5],
        bedroom: '2',
        bathroom: '2',
        size: '300 ft²',
        price: '$260/m',
    },
];

export default data;