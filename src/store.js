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
    isLoading: false,
    userSearch: '',
    totalCards: null
})


export const methodsStore = {
    findElementByArchetype(el) {
        store.isLoading = true
        axios.get(store.base_url + store.card_list + store.search_by_archetype + el).then((response) => {
            store.totalCards = response.data.data.length
            store.cards = (methodsStore.formatCardList(response.data.data)).slice(0, 100);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            store.isLoading = false
        })
    },
    findElementBy(el, params) {
        store.isLoading = true
        axios.get(store.base_url + store.card_list + `?${params}=` + el).then((response) => {
            store.totalCards = response.data.data.length
            store.cards = methodsStore.formatCardList(response.data.data).slice(0, 100);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            store.isLoading = false
        })
    },
    formatCardList(cardList) {
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
    },
    getCardsByName(info) {
        store.isLoading = true;
        store.userSearch = info;
        store.cards = []
        if (info) {
            axios.get(store.base_url + store.card_list)
                .then((response) => {

                    let CardsTmp = [];
                    response.data.data.forEach(element => {
                        if (element.name.includes(info)) {
                            CardsTmp.push(element)
                        }
                    })
                    store.cards = this.formatCardList(CardsTmp)
                    store.totalCards = store.cards.length
                })
                .catch((error) => {
                    store.cards = [];
                    store.totalCards = 'No cards found';
                })
                .finally(() => {
                    store.isLoading = false
                })
        }
    }, /// da rivedere


}

