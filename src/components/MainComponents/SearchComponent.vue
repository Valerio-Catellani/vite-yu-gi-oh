<template>
    <div id="search-bar" class=" search-bar container bg-dark-subtle p-3 m-1 rounded-4 border-2 border-dark">
        <form class="" role="search">
            <div class="d-flex my-4">
                <input class="form-control me-2 shadow" v-model="userSearch" type="search" placeholder="Search by Name"
                    aria-label="Search">
            </div>
            <div class="dropdown-collection d-flex gap-5 my-4">
                <DropdownMenuAPI v-for="element in store.menu" :key="element.menuName" :menu="element" />
            </div>
            <div class="button-collection d-flex align-items-center gap-5 justify-content-center">
                <button class="btn btn-light btn-outline-primary shadow" type="submit"
                    @click.prevent="this.methodsStore.getCardsByName(userSearch)"
                    :disabled="!userSearch">Search</button>
            </div>
        </form>
    </div>
    <div v-if="store.totalCards" class="search-bar bg-danger-subtle text-dark fst-italic px-3 py-2 rounded-bottom-2">
        <div class="container">{{
            userMsg }}
        </div>
    </div>
</template>

<script>
import { store, methodsStore } from '../../store.js';
import DropdownMenuAPI from '../MainComponents/DropdownMenuAPI.vue';

export default {
    name: 'SearchComponent',
    data() {
        return {
            store,
            methodsStore,
            userSearch: '',
        }
    },

    components: {
        DropdownMenuAPI,
    },
    computed: {
        userMsg() {
            if (this.store.totalCards > 100) {
                return `Found ${this.store.totalCards} cards. Only viewed 100.`
            } else if (this.store.totalCards === 0 || this.userSearch) {
                return `No cards found.`
            } else {
                return `Found ${this.store.totalCards} cards.`
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.search-bar {
    box-shadow: white 2px 2px 5px 1px;
}
</style>