<template>
    <div class="person">
        <h2>姓名：{{person.name}}</h2>
        <h2>年龄：{{person.age}},{{nl}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>


<script lang="ts" setup name="person">
    import {ref,reactive,toRefs,toRef} from 'vue'
    let person = reactive({
        name: '张三',
        age: 18,
        sex: '男'
    })
    let {name,age} = toRefs(person)
    let nl =toRef(person,'age')
    
    function changeName(){
        person.name = '李四'
    }
    function changeAge(){
        person.age += 1
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