<template>
<div>
  <div id="app">
   <Backround></Backround>
    <Top></Top>
    

    <!-- <aplayer></aplayer> -->
  </div>
  <foot></foot>
</div>
  
</template>

<script>
import Backround from './components/backround.vue';
import Top from './components/top.vue';
// import aplayer from './components/aplayer.vue';
// import vab from './components/vueaudiobetter.vue';

import foot from './components/foot.vue';
// import foot2 from './components/foot2 copy.vue';


export default {
  name: 'App',
  components:{
    Top,
    Backround,
    // aplayer,
    foot,
    // foot2
  },

}
</script>

<style>


</style>
