<template>
  <div class="componentlist">
    <div
      @click="btn(item)"
      class="btn"
      v-for="(item, index) in data"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "componentlist",
  data() {
    return {};
  },
  props: {
    data: null,
    styles: null
  },
  methods: {
    ...mapMutations(["SelectComponents"]),
    btn(e) {
      this.SelectComponents(e);
    }
  },
  mounted() {}
};
// 手动维护
</script>

<style lang="less" scoped>
.btn {
  width: 100%;
  border: 1px solid #e0e0e0;
  line-height: 2em;
  text-align: center;
  margin: 2% auto;
  cursor: pointer;
}
</style>
