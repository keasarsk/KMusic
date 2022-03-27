<template>
  <div class="root">
    
    <!-- {{currentMUsicLyric}} -->
    <!-- // lyricIndex为当前歌曲播放的进度在歌词中的位置，进而改变正在播放的歌词的样式 -->
    <div style="float:right;">
      {{this.$store.state.realTime}}
    </div>
    <ul class="lyric" v-show="isShowMusicList" ref="lyric">
        <li :class="{each:true, choose: (index==lyricIndex)}" v-for="(item, key, index) in currentMUsicLyric" :key="key">{{item}}</li>
    </ul>
    <!-- {{realTime}}456 -->
    <!-- <input v-model="value"> -->


  </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {

    data() {
      return {
        isShowMusicList:true,
        // item:null,
        // lyric:"[00:00.000] 作词 : 林夕 [00:01.000] 作曲 : Robert Lay [00:14.310]如果 兄妹相称太多 [00:19.610]醒不起喜欢我 [00:20.610] 作词 : 林夕 [00:01.000] 作曲 : Robert Lay [00:14.310]如果 兄妹相称太多 [00:19.610]醒不起喜欢我 [00:00.000] 作词 : 林夕 [00:01.000] 作曲 : Robert Lay [00:14.310]如果 兄妹相称太多 [00:19.610]醒不起喜欢我",
        lyric:"[00:00.00]A Thousand Years - Lancelot[00:07.16]Lyrics by��Christina Perri/David Hodges[00:14.32]Composed by��Christina Perri/David Hodges[00:21.48]Heart beats fast[00:24.05][00:25.25]Colors and promises[00:29.65][00:30.37]How to be brave[00:32.85]How can I love when I'm afraid to fall[00:40.32]But watching you stand alone[00:45.21] [01:02.53]I have died every day waiting for you [01:07.08][01:07.69]Darling don't be afraid[01:09.73][01:10.23]I have loved you for a thousand years[01:16.06][01:16.65]I'll love you for a thousand more[01:22.10][01:28.59]Time stands still[01:31.19][01:32.37]Beauty in all she is[01:36.49][01:37.44]I will be brave[01:39.29][01:40.01]I will not let anything take away[01:47.00][01:47.60]What's standing in front of me[01:52.37][01:52.91]Every breath[01:55.28]Every hour has come to this[02:00.70][02:01.87]One step closer[02:07.89]",
        // currentMUsicLyric:{},
        //当前歌词进度
        lyricIndex: 21,
        // 当前歌曲进度
        value:"0:0",
        // value:97,
        // immediate:false 
      };
    },
    computed:{
      // ...mapState(['songTime','realTime','audioSrcs'])
    },
    // watch: {
    //   // 使用watch监听当前歌曲进度value的变化处理歌词位置
    //   value(value){
    //     // this.immediate = true;
    //     console.log("监视value");
    //     console.log(this.value)
    //     let i = 0
    //     // 循环歌词对象
    //     for (let key in this.currentMUsicLyric) {
    //     // key表示歌词对象中的时间，如果key等于歌曲进度value，改变当前歌词进度		lyricIndex
    //         if (+key == this.value) {
    //             this.lyricIndex = i;
    //             // 当歌词进度大于5，即播放到了第5句歌词，开始滚动
    //             if (i > 5) {
    //                 this.$refs.lyric.scrollTop = 30 * (i - 5);
    //             }
    //         }
    //         i++;
    //     }
    //   }
    // },
    
    methods: {
      getvalue(){
        setInterval(() => {
        

          let valuestr = this.$store.state.realTime
          let m = parseInt(valuestr.split(':')[0])
          let s = parseInt(valuestr.split(':')[1])
          this.value = m*60 + s;
          console.log("监视value");
          console.log(this.value)

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

      processstorerealtime(){

      },
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
    created() {
      this.processlyric();
      this.getvalue();
    },
    mounted() {
      console.log(this.currentMUsicLyric);
      // console.log(this.lyricIndex);
      console.log(this.value);
    }
  };
  
</script>
<style>
.lyric {
        width: 600px;
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
            font-size: 30px;
            color: blue;

        }
        /* // 修改滚动条样式 */
        &::-webkit-scrollbar {
            width: 3px;
            height: 1px;
        }
        /* // 滑块部分 */
        &::-webkit-scrollbar-thumb {
            background-color: #eee;
        }
        /* // 轨道部分 */
        &::-webkit-scrollbar-track {
            background-color: #333;
        }
    

</style>