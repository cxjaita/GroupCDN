<template>
  <div class="home">
    <!-- 导航组件 -->
    <nav-menu :navList="nav_list" :styles="navstyles"></nav-menu>
    <!-- 轮播图组件 -->
    <Carousel :styles="CarouselStyles" :carouseLlist="carouseLlist"></Carousel>
    <!-- 表单组件 -->
    <Forms :forms="forms"></Forms>
    <!-- 输入框 -->
    <FormInput :styles="InputStyle"></FormInput>
  </div>
</template>

<script>
import NavMenu from "@/components/navmenu";
import Carousel from "@/components/carousel";
import Forms from "@/components/forms";
import FormInput from "@/components/form/input";
export default {
  name: "home",
  data() {
    return {
      // 导航数据
      nav_list: [
        { name: "导航1" },
        { name: "下拉导航1", submenu: true, children: [{ name: "子选项1" }] }
      ],
      navstyles: {
        active: "0",
        bg_color: "#545c64",
        text_color: "#fff",
        active_color: "#ffd04b",
        mode: true,
        width: 24
      },
      // 轮播如数据
      carouseLlist: [
        {
          title: "轮播图1",
          url: require("../assets/10832636670691647912177.jpg")
        },
        {
          title: "轮播图2",
          url: require("../assets/10832636670691647912177.jpg")
        },
        {
          title: "轮播图3",
          url: require("../assets/10832636670691647912177.jpg")
        }
      ],
      CarouselStyles: {
        indicator: "none",
        autoplay: true,
        interval: 3000,
        type: false,
        height: 200,
        arrow: "never"
      },
      // 表单数据
      forms: [
        {
          input: true,
          data: "输入框值",
          label: "姓名",
          placeholder: "请输入姓名"
        },
        {
          select: true,
          data: "1",
          label: "年龄",
          placeholder: "请选择年龄",
          options: [
            { label: "24岁", value: "1" },
            { label: "25岁", value: "2" }
          ]
        },
        {
          timestart: true,
          timesnd: true,
          data1: "开始日期",
          data2: "结束日期",
          label: "时间选择",
          placeholder1: "请选择开始时间",
          placeholder2: "请选择结束时间"
        },
        { switch: true, data: "true", label: "姓名" },
        {
          checkbox: true,
          data: [],
          label: "个人爱好",
          options: [
            { label: "多选项1", name: "type" },
            { label: "多选项2", name: "type" },
            { label: "多选项3", name: "type" }
          ]
        },
        {
          radio: true,
          data: "单选框值",
          label: "性别",
          options: [{ label: "选项1" }, { label: "选项2" }, { label: "选项3" }]
        },
        {
          textarea: true,
          data: "多行文本框值",
          label: "个人描述",
          placeholder: "请输入描述信息"
        }
      ],
      // 输入框数据
      InputStyle: {
        width: '2em'
      }
    };
  },
  components: {
    NavMenu,
    Carousel,
    Forms,
    FormInput
  }
};
</script>
