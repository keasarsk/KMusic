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
                <img class="content-wrapper-img" src="static/images/Life/番剧/进击的巨人.jpeg" alt="">
                <div class="right">
                   <h3 class="img-content" style="text-indent: 2em; ">
                        &emsp; &emsp; &emsp; &emsp; 进击的巨人
                        <br>
                        <br>
                        &emsp; &emsp; 107年前（743年），世界上突然出现了人类的天敌“巨人”。人类逃到了一个地方，盖起了三重巨大城墙。人们享受了一百多年的和平，直到艾伦·耶格尔十岁那年，“超大型巨人”突然出现破坏城门，巨人们成群的冲进墙内捕食人类。
                        <br>
                        <br>
                        原作:谏山创
                        <br>
                        <br>
                        <br>
                        <br>
                        个人影评: 塔塔开!&emsp;塔塔开!!!
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
                            <div> 个人短评</div>
                        </li>
                        <li class="adobe-product">
                            <div class="products">火影忍者</div>
                            <div class="products">岸本齐史</div>
                            <div class="products"></div>
                            <div class="products"></div>
                            <div> 友情, 爱情, 村子. 让每个少年热血</div>
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