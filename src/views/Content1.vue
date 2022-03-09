<template>
  <div id = 'root' class="wrapper">
    <div class="player">
      <div class="top">
        <div id="yt-player" ref="yt-player"></div>
        <div class="artist">
          <div class="name">
            {{artist}}
          </div>
          <div class="title">
            {{title}}
          </div>
        </div>
        <div class="time">
          <div class="complete">{{showPlayTime}}</div>
          <div class="current">{{showCurrentPlayTime}}</div>
        </div>
  
        <div class="record-wrapper">
          <div class="record" :class="{spin: isPlaying}">
            <div class="image" :style="{backgroundImage: `url(${recordImage})`}"></div>
          </div>
        </div>
      </div>
      <div class="controls">
        <div class="grid">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5C1 2.79086 2.79086 1 5 1V1C7.20914 1 9 2.79086 9 5V5C9 7.20914 7.20914 9 5 9V9C2.79086 9 1 7.20914 1 5V5Z" stroke="#5D626C" stroke-width="2" stroke-linecap="square"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1H21V9H13V1Z" stroke="#5D626C" stroke-width="2" stroke-linecap="square"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 13H9V21H1V13Z" stroke="#5D626C" stroke-width="2" stroke-linecap="square"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 13H21V21H13V13Z" stroke="#5D626C" stroke-width="2" stroke-linecap="square"/>
  </svg>
        </div>
        <div class="repeat">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5H4V9H2V3H14V0L18 4L14 8V5ZM4 15H14V11H16V17H4V20L0 16L4 12V15Z" fill="#AFB5C0"/>
  </svg>
        </div>
        <div class="prev" @click="prev">
          <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8896 23.7417C19.6365 24.9935 22.0673 23.7449 22.0673 21.5958V5.40423C22.0673 3.25511 19.6365 2.0065 17.8896 3.25828L6.59146 11.3541C5.12173 12.4072 5.12173 14.5928 6.59147 15.6459L17.8896 23.7417Z" fill="#AFB5C0"/>
  <rect y="4.26471" width="2" height="18" fill="#AFB5C0"/>
  </svg>
  
        </div>
        <div class="play" @click="togglePlay">
          <svg v-if="!isPlaying" width="42" height="51" viewBox="0 0 42 51" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05427 42.3186C7.29861 43.4702 4.96631 42.2107 4.96631 40.1111V4.8889C4.96631 2.78927 7.29861 1.52983 9.05427 2.68141L35.9034 20.2925C37.4928 21.335 37.4928 23.665 35.9034 24.7075L9.05427 42.3186Z" fill="#383E47"/>
  </svg>
          <span v-else></span>
        </div>
        <div class="next" @click="next">
          <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8896 23.7417C19.6365 24.9935 22.0673 23.7449 22.0673 21.5958V5.40423C22.0673 3.25511 19.6365 2.0065 17.8896 3.25828L6.59146 11.3541C5.12173 12.4072 5.12173 14.5928 6.59147 15.6459L17.8896 23.7417Z" fill="#AFB5C0"/>
  <rect y="4.26471" width="2" height="18" fill="#AFB5C0"/>
  </svg>
        </div>
        <div class="shuffle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.59 5.17L1.41 0L0 1.41L5.17 6.58L6.59 5.17ZM10.5 0L12.54 2.04L0 14.59L1.41 16L13.96 3.46L16 5.5V0H10.5ZM9.42 10.82L10.83 9.41L13.96 12.54L16 10.5V16H10.5L12.55 13.95L9.42 10.82Z" fill="#AFB5C0"/>
  </svg>
        </div>
        <div class="heart">
          <a target="_blank" href="https://www.youtube.com/watch?v=8b-5N7B7qWI">
          <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.2501 11.3912L20.4728 11.1713C21.9577 9.70875 22.4703 7.53982 21.7944 5.57969C21.1185 3.61957 19.3717 2.20964 17.2912 1.94482C15.2106 1.68 13.1586 2.60641 12.001 4.33315C10.8433 2.60641 8.79134 1.68 6.71077 1.94482C4.63021 2.20964 2.88345 3.61957 2.20753 5.57969C1.53161 7.53982 2.04424 9.70875 3.52914 11.1713L12.0001 19.5341" stroke="#5D626C" stroke-width="2" stroke-linecap="square"/>
    <rect width="2" height="8" transform="translate(12 22) rotate(90 8 0)" fill="#5D626C"/>
    <rect width="2" height="8" transform="translate(15 11)" fill="#5D626C"/>
  </svg></a>
        </div>
      </div>
      <div class="timeline" @click="jumpTo" ref="timeline">
        <div :style="{width: percentage + '%'}"></div>
      </div>
    </div>
    <div class="cp">
      <a target="_blank" href="https://www.instagram.com/p/BsYK3S9Bm32/">https://www.instagram.com/p/BsYK3S9Bm32/</a>
    </div>
  </div>

