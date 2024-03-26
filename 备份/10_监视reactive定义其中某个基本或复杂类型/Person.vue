<template>
    <div class="person">
        <h2>姓名：{{person.name}}</h2>
        <h2>年龄：{{person.age}}</h2>
        <h2>汽车：{{person.car.c1}},{{person.car.c2}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeCar1">修改第一个</button>
        <button @click="changeCar2">修改第二个</button>
        <button @click="changeCar">修改整个</button>
    </div>
</template>


<script lang="ts" setup name="person">
    import { reactive,watch } from 'vue'
    //数据
    let person = reactive({
        name: '张三',
        age: 18,
        car:{
            c1:"BMW",
            c2:"BYD"
        }
    })
    // 方法
    function changeName(){
        person.name +='~' 
    }
    function changeAge(){
        person.age +=1
    }
    function changeCar1(){
        person.car.c1 = 'Audi'
    }
    function changeCar2(){
        person.car.c2 = 'Tesla'
    }
    function changeCar(){
        person.car = {
            c1:'Audi1',
            c2:'Tesla2'
        }
    }

    // 监视  只监视name的情况  情况4：监视响应式对象中的某个属性，且该属性时的基本类型，要写成函数式
    // watch(()=>{return person.name}, (newValue, oldValue)=>{
    //     console.log('person', newValue, oldValue)
    // })

    // 监视  情况5：监视响应式对象中的某个属性，且该属性时的复杂类型，要写成函数式 ,并且需要加上deep:true
    watch(()=>person.car,(newValue,oldValue)=>{
        console.log('car',newValue,oldValue)
    },{deep:true})
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