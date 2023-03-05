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
                <img class="content-wrapper-img" src="static/images/Life/Film/风之谷.jpeg" alt="">
                <div class="right">
                   <h3 class="img-content" style="text-indent: 2em; ">
                        &emsp; &emsp; &emsp; &emsp; 风之谷
                        <br>
                        <br>
                        &emsp; &emsp; 改编自宫崎骏的同名漫画,影片讲述千年后世界的产业文明达致巅峰后，经历一场称为“火之七日”的战争而毁于一旦。世界被一种由菌类构成，名叫腐海的新生态体系所掩盖，只有巨型昆虫能够适应其中，而人类们生活在仅存的小面积土地上，在面对巨型昆虫和会释放瘴气的腐海森林包围威胁下积极求存的故事。
                        <br>
                        <br>
                        导演: 宫崎骏
                        <br>
                        <br>
                        <br>
                        个人影评: 宫崎骏的影片总是会让人心境平和下来, 欣赏其中的风景, 沉思其所表达的人与自然.
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
                            <div class="products"></div>
                            <div class="products"></div>
                            <div> 个人短评</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">千与千寻</div>
                            <div class="products">宫崎骏</div>
                            <div class="products"></div>
                            <div class="products"></div>
                            <div class="products"></div>
                            <div> 看多少遍,每遍都有新理解</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">疯狂动物城</div>
                            <div class="products"> 拜伦·霍华德</div>
                            <div class="products"></div>
                            <div class="products"></div>
                            <div class="products"></div>
                            <div> 发生在并不完美的乌托邦中的故事 剧情,节奏,设定 都独树一帜</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">天空之城</div>
                            <div class="products">宫崎骏</div>
                            <div class="products"></div>
                            <div class="products"></div>
                            <div class="products"></div>
                            <div> 风景, 友情, 爱情, 抉择, 贪婪的人.</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">十万个冷笑话</div>
                            <div class="products">卢恒宇 / 李姝洁</div>
                            <div class="products"></div>
                            <div class="products"></div>
                            <div class="products"></div>
                            <div> 无厘头恶搞动画, 浑身是梗! 看几遍都不腻</div>
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