# ！！已经停止更新，并迁移到 [Seasoning](https://dyb881.github.io/seasoning/common/components/transition)

# transition

组件出入动画，使用 react-transition-group 封装，快捷创建动画 less 函数

## 说明

props:

```
interface IProps {
  name: string; // 动画标识名
  time?: number; // 动画时长 默认 400
  enterTime?: number; // 进入动画时长
  exitTime?: number; // 离开动画时长
}
```

style.less

```
@import 'node_modules/@dyb881/transition/create.less';
/*
创建动画
.createTransition(
  动画标识名,
  {进入动画 - 开始},
  {进入动画 - 结束},
  {离开动画 - 开始},
  {离开动画 - 结束}
);
往返动画
.createTransition(
  动画标识名,
  {进入动画 - 开始 & 离开动画 - 结束},
  {进入动画 - 结束 & 离开动画 - 开始},
);
*/

/**
 * 创建一个淡入淡出动画
 * @type {Number}
 */
.createTransition(
  fade,
  {opacity: 0;},
  {opacity: 1;},
);
```

page.tsx

```
import Transition from '@dyb881/transition';
import '@dyb881/transition/lib/style.css';

<Transition name="fade" />
```

# 默认动画

fade 淡入淡出<br>
left 从左边出现<br>
right 从右边出现<br>
top 从上方出现<br>
bottom 从下方出现<br>
