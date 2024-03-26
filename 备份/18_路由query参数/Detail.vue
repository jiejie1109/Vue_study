<template>
    <ul class="news-list">
      <!-- <li>编号:{{ router.query.id }}</li>
      <li>标题:{{ router.query.title }}</li>
      <li>内容:{{ router.query.content }}</li> -->

      
      <li>编号:{{ router.query.id }}</li>
      <li>标题:{{ router.query.title }}</li>
      <li>内容:{{ router.query.content }}</li>
    </ul>
  </template>
  
  <script setup lang="ts" name="deatil1">
    import { useRoute } from 'vue-router';
    const router = useRoute();

  </script>
  
  <style scoped>
    .news-list {
      list-style: none;
      padding-left: 20px;
    }
  
    .news-list>li {
      line-height: 30px;
    }
  </style>