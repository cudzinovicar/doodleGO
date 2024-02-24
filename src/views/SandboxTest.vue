<template>
    <GoGame :width="800" :height="800" time="60" :prompts='["Dog", "Mickey Mouse", "Tacos"]'
    />
</template>

<script>
import GoGame from './GoGame.vue';

export default {
    components: {
        GoGame,
    },
};
</script>