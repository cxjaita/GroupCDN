<template>
  <div class="home">
    <!-- 导航组件 -->
    <nav-menu :navList="nav_list" :styles="navstyles"></nav-menu>
    <!-- 轮播图组件 -->
    <Carousel :styles="CarouselStyles" :carouseLlist="carouseLlist"></Carousel>
  </div>
</template>

<script>
import NavMenu from '@/components/navmenu';
import Carousel from '@/components/carousel';
export default {
  name: 'home',
  data() {
    return {
      // 导航数据
      nav_list: [{ name: '导航1' }, { name: '下拉导航1', submenu: true, children: [{ name: '子选项1' }] }],
      navstyles: {
        active: '0',
        bg_color: '#545c64',
        text_color: '#fff',
        active_color: '#ffd04b',
        mode: true,
        spam: 24,
      },
      // 轮播如数据
      carouseLlist: [
        { title: '轮播图1', url: require('../assets/10832636670691647912177.jpg') },
        { title: '轮播图2', url: require('../assets/10832636670691647912177.jpg') },
        { title: '轮播图3', url: require('../assets/10832636670691647912177.jpg') },
      ],
      CarouselStyles: {
        indicator: 'none',
        autoplay: true,
        interval: 3000,
        type: false,
        height: 200,
        arrow: 'never',
      },
    };
  },
  components: {
    NavMenu,
    Carousel,
  },
};
</script>
