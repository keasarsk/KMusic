<template>
    <div style="text-align:center">
        <Affix :offset-bottom="200">
            <!-- <span>Fix at the bottom 20px</span> -->
          
          <!-- <br> -->
          <!-- 此处的ref属性，可以很方便的在vue组件中通过 this.$refs.audio获取该dom元素 -->
          <!-- <audio ref="audio"
                 @pause="onPause"
                 @play="onPlay"
                 @timeupdate="onTimeupdate"
                 @loadedmetadata="onLoadedmetadata"
                 src="static/songs/AThousandYears.mp3"
                 controls="controls">
          <img src="../assets/close.png" alt="">
      
          </audio> -->
        <!-- <h1>111111</h1> -->
        <!-- <br> -->
        <vue-audio
        :src="static/songs/AThousandYears.mp3"
        ></vue-audio>
        </Affix> 

        <!-- <vue-video
        :src="static/songs/AThousandYears.mp3",
        :loop = true ,
        ></vue-video> -->
    
    </div>
    
</template>
<script>
    import Vue from 'vue';
    


    export default {
        computed: {
            // ...mapState(["audioInfo"]),

        },

        mounted() {
            // this.handleEvent()
        },
        methods: {
            // handleEvent() {
            //     const aplayer_app = this.$refs.aplayer;
            //     const counson = this.$store.state.audioInfo.length - 1;
            //     aplayer_app.switch(counson);
            //     aplayer_app.play();
            // }
        },
    }
</script>
<style lang="">

</style>