<template>
    <div class="person">
        <h2>一辆{{car.brand}}车，价值{{car.price}}</h2>
        <button @click="changeCar">修改汽车</button>
        <br>
        <h2>游戏列表:</h2>
        <ul>
            <li v-for="item in game" :key="item.id">{{item.name}}</li>
        </ul>
        <button @click="changeGameName">修改第一个游戏的名字</button>
    </div>
</template>


<script lang="ts" setup name="person">
    import { ref } from 'vue'
    import { reactive } from 'vue'
    // 数据
    // let car = reactive({brand:'BYD',price:100})
    let car = ref({brand:'BYD',price:100})
    let game = ref([
        {id:'asdf1',name:'1111'},
        {id:'asdf2',name:'2222'},
        {id:'asdf3',name:'3333'}
    ])

    function changeCar() {
        // Object.assign(car,{brand:'奥托',price:1})
        car.value = {brand:'奥托',price:1}
    }
    function changeGameName() {
        game.value[0].name = 'qqqqqqqqqq'
    }
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