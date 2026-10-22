# 主动ETF，多一种选择。

Apple广告式极简视觉方向：暖白影棚、银色拉丝金属、少量深红标记、纤细字体与充分留白。未使用Apple商标，不表示品牌关联或认可。

## 交付规格
1920×1080，16:9横版，30fps，约1分54秒。包含普通话男声旁白、同步中文字幕、原创稀疏氛围配乐。成片为 `active-etf-minimal-16x9-v2.mp4`。

## 工程
`index.html` 为HyperFrames主合成；`DESIGN.md`为本版设计规范；`timing.json`记录镜头、配音及字幕时点；`subtitles.srt`为独立字幕；`assets/`包含分镜旁白、音乐、GSAP和字体子集。

使用Node.js22+和FFmpeg运行：`npm run dev`预览、`npm run check`检查、`npm run render`渲染。CLI锁定0.8.185。所有媒体位于工程内部，无需本地语音模型即可重新渲染。

## 动作约束
文字以短促横向遮罩揭示，之后静止。镜头固定，物体仅缓慢平移、合拢或展开。镜头与内部阶段采用直接切换。无粒子、光效、网格、弹跳、主体缩放和交叉淡化。深红仅用于局部细线及短提示，单帧面积远低于10%。

## 内容口径
沿用用户确认的精简文案。信息日期2026-10-22，发行日期2026-10-23。认购与上市交易分开表述；PCF不等同于实时交易记录；费用以具体产品及券商安排为准。主动管理不保证超额收益。

相关来源：
- https://finance.eastmoney.com/a/202610203901492567.html
- https://www.sse.com.cn/aboutus/mediacenter/hotandd/c/c_20260617_10822587.shtml
- https://law.esnai.cn/do.aspx?action=show&controller=home&lawid=233035

字体为Noto Sans SC字重250的字形子集，许可证在 `assets/OFL-NotoSansSC.txt`。旁白由Kokoro普通话男声本地合成；金属物体为可编辑SVG；音乐为程序原创。
