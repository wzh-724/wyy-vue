<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="my-swpie"
        :show-indicators="false"
      >
        <van-swipe-item
          v-for="item in state.musicList"
          :key="item"
          class="myswpieItem"
        >
          <router-link :to="{ path: '/ItemMusic', query: { id: item.id } }">
            <img :src="item.picUrl" alt="" />
            <span class="tag">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-24gl-play"></use>
              </svg>
              <p>{{ changeCount(item.playCount) }}</p>
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { getMusicList } from "@/request/api/home.js";
import { reactive, onMounted } from "vue";
export default {
  // VUE2
  // data() {
  //   return {
  //     musicList: [],
  //   };
  // },
  // methods: {
  //   async getGnedan() {
  //     let res = await getMusicList();
  //     console.log(res);
  //     this.musicList = res.data.result;
  //   },
  //   changeCount: function (num) {
  //     if (num >= 100000000) {
  //       return (num / 100000000).toFixed(1) + "亿";
  //     } else if (num > 10000) {
  //       return (num / 10000).toFixed(1) + "万";
  //     }
  //   },
  // },
  // mounted() {
  //   this.getGnedan();
  // },

  // Vue3
  setup() {
    const state = reactive({
      musicList: [],
    });
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    onMounted(async () => {
      let res = await getMusicList();
      state.musicList = res.data.result;
      // console.log(state.musicList);
    });
    return { state, changeCount };
  },
};
</script>
<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 4rem;
    .my-swpie {
      height: 100%;
      .myswpieItem {
        padding: 0.1rem;
        img {
          width: 100%;
          height: 3rem;
          border-radius: 0.3rem;
          // padding: 0.1rem;
        }
        .tag {
          position: absolute;
          display: flex;
          bottom: 0.9rem;
          height: 0.5rem;
          align-items: center;
          background: #8fa6b6;
          border-radius: 0.3rem;
          padding: 0.1rem;
          .icon {
            fill: #fff;
            width: 0.3rem;
          }
          p {
            font-size: 0.25rem;
            padding-left: 0.1rem;
            color: #fff;
          }
        }
        .name {
          color: #4f4e50;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。
          -webkit-box-orient: vertical; // 从上到下垂直排列子元素
          -webkit-line-clamp: 2; //显示的行数
        }
      }
    }
  }
}
</style>