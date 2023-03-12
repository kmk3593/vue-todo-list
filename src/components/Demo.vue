<template>
    <div id="root">
        <p>{{ this.$store.getters.originalPrice }}</p> 100
        <p>{{ this.$store.getters.doublePrice }}</p> 200
        <p>{{ this.$store.getters.triplePrice }}</p> 300
    </div>
</template> 

<script>
import { mepGetters } from 'vuex';

export default {
    computed: {
    ...mapGetters(['originalPrice','doublePrice','triplePrice']) ,

        // originalPrice() {
        //     return this.$store.getters.originalPrice;
        // },
        // doublePrice() {
        //     return this.$store.getters.doublePrice;
        // },
        // triplePrice() {
        //     ruturn this.$store.getters.triplePrice
        // }
    }

}
</script>

<style>
</style>