import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import images from './images'
import lyrics from './lyrics'
// import songinfo from './songinfo'

Vue.use(Vuex)

export default new Vuex.Store({
  //歌曲生成周期
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],

  state:{
    // 歌曲总时长
    songTime:"0:0",
    // 当前歌曲时间
    realTime:"0:0",
    // 歌曲列表
    audioSrcs:[
        'static/songs/SilhouettesOfYou.mp3',
        'static/songs/AThousandYears.mp3',
        'static/songs/MerryChristmasMe.m4a',
        'static/songs/Paradise…HowFar.mp3',
        'static/songs/TheScientist.m4a',
        'static/songs/葡萄成熟时.mp3'
        // 想使用网易云api得先下载服务
        // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
    ],
    // 当前歌曲序号
    audioSrcNum:0,

},
  //mutations用于修改state
  //Async 异步
  mutations: {
    // 改变歌曲总时间
    changSongT(state,value){
      state.songTime = value
    },
    // 改变歌曲当前时间
    changSongC(state,value){
      state.realTime = value
    },
    // 改变当前歌曲序号
    changAudioNum(state,value){
      state.audioSrcNum = value
    },

  },
  actions: {

  },
  modules:{
    // songInfo:songinfo
    lyrics:lyrics,
    images:images
  }
})