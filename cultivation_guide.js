// 修炼宝典 - 答案之书功能
// 包含49条随机答案，每次点击查看时返回一条随机提示

// 49条修炼提示答案
const cultivationAnswers = [
  "潜心修炼，必有精进。",
  "机遇将至，切勿错过。",
  "心无杂念，方能得悟。",
  "今日适合静修，不宜外出。",
  "贵人相助，事半功倍。",
  "小心谨慎，避免祸患。",
  "坚持信念，终得正果。",
  "积善之家，必有余庆。",
  "谦虚使人进步，骄傲使人落后。",
  "时机未到，耐心等待。",
  "心诚则灵，精诚所至。",
  "困难只是暂时的，光明就在前方。",
  "学习前人经验，少走弯路。",
  "择善而从，不善而改。",
  "保持平常心，不卑不亢。",
  "厚积薄发，水到渠成。",
  "欲速则不达，稳中求进。",
  "宁静致远，淡泊明志。",
  "与人为善，广结善缘。",
  "顺境不骄，逆境不馁。",
  "知足常乐，珍惜当下。",
  "三思而后行，谋定而后动。",
  "海纳百川，有容乃大。",
  "千里之行，始于足下。",
  "天时不如地利，地利不如人和。",
  "塞翁失马，焉知非福。",
  "言必信，行必果。",
  "满招损，谦受益。",
  "工欲善其事，必先利其器。",
  "学无止境，活到老学到老。",
  "己所不欲，勿施于人。",
  "知耻近乎勇。",
  "胜不骄，败不馁。",
  "三人行，必有我师焉。",
  "少壮不努力，老大徒伤悲。",
  "勿以恶小而为之，勿以善小而不为。",
  "精诚所至，金石为开。",
  "知易行难，知行合一。",
  "见贤思齐焉，见不贤而内自省也。",
  "有志者事竟成。",
  "宝剑锋从磨砺出，梅花香自苦寒来。",
  "不积跬步，无以至千里。",
  "天生我材必有用。",
  "长风破浪会有时，直挂云帆济沧海。",
  "天生我材必有用，千金散尽还复来。",
  "纸上得来终觉浅，绝知此事要躬行。",
  "业精于勤荒于嬉，行成于思毁于随。",
  "读书破万卷，下笔如有神。",
  "问渠那得清如许？为有源头活水来。"
];

// 初始化修炼宝典功能
function initCultivationGuide() {
  // 获取修炼宝典卡片元素
  const cultivationGuideCard = document.getElementById('cultivation-guide-card');
  
  if (!cultivationGuideCard) {
    console.error('未找到修炼宝典卡片元素');
    return;
  }
  
  // 点击卡片时显示弹窗
  cultivationGuideCard.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止默认链接行为
    showCultivationGuideModal();
  });
}

