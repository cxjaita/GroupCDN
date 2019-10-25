<template>
  <div>
    <el-row class="tac">
      <el-col :span="styles.spam || 24">
        <el-menu
          :default-active="styles && styles.active"
          :class="{ 'el-menu-demo': styles, 'el-menu-demo': styles.mode }"
          :mode="styles && styles.mode ? 'horizontal' : 'vertical'"
          @select="event"
          :background-color="styles && styles.bg_color"
          :text-color="styles && styles.text_color"
          :active-text-color="styles && styles.active_color"
        >
          <div
            v-for="(item, index) in navList"
            :key="index"
            :class="{ border: index == key && styles.mode }"
          >
            <el-menu-item :index="String(index)" v-if="!item.submenu">
              {{ item.name }}
            </el-menu-item>
            <el-submenu :index="String(index)" v-if="item.submenu">
              <template slot="title">{{ item.name }}</template>
              <el-menu-item
                v-for="(i, idx) in item.children"
                :key="idx"
                :index="String(index) + '-' + String(idx)"
              >
                {{ i.name }}
              </el-menu-item>
            </el-submenu>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "navmenu",
  data() {
    return {
      key: null || this.styles.active
    };
  },
  props: {
    navList: null,
    styles: null
  },
  methods: {
    event(key, keyPath) {
      this.key = keyPath[0];
      this.$emit("event", { key, keyPath });
    }
  }
};

// 数据示例
// nav_list: [
//   {name: '导航1'},
//   {name: '下拉导航1', submenu: true, children:[
//     {name: '子选项1'}
//   ]}
// ]

// 属性示例  active=默认选中， bg_color=导航背景色， text_color=文字未选中颜色， active_color文字选中颜色,  mode=是否横屏, spam=宽度（已栅格24为基准，24=100%）
// styles: {
//   active: 0,
//   bg_color: '#545c64',
//   text_color: '#fff',
//   active_color: '#ffd04b',
//   mode: true,
//   spam: 12
// }
</script>
<style lang="less" scoped>
.el-menu-demo {
  display: flex;
}
.border {
  border-bottom: 2px solid #ffd04b;
  color: #ffd04b;
  border-bottom-color: #ffd04b;
  background-color: #545c64;
}
</style>