</template>
<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.22/vue.min.js'></script>
<script src='https://www.youtube.com/iframe_api'></script>

<script>
let musicInterval = null;
let player;

// const vm = new Vue({
  export default {
    el:'#root',
    data(){
      return{
          videoId: 'bJl-avjRgzU',
          artist: "Parcels",
          title: "Lightenup",
          duration: 178,
          currentTime: 0,
          isPlaying: false ,
      }
  },

  computed: {
    recordImage() {
      return `https://img.youtube.com/vi/${this.videoId}/sddefault.jpg`;
    },
    percentage() {
      return this.currentTime / this.duration * 100;
    },
    showPlayTime() {
      const m = this.getMinutes(this.duration);
      const s = this.getSeconds(this.duration);
      return `${m}:${s}`;
    },
    showCurrentPlayTime() {
      const m = this.getMinutes(this.currentTime);
      const s = this.getSeconds(this.currentTime);

      return `${m}:${s}`;
    } },

  watch: {
    currentTime(time) {
      if (Math.round(time + 1) >= this.duration) {
        this.togglePlay();
        this.currentTime = 0;
        player.stopVideo();
      }
    } },

  methods: {
    prev() {
      if (player) {
        player.previousVideo();
      }
    },
    next() {
      if (player) {
        console.log(player, player.getVideoUrl().split('?v=')[1]);
        player.nextVideo();
      }
    },
    jumpTo(e) {
      const trackPercentage = e.layerX / this.$refs.timeline.offsetWidth * 100;

      this.playAt(this.duration / 100 * trackPercentage);
    },
    playAt(seconds) {
      if (player) {
        player.seekTo(seconds);
        this.currentTime = seconds;

        if (!this.isPlaying) {
          this.togglePlay();
        }
      }
    },
    getMinutes(seconds) {
      const m = Math.floor(seconds % 3600 / 60);
      return m;
    },
    getSeconds(seconds) {
      const s = Math.floor(seconds % 3600 % 60);
      return (s <= 9 ? "0" : "") + s;
    },
    interval() {
      this.currentTime = !player ? this.currentTime : Math.round(player.getCurrentTime());
    },
    togglePlay() {
      if (!this.isPlaying) {
        musicInterval = setInterval(this.interval, 1000);
        player.playVideo();
        player.unMute();
      } else {
        clearInterval(musicInterval);
        player.pauseVideo();
      }

      this.isPlaying = !this.isPlaying;
    } } };



// vm.$mount(".wrapper");

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    videoId: vm.$data.videoId,
    events: {
      onReady() {
        if (player) {
          const [artist, title] = player.getVideoData().title.split(' - ');
          const videoId = player.getVideoUrl().split('?v=')[1];

          vm.$data.duration = Math.floor(player.getDuration());
          vm.$data.title = title.split('|')[0];
          vm.$data.artist = artist;
          vm.$data.videoId = videoId;
        }
      } } });
}
</script>
<style>
  @import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css);
</style>
<style>
  @import url("https://fonts.googleapis.com/css?family=Muli:400,700,900");
#yt-player {
  background-color: #000;
  position: absolute;
  opacity: 0;
}

@-webkit-keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
body,
html {
  background-color: #A7C1DD;
  height: 100%;
  position: relative;
  z-index: -1;
}

.wrapper {
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  margin: 0 auto;
  position: relative;
  width: 578px;
}
.wrapper .cp {
  text-align: center;
  margin-bottom: 10px;
}
.wrapper .cp a {
  color: #82a7cf;
}

