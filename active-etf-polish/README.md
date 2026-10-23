# 主动ETF V14

16:9 · 1920×1080 · 30fps · 约159.78秒。沿用V13提速配音，保持音高，无BGM。

- 02：补充“争取跑赢基准”。
- 03：交易、透明、成本依次出现，念到先看交易时才点击；买卖说明位于上市交易下方；按钮点击后鼠标向右下方移出并消失。
- 06：疑问连续转为环形图；稳与进在同一位置变形，去掉辅助说明。
- 07：固定七段数码管金额，仅数字笔画变化。
- 08-E：改为深色玻璃空间。
- 09：去掉顶部小字和最后稳赚神话一句口播，保留中心文字与风险提示。

完整分镜和口播见production-plan.md；字幕见subtitles.srt；来源见sources.md。index.html为HyperFrames主工程，assets包含全部本地素材。

```bash
npx hyperframes preview .
npx hyperframes render . --fps 30 --quality high --workers 2
```
