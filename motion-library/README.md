# 动效库

收录用户提供的5份React Bits组件资料。三个原始标题为`undefined`，已依据实际导入名归类为FlipCard、BranchedMenu和FolderFloat；原始资料保持不变。

| 组件 | 用途 | 本次极简视频适配 |
|---|---|---|
| FolderFloat | 文件夹打开、纸张与条目展开 | 推荐用于每日披露段；关闭物理漂浮、漂移和弹性 |
| FlipCard | 双面卡片翻转 | 可选用于主动管理与ETF机制；固定时点翻一次，关闭悬停缩放、炫光与拖拽 |
| BranchedMenu | 树状分支连线与文字展开 | 可选用于能力、策略、稳定性；银灰细线与横向文字揭示 |
| StarBorder | 星光沿边框运行 | 原版发光不符合本片；视频适配版只保留无发光、无粒子的有限边框线条 |
| Shredder | 文档切条与销毁 | 入库备用；本片不采用，避免暗示销毁持仓或资产 |

## 目录

- `catalog.json`：组件名称、依赖、用途、适配状态与原始文件SHA-256。
- `react/<组件>/`：原始上传全文、提取后的JSX/CSS、用法与参数说明。
- `hyperframes/effects.js`：5种动效的原生DOM/SVG＋GSAP时间轴适配，不依赖React。
- `hyperframes/gallery/`：30秒无声动效展示合成，供逐帧查看。不是本次成片的自动替换版本。
- `CURRENT_VIDEO_PLAN.md`：本次成片的建议应用位置，待用户确认后实施。

## HyperFrames接入

先加载GSAP和`effects.js`，在HTML创建对应的`data-ml-*`元素，再同步加入已注册的暂停时间轴：

```js
const tl = gsap.timeline({paused: true});
MotionLibrary.folderFloat(tl, document.querySelector('#folder'), {
  at: 35.0, duration: 1.4, lift: 65, flapAngle: 18
});
window.__timelines.main = tl;
```

`at`为合成中的绝对秒数。挂载节点应在对应镜头开始前可用。所有动画均有限、可定位，不依赖鼠标、墙钟、真实物理或随机数。FlipCard需要父级perspective、内层preserve-3d、双面backface-visibility:hidden；反面预先rotateY(180deg)。分支路径使用`pathLength="1"`、`stroke-dasharray:1`。边框轨迹使用`pathLength="1"`、`stroke-dasharray:.12 .88`。完整结构见展示合成。

这些适配保留原组件的动效语义，并非原版逐像素移植。原React组件仍包含交互、物理、时钟与循环，不能直接用于逐帧视频渲染。上传资料中的安装说明作为参考归档，不自动执行；没有为本片引入不需要的React和Matter依赖。

来源标注保留为用户上传的React Bits导出资料；上传中未附许可文件，不补写或推定上游许可证。