// 显示修炼宝典弹窗
function showCultivationGuideModal() {
  // 创建遮罩层
  const overlay = document.createElement('div');
  overlay.className = 'cultivation-guide-overlay';
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
  modal.className = 'cultivation-guide-modal';
  modal.style.cssText = `
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    animation: modalAppear 0.3s ease-out;
  `;
  
  // 创建弹窗标题
  const title = document.createElement('h2');
  title.textContent = '感悟天道 - 答案之书';
  title.style.cssText = `
    margin-top: 0;
    color: #333;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
  `;
  
  // 创建问题提示区域
  const questionArea = document.createElement('div');
  questionArea.id = 'cultivation-question-area';
  questionArea.style.cssText = `
    margin: 20px 0;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  
  // 创建提示文本
  const promptText = document.createElement('p');
  promptText.textContent = '请闭眼思考一个问题...';
  promptText.style.cssText = `
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
  `;
  
  // 创建查看按钮
  const checkButton = document.createElement('button');
  checkButton.textContent = '查看答案';
  checkButton.style.cssText = `
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  `;
  
  // 添加悬停效果
  checkButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#45a049';
  });
  
  checkButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#4CAF50';
  });
  
  // 创建答案显示区域（初始隐藏）
  const answerArea = document.createElement('div');
  answerArea.id = 'cultivation-answer-area';
  answerArea.style.cssText = `
    margin: 20px 0;
    padding: 20px;
    background-color: #fff9c4;
    border-radius: 8px;
    min-height: 100px;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  
  // 创建答案文本
  const answerText = document.createElement('p');
  answerText.id = 'cultivation-answer-text';
  answerText.style.cssText = `
    font-size: 20px;
    color: #333;
    font-weight: bold;
    margin: 0;
    font-style: italic;
  `;
  
  // 创建新问题按钮
  const newQuestionButton = document.createElement('button');
  newQuestionButton.textContent = '新的问题';
  newQuestionButton.style.cssText = `
    background-color: #2196F3;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    transition: background-color 0.3s;
    display: none;
     margin-right: 10px;
  `;
  
  // 添加悬停效果
  newQuestionButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#1976D2';
  });
  
  newQuestionButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#2196F3';
  });
  
  // 创建关闭按钮
  const closeButton = document.createElement('button');
  closeButton.textContent = '关闭';
  closeButton.style.cssText = `
    background-color: #f44336;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
  `;
  
  // 添加悬停效果
  closeButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#d32f2f';
  });
  
  closeButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#f44336';
  });
  
  // 添加查看答案事件
  checkButton.addEventListener('click', function() {
    // 隐藏问题区域，显示答案区域
    questionArea.style.display = 'none';
    answerArea.style.display = 'flex';
    newQuestionButton.style.display = 'inline-block';
    
    // 随机获取一条答案
    const randomAnswer = cultivationAnswers[Math.floor(Math.random() * cultivationAnswers.length)];
    answerText.textContent = randomAnswer;
  });
  
  // 添加新问题事件
  newQuestionButton.addEventListener('click', function() {
    // 隐藏答案区域，显示问题区域
    answerArea.style.display = 'none';
    newQuestionButton.style.display = 'none';
    questionArea.style.display = 'flex';
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
  questionArea.appendChild(promptText);
  questionArea.appendChild(checkButton);
  answerArea.appendChild(answerText);
  modal.appendChild(title);
  modal.appendChild(questionArea);
  modal.appendChild(answerArea);
  modal.appendChild(newQuestionButton);
  modal.appendChild(closeButton);
  overlay.appendChild(modal);
  
  // 添加到页面
  document.body.appendChild(overlay);
}

// 功法修炼价格弹窗函数
function showCultivationPriceModal() {
  // 创建遮罩层
  const overlay = document.createElement('div');
  overlay.className = 'cultivation-price-overlay';
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
  modal.className = 'cultivation-price-modal';
  modal.style.cssText = `
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    animation: modalAppear 0.3s ease-out;
  `;
  
  // 创建弹窗标题
  const title = document.createElement('h2');
  title.textContent = '功法修炼';
  title.style.cssText = `
    margin-top: 0;
    color: #333;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
  `;
  
  // 创建价格展示区域
  const priceArea = document.createElement('div');
  priceArea.id = 'cultivation-price-area';
  priceArea.style.cssText = `
    margin: 20px 0;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  
  // 创建等级选择
  const levelSelect = document.createElement('select');
  levelSelect.id = 'cultivation-level-select';
  levelSelect.style.cssText = `
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 80%;
  `;
  
  // 添加等级选项
  const levels = ['入门', '小成', '大成', '圆满', '超凡', '入圣'];
  levels.forEach((level, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.textContent = level;
    levelSelect.appendChild(option);
  });
  
  // 创建价格显示
  const priceDisplay = document.createElement('div');
  priceDisplay.id = 'cultivation-price-display';
  priceDisplay.style.cssText = `
    margin: 15px 0;
    font-size: 24px;
    font-weight: bold;
    color: #e64a19;
  `;
  priceDisplay.textContent = '价格: 100 金币';
  
  // 更新价格显示的函数
  function updatePriceDisplay() {
    const level = parseInt(levelSelect.value);
    const basePrice = 100;
    // 价格随等级递增
    const price = basePrice * Math.pow(2, level - 1);
    priceDisplay.textContent = `价格: ${price} 金币`;
  }
  
  // 添加等级变更事件
  levelSelect.addEventListener('change', updatePriceDisplay);
  
  // 创建按钮容器
  const buttonContainer = document.createElement('div');
  buttonContainer.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  `;
  
  // 创建确认按钮
  const confirmButton = document.createElement('button');
  confirmButton.textContent = '确认修炼';
  confirmButton.style.cssText = `
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  `;
  
  // 添加悬停效果
  confirmButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#45a049';
  });
  
  confirmButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#4CAF50';
  });
  
  // 创建取消按钮
  const cancelButton = document.createElement('button');
  cancelButton.textContent = '取消';
  cancelButton.style.cssText = `
    background-color: #f44336;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  `;
  
  // 添加悬停效果
  cancelButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#d32f2f';
  });
  
  cancelButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#f44336';
  });
  
  // 添加确认事件
  confirmButton.addEventListener('click', function() {
    const level = parseInt(levelSelect.value);
    const price = 100 * Math.pow(2, level - 1);
    alert(`确认花费 ${price} 金币进行${levels[level - 1]}级功法修炼！`);
    overlay.remove();
  });
  
  // 添加取消事件
  cancelButton.addEventListener('click', function() {
    overlay.remove();
  });
  
  // 创建关闭按钮
  const closeButton = document.createElement('button');
  
  // 添加关闭事件
  closeButton.addEventListener('click', function() {
    overlay.remove();
  });
  closeButton.textContent = '关闭';
  closeButton.style.cssText = `
    background-color: #757575;
    color: white;
    border: none;
    padding: 8px 20px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
  `;
  
  // 添加悬停效果
  closeButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#616161';
  });
  
  closeButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#757575';
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
  priceArea.appendChild(document.createTextNode('选择修炼等级:'));
  priceArea.appendChild(levelSelect);
  priceArea.appendChild(priceDisplay);
  buttonContainer.appendChild(confirmButton);
  buttonContainer.appendChild(cancelButton);
  modal.appendChild(title);
  modal.appendChild(priceArea);
  modal.appendChild(buttonContainer);
  modal.appendChild(closeButton);
  overlay.appendChild(modal);
  
  // 添加到页面
  document.body.appendChild(overlay);
}

