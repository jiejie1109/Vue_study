<template>
    <div class="news">
        <ul>
            <li v-for="(item,index) in newSList" :key="index">
              <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail?id=${item.id}&title=${item.title}&content=${item.content}`">{{ item.title }}</RouterLink> -->
              <!-- 第二种写法 -->
                <router-link :to="{
                  path: '/news/detail',
                  query: {
                    id: item.id,
                    title: item.title,
                    content: item.content
                  }
                }">
                  {{ item.title }}
                </router-link>
              </li>
        </ul>
        <div class="news-content"> 
            <RouterView></RouterView>  
        </div>    
    </div>
</template>

<script lang="ts" setup name="News">
    import { ref,reactive } from 'vue'
    import { RouterView ,RouterLink} from 'vue-router';
    const newSList = reactive([
        {id:1,title:'新闻1',content:"111"},
        {id:2,title:'新闻2',content:"222"},
        {id:3,title:'新闻3',content:"333"},
        {id:4,title:'新闻4',content:"444"},
    ])

</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news li::marker{
  color: #000;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>