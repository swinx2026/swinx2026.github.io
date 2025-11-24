// 灵丹妙药游戏模块

// 游戏状态
let gameState = {
    timer: 30,
    score: 0,
    collectedIngredients: [],
    isGameActive: false,
    currentIngredient: null,
    gameInterval: null
};

// 药材数据
const ingredients = [
    { name: "草药", img: "pic/X5.png", value: 5 },
    { name: "灵芝", img: "pic/X6.png", value: 15 },
    { name: "人参", img: "pic/X7.png", value: 25 },
    { name: "雪莲", img: "pic/X8.png", value: 40 },
    { name: "千年首乌", img: "pic/X9.png", value: 60 }
];

// 丹药配方
const pillRecipes = [
    { name: "小还丹", ingredients: ["草药", "灵芝"], required: 2, value: 30 },
    { name: "大还丹", ingredients: ["灵芝", "人参"], required: 2, value: 70 },
    { name: "菩提丹", ingredients: ["雪莲", "千年首乌"], required: 2, value: 150 }
];

// 初始化游戏
function initPillGame() {
    // 绑定事件
    const pillGameCard = document.getElementById('pill-game-card');
    const modal = document.getElementById('pill-game-modal');
    const closeBtn = document.getElementById('close-pill-game');
    const collectBtn = document.getElementById('collect-button');
    const makePillBtn = document.getElementById('make-pill-button');
    const restartBtn = document.getElementById('restart-button');

    // 打开游戏模态框
    if (pillGameCard) {
        pillGameCard.addEventListener('click', function(e) {
            e.preventDefault();
            showPillGameModal();
        });
    }

    // 关闭模态框
    if (closeBtn) {
        closeBtn.addEventListener('click', hidePillGameModal);
    }

    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            hidePillGameModal();
        }
    });

    // 采集药材
    if (collectBtn) {
        collectBtn.addEventListener('click', collectIngredient);
    }

    // 炼制丹药
    if (makePillBtn) {
        makePillBtn.addEventListener('click', makePill);
    }

    // 重新开始
    if (restartBtn) {
        restartBtn.addEventListener('click', startNewGame);
    }

    // 初始化游戏显示
    updateGameDisplay();
    showRandomIngredient();
}

// 显示游戏模态框
function showPillGameModal() {
    const modal = document.getElementById('pill-game-modal');
    if (modal) {
        modal.style.display = 'block';
        startNewGame();
    }
}

// 隐藏游戏模态框
function hidePillGameModal() {
    const modal = document.getElementById('pill-game-modal');
    if (modal) {
        modal.style.display = 'none';
        stopGame();
    }
}

// 开始新游戏
function startNewGame() {
    // 重置游戏状态
    gameState.timer = 30;
    gameState.score = 0;
    gameState.collectedIngredients = [];
    gameState.isGameActive = true;
    
    updateGameDisplay();
    showRandomIngredient();
    
    // 清除旧的计时器
    if (gameState.gameInterval) {
        clearInterval(gameState.gameInterval);
    }
    
    // 启动计时器
    gameState.gameInterval = setInterval(function() {
        gameState.timer--;
        updateGameDisplay();
        
        // 时间到，结束游戏
        if (gameState.timer <= 0) {
            stopGame();
        }
    }, 1000);
}

// 停止游戏
function stopGame() {
    gameState.isGameActive = false;
    if (gameState.gameInterval) {
        clearInterval(gameState.gameInterval);
        gameState.gameInterval = null;
    }
    
    showGameResult();
}

// 随机显示药材
function showRandomIngredient() {
    const randomIndex = Math.floor(Math.random() * ingredients.length);
    gameState.currentIngredient = ingredients[randomIndex];
    
    const ingredientDisplay = document.getElementById('current-ingredient');
    if (ingredientDisplay) {
        ingredientDisplay.src = gameState.currentIngredient.img;
        ingredientDisplay.alt = gameState.currentIngredient.name;
    }
}

// 采集药材
function collectIngredient() {
    if (!gameState.isGameActive || !gameState.currentIngredient) return;
    
    // 采集当前药材
    gameState.collectedIngredients.push(gameState.currentIngredient.name);
    gameState.score += gameState.currentIngredient.value;
    
    updateGameDisplay();
    showRandomIngredient();
}