.player {
  align-self: center;
  background: linear-gradient(168.53deg, #4b75a0 -45.66%, #3b5c7d 84.26%);
  border-radius: 10px;
  box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: 315px 90px 7px;
  height: 405px;
  margin: 130px auto 0;
  position: relative;
  width: 578px;
}
.player:before {
  content: "";
  background: #335a85;
  border-radius: 10px;
  bottom: -30px;
  filter: blur(90px);
  height: 370px;
  left: 20px;
  position: absolute;
  right: 20px;
  z-index: -1;
}
.player .top {
  position: relative;
}
.player .top .artist {
  color: #fff;
  font-family: Muli;
  left: 0;
  position: absolute;
  text-transform: uppercase;
  top: -100px;
  z-index: 1;
}
.player .top .artist .name {
  color: rgba(255, 255, 255, 0.3);
  font-size: 17px;
  letter-spacing: 4px;
  line-height: 20px;
  position: relative;
}
.player .top .artist .name:after {
  background: #fff;
  content: "";
  height: 2px;
  left: -30px;
  position: absolute;
  top: 8px;
  width: 20px;
}
.player .top .artist .title {
  font-size: 60px;
  font-weight: 700;
  line-height: 73px;
}
.player .top .time {
  color: #fff;
  font-family: Muli;
  font-size: 90px;
  position: absolute;
  right: 0;
  top: -148px;
}
.player .top .time .complete {
  color: rgba(255, 255, 255, 0.3);
  margin: 0 0 0 -40px;
}
.player .top .time .current {
  font-weight: 700;
  margin: -70px 0 0 0;
}
.player .top .record-wrapper {
  height: 425px;
  overflow: hidden;
  transform: translateY(-70px);
}
.player .top .record-wrapper .record {
  background-image: linear-gradient(130deg, #070809 24%, #070809 35%, #676767 49%, #070809 64%, #070809 76%);
  border: 7px solid #000;
  border-radius: 100%;
  box-sizing: border-box;
  height: 495px;
  left: 50%;
  margin-left: -247.5px;
  position: absolute;
  top: 0;
  width: 495px;
  -webkit-animation: spin 5s linear infinite;
          animation: spin 5s linear infinite;
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}
.player .top .record-wrapper .record.spin {
  -webkit-animation-play-state: running;
          animation-play-state: running;
}
.player .top .record-wrapper .record:before {
  background-color: #000;
  border-radius: 100%;
  content: "";
  height: 10px;
  left: 50%;
  margin-left: -5px;
  margin-top: -5px;
  opacity: 1;
  position: absolute;
  top: 50%;
  width: 10px;
  z-index: 1;
}
.player .top .record-wrapper .record:after {
  content: "";
  border-radius: 100%;
  box-shadow: 0 0 0 1px #111, 0px 0px 0px 2px #111, 0px 0px 0px 3px #111, 0px 0px 0px 4px #111, 0px 0px 0px 5px #222, 0px 0px 0px 6px #111, 0px 0px 0px 7px #111, 0px 0px 0px 8px #111, 0px 0px 0px 9px #111, 0px 0px 0px 10px #222, 0px 0px 0px 11px #111, 0px 0px 0px 12px #111, 0px 0px 0px 13px #111, 0px 0px 0px 14px #111, 0px 0px 0px 15px #222, 0px 0px 0px 16px #111, 0px 0px 0px 17px #111, 0px 0px 0px 18px #111, 0px 0px 0px 19px #111, 0px 0px 0px 20px #222, 0px 0px 0px 21px #111, 0px 0px 0px 22px #111, 0px 0px 0px 23px #111, 0px 0px 0px 24px #111, 0px 0px 0px 25px #222, 0px 0px 0px 26px #111, 0px 0px 0px 27px #111, 0px 0px 0px 28px #111, 0px 0px 0px 29px #111, 0px 0px 0px 30px #222, 0px 0px 0px 31px #111, 0px 0px 0px 32px #111, 0px 0px 0px 33px #111, 0px 0px 0px 34px #111, 0px 0px 0px 35px #222, 0px 0px 0px 36px #111, 0px 0px 0px 37px #111, 0px 0px 0px 38px #111, 0px 0px 0px 39px #111, 0px 0px 0px 40px #222, 0px 0px 0px 41px #111, 0px 0px 0px 42px #111, 0px 0px 0px 43px #111, 0px 0px 0px 44px #111, 0px 0px 0px 45px #222, 0px 0px 0px 46px #111, 0px 0px 0px 47px #111, 0px 0px 0px 48px #111, 0px 0px 0px 49px #111, 0px 0px 0px 50px #222, 0px 0px 0px 51px #111, 0px 0px 0px 52px #111, 0px 0px 0px 53px #111, 0px 0px 0px 54px #111, 0px 0px 0px 55px #222, 0px 0px 0px 56px #111, 0px 0px 0px 57px #111, 0px 0px 0px 58px #111, 0px 0px 0px 59px #111, 0px 0px 0px 60px #222, 0px 0px 0px 61px #111, 0px 0px 0px 62px #111, 0px 0px 0px 63px #111, 0px 0px 0px 64px #111, 0px 0px 0px 65px #222, 0px 0px 0px 66px #111, 0px 0px 0px 67px #111, 0px 0px 0px 68px #111, 0px 0px 0px 69px #111, 0px 0px 0px 70px #222, 0px 0px 0px 71px #111, 0px 0px 0px 72px #111, 0px 0px 0px 73px #111, 0px 0px 0px 74px #111, 0px 0px 0px 75px #222, 0px 0px 0px 76px #111, 0px 0px 0px 77px #111, 0px 0px 0px 78px #111, 0px 0px 0px 79px #111, 0px 0px 0px 80px #222, 0px 0px 0px 81px #111, 0px 0px 0px 82px #111, 0px 0px 0px 83px #111, 0px 0px 0px 84px #111, 0px 0px 0px 85px #222, 0px 0px 0px 86px #111, 0px 0px 0px 87px #111, 0px 0px 0px 88px #111, 0px 0px 0px 89px #111, 0px 0px 0px 90px #222, 0px 0px 0px 91px #111, 0px 0px 0px 92px #111, 0px 0px 0px 93px #111, 0px 0px 0px 94px #111, 0px 0px 0px 95px #222, 0px 0px 0px 96px #111, 0px 0px 0px 97px #111, 0px 0px 0px 98px #111, 0px 0px 0px 99px #111, 0px 0px 0px 100px #222, 0px 0px 0px 101px #111, 0px 0px 0px 102px #111, 0px 0px 0px 103px #111, 0px 0px 0px 104px #111, 0px 0px 0px 105px #222, 0px 0px 0px 106px #111, 0px 0px 0px 107px #111, 0px 0px 0px 108px #111, 0px 0px 0px 109px #111, 0px 0px 0px 110px #222, 0px 0px 0px 111px #111, 0px 0px 0px 112px #111, 0px 0px 0px 113px #111, 0px 0px 0px 114px #111, 0px 0px 0px 115px #222, 0px 0px 0px 116px #111, 0px 0px 0px 117px #111, 0px 0px 0px 118px #111, 0px 0px 0px 119px #111, 0px 0px 0px 120px #222, 0px 0px 0px 121px #111, 0px 0px 0px 122px #111, 0px 0px 0px 123px #111, 0px 0px 0px 124px #111, 0px 0px 0px 125px #222, 0px 0px 0px 126px #111, 0px 0px 0px 127px #111, 0px 0px 0px 128px #111, 0px 0px 0px 129px #111, 0px 0px 0px 130px #222;
  height: 220px;
  left: 50%;
  margin-left: -110px;
  margin-top: -110px;
  opacity: 0.6;
  position: absolute;
  top: 50%;
  width: 220px;
}
.player .top .record-wrapper .record .image {
  border: 41px solid #000;
  box-sizing: border-box;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/279756/kl.png);
  background-position: center;
  transform: rotate(-45deg);
  background-size: 180%;
  border-radius: 100%;
  content: "";
  height: 220px;
  left: 50%;
  margin-left: -110px;
  margin-top: -110px;
  opacity: 1;
  position: absolute;
  top: 50%;
  width: 220px;
  opacity: 0.7;
}
.player .controls {
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
}
.player .controls div {
  cursor: pointer;
}
.player .controls div.play {
  margin-top: 0;
  width: 41px;
  height: 41px;
}
.player .controls div.play span {
  position: relative;
  top: 3px;
  left: 5px;
}
.player .controls div.play span:after, .player .controls div.play span:before {
  content: "";
  top: 0;
  position: absolute;
  background-color: #383e47;
  height: 40px;
  width: 9px;
  border-radius: 4px;
}
.player .controls div.play span:before {
  left: 22px;
}
.player .controls div.prev {
  margin-top: 8px;
}
.player .controls div.next {
  transform: rotate(180deg);
  margin-top: 0px;
}
.player .controls div.repeat {
  margin-top: 7px;
}
.player .controls div.shuffle {
  margin-top: 8px;
}
.player .controls div.shuffle:hover path, .player .controls div.repeat:hover path, .player .controls div.next:hover path, .player .controls div.prev:hover path {
  fill: #383e47;
}
.player .controls div.grid:hover path {
  stroke: #A7C1DD;
}
.player .controls div.heart:hover path {
  stroke: #d25d5d;
}
.player .controls div.heart:hover rect {
  fill: #d25d5d;
}
.player .controls div:first-child, .player .controls div:last-child {
  padding: 8px 8px 4px;
  border-radius: 6px;
  border: 1px solid #d8d8d8;
}
.player .controls div:first-child {
  margin-right: 80px;
}
.player .controls div:last-child {
  margin-left: 80px;
}
.player .timeline {
  background-color: #c0c9d6;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.player .timeline div {
  transition: width 0.2s;
  background-image: linear-gradient(90deg, #4b75a0 40%, #3b5c7d 85%);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
}
  </style>