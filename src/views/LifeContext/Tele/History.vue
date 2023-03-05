<template lang="">
    <div class="wrapper">
       
        <!-- 左边栏 -->
        <div class="left-side">
        <!-- <div> -->
            <div class="side-wrapper">
            <!-- <div> -->
                <div class="side-title">Film</div>
                <div class="side-menu">
                    <router-link to="/science">
                    <a href="#">
                        <img src="../../../assets/LifeFilmJpg/流浪地球.jpeg" alt=""> 科幻
                    </a>
                    </router-link>
                    <router-link to="/cartoon">
                    <a href="#">
                        <img src="../../../assets/LifeFilmJpg/风之谷.jpeg" alt=""> 动画
                    </a>
                    </router-link>
                    <router-link to="/comedy">
                    <a href="#">
                        <img src="../../../assets/LifeFilmJpg/功夫.jpeg" alt=""> 喜剧
                    </a>
                    </router-link>
                    <router-link to="/love">
                    <a href="#">
                        <img src="../../../assets/LifeFilmJpg/不能说的秘密.jpeg" alt=""> 爱情
                    </a>
                    </router-link>
                </div>
            </div>
            <div class="content-wrapper.overlay">
                <div class="side-title">番剧</div>
                <div class="side-menu">
                    <router-link to="/anime">
                    <a href="#">
                        <img src="../../../assets/LifeTeleJpg/进击的巨人.jpeg" alt="">动漫
                    </a>
                    </router-link>
                    <router-link to="/history">
                    <a href="#">
                        <img src="../../../assets/LifeTeleJpg/康熙王朝.jpeg" alt="">历史剧
                    </a>
                    </router-link>
                    <router-link to="/common">
                    <a href="#">
                        <img src="../../../assets/LifeTeleJpg/武林外传.jpeg" alt="">综合
                    </a>
                    </router-link>
                </div>
            </div>
            <div class="side-wrapper">
                <div class="side-title">Books</div>
                <div class="side-menu">
                    <router-link to="/literary">
                    <a href="#">
                        文学
                    </a>
                    </router-link>
                    <router-link to="/literary">
                    <a href="#">
                        历史
                    </a>
                    </router-link>
                    <router-link to="/literary">
                    <a href="#">
                        小说
                    </a>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- 主要内容 -->
        <div>
            <div class="topInfo">
                <img class="content-wrapper-img" src="static/images/Life/番剧/康熙王朝.jpeg" alt="">
                <div class="right">
                   <h3 class="img-content" style="text-indent: 2em; ">
                        &emsp; &emsp; &emsp; &emsp; 康熙王朝
                        <br>
                        <br>
                        &emsp; &emsp; 康熙帝在位时的事迹。该剧从顺治皇帝哀痛爱妃董鄂妃病故时讲起，直至康熙在位61年驾崩而止。第一次以正剧的角度浓墨重彩刻画了清朝初期康熙皇帝充满传奇的一生。
                        <br>
                        <br>
                        导演: 陈家林、刘大印
                        <br>
                        主演: 陈道明、斯琴高娃
                        <br>
                        <br>
                        <br>
                        个人影评: 康熙皇帝浓墨重彩的一生. 至今片尾曲仍在脑海--看铁蹄铮铮,踏遍万里河山;&emsp;

我站在风口浪尖紧握住日月旋转;&emsp;

愿烟火人间安得太平美满;&emsp;

我真的还想再活五百年
                    </h3>
                </div>
            </div>
            <div class="content-section">
                <div class="content-section-title">电影列表</div>
                    <ul class="search_ul" style="color: aliceblue">
                        <li class="adobe-product">
                            <div class="products">片名</div>
                            <div class="products">导演 </div>

                            <div class="products"></div>
                            <div class="products">主演</div>
                            <div class="products"></div>
                            <div> 个人短评</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">大明王朝1566</div>
                            <div class="products">张黎</div>
                            <div class="products"></div>
                            <div class="products"> 陈宝国 / 倪大红</div>
                            <div class="products"></div>
                            <div> 绝顶的权谋历史剧, 纸牌屋弱爆了</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">大秦帝国 - 纵横</div>
                            <div class="products">丁黑</div>
                            <div class="products"></div>
                            <div class="products">富大龙/宁静/喻恩泰</div>
                            <div class="products"></div>
                            <div> 秦王的野心与狡黠, 张仪的巧言善辩.</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">雍正王朝</div>
                            <div class="products">胡玫</div>
                            <div class="products"></div>
                            <div class="products">唐国强/焦晃</div>
                            <div class="products"></div>
                            <div> 唐国强和焦晃演的真的是太好了! 一个眼神,一个举动!</div>
                        </li>

                        <li class="adobe-product">
                            <div class="products">......</div>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
        </div>
    </div>
</template>

<script>
  export default {
  }
</script>
<style>
.topInfo{
    display: flex;
    width: 100%;
    padding: 32px 24px;
    /* background-color: #FAFAFA; */
}
.cover{
    display: flex;
    width: 100%;
    padding: 32px 24px;
    /* background-color: #FAFAFA; */
}
.right{
    padding-left: 24px;
    display: flex;
    width: 100%;
    padding: 32px 24px;
    color: aliceblue;
}
</style>