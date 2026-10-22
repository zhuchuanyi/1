# Shredder

碎纸销毁。用户上传资料归档；源码未改动。

## 依赖
React、React DOM。

## 参数
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | T[] | [] | Rows to render, top to bottom. Each item needs a unique id. |
| renderItem | (item: T, index: number) => ReactNode | - | Renders one row. A snapshot of the rendered row is what gets cut into strips, so plain markup, inline images and inline SVG all work. |
| onShred | (item: T) => void | - | Called the moment a row has gone through the rollers. Remove the item from your list here, unless loop, loopAfterDelete or autoAnimate is on. |
| onReorder | (items: T[]) => void | - | Called with the items in their new order after a row is dropped somewhere else in the list. |
| width | number | 340 | Width of the whole machine in pixels. |
| height | number | 460 | Total height. The rows stack up from the slit, which sits above the fall zone at the bottom. |
| inset | number | 14 | Horizontal inset of the rows from the edges. The slit is 6px wider than the rows on each side. |
| gap | number | 10 | Space between rows in pixels. |
| slitHeight | number | 4 | Thickness of the slit. It is always a full pill. |
| fallHeight | number | 140 | Height of the zone under the slit where the strips fall and fade out. |
| feedSpeed | number | 180 | Roller speed in pixels per second. The first pull is faster and eases into it. |
| bite | number | 18 | How far a row has to be pushed into the slit before the rollers grab it, in pixels. |
| autoFeed | boolean | true | Grab the row as soon as it is pushed in far enough, even while it is still held. Off, it feeds only on release over the slit. |
| stripWidth | number | 10 | Target width of each strip in pixels. The row is cut into equal columns. |
| curl | number | 1 | How much the strips curl and wave as they come out. 0 keeps them straight. |
| autoAnimate | boolean | false | Plays through the rows on its own, bottom to top, then brings them back and starts over. Keep the rows in your list while it runs; onShred still fires. |
| loop | boolean | false | Once the last row has been shredded, bring them all back. Keep the rows in your list while it is on. |
| loopAfterDelete | boolean | false | After a row is shredded it comes back a moment later at a random spot, so the list never runs dry. Keep the rows in your list while it is on. |
| dragTilt | number | 6 | Maximum lean in degrees while a row is dragged sideways. |
| lift | number | 1.02 | Scale of a row while it is held. |
| slitColor | string | "#3f3f46" | Colour of the slit. |
| color | string | "#f5f5f5" | Text colour inherited by the rows. |
| disabled | boolean | false | Rows cannot be dragged or shredded. |
| className | string | "" | Extra classes for the root. |


## 视频适配
原版为交互组件。HyperFrames版本见 `../../hyperframes/effects.js`，采用可定位的有限GSAP时间轴；它是动效语义适配，不是React原版的逐像素移植。
