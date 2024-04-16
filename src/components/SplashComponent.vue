<template>
    <video v-if="opacity > 0" class="w-100" ref="videoPlayer" muted="true" :controls=false @ended="videoEnded"
        :style="{ opacity: opacity / 100 }" autoplay disabled>
        <source src="/videos/loader.mp4" type="video/mp4">
        Il tuo browser non supporta il tag video.
    </video>
</template>

<script>
export default {
    name: 'SplashComponent',
    data() {
        return {
            opacity: 100,
        }
    },
    methods: {
        playVideo() {
            this.$refs.videoPlayer.play();
        },
        videoEnded() {
            this.splashPageDisappear();
        },
        async splashPageDisappear() {
            try {
                while (this.opacity > 0) {
                    await new Promise(resolve => setTimeout(resolve, 8));
                    this.opacity -= 1;
                }
            } catch (error) {
                console.log(error);
            }
        },

    },
    mounted() {
        this.playVideo()
    }
}
</script>

<style lang="scss" scoped>
video {
    position: fixed;
    z-index: 10;
}
</style>