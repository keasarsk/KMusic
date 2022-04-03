<template>
    <div class="music">
        <Affix :offset-bottom="20">
            <div class="music__mask"></div>

        <div>
            
            <!-- 旋转小图 -->
            <div :class="['music__main__cover',isPlay ? 'active' : '']" @click="play">
                <img src="../assets/1.jpg" />
            </div>
        
            <!-- 背景色 -->
            <!-- <div class="music__mask"></div> -->
            <!-- 进度条 -->
            <div class="music__main__timeBar">
                <div class="time">
                    <span>{{ realMusicTime }}</span>
                    <span>{{ totalMusicTime }}</span>
                </div>
                <div class="bar" ref="bar" @click="handClickBar">
                    <div class="bar__slid" ref="slid" @click="handClickBar"></div>
                </div>
            </div>
 
            <!-- 下一曲 -->
            <div class="music__btn1">
                
                <!-- <i class="el-icon-arrow-right" @click="switchMusic"></i> -->
                <i @click="switchMusic">
                    <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8896 23.7417C19.6365 24.9935 22.0673 23.7449 22.0673 21.5958V5.40423C22.0673 3.25511 19.6365 2.0065 17.8896 3.25828L6.59146 11.3541C5.12173 12.4072 5.12173 14.5928 6.59147 15.6459L17.8896 23.7417Z" fill="#AFB5C0"/>
                        <rect y="4.26471" width="2" height="18" fill="#AFB5C0"/></svg>
                </i>
            </div>
            <!-- 上一曲 -->
            <div class="music__btn2">
                <i @click="switchMusic">
                    <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8896 23.7417C19.6365 24.9935 22.0673 23.7449 22.0673 21.5958V5.40423C22.0673 3.25511 19.6365 2.0065 17.8896 3.25828L6.59146 11.3541C5.12173 12.4072 5.12173 14.5928 6.59147 15.6459L17.8896 23.7417Z" fill="#AFB5C0"/>
                        <rect y="4.26471" width="2" height="18" fill="#AFB5C0"/></svg>
                </i>
            </div>

            <!-- pure模式 -->
            <div class="music__pure">
                <router-link to="/playpure" active-class="is-active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M17.902 15c1.142 0 2.066.925 2.066 2.066v4.867c0 1.141-.925 2.066-2.066 2.066h-1.902v-9h1.902zm-11.836 0c-1.141 0-2.066.925-2.066 2.066v4.867c0 1.142.925 2.067 2.066 2.067h1.934v-9h-1.934zm5.934-15c-7.081 0-12 5.717-12 12.951v6.049h2v-6.085c0-6.306 5.022-9.905 10-9.915 4.978.01 10 3.609 10 9.916v6.084h2v-6.049c0-7.234-4.919-12.951-12-12.951z"/></svg>
                </router-link>
            </div>

            <!-- 播放音乐 audio标签 -->
            <audio ref="music" :src="audioSrc"></audio>        
        </div>
        </Affix>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

    export default {
        data() {
            return {
                isPlay: false,
                realMusicTime: "00:00",
                totalMusicTime: "00:00",
                audioSrc: 'static/songs/SilhouettesOfYou.mp3',
            };
        },
        computed:{
            ...mapState(["audioSrcs","audioSrcNum","lyricsNowIndex"])
        },
        created() { },
        mounted() {
            this.watchMusicTime();
        },
        watch:{
            realMusicTime(){
                // setTimeout(() => {
                // console.log("监视realMusicTime");
                this.$store.commit("changSongC",this.realMusicTime)
            // }, 1000);  
            },
            totalMusicTime(){
                this.$store.commit("changSongT",this.totalMusicTime)
            }
        },
        methods: {
            play() {
                if (this.music.paused) {
                    this.music.play();
                    this.isPlay = true;
                } else {
                    this.music.pause();
                    this.isPlay = false;
                }
            },
            // switchIcon(){
            //     if (this.music.paused) {
            //         this.music.play();
            //         this.isPlay = true;
            //     } else {
            //         this.music.pause();
            //         this.isPlay = false;
            //     }
            // },
            // 处理时间
            handlMusicTime() {
                //用秒数来显示当前播放进度
                let timeDisplay = Math.floor(this.music.currentTime); //获取实时时间
                //分钟
                let minute = parseInt(timeDisplay / 60);
                if (minute < 10) {
                    minute = "0" + minute;
                }
                //秒
                let second = Math.round(timeDisplay % 60);
                if (second < 10) {
                    second = "0" + second;
                }
                this.realMusicTime = minute + ":" + second;
            },
            // 处理进度条
            handMusicBar() {
                let slid = this.$refs.slid;
                let duration = this.music.duration;
                let x = ((this.music.currentTime / duration) * 100).toFixed(2) + "%";
                slid.style.width = x;
            },
            // 处理点击进度条事件
            handClickBar(e) {
                const barTotalWidth = this.bar.offsetWidth; // bar 总宽度
                const rect = e.target.getBoundingClientRect(); // 元素右边距离页面边距的距离 返回上下左右
                let length = e.pageX - rect.left;
                this.music.currentTime = length / barTotalWidth * this.music.duration; // 计算播放时间 位置百分比*总时间
                this.$nextTick(() => {
                    this.music.play();
                    this.isPlay = true;
                })
            },
            // 切换歌曲
            switchMusic() {
                // 改变当前在播歌曲号
                this.$store.commit("changAudioNum",(this.audioSrcNum + 1)%this.audioSrcs.length);
                this.isPlay = false;
                // 随机切歌
                // this.audioSrc = this.audioSrcs[Math.floor(Math.random() * 5)];
                // 顺序切歌
                this.audioSrc = this.audioSrcs[this.audioSrcNum];
                this.music.load()
                // 文件下载完毕，如果不用等到全部下载完毕，可以用canplay事件
                this.music.addEventListener("canplaythrough", () => {
                    this.music.play();
                    this.isPlay = true;
                });

            },
            //使用事件监听方式捕捉事件
            watchMusicTime() {
                this.music = this.$refs.music;
                this.bar = this.$refs.bar;
                this.music.addEventListener(
                    "timeupdate",
                    () => {
                        this.handlMusicTime();
                        this.$nextTick(() => {
                            this.handMusicBar();
                        })
                    },
                    false
                );
                // 播放完毕
                this.music.addEventListener("ended", () => {
                    this.switchMusic(); // 自动播放
                });
                // 捕获音频文件已准备完毕
                // 当媒体文件可以播放的时候会触发oncanplay事件,也可以用oncanplay
                this.music.oncanplaythrough = () => {
                    let time = this.music.duration;
                    //分钟
                    let minutes = parseInt(time / 60);
                    if (minutes < 10) {
                        minutes = "0" + minutes;
                    }
                    //秒
                    let seconds = Math.round(time % 60);
                    if (seconds < 10) {
                        seconds = "0" + seconds;
                    }
                    this.totalMusicTime = minutes + ":" + seconds;
                };

            },
            // change1() {
            //     this.$refs.on.style.display = "block";
            //     this.$refs.off.style.display = "none";
            // },
            // change2() {
            //     this.$refs.on.style.display = "none";
            //     this.$refs.off.style.display = "block";
            // }
        }
    };
    </script>
