// 神器法宝 - 抽卡系统功能
// 包含81个不同类型的知名设计网站，支持随机抽取和分类浏览

// 精选国内设计网站数据
const designWebsites = [
  // 包含81个不同类型的知名设计网站，部分网站支持多分类
  // 综合设计平台
  { name: "站酷", url: "https://www.zcool.com.cn/", category: "综合设计,UI设计,平面设计,插画设计,网页设计", description: "中国设计师交流社区和创意作品分享平台" },
  { name: "UI中国", url: "https://www.ui.cn/", category: "UI设计,UX设计,综合设计", description: "专业UI设计师交流和学习平台" },
  { name: "花瓣网", url: "https://huaban.com/", category: "灵感收集,素材下载,图片素材", description: "设计师灵感收集和素材分享平台" },
  { name: "设计达人", url: "https://www.shejidaren.com/", category: "综合设计,UI设计,UX设计", description: "设计师学习交流社区和资源分享平台" },
  { name: "掘金设计", url: "https://juejin.cn/design", category: "综合设计,UI设计,UX设计,前端开发", description: "设计师技术交流和分享平台" },
  { name: "UI公园", url: "https://www.uipark.cn/", category: "综合设计,UI设计,UX设计,灵感收集", description: "UI设计资源和灵感分享平台" },
  { name: "UI设计师联盟", url: "http://www.uidashi.com/", category: "综合设计,UI设计,UX设计", description: "UI设计师交流和学习社区" },
  { name: "优优教程网", url: "https://uiiiuiii.com/", category: "综合设计,UI设计,教程资源", description: "设计教程和资源分享平台" },
  
  // UI/UX设计
  { name: "优设网", url: "https://www.uisdc.com/", category: "UI设计,UX设计,综合设计,教程资源", description: "UI设计师学习交流平台和教程网站" },
  { name: "腾讯CDC", url: "https://cdc.tencent.com/", category: "UI设计,UX设计,用户研究", description: "腾讯用户研究与体验设计中心" },
  { name: "阿里设计", url: "https://www.ali.design/", category: "UI设计,UX设计,设计系统", description: "阿里巴巴设计体系和资源平台" },
  { name: "百度MEUX", url: "https://mux.baidu.com/", category: "UI设计,UX设计,移动设计", description: "百度移动生态用户体验设计中心" },
  { name: "字节跳动设计", url: "https://bytedance.design/", category: "UI设计,UX设计,动效设计,设计系统", description: "字节跳动设计体系和分享平台" },
  { name: "网易UEDC", url: "https://uedc.163.com/", category: "UI设计", description: "网易用户体验设计中心" },
  { name: "美团设计", url: "https://design.meituan.com/", category: "UI设计", description: "美团设计中心和设计系统" },
  { name: "UI茶馆", url: "https://www.ui666.com/", category: "UI设计", description: "UI设计学习和资源分享平台" },
  { name: "UI资源网", url: "https://www.ui.cn/case/list", category: "UI设计", description: "UI设计案例和资源分享平台" },
  { name: "UXRen社区", url: "https://www.uxren.cn/", category: "UX设计", description: "用户体验设计师交流社区" },
  { name: "交互设计网", url: "http://www.ixdc.org/", category: "UX设计", description: "交互设计行业交流和活动平台" },
  
  // 平面设计
  { name: "红动中国", url: "https://www.redocn.com/", category: "平面设计", description: "中国专业设计网站和素材下载平台" },
  { name: "设计中国", url: "http://www.designcnw.com/", category: "平面设计", description: "平面设计作品展示和学习平台" },
  { name: "平面设计网", url: "http://www.pmsjw.cn/", category: "平面设计", description: "平面设计教程和资源分享平台" },
  { name: "Designup", url: "https://www.designup.com/", category: "平面设计", description: "设计师自由职业接单平台" },
  { name: "创可贴", url: "https://www.chuangkit.com/designtools/designer", category: "平面设计", description: "平面设计在线工具和模板" },
  { name: "海报工厂", url: "https://hb.wondershare.cn/", category: "平面设计", description: "海报设计在线工具" },
  { name: "Canva中国", url: "https://www.canva.cn/", category: "平面设计", description: "在线平面设计工具和模板" },
  { name: "视觉中国创意", url: "https://creative.vcg.com/", category: "平面设计", description: "创意设计作品和素材平台" },
  
  // 素材下载
  { name: "千图网", url: "https://www.58pic.com/", category: "素材下载", description: "海量设计素材和模板下载平台" },
  { name: "包图网", url: "https://ibaotu.com/", category: "素材下载", description: "专业模板和创意设计素材平台" },
  { name: "昵图网", url: "https://www.nipic.com/", category: "素材下载", description: "原创设计素材和图片分享平台" },
  { name: "我图网", url: "https://www.ooopic.com/", category: "素材下载", description: "正版商业图片和设计素材库" },
  { name: "素材中国", url: "https://www.sccnn.com/", category: "素材下载", description: "设计素材和图片分享平台" },
  { name: "素材天下", url: "https://www.sucaitianxia.com/", category: "素材下载", description: "设计素材和模板分享平台" },
  { name: "懒人图库", url: "https://www.lanrentuku.com/", category: "素材下载", description: "网页设计素材和模板下载" },
  { name: "汇图网", url: "https://www.huitu.com/", category: "素材下载", description: "商业图片和设计素材交易平台" },
  { name: "中国素材网", url: "https://www.sucai.com/", category: "素材下载", description: "设计素材和图片分享平台" },
  { name: "素材公社", url: "https://www.tooopen.com/", category: "素材下载", description: "创意设计素材和模板下载平台" },
  { name: "比格设计", url: "https://bigesj.com/", category: "素材下载", description: "设计素材和模板下载平台" },
  
  // 图片素材
  { name: "摄图网", url: "https://699pic.com/", category: "图片素材", description: "高质量图片和设计素材平台" },
  { name: "视觉中国", url: "https://www.vcg.com/", category: "图片素材", description: "全球知名的视觉素材提供商" },
  { name: "图虫创意", url: "https://stock.tuchong.com/", category: "图片素材", description: "专业图片和设计素材交易平台" },
  { name: "全景网", url: "https://www.quanjing.com/", category: "图片素材", description: "专业图片库和视觉素材平台" },
  { name: "锐景创意", url: "https://www.rijing.com/", category: "图片素材", description: "商业图片和创意素材平台" },
  { name: "东方IC", url: "https://www.dfic.cn/", category: "图片素材", description: "专业图片和视觉内容提供商" },
  { name: "海洛创意", url: "https://www.hellorf.com/", category: "图片素材", description: "正版图片和设计素材平台" },
  { name: "中国图库", url: "https://www.tukuchina.cn/", category: "图片素材", description: "图片素材和视觉内容平台" },
  { name: "拍信图库", url: "https://www.paixin.com/", category: "图片素材", description: "商业图片和创意素材平台" },
  
  // 插画设计
  { name: "涂鸦王国", url: "https://www.gracg.com/", category: "插画设计", description: "中国专业插画师作品展示平台" },
  { name: "插画师", url: "https://www.chahua.org/", category: "插画设计", description: "插画师交流和作品展示社区" },
  { name: "插画中国", url: "https://www.chahua.net/", category: "插画设计", description: "中国插画师交流和作品展示平台" },
  { name: "插画星球", url: "https://www.chahua.website/", category: "插画设计", description: "插画作品展示和学习平台" },
  { name: "米画师", url: "https://www.artstation.cn/", category: "插画设计", description: "插画师约稿和作品展示平台" },
  { name: "插画师联盟", url: "http://www.chahua123.com/", category: "插画设计", description: "插画师交流和资源分享平台" },
  { name: "站酷插画", url: "https://www.zcool.com.cn/special/chahuatupian/", category: "插画设计", description: "站酷插画作品展示平台" },
  { name: "小红书插画", url: "https://www.xiaohongshu.com/explore/illustration", category: "插画设计", description: "小红书插画作品和灵感分享" },
  
  // 插画社区
  { name: "Lofter插画", url: "https://www.lofter.com/tag/%E6%8F%92%E7%94%BB", category: "插画社区", description: "网易Lofter插画作品分享社区" },
  { name: "半次元", url: "https://bcy.net/", category: "插画社区", description: "二次元插画和同人创作社区" },
  { name: "涂鸦王国社区", url: "https://www.gracg.com/community", category: "插画社区", description: "插画师交流和作品点评社区" },
  { name: "插画师社区", url: "https://www.illustrationweb.com/", category: "插画社区", description: "插画师交流和资源分享社区" },
  { name: "站酷社区", url: "https://www.zcool.com.cn/community", category: "插画社区", description: "设计师交流和作品分享社区" },
  
  // 3D设计
  { name: "溜溜自学网", url: "https://www.3d66.com/", category: "3D设计", description: "3D模型和素材下载平台" },
  { name: "CG模型网", url: "https://www.cgmodel.com/", category: "3D设计", description: "专业CG模型和素材下载平台" },
  { name: "C4D中国", url: "https://www.c4dcn.com/", category: "3D设计", description: "CINEMA 4D中文学习社区" },
  { name: "3D溜溜网", url: "https://www.3d66.com/3dmodel/", category: "3D设计", description: "3D模型和素材下载平台" },
  { name: "草图大师中文网", url: "https://www.sketchupbar.com/", category: "3D设计", description: "SketchUp中文交流社区" },
  { name: "Blender中文社区", url: "https://www.blendercn.org/", category: "3D设计", description: "Blender中文学习和交流社区" },
  { name: "MAYA学习网", url: "https://www.mayacg.com/", category: "3D设计", description: "MAYA三维动画学习平台" },
  { name: "3ds Max中文网", url: "https://www.3dsmaxcn.com/", category: "3D设计", description: "3ds Max学习和资源分享平台" },
  { name: "VRay渲染网", url: "https://www.vraychina.com/", category: "3D设计", description: "VRay渲染器学习和资源平台" },
  
  // 网页设计
  { name: "网页设计师联盟", url: "http://www.w3cn.org/", category: "网页设计", description: "专业网页设计师学习交流平台" },
  { name: "HTML5中文网", url: "http://www.html5cn.org/", category: "网页设计", description: "HTML5技术和设计资源平台" },
  { name: "蓝色理想", url: "https://www.blueidea.com/", category: "网页设计", description: "网页设计和前端开发社区" },
  { name: "前端网", url: "https://www.qdfuns.com/", category: "网页设计", description: "前端开发和网页设计社区" },
  { name: "Awwwards中文", url: "https://www.awwwards.cn/", category: "网页设计", description: "优秀网页设计作品展示平台" },
  { name: "网页设计网", url: "http://www.wangyesheji.com/", category: "网页设计", description: "网页设计教程和资源分享平台" },
  
  // 动效设计
  { name: "MG动画网", url: "http://www.mgdhw.com/", category: "动效设计", description: "Motion Graphic动画学习平台" },
  { name: "动画中国", url: "http://www.animationcn.com/", category: "动效设计", description: "动画和动效设计学习平台" },
  { name: "AE学习网", url: "https://www.aemac.cn/", category: "动效设计", description: "After Effects学习和资源平台" },
  { name: "Principle学习", url: "https://principleformac.cn/", category: "动效设计", description: "Principle动效设计学习平台" },
  { name: "Lottie中国", url: "https://lottiefiles.cn/", category: "动效设计", description: "Lottie动画和动效资源平台" },
  
  // 字体设计
  { name: "站酷字体", url: "https://www.zcool.com.cn/special/zcoolfonts/", category: "字体设计", description: "站酷出品的原创中文字体" },
  { name: "方正字库", url: "http://www.foundertype.com/", category: "专业字库", description: "方正集团专业中文字库" },
  { name: "汉仪字库", url: "https://www.hanyi.com.cn/", category: "专业字库", description: "汉仪股份专业中文字库" },
  { name: "文鼎字库", url: "https://www.arphic.com/", category: "专业字库", description: "文鼎科技专业中文字库" },
  { name: "华文字库", url: "http://www.hwfonts.com/", category: "专业字库", description: "华文字体设计公司专业字库" },
  { name: "蒙纳字库", url: "https://www.monotype.com/", category: "专业字库", description: "国际知名字库品牌" },
  { name: "字体管家", url: "https://www.fonts.cn/", category: "专业字库", description: "字体管理和下载平台" },
  { name: "字由", url: "https://www.hellofont.cn/", category: "专业字库", description: "在线字体管理和使用平台" },
  { name: "字体视界", url: "https://www.fonts.net.cn/", category: "字体下载", description: "字体下载和预览平台" },
  { name: "字客网", url: "https://www.fontke.com/", category: "字体工具", description: "字体识别和字体下载综合平台" },
  { name: "字体大师", url: "https://www.zitidashi.com/", category: "字体工具", description: "字体设计和下载工具平台" },
  
  // 在线设计
  { name: "创客贴", url: "https://www.chuangkit.com/", category: "在线设计", description: "简单易用的在线设计工具" },
  { name: "懒设计", url: "https://www.logosc.cn/", category: "在线设计", description: "快速设计Logo和海报的工具" },
  { name: "Canva", url: "https://www.canva.cn/", category: "在线设计", description: "全球知名的在线设计平台" },
  { name: "图怪兽", url: "https://818ps.com/", category: "在线设计", description: "在线设计和图片编辑工具" },
  { name: "稿定设计", url: "https://www.gaoding.com/", category: "在线设计", description: "专业在线设计和模板平台" },
  { name: "创客贴设计", url: "https://www.chuangkit.com/designtools/designer", category: "在线设计", description: "专业在线设计工具" },
  { name: "易企秀", url: "https://www.eqxiu.com/", category: "在线设计", description: "H5页面和营销设计平台" },
  
  // 设计协作
  { name: "蓝湖", url: "https://lanhuapp.com/", category: "设计协作", description: "高效的产品设计协作平台" },
  { name: "即时设计", url: "https://js.design/", category: "设计协作", description: "国内优秀的在线设计协作平台" },
  { name: "Figma中国", url: "https://www.figma.com/", category: "设计协作", description: "国际领先的设计协作平台" },
  { name: "Sketch中文社区", url: "https://www.sketchchina.com/", category: "设计协作", description: "Sketch设计工具和资源平台" },
  { name: "Zeplin中文", url: "https://www.zeplin.io/zh-cn", category: "设计协作", description: "设计协作和交付工具" },
  { name: "Marvel App", url: "https://marvelapp.com/", category: "设计协作", description: "原型设计和协作平台" },
  
  // 原型设计
  { name: "墨刀", url: "https://modao.cc/", category: "原型设计", description: "专业UI原型设计和协作工具" },
  { name: "Axure中文网", url: "https://www.axure.com.cn/", category: "原型设计", description: "Axure原型设计工具和教程" },
  { name: "Justinmind", url: "https://www.justinmind.com/", category: "原型设计", description: "原型设计和交互设计工具" },
  { name: "Framer", url: "https://www.framer.com/", category: "原型设计", description: "动效原型设计工具" },
  { name: "InVision", url: "https://www.invisionapp.com/", category: "原型设计", description: "原型设计和设计协作平台" },
  
  // UI组件
  { name: "Ant Design", url: "https://ant.design/", category: "UI组件", description: "国内优秀的企业级UI设计语言" },
  { name: "Element UI", url: "https://element.eleme.io/", category: "UI组件", description: "基于Vue的UI组件库" },
  { name: "Vant UI", url: "https://vant-contrib.gitee.io/vant/#/zh-CN/", category: "UI组件", description: "轻量级移动端UI组件库" },
  { name: "iView UI", url: "https://www.iviewui.com/", category: "UI组件", description: "基于Vue的高质量UI组件库" },
  { name: "TDesign", url: "https://tdesign.tencent.com/", category: "UI组件", description: "腾讯开源设计系统" },
  { name: "Arco Design", url: "https://arco.design/", category: "UI组件", description: "字节跳动开源设计系统" },
  
  // 图标库
  { name: "IconFont", url: "https://www.iconfont.cn/", category: "图标库", description: "阿里巴巴矢量图标库" },
  { name: "Easy Icon", url: "https://www.easyicon.net/", category: "图标库", description: "中文图标搜索和下载平台" },
  { name: "IconPark", url: "https://iconpark.oceanengine.com/", category: "图标库", description: "字节跳动开源图标库" },
  { name: "Font Awesome中文", url: "https://fontawesome.dashgame.com/", category: "图标库", description: "Font Awesome图标库中文站" },
  { name: "图标之家", url: "https://www.tubiaozhijia.com/", category: "图标库", description: "中国风图标和矢量素材平台" }
];

