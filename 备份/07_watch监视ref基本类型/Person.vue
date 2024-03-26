<template>
    <div class="person">
        <h1>情况一:监视ref定义的基本类型</h1>
        <h2>当前求和为：{{sum}}</h2>
        <button @click="changeSum">点击sum+1</button>
    </div>
</template>


<script lang="ts" setup name="person">
    import { ref,watch } from 'vue'
    let sum = ref(0)
    function changeSum() {
        sum.value++
    }
    // 监视 情况一:监视ref定义的基本类型
    const stopWatch =watch(sum,(newValue,oldValue)=>{
        console.log(newValue,oldValue);
        if(newValue>10){
            stopWatch()
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