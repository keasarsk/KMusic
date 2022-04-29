<template lang="">
    <div class="main-container">

        <div class="content-wrapper">
            
            <div class="content-wrapper-header">
                <div class="content-wrapper-header-padding">
                    <div class="content-wrapper-context">
                        <h3 class="img-content" style="text-indent: 2em; ">
                            在我们的有生之年，从事自己热爱的事业，和自己喜欢的人在一起，偶尔做些喜欢的事，大概就是活着的意义。
                        </h3>
                        
                        <div class="content-text" style="position:relative; left:300px;">
                            《目光》— 陶勇
                        </div>
                        
                        <!-- <button class="content-button">
                            <router-link class="content-button" :to="{ path:'/search',query:{keyworks:'境界的彼方'}}">???
                            </router-link>
                        </button> -->
                    </div>
                </div>
                <img class="content-wrapper-img" src="../../static/images/zgr1.jpg" alt="">
            </div>


            <div class="content-section">
                <div class="content-section-title">推荐歌曲</div>
                <ul class="search_ul">
                    <!-- <li class="adobe-product" v-for="item in newmusic"> -->
                    <li class="adobe-product" v-for="(val,key,item) in audioSrcAuthorName" >

                        <!-- 歌名 -->
                        <!-- 歌名点击播放 -->
                        <div class="products" @click="playMusic(item,key)">{{key}}</div>
                        <!-- 作者 -->
                        <span class="status">
                            <span class="status-circle green"></span> {{val}}</span>
                        <!-- 时长 -->
                        <!-- <span class="status">{{}}</span> -->
                        <!-- 备注 -->
                        <!-- <span class="status">{{item.song.alias[0]}}</span> -->
                        <span class="status">"什么是一生最正确的浪费"</span>
                        <div class="button-wrapper">

                            <!-- 播放音乐 -->
                            <div class="clicksvg" @click="playMusic(item,key)">
                                <svg t="1639295337775" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2313" width="40" height="40">
                                    <path
                                        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                                        p-id="2314" fill="#e6e6e6"></path>
                                    <path
                                        d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                                        p-id="2315" fill="#e6e6e6"></path>
                                </svg>
                            </div>

                        </div>
                    </li>
                </ul>
            </div>

            <div class="content-section">
                <div class="content-section-title">歌单</div>
                <div class="apps-card">
                    <div class="block" v-for="item in indexsonglist" @click="openplaylist(item.id)">
                        <el-image class="songlistimg app-card" :src="item.coverImgUrl"></el-image>
                        <h5 class="songlisttext">{{item.name}}</h5>
                    </div>
                </div>
                <!-- //分页 -->
                <div class="block">
                    <el-pagination v-if="count!=0" @current-change="handleCurrentChange"
                        :current-page.sync="currentPage" :page-size="10" layout="prev, pager, next, jumper"
                        :total="count" :background="true">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
    import { playMusicApi, getLyricApi, getdetailApi, getsongList, getnewmusic } from '../request/api.js'


    export default {
        data() {
            return {

                //歌单数据
                indexsonglist: [],
                //初始页
                currentPage: 1,
                count: "",
                //新歌曲推荐
                newmusic: [],
                // 歌曲数组
                musicList: [],
                // 歌曲地址
                musicUrl: "",
                DownloadSongUrl: "",
                activeName: 'second',
                //音乐地址
                songurladd: null,
                //歌词
                songlrc: "",
            }
        },
        computed:{
            ...mapState(['audioSrcAuthorName','audioPlayState','audioSrcName'])
        },
        created() {

            this.showsongList();
            this.newmusicc();
        },
        methods: {
            //分页
            handleCurrentChange: function (currentPage) {
                // console.log(`当前页: ${currentPage}`);
                this.currentPage = currentPage;
                // console.log(this.currentPage)
                this.showsongList(currentPage)
            },
            //获取歌单
            showsongList(page = 1) {
                getsongList({
                    limit: 15,
                    offset: (page - 1) * 15
                }).then(res => {
                    this.indexsonglist = res.data.playlists;
                    this.count = res.data.total;
                    // console.log(this.count)
                    // console.log(this.indexsonglist)
                })
            },
            //新歌推荐
            newmusicc() {
                getnewmusic({
                }).then(res => {
                    this.newmusic = res.data.result;
                    // console.log(this.newmusic)
                    //计算歌曲时间
                    for (let i = 0; i < this.newmusic.length; i++) {
                        let min = parseInt(this.newmusic[i].song.duration / 1000 / 60)
                        let sec = parseInt((this.newmusic[i].song.duration / 1000) % 60)
                        if (min < 10) {
                            min = '0' + min
                        }
                        if (sec < 10) {
                            sec = '0' + sec
                        }
                        this.newmusic[i].song.duration = min + ":" + sec;
                        // console.log(this.newmusic[i].song.duration)
                    }
                })
            },



            // 播放歌曲
            playMusic(id,name) {
               
                // 改变当前歌曲num
                this.$store.commit("changAudioNum",id);
                // 改变当前歌曲名
                this.$store.commit("changAudioName",name)

                // 改变当前歌曲状态为TRUE
                if (!this.audioPlayState){
                    this.$store.commit("changaudioPlayStateT",1)
                    // console.log('contentme this.audioPlayState',this.audioPlayState);
                }

            },


            openplaylist(playlistid) {
                this.$router.push({ path: '/Playlist', query: { playlistid: playlistid } })
            }
        },

    };
</script>
<style lang="">

</style>