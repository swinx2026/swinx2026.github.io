// 卦签话术数据 - 精简为49条卦签结果，增加旺运物品、颜色、食物、作息等条目
const fortuneQuotes = [
    // 卦签数据保持不变
    {        title: "乾卦初九",        fortune: "吉",        description: "潜龙勿用，厚积薄发。",        shouldDo: "今日宜潜心学习，积累知识，不宜冒进。",        avoid: "避免与人争执，保持低调谨慎。",        luckyItem: "笔记本、钢笔",        luckyColor: "金色、天蓝色",        luckyFood: "清淡蔬菜、豆浆",        fortuneDirection: "东"    },
    {        title: "坤卦六二",        fortune: "大吉",        description: "直方大，不习无不利。",        shouldDo: "保持正直品格，真诚待人，自然顺遂。",        avoid: "避免虚伪做作，心口不一。",        luckyItem: "便利贴、文件架",        luckyColor: "黄色、棕色",        luckyFood: "根茎类蔬菜、小米粥",        fortuneDirection: "西"    },
    {        title: "屯卦六三",        fortune: "凶",        description: "即鹿无虞，惟入于林中。",        shouldDo: "今日宜深思熟虑，不可贸然行动。",        avoid: "避免盲目追求，不计后果。",        luckyItem: "订书机、回形针",        luckyColor: "黑色、深蓝色",        luckyFood: "温热食物、生姜茶",        fortuneDirection: "南"    },
    {        title: "蒙卦九二",        fortune: "吉",        description: "包蒙，吉。纳妇吉，子克家。",        shouldDo: "宜虚心受教，接受他人指导。",        avoid: "避免骄傲自满，固执己见。",        luckyItem: "计算器、便签本",        luckyColor: "绿色、青色",        luckyFood: "补脑食物、坚果类",        fortuneDirection: "北"    },
    {        title: "需卦九五",        fortune: "大吉",        description: "需于酒食，贞吉。",        shouldDo: "今日宜享受生活，放松心情。",        avoid: "避免过度劳累，忽视健康。",        luckyItem: "文件夹、档案袋",        luckyColor: "红色、粉色",        luckyFood: "新鲜水果、轻食沙拉",        fortuneDirection: "东南"    },
    {        title: "讼卦上九",        fortune: "凶",        description: "或锡之鞶带，终朝三褫之。",        shouldDo: "宜和解退让，以和为贵。",        avoid: "避免争强好胜，执意诉讼。",        luckyItem: "胶棒、剪刀",        luckyColor: "紫色、淡灰色",        luckyFood: "和平鸽汤、静心茶",        fortuneDirection: "西南"    },
    {        title: "师卦九二",        fortune: "吉",        description: "在师中吉，无咎。王三锡命。",        shouldDo: "今日宜团队合作，听从指挥。",        avoid: "避免单打独斗，一意孤行。",        luckyItem: "白板笔、马克笔",        luckyColor: "白色、银色",        luckyFood: "团队共享餐、汤品",        fortuneDirection: "东北"    },
    {        title: "比卦六二",        fortune: "吉",        description: "比之自内，贞吉。",        shouldDo: "宜真诚交友，建立良好关系。",        avoid: "避免虚情假意，尔虞我诈。",        luckyItem: "台历、笔筒",        luckyColor: "粉色、淡紫色",        luckyFood: "朋友聚餐、分享美食",        fortuneDirection: "西北"    },
    {        title: "小畜卦九三",        fortune: "平",        description: "舆说辐，夫妻反目。",        shouldDo: "宜反思自我，调和关系。",        avoid: "避免固执己见，激化矛盾。",        luckyItem: "订书钉、长尾夹",        luckyColor: "月光白、浅青色",        luckyFood: "清淡饮食、和解茶",        fortuneDirection: "东"    },
    {        title: "履卦九四",        fortune: "平",        description: "履虎尾，愬愬终吉。",        shouldDo: "宜小心谨慎，如履薄冰。",        avoid: "避免粗心大意，掉以轻心。",        luckyItem: "美工刀、尺子",        luckyColor: "琥珀色、橙色",        luckyFood: "温补食物、明目茶",        fortuneDirection: "西"    },
    {
        title: "泰卦九三",
        fortune: "吉",
        description: "无平不陂，无往不复。艰贞无咎。",
        shouldDo: "宜居安思危，未雨绸缪。",
        avoid: "避免得意忘形，忽视潜在风险。",
        luckyItem: "笔记本电脑、鼠标垫",
        luckyColor: "青色、湖蓝色",
        luckyFood: "均衡饮食、养生茶",
        fortuneDirection: "南"
    },
    {
        title: "否卦九五",
        fortune: "平",
        description: "休否，大人吉。其亡其亡，系于苞桑。",
        shouldDo: "宜保持希望，等待转机。",
        avoid: "避免悲观绝望，自暴自弃。",
        luckyItem: "U盘、移动硬盘",
        luckyColor: "茶褐色、暗绿色",
        luckyFood: "提神食物、能量棒",
        fortuneDirection: "北"
    },
    {
        title: "同人卦六二",
        fortune: "大吉",
        description: "同人于宗，吝。",
        shouldDo: "宜广结善缘，不局限于小圈子。",
        avoid: "避免狭隘排外，党同伐异。",
        luckyItem: "名片夹、名片盒",
        luckyColor: "青蓝色、海蓝色",
        luckyFood: "社交场合食物、分享蛋糕",
        fortuneDirection: "东南"
    },
    {
        title: "大有卦九三",
        fortune: "吉",
        description: "公用亨于天子，小人弗克。",
        shouldDo: "宜慷慨分享，惠及他人。",
        avoid: "避免自私自利，独占利益。",
        luckyItem: "鼠标、键盘垫",
        luckyColor: "金黄色、橙色",
        luckyFood: "分享食物、公益餐",
        fortuneDirection: "西南"
    },
    {
        title: "谦卦六二",
        fortune: "大吉",
        description: "鸣谦，贞吉。",
        shouldDo: "宜保持谦逊，低调行事。",
        avoid: "避免傲慢自大，目中无人。",
        luckyItem: "修正带、橡皮",
        luckyColor: "灰色、米色",
        luckyFood: "朴素饮食、家常菜",
        fortuneDirection: "东北"
    },
    {
        title: "豫卦六三",
        fortune: "凶",
        description: "盱豫悔，迟有悔。",
        shouldDo: "宜当机立断，避免犹豫不决。",
        avoid: "避免拖延观望，错失良机。",
        luckyItem: "钢笔、墨水",
        luckyColor: "红色、深红色",
        luckyFood: "提神食物、辛辣食品",
        fortuneDirection: "西北"
    },
    {
        title: "随卦六二",
        fortune: "吉",
        description: "系小子，失丈夫。",
        shouldDo: "宜明辨是非，选择正确的跟随对象。",
        avoid: "避免盲目跟风，追随错误的人。",
        luckyItem: "书籍、笔记本",
        luckyColor: "紫色、靛蓝色",
        luckyFood: "健脑食物、鱼类",
        fortuneDirection: "东"
    },
    {
        title: "蛊卦九二",
        fortune: "吉",
        description: "干母之蛊，不可贞。",
        shouldDo: "宜改革创新，去除陈规陋习。",
        avoid: "避免墨守成规，固执保守。",
        luckyItem: "便签纸、荧光笔",
        luckyColor: "红色、粉红色",
        luckyFood: "新食物尝试、创意料理",
        fortuneDirection: "西"
    },
    {
        title: "临卦初九",
        fortune: "吉",
        description: "咸临，贞吉。",
        shouldDo: "宜亲近他人，建立信任。",
        avoid: "避免高高在上，疏远他人。",
        luckyItem: "微笑贴、员工卡",
        luckyColor: "粉色、浅红色",
        luckyFood: "温馨料理、家庭聚餐",
        fortuneDirection: "南"
    },
    {
        title: "观卦六三",
        fortune: "平",
        description: "观我生，进退。",
        shouldDo: "宜自我反省，审时度势。",
        avoid: "避免盲目行动，缺乏思考。",
        luckyItem: "镜子、笔记本",
        luckyColor: "蓝色、青色",
        luckyFood: "静心茶、冥想餐",
        fortuneDirection: "北"
    },
    {
        title: "噬嗑卦六五",
        fortune: "吉",
        description: "噬乾肉，得黄金。贞厉，无咎。",
        shouldDo: "宜坚守正道，虽有困难终会成功。",
        avoid: "避免投机取巧，违背原则。",
        luckyItem: "文件夹、标签纸",
        luckyColor: "红色、棕色",
        luckyFood: "坚实食物、烤肉",
        fortuneDirection: "东南"
    },
    {
        title: "贲卦初九",
        fortune: "吉",
        description: "贲其趾，舍车而徒。",
        shouldDo: "宜注重内在品质，不追求表面虚荣。",
        avoid: "避免华而不实，虚有其表。",
        luckyItem: "绿植、水杯",
        luckyColor: "白色、淡粉色",
        luckyFood: "朴素食物、天然食材",
        fortuneDirection: "西南"
    },
    {
        title: "剥卦六四",
        fortune: "凶",
        description: "剥床以肤，凶。",
        shouldDo: "宜谨慎行事，保护自己。",
        avoid: "避免暴露弱点，给人可乘之机。",
        luckyItem: "鼠标、键盘",
        luckyColor: "黑色、深灰色",
        luckyFood: "滋补食物、养生汤",
        fortuneDirection: "东北"
    },
    {
        title: "复卦初九",
        fortune: "大吉",
        description: "不远复，无祗悔，元吉。",
        shouldDo: "宜及时改过，迷途知返。",
        avoid: "避免执迷不悟，一错再错。",
        luckyItem: "便签、笔",
        luckyColor: "白色、金色",
        luckyFood: "清新食物、悔过茶",
        fortuneDirection: "西北"
    },
    {
        title: "无妄卦六三",
        fortune: "凶",
        description: "无妄之灾，或系之牛，行人之得，邑人之灾。",
        shouldDo: "宜小心防范，避免意外之灾。",
        avoid: "避免粗心大意，疏忽大意。",
        luckyItem: "口罩、消毒液",
        luckyColor: "黑色、深蓝色",
        luckyFood: "安全食物、温热饮品",
        fortuneDirection: "东"
    },
    {
        title: "大畜卦六五",
        fortune: "吉",
        description: "豮豕之牙，吉。",
        shouldDo: "宜自我约束，控制欲望。",
        avoid: "避免放纵自我，失去控制。",
        luckyItem: "日历、定时器",
        luckyColor: "黄色、橙色",
        luckyFood: "节制饮食、健康食品",
        fortuneDirection: "西"
    },
    {
        title: "颐卦初九",
        fortune: "吉",
        description: "舍尔灵龟，观我朵颐，凶。",
        shouldDo: "宜自力更生，不要依赖他人。",
        avoid: "避免贪图享乐，坐享其成。",
        luckyItem: "台灯、护眼灯",
        luckyColor: "绿色、青色",
        luckyFood: "自给自足食物、劳动果实",
        fortuneDirection: "南"
    },
    {
        title: "坎卦九二",
        fortune: "平",
        description: "坎有险，求小得。",
        shouldDo: "宜降低期望，脚踏实地。",
        avoid: "避免好高骛远，不切实际。",
        luckyItem: "文件柜、抽屉",
        luckyColor: "蓝色、深蓝色",
        luckyFood: "脚踏实地食物、根茎类",
        fortuneDirection: "北"
    },
    {
        title: "离卦九三",
        fortune: "平",
        description: "日昃之离，不鼓缶而歌，则大耋之嗟，凶。",
        shouldDo: "宜乐观面对，保持积极心态。",
        avoid: "避免悲观消极，怨天尤人。",
        luckyItem: "咖啡杯、茶包",
        luckyColor: "红色、橙色",
        luckyFood: "阳光食物、辛辣食品",
        fortuneDirection: "东南"
    },
    {
        title: "咸卦六二",
        fortune: "吉",
        description: "咸其腓，凶。居吉。",
        shouldDo: "宜安守本分，不要轻举妄动。",
        avoid: "避免冲动行事，不计后果。",
        luckyItem: "椅垫、靠枕",
        luckyColor: "月光白、淡蓝色",
        luckyFood: "清淡食物、安神茶",
        fortuneDirection: "西南"
    },
    {
        title: "恒卦六五",
        fortune: "吉",
        description: "恒其德，贞。妇人吉，夫子凶。",
        shouldDo: "宜坚守美德，持之以恒。",
        avoid: "避免半途而废，缺乏毅力。",
        luckyItem: "保温杯、暖手宝",
        luckyColor: "红色、深红色",
        luckyFood: "持久食物、坚果类",
        fortuneDirection: "东北"
    },
    {
        title: "遁卦九四",
        fortune: "平",
        description: "好遁，君子吉，小人否。",
        shouldDo: "宜审时度势，适时退避。",
        avoid: "避免盲目坚持，不知变通。",
        luckyItem: "耳机、降噪耳塞",
        luckyColor: "蓝色、淡紫色",
        luckyFood: "隐退食物、清淡饮食",
        fortuneDirection: "西北"
    },
    {
        title: "大壮卦九三",
        fortune: "平",
        description: "小人用壮，君子用罔。贞厉。羝羊触藩，羸其角。",
        shouldDo: "宜刚柔并济，不要恃强凌弱。",
        avoid: "避免锋芒毕露，盛气凌人。",
        luckyItem: "订书机、起钉器",
        luckyColor: "黄棕色、橙色",
        luckyFood: "平衡食物、荤素搭配",
        fortuneDirection: "东"
    },
    {
        title: "晋卦六五",
        fortune: "吉",
        description: "悔亡，失得勿恤。往吉无不利。",
        shouldDo: "宜向前看，不要过于计较得失。",
        avoid: "避免患得患失，犹豫不决。",
        luckyItem: "笔记本、钢笔",
        luckyColor: "绿色、青色",
        luckyFood: "前进食物、能量餐",
        fortuneDirection: "西"
    },
    {
        title: "明夷卦初九",
        fortune: "凶",
        description: "明夷于飞，垂其翼。君子于行，三日不食。有攸往，主人有言。",
        shouldDo: "宜韬光养晦，等待时机。",
        avoid: "避免锋芒毕露，招人嫉妒。",
        luckyItem: "便签、荧光笔",
        luckyColor: "黑色、深灰色",
        luckyFood: "低调食物、素食",
        fortuneDirection: "南"
    },
    {
        title: "家人卦九三",
        fortune: "吉",
        description: "家人嗃嗃，悔厉吉。妇子嘻嘻，终吝。",
        shouldDo: "宜严格持家，不可过于放纵。",
        avoid: "避免溺爱家人，不加约束。",
        luckyItem: "照片、相框",
        luckyColor: "粉色、红色",
        luckyFood: "家庭聚餐、传统美食",
        fortuneDirection: "北"
    },
    {
        title: "睽卦九四",
        fortune: "平",
        description: "睽孤，遇元夫，交孚，厉无咎。",
        shouldDo: "宜寻求合作，化解分歧。",
        avoid: "避免孤立无援，固执己见。",
        luckyItem: "会议记录本、笔",
        luckyColor: "青色、蓝色",
        luckyFood: "合作餐、共享食物",
        fortuneDirection: "东南"
    },
    {
        title: "蹇卦九五",
        fortune: "平",
        description: "大蹇朋来。",
        shouldDo: "宜寻求帮助，共度难关。",
        avoid: "避免一意孤行，拒绝援助。",
        luckyItem: "电话、手机",
        luckyColor: "紫色、深蓝色",
        luckyFood: "求助食物、朋友聚餐",
        fortuneDirection: "西南"
    },
    {
        title: "解卦九二",
        fortune: "吉",
        description: "田获三狐，得黄矢，贞吉。",
        shouldDo: "宜抓住机会，解决问题。",
        avoid: "避免犹豫不决，错失良机。",
        luckyItem: "简历、名片",
        luckyColor: "黄色、金色",
        luckyFood: "机遇食物、应季水果",
        fortuneDirection: "东北"
    },
    {
        title: "损卦六三",
        fortune: "平",
        description: "三人行，则损一人；一人行，则得其友。",
        shouldDo: "宜精简团队，注重质量。",
        avoid: "避免人浮于事，效率低下。",
        luckyItem: "文件夹、文件袋",
        luckyColor: "白色、淡灰色",
        luckyFood: "精简食物、轻食",
        fortuneDirection: "西北"
    },
    {
        title: "益卦六二",
        fortune: "吉",
        description: "或益之十朋之龟，弗克违，永贞吉。王用享于帝，吉。",
        shouldDo: "宜接受帮助，知恩图报。",
        avoid: "避免拒绝好意，孤芳自赏。",
        luckyItem: "贺卡、感谢信",
        luckyColor: "粉色、淡红色",
        luckyFood: "感恩食物、分享餐",
        fortuneDirection: "东"
    },
    {
        title: "夬卦初九",
        fortune: "吉",
        description: "壮于前趾，往不胜为吝。",
        shouldDo: "宜谨慎行动，不要盲目冒进。",
        avoid: "避免轻举妄动，不自量力。",
        luckyItem: "计算器、算盘",
        luckyColor: "红色、深红色",
        luckyFood: "谨慎食物、易消化食品",
        fortuneDirection: "西"
    },
    {
        title: "萃卦六二",
        fortune: "吉",
        description: "引吉，无咎。孚乃利用禴。",
        shouldDo: "宜团结他人，凝聚力量。",
        avoid: "避免离心离德，各自为政。",
        luckyItem: "团队T恤、工作牌",
        luckyColor: "绿色、青色",
        luckyFood: "团结餐、集体活动",
        fortuneDirection: "南"
    },
    {
        title: "升卦六四",
        fortune: "吉",
        description: "王用亨于岐山，吉无咎。",
        shouldDo: "宜循序渐进，稳步上升。",
        avoid: "避免急于求成，急功近利。",
        luckyItem: "笔记本、钢笔",
        luckyColor: "黄色、金色",
        luckyFood: "上升食物、营养均衡",
        fortuneDirection: "北"
    },
    {
        title: "困卦九二",
        fortune: "平",
        description: "困于酒食，朱绂方来，利用亨祀。征凶，无咎。",
        shouldDo: "宜安于现状，等待转机。",
        avoid: "避免强行突破，适得其反。",
        luckyItem: "螺丝刀、扳手",
        luckyColor: "蓝色、淡紫色",
        luckyFood: "安神食物、静心茶",
        fortuneDirection: "东南"
    },
    {
        title: "井卦九三",
        fortune: "吉",
        description: "井渫不食，为我心恻。可用汲。王明，并受其福。",
        shouldDo: "宜修身养性，提升自我价值。",
        avoid: "避免自暴自弃，不思进取。",
        luckyItem: "书籍、书签",
        luckyColor: "蓝色、青色",
        luckyFood: "修身食物、清淡饮食",
        fortuneDirection: "西南"
    },
    {
        title: "革卦六二",
        fortune: "吉",
        description: "已日乃革之，征吉，无咎。",
        shouldDo: "宜把握时机，进行变革。",
        avoid: "避免犹豫不决，错失良机。",
        luckyItem: "笔记本、钢笔",
        luckyColor: "红色、橙色",
        luckyFood: "变革食物、创新料理",
        fortuneDirection: "东北"
    },
    {
        title: "鼎卦六五",
        fortune: "大吉",
        description: "鼎黄耳金铉，利贞。",
        shouldDo: "宜守正出奇，创新发展。",
        avoid: "避免墨守成规，固步自封。",
        luckyItem: "便签、荧光笔",
        luckyColor: "黄色、金色",
        luckyFood: "创新食物、精致料理",
        fortuneDirection: "西北"
    },
    {
        title: "震卦初九",
        fortune: "平",
        description: "震来虩虩，后笑言哑哑，吉。",
        shouldDo: "宜勇敢面对困难，保持乐观。",
        avoid: "避免惊慌失措，失去方寸。",
        luckyItem: "钢笔、墨水",
        luckyColor: "橙色、黄色",
        luckyFood: "勇气食物、辛辣食品",
        fortuneDirection: "东"
    },
    {
        title: "艮卦初六",
        fortune: "吉",
        description: "艮其趾，无咎，利永贞。",
        shouldDo: "宜适可而止，不要过度追求。",
        avoid: "避免贪得无厌，不知满足。",
        luckyItem: "水杯、绿植",
        luckyColor: "白色、淡粉色",
        luckyFood: "知足食物、简单饮食",
        fortuneDirection: "西"
    }
];

