import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
// import songinfo from './songinfo'

Vue.use(Vuex)

export default new Vuex.Store({
  //歌曲生成周期
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],

  state:{
    // songName:'葡萄成熟时',
    // songAuthor:'陈奕迅',
    // 歌曲总时长
    songTime:"0:0",
    // 当前歌曲时间
    realTime:"0:0",
    // 歌词文件
    songLyric:"",
    audioSrcs:[
        'static/songs/AThousandYears.mp3',
        'static/songs/MerryChristmasMe.m4a',
        'static/songs/Paradise…HowFar.mp3',
        'static/songs/TheScientist.m4a',
        'static/songs/葡萄成熟时.mp3'
        // 想使用网易云api得先下载服务
        // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
        // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
        // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
        // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
        // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
    ],
},
  //mutations用于修改state
  //Async 异步
  mutations: {
    // addsong(state, adds) {
    //   state.audioInfo.push({
    //     name: adds.amount1,
    //     artist: adds.amount2,
    //     url: adds.amount3,
    //     cover: adds.amount4,
    //     lrc: adds.amount5,
    //   })
    // },
    changSongT(state,value){
      // console.log('changSongTime被')
      state.songTime = value
      // this.songCurrectTime = value2
    },
    changSongC(state,value){
      // console.log('changSongC被')
      state.realTime = value
      // this.songCurrectTime = value2
    }
  },
  //actions专门用来做异步处理
  actions: {

  },
  modules:{
    // songInfo:songinfo
  }
})