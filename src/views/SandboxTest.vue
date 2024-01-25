<template>
    <GoGame width="400" height="400" time="60" :prompts='["Dog", "Mickey Mouse", "Tacos"]'
    class="w-full overflow-auto justify-center align-middle " />
</template>

<script>
import GoGame from './GoGame.vue';

export default {
    components: {
        GoGame,
    },
};
</script>