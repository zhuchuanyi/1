# 主动ETF V15

16:9 · 1920×1080 · 30fps · 159.18秒。沿用V14语速，保持音高，无BGM。

03按钮先居中，点击后上移再展开。06疑问结束后连续成环，中央显示先求稳再求进，删对应底部字幕。07数码管笔画减半，弱化单位。08到09停顿缩短0.6秒。

完整分镜与口播见production-plan.md；字幕见subtitles.srt；index.html为HyperFrames主工程。

```bash
npx hyperframes preview .
npx hyperframes render . --fps 30 --quality high --workers 2
```
