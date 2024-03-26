<template>
    <div class="person">
        <h1>中国</h1>
        <h2 ref="title2">四川</h2>
        <h2>成都</h2>
        <button @click="ShowLog">点击输出h2中的元素</button>
    </div>
</template>


<script lang="ts" setup name="Person">
    import { ref,defineExpose } from "vue";
    // 创建一个容器,用于存储ref标记的内容
    let title2 = ref()
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    function ShowLog() {
        console.log(title2.value)
    }
    defineExpose({a,b,c})
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
</style>