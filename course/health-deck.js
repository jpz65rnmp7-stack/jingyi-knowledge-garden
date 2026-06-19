const pptxgen = require("pptxgenjs");

function createHealthDeck() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "景一";
  pres.title = "大健康×美业IP孵化";

  const T = "14B8A6", D = "0D1B2A", W = "FFFFFF", G = "64748B", L = "E2E8F0";

  // S1 Cover
  let s = pres.addSlide(); s.background = { color: D };
  s.addText("大健康 × 美业", { x:0.8, y:1.0, w:8.4, h:1.0, fontSize:44, fontFace:"Arial Black", color:T, bold:true });
  s.addText("IP孵化·完整打法", { x:0.8, y:2.1, w:8.4, h:0.7, fontSize:26, color:W });
  s.addText("从0到变现·五步闭环·每一步都带着钱", { x:0.8, y:3.0, w:8.4, h:0.5, fontSize:16, color:G });
  s.addShape(pres.shapes.RECTANGLE, { x:0.8, y:3.6, w:2.5, h:0.004, fill:{color:T} });
  s.addText("中医古籍×现代科学——没人能跟你竞争的角度", { x:0.8, y:4.0, w:8, h:0.4, fontSize:13, color:G });

  // S2 Two Tracks
  s = pres.addSlide(); s.background = { color: D };
  s.addText("两条黄金赛道", { x:0.8, y:0.4, w:8.4, h:0.6, fontSize:28, color:W, bold:true });
  s.addShape(pres.shapes.RECTANGLE, { x:0.5, y:1.2, w:4.2, h:3.5, fill:{color:"122030"} });
  s.addText("大健康", { x:0.7, y:1.4, w:3.8, h:0.5, fontSize:22, color:T, bold:true });
  s.addText("痛点：怕死/怕病/怕老\n驱动：恐惧驱动(不买会死)\n天花板：¥10万/月\n赛道：睡眠/抗衰/养生/中医", { x:0.7, y:2.1, w:3.8, h:2, fontSize:13, color:L });
  s.addShape(pres.shapes.RECTANGLE, { x:5.3, y:1.2, w:4.2, h:3.5, fill:{color:"122030"} });
  s.addText("美业", { x:5.5, y:1.4, w:3.8, h:0.5, fontSize:22, color:T, bold:true });
  s.addText("痛点：怕丑/怕老/怕不被喜欢\n驱动：欲望驱动(买了更美)\n天花板：¥50万+/月\n赛道：护肤/医美/成分/中医美容", { x:5.5, y:2.1, w:3.8, h:2, fontSize:13, color:L });
  s.addText("脸比命更容易让人掏钱。", { x:0.8, y:4.9, w:8.4, h:0.3, fontSize:14, color:T });

  // S3 Unique Angle
  s = pres.addSlide(); s.background = { color: D };
  s.addText("你的独特武器：中医古籍 × 现代科学", { x:0.8, y:0.4, w:8.4, h:0.6, fontSize:24, color:W, bold:true });
  s.addText([
    { text:"别人讲成分 → 你讲黄帝内经论皮肤", options:{ bullet:true, breakLine:true, fontSize:16, color:L } },
    { text:"别人讲医美 → 你讲治未病,最好的医美是提前不让自己老", options:{ bullet:true, breakLine:true, fontSize:16, color:L } },
    { text:"别人卖面霜 → 你讲慈禧太后的玉容散,现在科学怎么看", options:{ bullet:true, breakLine:true, fontSize:16, color:L } },
    { text:"别人推产品 → 你拆成分表,¥1500的面霜有效成分¥30", options:{ bullet:true, breakLine:true, fontSize:16, color:L } },
    { text:"47本公版书(含中医养生) + 600篇冶炼——专业底蕴无人能敌", options:{ bullet:true, fontSize:16, color:T } }
  ], { x:0.8, y:1.3, w:8.4, h:3.5 });

  // S4 Content Pyramid
  s = pres.addSlide(); s.background = { color: D };
  s.addText("内容金字塔", { x:0.8, y:0.4, w:5, h:0.6, fontSize:24, color:W, bold:true });
  s.addText("每天1条 · 三种形态", { x:0.8, y:1.0, w:5, h:0.3, fontSize:13, color:G });
  s.addShape(pres.shapes.RECTANGLE, { x:0.5, y:1.6, w:9, h:1, fill:{color:"122030"} });
  s.addText("引流层 60%——痛点共鸣+小妙招 → 让人停下来看", { x:0.7, y:1.7, w:8.6, h:0.4, fontSize:14, color:T });
  s.addShape(pres.shapes.RECTANGLE, { x:0.5, y:2.7, w:9, h:1, fill:{color:"122030"} });
  s.addText("信任层 30%——深度知识+案例 → 让人相信你懂", { x:0.7, y:2.8, w:8.6, h:0.4, fontSize:14, color:T });
  s.addShape(pres.shapes.RECTANGLE, { x:0.5, y:3.8, w:9, h:1, fill:{color:"122030"} });
  s.addText("转化层 10%——产品介绍+客户证言 → 让人掏钱", { x:0.7, y:3.9, w:8.6, h:0.4, fontSize:14, color:T });
  s.addText("视频公式：钩子(前3秒) → 痛点 → 解法 → 金句 → 行动", { x:0.8, y:5.0, w:8.4, h:0.3, fontSize:12, color:G });

  // S5 Five Steps
  s = pres.addSlide(); s.background = { color: D };
  s.addText("五步闭环·每一步都带着钱", { x:0.8, y:0.4, w:8.4, h:0.6, fontSize:24, color:W, bold:true });
  const steps = [
    ["STEP 1", "选赛道", "第1-3天", "供需比扫描\n赛道三问"],
    ["STEP 2", "内容矩阵", "第4-30天", "每天1条\n内容金字塔"],
    ["STEP 3", "冷启动", "第1-30天", "前7条必发\n不花钱获流"],
    ["STEP 4", "变现三级", "第25-90天", "带货→课程→一对一"],
    ["STEP 5", "矩阵放大", "第90天+", "三号联动\n跨平台分发"]
  ];
  steps.forEach((st, i) => {
    let x = 0.3 + i * 1.9;
    s.addShape(pres.shapes.RECTANGLE, { x, y:1.3, w:1.7, h:3.8, fill:{color:"122030"} });
    s.addText(st[0], { x:x+0.1, y:1.4, w:1.5, h:0.3, fontSize:10, color:T });
    s.addText(st[1], { x:x+0.1, y:1.8, w:1.5, h:0.4, fontSize:16, color:W, bold:true });
    s.addText(st[2], { x:x+0.1, y:3.2, w:1.5, h:0.3, fontSize:10, color:G });
    s.addText(st[3], { x:x+0.1, y:3.6, w:1.5, h:1.0, fontSize:11, color:L });
  });

  // S6 Monetization
  s = pres.addSlide(); s.background = { color: D };
  s.addText("变现五级火箭（美业版）", { x:0.8, y:0.3, w:8.4, h:0.6, fontSize:24, color:W, bold:true });
  const levels = [
    ["L1 轻带货", "¥29-99", "100单·¥5000/月"],
    ["L2 正装产品", "¥199-399", "50单·¥15000/月"],
    ["L3 护肤课程", "¥299-599", "30人·¥15000/月"],
    ["L4 一对一方案", "¥999-1999", "10人·¥15000/月"],
    ["L5 年度会员", "¥2999/年", "20人·¥60000/月"]
  ];
  levels.forEach((lv, i) => {
    let y = 1.2 + i * 0.8;
    s.addText(lv[0], { x:0.5, y, w:2, h:0.5, fontSize:15, color:T, bold:true });
    s.addText(lv[1], { x:2.6, y, w:2, h:0.5, fontSize:15, color:W });
    s.addText(lv[2], { x:4.6, y, w:3, h:0.5, fontSize:15, color:L });
    s.addShape(pres.shapes.RECTANGLE, { x:7.5, y:y+0.15, w:2, h:0.25, fill:{color:"122030"} });
    s.addText(lv[2].split("·")[1], { x:7.5, y:y+0.1, w:2, h:0.3, fontSize:13, color:T, bold:true });
  });
  s.addText("月收入合计：¥110,000", { x:0.8, y:5.2, w:8.4, h:0.3, fontSize:16, color:T, bold:true });

  // S7 First 7 posts
  s = pres.addSlide(); s.background = { color: D };
  s.addText("前7条必发内容（美业版）", { x:0.8, y:0.3, w:8.4, h:0.6, fontSize:22, color:W, bold:true });
  const posts = [
    "1. 你每天用的那个精华——我拆了一下成分……",
    "2. 枕了30年的枕头，可能一直在害你",
    "3. 中医说肺主皮毛——你的脸在告诉你内脏怎么了",
    "4. 我让10个人试了这个睡前动作,8个人反馈……",
    "5. 这瓶¥1500的面霜有效成分不到¥30",
    "6. 你的卧室温度偷走了你的深度睡眠",
    "7. 这是我收到最多的私信——统一回答一下"
  ];
  s.addText(posts.map((p, i) => ({ text:p, options:{ bullet:true, breakLine:true, fontSize:15, color: i===6?T:L } })), { x:0.8, y:1.2, w:8.4, h:4 });

  // S8 美业特有
  s = pres.addSlide(); s.background = { color: D };
  s.addText("美业变现杀手锏：汉方护肤品牌", { x:0.8, y:0.3, w:8.4, h:0.6, fontSize:22, color:W, bold:true });
  const products = [
    ["玉容散面膜", "白芷/白附子/绿豆粉", "¥12→¥168"],
    ["七白精华液", "白术/白芷/白芨/白芍", "¥18→¥199"],
    ["益母草洁面乳", "益母草涂面方", "¥8→¥99"]
  ];
  products.forEach((p, i) => {
    let y = 1.3 + i * 1.0;
    s.addShape(pres.shapes.RECTANGLE, { x:0.5, y, w:9, h:0.8, fill:{color:"122030"} });
    s.addText(p[0], { x:0.7, y:y+0.1, w:2.5, h:0.5, fontSize:16, color:T, bold:true });
    s.addText(p[1], { x:3.3, y:y+0.1, w:3, h:0.5, fontSize:14, color:W });
    s.addText(p[2], { x:6.5, y:y+0.1, w:2.5, h:0.5, fontSize:16, color:T, bold:true });
  });
  s.addText("古籍配方 + 现代OEM = 你的自有品牌。成本¥15,售价¥168。利润你的。", { x:0.8, y:4.5, w:8.4, h:0.4, fontSize:14, color:G });

  // S9 CTA
  s = pres.addSlide(); s.background = { color: D };
  s.addText("大健康×美业 = 最好的变现赛道", { x:0.8, y:1.5, w:8.4, h:1, fontSize:36, color:T, bold:true });
  s.addText("你有中医古籍+现代科学——没人能在这个角度跟你竞争。", { x:0.8, y:2.5, w:8.4, h:0.6, fontSize:18, color:W });
  s.addText("微信: S-9595A", { x:0.8, y:3.5, w:5, h:0.5, fontSize:24, color:T, bold:true });
  s.addText("GitHub: fable-cc/fable-castle", { x:0.8, y:4.1, w:5, h:0.4, fontSize:14, color:G });

  pres.writeFile({ fileName: "大健康美业IP孵化.pptx" });
  console.log("大健康美业IP孵化.pptx ✔");
}
createHealthDeck();
