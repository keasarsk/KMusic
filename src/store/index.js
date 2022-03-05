import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  //歌曲生成周期
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],

  state: {
    //搜索关键字
    songkeyworks: "",
    //歌曲搜索总数
    songcount: "",

    // 左下角播放标
    audioInfo: [
      {
        name: "The Scientist",
        artist: "coldplayer",
        url:"/static/songs/TheScientist.m4a",
        cover: "static/images/吸底模式aplayer图标/1.jpg",
        lrc: "static/songs/The Scientist .lrc",//歌词文件
      },
      {
        name: 'MerryChristmas',
        artist: 'keasar',
        url: '/static/songs/MerryChristmasMe.m4a',
        cover: 'static/images/吸底模式aplayer图标/2.jpg', // prettier-ignore
      },
      {
        name: 'Paradise…HowFar',
        artist: 'Chairs',
        url: '/static/songs/Paradise…HowFar.mp3',
        cover: 'static/images/吸底模式aplayer图标/3.jpg', // prettier-ignore
        lrc: "static/songs/Paradise___ How Far.lrc",
      },
      {
        name: 'A Thousand Years',
        artist: 'Christina Perri',
        url: '/static/songs/AThousandYears.mp3',
        cover: 'static/images/吸底模式aplayer图标/4.jpg', // prettier-ignore
        lrc: 'static/songs/AThousandYears.lrc',

      },
    ],
  },
  //mutations用于修改state
  //Async 异步
  mutations: {
    addsong(state, adds) {
      state.audioInfo.push({
        name: adds.amount1,
        artist: adds.amount2,
        url: adds.amount3,
        cover: adds.amount4,
        lrc: adds.amount5,
      })
    },
  },
  //actions专门用来做异步处理
  actions: {

  }
})