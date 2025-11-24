// 天材地宝-寻宝
// 卡牌数据：49张不同等级的卡牌
const treasureCards = [
  // 传说级（5星）1-5张
  { id: 1, name: "混沌原石", level: "传说", stars: 5, description: "开天辟地时形成的混沌原石，蕴含着原始的天地灵气，是炼制至宝的无上材料。" },
  { id: 2, name: "盘古神木", level: "传说", stars: 5, description: "盘古大神开天辟地时留下的神树残枝，木质坚硬无比，可打造绝世法器。" },
  { id: 3, name: "太极灵晶", level: "传说", stars: 5, description: "天地阴阳交融形成的灵晶，可平衡修士体内的五行之力，突破境界的圣物。" },
  { id: 4, name: "女娲灵玉", level: "传说", stars: 5, description: "女娲娘娘补天余下的灵玉碎片，蕴含着生命本源，可起死回生。" },
  { id: 5, name: "诛仙灵藤", level: "传说", stars: 5, description: "上古诛仙阵中生长的灵藤，具有驱邪避凶的奇效，可炼制捆仙索。" },
  // 史诗级（4星）6-15张
  { id: 6, name: "九转回魂草", level: "史诗", stars: 4, description: "生长在极寒之地的神草，九叶九节，可活死人肉白骨，是修仙界传说中的圣药。" },
  { id: 7, name: "火凤灵羽", level: "史诗", stars: 4, description: "火凤凰脱落的尾羽，蕴含着至阳之火，可炼制飞行法器或火属性法宝。" },
  { id: 8, name: "玄铁精矿", level: "史诗", stars: 4, description: "天外陨石坠落后形成的精矿，质地坚硬，是打造神兵利器的上等材料。" },
  { id: 9, name: "鲛人珍珠", level: "史诗", stars: 4, description: "鲛人流下的眼泪凝固而成的珍珠，具有明目清心的功效，可炼制法宝。" },
  { id: 10, name: "万年冰髓", level: "史诗", stars: 4, description: "极北之地冰川下的冰髓，可冰清玉洁，镇定心神，是修炼冰系法术的至宝。" },
  { id: 11, name: "九天灵花", level: "史诗", stars: 4, description: "生长在九天之上的灵花，香气可让人神清气爽，提升修炼速度。" },
  { id: 12, name: "紫金葫芦藤", level: "史诗", stars: 4, description: "结出紫金葫芦的神藤，藤条坚韧无比，可炼制捆仙索。" },
  { id: 13, name: "玉净灵泉", level: "史诗", stars: 4, description: "观音菩萨玉净瓶中的灵泉，可滋润万物，使枯木逢春。" },
  { id: 14, name: "芭蕉灵叶", level: "史诗", stars: 4, description: "铁扇公主芭蕉扇上的一片叶子，可扇出微风，避暑降温。" },
  { id: 15, name: "缚妖灵藤", level: "史诗", stars: 4, description: "生长在妖界边缘的灵藤，可捆绑世间一切妖魔鬼怪。" },
  // 稀有级（3星）16-30张
  { id: 16, name: "千年灵芝", level: "稀有", stars: 3, description: "生长在深山老林的千年灵芝，可增长百年修为，是炼制丹药的上等材料。" },
  { id: 17, name: "玄冰晶核", level: "稀有", stars: 3, description: "蕴含着玄冰之力的晶体核心，可用来修炼冰系法术，提升法术威力。" },
  { id: 18, name: "青钢矿石", level: "稀有", stars: 3, description: "用天外陨石打造的矿石，锋利无比，可打造宝剑或法器。" },
  { id: 19, name: "炼气灵草", level: "稀有", stars: 3, description: "可帮助炼气期修士提升修为的灵草，是炼制炼气丹的主要材料。" },
  { id: 20, name: "灵犀独角", level: "稀有", stars: 3, description: "灵犀的独角，可增强修士的感知力，帮助修士感悟天地大道。" },
  { id: 21, name: "火灵仙果", level: "稀有", stars: 3, description: "蕴含着火灵之力的果实，可用来修炼火系法术，提升火属性亲和力。" },
  { id: 22, name: "水灵珠核", level: "稀有", stars: 3, description: "蕴含着水灵之力的珠子核心，可用来修炼水系法术，提升水属性亲和力。" },
  { id: 23, name: "土灵根苗", level: "稀有", stars: 3, description: "拥有土属性灵根的幼苗，可帮助修士感悟土系法术，提升修炼速度。" },
  { id: 24, name: "金灵砂矿", level: "稀有", stars: 3, description: "蕴含着金灵之力的砂子矿石，可用来炼制金系法器，提升法器威力。" },
  { id: 25, name: "木灵仙叶", level: "稀有", stars: 3, description: "蕴含着木灵之力的仙叶，可用来修炼木系法术，提升木属性亲和力。" },
  { id: 26, name: "风灵羽毛", level: "稀有", stars: 3, description: "风精灵脱落的羽毛，可用来修炼风系法术，提升风属性亲和力。" },
  { id: 27, name: "雷灵珠核", level: "稀有", stars: 3, description: "蕴含着雷灵之力的珠子核心，可用来修炼雷系法术，提升雷属性亲和力。" },
  { id: 28, name: "空间灵石", level: "稀有", stars: 3, description: "蕴含着空间之力的灵石，可用来炼制储物袋或空间法器。" },
  { id: 29, name: "遁地灵土", level: "稀有", stars: 3, description: "可帮助修士遁地而行的灵土，可炼制遁地符或土系法器。" },
  { id: 30, name: "隐身灵草", level: "稀有", stars: 3, description: "可让人隐身的灵草，可炼制隐身符或伪装法器。" },
  // 佳品级（2星）31-40张
  { id: 31, name: "灵气草", level: "佳品", stars: 2, description: "蕴含着微弱灵气的草，可用来炼制基础丹药或作为灵宠的食物。" },
  { id: 32, name: "炼气草根", level: "佳品", stars: 2, description: "炼气灵草的根部，效果比炼气灵草差，可帮助炼气期修士提升少量修为。" },
  { id: 33, name: "普通铁矿", level: "佳品", stars: 2, description: "凡人使用的普通铁矿，可打造菜刀、锄头之类的工具。" },
  { id: 34, name: "灵藤藤蔓", level: "佳品", stars: 2, description: "蕴含着微弱灵气的藤蔓，可用于捆绑物品或制作简单的工具。" },
  { id: 35, name: "储物竹篮", level: "佳品", stars: 2, description: "用灵竹编织的竹篮，可储存一些小物品，比普通竹篮更结实。" },
  { id: 36, name: "灵泉泉水", level: "佳品", stars: 2, description: "蕴含着微弱灵气的泉水，可用来修炼或泡茶，比普通泉水更有营养。" },
  { id: 37, name: "普通灵石", level: "佳品", stars: 2, description: "蕴含着少量灵气的石头，可用来修炼或交易。" },
  { id: 38, name: "灵竹宣纸", level: "佳品", stars: 2, description: "用千年灵竹制成的宣纸，是炼制符箓的上等原材料。" },
  { id: 39, name: "天然朱砂", level: "佳品", stars: 2, description: "天然形成的朱砂矿石，可用来绘制符箓或作为颜料。" },
  { id: 40, name: "香烛木材", level: "佳品", stars: 2, description: "用来制作香烛的木材，燃烧时会散发出淡淡的香气。" },
  // 普通级（1星）41-49张
  { id: 41, name: "罗盘磁石", level: "普通", stars: 1, description: "罗盘上使用的磁石，可用来寻找灵气或辨别方向。" },
  { id: 42, name: "剑穗灵草", level: "普通", stars: 1, description: "用来制作剑穗的灵草，可增加剑的灵气。" },
  { id: 43, name: "狼妖之血", level: "普通", stars: 1, description: "取自深山狼妖的鲜血，蕴含着微弱的妖力，是炼制丹药的原材料。" },
  { id: 44, name: "熊罴之皮", level: "普通", stars: 1, description: "黑熊精的皮毛，质地坚韧，是制作防具的上等材料。" },
  { id: 45, name: "虎豹之骨", level: "普通", stars: 1, description: "猛虎与猎豹的骨骼，可用来炼制法器或制作箭头。" },
  { id: 46, name: "狐妖之尾", level: "普通", stars: 1, description: "狐狸精的尾巴，蕴含着魅惑之力，是炼制迷魂药的材料。" },
  { id: 47, name: "鹿妖之角", level: "普通", stars: 1, description: "梅花鹿妖的鹿角，可用来炼制壮阳丹或制作装饰品。" },
  { id: 48, name: "鹰隼之爪", level: "普通", stars: 1, description: "雄鹰与猎隼的爪子，锋利无比，可用来制作武器或法器。" },
  { id: 49, name: "蟒妖之鳞", level: "普通", stars: 1, description: "巨蟒精的鳞片，坚硬如铁，是制作铠甲的原材料。" }
];

