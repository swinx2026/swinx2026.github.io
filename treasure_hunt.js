// 设计网站大全 - 简洁版
// 包含81个不同类型的知名设计网站，支持随机抽取和分类浏览

// 精选国内设计网站数据
const designWebsites = [
  // 综合设计平台
  { name: "站酷", url: "https://www.zcool.com.cn/", category: "综合设计", description: "中国设计师交流社区和创意作品分享平台" },
  { name: "UI中国", url: "https://www.ui.cn/", category: "UI设计", description: "专业UI设计师交流和学习平台" },
  { name: "花瓣网", url: "https://huaban.com/", category: "灵感收集", description: "设计师灵感收集和素材分享平台" },
  { name: "设计达人", url: "https://www.shejidaren.com/", category: "综合设计", description: "设计师学习交流社区和资源分享平台" },
  { name: "掘金设计", url: "https://juejin.cn/design", category: "综合设计", description: "设计师技术交流和分享平台" },
  
  // UI/UX设计
  { name: "优设网", url: "https://www.uisdc.com/", category: "UI设计", description: "UI设计师学习交流平台和教程网站" },
  { name: "腾讯CDC", url: "https://cdc.tencent.com/", category: "UI设计", description: "腾讯用户研究与体验设计中心" },
  { name: "阿里设计", url: "https://www.ali.design/", category: "UI设计", description: "阿里巴巴设计体系和资源平台" },
  { name: "百度MEUX", url: "https://mux.baidu.com/", category: "UI设计", description: "百度移动生态用户体验设计中心" },
  { name: "字节跳动设计", url: "https://bytedance.design/", category: "UI设计", description: "字节跳动设计体系和分享平台" },
  
  // 平面设计
  { name: "红动中国", url: "https://www.redocn.com/", category: "平面设计", description: "中国专业设计网站和素材下载平台" },
  { name: "设计癖", url: "https://www.shejipi.com/", category: "平面设计", description: "设计资讯和作品展示平台" },
  { name: "Canva中国", url: "https://www.canva.cn/", category: "平面设计", description: "在线平面设计工具和模板" },
  
  // 素材下载
  { name: "千图网", url: "https://www.58pic.com/", category: "素材下载", description: "海量设计素材和模板下载平台" },
  { name: "包图网", url: "https://ibaotu.com/", category: "素材下载", description: "专业模板和创意设计素材平台" },
  { name: "昵图网", url: "https://www.nipic.com/", category: "素材下载", description: "原创设计素材和图片分享平台" },
  { name: "千库网", url: "https://www.588ku.com/", category: "素材下载", description: "国内领先的设计素材下载平台" },
  
  // 图片素材
  { name: "摄图网", url: "https://699pic.com/", category: "图片素材", description: "高质量图片和设计素材平台" },
  { name: "视觉中国", url: "https://www.vcg.com/", category: "图片素材", description: "全球知名的视觉素材提供商" },
  { name: "图虫创意", url: "https://stock.tuchong.com/", category: "图片素材", description: "专业图片和设计素材交易平台" },
  
  // 插画设计
  { name: "涂鸦王国", url: "https://www.gracg.com/", category: "插画设计", description: "中国专业插画师作品展示平台" },
  { name: "插画师", url: "https://www.chahua.org/", category: "插画设计", description: "插画师交流和作品展示社区" },
  { name: "米画师", url: "https://www.mihuashi.com/", category: "插画设计", description: "插画师约稿和作品展示平台" },
  
  // 3D设计
  { name: "溜溜自学网", url: "https://www.3d66.com/", category: "3D设计", description: "3D模型和素材下载平台" },
  { name: "CG模型网", url: "https://www.cgmodel.com/", category: "3D设计", description: "专业CG模型和素材下载平台" },
  { name: "C4D中国", url: "https://www.c4dcn.com/", category: "3D设计", description: "CINEMA 4D中文学习社区" },
  
  // 网页设计
  { name: "前端开发者社区", url: "https://segmentfault.com/", category: "网页设计", description: "前端开发和网页设计社区" },
  { name: "MDN Web Docs 中文", url: "https://developer.mozilla.org/zh-CN/", category: "网页设计", description: "权威的Web技术文档平台" },
  { name: "蓝色理想", url: "https://www.blueidea.com/", category: "网页设计", description: "网页设计和前端开发社区" },
  
  // 动效设计
  { name: "新片场学院", url: "https://www.xinpianchang.com/academy", category: "动效设计", description: "MG动画和视频制作学习平台" },
  { name: "CG帮", url: "https://www.cgboom.com/", category: "动效设计", description: "专业CG动效学习和资源分享平台" },
  { name: "AE学习网", url: "https://www.aemac.cn/", category: "动效设计", description: "After Effects学习和资源平台" },
  
  // 字体设计
  { name: "站酷字体", url: "https://www.zcool.com.cn/special/zcoolfonts/", category: "字体设计", description: "站酷出品的原创中文字体" },
  { name: "方正字库", url: "http://www.foundertype.com/", category: "专业字库", description: "方正集团专业中文字库" },
  { name: "汉仪字库", url: "https://www.hanyi.com.cn/", category: "专业字库", description: "汉仪股份专业中文字库" },
  { name: "造字工房", url: "http://www.makefont.com/", category: "专业字库", description: "国内知名字体设计公司" },
  
  // 在线设计
  { name: "创客贴", url: "https://www.chuangkit.com/", category: "在线设计", description: "简单易用的在线设计工具" },
  { name: "懒设计", url: "https://www.logosc.cn/", category: "在线设计", description: "快速设计Logo和海报的工具" },
  { name: "Canva", url: "https://www.canva.cn/", category: "在线设计", description: "全球知名的在线设计平台" },
  { name: "稿定设计", url: "https://www.gaoding.com/", category: "在线设计", description: "专业在线设计和模板平台" },
  
  // 设计协作
  { name: "蓝湖", url: "https://lanhuapp.com/", category: "设计协作", description: "高效的产品设计协作平台" },
  { name: "即时设计", url: "https://js.design/", category: "设计协作", description: "国内优秀的在线设计协作平台" },
  { name: "MasterGo", url: "https://www.mastergo.com/", category: "设计协作", description: "国内优秀的在线设计协作平台" },
  
  // 原型设计
  { name: "墨刀", url: "https://modao.cc/", category: "原型设计", description: "专业UI原型设计和协作工具" },
  { name: "Axure中文网", url: "https://www.axure.com.cn/", category: "原型设计", description: "Axure原型设计工具和教程" },
  { name: "Pixso", url: "https://pixso.cn/", category: "原型设计", description: "集设计、协作、交付于一体的在线设计工具" },
  
  // UI组件
  { name: "Ant Design", url: "https://ant.design/", category: "UI组件", description: "国内优秀的企业级UI设计语言" },
  { name: "Naive UI", url: "https://www.naiveui.com/", category: "UI组件", description: "基于Vue 3的现代UI组件库" },
  { name: "Vant UI", url: "https://vant-contrib.gitee.io/vant/#/zh-CN/", category: "UI组件", description: "轻量级移动端UI组件库" },
  
  // 图标库
  { name: "IconFont", url: "https://www.iconfont.cn/", category: "图标库", description: "阿里巴巴矢量图标库" },
  { name: "Easy Icon", url: "https://www.easyicon.net/", category: "图标库", description: "中文图标搜索和下载平台" },
  { name: "IconPark", url: "https://iconpark.oceanengine.com/", category: "图标库", description: "字节跳动开源图标库" }
];

