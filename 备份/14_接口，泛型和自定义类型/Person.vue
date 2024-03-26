<template>
    <div class="person">

    </div>
</template>


<script lang="ts" setup name="Person">
    import {type PersonInterface,type Persons} from '@/types'
    // let person:PersonInterface = {
    //     id:'asdf123456',
    //     name:'张三',
    //     age:18
    // }
    let peopleList:Persons =[
        {
            id:'asdf1231116',
            name:'张1',
            age:18
        },
        {
            id:'asdf123422256',
            name:'张2',
            age:18
        },
        {
            id:'asdf123433356',
            name:'张3',
            age:18
        }
    ]

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