// 抽卡游戏类
class TreasureCardGame {
  constructor() {
    this.cards = treasureCards;
    this.dailyIncrement = 3;
    this.today = new Date().toISOString().split('T')[0];
    this.load寻宝机会();
  }
  
  // 加载寻宝机会和宝库
  load寻宝机会() {
    const saved = localStorage.getItem('treasureCardGame');
    if (saved) {
      const data = JSON.parse(saved);
      // 保留宝库内容
      this.cardBag = data.cardBag || [];
      if (data.today === this.today) {
        this.availableDraws = data.availableDraws || 0;
      } else {
        // 日期变化，增加今日的寻宝机会
        this.availableDraws = (data.availableDraws || 0) + this.dailyIncrement;
      }
    } else {
      this.availableDraws = this.dailyIncrement;
      this.cardBag = [];
    }
  }
  
  // 保存寻宝机会和宝库
  save寻宝机会() {
    const data = {
      today: this.today,
      availableDraws: this.availableDraws,
      cardBag: this.cardBag
    };
    localStorage.setItem('treasureCardGame', JSON.stringify(data));
  }
  
  // 检查是否可以抽卡
  can抽卡() {
    return this.availableDraws > 0;
  }
  
  // 抽卡
  抽卡() {
    if (!this.can抽卡()) {
      return null;
    }
    
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    const card = this.cards[randomIndex];
    
    this.availableDraws--;
    this.cardBag.push(card);
    this.save寻宝机会();
    
    return card;
  }
  