// 分类列表 - 仅保留有对应网站的分类
const categories = [
  "全部", "综合设计", "UI设计", "UX设计", "平面设计", "插画设计", "3D设计", 
  "网页设计", "动效设计", "字体设计", "在线设计", "设计协作", 
  "灵感收集", "素材下载", "图片素材", "插画社区", 
  "原型设计", "字体下载", "字体工具", "专业字库", "UI组件", "图标库"
];

// 初始化抽卡系统功能
function initTreasureHunt() {
  // 获取神器法宝卡片元素
  const treasureHuntCard = document.getElementById('treasure-hunt-card');
  
  if (!treasureHuntCard) {
    console.error('未找到神器法宝卡片元素');
    return;
  }
  
  // 移除已存在的事件监听器，避免重复绑定
  treasureHuntCard.onclick = null;
  
  // 点击卡片时显示弹窗
  treasureHuntCard.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止默认链接行为
    showTreasureHuntModal();
  });
}

// 显示抽卡系统弹窗
function showTreasureHuntModal() {
  // 创建遮罩层
  const overlay = document.createElement('div');
  overlay.className = 'treasure-hunt-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;
  
  // 创建弹窗容器
  const modal = document.createElement('div');
  modal.className = 'treasure-hunt-modal';
  modal.style.cssText = `
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    max-width: 800px;
    max-height: 85vh;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    z-index: 1001;
  `;
  
  // 创建弹窗标题
  const title = document.createElement('h2');
  title.textContent = '神器法宝 - 设计网站抽卡系统';
  title.style.cssText = `
    margin-top: 0;
    color: #333;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
    text-align: center;
  `;
  
  // 创建操作区域
  const actionArea = document.createElement('div');
  actionArea.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 20px 0;
  `;
  
  // 创建抽卡按钮
  const drawButton = document.createElement('button');
  drawButton.id = 'treasure-draw-button';
  drawButton.textContent = '随机抽取一个设计网站';
  drawButton.style.cssText = `
    background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
    color: #333;
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 154, 158, 0.4);
  `;
  
  // 添加抽卡按钮悬停效果
  drawButton.addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-3px)';
    this.style.boxShadow = '0 6px 20px rgba(255, 154, 158, 0.6)';
  });
  
  drawButton.addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 15px rgba(255, 154, 158, 0.4)';
  });
  
  // 添加点击动画效果
  drawButton.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 2px 8px rgba(255, 154, 158, 0.6)';
  });
  
  drawButton.addEventListener('mouseup', function() {
    this.style.transform = 'translateY(-3px)';
    this.style.boxShadow = '0 6px 20px rgba(255, 154, 158, 0.6)';
  });
  
  // 创建分类选择区域
  const categoryArea = document.createElement('div');
  categoryArea.style.cssText = `
    margin: 15px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  `;
  
  // 创建分类标题
  const categoryTitle = document.createElement('span');
  categoryTitle.textContent = '按分类筛选：';
  categoryTitle.style.cssText = `
    margin-right: 10px;
    font-weight: bold;
    color: #555;
  `;
  categoryArea.appendChild(categoryTitle);
  
  // 创建分类按钮
  categories.forEach(category => {
    const categoryBtn = document.createElement('button');
    categoryBtn.textContent = category;
    categoryBtn.className = 'category-btn';
    categoryBtn.dataset.category = category;
    categoryBtn.style.cssText = `
      background-color: #f0f0f0;
      color: #666;
      border: none;
      padding: 6px 12px;
      border-radius: 15px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 14px;
    `;
    
    // 添加悬停效果
    categoryBtn.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#e0e0e0';
      this.style.color = '#333';
    });
    
    categoryBtn.addEventListener('mouseout', function() {
      if (!this.classList.contains('active')) {
        this.style.backgroundColor = '#f0f0f0';
        this.style.color = '#666';
      }
    });
    
    // 添加点击事件
    categoryBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // 移除所有分类按钮的选中状态
      document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.backgroundColor = '#f0f0f0';
        btn.style.color = '#666';
      });
      
      // 添加当前按钮的选中状态
      this.classList.add('active');
      this.style.backgroundColor = '#4CAF50';
      this.style.color = 'white';
      
      // 筛选并显示网站列表
      const selectedCategory = this.dataset.category;
      
      // 直接在当前弹窗中筛选显示，不创建新弹窗
      const websiteList = document.getElementById('treasure-website-list');
      const initialText = document.getElementById('treasure-initial-text');
      const drawAnimationContainer = document.getElementById('treasure-draw-animation');
      
      // 隐藏其他内容
      initialText.style.display = 'none';
      drawAnimationContainer.style.display = 'none';
      
      // 清空列表
      websiteList.innerHTML = '';
      
      // 筛选网站
      let filteredWebsites = designWebsites;
      if (selectedCategory !== '全部') {
        // 使用includes进行包含关系检查，支持一个网站多个分类的情况
        filteredWebsites = designWebsites.filter(website => website.category && website.category.includes(selectedCategory));
      }
      
      // 显示筛选结果
      if (filteredWebsites.length > 0) {
        // 创建结果统计
        const resultCount = document.createElement('div');
        resultCount.textContent = `找到 ${filteredWebsites.length} 个相关设计网站`;
        resultCount.style.cssText = `
          color: #666;
          margin-bottom: 15px;
          text-align: center;
          font-size: 14px;
        `;
        websiteList.appendChild(resultCount);
        
        // 创建网站卡片
        filteredWebsites.forEach(website => {
          const websiteCard = createWebsiteCard(website);
          websiteList.appendChild(websiteCard);
        });
      } else {
        // 没有找到结果
        const noResult = document.createElement('p');
        noResult.textContent = '未找到相关设计网站';
        noResult.style.cssText = `
          color: #999;
          font-size: 16px;
          margin: 0;
        `;
        websiteList.appendChild(noResult);
      }
      
      // 显示列表
      websiteList.style.display = 'flex';
    });
    
    // 默认选中"全部"分类
    if (category === '全部') {
      categoryBtn.classList.add('active');
      categoryBtn.style.backgroundColor = '#4CAF50';
      categoryBtn.style.color = 'white';
    }
    
    categoryArea.appendChild(categoryBtn);
  });
  
  // 添加到操作区域
  actionArea.appendChild(drawButton);
  actionArea.appendChild(categoryArea);
  
  // 创建结果显示区域
  const resultArea = document.createElement('div');
  resultArea.id = 'treasure-result-area';
  resultArea.style.cssText = `
    flex: 1;
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 10px;
    margin: 5px 0;
    overflow-y: auto;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  `;
  
  // 创建初始提示文本
  const initialText = document.createElement('p');
  initialText.id = 'treasure-initial-text';
  initialText.textContent = '点击上方按钮抽取设计网站，或选择分类查看';
  initialText.style.cssText = `
    color: #666;
    font-size: 16px;
    margin: 0;
  `;
  resultArea.appendChild(initialText);
  
  // 创建网站列表容器
  const websiteList = document.createElement('div');
  websiteList.id = 'treasure-website-list';
  websiteList.style.cssText = `
    width: 100%;
    display: none;
    flex-direction: column;
    gap: 10px;
  `;
  resultArea.appendChild(websiteList);
  
  // 创建抽卡动画容器
  const drawAnimationContainer = document.createElement('div');
  drawAnimationContainer.id = 'treasure-draw-animation';
  drawAnimationContainer.style.cssText = `
    width: 100%;
    height: 150px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  
  // 创建动画卡片
  const animationCard = document.createElement('div');
  animationCard.style.cssText = `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px 40px;
    border-radius: 10px;
    font-size: 24px;
    font-weight: bold;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transform: scale(0);
    opacity: 0;
    text-align: center;
  `;
  
  const animationLoading = document.createElement('div');
  animationLoading.textContent = '正在抽取中...';
  animationLoading.style.cssText = `
    margin-top: 20px;
    color: #666;
    font-size: 16px;
  `;
  
  drawAnimationContainer.appendChild(animationCard);
  drawAnimationContainer.appendChild(animationLoading);
  resultArea.appendChild(drawAnimationContainer);
  
  // 创建关闭按钮
  const closeButton = document.createElement('button');
  closeButton.textContent = '关闭';
  closeButton.style.cssText = `
    background-color: #f44336;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
    align-self: center;
  `;
  
  // 添加悬停效果
  closeButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#d32f2f';
  });
  
  closeButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#f44336';
  });
  
  // 添加抽卡事件
  drawButton.addEventListener('click', function() {
    // 隐藏其他内容
    initialText.style.display = 'none';
    websiteList.style.display = 'none';
    
    // 显示动画容器
    drawAnimationContainer.style.display = 'flex';
    
    // 重置动画卡片
    animationCard.style.transform = 'scale(0)';
    animationCard.style.opacity = '0';
    animationCard.textContent = '';
    
    // 播放翻转动画
    setTimeout(() => {
      let currentIndex = 0;
      const flipInterval = setInterval(() => {
        // 快速切换显示不同网站名称，模拟翻牌效果
        if (currentIndex < 15) { // 翻15次牌
          const randomIndex = Math.floor(Math.random() * designWebsites.length);
          animationCard.textContent = designWebsites[randomIndex].name;
          
          // 应用翻转动画
          animationCard.style.transition = 'all 0.1s ease';
          animationCard.style.transform = 'scale(1.1) rotateY(180deg)';
          animationCard.style.opacity = '1';
          
          setTimeout(() => {
            animationCard.style.transform = 'scale(1) rotateY(0deg)';
          }, 50);
          
          currentIndex++;
        } else {
          clearInterval(flipInterval);
          
          // 最终选中一个随机网站
          const finalIndex = Math.floor(Math.random() * designWebsites.length);
          const selectedWebsite = designWebsites[finalIndex];
          
          // 显示最终结果
          setTimeout(() => {
            animationCard.textContent = selectedWebsite.name;
            animationCard.style.transition = 'all 0.3s ease';
            animationCard.style.transform = 'scale(1.2)';
            animationCard.style.opacity = '1';
            
            // 显示结果信息
            setTimeout(() => {
              drawAnimationContainer.style.display = 'none';
              
              // 直接在当前弹窗显示网站详情
              websiteList.innerHTML = '';
              const detailCard = createWebsiteCard(selectedWebsite);
              websiteList.appendChild(detailCard);
              websiteList.style.display = 'flex';
            }, 1000);
          }, 300);
        }
      }, 100);
    }, 300);
  });
  
  // 添加关闭事件
  closeButton.addEventListener('click', function() {
    overlay.remove();
  });
  
  // 点击遮罩层关闭弹窗
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
  
  // 添加ESC键关闭弹窗
  document.addEventListener('keydown', function handleEscKey(e) {
    if (e.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', handleEscKey);
    }
  });
  
  // 组装弹窗
  modal.appendChild(title);
  modal.appendChild(actionArea);
  modal.appendChild(resultArea);
  modal.appendChild(closeButton);
  overlay.appendChild(modal);
  
  // 添加到页面
  document.body.appendChild(overlay);
}