// 获取今日日期字符串，格式：YYYY-MM-DD
function getTodayString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 格式化日期显示
function formatDateDisplay(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekDay = weekDays[date.getDay()];
    const lunarDate = getLunarDate(date);
    return `${year}年${month}月${day}日 星期${weekDay}<br>${lunarDate}`;
}

// 简化的农历转换函数（适用于2020-2030年）
function getLunarDate(date) {
    // 这是一个简化的农历转换，实际项目中可能需要更复杂的算法或库
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // 农历年名
    const lunarYearNames = ['庚子', '辛丑', '壬寅', '癸卯', '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌'];
    const lunarYear = lunarYearNames[year - 2020];
    
    // 农历月份
    const lunarMonths = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'];
    
    // 这里使用简化的转换，实际上农历和公历日期并不一一对应
    // 真实应用中应使用完整的农历算法
    let lunarMonth = lunarMonths[month - 1];
    let lunarDay;
    
    // 简化的农历日转换
    const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                     '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                     '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
    lunarDay = lunarDays[day - 1] || lunarDays[lunarDays.length - 1];
    
    return `${lunarYear}年${lunarMonth}${lunarDay}`;
}

// 初始化函数，绑定按钮点击事件
function initFortuneTelling() {
    console.log('initFortuneTelling初始化函数执行');
    // 使用事件委托来绑定点击事件
    document.addEventListener('click', function(e) {
        const target = e.target;
        // 检查是否点击了卜上一卦卡片或其子元素
        const fortuneCard = target.closest('#fortune-telling-card');
        if (fortuneCard) {
            console.log('卜上一卦按钮点击事件触发');
            e.preventDefault();
            e.stopPropagation();
            // 调用显示卦象函数
            showFortuneTelling();
        }
    });
    console.log('已为卜上一卦按钮添加点击事件');
}

