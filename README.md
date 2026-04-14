# 🎯 言论抗压测试系统

一个前端 Web 应用，帮助用户测试和分析他们对互联网言论的抗压能力。

![](https://img.shields.io/badge/License-MIT-blue.svg)
![](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![](https://img.shields.io/badge/Status-Active-green.svg)

---

## 📌 项目概述

**言论抗压测试** 是一个交互式心理评估工具，通过 20 道精心设计的题目，从 6 个维度分析用户对网络言论的抗压能力。系统生成详细的个性化报告，包括：

- **抗压等级评定**（5 个等级）
- **6 维度能力分析**（包括雷达图可视化）
- **个性标签识别**（10+ 种类型）
- **改进建议**（针对性的提升方向）
- **分享功能**（保存和分享测试结果）

---

## 🗂️ 项目结构

```
speech-stress-test/
├── index.html           # 首页（欢迎 + 开始测试）
├── test.html            # 测试题目页面
├── result.html          # 结果展示页面
├── css/
│   ├── global.css       # 全局变量、重置、排版、动画
│   ├── home.css         # 首页样式
│   ├── test.css         # 题目页样式
│   └── result.css       # 结果页样式
├── js/
│   ├── questions.js     # 题库数据（30道题）
│   ├── engine.js        # 计分引擎 + 维度计算逻辑
│   ├── test.js          # 测试流程控制
│   ├── result.js        # 结果解析 + 渲染
│   └── radar.js         # 雷达图绘制（Canvas）
└── README.md            # 项目说明
```

---

## 🚀 快速开始

### 本地运行

```bash
# 方法1：使用 Python 内置服务器
python -m http.server 8000

# 方法2：使用 Node.js http-server
npx http-server

# 方法3：使用 VS Code Live Server 扩展
# 右键 index.html → Open with Live Server
```

然后在浏览器中打开 `http://localhost:8000`

### 部署到线上

**推荐平台：**
- **Vercel**（推荐，部署速度快）
  ```bash
  npm i -g vercel
  vercel
  ```
- **Netlify**
  - 连接 GitHub 仓库，自动部署
- **GitHub Pages**
  - 推送到 `gh-pages` 分支

---

## 🧪 测试体验

### 完整流程

1. **首页**：了解测试介绍，点击"开始测试"
2. **测试页**：
   - 20 道题，每题包含场景 + 言论 + 4 个反应选项
   - 支持键盘快捷键（1-4）快速选择
   - 支持"跳过此题"功能
   - 实时进度条显示
3. **结果页**：
   - 抗压等级卡（动画展示）
   - 6 维度雷达图（动画绘制）
   - 人格标签 + 建议
   - 各维度得分详解
   - 分享文本一键复制

### 样本题目

**引战型言论：**
> "哈哈你这编程水平就这样啊？连基础数据结构都没整明白..."

**犯蠢型言论：**
> "5G 会传播病毒！我朋友的朋友就是装了 5G 后生病了..."

**阴阳怪气型言论：**
> "哇，真是太勤快了呢，不过这种社畜生活真的值得炫耀吗？"

**群体攻击型言论：**
> "（全网 1000 万人口诛笔伐）滚出娱乐圈！..."

**颠倒黑白型言论：**
> "你这样理解真的太偏激了。我原本的意思完全是另外一个..."

**鸡蛋挑骨头型言论：**
> "你说'很多人'，怎么知道是很多？有具体数字吗？..."

---

## 📊 维度说明

| 维度 | 符号 | 说明 |
|------|------|------|
| 总抗压力 | 🧠 | 对网络言论的总体承受能力 |
| 逻辑自洽 | 📐 | 论证清晰、识别谬误的能力 |
| 情绪稳定 | 😌 | 在压力下保持冷静的能力 |
| 自我认知 | 🪞 | 了解自己反应模式的程度 |
| 读人能力 | 👁️ | 识别他人意图、洞察心理的能力 |
| 断联能力 | 🔌 | 主动停止无效对话的能力 |

---

## 🎭 人格标签

系统会根据维度组合生成 10+ 种人格标签，例如：

- **理性堡垒型**：逻辑清晰，情绪稳定
- **愤怒辩手型**：善于论证，容易激怒
- **超然旁观者**：高度断离，自知之明强
- **深渊凝视者**：容易陷入情绪漩涡
- **网络心理医生型**：善于读人，能调解纷争
- **理想战士型**：各项能力均衡发展
- ...等等

---

## 🛠️ 技术栈

- **语言**：Vanilla JavaScript (ES6+)
- **样式**：CSS3 + CSS 变量
- **图表**：Canvas API（手写雷达图）
- **存储**：localStorage（保存测试答案和历史）
- **动画**：CSS Keyframes + RequestAnimationFrame
- **字体**：Google Fonts (Noto Sans SC, JetBrains Mono)

---

## 🎨 设计系统

### 色彩系统

```css
--bg-primary: #0d0d14           /* 主背景 */
--bg-secondary: #13131f         /* 次背景 */
--bg-card: #1a1a2e              /* 卡片背景 */
--accent-primary: #ff4757       /* 主强调色（压力红） */
--accent-secondary: #2ed573     /* 次强调色（抗压绿） */
--accent-tertiary: #ffa502      /* 警告橙 */
--accent-blue: #1e90ff          /* 信息蓝 */
```

### 设计主题

"互联网战争室"风格，视觉上传达数据终端、网络冲突的紧张感，但整体仍保持可读性和舒适度。

---

## 💾 数据存储

### localStorage 结构

```json
{
  "stressTestAnswers": {
    "answers": [
      { "questionId": 1, "selectedOptionIndex": 0 },
      ...
    ],
    "timestamp": 1713000000000,
    "version": 1
  },
  "stressTestHistory": [
    { "answers": [...], "timestamp": ... },
    { "answers": [...], "timestamp": ... },
    { "answers": [...], "timestamp": ... }
  ]
}
```

**说明：**
- 每次完成测试自动保存结果
- 最多保留 3 次历史记录
- 刷新页面不会丢失未完成的测试（sessionStorage）

---

## ♿ 无障碍特性

- ✅ 完整的 ARIA 标签
- ✅ 键盘导航支持（Tab、Enter、数字键）
- ✅ 高对比度色彩方案
- ✅ 聚焦状态明显
- ✅ 屏幕阅读器友好

---

## 📱 响应式设计

### 断点

- **Desktop:** ≥ 1024px — 完整功能
- **Tablet:** 640px - 1023px — 适配布局
- **Mobile:** < 640px — 单列、大触摸区域

### 移动端特性

- 触摸友好的按钮大小（最小 44x44px）
- 雷达图自适应缩放（280x280px on mobile）
- 字体大小自动调整
- 隐藏非必需的附加信息

---

## 🔧 开发指南

### 添加新题目

编辑 `js/questions.js`：

```javascript
{
  id: 31,
  scene: "新的场景描述",
  statement: "新的言论内容",
  type: "baiting", // 6种类型之一
  options: [
    {
      label: "选项1",
      score: { 
        resilience: 1, 
        logicDefense: 0, 
        emotionControl: -1,
        selfAwareness: 0,
        socialReading: 1,
        disengagement: 1
      }
    },
    // ... 4个选项
  ]
}
```

### 修改计分逻辑

编辑 `js/engine.js` 中的 `getStressLevel()` 或 `getPersonalityTag()` 函数。

### 自定义样式

在 `css/global.css` 中修改 CSS 变量。

---

## 🐛 已知问题 & TODO

### Known Issues
- [ ] Safari 上某些 CSS 动画可能不流畅
- [ ] 网络较差时图表绘制可能延迟

### 未来计划
- [ ] 多语言支持（英文、日文等）
- [ ] 社交分享集成（微信、微博、Twitter）
- [ ] 详细报告付费版本
- [ ] 团队对比报告（企业版）
- [ ] 动态题库更新系统
- [ ] 用户账户系统

---

## 📄 许可证

MIT License © 2026

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 📞 联系方式

- 🐛 报告问题：[GitHub Issues](#)
- 💬 讨论想法：[Discussions](#)
- 📧 联系作者：copilot@github.com

---

## 🎓 学习资源

- [Canvas API 文档](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [ARIA 无障碍指南](https://www.w3.org/WAI/ARIA/apg/)
- [CSS 动画最佳实践](https://web.dev/css-animations/)

---

**🌟 如果觉得这个项目有帮助，请给一个 Star！**
