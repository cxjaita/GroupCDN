<template>
  <div>
    <el-carousel
      :indicator-position="styles && styles.indicator"
      :autoplay="styles && styles.autoplay"
      :interval="styles && styles.interval"
      :type="styles.type ? 'card' : ''"
      :height="styles && styles.height + 'px'"
      :always="styles && styles.always"
      ref="carousel"
    >
      <el-carousel-item v-for="(item, index) in carouseLlist" :key="index">
        <!-- <h3>{{ item.title }}</h3> -->
        <img :src="item.url" class="carousel_img" />
      </el-carousel-item>
      <v-touch
        @swipeleft="swiperleft"
        @swiperight="swiperright"
        class="swipe"
        :style="{ height: styles.height + 'px' || '100%' }"
      ></v-touch>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {};
  },
  props: {
    carouseLlist: null,
    styles: null
  },
  methods: {
    swiperleft() {
      this.$refs.carousel.next();
    },
    swiperright() {
      this.$refs.carousel.prev();
    }
  }
};
// indicator = 指示器 （none = 不显示，outside = 显示在外部，不传默认显示在内部）,
// autoplay = 是否自动切换（默认是）,
// interval = 切换时间（单位毫秒，默认3000）,
// type=走马灯类型（true=卡片类型），
// height=走马灯高度
// arrow=箭头（arrow=一直显示，never=一直隐藏，不传默认鼠标移入显示）

// styles: {
//   indicator: 'none',
//   autoplay: true,
//   interval: 3000,
//   type: true,
//   height: 200,
//   arrow: 'arrow'
// }

// 数据  title=名字（备用字段）， url=图片地址（必须字段）
// carouseLlist: [
//   {
//     title: "轮播图1",
//     url: require("../assets/10832636670691647912177.jpg")
//   },
// ]
</script>
<style lang="less" scoped>
.carousel_img {
  width: 100%;
  height: 100%;
}
.swipe {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
}
</style>
