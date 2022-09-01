import { Button, Swipe, SwipeItem } from 'vant';
//放入数组中
let pluhins = [
  Button, Swipe, SwipeItem
]
export default function getVant(app) {
  pluhins.forEach((item) => {
    return app.use(item)
  })
}