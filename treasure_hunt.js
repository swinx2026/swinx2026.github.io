// 法宝获取小程序功能

/**
 * 初始化法宝获取小程序 (PS大师网资源)
 */
function initTreasureHunt() {
    // 获取法宝获取卡片元素
    const treasureCard = document.getElementById('treasure-hunt-card');
    if (!treasureCard) return;
    
    // 绑定点击事件
    treasureCard.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认的链接行为
        showTreasureHuntModal();
    });
}

/**
 * 显示法宝获取弹窗
 */
function showTreasureHuntModal() {
    // 创建弹窗背景遮罩
    const modal = document.createElement('div');
    modal.style.cssText = `
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
    const container = document.createElement('div');
    container.style.cssText = `
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        width: 90%;
        max-width: 800px;
        height: 80vh;
        max-height: 600px;
        position: relative;
        overflow: hidden;
    `;
    
    // 创建标题
    const title = document.createElement('h2');
    title.textContent = '法宝获取';
    title.style.cssText = `
        text-align: center;
        font-size: 1.3rem;
        margin: 10px 0;
        color: #66462a;
        font-weight: 600;
        padding: 10px;
        border-bottom: 1px solid #eee;
    `;
    
    // 创建关闭按钮
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 15px;
        background-color: rgba(255, 255, 255, 0.8);
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-size: 18px;
        cursor: pointer;
        color: #66462a;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
        z-index: 10;
    `;
    
    // 创建iframe容器
    const iframeContainer = document.createElement('div');
    iframeContainer.style.cssText = `
        width: 100%;
        height: calc(100% - 70px);
        overflow: hidden;
    `;
    
    // 创建iframe并加载指定URL
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.psdashi.com/';
    iframe.style.cssText = `
        width: 100%;
        height: 100%;
        border: none;
    `;
    iframe.allow = 'fullscreen';
    
    // 组装DOM结构
    iframeContainer.appendChild(iframe);
    container.appendChild(title);
    container.appendChild(closeButton);
    container.appendChild(iframeContainer);
    modal.appendChild(container);
    document.body.appendChild(modal);
    
    // 关闭按钮事件
    closeButton.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // 点击外部关闭
    modal.addEventListener('click', function(e) {
        // 只有当点击的是modal本身（背景遮罩）而不是内部的container时，才关闭弹窗
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
            // 移除事件监听器
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
}

// 导出初始化函数，供主页调用
window.initTreasureHunt = initTreasureHunt;