<template>
    <div class="person">
        <h2>姓名：{{name}}</h2> 
        <h2>年龄：{{age}}</h2> 
        <h2>地址：{{address}}</h2> 
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'person', //组件名
        setup() {
            // 数据
            let name = '张三'  //不是响应式的
            let age = 18  //不是响应式的
            let tel = '188888888888' //不是响应式的
            let address = '北京'
            //  方法
            function changeName() {
                name = '李四'  //这样修改，页面是不会变的
            }
            function changeAge() {
                age = 20
            }
            function showTel() {
                alert(tel)
            }
            //  返回数据
            return {
                name,
                age,
                changeName,
                changeAge,
                showTel,
                address
            }
        }
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