// 显示卦象弹窗
function showFortuneTelling() {
    try {
        console.log('showFortuneTelling函数执行');
        // 创建模态框元素创建弹窗元素
    const modal = document.createElement('div');
    modal.className = 'fortune-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', sans-serif;
    `;
    
    // 弹窗内容 - 初始显示动画图片和抽一签按钮
    modal.innerHTML = `
        <div class="fortune-container" style="
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 12px;
            max-width: 360px;
            width: 80%;
            max-height: 70vh;
            overflow-y: auto;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            border: 1px solid #f0e8d9;
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4b997' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
        ">
            <div style="
                text-align: center;
                margin: 10px 0;
            ">
                <img src="pic/chou.gif" style="
                    max-width: 100%;
                    max-height: 250px;
                    width: auto;
                    height: auto;
                " alt="抽签动画" />
            </div>
            
            <div style="
                text-align: center;
                margin: 15px 0;
            ">
                <button id="draw-fortune" style="
                    padding: 12px 40px;
                    background-color: #c41e3a;
                    color: white;
                    border: none;
                    border-radius: 25px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: 0 4px 10px rgba(196, 30, 58, 0.3);
                ">抽一签</button>
            </div>
            
            <div style="
                text-align: center;
                margin-bottom: 12px;
            ">
                <p style="
                    color: #66462a;
                    font-size: 0.9rem;
                ">诚心诚意，抽一签以问吉凶</p>
            </div>
        </div>
    `;
    
    // 添加到页面
    document.body.appendChild(modal);
    console.log('弹窗已添加到页面:', modal);
    
    // 抽一签按钮事件
    const drawButton = document.getElementById('draw-fortune');
    drawButton.addEventListener('click', function() {
        // 检查今天是否已经算过卦
        const today = getTodayString();
        const savedFortune = localStorage.getItem(`fortune_${today}`);
        let fortune;
        
        if (savedFortune) {
            // 如果今天已经算过卦，使用保存的卦象
            fortune = JSON.parse(savedFortune);
            // 检查是否有财运方位字段，没有则重新生成
            if (!fortune.fortuneDirection) {
                const randomIndex = Math.floor(Math.random() * fortuneQuotes.length);
                fortune = fortuneQuotes[randomIndex];
                localStorage.setItem(`fortune_${today}`, JSON.stringify(fortune));
            }
        } else {
            // 如果今天没有算过卦，随机选择一个卦象
            const randomIndex = Math.floor(Math.random() * fortuneQuotes.length);
            fortune = fortuneQuotes[randomIndex];
            // 保存今天的卦象结果
            localStorage.setItem(`fortune_${today}`, JSON.stringify(fortune));
        }
        
        // 生成卦象等级对应的颜色
        let fortuneColor = '';
        switch (fortune.fortune) {
            case '大吉':
                fortuneColor = '#c41e3a'; // 红色
                break;
            case '吉':
                fortuneColor = '#5aac5e'; // 绿色
                break;
            case '平':
                fortuneColor = '#e6a23c'; // 橙色
                break;
            case '凶':
                fortuneColor = '#66462a'; // 棕色
                break;
        }
        
        // 更新弹窗内容为卦象结果
        const container = modal.querySelector('.fortune-container');
        container.innerHTML = `
            <h2 style="
                text-align: center;
                font-size: 1.3rem;
                margin-bottom: 10px;
                color: #66462a;
                font-weight: 600;
                margin-top: 0;
            ">周易卦象</h2>
            
            <div style="
                text-align: center;
                margin-bottom: 12px;
            ">
                <div style="
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: ${fortuneColor};
                    margin-bottom: 8px;
                ">${fortune.title}</div>
                <div style="
                    display: inline-block;
                    padding: 3px 12px;
                    background-color: ${fortuneColor};
                    color: white;
                    border-radius: 15px;
                    font-size: 1rem;
                    font-weight: 600;
                ">${fortune.fortune}</div>
            </div>
            
            <div style="margin-bottom: 10px;">
                <p style="
                    margin: 0;
                    padding: 6px;
                    background-color: rgba(249, 244, 232, 0.5);
                    border-radius: 6px;
                    color: #66462a;
                    line-height: 1.3;
                    font-size: 0.9rem;
                "><strong>卦象解读：</strong>${fortune.description}</p>
            </div>
            
            <div style="margin-bottom: 10px;">
                <p style="
                    margin: 0;
                    padding: 6px;
                    background-color: rgba(90, 172, 94, 0.1);
                    border-radius: 6px;
                    color: #3e8d41;
                    line-height: 1.3;
                    font-size: 0.9rem;
                "><strong>今日宜：</strong>${fortune.shouldDo}</p>
            </div>
            
            <div style="margin-bottom: 10px;">
                <p style="
                    margin: 0;
                    padding: 6px;
                    background-color: rgba(196, 30, 58, 0.1);
                    border-radius: 6px;
                    color: #a81a32;
                    line-height: 1.3;
                    font-size: 0.9rem;
                "><strong>今日忌：</strong>${fortune.avoid}</p>
            </div>
            
            <div style="margin-bottom: 10px;">
                <p style="
                    margin: 0;
                    padding: 6px;
                    background-color: rgba(230, 162, 60, 0.1);
                    border-radius: 6px;
                    color: #c07b13;
                    line-height: 1.3;
                    font-size: 0.9rem;
                "><strong>旺运物品：</strong>${fortune.luckyItem}</p>
            </div>
            
            <div style="margin-bottom: 10px;">
                <p style="
                    margin: 0;
                    padding: 6px;
                    background-color: rgba(102, 153, 204, 0.1);
                    border-radius: 6px;
                    color: #1e6bb8;
                    line-height: 1.3;
                    font-size: 0.9rem;
                "><strong>吉祥颜色：</strong>${fortune.luckyColor}</p>
            </div>
            
            <div style="margin-bottom: 10px;">
                <p style="
                    margin: 0;
                    padding: 6px;
                    background-color: rgba(153, 102, 204, 0.1);
                    border-radius: 6px;
                    color: #6c3483;
                    line-height: 1.3;
                    font-size: 0.9rem;
                "><strong>推荐食物：</strong>${fortune.luckyFood}</p>
            </div>
            
            <div style="margin-bottom: 10px;">
                <p style="
                    margin: 0;
                    padding: 6px;
                    background-color: rgba(241, 196, 15, 0.1);
                    border-radius: 6px;
                    color: #f39c12;
                    line-height: 1.3;
                    font-size: 0.9rem;
                "><strong>财运方位：</strong>${fortune.fortuneDirection}</p>
            </div>
            
            <div style="margin-bottom: 12px;">
                <p style="
                    margin: 0;
                    padding: 6px;
                    background-color: rgba(243, 156, 18, 0.1);
                    border-radius: 6px;
                    color: #d35400;
                    line-height: 1.3;
                    font-weight: bold;
                    text-align: center;
                    font-size: 0.85rem;
                ">今日：${formatDateDisplay(new Date())}</p>
            </div>
            
            <div style="text-align: center;">
                <button id="close-fortune" style="
                    padding: 8px 25px;
                    background-color: #c41e3a;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: 0 2px 6px rgba(196, 30, 58, 0.3);
                ">关闭卦象</button>
            </div>
        `;
        
        // 重新绑定关闭按钮事件
        const closeButton = container.querySelector('#close-fortune');
        closeButton.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
    });
    
    // 注意：初始弹窗没有关闭按钮，所以不需要绑定关闭按钮事件
    
    // 点击外部关闭
    modal.addEventListener('click', function(e) {
        // 只有当点击的是modal本身（背景遮罩）而不是内部的container时，才关闭弹窗
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
        }
    });
    // 将弹窗添加到页面
    document.body.appendChild(modal);
    console.log('弹窗已添加到页面:', modal);
} catch (error) {
    console.error('Error in showFortuneTelling:', error);
}
}

// 导出初始化函数和显示函数，供主页调用
window.initFortuneTelling = initFortuneTelling;
window.showFortuneTelling = showFortuneTelling;
