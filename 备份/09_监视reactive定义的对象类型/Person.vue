<template>
    <div class="person">
        <h1>情况三:监视reactive定义的对象类型的数据</h1>
        <h2>姓名：{{ person.name  }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changename">修改名字</button>
        <button @click="changeage">修改年龄</button>
        <button @click="changeperson">修改整个人的</button>
    </div>
</template>


<script lang="ts" setup name="person">
    import { reactive,watch } from 'vue'
    // 数据
    let person = reactive({
        name: '张三',
        age: 18
    })
    // 方法
    function changename() {
        person.name += '~'
    }
    function changeage() {
        person.age += 2
    }
    function changeperson(){
        //Object.assign 处理reactive对象 在原对象地址上修改
        Object.assign(person,{name:'李四',age:20})
    }

    // 监视 情况三：监视reactive定义的对象类型数据,且默认是开启深度监视的
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