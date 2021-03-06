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
        bathroom: '1',
        bedroom: '2',
        price: '$180/m',
        rating: '4.5',
        src: images[0],
        size: '220 ft²',
        title: 'Altamira',
    },
    {
        address: '10530 Lowden St',
        bathroom: '2',
        bedroom: '3',
        price: '$240/m',
        rating: '4.8',
        size: '270 ft²',
        src: images[1],
        title: 'Bonanza',
    },
    {
        address: '7460 Bock Ave',
        bathroom: '3',
        bedroom: '5',
        price: '$480/m',
        rating: '4.8',
        size: '420 ft²',
        src: images[2],
        title: 'Narvarte Golden',
    },
    {
        address: '8101 Catherine Ave',
        bathroom: '3',
        bedroom: '4',
        price: '$520/m',
        rating: '4.9',
        size: '450 ft²',
        src: images[3],
        title: 'Hills',
    },
    {
        address: '13113 Caravel St',
        bathroom: '1',
        bedroom: '1',
        price: '$150/m',
        rating: '4.5',
        src: images[4],
        size: '210 ft²',
        title: 'Pirineos',
    },
    {
        address: '2066 Stanwood Dr',
        bathroom: '2',
        bedroom: '2',
        price: '$260/m',
        rating: '4.7',
        size: '300 ft²',
        src: images[5],
        title: 'Woods',
    },
];

export default data;