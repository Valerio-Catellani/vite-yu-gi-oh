<template>
    <header class="bg-white">
        <div class="container">
            <nav class="navbar navbar-expand-sm ">
                <div class="container-fluid">
                    <div class="img-container">
                        <img class="img-fluid" src="/images/banner.png" />
                    </div>
                    <h1 class="ms-3 p-2 mb-0">Yu-Gi-Oh API</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-end " id="navbarSupportedContent">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" v-model="userInput" type="search" placeholder="Search"
                                aria-label="Search">
                            <button class="btn btn-outline-primary" type="submit" @click.prevent="search(userInput)"
                                :disabled="!userInput">Search</button>
                        </form>
                    </div>
                </div>
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