// 炼制丹药
function makePill() {
    if (!gameState.isGameActive || gameState.collectedIngredients.length === 0) return;
    
    // 检查是否有匹配的配方
    const resultDiv = document.getElementById('game-result');
    let madePill = null;
    
    // 遍历所有配方
    for (const recipe of pillRecipes) {
        // 检查所需药材是否都已采集
        const hasAllIngredients = recipe.ingredients.every(ing => gameState.collectedIngredients.includes(ing));
        
        // 检查所需数量是否足够
        const ingredientCount = {};
        gameState.collectedIngredients.forEach(ing => {
            ingredientCount[ing] = (ingredientCount[ing] || 0) + 1;
        });
        
        const hasEnough = recipe.ingredients.every(ing => (ingredientCount[ing] || 0) >= 1);
        
        if (hasAllIngredients && hasEnough) {
            madePill = recipe;
            break;
        }
    }
    
    if (madePill) {
        // 消耗药材
        madePill.ingredients.forEach(ing => {
            const index = gameState.collectedIngredients.indexOf(ing);
            if (index > -1) {
                gameState.collectedIngredients.splice(index, 1);
            }
        });
        
        // 增加积分
        gameState.score += madePill.value;
        updateGameDisplay();
        
        // 显示炼制成功
        if (resultDiv) {
            resultDiv.innerHTML = `&nbsp;&nbsp;✦ 成功炼制【${madePill.name}】! +${madePill.value}积分`;
            resultDiv.style.color = "#27ae60";
            setTimeout(() => resultDiv.innerHTML = "", 2000);
        }
    } else {
        // 显示炼制失败
        if (resultDiv) {
            resultDiv.innerHTML = "&nbsp;&nbsp;✗ 药材不足，无法炼制丹药";
            resultDiv.style.color = "#c0392b";
            setTimeout(() => resultDiv.innerHTML = "", 1500);
        }
    }
}

// 更新游戏显示
function updateGameDisplay() {
    // 更新计时器
    const timerDisplay = document.getElementById('game-timer');
    if (timerDisplay) {
        timerDisplay.textContent = gameState.timer;
    }
    
    // 更新积分
    const scoreDisplay = document.getElementById('game-score');
    if (scoreDisplay) {
        scoreDisplay.textContent = gameState.score;
    }
    
    // 更新已采集药材
    const collectedDisplay = document.getElementById('collected-ingredients');
    if (collectedDisplay) {
        if (gameState.collectedIngredients.length === 0) {
            collectedDisplay.innerHTML = "无";
        } else {
            // 统计每种药材的数量
            const ingredientCount = {};
            gameState.collectedIngredients.forEach(ing => {
                ingredientCount[ing] = (ingredientCount[ing] || 0) + 1;
            });
            
            // 生成显示内容
            collectedDisplay.innerHTML = Object.entries(ingredientCount)
                .map(([name, count]) => `${name} × ${count}`)
                .join('<br>');
        }
    }
}

// 显示游戏结果
function showGameResult() {
    const resultDiv = document.getElementById('game-result');
    if (resultDiv) {
        let resultText = "游戏结束!\n";
        resultText += `最终积分: ${gameState.score}\n`;
        
        // 统计炼制的丹药数量
        let totalPills = 0;
        let bestPill = "无";
        let bestValue = 0;
        
        for (const recipe of pillRecipes) {
            const madeCount = Math.floor(gameState.collectedIngredients.filter(ing => recipe.ingredients.includes(ing)).length / 2);
            totalPills += madeCount;
            
            if (recipe.value > bestValue) {
                bestValue = recipe.value;
                bestPill = recipe.name;
            }
        }
        
        resultText += `炼制丹药: ${totalPills}颗\n`;
        if (totalPills > 0) {
            resultText += `最高价值丹药: ${bestPill}`;
        }
        
        resultDiv.innerHTML = resultText.replace(/\n/g, '<br>');
        resultDiv.style.color = "#d7b46a";
    }
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', initPillGame);