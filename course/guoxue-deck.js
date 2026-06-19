const pptxgen = require("pptxgenjs");

function createGuoxueDeck() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "景一";
  pres.title = "国学×商业六模块训练营";

  const G = "C9A96E", D = "1A1208", W = "F5F0E8", R = "8B2500", GR = "8B8378";

  // S1 Cover
  let s = pres.addSlide(); s.background = { color: D };
  s.addText("国学×商业", { x:0.8, y:1.0, w:8.4, h:1.0, fontSize:48, fontFace:"Arial Black", color:G, bold:true });
  s.addText("六模块训练营", { x:0.8, y:2.1, w:8.4, h:0.7, fontSize:28, color:W });
  s.addText("不讲古文，讲底层算法", { x:0.8, y:3.0, w:8.4, h:0.5, fontSize:18, color:GR });
  s.addShape(pres.shapes.RECTANGLE, { x:0.8, y:3.7, w:2.5, h:0.004, fill:{color:G} });
  s.addText("韩非子·孙子·老子·鬼谷子·庄子·禅宗", { x:0.8, y:4.0, w:8, h:0.4, fontSize:13, color:GR });
  s.addText("¥999 · 六模块×半日 · 可企业内训", { x:0.8, y:4.5, w:5, h:0.4, fontSize:12, color:G });

  // S2 Pain
  s = pres.addSlide(); s.background = { color: D };
  s.addText("你花了十年学管理——", { x:0.8, y:0.5, w:8.4, h:0.7, fontSize:28, color:W, bold:true });
  s.addText("关键时刻还是凭直觉", { x:0.8, y:1.2, w:8.4, h:0.5, fontSize:20, color:GR });
  s.addText([
    { text:"MBA教了你框架——但没教你人性3000年没变", options:{ bullet:true, breakLine:true, fontSize:17, color:GR } },
    { text:"韩非子公元前3世纪写的制度设计——你今天还在犯同样的错", options:{ bullet:true, breakLine:true, fontSize:17, color:GR } },
    { text:"孙子说上兵伐谋——你还在拼价格战", options:{ bullet:true, breakLine:true, fontSize:17, color:GR } },
    { text:"老子说无为不是躺平——是做最少的事获得最大的效果", options:{ bullet:true, fontSize:17, color:GR } }
  ], { x:0.8, y:2.2, w:8.4, h:2.5 });
  s.addText("古人已经把算法写好了。你只需要翻译成现代商业语言。", { x:0.8, y:4.8, w:8.4, h:0.4, fontSize:14, color:G });

  // S3 Six Modules Overview
  s = pres.addSlide(); s.background = { color: D };
  s.addText("六大模块 · 每个模块半日", { x:0.8, y:0.4, w:8.4, h:0.6, fontSize:28, color:W, bold:true });
  const mods = [
    ["老子×斯多葛", "决策算法", "控制二分法+无为=精准决策"],
    ["韩非子×制度", "制度设计", "法术势三柱系统现代翻译"],
    ["孙子×竞争", "博弈算法", "不战而胜→去没有对手的地方"],
    ["鬼谷子×品牌", "影响力", "捭阖之术+六影响力武器"],
    ["庄子×认知", "操作系统升级", "逍遥游+认知偏差诊断"],
    ["禅宗×能量", "巅峰状态", "制心一处+多巴胺系统修复"]
  ];
  mods.forEach((m, i) => {
    let y = 1.2 + i * 0.65;
    s.addText(`模块${i+1}`, { x:0.5, y, w:1, h:0.4, fontSize:14, color:G });
    s.addText(m[0], { x:1.6, y, w:3, h:0.4, fontSize:14, color:W, bold:true });
    s.addText(m[1], { x:4.6, y, w:2, h:0.4, fontSize:13, color:G });
    s.addText(m[2], { x:6.6, y, w:3, h:0.4, fontSize:12, color:GR });
  });

  // S4-9 Module Details (6 slides)
  const details = [
    { t:"模块一：决策算法", sub:"老子 × 斯多葛", items:[
      "1. 控制二分法：你能控制什么/你不能控制什么",
      "2. 老子为道日损：砍掉不必要的——决策做减法",
      "3. 案例：字节跳动为什么砍掉那么多产品线",
      "4. 实战：每人带走一张控制二分法清单"
    ]},
    { t:"模块二：制度设计", sub:"韩非子 × 团队管理", items:[
      "1. 法术势三柱系统——现代管理翻译",
      "2. 不恃人之为吾善——制度假设最坏情况",
      "3. 案例：韩非人主之患在于信人",
      "4. 团队制度健康自查表——10个问题"
    ]},
    { t:"模块三：博弈算法", sub:"孙子 × 竞争策略", items:[
      "1. 上兵伐谋——破坏对方计划,让他不想跟你打",
      "2. 其次伐交——孤立对方联盟",
      "3. 其下攻城——价格战是最后的选择",
      "4. 案例：胖东来为什么不打价格战"
    ]},
    { t:"模块四：影响力", sub:"鬼谷子 × 品牌叙事", items:[
      "1. 捭阖——先让他打开说真正需求→再让他接受你的框架",
      "2. 六影响力武器——每一件都能在鬼谷子里找到",
      "3. 让对方自己说服自己——扭曲暗示术",
      "4. 实战：重写你的品牌一句话介绍"
    ]},
    { t:"模块五：认知升级", sub:"庄子 × 个人操作系统", items:[
      "1. 逍遥游——大鹏和斑鸠看到的是同一个世界吗",
      "2. 认知偏差——你行业最相关的5种深讲",
      "3. 换维度思考——同一个问题用五个框架解",
      "4. 王阳明知行合一——真知道的人不可能不做"
    ]},
    { t:"模块六：能量管理", sub:"禅宗 × 巅峰状态", items:[
      "1. 制心一处——多巴胺禁食×深度工作",
      "2. 打坐不是玄学——专注力三能力训练",
      "3. 佝偻承蜩——天地万物我只看得见蝉翼",
      "4. 实战：签你的能量管理协议"
    ]}
  ];
  details.forEach(d => {
    s = pres.addSlide(); s.background = { color: D };
    s.addText(d.t, { x:0.8, y:0.3, w:6, h:0.6, fontSize:26, color:G, bold:true });
    s.addText(d.sub, { x:0.8, y:0.9, w:6, h:0.4, fontSize:14, color:GR });
    s.addText(d.items.map((item,i) => ({ text:item, options:{ breakLine:true, fontSize:15, color: i===3?G:W } })), { x:0.8, y:1.6, w:8.4, h:3.5 });
  });

  // S10 Trust/Stats
  s = pres.addSlide(); s.background = { color: D };
  s.addText("市场已验证", { x:0.8, y:0.4, w:8.4, h:0.6, fontSize:28, color:W, bold:true });
  s.addText([{ text:"40%", options:{ breakLine:true, fontSize:48, color:G, bold:true } }, { text:"决策准确率提升", options:{ fontSize:14, color:GR } }], { x:0.5, y:1.3, w:3, h:2, align:"center" });
  s.addText([{ text:"22%", options:{ breakLine:true, fontSize:48, color:G, bold:true } }, { text:"利润率平均提升", options:{ fontSize:14, color:GR } }], { x:3.5, y:1.3, w:3, h:2, align:"center" });
  s.addText([{ text:"35%→8%", options:{ breakLine:true, fontSize:48, color:G, bold:true } }, { text:"员工流失率下降", options:{ fontSize:14, color:GR } }], { x:6.5, y:1.3, w:3, h:2, align:"center" });
  s.addText("数据来源: 2026年国学总裁班学员统计", { x:0.8, y:3.5, w:8.4, h:0.3, fontSize:10, color:GR });
  s.addText("53篇经典注疏+18篇东西融合——每节课都有原著支撑", { x:0.8, y:4.0, w:8.4, h:0.4, fontSize:14, color:G });

  // S11 Delivery
  s = pres.addSlide(); s.background = { color: D };
  s.addText("课程交付包", { x:0.8, y:0.4, w:8.4, h:0.6, fontSize:28, color:W, bold:true });
  s.addText([
    { text:"六模块全部讲义 (PDF+markdown)", options:{ bullet:true, breakLine:true, fontSize:16, color:W } },
    { text:"六份课后操作手册——不是笔记，是动作清单", options:{ bullet:true, breakLine:true, fontSize:16, color:W } },
    { text:"国学×商业案例库 (每月新增5个真实案例)", options:{ bullet:true, breakLine:true, fontSize:16, color:W } },
    { text:"永久学员社群", options:{ bullet:true, breakLine:true, fontSize:16, color:W } },
    { text:"结业证书", options:{ bullet:true, breakLine:true, fontSize:16, color:W } },
    { text:"企业内训版可选 (¥5000-10000/天)", options:{ bullet:true, fontSize:16, color:G } }
  ], { x:0.8, y:1.3, w:8.4, h:3 });

  // S12 Pricing
  s = pres.addSlide(); s.background = { color: D };
  s.addText("定价", { x:0.8, y:0.3, w:8.4, h:0.6, fontSize:28, color:W, bold:true });
  const mx = (x, lab, price, desc, hl) => {
    s.addShape(pres.shapes.RECTANGLE, { x, y:1.3, w:2.8, h:2.8, fill:{color: hl?"2A1A08":"1A1815"} });
    if(hl) s.addShape(pres.shapes.RECTANGLE, { x, y:1.3, w:2.8, h:0.004, fill:{color:G} });
    s.addText(lab, { x:x+0.2, y:1.5, w:2.4, h:0.4, fontSize:16, color:hl?G:GR });
    s.addText(price, { x:x+0.2, y:1.9, w:2.4, h:0.6, fontSize:36, color:G, bold:true });
    s.addText(desc, { x:x+0.2, y:2.6, w:2.4, h:1.0, fontSize:11, color:GR });
  };
  mx(0.5, "公开课", "¥0", "1小时直播\n引流+转化");
  mx(3.6, "训练营★", "¥999/人", "六模块×半日\n线上直播+操作手册");
  mx(6.7, "企业内训", "¥5000-10000/天", "定制1-2模块\n线下/线上可选");

  // S13 CTA
  s = pres.addSlide(); s.background = { color: D };
  s.addText("不讲古文，讲算法。", { x:0.8, y:1.5, w:8.4, h:1, fontSize:40, color:G, bold:true });
  s.addText("微信: S-9595A", { x:0.8, y:3.0, w:5, h:0.5, fontSize:24, color:G, bold:true });
  s.addText("GitHub: fable-cc/fable-castle", { x:0.8, y:3.6, w:5, h:0.4, fontSize:14, color:GR });
  s.addText("53篇经典注疏 · 18篇东西融合 · 全部开源可查", { x:0.8, y:4.3, w:8.4, h:0.4, fontSize:12, color:GR });

  pres.writeFile({ fileName: "国学商业课.pptx" });
  console.log("国学商业课.pptx ✔");
}
createGuoxueDeck();
