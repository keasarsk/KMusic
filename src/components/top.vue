<template lang="">
  <div class="app">
    <div class="header">
      <div class="top-wrap ">
        <ul>
          <li @click="back"><img src="../../static/images/返回.png" alt=""></li>
          <li @click="forward"><img src="../../static/images/返回2.png" alt=""></li>
          <li @click="ref"><img src="../../static/images/刷新.png" alt=""></li>
        </ul>
      </div>
      <!-- <div class="back_ref" @click="back"> <img src="../../static/images/返回.png" alt=""></div>
      <div class="back_ref" @click="forward"> <img src="../../static/images/返回2.png" alt=""></div>
      <div class="back_ref" @click="ref"> <img src="../../static/images/刷新.png" alt=""></div> -->



      <div class="header-menu">
        <router-link to="/" class="menu-link" active-class="is-active">Music</router-link>
        <router-link to="/article" class="menu-link" active-class="is-active">Life</router-link>
        <router-link to="/playpure" class="menu-link" active-class="is-active">Pure</router-link>
        <!-- <router-link to="/massageboard" class="menu-link" active-class="is-active">MassageBoard</router-link> -->
      </div>

      <!-- 顶部搜索栏 -->
      <!-- <div class="search-bar">
        <input type="text" placeholder="搜索" @keyup.enter='toResult' v-model='searchvalue'>
      </div> -->

      <!-- <div class="header-profile">
        <!-- 右上角小头像 -->
        <!-- <img class="profile-img" src="../../static/images/keasar.jpg" alt="">
      </div> -->
    </div>

    <!-- 主内容 -->
    <Main></Main>

    <!-- <div class="overlay-app"></div> -->

  </div>

</template>
<script>

  import Main from "./main.vue";
  export default {
    data() {
      return {
        //搜索框的内容
        searchvalue: "",
      };
    },
    methods: {
      //搜索框Result的内容
      toResult() {
        if (this.searchsong == "") {
          alert("内容不能为空");
        } else {
          // this.$router.push("./search?q=" + this.searchvalue);
          this.$router.push({ path: '/search', query: { keyworks: this.searchvalue } })
        }
      },
      forward() {
        this.$router.go(1);
      },
      ref() {
        this.$router.go(0);
      },
      back() {
        this.$router.back();
      }
    },
    components: {
      Main,
    },
  };
</script>
<style lang="">
  #app {
    max-width: 1500px;
    width: 100%;
  }


  .top-wrap{
    margin-right: 105px;
    
  }
  .top-wrap ul{
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }
  .top-wrap ul li{
    list-style: none;
    margin: 0 10px;
    cursor: pointer;
    width: 16px;
    height:16px;
  }
</style>