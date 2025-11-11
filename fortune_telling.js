// 卦签话术数据 - 精简为49条卦签结果，增加吉祥物品、颜色、食物、作息等条目
const fortuneQuotes = [
    // 卦签数据保持不变
    {
        title: "乾卦初九",
        fortune: "吉",
        description: "潜龙勿用，厚积薄发。",
        shouldDo: "今日宜潜心学习，积累知识，不宜冒进。",
        avoid: "避免与人争执，保持低调谨慎。",
        luckyItem: "玉佩、金色饰品",
        luckyColor: "金色、天蓝色",
        luckyFood: "清淡蔬菜、豆浆",
        dailyRoutine: "早睡早起，晨间冥想15分钟"
    },
    {
        title: "坤卦六二",
        fortune: "大吉",
        description: "直方大，不习无不利。",
        shouldDo: "保持正直品格，真诚待人，自然顺遂。",
        avoid: "避免虚伪做作，心口不一。",
        luckyItem: "黄水晶、土地公符",
        luckyColor: "黄色、棕色",
        luckyFood: "根茎类蔬菜、小米粥",
        dailyRoutine: "午后小睡20分钟，保持规律作息"
    },
    {
        title: "屯卦六三",
        fortune: "凶",
        description: "即鹿无虞，惟入于林中。",
        shouldDo: "今日宜深思熟虑，不可贸然行动。",
        avoid: "避免盲目追求，不计后果。",
        luckyItem: "黑曜石、平安符",
        luckyColor: "黑色、深蓝色",
        luckyFood: "温热食物、生姜茶",
        dailyRoutine: "避免熬夜，22点前休息"
    },
    {
        title: "蒙卦九二",
        fortune: "吉",
        description: "包蒙，吉。纳妇吉，子克家。",
        shouldDo: "宜虚心受教，接受他人指导。",
        avoid: "避免骄傲自满，固执己见。",
        luckyItem: "文昌笔、绿幽灵",
        luckyColor: "绿色、青色",
        luckyFood: "补脑食物、坚果类",
        dailyRoutine: "学习后适当休息，保证充足睡眠"
    },
    {
        title: "需卦九五",
        fortune: "大吉",
        description: "需于酒食，贞吉。",
        shouldDo: "今日宜享受生活，放松心情。",
        avoid: "避免过度劳累，忽视健康。",
        luckyItem: "红玛瑙、美食符",
        luckyColor: "红色、粉色",
        luckyFood: "新鲜水果、轻食沙拉",
        dailyRoutine: "适当午休，晚饭后散步"
    },
    {
        title: "讼卦上九",
        fortune: "凶",
        description: "或锡之鞶带，终朝三褫之。",
        shouldDo: "宜和解退让，以和为贵。",
        avoid: "避免争强好胜，执意诉讼。",
        luckyItem: "和解符、紫水晶",
        luckyColor: "紫色、淡灰色",
        luckyFood: "和平鸽汤、静心茶",
        dailyRoutine: "避免与人争论，保持心情平和"
    },
    {
        title: "师卦九二",
        fortune: "吉",
        description: "在师中吉，无咎。王三锡命。",
        shouldDo: "今日宜团队合作，听从指挥。",
        avoid: "避免单打独斗，一意孤行。",
        luckyItem: "团队符、白水晶",
        luckyColor: "白色、银色",
        luckyFood: "团队共享餐、汤品",
        dailyRoutine: "主动沟通，保持团队协作"
    },
    {
        title: "比卦六二",
        fortune: "吉",
        description: "比之自内，贞吉。",
        shouldDo: "宜真诚交友，建立良好关系。",
        avoid: "避免虚情假意，尔虞我诈。",
        luckyItem: "友谊手链、粉水晶",
        luckyColor: "粉色、淡紫色",
        luckyFood: "朋友聚餐、分享美食",
        dailyRoutine: "主动联系朋友，增进感情"
    },
    {
        title: "小畜卦九三",
        fortune: "平",
        description: "舆说辐，夫妻反目。",
        shouldDo: "宜反思自我，调和关系。",
        avoid: "避免固执己见，激化矛盾。",
        luckyItem: "调和符、月光石",
        luckyColor: "月光白、浅青色",
        luckyFood: "清淡饮食、和解茶",
        dailyRoutine: "换位思考，保持耐心沟通"
    },
    {
        title: "履卦九四",
        fortune: "平",
        description: "履虎尾，愬愬终吉。",
        shouldDo: "宜小心谨慎，如履薄冰。",
        avoid: "避免粗心大意，掉以轻心。",
        luckyItem: "护身符、虎眼石",
        luckyColor: "琥珀色、橙色",
        luckyFood: "温补食物、明目茶",
        dailyRoutine: "做事前仔细规划，避免冲动"
    },
    {
        title: "泰卦九三",
        fortune: "吉",
        description: "无平不陂，无往不复。艰贞无咎。",
        shouldDo: "宜居安思危，未雨绸缪。",
        avoid: "避免得意忘形，忽视潜在风险。",
        luckyItem: "平安扣、绿松石",
        luckyColor: "青色、湖蓝色",
        luckyFood: "均衡饮食、养生茶",
        dailyRoutine: "适度运动，保持健康生活"
    },
    {
        title: "否卦九五",
        fortune: "平",
        description: "休否，大人吉。其亡其亡，系于苞桑。",
        shouldDo: "宜保持希望，等待转机。",
        avoid: "避免悲观绝望，自暴自弃。",
        luckyItem: "转运珠、茶晶",
        luckyColor: "茶褐色、暗绿色",
        luckyFood: "提神食物、能量棒",
        dailyRoutine: "保持积极心态，适当运动"
    },
    {
        title: "同人卦六二",
        fortune: "大吉",
        description: "同人于宗，吝。",
        shouldDo: "宜广结善缘，不局限于小圈子。",
        avoid: "避免狭隘排外，党同伐异。",
        luckyItem: "人缘符、青金石",
        luckyColor: "青蓝色、海蓝色",
        luckyFood: "社交场合食物、分享蛋糕",
        dailyRoutine: "参加社交活动，认识新朋友"
    },
    {
        title: "大有卦九三",
        fortune: "吉",
        description: "公用亨于天子，小人弗克。",
        shouldDo: "宜慷慨分享，惠及他人。",
        avoid: "避免自私自利，独占利益。",
        luckyItem: "聚宝盆、黄水晶",
        luckyColor: "金黄色、橙色",
        luckyFood: "分享食物、公益餐",
        dailyRoutine: "日行一善，保持分享心态"
    },
    {
        title: "谦卦六二",
        fortune: "大吉",
        description: "鸣谦，贞吉。",
        shouldDo: "宜保持谦逊，低调行事。",
        avoid: "避免傲慢自大，目中无人。",
        luckyItem: "谦虚符、灰玉",
        luckyColor: "灰色、米色",
        luckyFood: "朴素饮食、家常菜",
        dailyRoutine: "保持低调，虚心学习"
    },
    {
        title: "豫卦六三",
        fortune: "凶",
        description: "盱豫悔，迟有悔。",
        shouldDo: "宜当机立断，避免犹豫不决。",
        avoid: "避免拖延观望，错失良机。",
        luckyItem: "果断符、红玛瑙",
        luckyColor: "红色、深红色",
        luckyFood: "提神食物、辛辣食品",
        dailyRoutine: "制定计划，立即执行"
    },
    {
        title: "随卦六二",
        fortune: "吉",
        description: "系小子，失丈夫。",
        shouldDo: "宜明辨是非，选择正确的跟随对象。",
        avoid: "避免盲目跟风，追随错误的人。",
        luckyItem: "智慧符、紫水晶",
        luckyColor: "紫色、靛蓝色",
        luckyFood: "健脑食物、鱼类",
        dailyRoutine: "独立思考，谨慎选择"
    },
    {
        title: "蛊卦九二",
        fortune: "吉",
        description: "干母之蛊，不可贞。",
        shouldDo: "宜改革创新，去除陈规陋习。",
        avoid: "避免墨守成规，固执保守。",
        luckyItem: "创新符、红纹石",
        luckyColor: "红色、粉红色",
        luckyFood: "新食物尝试、创意料理",
        dailyRoutine: "尝试新事物，突破自我"
    },
    {
        title: "临卦初九",
        fortune: "吉",
        description: "咸临，贞吉。",
        shouldDo: "宜亲近他人，建立信任。",
        avoid: "避免高高在上，疏远他人。",
        luckyItem: "亲和力符、粉晶",
        luckyColor: "粉色、浅红色",
        luckyFood: "温馨料理、家庭聚餐",
        dailyRoutine: "主动关心他人，建立联系"
    },
    {
        title: "观卦六三",
        fortune: "平",
        description: "观我生，进退。",
        shouldDo: "宜自我反省，审时度势。",
        avoid: "避免盲目行动，缺乏思考。",
        luckyItem: "自省镜、蓝玉",
        luckyColor: "蓝色、青色",
        luckyFood: "静心茶、冥想餐",
        dailyRoutine: "自我反思，调整计划"
    },
    {
        title: "噬嗑卦六五",
        fortune: "吉",
        description: "噬乾肉，得黄金。贞厉，无咎。",
        shouldDo: "宜坚守正道，虽有困难终会成功。",
        avoid: "避免投机取巧，违背原则。",
        luckyItem: "正道符、赤铁矿",
        luckyColor: "红色、棕色",
        luckyFood: "坚实食物、烤肉",
        dailyRoutine: "坚持原则，克服困难"
    },
    {
        title: "贲卦初九",
        fortune: "吉",
        description: "贲其趾，舍车而徒。",
        shouldDo: "宜注重内在品质，不追求表面虚荣。",
        avoid: "避免华而不实，虚有其表。",
        luckyItem: "内在美符、珍珠",
        luckyColor: "白色、淡粉色",
        luckyFood: "朴素食物、天然食材",
        dailyRoutine: "注重内在修养，远离虚荣"
    },
    {
        title: "剥卦六四",
        fortune: "凶",
        description: "剥床以肤，凶。",
        shouldDo: "宜谨慎行事，保护自己。",
        avoid: "避免暴露弱点，给人可乘之机。",
        luckyItem: "保护符、黑碧玺",
        luckyColor: "黑色、深灰色",
        luckyFood: "滋补食物、养生汤",
        dailyRoutine: "避免独处，注意安全"
    },
    {
        title: "复卦初九",
        fortune: "大吉",
        description: "不远复，无祗悔，元吉。",
        shouldDo: "宜及时改过，迷途知返。",
        avoid: "避免执迷不悟，一错再错。",
        luckyItem: "悔过符、白水晶",
        luckyColor: "白色、金色",
        luckyFood: "清新食物、悔过茶",
        dailyRoutine: "勇于认错，及时改正"
    },
    {
        title: "无妄卦六三",
        fortune: "凶",
        description: "无妄之灾，或系之牛，行人之得，邑人之灾。",
        shouldDo: "宜小心防范，避免意外之灾。",
        avoid: "避免粗心大意，疏忽大意。",
        luckyItem: "避灾符、黑曜石",
        luckyColor: "黑色、深蓝色",
        luckyFood: "安全食物、温热饮品",
        dailyRoutine: "小心谨慎，避免冒险"
    },
    {
        title: "大畜卦六五",
        fortune: "吉",
        description: "豮豕之牙，吉。",
        shouldDo: "宜自我约束，控制欲望。",
        avoid: "避免放纵自我，失去控制。",
        luckyItem: "自律符、黄玉",
        luckyColor: "黄色、橙色",
        luckyFood: "节制饮食、健康食品",
        dailyRoutine: "制定计划，严格执行"
    },
    {
        title: "颐卦初九",
        fortune: "吉",
        description: "舍尔灵龟，观我朵颐，凶。",
        shouldDo: "宜自力更生，不要依赖他人。",
        avoid: "避免贪图享乐，坐享其成。",
        luckyItem: "自立符、绿松石",
        luckyColor: "绿色、青色",
        luckyFood: "自给自足食物、劳动果实",
        dailyRoutine: "自己动手，丰衣足食"
    },
    {
        title: "坎卦九二",
        fortune: "平",
        description: "坎有险，求小得。",
        shouldDo: "宜降低期望，脚踏实地。",
        avoid: "避免好高骛远，不切实际。",
        luckyItem: "踏实符、海蓝宝",
        luckyColor: "蓝色、深蓝色",
        luckyFood: "脚踏实地食物、根茎类",
        dailyRoutine: "一步一个脚印，稳步前进"
    },
    {
        title: "离卦九三",
        fortune: "平",
        description: "日昃之离，不鼓缶而歌，则大耋之嗟，凶。",
        shouldDo: "宜乐观面对，保持积极心态。",
        avoid: "避免悲观消极，怨天尤人。",
        luckyItem: "乐观符、太阳石",
        luckyColor: "红色、橙色",
        luckyFood: "阳光食物、辛辣食品",
        dailyRoutine: "保持笑容，积极面对"
    },
    {
        title: "咸卦六二",
        fortune: "吉",
        description: "咸其腓，凶。居吉。",
        shouldDo: "宜安守本分，不要轻举妄动。",
        avoid: "避免冲动行事，不计后果。",
        luckyItem: "安分符、月光石",
        luckyColor: "月光白、淡蓝色",
        luckyFood: "清淡食物、安神茶",
        dailyRoutine: "修身养性，避免冲动"
    },
    {
        title: "恒卦六五",
        fortune: "吉",
        description: "恒其德，贞。妇人吉，夫子凶。",
        shouldDo: "宜坚守美德，持之以恒。",
        avoid: "避免半途而废，缺乏毅力。",
        luckyItem: "坚持符、红玛瑙",
        luckyColor: "红色、深红色",
        luckyFood: "持久食物、坚果类",
        dailyRoutine: "坚持锻炼，培养毅力"
    },
    {
        title: "遁卦九四",
        fortune: "平",
        description: "好遁，君子吉，小人否。",
        shouldDo: "宜审时度势，适时退避。",
        avoid: "避免盲目坚持，不知变通。",
        luckyItem: "退避符、蓝水晶",
        luckyColor: "蓝色、淡紫色",
        luckyFood: "隐退食物、清淡饮食",
        dailyRoutine: "学会退让，保存实力"
    },
    {
        title: "大壮卦九三",
        fortune: "平",
        description: "小人用壮，君子用罔。贞厉。羝羊触藩，羸其角。",
        shouldDo: "宜刚柔并济，不要恃强凌弱。",
        avoid: "避免锋芒毕露，盛气凌人。",
        luckyItem: "刚柔符、虎眼石",
        luckyColor: "黄棕色、橙色",
        luckyFood: "平衡食物、荤素搭配",
        dailyRoutine: "保持谦逊，刚柔并济"
    },
    {
        title: "晋卦六五",
        fortune: "吉",
        description: "悔亡，失得勿恤。往吉无不利。",
        shouldDo: "宜向前看，不要过于计较得失。",
        avoid: "避免患得患失，犹豫不决。",
        luckyItem: "前进符、绿幽灵",
        luckyColor: "绿色、青色",
        luckyFood: "前进食物、能量餐",
        dailyRoutine: "勇敢前行，不计较得失"
    },
    {
        title: "明夷卦初九",
        fortune: "凶",
        description: "明夷于飞，垂其翼。君子于行，三日不食。有攸往，主人有言。",
        shouldDo: "宜韬光养晦，等待时机。",
        avoid: "避免锋芒毕露，招人嫉妒。",
        luckyItem: "韬光符、黑曜石",
        luckyColor: "黑色、深灰色",
        luckyFood: "低调食物、素食",
        dailyRoutine: "低调行事，等待时机"
    },
    {
        title: "家人卦九三",
        fortune: "吉",
        description: "家人嗃嗃，悔厉吉。妇子嘻嘻，终吝。",
        shouldDo: "宜严格持家，不可过于放纵。",
        avoid: "避免溺爱家人，不加约束。",
        luckyItem: "家庭符、粉水晶",
        luckyColor: "粉色、红色",
        luckyFood: "家庭聚餐、传统美食",
        dailyRoutine: "关心家人，保持沟通"
    },
    {
        title: "睽卦九四",
        fortune: "平",
        description: "睽孤，遇元夫，交孚，厉无咎。",
        shouldDo: "宜寻求合作，化解分歧。",
        avoid: "避免孤立无援，固执己见。",
        luckyItem: "合作符、青金石",
        luckyColor: "青色、蓝色",
        luckyFood: "合作餐、共享食物",
        dailyRoutine: "主动合作，化解矛盾"
    },
    {
        title: "蹇卦九五",
        fortune: "平",
        description: "大蹇朋来。",
        shouldDo: "宜寻求帮助，共度难关。",
        avoid: "避免一意孤行，拒绝援助。",
        luckyItem: "求助符、紫水晶",
        luckyColor: "紫色、深蓝色",
        luckyFood: "求助食物、朋友聚餐",
        dailyRoutine: "主动求助，接受帮助"
    },
    {
        title: "解卦九二",
        fortune: "吉",
        description: "田获三狐，得黄矢，贞吉。",
        shouldDo: "宜抓住机会，解决问题。",
        avoid: "避免犹豫不决，错失良机。",
        luckyItem: "机会符、黄水晶",
        luckyColor: "黄色、金色",
        luckyFood: "机遇食物、应季水果",
        dailyRoutine: "保持警觉，抓住机会"
    },
    {
        title: "损卦六三",
        fortune: "平",
        description: "三人行，则损一人；一人行，则得其友。",
        shouldDo: "宜精简团队，注重质量。",
        avoid: "避免人浮于事，效率低下。",
        luckyItem: "精简符、白水晶",
        luckyColor: "白色、淡灰色",
        luckyFood: "精简食物、轻食",
        dailyRoutine: "精简事务，提高效率"
    },
    {
        title: "益卦六二",
        fortune: "吉",
        description: "或益之十朋之龟，弗克违，永贞吉。王用享于帝，吉。",
        shouldDo: "宜接受帮助，知恩图报。",
        avoid: "避免拒绝好意，孤芳自赏。",
        luckyItem: "感恩符、粉晶",
        luckyColor: "粉色、淡红色",
        luckyFood: "感恩食物、分享餐",
        dailyRoutine: "学会感恩，回馈社会"
    },
    {
        title: "夬卦初九",
        fortune: "吉",
        description: "壮于前趾，往不胜为吝。",
        shouldDo: "宜谨慎行动，不要盲目冒进。",
        avoid: "避免轻举妄动，不自量力。",
        luckyItem: "谨慎符、红玛瑙",
        luckyColor: "红色、深红色",
        luckyFood: "谨慎食物、易消化食品",
        dailyRoutine: "深思熟虑，谨慎行动"
    },
    {
        title: "萃卦六二",
        fortune: "吉",
        description: "引吉，无咎。孚乃利用禴。",
        shouldDo: "宜团结他人，凝聚力量。",
        avoid: "避免离心离德，各自为政。",
        luckyItem: "团结符、绿幽灵",
        luckyColor: "绿色、青色",
        luckyFood: "团结餐、集体活动",
        dailyRoutine: "凝聚团队，共同进步"
    },
    {
        title: "升卦六四",
        fortune: "吉",
        description: "王用亨于岐山，吉无咎。",
        shouldDo: "宜循序渐进，稳步上升。",
        avoid: "避免急于求成，急功近利。",
        luckyItem: "晋升符、黄水晶",
        luckyColor: "黄色、金色",
        luckyFood: "上升食物、营养均衡",
        dailyRoutine: "稳步前进，厚积薄发"
    },
    {
        title: "困卦九二",
        fortune: "平",
        description: "困于酒食，朱绂方来，利用亨祀。征凶，无咎。",
        shouldDo: "宜安于现状，等待转机。",
        avoid: "避免强行突破，适得其反。",
        luckyItem: "脱困符、蓝水晶",
        luckyColor: "蓝色、淡紫色",
        luckyFood: "安神食物、静心茶",
        dailyRoutine: "耐心等待，寻找机会"
    },
    {
        title: "井卦九三",
        fortune: "吉",
        description: "井渫不食，为我心恻。可用汲。王明，并受其福。",
        shouldDo: "宜修身养性，提升自我价值。",
        avoid: "避免自暴自弃，不思进取。",
        luckyItem: "修身符、海蓝宝",
        luckyColor: "蓝色、青色",
        luckyFood: "修身食物、清淡饮食",
        dailyRoutine: "自我提升，充实内在"
    },
    {
        title: "革卦六二",
        fortune: "吉",
        description: "已日乃革之，征吉，无咎。",
        shouldDo: "宜把握时机，进行变革。",
        avoid: "避免犹豫不决，错失良机。",
        luckyItem: "变革符、红玛瑙",
        luckyColor: "红色、橙色",
        luckyFood: "变革食物、创新料理",
        dailyRoutine: "勇于变革，突破自我"
    },
    {
        title: "鼎卦六五",
        fortune: "大吉",
        description: "鼎黄耳金铉，利贞。",
        shouldDo: "宜守正出奇，创新发展。",
        avoid: "避免墨守成规，固步自封。",
        luckyItem: "创新符、黄玉",
        luckyColor: "黄色、金色",
        luckyFood: "创新食物、精致料理",
        dailyRoutine: "守正出奇，开拓创新"
    },
    {
        title: "震卦初九",
        fortune: "平",
        description: "震来虩虩，后笑言哑哑，吉。",
        shouldDo: "宜勇敢面对困难，保持乐观。",
        avoid: "避免惊慌失措，失去方寸。",
        luckyItem: "勇气符、虎眼石",
        luckyColor: "橙色、黄色",
        luckyFood: "勇气食物、辛辣食品",
        dailyRoutine: "勇敢面对，保持乐观"
    },
    {
        title: "艮卦初六",
        fortune: "吉",
        description: "艮其趾，无咎，利永贞。",
        shouldDo: "宜适可而止，不要过度追求。",
        avoid: "避免贪得无厌，不知满足。",
        luckyItem: "知足符、白水晶",
        luckyColor: "白色、淡粉色",
        luckyFood: "知足食物、简单饮食",
        dailyRoutine: "知足常乐，适可而止"
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

// 初始化函数 - 为主页提供调用接口
function initFortuneTelling() {
    // 查找所有小程序卡片
    const miniProgramCards = document.querySelectorAll('.mini-program-card');
    
    miniProgramCards.forEach(card => {
        const nameElement = card.querySelector('.mini-program-name');
        if (nameElement && nameElement.textContent.trim() === '卜上一卦') {
            card.addEventListener('click', function(e) {
                e.preventDefault(); // 阻止默认跳转
                e.stopPropagation();
                showFortuneTelling(); // 显示卦象
            });
        }
    });
}

// 显示卦象弹窗
function showFortuneTelling() {
    // 创建弹窗元素
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
        z-index: 1000;
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
                "><strong>吉祥物品：</strong>${fortune.luckyItem}</p>
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
                    background-color: rgba(52, 152, 219, 0.1);
                    border-radius: 6px;
                    color: #2874a6;
                    line-height: 1.3;
                    font-size: 0.9rem;
                "><strong>建议作息：</strong>${fortune.dailyRoutine}</p>
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
}

// 导出初始化函数，供主页调用
window.initFortuneTelling = initFortuneTelling;
