<template>
  <div>
    <TopNav></TopNav>
    <SwpierTop></SwpierTop>
    <IconList></IconList>
    <MusicList></MusicList>
  </div>
</template>

<style lang="less" >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: 0.5rem;
  height: 0.5rem;
}
</style>
<script>
// @ is an alias to /src
import TopNav from "@/components/home/TopNav.vue";
import SwpierTop from "@/components/home/SwpierTop.vue";
import IconList from "@/components/home/IconList.vue";
import MusicList from "@/components/home/MusicList.vue";
export default {
  name: "Home",
  components: {
    TopNav,
    SwpierTop,
    IconList,
    MusicList,
  },
};
</script>