// 根据分类筛选网站
function filterWebsitesByCategory(category) {
  const websiteList = document.getElementById('treasure-website-list');
  const initialText = document.getElementById('treasure-initial-text');
  const drawAnimationContainer = document.getElementById('treasure-draw-animation');
  
  // 隐藏其他内容
  initialText.style.display = 'none';
  drawAnimationContainer.style.display = 'none';
  
  // 清空列表
  websiteList.innerHTML = '';
  
  // 筛选网站
  let filteredWebsites = designWebsites;
  if (category !== '全部') {
    // 使用includes进行包含关系检查，支持一个网站多个分类的情况
    filteredWebsites = designWebsites.filter(website => website.category && website.category.includes(category));
  }
  
  // 显示筛选结果
  if (filteredWebsites.length > 0) {
    // 创建结果统计
    const resultCount = document.createElement('div');
    resultCount.textContent = `找到 ${filteredWebsites.length} 个相关设计网站`;
    resultCount.style.cssText = `
      color: #666;
      margin-bottom: 15px;
      text-align: center;
      font-size: 14px;
    `;
    websiteList.appendChild(resultCount);
    
    // 创建网站卡片
    filteredWebsites.forEach(website => {
      const websiteCard = createWebsiteCard(website);
      websiteList.appendChild(websiteCard);
    });
    
    websiteList.style.display = 'flex';
  } else {
    // 没有找到结果
    const noResult = document.createElement('p');
    noResult.textContent = '未找到相关设计网站';
    noResult.style.cssText = `
      color: #999;
      font-size: 16px;
      margin: 0;
    `;
    websiteList.appendChild(noResult);
    websiteList.style.display = 'flex';
  }
}

