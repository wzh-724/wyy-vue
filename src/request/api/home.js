import service from "..";
// 获取首页轮播图的数据
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=1",
  })
}

// 获取发现好歌单
export function getMusicList() {
  return service({
    method: "GET",
    url: "/personalized?limit=10"
  })
}