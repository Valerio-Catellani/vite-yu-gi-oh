<template>
    <div :id="card.id" class="personal-card rounded-1 m-2 p-1" :class="card.frameType">
        <div class="" :class="card.frameType === 'xyz' || card.frameType === 'link' ? 'text-white' : ''">
            <h3 class="text-center fs-5 py-1 mb-0">{{ card.name }}</h3>
            <p class="text-center  border-black border-bottom shadow mb-1">{{ card.type }} ({{ card.race }})</p>
        </div>
        <div class=" d-flex">
            <div class="img-container d-flex align-items-center">
                <img :src="card.image" class="card-img-top img-fluid" :alt="card.name">
            </div>
            <div class="info-container p-2">
                <div class="card-body"
                    :class="card.frameType === 'xyz' || card.frameType === 'link' ? 'text-white' : ''">
                    <p class="card-text bg-dark-subtle p-1 overflow-y-auto text-dark rounded-1">{{ card.desc }}</p>
                    <p v-if="isAMonster" class="fw-bold mb-0 border-black border-bottom">ATK/ {{ card.atk }} DEF/ {{
                        card.def }}</p>
                    <div v-if="isAMonster" class="d-flex align-items-center">
                        <p class="mb-0 fw-bold">
                            level:
                        </p>
                        <div class="level-number-container ms-2 d-none">{{ card.level }}</div>
                        <div class="lv-icon-container d-flex ms-2">
                            <img v-for="i in card.level" :key="i" class="img-fluid w-100" src="/images/level.png"
                                alt="level">
                        </div>
                    </div>
                    <p v-if="isAMonster" class="mb-0"><span class="fw-bold">Attribute: </span>{{ card.attribute }}</p>
                    <p v-if="isAMonster" class="mb-0"><span class="fw-bold">Type: </span> <span class="small">{{
                        card.race }}/{{
                                formatText(card.frameType)
                            }}</span></p>
                    <p v-if="card.archetype" class="mb-0"><span class="fw-bold">ArcheType: </span> <span
                            class="fst-italic">{{ card.archetype }}</span></p>
                </div>
                <div class="card-body mt-2">
                    <span role="button" :class="marketIsOpen ? 'text-success' : 'text-white'"
                        @click="toggleMarket()">Click
                        for
                        Prices</span>
                    <div v-if="marketIsOpen"
                        class="prices-container bg-white position position-absolute border border-black p-1 rounded-1"
                        @blur="marketIsOpen = false" tabindex="0">
                        <ul class="list-unstyled">
                            <li v-for="(price, value) in card.cardPrice[0]" :key="price">
                                <a href="#" @click.prevent>{{ formatText(value) }}</a>: {{ price != 0 ? price
                                    + '€'
                                    :
                                    'N/A'
                                }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>



    </div>

</template>

<script>
export default {
    name: 'CardComponent',
    props: ['card'],
    data() {
        return {
            marketIsOpen: false
        }
    },
    computed: {
        isAMonster() {
            return this.card.type.includes('Monster');
        },
    },
    methods: {
        formatText(inputString) {
            let words = inputString.split('_');
            words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
            return words.join(' ');
        },
        toggleMarket() {
            this.marketIsOpen = !this.marketIsOpen
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as *;

.effect {
    background-color: $monster-effect-background-color;
}

.normal {
    background-color: $monster-normal-background-color;
}

.fusion {
    background-color: $monster-fusion-background-color;
}

.effect_pendulum {
    background-image: $monster-pendulum-background-color;
}

.link {
    background-color: $monster-link-background-color;
}

.xyz {
    background-color: $monster-xyz-background-color;
}

.ritual {
    background-color: $monster-ritual-background-color;
}

.spell {
    background-color: $magic-background-color;
}

.trap {
    background-color: $trap-background-color;
}

.synchro {
    background-color: $monster-sincro-background-color;
}

.personal-card {
    max-width: 400px;
    border: solid 1px black;
    box-shadow: white 2px 2px 5px 1px;


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
            width: 10px;
            height: 10px;
        }
    }


}
</style>