<style lang="less">
    @keyframes musicRotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .music {
        width: 500px;
        /* background-image: url('../assets/green.jpg'); */

        margin: 0 auto;
        /* border-radius: 15px; */
        /* 边缘圆角 */
        border-radius: 30px;
        position: relative;
        padding: 0px;
        box-sizing: border-box;
        overflow: hidden;
        
        &__main {
            
            display: flex;

            &__cover {
                position: relative;
                width: 80px;
                height: 80px;
                left: 41%;
                overflow: hidden;
                border-radius: 50%;
                background-color: #dddddd;
                cursor: pointer;
                animation: musicRotate 10s linear infinite;
                animation-play-state: paused; 
                img {
                    width: 100%;
                    height: 100%;
                }
                &.active {
                    animation-play-state: running; 
                }
            }
            &__timeBar {
                border-radius: 15px;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                /* padding-left: 100px; */
                padding-top: 5px;
                /* bottom: 5px ; */


                box-sizing: border-box;
                .time {
                    display: flex;
                    justify-content: space-between;
                    color: #fff;
                    span {
                        font-size: 15px;
                        line-height: 1;
                    }
                }
                .bar {
                    height: 5px;
                    background-color: #fbfbfb;
                    border-radius: 8px;
                    position: relative;
                    
                    overflow: hidden;
                    cursor: pointer;
                    &__slid {
                        position: absolute;
                        left: 0;
                        top: 0;
                        background-color: #000080;
                        height: 100%;
                        width: 0;
                        transition: width 0.3s;
                    }
                }
            }
        }
        &__btn {
            /* 播放按钮的css */
            position: absolute;
            right: 50%-4px;
            top: 17%;
            i {
                font-size: 55px;
                color: #fff;
                cursor: pointer;
            }
        }
        &__btn1 {
            /* 右切歌按钮 */
            transform: rotate(180deg);
            position: absolute;
            right: 35%-4px;
            top: 24%;
            i {
                font-size: 30px;
                color: #fff;
                cursor: pointer;
            }
        }
        &__btn2 {
            /* 左切歌按钮 */
            position: absolute;
            right: 65%+2px;
            top: 28%;

            i {
                font-size: 30px;
                color: #fff;
                cursor: pointer;
            }
        }
        &__pure {
            position: absolute;
            right: 10px;
            top: 35%;
            i {
                font-size: 25px;
                color: #fff;
                cursor: pointer;
            }
        }
        &__mask {
            background-image: url('../assets/green.jpg');
            z-index: -2;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
            border-radius: 30px;
            filter: blur(-1px);
            opacity:0.8;
            transition: all 0.8s;
            position: absolute;
            top: -11px;
            right: -13px;
            left: -12px;
            bottom: -11px;
            /* &::before {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                z-index: -1;
                content: '';
                background-color: rgba(0, 0, 0, 0.08);
            } */
        }
    }
   
  
    </style>