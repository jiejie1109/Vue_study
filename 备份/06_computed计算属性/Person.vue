<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"> <br>
        名：<input type="text" v-model="lastName"> <br>
        全名：<span>{{fullName}}</span> <br>
        <button @click="updateFullName">更新全名</button>
    </div>
</template>


<script lang="ts" setup name="person">
    import { ref ,computed} from 'vue'
    let firstName = ref('zhang')
    let lastName = ref('san')

    // 定义一个FullName计算属性,并且是只读
    // let fullName = computed(()=>{
    //     return firstName.value + lastName.value

    // })

    // 定义一个FullName计算属性,并且是可读可写
    let fullName = computed({
        get(){
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1)+ '-' + lastName.value
        },
        set(val){
            const[str1,str2]=val.split("-")
            firstName.value = str1
            lastName.value = str2
        }
    })
    function updateFullName(){
        fullName.value = "li-si"
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