// 创建网站详情卡片
function createWebsiteCard(website) {
  const card = document.createElement('div');
  card.style.cssText = `
    background-color: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  `;
  
  // 添加悬停效果
  card.addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  });
  
  card.addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
  });
  
  // 网站名称
  const name = document.createElement('h3');
  name.textContent = website.name;
  name.style.cssText = `
    margin: 0 0 5px 0;
    color: #333;
    font-size: 18px;
  `;
  
  // 网站分类和描述
  const info = document.createElement('div');
  info.style.cssText = `
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  `;
  
  const category = document.createElement('span');
  category.textContent = website.category;
  category.style.cssText = `
    background-color: #e3f2fd;
    color: #1976d2;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 12px;
  `;
  
  const description = document.createElement('span');
  description.textContent = website.description;
  description.style.cssText = `
    color: #666;
  `;
  
  // 网站链接
  const linkContainer = document.createElement('div');
  
  const link = document.createElement('a');
  link.href = website.url;
  link.target = '_blank';
  link.textContent = '访问网站 →';
  link.style.cssText = `
    color: #4CAF50;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease;
  `;
  
  // 添加链接悬停效果
  link.addEventListener('mouseover', function() {
    this.style.color = '#45a049';
    this.style.textDecoration = 'underline';
  });
  
  link.addEventListener('mouseout', function() {
    this.style.color = '#4CAF50';
    this.style.textDecoration = 'none';
  });
  
  // 组装卡片
  info.appendChild(category);
  info.appendChild(description);
  linkContainer.appendChild(link);
  card.appendChild(name);
  card.appendChild(info);
  card.appendChild(linkContainer);
  
  return card;
}