// 分类列表
const categories = [
  "全部", "综合设计", "UI设计", "UX设计", "平面设计", "插画设计", "3D设计", 
  "网页设计", "动效设计", "字体设计", "在线设计", "设计协作", 
  "灵感收集", "素材下载", "图片素材", "专业字库", "原型设计", "UI组件", "图标库"
];

// 初始化设计网站大全功能
function initTreasureHunt() {
  const treasureHuntCard = document.getElementById('treasure-hunt-card');
  
  if (!treasureHuntCard) {
    console.error('未找到设计网站大全卡片元素');
    return;
  }
  
  treasureHuntCard.addEventListener('click', function(e) {
    e.preventDefault();
    showDesignWebsitesModal();
  });
}

// 显示设计网站大全弹窗
function showDesignWebsitesModal() {
  // 创建遮罩层
  const overlay = document.createElement('div');
  overlay.className = 'design-websites-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100000;
  `;
  
  // 创建弹窗容器
  const modal = document.createElement('div');
  modal.className = 'design-websites-modal';
  modal.style.cssText = `
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    width: 95%;
    max-width: 800px;
    max-height: 90vh;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 1001;
    animation: modalAppear 0.3s ease-out;
  `;
  
  // 创建弹窗标题
  const title = document.createElement('h2');
  title.textContent = '设计网站大全';
  title.style.cssText = `
    margin: 0 0 20px 0;
    color: #333;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  `;
  
  // 创建搜索和分类区域
  const searchArea = document.createElement('div');
  searchArea.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
  `;
  
  // 创建搜索框
  const searchBox = document.createElement('div');
  searchBox.style.cssText = `
    display: flex;
    gap: 10px;
  `;
  
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = '搜索网站...';
  searchInput.style.cssText = `
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
  `;
  
  const searchBtn = document.createElement('button');
  searchBtn.textContent = '搜索';
  searchBtn.style.cssText = `
    padding: 0 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
  `;
  
  searchBox.appendChild(searchInput);
  searchBox.appendChild(searchBtn);
  
  // 创建分类选择区域
  const categoryArea = document.createElement('div');
  categoryArea.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `;
  
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
    
    categoryBtn.addEventListener('click', function() {
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
      
      // 筛选并显示网站
      filterWebsites(this.dataset.category, searchInput.value);
    });
    
    // 默认选中"全部"分类
    if (category === '全部') {
      categoryBtn.classList.add('active');
      categoryBtn.style.backgroundColor = '#4CAF50';
      categoryBtn.style.color = 'white';
    }
    
    categoryArea.appendChild(categoryBtn);
  });
  
  searchArea.appendChild(searchBox);
  searchArea.appendChild(categoryArea);
  
  // 创建网站列表容器
  const websiteList = document.createElement('div');
  websiteList.id = 'design-website-list';
  websiteList.style.cssText = `
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  
  // 初始显示所有网站
  displayWebsites(designWebsites);
  
  // 创建关闭按钮
  const closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.style.cssText = `
    background-color: #d32f2f;
    color: white;
    border: none;
    padding: 5px 12px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all 0.3s ease;
    z-index: 1002;
  `;
  
  closeButton.addEventListener('click', function() {
    overlay.remove();
  });
  
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
  
  // 添加搜索功能
  searchBtn.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    filterWebsites(activeCategory, searchTerm);
  });
  
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const activeCategory = document.querySelector('.category-btn.active').dataset.category;
      filterWebsites(activeCategory, searchTerm);
    }
  });
  
  // 组装弹窗
  modal.appendChild(title);
  modal.appendChild(searchArea);
  modal.appendChild(websiteList);
  modal.appendChild(closeButton);
  overlay.appendChild(modal);
  
  // 添加到页面
  document.body.appendChild(overlay);
  
  // 显示网站列表
  function displayWebsites(websites) {
    websiteList.innerHTML = '';
    
    if (websites.length === 0) {
      const noResult = document.createElement('div');
      noResult.textContent = '未找到相关网站';
      noResult.style.cssText = `
        text-align: center;
        color: #999;
        padding: 40px 0;
        font-size: 16px;
      `;
      websiteList.appendChild(noResult);
      return;
    }
    
    websites.forEach(website => {
      const websiteItem = createWebsiteItem(website);
      websiteList.appendChild(websiteItem);
    });
  }
  
  // 筛选网站
  function filterWebsites(category, searchTerm) {
    let filteredWebsites = designWebsites;
    
    // 按分类筛选
    if (category !== '全部') {
      filteredWebsites = filteredWebsites.filter(website => 
        website.category === category
      );
    }
    
    // 按搜索词筛选
    if (searchTerm) {
      filteredWebsites = filteredWebsites.filter(website => 
        website.name.toLowerCase().includes(searchTerm) ||
        website.description.toLowerCase().includes(searchTerm)
      );
    }
    
    displayWebsites(filteredWebsites);
  }
  
  // 创建网站项
  function createWebsiteItem(website) {
    const item = document.createElement('div');
    item.style.cssText = `
      background-color: #f9f9f9;
      border-radius: 8px;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.2s ease;
    `;
    
    item.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#f0f0f0';
    });
    
    item.addEventListener('mouseout', function() {
      this.style.backgroundColor = '#f9f9f9';
    });
    
    const info = document.createElement('div');
    info.style.cssText = `
      flex: 1;
    `;
    
    const name = document.createElement('div');
    name.textContent = website.name;
    name.style.cssText = `
      font-size: 16px;
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
    `;
    
    const meta = document.createElement('div');
    meta.style.cssText = `
      display: flex;
      align-items: center;
      gap: 10px;
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
      flex: 1;
    `;
    
    const link = document.createElement('a');
    link.href = website.url;
    link.target = '_blank';
    link.textContent = '访问';
    link.style.cssText = `
      background-color: #4CAF50;
      color: white;
      padding: 6px 12px;
      border-radius: 6px;
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      transition: all 0.2s ease;
    `;
    
    link.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#45a049';
    });
    
    link.addEventListener('mouseout', function() {
      this.style.backgroundColor = '#4CAF50';
    });
    
    meta.appendChild(category);
    meta.appendChild(description);
    info.appendChild(name);
    info.appendChild(meta);
    item.appendChild(info);
    item.appendChild(link);
    
    return item;
  }
}

// DOM加载完成后初始化
function initializeTreasureHunt() {
  const treasureHuntCard = document.getElementById('treasure-hunt-card');
  
  if (!treasureHuntCard) {
    console.error('未找到设计网站大全卡片元素');
    return;
  }
  
  // 移除所有已存在的事件监听器
  const newCard = treasureHuntCard.cloneNode(true);
  treasureHuntCard.parentNode.replaceChild(newCard, treasureHuntCard);
  
  // 重新绑定点击事件
  newCard.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    showDesignWebsitesModal();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTreasureHunt);
} else {
  setTimeout(initializeTreasureHunt, 100);
}

// 暴露给全局
window.initTreasureHunt = initializeTreasureHunt;