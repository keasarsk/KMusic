import Vue from 'vue'
import Router from 'vue-router'
import Content from '../Views/Content.vue'
import search from '../Views/SongSearch.vue'
import defaultlist from '../Views/defaultList.vue'
import playmv from '../Views/playmv.vue'
import newmv from '../Views/newMV.vue'
import radio from '../Views/radio.vue'
import wallpaper from '../Views/wallpaper.vue'
import Playlist from '../Views/PlaylistDetails.vue'
import Leaderboard from '../Views/Leaderboard.vue'
import singerlist from '../Views/singerlist.vue'
import album from '../Views/album.vue'
import Article from '../Views/Article.vue'
import Author from '../Views/Author.vue'
import Images from '../Views/Images.vue'
import Massageboard from '../Views/Massageboard.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/content',
      name: 'Content',
      component: Content,
    },
    {
      path:'/search',
      name:'search',
      component:search,
      props:true,
    },
    {
      path:'/defaultlist',
      name:'defaultlist',
      component:defaultlist
    },
    {
      path:'/playmv',
      name:'playmv',
      component:playmv
    },
    {
      path:'/newmv',
      name:'newmv',
      component:newmv
    },
    {
      path:'/radio',
      name:'radio',
      component:radio
    },
    {
      path:'/wallpaper',
      name:'wallpaper',
      component:wallpaper
    },
    {
      path:'/Playlist',
      name:'Playlist',
      component:Playlist
    },
    {
      path:'/Leaderboard',
      name:'Leaderboard',
      component:Leaderboard
    },
    {
      path:'/singerlist',
      name:'singerlist',
      component:singerlist
    },
    {
      path:'/album',
      name:'album',
      component:album
    },


    {
      path:'/article',
      name:'article',
      component:Article
    },
    {
      path:'/images',
      name:'images',
      component:Images
    },
    {
      path:'/massageboard',
      name:'massageboard',
      component:Massageboard
    },
    {
      path:'/author',
      name:'author',
      component:Author
    },
  ]
})