  // 获取剩余寻宝机会
  get剩余寻宝机会() {
    return this.availableDraws;
  }
  
  // 获取今日已寻宝机会
  get今日已寻宝机会() {
    // 这个方法可能不再需要，因为机制已经改变
    return 0;
  }
  
  // 获取宝库（合并重复卡牌并添加数量属性）
  getCardBag() {
    const cardCounts = {};
    const levelPriority = {
      "传说": 4,
      "史诗": 3,
      "稀有": 2,
      "佳品": 1.5,
      "普通": 1
    };

    // 合并重复卡牌并统计数量
    for (const card of this.cardBag) {
      const key = `${card.id}-${card.name}`;
      if (cardCounts[key]) {
        cardCounts[key].count++;
      } else {
        cardCounts[key] = { ...card, count: 1 };
      }
    }

    // 转换为数组并排序
    return Object.values(cardCounts).sort((a, b) => levelPriority[b.level] - levelPriority[a.level]);
  }
  
  // 清空宝库
  clearCardBag() {
    this.cardBag = [];
    this.save寻宝机会();
  }
  
  // 增加寻宝机会
  addDrawCount(count) {
    this.availableDraws += count;
    this.save寻宝机会();
  }
}

// 初始化抽卡游戏
const cardGame = new TreasureCardGame();

