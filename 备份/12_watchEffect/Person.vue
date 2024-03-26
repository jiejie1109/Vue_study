<template>
    <div class="person">
        <h2>需求:当水温达到60或者水位达到100时,发消息给系统管理员</h2>
        <h2>当前水温：{{ temp }} ℃</h2>
        <h2>当前水位：{{ height }}cm</h2>
        <button @click="changetemp">水温+10</button>
        <button @click="changeheight">水位+10</button>
    </div>
</template>


<script lang="ts" setup name="person">
    import { ref,watch,watchEffect } from 'vue'
    //数据
    let temp = ref(10)
    let height = ref(0)
    function changetemp(){
        temp.value += 10
    }
    function changeheight(){
        height.value += 10
    }

    // watch([temp,height],(newValue,oldValue)=>{
    //     if(newValue[0] >= 60 || newValue[1] >= 100){
    //         alert('系统管理员,请及时处理')
    //     }
    // })

    watchEffect(()=>{
        if(temp.value >= 60 || height.value >= 100){
            alert('系统管理员,请及时处理')
        }
    })
</script>


<style>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0 5px;
    }
</style>