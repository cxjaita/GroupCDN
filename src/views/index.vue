<template>
  <div class="index">
    <!-- 导航组件 -->
    <nav-menu :navList="nav_list" :styles="navstyles" @event="event"></nav-menu>
  </div>
</template>

<script>
import NavMenu from "@/components/navmenu";
import Carousel from "@/components/carousel";
import Forms from "@/components/forms";
export default {
  name: "index",
  data() {
    return {
      nav_list: [
        { name: "页面1", icon: "el-icon-tickets" },
        { name: "页面2", icon: "el-icon-tickets" }
      ],
      navstyles: {
        active: "0",
        bg_color: "#545c64",
        text_color: "#fff",
        active_color: "#ffd04b",
        mode: false,
        width: 4,
        height: 100,
      },
    };
  },
  components: {
    NavMenu
  },
  methods: {
    event (e) {
      console.log(e)
    }
  }
};
</script>