// 显示抽卡窗口
function showCardGameModal() {
  // 创建模态窗口
  const modal = document.createElement('div');
  modal.className = 'card-game-modal';
  modal.innerHTML = `
    <div class="card-game-modal-content">
      <div class="card-game-header">
        <h2>天材地宝-寻宝</h2>
        <div class="寻宝机会">剩余寻宝机会：${cardGame.get剩余寻宝机会()} <button id="reset-card-count" class="reset-card-btn">增加机会</button>
        <button id="treasure-guide-btn" class="reset-card-btn">寻宝说明</button></div>
      
      </div>
      <div class="card-game-body">
        <div id="card-display" class="card-display">
          <div class="card-placeholder">点击下方按钮开始寻宝</div>
        </div>
      </div>
      <div class="card-game-footer">
        <button id="draw-card-btn" class="draw-card-btn">开始寻宝</button>
        <button id="card-bag-btn" class="card-bag-btn">查看宝库</button>
      </div>
      <button id="close-card-btn" class="close-card-btn">×</button>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.innerHTML = `
    .card-game-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100000;
      backdrop-filter: blur(5px);
    }
    
    .card-game-modal-content { background: white; border-radius: 20px; padding: 30px; width: 80%; max-width: 600px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); text-align: center; position: relative; animation: modalAppear 0.3s ease-out; }
    
    .card-game-header {
      margin-bottom: 30px;
    }
    
    .close-card-btn {
      background-color: #d32f2f;
      color: white;
      border: none;
      font-size: 24px;
      font-weight: bold;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      opacity: 1;
      z-index: 1001;
    }
    
    .close-card-btn:hover {
      background-color: #b71c1c;
      transform: scale(1.1);
      box-shadow: 0 3px 8px rgba(211, 47, 47, 0.5);
    }
    
    .card-game-header h2 {
      color: #8b4513;
      font-size: 2.5em;
      margin-bottom: 10px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .寻宝机会 {
      color: #8b4513;
      font-size: 1.2em;
      font-weight: bold;
    }
    
    .card-game-body {
      margin-bottom: 30px;
    }
    
    .card-display {
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
    }
    
    .card-placeholder {
      font-size: 1.5em;
      color: #8b4513;
      padding: 50px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    
    .card-shuffling {
      font-size: 1.8em;
      color: #8b4513;
      padding: 50px;
      background: linear-gradient(45deg, #ffe4b5, #ffd700, #ffb347, #ffd700);
      background-size: 300% 300%;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.7);
      animation: shuffle 1s infinite;
    }
    
    @keyframes shuffle {
      0% {
        background-position: 0% 50%;
        transform: scale(1) rotate(0deg);
      }
      25% {
        background-position: 100% 50%;
        transform: scale(1.05) rotate(2deg);
      }
      50% {
        background-position: 0% 50%;
        transform: scale(1) rotate(0deg);
      }
      75% {
        background-position: 100% 50%;
        transform: scale(1.05) rotate(-2deg);
      }
      100% {
        background-position: 0% 50%;
        transform: scale(1) rotate(0deg);
      }
    }
    
    .card { width: 200px; height: 280px; border-radius: 15px; padding: 15px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); display: flex; flex-direction: column; justify-content: center; align-items: center; transition: all 0.5s ease; }
    
    .card:hover {
      transform: scale(1.05) rotate(5deg);
    }
    
    .card-name { font-size: 1.2em; font-weight: bold; color: #fff; margin-bottom: 12px; text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); }
    
    .card-level {
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 15px;
      padding: 5px 15px;
      border-radius: 15px;
      color: white;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    
    .card-level.传说 { background: linear-gradient(135deg, #f97316, #ffc53d); box-shadow: 0 0 30px rgba(249, 115, 22, 0.8), 0 0 60px rgba(249, 115, 22, 0.4), 0 0 90px rgba(249, 115, 22, 0.2); animation: legendaryGlow 1.5s ease-in-out infinite alternate; }
    
    .card-level.史诗 { background: linear-gradient(135deg, #9d4edd, #c77dff); box-shadow: 0 0 30px rgba(157, 78, 221, 0.8), 0 0 60px rgba(157, 78, 221, 0.4); animation: epicGlow 1.5s ease-in-out infinite alternate; }
    
    .card-level.稀有 { background: linear-gradient(135deg, #4895ef, #7209b7); box-shadow: 0 0 25px rgba(72, 149, 239, 0.6); }
    
    .card-level.佳品 { background: linear-gradient(135deg, #10b981, #059669); box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
    
    .card-level.普通 { background: linear-gradient(135deg, #4a5568, #718096); box-shadow: 0 0 15px rgba(74, 85, 104, 0.4); }
    
    .card-description { font-size: 0.9em; color: rgba(255, 255, 255, 0.9); line-height: 1.5; text-align: center; margin-bottom: 12px; }
    
    .card-stars {
      font-size: 1.5em;
      margin-bottom: 12px;
    }
    
    .card.传说 .card-stars {
      color: #f97316;
      text-shadow: 0 0 10px rgba(249, 115, 22, 0.8);
    }
    
    .card.史诗 .card-stars {
      color: #9d4edd;
      text-shadow: 0 0 10px rgba(157, 78, 221, 0.8);
    }
    
    .card.稀有 .card-stars {
      color: #4895ef;
      text-shadow: 0 0 10px rgba(72, 149, 239, 0.8);
    }
    
    .card.佳品 .card-stars {
      color: #10b981;
      text-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
    }
    
    .card.普通 .card-stars {
      color: #4a5568;
      text-shadow: 0 0 10px rgba(74, 85, 104, 0.8);
    }
    
    .card-game-footer {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    
    .draw-card-btn, .close-card-btn {
      font-size: 1.2em;
      font-weight: bold;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .draw-card-btn {
      padding: 15px 40px;
      border-radius: 50px;
    }
    
    .draw-card-btn { background: linear-gradient(135deg, #519872, #3b5249); color: white; }
    
    .draw-card-btn:hover:not(:disabled) {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(72, 187, 120, 0.4);
    }
    
    .reset-card-btn { background: linear-gradient(135deg, #b87333, #8b4513); color: white; border: none; padding: 5px 15px; border-radius: 20px; font-size: 0.9em; cursor: pointer; margin-left: 10px; transition: all 0.3s ease; }
    
    .reset-card-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(245, 158, 11, 0.4);
    }
    
    .card-bag-btn { background: linear-gradient(135deg, #4a5568, #2d3748); color: white; border: none; padding: 15px 40px; font-size: 1.2em; font-weight: bold; border-radius: 50px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); }
    
    .card-bag-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
    }
    
    .draw-card-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
    
    .close-card-btn {
      background: linear-gradient(135deg, #8b5a2b, #654321);
      color: white;
      padding: 0;
      font-size: 1.5em;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    
    .close-card-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(245, 101, 101, 0.4);
    }

    .card.传说 { background: linear-gradient(135deg, #ffecb3, #f97316); box-shadow: 0 0 40px rgba(249, 115, 22, 0.6), 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 80px rgba(249, 115, 22, 0.3); animation: legendaryCardGlow 1.5s ease-in-out infinite alternate; }

.card.史诗 { background: linear-gradient(135deg, #e9d5ff, #9d4edd); box-shadow: 0 0 40px rgba(157, 78, 221, 0.6), 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 80px rgba(157, 78, 221, 0.3); animation: epicCardGlow 1.5s ease-in-out infinite alternate; }

.card.稀有 { background: linear-gradient(135deg, #d3e4fd, #4895ef); box-shadow: 0 0 30px rgba(72, 149, 239, 0.5), 0 10px 30px rgba(0, 0, 0, 0.3); }

.card.佳品 { background: linear-gradient(135deg, #d1fae5, #10b981); box-shadow: 0 0 30px rgba(16, 185, 129, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3); }

.card.普通 { background: linear-gradient(135deg, #f3f4f6, #4a5568); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }

/* 传说卡牌光芒动画 */
    @keyframes legendaryGlow {
      0% {
        box-shadow: 0 0 15px rgba(249, 115, 22, 0.8), 0 0 30px rgba(249, 115, 22, 0.4), 0 0 45px rgba(249, 115, 22, 0.2);
      }
      100% {
        box-shadow: 0 0 20px rgba(249, 115, 22, 1), 0 0 40px rgba(249, 115, 22, 0.6), 0 0 60px rgba(249, 115, 22, 0.4);
      }
    }

    /* 传说卡牌背景光芒动画 */
@keyframes legendaryCardGlow {
  0% {
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.6), 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 40px rgba(249, 115, 22, 0.3);
  }
  100% {
    box-shadow: 0 0 30px rgba(249, 115, 22, 0.8), 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 60px rgba(249, 115, 22, 0.5);
  }
}

/* 史诗卡牌背景光芒动画 */
@keyframes epicCardGlow {
  0% {
    box-shadow: 0 0 20px rgba(157, 78, 221, 0.6), 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 40px rgba(157, 78, 221, 0.3);
  }
  100% {
    box-shadow: 0 0 30px rgba(157, 78, 221, 0.8), 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 60px rgba(157, 78, 221, 0.5);
  }
}

      @keyframes epicGlow {
      0% {
        box-shadow: 0 0 15px rgba(157, 78, 221, 0.8), 0 0 30px rgba(157, 78, 221, 0.4);
      }
      100% {
        box-shadow: 0 0 20px rgba(157, 78, 221, 1), 0 0 40px rgba(157, 78, 221, 0.6);
      }
    }
    

  `;
  
  document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // 更新抽卡按钮状态
    function updateDrawButton() {
      // 确保drawBtn在作用域内
      const drawBtn = modal.querySelector('#draw-card-btn');
      if (cardGame.can抽卡()) {
        drawBtn.disabled = false;
        drawBtn.innerHTML = `开始寻宝 (${cardGame.get剩余寻宝机会()})`;
      } else {
        drawBtn.disabled = true;
        drawBtn.innerHTML = `寻宝机会已用完`;
      }
    }
    
    // 添加点击外部关闭功能
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
        style.remove();
      }
    });
    
    // 添加事件监听
    const drawBtn = modal.querySelector('#draw-card-btn');
    const closeBtn = modal.querySelector('#close-card-btn');
    const cardDisplay = modal.querySelector('#card-display');
  
  // 更新按钮状态
  updateDrawButton();
  
  // 抽卡按钮点击事件
  drawBtn.addEventListener('click', () => {
    const card = cardGame.抽卡();
    if (card) {
      // 显示抽卡动画
      cardDisplay.innerHTML = '<div class="card-shuffling">正在寻宝...</div>';
      
      // 添加洗牌动画效果
      const shuffleInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * cardGame.cards.length);
        const randomCard = cardGame.cards[randomIndex];
        cardDisplay.innerHTML = `
          <div class="card ${randomCard.level}" style="transform: scale(0.8) rotate(${Math.random() * 10 - 5}deg);">
            <div class="card-name">${randomCard.name}</div>
            <div class="card-level ${randomCard.level}">${randomCard.level}</div>
            <div class="card-description">${randomCard.description}</div>
          </div>
        `;
      }, 100);
      
      // 2秒后停止动画并显示最终卡牌
      setTimeout(() => {
        clearInterval(shuffleInterval);
        // 显示抽到的卡牌
        // 生成星级HTML
        const starsHTML = '★'.repeat(card.stars);
        cardDisplay.innerHTML = `
          <div class="card ${card.level}">
            <div class="card-name">${card.name}</div>
            <div class="card-level ${card.level}">${card.level}</div>
            <div class="card-stars">${starsHTML}</div>
            <div class="card-description">${card.description}</div>
          </div>
        `;
        
        // 更新按钮状态
        updateDrawButton();
        // 更新剩余机会显示
        const countDisplay = modal.querySelector('.寻宝机会');
        countDisplay.innerHTML = `剩余寻宝机会：${cardGame.get剩余寻宝机会()} <button id="reset-card-count" class="reset-card-btn">增加机会</button><button id="treasure-guide-btn" class="reset-card-btn">寻宝说明</button>`;
      }, 1500);
    }
  });
  
  // 关闭按钮点击事件
  closeBtn.addEventListener('click', () => {
    modal.remove();
  });
  
  // 增加机会按钮点击事件 - 使用事件委托避免按钮替换后失效
  modal.addEventListener('click', (e) => {
    if (e.target.id === 'reset-card-count') {
      cardGame.addDrawCount(3);
      updateDrawButton();
      // 更新剩余机会显示
      const countDisplay = modal.querySelector('.寻宝机会');
      countDisplay.innerHTML = `剩余寻宝机会：${cardGame.get剩余寻宝机会()} <button id="reset-card-count" class="reset-card-btn">增加机会</button><button id="treasure-guide-btn" class="reset-card-btn">寻宝说明</button>`;
    } else if (e.target.id === 'treasure-guide-btn') {
      alert('1、每日可自动获得3次寻宝机会 2、通过其它途径可获得寻宝机会，如“卜上一卦”、“感悟天道”、“功法修炼”等');
    }
  });
  
  // 宝库按钮点击事件
  const cardBagBtn = modal.querySelector('#card-bag-btn');
  cardBagBtn.addEventListener('click', () => {
    showCardBagModal();
  });
  
  // 显示宝库窗口
  function showCardBagModal() {
    // 创建宝库窗口
    const cardBagModal = document.createElement('div');
    cardBagModal.className = 'card-bag-modal';
    cardBagModal.innerHTML = `
      <div class="card-bag-modal-content">
        <div class="card-bag-header">
          <h2>我的宝库</h2>
          <div class="card-bag-header-buttons">
            <button id="clear-card-bag-btn" class="clear-card-bag-btn">清空宝库</button>
            <button id="close-card-bag-btn" class="close-card-bag-btn">关闭</button>
          </div>
        </div>
        <div class="card-bag-body">
          ${cardGame.getCardBag().length === 0 ? '<div class="no-cards">宝库是空的，快去寻宝吧！</div>' : ''}
          <div class="card-bag-grid">
            ${cardGame.getCardBag().map(card => `
              <div class="card-mini ${card.level}">
                ${card.count > 1 ? `<div class="card-count">${card.count}</div>` : ''}
                <div class="card-name">${card.name}</div>
                <div class="card-level ${card.level}">${card.level}</div>
                <div class="card-stars">${'★'.repeat(card.stars)}</div>
                <div class="card-description">${card.description}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    
    // 添加宝库样式
    const cardBagStyle = document.createElement('style');
    cardBagStyle.innerHTML = `
      .card-bag-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100000;
      }
      
      .card-bag-modal-content {
        background: white;
        border-radius: 20px;
        padding: 30px;
        width: 90%;
        max-width: 800px;
        max-height: 80vh;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        overflow-y: auto;
      }
      
      .card-bag-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
      }
      
      .card-bag-header-buttons {
        display: flex;
        gap: 10px;
      }
      
      .clear-card-bag-btn {
        background-color: #ff9800;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 12px;
        cursor: pointer;
        font-size: 14px;
        box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);
        transition: all 0.3s ease;
      }
      
      .clear-card-bag-btn:hover {
        background-color: #f57c00;
        box-shadow: 0 4px 15px rgba(255, 152, 0, 0.5);
        transform: translateY(-2px);
      }
      
      .clear-card-bag-btn:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);
      }
      
      .card-bag-header h2 {
        color: #8b4513;
        font-size: 2.5em;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        margin: 0;
      }
      
      .close-card-bag-btn {
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: white;
        border: none;
        padding: 10px 25px;
        font-size: 1.2em;
        font-weight: bold;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
      
      .close-card-bag-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
      }
      
      .card-bag-body {
        margin-bottom: 30px;
      }
      
      .no-cards {
        text-align: center;
        font-size: 1.5em;
        color: #8b4513;
        padding: 50px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        margin-bottom: 30px;
      }
      
      .card-bag-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 20px;
      }
      
      .card-mini {
        width: 100%;
        border-radius: 15px;
        padding: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
      }
      
      .card-mini {
        position: relative;
      }

      .card-count {
        position: absolute;
        top: 5px;
        right: 5px;
        color: white;
        font-size: 14px;
        font-weight: bold;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        z-index: 1;
      }

      /* 不同品级卡牌数量图标的颜色 */
      .card-mini.传说 .card-count {
        background-color: rgba(249, 115, 22, 0.8);
      }

      .card-mini.史诗 .card-count {
        background-color: rgba(157, 78, 221, 0.8);
      }

      .card-mini.稀有 .card-count {
        background-color: rgba(72, 149, 239, 0.8);
      }

      .card-mini.佳品 .card-count {
        background-color: rgba(16, 185, 129, 0.8);
      }

      .card-mini.普通 .card-count {
        background-color: rgba(74, 85, 104, 0.8);
      }

      .card-mini:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      }
      
      /* 小型传说卡牌样式 */
      .card-mini.传说 {
        background: linear-gradient(135deg, #ffecb3, #f97316);
        animation: legendaryCardGlow 2s infinite alternate;
      }
      
      /* 小型史诗卡牌样式 */
      .card-mini.史诗 {
        background: linear-gradient(135deg, #e9d5ff, #9d4edd);
        animation: epicCardGlow 2s infinite alternate;
      }
      
      /* 小型稀有卡牌样式 */
      .card-mini.稀有 {
        background: linear-gradient(135deg, #d3e4fd, #4895ef);
      }
      
      /* 小型佳品卡牌样式 */
      .card-mini.佳品 {
        background: linear-gradient(135deg, #d1fae5, #10b981);
      }
      
      /* 小型普通卡牌样式 */
      .card-mini.普通 {
        background: linear-gradient(135deg, #f3f4f6, #4a5568);
      }
      
      /* 调整不同等级小型卡牌的文字颜色 */
      .card-mini .card-name {
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      }
      
      .card-mini.传说 .card-name,
      .card-mini.史诗 .card-name,
      .card-mini.稀有 .card-name {
        color: rgba(255, 255, 255, 0.95);
      }
      
      .card-mini.普通 .card-name {
        color: rgba(255, 255, 255, 0.95);
      }
      
      .card-mini .card-level {
        font-size: 1em;
        font-weight: bold;
        margin-bottom: 10px;
        padding: 3px 12px;
        border-radius: 12px;
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      .card-mini .card-stars {
        font-size: 1em;
        margin-bottom: 8px;
      }
      
      .card-mini.传说 .card-stars {
        color: #f97316;
      }
      
      .card-mini.史诗 .card-stars {
        color: #9d4edd;
      }
      
      .card-mini.稀有 .card-stars {
        color: #4895ef;
      }
      
      .card-mini.佳品 .card-stars {
        color: #10b981;
      }
      
      .card-mini.普通 .card-stars {
        color: #4a5568;
      }
      
      .card-mini .card-description {
        font-size: 0.9em;
        line-height: 1.4;
        text-align: center;
        margin-bottom: 10px;
      }
      
      .card-mini.传说 .card-description,
      .card-mini.史诗 .card-description,
      .card-mini.稀有 .card-description {
        color: rgba(255, 255, 255, 0.85);
      }
      
      .card-mini.普通 .card-description {
        color: #4a5568;
      }
      
      /* 滚动条样式 */
      .card-bag-modal-content::-webkit-scrollbar {
        width: 8px;
      }
      
      .card-bag-modal-content::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
      }
      
      .card-bag-modal-content::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #8b4513, #654321);
        border-radius: 10px;
      }
      
      .card-bag-modal-content::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #654321, #8b4513);
      }
    `;
    
    // 添加到DOM
    document.head.appendChild(cardBagStyle);
    document.body.appendChild(cardBagModal);
    
    // 添加点击外部关闭功能
    cardBagModal.addEventListener('click', (e) => {
      if (e.target === cardBagModal) {
        cardBagModal.remove();
        cardBagStyle.remove();
      }
    });
    
    // 关闭宝库按钮点击事件
    const closeCardBagBtn = cardBagModal.querySelector('#close-card-bag-btn');
    closeCardBagBtn.addEventListener('click', () => {
      cardBagModal.remove();
      cardBagStyle.remove();
    });
    
    // 清空宝库按钮点击事件
    const clearCardBagBtn = cardBagModal.querySelector('#clear-card-bag-btn');
    clearCardBagBtn.addEventListener('click', () => {
      // 确认清空宝库
      if (confirm('确定要清空宝库吗？此操作不可撤销。')) {
        cardGame.clearCardBag();
        // 重新渲染宝库内容
        const cardBagBody = cardBagModal.querySelector('.card-bag-body');
        cardBagBody.innerHTML = `
          <div class="no-cards">宝库是空的，快去寻宝吧！</div>
          <div class="card-bag-grid"></div>
        `;
      }
    });
  }
  

}

// 将抽卡游戏暴露到全局
window.showCardGameModal = showCardGameModal;

// 初始化抽卡游戏
window.initTreasureCardGame = function() {
  const button = document.getElementById('heavenly-materials-card');
  if (button) {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // 阻止默认链接行为
      showCardGameModal(); // 显示抽卡游戏窗口
    });
  }
};