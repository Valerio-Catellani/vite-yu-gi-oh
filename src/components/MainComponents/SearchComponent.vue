<template>
    <div id="search-bar" class="container bg-dark-subtle p-3 m-1 rounded-4 border-2 border-dark">
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
                    @click.prevent="search(userInput)">"Search</button>
                <button class="btn btn-light btn-outline-danger shadow" type="reset">Delete</button>
            </div>

        </form>
    </div>
</template>

<script>
import { store } from '../../store.js';
import DropdownMenuAPI from '../MainComponents/DropdownMenuAPI.vue';

export default {
    name: 'SearchComponent',
    data() {
        return {
            store,
            userSearch: '',
        }
    },

    components: {
        DropdownMenuAPI,
    },

}
</script>

<style lang="scss" scoped>
#search-bar {
    box-shadow: white 2px 2px 5px 1px;
}
</style>