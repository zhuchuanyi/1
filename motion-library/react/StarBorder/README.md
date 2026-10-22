# StarBorder

边框轨迹。用户上传资料归档；源码未改动。

## 依赖
React、React DOM。

## 参数
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| as | ElementType | 'button' | Element or component to render, for example a, div or a router Link. |
| color | string | - | Color of the star and its glow. Defaults to white on dark and ink on light. |
| trailColor | string | - | Color the trail fades into behind the star. Defaults to color. |
| duration | number | 4 | Seconds for one lap around the border. The star keeps the same pace on any shape. |
| direction | 'clockwise' | 'counterclockwise' | 'clockwise' | Which way the star travels. |
| stars | number | 1 | Stars spaced evenly around the border, up to 6. |
| trailLength | number | 0.3 | Length of the trail as a share of the border. Trails stretch when the star speeds up. |
| thickness | number | 1 | Border width in pixels. |
| radius | number | 12 | Corner radius in pixels. Values past half the height give a pill. |
| glow | number | 0.6 | Bloom around the star and its trail, from 0 to 1. Light spills onto the surface and the page. |
| sparkle | boolean | false | Puts a small twinkling glint at the front of each trail and lets it shed fine stardust. |
| hover | 'lap' | 'brighten' | 'reveal' | 'none' | 'lap' | What happens on hover and keyboard focus. Lap sends the star once around the border, brighten makes the light shine stronger, and reveal keeps it hidden until then. |
| clickPulse | boolean | true | Sends light racing around the border from the point you press. |
| theme | 'dark' | 'light' | 'dark' | Picks the default surface, text, border and star colors. |
| backgroundColor | string | - | Surface color. Follows the theme when not set. |
| textColor | string | - | Text color. Follows the theme when not set. |
| borderColor | string | - | Color of the resting border the star travels on. Follows the theme when not set. |
| className | string | '' | Extra classes for the root, for example to change padding or font. |
| style | CSSProperties | - | Inline styles for the root. |


## 视频适配
原版为交互组件。HyperFrames版本见 `../../hyperframes/effects.js`，采用可定位的有限GSAP时间轴；它是动效语义适配，不是React原版的逐像素移植。
