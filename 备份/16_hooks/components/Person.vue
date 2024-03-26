<template>
    <div class="person">
        <h2>当前求和为：{{sum}},放大后{{ bigSum }}</h2>
        <button @click="add">增加</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index">
        <br>
        <button @click="addDog">再来一只狗</button>
    </div>
</template>


<script lang="ts" setup name="Person">
// import useSum from "@/hooks/useSum"
// import useDog from "@/hooks/useDog"

// const {sum,add,bigSum} = useSum()
// const {dogList,addDog} = useDog()
</script>

<!--  scoped 局部作用域 -->
<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0 5px;
    }
    img{
        height: 100px;
        margin-right: 10px;
    }
</style>