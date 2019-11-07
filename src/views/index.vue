<template>
  <div class="index">
    <!-- tab组件（嵌套组件） -->
    <Tabs :data="datas" :style="tabStyle"></Tabs>
  </div>
</template>

<script>
import Tabs from "@/components/tabs";
import buttonList from "@/components/buttonlist";
import componentList from "@/components/componentlist";
import { list } from '@/store/component_list.js';
export default {
  name: "index",
  data() {
    return {
      // tab 参数
      datas: [
        {
          label: "页面",
          component: buttonList,
          data: [
            {name: '页面1'},
            {name: '页面2'},
          ]
        },
        { label: "组件", component: componentList, data: list }
      ],
      tabStyle: {
        width: '15vw',
        height: '100vh'
      },
    };
  },
  components: {
    Tabs
  },
  methods: {
    event(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less" scoped>
.index {
  display: flex;
}
.nav {
  width: 20%;
}
.lists {
  width: 60%;
}
</style>
