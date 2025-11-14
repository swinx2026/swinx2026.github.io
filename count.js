const fs = require('fs');

fs.readFile('fortune_telling.js', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // 匹配fortuneQuotes数组中的对象数
  const matches = data.match(/\{\s*title:/g);
  console.log('fortuneQuotes数组对象数量:', matches ? matches.length : 0);
});
