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
                <img class="content-wrapper-img" src="static/images/Life/Film/功夫.jpeg" alt="">
                <div class="right">
                   <h3 class="img-content" style="text-indent: 2em; ">
                        &emsp; &emsp; &emsp; &emsp; 功夫
                        <br>
                        <br>
                        &emsp; &emsp; 影片讲述了一个街头混混变成一代武术家，一个本性善良的黑帮流氓改邪归正的故事
                        <br>
                        <br>
                        导演: 周星驰
                        <br>
                        主演: 周星驰、梁小龙、元华
                        <br>
                        <br>
                        <br>
                        个人影评: 星爷每部喜剧都是那么的让人前仰后合, 却又立意颇深. 爱情总是那么洁净不可亵玩.
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
                            <div class="products">摩登时代</div>
                            <div class="products">查理·卓别林</div>
                            <div class="products"></div>
                            <div class="products"> 查理·卓别林</div>
                            <div class="products"></div>
                            <div> 小时候看卓别林的搞笑动作, 现在看底层大众的心酸日常</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">让子弹飞</div>
                            <div class="products">姜文</div>
                            <div class="products"></div>
                            <div class="products">姜文</div>
                            <div class="products"></div>
                            <div> 申遗!必须申遗!</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">憨豆先生大灾难</div>
                            <div class="products">梅尔·史密斯</div>
                            <div class="products"></div>
                            <div class="products">  罗温·艾金森</div>
                            <div class="products"></div>
                            <div> 不需要脑子, 不在结尾悲一下, 纯纯粹粹简简单单的喜剧</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">夏洛特烦恼</div>
                            <div class="products"> 闫非 / 彭大魔</div>
                            <div class="products"></div>
                            <div class="products"> 沈腾/ 马丽</div>
                            <div class="products"></div>
                            <div> 造梗佳作, 演绎普通人常有的黄粱一梦, 最后回归人的情感本身</div>
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