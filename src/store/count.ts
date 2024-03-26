import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    actions:{
        increment(value:number){
            if(this.sum<10){
                this.sum++
            }
        }
    },
    // 存储数据的地方
    state:()=>{
        return {
            sum:6
        }
    },
})


