const fs = require('fs');

// 读取文件内容
fs.readFile('e:\XRZL\X\fortune_telling.js', 'utf8', (err, data) => {
    if (err) {
        console.error('读取文件错误:', err);
        return;
    }

    // 定义财运方位列表
    const directions = ['西北', '西南', '正东', '东南', '正北', '正南', '东北', '正西'];

    // 匹配 fortuneQuotes 数组
    const regex = /const fortuneQuotes = \[(.*?)\];/s;
    const match = data.match(regex);
    if (!match) {
        console.error('未找到 fortuneQuotes 数组');
        return;
    }

    // 解析数组内容
    let fortuneQuotes = JSON.parse(`[${match[1]}]`);

    // 更新每个卦签
    fortuneQuotes = fortuneQuotes.map((item, index) => {
        // 删除建议作息字段
        const { dailyRoutine, ...newItem } = item;
        // 添加财运方位字段
        newItem.fortuneDirection = directions[index % directions.length];
        return newItem;
    });

    // 将数组转换回字符串
    const updatedArray = JSON.stringify(fortuneQuotes, null, 4);

    // 替换原数组内容
    const updatedData = data.replace(regex, `const fortuneQuotes = ${updatedArray};`);

    // 写入文件
    fs.writeFile('e:\XRZL\X\fortune_telling.js', updatedData, 'utf8', (err) => {
        if (err) {
            console.error('写入文件错误:', err);
            return;
        }
        console.log('更新完成');
    });
});