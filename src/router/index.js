import Vue from 'vue'
import Router from 'vue-router'
import Content from '../views/Content.vue'
// import playpure from '../views/Article.vue'
import playpure from '../views/playpureme.vue'
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
import Albumme from '../views/Albumme.vue'
// import Article from '../components/playpure.vue'
// import Article from '../views/Content1.vue'


import Author from '../views/Author.vue'
import Images from '../views/Images.vue'
// import MassageBoard from '../views/MassageBoard.vue'
import MassageBoard from '../views/MassageBoardMe.vue'
import addmessage from '../views/AddMassage.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content,
      // redirect:'/content',
      // children:[{
      //   path: '/content',
      //   name: 'Content',
      //   component: Content,
      
      // }]
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
      component:MassageBoard
    },
    {
      path:'/author',
      name:'author',
      component:Author
    },
    {
      path:'/playpure',
      name:'playpure',
      component:playpure
    },
    {
      path:'/albumme',
      name:'Albumme',
      component:Albumme
    },
    {
      path:'/addmessage',
      name:'addmessage',
      component:addmessage
    },

  ]
})
