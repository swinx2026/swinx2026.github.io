// 人物信息模块

// 人物数据
const characterData = {
    name: "修仙者",
    level: 1,
    experience: 0,
    maxExperience: 100,
    wealth: {
        gold: 100,
        silver: 500,
        copper: 1000
    },
    cultivation: {
        stage: "炼气期",
        level: 1,
        progress: 0
    },
    skills: [
        {
            name: "基础剑法",
            level: 1,
            type: "攻击"
        },
        {
            name: "吐纳术",
            level: 1,
            type: "防御"
        }
    ],
    equipment: {
        weapon: "木剑",
        armor: "布衣",
        accessory: "无"
    },
    attributes: {
        attack: 10,
        defense: 5,
        speed: 3,
        intelligence: 2
    },
    inventory: [
        {
            name: "草药",
            quantity: 5
        },
        {
            name: "面包",
            quantity: 3
        }
    ]
};

// 初始化人物信息功能
// 初始化人物信息功能
// 查找"人物信息"按钮并添加点击事件
const characterInfoCard = document.getElementById('character-info-card');
console.log('Character Info Card:', characterInfoCard);
if (characterInfoCard) {
    characterInfoCard.addEventListener('click', function(e) {
        console.log('Character Info Button Clicked');
        e.preventDefault();
        showCharacterInfoModal();
    });
}

// 关闭按钮事件
const closeBtn = document.getElementById('close-character-info');
if (closeBtn) {
    closeBtn.addEventListener('click', hideCharacterInfoModal);
}

// 点击模态框外部关闭
window.addEventListener('click', function(e) {
    const modal = document.getElementById('character-info-modal');
    if (modal && e.target === modal) {
        hideCharacterInfoModal();
    }
});

// 显示人物信息模态框
function showCharacterInfoModal() {
    const modal = document.getElementById('character-info-modal');
    console.log('Character Info Modal:', modal);
    if (modal) {
        console.log('Modal display before:', modal.style.display);
        modal.style.display = 'block';
        console.log('Modal display after:', modal.style.display);
        renderCharacterInfo();
    }
}

// 隐藏人物信息模态框
function hideCharacterInfoModal() {
    const modal = document.getElementById('character-info-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// 渲染人物信息
function renderCharacterInfo() {
    const contentDiv = document.getElementById('character-info-content');
    console.log('Content Div:', contentDiv);
    if (!contentDiv) {
        console.error('Content Div not found!');
        return;
    }
    
    // 使用模板字符串构建HTML
    contentDiv.innerHTML = `
        <div class="character-info-container">
            <div class="character-header">
                <div class="character-name">${characterData.name}</div>
                <div class="character-level">等级: ${characterData.level}</div>
                <div class="experience-bar">
                    <div class="experience-fill" style="width: ${(characterData.experience / characterData.maxExperience) * 100}%"></div>
                    <span class="experience-text">${characterData.experience}/${characterData.maxExperience} 经验</span>
                </div>
            </div>
            
            <div class="character-stats">
                <div class="stat-section">
                    <h3>财富</h3>
                    <div class="wealth-info">
                        <div>金币: ${characterData.wealth.gold}</div>
                        <div>银币: ${characterData.wealth.silver}</div>
                        <div>铜币: ${characterData.wealth.copper}</div>
                    </div>
                </div>
                
                <div class="stat-section">
                    <h3>修炼境界</h3>
                    <div class="cultivation-info">
                        <div>${characterData.cultivation.stage} 第 ${characterData.cultivation.level} 层</div>
                        <div class="cultivation-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${characterData.cultivation.progress}%"></div>
                            </div>
                            <span>${characterData.cultivation.progress}% 进度</span>
                        </div>
                    </div>
                </div>
                
                <div class="stat-section">
                    <h3>属性</h3>
                    <div class="attributes-info">
                        <div class="attribute-item">攻击: ${characterData.attributes.attack}</div>
                        <div class="attribute-item">防御: ${characterData.attributes.defense}</div>
                        <div class="attribute-item">速度: ${characterData.attributes.speed}</div>
                        <div class="attribute-item">智力: ${characterData.attributes.intelligence}</div>
                    </div>
                </div>
                
                <div class="stat-section">
                    <h3>技能</h3>
                    <div class="skills-info">
                        ${characterData.skills.map(skill => `
                            <div class="skill-item">
                                <div class="skill-name">${skill.name}</div>
                                <div class="skill-level">等级: ${skill.level}</div>
                                <div class="skill-type">类型: ${skill.type}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="stat-section">
                    <h3>装备</h3>
                    <div class="equipment-info">
                        <div>武器: ${characterData.equipment.weapon}</div>
                        <div>防具: ${characterData.equipment.armor}</div>
                        <div>饰品: ${characterData.equipment.accessory}</div>
                    </div>
                </div>
                
                <div class="stat-section">
                    <h3>背包</h3>
                    <div class="inventory-info">
                        ${characterData.inventory.map(item => `
                            <div class="inventory-item">
                                ${item.name} x ${item.quantity}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 更新人物经验
function updateExperience(amount) {
    characterData.experience += amount;
    if (characterData.experience >= characterData.maxExperience) {
        characterData.level++;
        characterData.experience -= characterData.maxExperience;
        characterData.maxExperience *= 1.5;
        // 可以添加升级提示或其他逻辑
    }
    renderCharacterInfo();
}

// 更新修炼进度
function updateCultivationProgress(amount) {
    characterData.cultivation.progress += amount;
    if (characterData.cultivation.progress >= 100) {
        characterData.cultivation.level++;
        characterData.cultivation.progress = 0;
        // 可以添加突破提示或其他逻辑
    }
    renderCharacterInfo();
}

// 更新财富
function updateWealth(type, amount) {
    if (characterData.wealth[type] !== undefined) {
        characterData.wealth[type] += amount;
        renderCharacterInfo();
    }
}

// 添加技能
function addSkill(skillName, skillType) {
    characterData.skills.push({
        name: skillName,
        level: 1,
        type: skillType
    });
    renderCharacterInfo();
}

// 更新装备
function updateEquipment(type, itemName) {
    if (characterData.equipment[type] !== undefined) {
        characterData.equipment[type] = itemName;
        renderCharacterInfo();
    }
}