// 神器法宝弹窗函数
function showArtifactModal() {
  // 创建遮罩层
  const overlay = document.createElement('div');
  overlay.className = 'artifact-overlay';
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
  modal.className = 'artifact-modal';
  modal.style.cssText = `
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    width: 90%;
    max-width: 600px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    animation: modalAppear 0.3s ease-out;
    max-height: 80vh;
    overflow-y: auto;
  `;
  
  // 创建弹窗标题
  const title = document.createElement('h2');
  title.textContent = '神器法宝';
  title.style.cssText = `
    margin-top: 0;
    color: #333;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
  `;
  
  // 创建法宝展示区域
  const artifactArea = document.createElement('div');
  artifactArea.id = 'artifact-display-area';
  artifactArea.style.cssText = `
    margin: 20px 0;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    min-height: 200px;
  `;
  
  // 创建法宝等级选择
  const levelSelect = document.createElement('select');
  levelSelect.id = 'artifact-level-select';
  levelSelect.style.cssText = `
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 80%;
  `;
  
  // 添加法宝等级选项
  const levels = ['凡器', '灵器', '宝器', '仙器', '神器', '先天灵宝'];
  levels.forEach((level, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.textContent = level;
    levelSelect.appendChild(option);
  });
  
  // 法宝数据
  const artifacts = [
    {
      level: 1,
      name: '青钢剑',
      description: '普通精钢打造的长剑，锋利耐用，适合初学者使用。',
      power: '攻击力 +10',
      rarity: '普通',
      color: '#757575'
    },
    {
      level: 2,
      name: '玄铁重剑',
      description: '玄铁铸造，剑身厚重，蕴含一丝灵气。',
      power: '攻击力 +30',
      rarity: '稀有',
      color: '#9c27b0'
    },
    {
      level: 3,
      name: '紫电剑',
      description: '千年紫晶矿脉中孕育而出，挥动时有电光流转。',
      power: '攻击力 +100',
      rarity: '珍稀',
      color: '#ff9800'
    },
    {
      level: 4,
      name: '九霄环佩',
      description: '上古仙人遗留之物，内有一方小世界。',
      power: '攻击力 +300',
      rarity: '传说',
      color: '#e91e63'
    },
    {
      level: 5,
      name: '混沌钟',
      description: '开天辟地时诞生的神器，钟声可镇压一切邪祟。',
      power: '攻击力 +1000',
      rarity: '神话',
      color: '#f44336'
    },
    {
      level: 6,
      name: '太极图',
      description: '先天灵宝，可演化天地，镇压气运。',
      power: '攻击力 +3000',
      rarity: '至高',
      color: '#d32f2f'
    }
  ];
  
  // 创建法宝信息展示区域
  const artifactInfo = document.createElement('div');
  artifactInfo.id = 'artifact-info';
  artifactInfo.style.cssText = `
    margin: 20px 0;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  `;
  
  // 初始显示第一个法宝信息
  function updateArtifactInfo() {
    const level = parseInt(levelSelect.value);
    const artifact = artifacts.find(a => a.level === level);
    
    if (artifact) {
      artifactInfo.innerHTML = '';
      
      // 创建法宝名称
      const nameElement = document.createElement('h3');
      nameElement.textContent = artifact.name;
      nameElement.style.cssText = `
        margin: 0 0 10px 0;
        color: ${artifact.color};
        font-size: 24px;
      `;
      
      // 创建法宝描述
      const descElement = document.createElement('p');
      descElement.textContent = artifact.description;
      descElement.style.cssText = `
        margin: 10px 0;
        color: #666;
        font-size: 16px;
      `;
      
      // 创建法宝属性
      const powerElement = document.createElement('p');
      powerElement.textContent = artifact.power;
      powerElement.style.cssText = `
        margin: 10px 0;
        color: #4CAF50;
        font-weight: bold;
      `;
      
      // 创建法宝稀有度
      const rarityElement = document.createElement('p');
      rarityElement.textContent = `稀有度: ${artifact.rarity}`;
      rarityElement.style.cssText = `
        margin: 10px 0;
        color: #ff5722;
        font-style: italic;
      `;
      
      artifactInfo.appendChild(nameElement);
      artifactInfo.appendChild(descElement);
      artifactInfo.appendChild(powerElement);
      artifactInfo.appendChild(rarityElement);
    }
  }
  
  // 添加等级变更事件
  levelSelect.addEventListener('change', updateArtifactInfo);
  
  // 初始化显示
  updateArtifactInfo();
  
  // 创建按钮容器
  const buttonContainer = document.createElement('div');
  buttonContainer.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  `;
  
  // 创建获取按钮
  const obtainButton = document.createElement('button');
  obtainButton.textContent = '获取法宝';
  obtainButton.style.cssText = `
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  `;
  
  // 添加悬停效果
  obtainButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#45a049';
  });
  
  obtainButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#4CAF50';
  });
  
  // 创建取消按钮
  const cancelButton = document.createElement('button');
  cancelButton.textContent = '取消';
  cancelButton.style.cssText = `
    background-color: #f44336;
    color: white;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  `;
  
  // 添加悬停效果
  cancelButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#d32f2f';
  });
  
  cancelButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#f44336';
  });
  
  // 添加获取法宝事件
  obtainButton.addEventListener('click', function() {
    const level = parseInt(levelSelect.value);
    const artifact = artifacts.find(a => a.level === level);
    if (artifact) {
      alert(`恭喜获得${artifact.name}！\n${artifact.power}`);
    }
  });
  
  // 添加取消事件
  cancelButton.addEventListener('click', function() {
    overlay.remove();
  });
  
  // 创建关闭按钮
  const closeButton = document.createElement('button');
  closeButton.textContent = '关闭';
  closeButton.style.cssText = `
    background-color: #757575;
    color: white;
    border: none;
    padding: 8px 20px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
  `;
  
  // 添加悬停效果
  closeButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#616161';
  });
  
  closeButton.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#757575';
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
  artifactArea.appendChild(document.createTextNode('选择法宝等级:'));
  artifactArea.appendChild(levelSelect);
  artifactArea.appendChild(artifactInfo);
  buttonContainer.appendChild(obtainButton);
  buttonContainer.appendChild(cancelButton);
  modal.appendChild(title);
  modal.appendChild(artifactArea);
  modal.appendChild(buttonContainer);
  modal.appendChild(closeButton);
  overlay.appendChild(modal);
  
  // 添加到页面
  document.body.appendChild(overlay);
}

// 导出函数，供主页调用
window.initCultivationGuide = initCultivationGuide;
window.showCultivationPriceModal = showCultivationPriceModal;
window.showArtifactModal = showArtifactModal;