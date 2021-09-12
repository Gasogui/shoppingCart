// data.js
//import Image from 'react-bootstrap/Image';

//-- inpor img salad --
import SMexicana from '../assets/img/salad/salad-mexicana.jpg';
import SAtum from '../assets/img/salad/salad-atun.jpg';
import SBaru from '../assets/img/salad/salad-baru.jpg';
import SMediterranea from '../assets/img/salad/salad-mediterranea.jpg';
import SGriega from '../assets/img/salad/salad-griega.jpg';
import SSinuana from '../assets/img/salad/salad-sinuana.jpg';

//-- import img bowls --
import BMexicano from '../assets/img/bowls/bowl_mexicano.png';
import BBaru from '../assets/img/bowls/bowl_baru.jpg';
import BNikkei from '../assets/img/bowls/bowl_nikkei.jpg';
import BHindu from '../assets/img/bowls/bowl_hindu.jpg';
import BToscano from '../assets/img/bowls/bowl_toscano.jpg';

//-- import img wraps --
import WBaru from '../assets/img/wraps/wrap_baru.jpg';
import WTresJamones from '../assets/img/wraps/wrap_tres_jamones.jpeg';
import WPolloGrillado from '../assets/img/wraps/wrap_pollo_grillado.jpg';
import WLomoCerdoAsado from '../assets/img/wraps/wrap_lomo_cerdo_asado.png';
import WVegano from '../assets/img/wraps/wrap_vegano.jpg';
import WBurrito from '../assets/img/wraps/wrap_burrito.jpg';

//-- import img pizzas --
import PBaru from '../assets/img/pizzas/pizza_baru.png';
import PMediterranea from '../assets/img/pizzas/pizza_mediterranea.jpg';
import PNapalotina from '../assets/img/pizzas/pizza_napolitana.jpg';
import PHwaiana from '../assets/img/pizzas/pizza_hawaian.jpg';
import PBurrata from '../assets/img/pizzas/pizza_burrata.jpg';

