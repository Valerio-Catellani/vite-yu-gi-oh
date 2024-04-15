<template>
    <div :id="card.id" class="personal-card d-flex m-3 ">
        <div class="img-container">
            <img :src="card.card_images[0].image_url" class="card-img-top img-fluid" :alt="card.name">
        </div>
        <div class="info-container p-2">
            <div class="card-body">
                <h3 class="text-center border-black border-bottom fs-5">{{ card.name }}</h3>
                <h6 class="card-type">{{ card.type }} ({{ card.race }})</h6>
                <p class="card-text bg-white p-1 overflow-y-auto">{{ card.desc }}</p>
                <p v-if="isAMonster" class="fw-bold mb-0 border-black border-bottom">ATK/ {{ card.atk }} DEF/ {{
                    card.def }}</p>
                <div v-if="isAMonster" class="d-flex align-items-center">
                    <p class="mb-0">level:</p>
                    <div class="level-number-container ms-2 d-none">{{ card.level }}</div>
                    <div class="lv-icon-container d-flex ms-2">
                        <img v-for="i in card.level" :key="i" class="img-fluid w-100" src="/images/level.png"
                            alt="level">
                    </div>
                </div>
                <p v-if="isAMonster" class="mb-0">Attribute: {{ card.attribute }}</p>
                <p v-if="isAMonster">Type: {{ card.race }}/{{ card.frameType }}</p>
            </div>
            <div class="card-body">
                <span>Cost: </span><a href="#" class="card-link">{{ card.card_prices[0].cardmarket_price }}</a>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: 'CardComponent',
    props: ['card'],
    computed: {
        isAMonster() {
            return this.card.type.includes('Monster');
        }
    }
}
</script>

<style lang="scss" scoped>
.personal-card {
    max-width: 500px;
    border: solid 1px black;

    .img-container {
        min-width: 50%;
    }

    .info-container {
        min-width: 50%;

        .card-text {
            max-height: 150px;
        }

        @media screen and (max-width: 768px) {
            .level-number-container {
                display: block !important;
            }

            .lv-icon-container {
                display: none !important;
            }
        }

        .lv-icon-container {
            width: 15px;
            height: 15px;
        }
    }


}
</style>