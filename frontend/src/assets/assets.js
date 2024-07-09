import basket_icon from './basket_icon.png'
import logo from './logo.svg'
import header_img from './header_img.png'
import search_icon from './search_icon.png'


import menu1 from './menu1.jpg'
import menu2 from './menu2.jpg'
import menu3 from './menu3.jpg'
import menu4 from './menu4.jpg'

import menu5 from './menu5.jpg'


import prato1 from './prato1.jpg'

import prato2 from './prato2.jpg'

import prato3 from './prato3.jpg'

import prato4 from './prato4.jpg'

import prato5 from './prato5.jpg'

import prato6 from './prato6.jpg'

import prato7 from './prato7.jpg'

import prato8 from './prato8.jpg'

import prato9 from './prato9.jpg'

import prato10 from './prato10.jpg'

import prato11 from './prato11.jpg'

import prato12 from './prato12.jpg'

import prato13 from './prato13.jpg'

import prato14 from './prato14.jpg'

import prato15 from './prato15.jpg'

import prato16 from './prato16.jpg'
import prato17 from './prato17.jpg'
import prato18 from './prato18.jpg'
import prato19 from './prato19.jpg'
import prato20 from './prato20.jpg'
import prato21 from './prato21.jpg'
import prato22 from './prato22.jpg'
import prato23 from './prato23.jpg'
import prato24 from './prato24.jpg'
import prato25 from './prato25.jpg'
import prato26 from './prato26.jpg'
import prato27 from './prato27.jpg'
import prato28 from './prato28.jpg'
import prato29 from './prato29.jpg'
import prato30 from './prato30.jpg'

import bebida1 from './bebida1.png'
import bebida2 from './bebida2.jpg';
import bebida3 from './bebida3.jpg';
import bebida4 from './bebida4.jpg';
import bebida5 from './bebida5.jpg';
import bebida6 from './bebida6.jpg';
import bebida7 from './bebida7.jpg';
import bebida8 from './bebida8.jpg';
import bebida9 from './bebida9.jpg';
import bebida10 from './bebida10.jpg';
import bebida11 from './bebida11.jpg';
import bebida12 from './bebida12.jpg';
import bebida13 from './bebida13.jpg';
import bebida14 from './bebida14.jpg';
import bebida15 from './bebida15.jpg';


import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import checked from './checked.png'
import un_checked from './un_checked.png'
//novos
import search from './search.png'
import bag from './shopping-basket.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    checked,
    un_checked,
    search,
    bag
}

export const menu_list = [
    {
        menu_name: "Pratos Principais",
        menu_image: menu1
    },
    {
        menu_name: "Entradas",
        menu_image: menu2
    },
    {
        menu_name: "Petiscos",
        menu_image: menu3
    },
    {
        menu_name: "Sobremesas",
        menu_image: menu4
    },
    {
        menu_name: "Bebidas",
        menu_image: menu5
    }]

