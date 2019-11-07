<template>
  <div class="buttonlist">
    <div>
      <i class="el-icon-circle-plus-outline"></i>
      新建页面
    </div>
    <div @click="btn(item)" class="btn" v-for="(item, index) in data">{{item.name}}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: "buttonlist",
  data() {
    return {};
  },
  props: {
    data: null,
    styles: null
  },
  methods: {
    ...mapMutations(['SelectPages']),
    btn(e) { // 按钮列表点击
      this.SelectPages(e);
    }
  }
};
// styles = {样式}
// data = {属性值 name}
</script>

<style lang="less">
.btn{
  width: 100%;
  border: 1px solid #e0e0e0;
  line-height: 2em;
  text-align: center;
  margin: 2% auto;
  cursor:pointer;
}
</style>
