// 当前song信息
// 模块化之后
export default {
    // 需要写上这个才能在vc中使用mapXXX
    namespaced:true,
  
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
    actions:{
    },
    mutations:{
        changC(state,value1){
            console.log('changSongC被')
            state.realTime = value1
        },
        changSongT(state,value){
            console.log('changSongT被')
            state.songTime = value
        }
        
    },
    getters:{
      
    }
  }