<template>
    <header class="bg-white">
        <div class="container">
            <nav class="d-flex align-items-center p-1">
                <div class="img-container">
                    <img class="img-fluid" src="/images/banner.png" />
                </div>
                <h1 class="ms-3 p-2 mb-0 align-self-center">Yu-Gi-Oh API</h1>
            </nav>
        </div>

    </header>
    <div v-if="userSearch" class="bg-primary-subtle text-dark fst-italic px-3 py-2">

        Your results are filtered by: {{
            userSearch }}
        <i class="fa-solid fa-xmark" role="button" @click="search('')"></i>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            userInput: '',
            userSearch: ''
        }
    },
    emits: ['search'],
    methods: {
        search(input) {
            this.userSearch = input;
            this.$emit('search', this.userSearch)
        }
    }
}
</script>

<style lang="scss" scoped>
.img-container {
    width: 7%;
    min-width: 100px;
}
</style>