// 显示网站详情
function showWebsiteDetail(website) {
  const websiteList = document.getElementById('treasure-website-list');
  
  // 清空列表
  websiteList.innerHTML = '';
  
  // 创建结果标题
  const resultTitle = document.createElement('div');
  resultTitle.textContent = '恭喜获得设计宝藏！';
  resultTitle.style.cssText = `
    color: #ff6b6b;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;
    padding-top: 10px;
  `;
  websiteList.appendChild(resultTitle);
  
  // 创建网站卡片
  const websiteCard = createWebsiteCard(website);
  websiteCard.style.cssText += `
    border: 2px solid #ff6b6b;
    padding: 15px;
    margin: 0 auto;
    max-width: 100%;
    box-sizing: border-box;
  `;
  websiteList.appendChild(websiteCard);
  
  // 显示列表
  websiteList.style.display = 'flex';
  websiteList.style.flexDirection = 'column';
  websiteList.style.alignItems = 'stretch';
}
    
// DOM加载完成后初始化
function initializeTreasureHunt() {
  // 获取神器法宝卡片元素
  const treasureHuntCard = document.getElementById('treasure-hunt-card');
  
  if (!treasureHuntCard) {
    console.error('未找到神器法宝卡片元素');
    return;
  }
  
  // 移除所有已存在的事件监听器
  const newCard = treasureHuntCard.cloneNode(true);
  treasureHuntCard.parentNode.replaceChild(newCard, treasureHuntCard);
  
  // 重新绑定点击事件
  newCard.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止默认链接行为
    e.stopPropagation(); // 阻止事件冒泡
    showTreasureHuntModal();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTreasureHunt);
} else {
  // 立即执行初始化，但添加一个小延迟确保DOM完全加载
  setTimeout(initializeTreasureHunt, 100);
}

// 暴露给全局
window.initTreasureHunt = initializeTreasureHunt;