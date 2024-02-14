<template>
    <GoGame width="400" height="400" time="60" :prompts='["Dog", "Mickey Mouse", "Tacos"]'
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