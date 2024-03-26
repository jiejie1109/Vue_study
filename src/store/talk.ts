import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

// export const useTalkStore = defineStore('talk',{
//      actions:{
//         async  getAtalTalk(){
//             // 下面是连续解构 data 中的 content 并且重命名
//             let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//             // 把请求回来的字符串，包装成一个对象
//             let obj = { id: nanoid(), title }
//             this.talkList.unshift(obj)
//         }
//     },
//     // 存储数据的地方
//     state:()=>{
//         return {
//             talkList:[
//                 {id:'111',title:'aaa'},
//                 {id:'222',title:'bbb'},
//                 {id:'333',title:'ccc'},
//             ]
//         }
//     },
// })


export const useTalkStore = defineStore('talk',{
    actions:{
       async  getAtalTalk(){
           // 下面是连续解构 data 中的 content 并且重命名
           let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
           // 把请求回来的字符串，包装成一个对象
           let obj = { id: nanoid(), title }
           this.talkList.unshift(obj)
       }
   },
   // 存储数据的地方
   state:()=>{
       return {
           talkList:[
               {id:'111',title:'aaa'},
               {id:'222',title:'bbb'},
               {id:'333',title:'ccc'},
           ]
       }
   },
})