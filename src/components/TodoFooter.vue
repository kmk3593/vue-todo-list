<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">
            clear All
        </span>
    </div>
</template>

<script> 
import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            clearTodo: 'clearAllItems'
        })
        // clearTodo(){
        //     this.$store.commit('clearAllItems');
        // }
    }
}
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: beige;
    border-radius: 5px;
    margin: 0 auto;
} 
.clearAllBtn {
    color: #e20303;
    /* 추가 */
    display: block;
}
</style>