//-- Information on each of the products --
const data = {
    products: [
        {
            id: '1',
            name: 'Mexicana',
            longName: 'Ensalada mexicana',
            ingredients: 'Mix de lechugas, pechuga grillada, maíz tierno, pico de gallo, frijol negro, aguacate, tomate en cascos, queso fresco, jalapeños, cilantro fresco, nachos, brotes orgánicos y salsa mexicana.',
            price: 16000,
            amount: 0,
            category: 'Ensaladas',
            imgPath: SMexicana,            
        },
        {
            id: '2',
            name: 'De atún',
            longName: 'Ensalada de atún',
            ingredients: 'Lechuga romana, cebolla caramelizada, calabacín, maíz tierno, hierba buena, tomate en gajos, brotes orgánicos, ajonjolí, aguacate, lomito de atún y vinagreta al gusto.',
            price: 16000,
            amount: 0,
            category: 'Ensaladas',
            imgPath: SAtum,
        },
        {
            id: '3',
            name: 'Barú',
            longName: 'Ensalada barú',
            ingredients: 'Rúgula, albahaca, tomates cherry, cebolla caramelizada, pimentones asados, aceitunas verdes, aguacate, queso fresco, pechuga de pavo, salsa de aguacate.',
            price: 17000,
            amount: 0,
            category: 'Ensaladas',
            imgPath: SBaru,
        },
        {
            id: '4',
            name: 'Mediterránea',
            longName: 'Ensalada mediterránea',
            ingredients: 'Mix de lechugas, aceitunas verdes y negras, mozzarella, tomate deshidratado, almendras, pepino, albahaca, roast beef, y pesto ligero.',
            price: 19000,
            amount: 0,
            category: 'Ensaladas',
            imgPath: SMediterranea,
        },
        {
            id: '5',
            name: 'Griega',
            longName: 'Ensalada griega',
            ingredients: 'Mix de lechugas, tomates deshidratados, pepino, queso fresco, aceitunas moradas, almendras, albahaca, cubos de tomate, pechuga a las finas hierbas y vinagreta balsámica.',
            price: 17000,
            amount: 0,
            category: 'Ensaladas',
            imgPath: SGriega,
        },
        {
            id: '6',
            name: 'Sinúana',
            longName: 'Ensalada sinúana',
            ingredients: 'Mix de lechugas, pimentón rojo, pimentón verde, queso fresco, maduritos, zanahoria, cerdo asado desmechado y vinagreta al gusto.',
            price: 17000,
            amount: 0,
            category: 'Ensaladas',
            imgPath: SSinuana,
        },
        {
            id: '7',
            name: 'Mexicano',
            longName: 'Bowl mexicano',
            ingredients: 'Arroz integral, frijol negro, tomates cherry, guacate, repollo morado, cilantro fresco, cerdo asado desmechado, cebolla caramelizada, brotes orgánicos, maíz tierno y salsa mexicana.',
            price: 17000,
            amount: 0,
            category: 'Bowls',
            imgPath: BMexicano,
        },
        {
            id: '8',
            name: 'Barú',
            longName: 'Bowl barú ',
            ingredients: 'Arroz integral, pepino, berenjena asada, aguacate, semillas de sésamo, tomate en gajos, huevos cocidos, rúgula, pechuga de pavo, salsa pesto, salsa de aguacate.',
            price: 17000,
            amount: 0,
            category: 'Bowls',
            imgPath: BBaru,
        },
        {
            id: '9',
            name: 'Nikkei',
            longName: 'Bowl nikkei',
            ingredients: 'Arroz integral, mix de lechugas, aguacate, ajonjolí, brotes orgánicos, rábanos, salmón ahumado y salsa nikkei.',
            price: 17000,
            amount: 0,
            category: 'Bowls',
            imgPath: BNikkei,
        },
        {
            id: '10',
            name: 'Hindú',
            longName: 'Bowl hindú',
            ingredients: 'Arroz integral, falafel, almendra rebanada, mango, zanahoria, rábano, cilantro fresco, hierba buena, ajonjolí, espinaca y vinagreta hindú.',
            price: 17000,
            amount: 0,
            category: 'Bowls',
            imgPath: BHindu,
        },
        {
            id: '11',
            name: 'Toscano',
            longName: 'Bowl toscano',
            ingredients: 'Arroz integral, aceitunas, pepino, espinaca, mozzarella de búfala, albahaca, champiñones, tomate deshidratado,  brotes orgánicos, salsa pesto, pechuga grillada, vinagreta balsámica.',
            price: 14000,
            amount: 0,
            category: 'Bowls',
            imgPath: BToscano,
        },
        {
            id: '12',
            name: 'Barú',
            longName: 'Wrap barú',
            ingredients: 'Base de tortilla (espinaca, tradicional, pimentón o integral) mix de lechugas,cebolla caramelizada, aceitunas moradas, pepino, tomate en cubos,  uva pasa, jamón de pavo, queso holandés, albahaca.',
            price: 18000,
            amount: 0,
            category: 'Wraps',
            imgPath: WBaru,
        },
        {
            id: '13',
            name: 'Tres Jamones',
            longName: 'Wrap tres jamones',
            ingredients: 'Base de tortilla (espinaca, tradicional, pimentón o integral) mix de lechugas, calabacín, pimiento asado, pepino, tomate cherry, jamón de pavo, jamón ahumado, queso mozzarella, zanahoria.',
            price: 17000,
            amount: 0,
            category: 'Wraps',
            imgPath: WTresJamones,
        },
        {
            id: '14',
            name: 'Pollo Grillado',
            longName: 'Wrap pollo grillado',
            ingredients: 'Base de tortilla (espinaca, tradicional, pimentón o integral) mix de lechugas,rábano, zanahoria, repollo morado, queso mozzarella, pollo grillado, berenjena asada, pimentón asado.',
            price: 17000,
            amount: 0,
            category: 'Wraps',
            imgPath: WPolloGrillado,
        },
        {
            id: '15',
            name: 'De lomo de serdo asado',
            longName: 'Wrap de lomo de serdo asado ',
            ingredients: 'Base de tortilla (espinaca, tradicional, pimentón o integral) mix de lechugas, frijoles negros, maíz dulce, cerdo asado desmechado, hierbabuena, cebolla confitada, queso fresco, salsa de aguacate.',
            price: 17000,
            amount: 0,
            category: 'Wraps',
            imgPath: WLomoCerdoAsado,
        },
        {
            id: '16',
            name: 'Vegano',
            longName: 'Wrap vegano',
            ingredients: 'Base de tortilla (espinaca, tradicional, pimentón o integral) mix de lechugas, falafel, menta, berenjena asada, pimentón verde y rojo, aceitunas negras, cilantro, salsa a elegir.',
            price: 15000,
            amount: 0,
            category: 'Wraps',
            imgPath: WVegano,
        },
        {
            id: '17',
            name: 'Burrito',
            longName: 'Wrap burrito',
            ingredients: 'Base de tortilla (espinaca, tradicional, pimentón o integral) lechuga crespa, frijoles negros, arroz integral, queso mozzarella, maíz, tomate, jalapeños, pimentón rojo, pimentón, miel mostaza y mexicana.',
            price: 17000,
            amount: 0,
            category: 'Wraps',
            imgPath: WBurrito,
        },
        {
            id: '18',
            name: 'Barú',
            longName: 'Pizza barú ',
            ingredients: 'Queso mozzarella bajo en grasa, jamón ahumado, pollo desmechado, bocadillo, tomate cherry, base napolitana, brotes y mix de hojas.',
            price: 19000,
            amount: 0,
            category: 'Pizzas',
            imgPath: PBaru,
        },
        {
            id: '19',
            name: 'Mediterránea',
            longName: 'Pizza mediterránea',
            ingredients: 'Queso mozzarella bajo en grasa, champiñón portobello relleno, albahaca, brotes orgánicos y pesto y salsa napolitana, tomates cherry.',
            price: 18000,
            amount: 0,
            category: 'Pizzas',
            imgPath: PMediterranea,
        },
        {
            id: '20',
            name: 'Napolitana contemporánea',
            longName: 'Pizza napolitana contemporánea',
            ingredients: 'Queso mozzarella bajo en grasa, champiñón portobello relleno, albahaca, brotes orgánicos y pesto y salsa napolitana, tomates cherry.',
            price: 0,
            amount: 0,
            category: 'Pizzas',
            imgPath: PNapalotina,
        },
        {
            id: '20',
            name: 'Hawaiana',
            longName: 'Pizza hawaiana',
            ingredients: 'Queso mozzarella bajo en grasa, jamón ahumado, piña confitada, base integral y parmesano.',
            price: 16000,
            amount: 0,
            category: 'Pizzas',
            imgPath: PHwaiana,
        },
        {
            id: '20',
            name: 'Burrata',
            longName: 'Pizza burrata',
            ingredients: 'Queso mozzarella bajo en grasa, queso burrata, aceitunas verdes y negras, pimentón rojo y verde, pepino, rúgula, base napolitana, salsa pesto y balsámico.',
            price: 27000,
            amount: 0,
            category: 'Pizzas',
            imgPath: PBurrata,
        },
    ]
}

export default data;