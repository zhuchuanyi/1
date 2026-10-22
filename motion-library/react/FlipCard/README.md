# FlipCard

双面翻卡。用户上传资料归档；源码未改动。

## 依赖
React、React DOM、motion。

## 参数
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| front | ReactNode | null | Content of the front face. |
| back | ReactNode | null | Content of the back face. |
| flipped | boolean | - | Controlled state: true shows the back. Omit it to let the card manage itself. |
| defaultFlipped | boolean | false | Start on the back face. |
| onFlipChange | (flipped: boolean) => void | - | Fires when a click, drag, flick or key lands on the other face. |
| axis | 'y' | 'x' | 'y' | y turns the card sideways and drags horizontally. x turns it over the top and drags vertically. |
| flipOnClick | boolean | true | A press without movement flips the card. |
| draggable | boolean | true | Drag to turn the card by hand. On release it springs to the nearest face, carrying the flick velocity. |
| dragDistance | number | 0 | Pixels of drag for a half turn. 0 uses the card width, or its height on the x axis. |
| tilt | boolean | true | The card leans toward the cursor on hover. |
| tiltMax | number | 12 | Largest tilt angle in degrees. |
| glare | boolean | true | A soft sheen that follows the cursor. |
| glareOpacity | number | 0.22 | Strength of the sheen at its centre. |
| hoverScale | number | 1.03 | Lift while hovered or held. |
| perspective | number | 1100 | Viewing distance in px. Smaller is more dramatic. |
| stiffness | number | 170 | Stiffness of the flip spring. |
| damping | number | 20 | Damping of the flip spring. Lower overshoots more. |
| width | number | 300 | Card width in px, capped at the parent. |
| height | number | 400 | Card height in px. |
| radius | number | 22 | Corner radius in px. |
| background | string | "#27272a" | Surface of both faces. |
| color | string | "#f5f5f5" | Text colour of both faces. |
| shadow | boolean | true | A soft shadow beneath the card that narrows as it turns edge on. |
| shadowColor | string | "#000000" | Shadow colour. |
| shadowOpacity | number | 0.45 | Shadow strength. |
| disabled | boolean | false | Dimmed, flat and inert. |
| ariaLabel | string | "Flip card" | Accessible name. The face is carried by aria-pressed. |
| className | string | "" | Extra classes for the root. |


## 视频适配
原版为交互组件。HyperFrames版本见 `../../hyperframes/effects.js`，采用可定位的有限GSAP时间轴；它是动效语义适配，不是React原版的逐像素移植。
