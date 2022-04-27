<template>
  <div class="m">
      
      <div>
      <div class="left">
          <div class="left-img">
            <!-- <img class="content-wrapper-img" src="static/images/zgr1.jpg" alt=""> -->
            <img class="content-wrapper-img" :src="image" alt="">

          </div>
      </div>
      <!-- 右半边歌词 用组件playlyricme实现 -->
      <div class="right">
        <playlricyme></playlricyme>
        
      </div>
    </div>
  </div>
  
</template>

<script>
import playlricyme from "./playlricyme.vue";
import test from "./test.vue";
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    data() {
      return {
        image:"static/images/songImages/葡萄成熟时.jpg"
      };
    },
    computed:{
      ...mapState('images',['images']),
      ...mapState(['audioSrcNum','audioSrcName'])

    },
    methods: {
      // 换图片
      getImage(){
          //每秒执行一次 进行检测
        setInterval(() => {

          // 从store根据this.audioSrcNum获取当前正在播放的歌曲的图片
          // this.image = this.images[this.audioSrcNum];
          if (this.images[this.audioSrcName]){
            this.image = this.images[this.audioSrcName];
          }
          else {
            this.image = "static/images/songImages/zgr2.jpg"
          }
        }, 1000);
      }
    },
    components: {
        playlricyme,
        test
    },
    created() {
      this.getImage();
    },
  };
</script>
<style>

.m{
    width: 100%;            
    height: 100%;        
    /* background-color: red;             */
    position: relative;   
}
/* 这里是左边 */
.left {
    /* width:30%; */
    float:left; 
    /* height: 100%; */
    background-color: blue;        
    
    float: left;
    /*display: inline-block;*/
    width: 50%;
    height: 40%;
    word-wrap: break-word;
    /*//   border-bottom: 3px solid red;*/

}
.left-img{
    position: absolute;            
    top: 40%;            
    left: 25%;            
    transform: translate(-50%, -50%);    
}
/* 这里是右边 */
.right {
    width: 40%;
    float:right;
    height: 65%;
    /* background-color: yellow;  */
    position: absolute;            
    left: 55%;           
    /* bottom: 1%;  */
    top: 10%;          


    display: flex; /**/
    justify-content: center; /*水平居中*/
    align-items: Center; /*垂直居中*/
}



</style>