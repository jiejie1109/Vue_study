<template>
    <div class="talk">
        <button @click="getTalk">获取一句话</button>
    <ul>
        <li v-for="(item, index) in talkStore.talkList" :key="index">{{ item.title }}</li>
    </ul>
    </div>

</template>

<script setup lang="ts" name="LoveTalk">
    import {reactive} from "vue";
    import axios from "axios";
    import {nanoid} from 'nanoid'
    import {useTalkStore} from '@/store/talk'

    const talkStore =useTalkStore()

    //方法
    async function getTalk(){

        talkStore.getAtalTalk()
    }
</script>


<style scoped>
    .talk {
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>