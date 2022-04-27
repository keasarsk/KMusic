<template>
  <div class="root">
    
    <div style="float:right;">
      {{this.$store.state.realTime}}
    </div>

    <!-- ul,li装载格子滚动显示歌词 -->
    <!-- // lyricIndex为当前歌曲播放的进度在歌词中的位置，进而改变正在播放的歌词的样式 -->
    <ul class="lyric" ref="lyric">
        <li :class="{each:true, choose: (index==lyricIndex)}" v-for="(item, key, index) in currentMUsicLyric" :key="key">{{item}}</li>
    </ul>
  </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {

    data() {
      return {
        // 当前播放的歌词
        lyric:"",
        currentMUsicLyric:{},
        //当前歌词进度
        lyricIndex: 0,
        // 当前歌曲进度
        value:"0:0",

      };
    },
    computed:{
      ...mapState('lyrics',['lyrickey']),
      ...mapState(['audioSrcs','audioSrcNum','audioSrcName'])
    },
    
    methods: {
      // 得到当前歌词
      getlyric(){
        //每秒执行一次
        setInterval(() => {

          console.log("this.audioSrcName",this.audioSrcName);

          // 歌词变化了
          if (this.lyric!=this.lyrickey[this.audioSrcName]) {
            // 就把滚动条滚到最上面
            this.$refs.lyric.scrollTop = 0;

            // if (this.audioSrcName in this.lyrickey){
            if (this.lyrickey.hasOwnProperty(this.audioSrcName)){
              
              // 从store根据this.audioSrcNum获取当前正在播放的歌曲的歌词
              // this.lyric = this.lyrics[this.audioSrcNum];
              this.lyric = this.lyrickey[this.audioSrcName];
              // 然后调用方法对歌词进行处理
              this.processlyric();
            }
            else{
              this.lyric = "[00:00.16]"+ this.audioSrcName + "[00:10.16][04:01.16]Enjoy~[04:06.53]"
              this.processlyric();
            }

          }
          console.log("this.lyrickey[this.audioSrcName]",this.lyrickey[this.audioSrcName]);

          
          

        }, 1000);
      },

      // 得到当前歌曲播放时间
      getvalue(){
        //每秒执行一次
        setInterval(() => {
          let valuestr = this.$store.state.realTime
          let m = parseInt(valuestr.split(':')[0])
          let s = parseInt(valuestr.split(':')[1])
          this.value = m*60 + s;

          let i = 0
          // 循环歌词对象
          for (let key in this.currentMUsicLyric) {
          // key表示歌词对象中的时间，如果key等于歌曲进度value，改变当前歌词进度		lyricIndex
            if (+key == this.value+1) {
              this.lyricIndex = i;
              // 当歌词进度大于5，即播放到了第5句歌词，开始滚动
              if (i > 5) {
                  this.$refs.lyric.scrollTop = 30 * (i - 5);
              }
            }
            i++;
          }
        }, 1000);
      },

      // 处理歌词格式
      processlyric(){
            // 处理歌词，转化成key为时间，value为歌词的对象
        let lyricArr = this.lyric.split('[').slice(1); // 先以[进行分割
        let lrcObj = {};
        lyricArr.forEach(item => {
            let arr = item.split(']');	// 再分割右括号

            // // 时间换算成秒
            let m = parseInt(arr[0].split(':')[0])
            let s = parseInt(arr[0].split(':')[1])
            arr[0] = m*60 + s;
            // arr[0] = arr[0].slice(0,5)
            // console.log("arr[0]",arr[0]);
            if (arr[1] != '\n') { // 去除歌词中的换行符
                lrcObj[arr[0]] = arr[1];
            }
        })

        // 存储数据
        this.currentMUsicLyric = lrcObj;
      }
    },

    // 钩子函数
    // 组件调用时就加载
    created() {
      this.getlyric();
      this.getvalue();
    },

    // 钩子函数
    mounted() {
      
    }
  };
  
</script>
<style>
.lyric {
        width: 650px;
        height: 500px;
        /* position: absolute;
        top: -312px;
        left: 774px; */
        /* background-color: #333; */
        /* // 滚动条 */
        overflow: auto;
        color: #ddd;
        font-size: 15px;
        /* font-weight: normal; */
        /* padding: 5px 10px; */
        /* border: 1px solid #000; */
        border-left: none;

        
}
        .each {
          height: 30px;
          /* // border: 1px solid #000; */
          line-height: 30px;
          text-align: center;
        }
        .choose {
            height: 30px;
            line-height: 30px;
            font-size: 23px;
            color: rgb(0, 0, 255);

        }
        /* // 修改滚动条样式 */
        ::-webkit-scrollbar {
            width: 3px;
            height: 2px;
        }
        /* // 滑块部分 */
        ::-webkit-scrollbar-thumb {
            background-color: rgb(0, 0, 255);
        }
        /* // 轨道部分 */
        ::-webkit-scrollbar-track {
            background-color: #333;
        }
    

</style>