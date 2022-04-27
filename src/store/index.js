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
      'static/songs/1874.mp3',
      'static/songs/白玫瑰.mp3',
      'static/songs/不能说的秘密.mp3',
      'static/songs/不要说话.mp3',
      'static/songs/李香兰.mp3',
      'static/songs/路小雨.mp3',
      'static/songs/葡萄成熟时.mp3',
      'static/songs/是但求其爱.mp3',
      'static/songs/唯一.mp3',
      'static/songs/我.mp3',
      'static/songs/无条件.mp3',
      'static/songs/消愁.mp3',
      'static/songs/一生所爱.mp3',
      'static/songs/以父之名.mp3',
      'static/songs/月半小夜曲.mp3',
      'static/songs/AThousandYears.mp3',
      'static/songs/MerryChristmasMe.m4a',
      'static/songs/ParadiseHowFar.mp3',
      'static/songs/SilhouettesOfYou.mp3',
      'static/songs/TheScientist.m4a',

      // 想使用网易云api得先下载服务
      // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
    ],
    // 当前歌曲序号
    audioSrcNum:0,

    // 当前歌曲名
    audioSrcName:"葡萄成熟时"

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
    // 
    changAudioName(state,value){
      state.audioSrcName = value
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