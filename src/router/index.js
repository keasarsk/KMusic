import Vue from 'vue'
import Router from 'vue-router'
import Content from '../views/Content.vue'
import search from '../views/SongSearch.vue'
import defaultlist from '../views/defaultList.vue'
import playmv from '../views/playmv.vue'
import newmv from '../views/newMV.vue'
import radio from '../views/radio.vue'
import wallpaper from '../views/wallpaper.vue'
import Playlist from '../views/PlaylistDetails.vue'
import Leaderboard from '../views/Leaderboard.vue'
import singerlist from '../views/singerlist.vue'
import album from '../views/album.vue'
import Article from '../views/Article.vue'
import Author from '../views/Author.vue'
import Images from '../views/Images.vue'
import Massageboard from '../views/Massageboard.vue'


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
