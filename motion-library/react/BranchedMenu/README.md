# BranchedMenu

树状分支展开。用户上传资料归档；源码未改动。

## 依赖
React、React DOM、@hugeicons/react、@hugeicons/core-free-icons。

## 参数
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | BranchedMenuItem[] | DEFAULT_ITEMS | Sections: label plus children (value, label, icon), or a leaf with a value. A section with children folds; a leaf selects. |
| defaultOpen | number | number[] | 0 | The section, or sections, open at first. -1 for none. |
| defaultActive | string | "" | Value selected at first. Empty picks the open section's first child. |
| onSelect | (value, item) => void | - | A child or a leaf was picked. |
| onToggle | (index, open) => void | - | A section folded or unfolded. |
| color | string | "#f5f5f5" | The ink. Lines and idle text are mixes of it. |
| accentColor | string | "#f5f5f5" | The active line, the active label and the marker. |
| lineColor | string | "#3f3f46" | The rail, trunk and branches. A solid colour, so joints never darken. |
| width | number | 240 | The widest the menu may be, in px. It shrinks to its content. |
| rowHeight | number | 36 | Height of a child row in px. |
| indent | number | 40 | Where child rows start, in px. Branches end just before it. |
| trunk | number | 14 | The trunk line's x position, in px. |
| radius | number | 10 | The curve of each branch, in px. |
| lineWidth | number | 1.5 | Stroke width of the lines. |
| fontSize | number | 14 | Child text size in px. Headers are 1px larger. |
| drawDuration | number | 400 | The accent line's travel, in ms. |
| foldDuration | number | 300 | A section's fold and unfold, in ms. |
| className | string | "" | Extra classes for the nav. |


## 视频适配
原版为交互组件。HyperFrames版本见 `../../hyperframes/effects.js`，采用可定位的有限GSAP时间轴；它是动效语义适配，不是React原版的逐像素移植。
