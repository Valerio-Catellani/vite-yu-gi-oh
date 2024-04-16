import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/',
    card_list: 'cardinfo.php',
    search_by_archetype: '?archetype=',
    archetype_list: 'archetypes.php',
    options: {  // è un oggetto che stiamo passando come parametro all'url. ci penserà axios a convertire questi paramaetri in una query string. L'importante è passare store.options al get di acios come secondo paramatro, come il seguente esempio: axios.get(store.base_url, store.options) 
        params: {
            num: 200,
            offset: 0,
            fname: ''
        }
    },
    cards: [],
    menu: {
        archetypeMenu: {
            menuName: 'Archetype',
            menuList: {
                a: [
                    'primo',
                    'seconsdo',
                    'ternzo'
                ]
            }
        },
        raceMenu: {
            menuName: 'Race',
            menuList: []
        },
        typeMenu: {
            menuName: 'Type',
            menuList: []
        }
    },
    isLoading: false
})


export const methods = {
    findElementByArchetype(el) {
        console.log(el)
        console.log(store.base_url);
        console.log(store.search_by_archetype + el);
        store.isLoading = true
        axios.get(store.base_url + store.card_list + store.search_by_archetype + el).then((response) => {
            store.cards = methods.formatCardList(response.data.data);
        })
    },
    formatCardList(cardList) {
        console.log(cardList);
        let formattedCardList = cardList.map(element => {
            return {
                card: {
                    id: element.id,
                    frameType: element.frameType,
                    name: element.name,
                    type: element.type,
                    desc: element.desc,
                    race: element.race,
                    attribute: element.attribute,
                    level: element.level,
                    atk: element.atk,
                    def: element.def,
                    archetype: element.archetype,
                    image: element.card_images[0].image_url,
                    cardPrice: element.card_prices
                }
            }
        })
        return formattedCardList;
    }

}