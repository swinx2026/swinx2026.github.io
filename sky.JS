// 定义查询函数
function getFortune(starName) {
  // 1. 准备API地址和参数
  const apiUrl = "http://v.juhe.cn/toutiao/index"; // 接口地址
  const params = new URLSearchParams({
    type: "today", // 今日运势
    star: starName, // 星座名称（如"白羊座"）
  });

  // 2. 发送GET请求（拼接参数到URL）
  fetch(`${apiUrl}?${params}`)
    .then((response) => {
      // 3. 解析响应（API返回JSON格式，需转成JS对象）
      if (!response.ok) {
        throw new Error("API请求失败"); // 处理404、500等错误
      }
      return response.json();
    })
    .then((data) => {
      // 4. 处理返回的数据（根据API文档提取字段）
      if (data.success) {
        console.log("星座数据：", data.data);
        // 渲染到页面（示例：更新DOM）
        document.getElementById("love-fortune").textContent = data.data.love;
      } else {
        console.error("API返回错误：", data.msg);
      }
    })
    .catch((error) => {
      // 5. 捕获网络错误（如断网、跨域问题）
      console.error("请求出错：", error);
    });
}

// 调用函数（查询白羊座今日运势）
getFortune("白羊座");