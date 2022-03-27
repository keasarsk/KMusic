<template>
  <div class="m">
      
      <div>
      <div class="left">
          <!-- leftpaddingpaddingpaddingpaddingpaddingpaddingpaddingpaddingpaddingpaddingp
        <br>
          <div>
              lsflahflrfhhkrdfnh
          </div>
          <br> -->
          <div class="left-img">
            <img class="content-wrapper-img" src="../../static/images/zgr1.jpg" alt="">

          </div>
      </div>
      <div class="right">
        <playlricyme></playlricyme>
        <!-- <test></test> -->
        
      </div>
    </div>
  </div>
  
</template>

<script>
import playlricyme from "./playlricyme2.vue";
import test from "./test.vue";
  export default {
    data() {
      return {

      };
    },
    methods: {
      
    },
    components: {
        playlricyme,
        test
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