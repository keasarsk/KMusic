<template lang="">
    
    <!-- <div>
    Article
    </div> -->
    
    <div class="wrapper">
       
        <!-- 左边栏 -->
        <div class="left-side">
        <!-- <div> -->
            <div class="side-wrapper">
            <!-- <div> -->
                <div class="side-title">Film</div>
                <div class="side-menu">
                    <router-link to="/test">
                    <a href="#">
                        <img src="../assets/LifeFilmJpg/流浪地球.jpeg" alt=""> 科幻
                    </a>
                    </router-link>
                    <a href="#">
                        <img src="../assets/LifeFilmJpg/风之谷.jpeg" alt=""> 动画
                    </a>
                    <a href="#">
                        <img src="../assets/LifeFilmJpg/功夫.jpeg" alt=""> 喜剧
                    </a>
                    <a href="#">
                        <img src="../assets/LifeFilmJpg/不能说的秘密.jpeg" alt=""> 爱情
                    </a>
                    <a href="#">
                        <img src="../assets/LifeFilmJpg/活着.jpeg" alt=""> 人文
                    </a>
                </div>
            </div>
            <div class="content-wrapper.overlay">
                <div class="side-title">番剧</div>
                <div class="side-menu">
                    <a href="#">
                        <img src="../assets/LifeTeleJpg/进击的巨人.jpeg" alt="">动漫
                    </a>
                    <a href="#">
                        <img src="../assets/LifeTeleJpg/康熙王朝.jpeg" alt="">历史剧
                    </a>
                    <a href="#">
                        <img src="../assets/LifeTeleJpg/武林外传.jpeg" alt="">综合
                    </a>
                </div>
            </div>
            <div class="side-wrapper">
                <div class="side-title">Books</div>
                <div class="side-menu">
                    <a href="#">
                        文学
                    </a>
                    <a href="#">
                        历史
                    </a>
                    <a href="#">
                        小说
                    </a>
                </div>
            </div>
        </div>

        <!-- 主要内容 -->
        <div>
            test
        </div>
    </div>
</template>

<script>
import Test from './test.vue';
export default {


  //路由重新刷新
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>
<style lang="">
</style>