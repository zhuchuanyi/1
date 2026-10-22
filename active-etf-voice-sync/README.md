# 主动ETF · 极简语音同步动效版 V3

Apple广告式极简视觉方向：暖白影棚、银色拉丝金属、少量深红标记、纤细字体与充分留白。未使用Apple商标，不表示品牌关联或认可。

## 交付规格
1920×1080，16:9横版，30fps，约1分54秒。包含普通话男声旁白、同步中文字幕、原创稀疏氛围配乐。成片为 `active-etf-minimal-voice-sync-v3.mp4`。

## 工程
`index.html` 为HyperFrames主合成；`DESIGN.md`为本版设计规范；`timing.json`记录镜头、配音及字幕时点；`subtitles.srt`为独立字幕；`assets/`包含分镜旁白、音乐、GSAP和字体子集。

使用Node.js22+和FFmpeg运行：`npm run dev`预览、`npm run check`检查、`npm run render`渲染。CLI锁定0.8.185。所有媒体位于工程内部，无需本地语音模型即可重新渲染。

## 动作约束
文字以短促横向遮罩揭示，之后静止。镜头固定，物体仅缓慢平移、合拢或展开。镜头与内部阶段采用直接切换。无粒子、光效、网格、弹跳和交叉淡化。按用户新增要求，仅当前讲解对象允许放大至1.03倍，并在念完后恢复1.00；不缩放全景、字幕或页脚。深红仅用于局部细线及短提示，单帧面积远低于10%。

## 内容口径
沿用用户确认的精简文案。信息日期2026-10-22，发行日期2026-10-23。认购与上市交易分开表述；PCF不等同于实时交易记录；费用以具体产品及券商安排为准。主动管理不保证超额收益。

相关来源：
- https://finance.eastmoney.com/a/202610203901492567.html
- https://www.sse.com.cn/aboutus/mediacenter/hotandd/c/c_20260617_10822587.shtml
- https://law.esnai.cn/do.aspx?action=show&controller=home&lawid=233035

字体为Noto Sans SC字重250的字形子集，许可证在 `assets/OFL-NotoSansSC.txt`。旁白由Kokoro普通话男声本地合成；金属物体为可编辑SVG；音乐为程序原创。


## V3语音同步强调

53处强调目标、时间与幅度记录在voice-emphasis.json。旁白短句时间来自既有配音，句内关键词时点按文字权重估算，可人工微调。每处强调平滑放大至1.03倍，结束前平滑回到1.00，不循环呼吸或弹跳。

每日披露段接入FolderFloat时间轴适配，纸张平稳展开；能力、策略、稳定性段接入BranchedMenu细线绘制。适配脚本在assets/motion-library.js。所有53处强调已验证中点达到1.03、结束恢复1.00，三条分支绘制结束时完整显示。
