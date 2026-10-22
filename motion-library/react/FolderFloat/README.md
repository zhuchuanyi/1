# FolderFloat

文件夹与纸张展开。用户上传资料归档；源码未改动。

## 依赖
React、React DOM、matter-js。

## 参数
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | Array<string | { label, value }> | DEFAULT_ITEMS | The pills that float out. A string is its own value. |
| label | string | "Design feedback" | The line on the flap. |
| sublabel | string | "" | The dimmer line under it. Empty counts the notes. |
| trigger | 'hover' | 'click' | 'hover' | Open on hover, or toggle on press. |
| defaultOpen | boolean | false | Start open. |
| closeOnSelect | boolean | true | Picking a pill closes the folder. |
| physics | boolean | true | Once the pills land, a zero-gravity world takes over: they float, collide, and can be dragged and thrown inside the cloud. |
| drift | number | 0.5 | Strength of the floating currents in the world. 0 holds still. |
| onSelect | (value, index) => void | - | A pill was picked. |
| onOpenChange | (open) => void | - | The folder opened or closed. |
| folderColor | string | "#3f3f46" | The back panel and its tab. |
| frontColor | string | "#52525b" | The flap. |
| paperColor | string | "#f5f5f5" | The paper edge that rises as it opens. |
| itemColor | string | "#f5f5f5" | The pills. |
| itemTextColor | string | "#18181b" | The pill text. |
| labelColor | string | "#f5f5f5" | The flap text. |
| width | number | 200 | Folder width in px. |
| height | number | 148 | Folder height in px, below the tab. |
| radius | number | 14 | Corner radius in px. |
| spread | number | 180 | Half the widest the cloud may be, in px. Pills pack into rows within it. |
| lift | number | 26 | Gap between the folder and the lowest row, in px. |
| tilt | number | 8 | Most a pill leans, in degrees. |
| flapAngle | number | 34 | How far the flap tilts toward you when open, in degrees. |
| restAngle | number | 16 | The flap tilt when closed, in degrees. |
| openDuration | number | 520 | A pill's rise, in ms. The close is 60% of it. |
| stagger | number | 45 | Delay between pills, in ms. The close reverses the order. |
| bounce | number | 0.3 | Overshoot of the rise. 0 lands dead. |
| className | string | "" | Extra classes for the root. |


## 视频适配
原版为交互组件。HyperFrames版本见 `../../hyperframes/effects.js`，采用可定位的有限GSAP时间轴；它是动效语义适配，不是React原版的逐像素移植。
