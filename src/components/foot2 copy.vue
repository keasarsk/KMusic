<template>
    <div class="music">
        <Affix :offset-bottom="20">
            <div class="music__main__cover">
                <img src="../assets/1.jpg" />
            </div>
        <div class="music__main">
            
            <!-- <el-icon><refresh-left /></el-icon> -->
            <!-- 背景 -->
            <div class="music__mask"></div>
            <audio ref="music" :src="audioSrc"></audio>        
        </div>
        </Affix>
    </div>
</template>

<script>
    export default {
        data() {
            this.audioSrcs = [
                'static/songs/AThousandYears.mp3', // 
                'static/songs/MerryChristmasMe.m4a',
                'static/songs/Paradise…HowFar.mp3',
                'static/songs/TheScientist.m4a'
                // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
                // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
                // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
                // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
                // 'https://api.imjad.cn/cloudmusic/?type=song&id=1712252053',
            ];
            return {
                isPlay: false,
                realMusicTime: "00:00",
                totalMusicTime: "00:00",
                audioSrc: this.audioSrcs[0]
            };
        },
        
        created() { },
        mounted() {
            this.watchMusicTime();
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
            switchIcon(){
                if (this.music.paused) {
                    this.music.play();
                    this.isPlay = true;
                } else {
                    this.music.pause();
                    this.isPlay = false;
                }
            },
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
                this.isPlay = false;
                this.audioSrc = this.audioSrcs[Math.floor(Math.random() * 5)];
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
            change1() {
                this.$refs.on.style.display = "block";
                this.$refs.off.style.display = "none";
            },
            change2() {
                this.$refs.on.style.display = "none";
                this.$refs.off.style.display = "block";
            }
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
        width: 80px;
        /* background-image: url('../assets/green.jpg'); */

        margin: 0 auto;
        /* 圆角 */
        border-radius: 15px;


        position: fixed;
        left:25px;
        top:bottom - 80px;

        
        padding: 0px;
        box-sizing: border-box;
        overflow: hidden;
        &__main {
            display: flex;
            &__cover {
                width: 80px;
                height: 80px;
                overflow: hidden;
                border-radius: 50%;
                background-color: #dddddd;
                cursor: pointer;
                animation: musicRotate 10s linear infinite;
                animation-play-state: paused; // 暂定动画
                img {
                    width: 100%;
                    height: 100%;
                }
                &.active {
                    animation-play-state: running; // 运行动画
                }
            }
            
        }
        
        &__mask {
            background-image: url('../assets/green.jpg');
            z-index: -2;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
            border-radius: 30px;
            /* filter: blur(-1px); */
            opacity:0.9;
            transition: all 0.8s;
            position: absolute;
            top: -11px;
            right: -13px;
            left: -12px;
            bottom: -11px;
            &::before {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                z-index: -1;
                content: '';
                background-color: rgba(0, 0, 0, 0.08);
            }
        }
    }
    </style>