export const food_list = [
    {
        _id: "1",
        name: "Taralli",
        image: prato1,
        price: 15,
        status: true,
        description: "Biscoitos salgados italianos, crocantes e perfeitos para petiscar. Feitos com farinha, azeite, vinho branco, sal e pimenta preta. Ideal para acompanhar um bom vinho ou como entrada em uma reunião descontraída.",
        category: "Petiscos"
    },
    {
        _id: "2",
        name: "Spaghetti alla Carbonara",
        image: prato2,
        price: 35,
        status: true,
        description: "Massa tradicional italiana com molho de ovos, queijo parmesão, pancetta e pimenta-do-reino. Um prato de sabor intenso e textura cremosa, perfeito para os amantes da cozinha italiana.",
        category: "Pratos Principais"
    },
    {
        _id: "3",
        name: "Bruschetta al Pomodoro",
        image: prato3,
        price: 20,
        status: true,
        description: "Pão tostado com tomate fresco, manjericão, alho e azeite. Uma entrada clássica da culinária italiana, conhecida pela simplicidade e pelos sabores frescos e aromáticos.",
        category: "Entradas"
    },
    {
        _id: "4",
        name: "Tiramisu",
        image: prato4,
        price: 25,
        status: true,
        description: "Sobremesa clássica italiana com camadas de biscoito embebido em café, mascarpone e cacau. Um deleite irresistível para os amantes de doces e café.",
        category: "Sobremesa"
    },
    {
        _id: "5",
        name: "Risotto ai Funghi",
        image: prato5,
        price: 40,
        status: true,
        description: "Risoto cremoso com cogumelos porcini, uma verdadeira delícia italiana. O arroz é cozido lentamente em caldo de legumes até atingir uma consistência cremosa e os cogumelos adicionam um sabor terroso único.",
        category: "Pratos Principais"
    },
    {
        _id: "6",
        name: "Pollo alla Parmigiana",
        image: prato6,
        price: 38,
        status: true,
        description: "Filé de frango empanado e frito, coberto com molho de tomate e queijo derretido. Um prato reconfortante e delicioso que combina crocância, cremosidade e muito sabor.",
        category: "Pratos Principais"
    },
    {
        _id: "7",
        name: "Gnocchi al Pesto",
        image: prato7,
        price: 32,
        status: true,
        description: "Nhoque de batata servido com molho pesto fresco. Os gnocchis são pequenas bolinhas de massa macia e o molho pesto feito com manjericão, pinhões, queijo parmesão e azeite de oliva.",
        category: "Pratos Principais"
    },
    {
        _id: "8",
        name: "Focaccia",
        image: prato8,
        price: 18,
        status: true,
        description: "Pão italiano achatado e macio, coberto com sal grosso e alecrim. Uma opção versátil que pode ser servida como acompanhamento ou como base para sanduíches.",
        category: "Petiscos"
    },
    {
        _id: "9",
        name: "Panna Cotta",
        image: prato9,
        price: 22,
        status: true,
        description: "Sobremesa italiana cremosa, à base de creme de leite, açúcar e gelatina, coberta com calda de frutas vermelhas. A textura suave e o sabor delicado fazem da panna cotta um clássico.",
        category: "Sobremesas"
    },
    {
        _id: "10",
        name: "Melanzane alla Parmigiana",
        image: prato10,
        price: 30,
        status: true,
        description: "Berinjela empanada e frita, montada em camadas com molho de tomate e queijo parmesão, gratinada ao forno. Um prato vegetariano rico em sabores e texturas.",
        category: "Pratos Principais"
    },
    {
        _id: "11",
        name: "Pizza Margherita",
        image: prato11,
        price: 28,
        status: true,
        description: "Pizza clássica com molho de tomate, mussarela e manjericão fresco. Uma combinação simples e deliciosa de sabores que destaca a qualidade dos ingredientes.",
        category: "Pratos Principais"
    },
    {
        _id: "12",
        name: "Cannoli Siciliani",
        image: prato12,
        price: 24,
        status: true,
        description: "Canudos de massa frita, recheados com creme doce de ricota e pistache. Uma sobremesa crocante por fora e cremosa por dentro, típica da Sicília.",
        category: "Sobremesas"
    },
    {
        _id: "13",
        name: "Calamari Fritti",
        image: prato13,
        price: 29,
        status: true,
        description: "Lulas frescas empanadas e fritas, servidas com molho tártaro. Um petisco popular em toda a Itália, conhecido pelo sabor marinho e pela textura crocante.",
        category: "Entradas"
    },
    {
        _id: "14",
        name: "Insalata Caprese",
        image: prato14,
        price: 25,
        status: true,
        description: "Salada fresca com fatias de tomate, mussarela de búfala e folhas de manjericão, temperada com azeite de oliva. Uma entrada simples e saborosa que celebra os ingredientes frescos.",
        category: "Entradas"
    },
    {
        _id: "15",
        name: "Lasagna al Forno",
        image: prato15,
        price: 38,
        status: true,
        description: "Lasanha tradicional italiana com camadas de massa, molho bolonhesa, queijo ricota e molho bechamel. Um prato reconfortante que combina sabores e texturas.",
        category: "Pratos Principais"
    },
    {
        _id: "16",
        name: "Minestrone",
        image: prato16,
        price: 20,
        status: true,
        description: "Sopa italiana rica em vegetais frescos, macarrão e feijão. O caldo é enriquecido com tomate, cenoura, aipo e temperos italianos.",
        category: "Entradas"
    },
    {
        _id: "17",
        name: "Pasta e Fagioli",
        image: prato17,
        price: 25,
        status: true,
        description: "Sopa italiana de macarrão e feijão, com um toque de pancetta. Um prato robusto e reconfortante, perfeito para os dias mais frios.",
        category: "Entradas"
    },
    {
        _id: "18",
        name: "Linguine alle Vongole",
        image: prato18,
        price: 38,
        status: true,
        description: "Massa linguine servida com vôngoles frescos, alho, azeite de oliva e vinho branco. Um prato de frutos do mar delicado e cheio de sabor mediterrâneo.",
        category: "Pratos Principais"
    },
    {
        _id: "19",
        name: "Insalata di Polpo",
        image: prato19,
        price: 30,
        status: true,
        description: "Salada de polvo com batatas, azeitonas e salsa, temperada com azeite e limão. Uma entrada leve e cheia de sabores do mar.",
        category: "Entradas"
    },
    {
        _id: "20",
        name: "Parmigiana di Zucchine",
        image: prato20,
        price: 27,
        status: true,
        description: "Abobrinha empanada e gratinada com molho de tomate e queijo parmesão. Um prato vegetariano que combina textura crocante e sabores robustos.",
        category: "Pratos Principais"
    },
    {
        _id: "21",
        name: "Stracciatella",
        image: prato21,
        price: 12,
        status: true,
        description: "Sopa leve feita com ovos batidos, queijo parmesão e caldo de galinha. Um prato reconfortante e simples, perfeito como entrada ou para aquecer nos dias mais frios.",
        category: "Entradas"
    },
    {
        _id: "22",
        name: "Frittelle di Zucchine",
        image: prato22,
        price: 18,
        status: true,
        description: "Bolinhos fritos de abobrinha, crocantes por fora e macios por dentro. Um petisco italiano que combina vegetais frescos e textura delicada.",
        category: "Petiscos"
    },
    {
        _id: "23",
        name: "Torta della Nonna",
        image: prato23,
        price: 28,
        status: true,
        description: "Torta italiana recheada com creme de confeiteiro e coberta com pinhões caramelizados. Uma sobremesa decadente que celebra a tradição italiana.",
        category: "Sobremesas"
    },
    {
        _id: "24",
        name: "Scaloppine al Limone",
        image: prato24,
        price: 42,
        status: true,
        description: "Filé de vitela ao molho de limão, servido com legumes cozidos no vapor. Um prato principal elegante que combina sabores cítricos e carnes macias.",
        category: "Pratos Principais"
    },
    {
        _id: "25",
        name: "Gamberi alla Griglia",
        image: prato25,
        price: 36,
        status: true,
        description: "Camarões frescos grelhados com alho, ervas e azeite. Um prato principal leve e cheio de sabores do mar, perfeito para uma refeição saudável.",
        category: "Pratos Principais"
    },
    {
        _id: "26",
        name: "Granita al Limone",
        image: prato26,
        price: 16,
        status: true,
        description: "Sobremesa gelada de limão, típica da Sicília, feita com suco de limão, açúcar e água. Refrescante e levemente ácida, perfeita para os dias quentes de verão.",
        category: "Sobremesas"
    },
    {
        _id: "27",
        name: "Baccalà alla Vicentina",
        image: prato27,
        price: 40,
        status: true,
        description: "Bacalhau preparado à moda de Vicenza, com cebola, leite e queijo parmesão. Um prato de sabor delicado e textura suculenta, típico da culinária do norte da Itália.",
        category: "Pratos Principais"
    },
    {
        _id: "28",
        name: "Panzerotti",
        image: prato28,
        price: 22,
        status: true,
        description: "Mini calzones fritos, recheados com tomate e mussarela. Um petisco italiano que combina massa crocante com recheio suculento e saboroso.",
        category: "Petiscos"
    },
    {
        _id: "29",
        name: "Zabaglione",
        image: prato29,
        price: 18,
        status: true,
        description: "Sobremesa italiana feita com gemas batidas, açúcar e vinho Marsala. Servido em taças, tem uma textura cremosa e um sabor delicado de vinho.",
        category: "Sobremesas"
    },
    {
        _id: "30",
        name: "Trippa alla Romana",
        image: prato30,
        price: 35,
        status: true,
        description: "Dobradinha cozida com tomate, hortelã e queijo pecorino. Um prato tradicional italiano, cheio de sabores robustos e textura macia.",
        category: "Pratos Principais"
    },
    {
        _id: "31",
        name: "Espresso",
        image: bebida1,
        price: 8,
        status: true,
        description: "Café espresso italiano, encorpado e aromático, perfeito para uma pausa revigorante.",
        category: "Bebidas"
    },
    {
        _id: "32",
        name: "Cappuccino",
        image: bebida2,
        price: 12,
        status: true,
        description: "Clássico cappuccino italiano, feito com café espresso, leite vaporizado e uma camada de espuma de leite.",
        category: "Bebidas"
    },
    {
        _id: "33",
        name: "Latte Macchiato",
        image: bebida3,
        price: 14,
        status: true,
        description: "Leite vaporizado com uma pequena quantidade de café espresso, criando uma bebida suave e cremosa.",
        category: "Bebidas"
    },
    {
        _id: "34",
        name: "Americano",
        image: bebida4,
        price: 10,
        status: true,
        description: "Café espresso diluído com água quente, oferecendo um sabor mais suave e menos concentrado.",
        category: "Bebidas"
    },
    {
        _id: "35",
        name: "Mocha",
        image: bebida5,
        price: 15,
        status: true,
        description: "Combinação deliciosa de café espresso, chocolate quente e leite vaporizado, coberto com chantilly.",
        category: "Bebidas"
    },
    {
        _id: "36",
        name: "Tè al Limone",
        image: bebida6,
        price: 8,
        status: true,
        description: "Chá preto italiano servido com uma fatia de limão, ideal para refrescar e revigorar.",
        category: "Bebidas"
    },
    {
        _id: "37",
        name: "Aranciata",
        image: bebida7,
        price: 10,
        status: true,
        description: "Refrigerante italiano de laranja, com sabor cítrico refrescante e levemente gaseificado.",
        category: "Bebidas"
    },
    {
        _id: "38",
        name: "Limonata",
        image: bebida8,
        price: 10,
        status: true,
        description: "Refrigerante italiano de limão, refrescante e com sabor ácido perfeito para o verão.",
        category: "Bebidas"
    },
    {
        _id: "39",
        name: "Aperol Spritz",
        image: bebida9,
        price: 20,
        status: true,
        description: "Coquetel clássico italiano feito com Aperol, prosecco e água com gás, servido com uma fatia de laranja.",
        category: "Bebidas"
    },
    {
        _id: "40",
        name: "Negroni",
        image: bebida10,
        price: 22,
        status: true,
        description: "Coquetel italiano clássico, feito com gin, vermute rosso e Campari, servido com uma fatia de laranja.",
        category: "Bebidas"
    },
    {
        _id: "41",
        name: "Bellini",
        image: bebida11,
        price: 18,
        status: true,
        description: "Coquetel feito com prosecco e purê de pêssego branco, uma bebida leve e frutada.",
        category: "Bebidas"
    },
    {
        _id: "42",
        name: "Prosecco",
        image: bebida12,
        price: 25,
        status: true,
        description: "Espumante italiano leve e fresco, perfeito para celebrações ou para acompanhar refeições.",
        category: "Bebidas"
    },
    {
        _id: "43",
        name: "Vino Rosso",
        image: bebida13,
        price: 30,
        status: true,
        description: "Vinho tinto italiano encorpado, com notas de frutas vermelhas e especiarias, ideal para acompanhar pratos principais.",
        category: "Bebidas"
    },
    {
        _id: "44",
        name: "Vino Bianco",
        image: bebida14,
        price: 28,
        status: true,
        description: "Vinho branco italiano, leve e frutado, perfeito para acompanhar peixes e frutos do mar.",
        category: "Bebidas"
    },
    {
        _id: "45",
        name: "Limoncello",
        image: bebida15,
        price: 15,
        status: true,
        description: "Licor de limão italiano, doce e refrescante, ideal como digestivo após as refeições.",
        category: "Bebidas"
    }

];
