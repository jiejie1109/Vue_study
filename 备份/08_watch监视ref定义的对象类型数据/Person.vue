<template>
    <div class="person">
        <h1>情况二:监视ref定义的对象类型的数据</h1>
        <h2>姓名：{{ person.name  }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changename">修改名字</button>
        <button @click="changeage">修改年龄</button>
        <button @click="changeperson">修改整个人的</button>
    </div>
</template>


<script lang="ts" setup name="person">
    import { ref,watch } from 'vue'
    // 数据
    let person = ref({
        name: '张三',
        age: 18
    })
    // 方法
    function changename() {
        person.value.name += '~'
    }
    function changeage() {
        person.value.age += 2
    }
    function changeperson(){
        person.value = {name:'李四',age:20}
    }

    // 监视 况二:监视ref定义的对象类型的数据 监视的是地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    // watch第一个参数是需要监视的值，第二个参数是回调函数，第三个参数是是否开启深度监视
    watch(person,(newValue,oldValue)=>{
        console.log('person',newValue,oldValue)
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