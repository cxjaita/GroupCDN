<template>
  <div class="home">
    <nav-menu :navList="nav_list" :styles="styles"></nav-menu>
  </div>
</template>

<script>
import NavMenu from '@/components/navmenu'
export default {
  name: "home",
  data() {
    return {
      nav_list: [
        {name: '导航1'},
        {name: '下拉导航1', submenu: true, children:[
          {name: '子选项1'}
        ]}
      ],
      styles: {
        active: '0',
        bg_color: '#545c64',
        text_color: '#fff',
        active_color: '#ffd04b',
        mode: true,
        spam: 24,
      }
    }
  },
  components: {
    NavMenu
  }
};
</script>
