<template>
  <div class="itemMusicTop">
    <!-- 背景 -->
    <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
    <div class="item1">
      <div class="itemLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="itemRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>

    <div class="item2">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl" alt="" />
      </div>
      <div class="contentRight">
        <p class="rightP_one">{{ playlist.name }}</p>
        <div class="right_img">
          <img :src="playlist.creator.backgroundUrl" alt="" />
          <span>{{ playlist.creator.nickname }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiayibu"></use>
          </svg>
        </div>
        <p class="rightP_two">
          <span>{{ playlist.description }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiayibu"></use>
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["playlist"],
  setup(props) {
    console.log(props);
  },
};
</script>
<style lang="less" scoped>
.itemMusicTop {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-direction: column;
  .bgimg {
    width: 100%;
    height: 11rem;
    position: fixed;
    z-index: -1;
    // 虚化
    filter: blur(30px);
  }
  .item1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 0.2rem;
    .itemLeft,
    .itemRight {
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0.2rem;
      span {
        font-size: 0.4rem;
        color: #fff;
      }
      .icon {
        fill: #fff;
      }
    }
  }
  .item2 {
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 0.5rem;
    .contentLeft {
      width: 40%;
      height: 3rem;
      padding: 0.12rem;
      img {
        width: 95%;
        height: 95%;
        border-radius: 15px;
      }
    }
    .contentRight {
      display: flex;
      flex-direction: column;
      width: 60%;
      .rightP_one {
        color: #fff;
        padding: 0.2rem 0;
        // height: 55px;
        // font-weight: 900;
      }
      .right_img {
        display: flex;
        flex-direction: row;
        align-items: center;
        // height: 1rem;
        padding-bottom: 0.2rem;
        img {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 0.3rem;
          margin-right: 0.1rem;
        }
        span {
          font-size: 0.28rem;
          color: #cec3bc;
          padding-bottom: 0.04rem;
        }
        .icon {
          padding: 0.06rem;
          fill: #cec3bc;
        }
      }
      .rightP_two {
        display: flex;
        flex-direction: row;
        span {
          font-size: 14px;
          color: #cec3bc;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* 限制在一个块元素显示的文本的行数 */
          -webkit-box-orient: vertical; /* 垂直排列 */
          // word-break: break-all; /* 内容自动换行 */
        }
        .icon{
          fill: #cec3bc;
          margin-top: .1rem;
        }
        
      }
    }
  }
}
</style>