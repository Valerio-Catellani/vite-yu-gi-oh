import { reactive } from 'vue'

export const store = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?',
    cards: []
})