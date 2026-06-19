const pptxgen = require("pptxgenjs");

function createIPDeck() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "景一";
  pres.title = "IP爆破营";

  const G = "C9A96E", D = "1A1A2E", W = "FFFFFF", L = "E8D5B7", GR = "8B8B90";
  const b = { color: D };

  // S1 Cover
  let s = pres.addSlide(); s.background = b;
  s.addText("IP爆破营", { x:0.8, y:1.2, w:8.4, h:1.2, fontSize:48, fontFace:"Arial Black", color:G, bold:true });
  s.addText("21天·从0到变现", { x:0.8, y:2.5, w:8.4, h:0.6, fontSize:24, color:L });
  s.addText("定位→内容→流量→变现", { x:0.8, y:3.3, w:8.4, h:0.5, fontSize:16, color:GR });
  s.addShape(pres.shapes.RECTANGLE, { x:0.8, y:4.2, w:2, h:0.004, fill:{color:G} });
  s.addText("github.com/fable-cc/fable-castle", { x:6, y:4.5, w:4, h:0.4, fontSize:10, color:GR, align:"right" });

  // S2 Pain
  s = pres.addSlide(); s.background = b;
  s.addText("你是不是这样？", { x:0.8, y:0.5, w:8.4, h:0.7, fontSize:32, color:W, bold:true });
  s.addText([
    { text:"想做IP但不知道从哪里开始", options:{ bullet:true, breakLine:true, fontSize:18, color:GR } },
    { text:"写了一堆内容，没人看", options:{ bullet:true, breakLine:true, fontSize:18, color:GR } },
    { text:"定位换了三次，越换越迷茫", options:{ bullet:true, breakLine:true, fontSize:18, color:GR } },
    { text:"看别人赚钱，不知道怎么变现", options:{ bullet:true, breakLine:true, fontSize:18, color:GR } },
    { text:"觉得自己不够格，一直不敢开始", options:{ bullet:true, fontSize:18, color:GR } }
  ], { x:0.8, y:1.5, w:8, h:3 });
  s.addText("不是你的问题——是你缺一个能跟着做的系统。", { x:0.8, y:4.5, w:8.4, h:0.5, fontSize:16, color:G });

  // S3 Modules Overview
  s = pres.addSlide(); s.background = b;
  s.addText("21天。四大模块。", { x:0.8, y:0.4, w:8.4, h:0.7, fontSize:32, color:W, bold:true });
  s.addText("每天1小时。每天一个产出。", { x:0.8, y:1.1, w:8.4, h:0.4, fontSize:16, color:GR });
  s.addText([
    { text:"模块一：定位爆破 (第1-5天)", options:{ bold:true, breakLine:true, fontSize:17, color:G } },
    { text:"认知差挖掘 · 三层定位 · 人群画像 · 供需比扫描", options:{ breakLine:true, fontSize:14, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:6 } },
    { text:"模块二：内容核弹 (第6-12天)", options:{ bold:true, breakLine:true, fontSize:17, color:G } },
    { text:"选题工厂 · 内容结构 · 去AI味写作 · 一篇变四种形态", options:{ breakLine:true, fontSize:14, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:6 } },
    { text:"模块三：流量核爆 (第13-17天)", options:{ bold:true, breakLine:true, fontSize:17, color:G } },
    { text:"知乎获客 · 小红书种草 · 抖音起号 · 私域引流", options:{ breakLine:true, fontSize:14, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:6 } },
    { text:"模块四：变现闭环 (第18-21天)", options:{ bold:true, breakLine:true, fontSize:17, color:G } },
    { text:"三级定价漏斗 · 成交文案 · 朋友圈模板 · 90天日历", options:{ fontSize:14, color:GR } },
  ], { x:0.8, y:1.8, w:8.4, h:3.5 });

  // S4 Why Jingyi
  s = pres.addSlide(); s.background = b;
  s.addText("为什么是景一", { x:0.8, y:0.4, w:8.4, h:0.7, fontSize:32, color:W, bold:true });
  s.addText([
    { text:"不是“教你”——是“你看我做了，你跟着做”", options:{ bold:true, breakLine:true, fontSize:18, color:G } },
    { text:"600篇文章+72支柱+47本公版书在GitHub开源可查", options:{ breakLine:true, fontSize:15, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:8 } },
    { text:"不是“你应该”——是“我已经做到了”", options:{ bold:true, breakLine:true, fontSize:18, color:G } },
    { text:"从第1篇到第600篇，从0粉丝到付费客户——全链路公开", options:{ breakLine:true, fontSize:15, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:8 } },
    { text:"GitHub是我的专业身份证。你不需要相信我——你自己验证。", options:{ fontSize:16, color:L } }
  ], { x:0.8, y:1.5, w:8.4, h:3.5 });

  // S5 Module 1 Detail
  s = pres.addSlide(); s.background = b;
  s.addText("模块一：定位爆破", { x:0.8, y:0.4, w:6, h:0.6, fontSize:28, color:G, bold:true });
  s.addText("第1-5天", { x:0.8, y:1.0, w:3, h:0.4, fontSize:14, color:GR });
  s.addText([
    { text:"1. 认知差挖掘——你身上有金矿，你不知道", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"列出你行业里只有你知道的3件事", options:{ breakLine:true, fontSize:13, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:6 } },
    { text:"2. 三层定位法——功能层/身份层/使命层", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"写完三行定位，一句话说清你做什么", options:{ breakLine:true, fontSize:13, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:6 } },
    { text:"3. 人群定位——不卖穷人，筛选就是成交", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"画完三层客户画像：付费/潜在/不碰", options:{ breakLine:true, fontSize:13, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:6 } },
    { text:"4. 差异化定位——供需比决定你的人生难度", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"赛道供需比扫描报告+竞争分析", options:{ breakLine:true, fontSize:13, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:6 } },
    { text:"5. 直播答疑+定位点评——定位定稿", options:{ fontSize:16, color:G } }
  ], { x:0.8, y:1.5, w:8.4, h:3.8 });

  // S6 Module 2 Detail
  s = pres.addSlide(); s.background = b;
  s.addText("模块二：内容核弹", { x:0.8, y:0.4, w:6, h:0.6, fontSize:28, color:G, bold:true });
  s.addText("第6-12天", { x:0.8, y:1.0, w:3, h:0.4, fontSize:14, color:GR });
  s.addText([
    { text:"1. 选题工厂——72支柱x5角度=360个选题", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"2. 内容结构——核心论点+三个支撑+金句", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"3. 去AI味写作——加故事+加数字+删废话", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"4. 内容复利——一篇变四种形态", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"   文章/口播脚本/小红书图文/知乎回答", options:{ breakLine:true, fontSize:13, color:GR } },
    { text:"5. 短视频文案公式——钩子x痛点x解法x金句x行动", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"6. 视觉呈现——封面/标题/排版三要素", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"7. 直播答疑+内容点评", options:{ fontSize:16, color:G } }
  ], { x:0.8, y:1.5, w:8.4, h:3.8 });

  // S7 Module 3 Detail
  s = pres.addSlide(); s.background = b;
  s.addText("模块三：流量核爆", { x:0.8, y:0.4, w:6, h:0.6, fontSize:28, color:G, bold:true });
  s.addText("第13-17天", { x:0.8, y:1.0, w:3, h:0.4, fontSize:14, color:GR });
  s.addText([
    { text:"1. 知乎获客——回答问题的正确姿势", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"2. 小红书种草——图文笔记的高转化模板", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"3. 抖音起号——前7条短视频脚本+拍摄计划", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"4. 私域引流——从公域到微信的四个触达点", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"5. 30天内容日历——每天发什么,精确到天", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"6. 直播答疑+流量策略点评", options:{ fontSize:16, color:G } }
  ], { x:0.8, y:1.5, w:8.4, h:3.5 });

  // S8 Module 4 Detail
  s = pres.addSlide(); s.background = b;
  s.addText("模块四：变现闭环", { x:0.8, y:0.4, w:6, h:0.6, fontSize:28, color:G, bold:true });
  s.addText("第18-21天", { x:0.8, y:1.0, w:3, h:0.4, fontSize:14, color:GR });
  s.addText([
    { text:"1. 三级定价漏斗——¥39.9→¥599→¥2999", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"2. 成交文案——不是推销，让他自己想买", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"3. 朋友圈成交模板——3条文案直接可用", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"4. 90天执行日历——21天后你继续做什么", options:{ breakLine:true, fontSize:16, color:L } },
    { text:"5. 结营+学员案例展示——完整作战地图", options:{ fontSize:16, color:G } }
  ], { x:0.8, y:1.5, w:8.4, h:3.0 });

  // S9 Pricing
  s = pres.addSlide(); s.background = b;
  s.addText("课程定价", { x:0.8, y:0.3, w:8.4, h:0.6, fontSize:28, color:W, bold:true });
  const mkCard = (x, label, price, sub, desc, hl) => {
    s.addShape(pres.shapes.RECTANGLE, { x, y:1.3, w:2.8, h:3.5, fill:{color: hl?"2A2A1A":"252540"} });
    if(hl) s.addShape(pres.shapes.RECTANGLE, { x, y:1.3, w:2.8, h:0.004, fill:{color:G} });
    s.addText(label, { x:x+0.2, y:1.5, w:2.4, h:0.4, fontSize:16, color:hl?G:GR });
    s.addText(price, { x:x+0.2, y:1.9, w:2.4, h:0.6, fontSize:36, color:G, bold:true });
    s.addText(sub, { x:x+0.2, y:2.6, w:2.4, h:0.3, fontSize:11, color:GR });
    s.addText(desc, { x:x+0.2, y:3.0, w:2.4, h:0.8, fontSize:11, color:L });
  };
  mkCard(0.5, "引流课", "¥39.9", "3天IP定位诊断", "认知差+三层定位\n+四个致命错误", false);
  mkCard(3.6, "主力课★", "¥599", "21天IP爆破营", "四大模块+社群\n每周直播+作业点评", true);
  mkCard(6.7, "1对1", "¥2999", "IP顾问一对一", "90分钟诊断+定制方案\n+30天跟进", false);
  s.addText("¥39.9只是一杯咖啡钱——过滤不认真的人。¥599你花21天换一个能变现的IP。不满意退款。", { x:0.5, y:5.0, w:9, h:0.4, fontSize:11, color:GR });

  // S10 Results
  s = pres.addSlide(); s.background = b;
  s.addText("21天后你手里有什么", { x:0.8, y:0.4, w:8.4, h:0.6, fontSize:28, color:W, bold:true });
  s.addText([
    { text:"✅ 一个精准的IP定位", options:{ bold:true, breakLine:true, fontSize:18, color:G } },
    { text:"三层定位+人群画像+供需比报告", options:{ breakLine:true, fontSize:14, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:6 } },
    { text:"✅ 一套完整的内容系统", options:{ bold:true, breakLine:true, fontSize:18, color:G } },
    { text:"30个选题+7条短视频脚本+4平台分发模板", options:{ breakLine:true, fontSize:14, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:6 } },
    { text:"✅ 一个正在运转的流量引擎", options:{ bold:true, breakLine:true, fontSize:18, color:G } },
    { text:"知乎/小红书/抖音三平台内容日历", options:{ breakLine:true, fontSize:14, color:GR } },
    { text:"", options:{ breakLine:true, fontSize:6 } },
    { text:"✅ 一条清晰的变现路径", options:{ bold:true, fontSize:18, color:G } },
    { text:"三级定价漏斗+成交文案+90天执行计划", options:{ fontSize:14, color:GR } }
  ], { x:0.8, y:1.3, w:8.4, h:3.5 });

  // S11 CTA
  s = pres.addSlide(); s.background = b;
  s.addText("现在开始。", { x:0.8, y:1.5, w:8.4, h:1, fontSize:44, color:G, bold:true });
  s.addText("21天后——你手里有一个能变现的IP雏形。", { x:0.8, y:2.5, w:8.4, h:0.6, fontSize:20, color:W });
  s.addText("微信: S-9595A", { x:0.8, y:3.5, w:5, h:0.5, fontSize:24, color:G, bold:true });
  s.addText("GitHub: fable-cc/fable-castle", { x:0.8, y:4.1, w:5, h:0.4, fontSize:14, color:GR });

  pres.writeFile({ fileName: "IP爆破营.pptx" });
  console.log("IP爆破营.pptx ✔");
}
createIPDeck();
