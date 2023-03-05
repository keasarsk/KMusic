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
                <img class="content-wrapper-img" src="static/images/Life/Film/不能说的秘密.jpeg" alt="">
                <div class="right">
                   <h3 class="img-content" style="text-indent: 2em; ">
                        &emsp; &emsp; &emsp; &emsp; 不能说的秘密
                        <br>
                        <br>
                        &emsp; &emsp; 影片以叶湘伦的高中生活为背景，讲述了转学到一所艺术学校的钢琴天才小伦在一间古老的钢琴练习室里见到演奏神秘钢琴乐的路小雨进而展开的一段奇幻爱情故事。
                        <br>
                        <br>
                        导演: 周杰伦
                        <br>
                        主演:周杰伦/桂纶镁
                        <br>
                        <br>
                        个人影评: 学生时代那小心翼翼而深刻的爱情.时空旅行的爱恋,近些年才有一堆同剧情.周董太超前了
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
                            <div class="products">主演 </div>
                            <div class="products"></div>
                            <div class="products"></div>
                            <div> 个人短评</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">怦然心动</div>
                            <div class="products">罗伯·莱纳</div>
                            <div class="products"></div>
                            <div class="products"> 玛德琳·卡罗尔 / 卡兰·麦克奥利菲</div>
                            <div class="products"></div>
                            <div> 青春年少时的爱情, 真的很美好</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">本杰明·巴顿奇事</div>
                            <div class="products">大卫·芬奇</div>
                            <div class="products"></div>
                            <div class="products"> 凯特·布兰切特 / 布拉德·皮特</div>
                            <div class="products"></div>
                            <div> 我们总会失去所爱之人. 拥有爱过的曾经也好</div>
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