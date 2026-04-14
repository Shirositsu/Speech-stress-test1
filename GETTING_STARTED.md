# 🚀 快速启动指南

## 本地开发

### 方法 1：Python （推荐）

```bash
cd speech-stress-test
python -m http.server 8000
```

然后打开浏览器访问 `http://localhost:8000`

### 方法 2：Node.js

```bash
# 全局安装 http-server
npm install -g http-server

# 启动服务器
http-server -p 8000
```

### 方法 3：VS Code Live Server

1. 在 VS Code 中安装 "Live Server" 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

---

## 项目文件说明

### HTML 页面
- **index.html** - 首页，包含项目介绍和开始按钮
- **test.html** - 测试页面，显示题目和选项
- **result.html** - 结果页面，显示得分和分析报告

### JavaScript 模块
- **js/questions.js** - 30道测试题库
- **js/engine.js** - 计分算法和人格分析
- **js/test.js** - 测试流程控制
- **js/result.js** - 结果页面渲染
- **js/radar.js** - Canvas 雷达图绘制

### CSS 样式
- **css/global.css** - 全局设计系统、动画、无障碍
- **css/home.css** - 首页样式
- **css/test.css** - 测试页样式
- **css/result.css** - 结果页样式

---

## 核心功能

### ✨ 特色
- 📊 6 维度能力评估
- 🎭 10+ 种人格标签
- 📈 动画雷达图可视化
- 🎨 现代深色 UI 设计
- ♿ 完整的无障碍支持
- 📱 响应式移动端适配
- ⌨️ 键盘快捷键支持
- 💾 本地数据存储（无需后端）

### 🎯 测试流程
1. 用户进入首页，了解测试说明
2. 点击"开始测试"进入测试页
3. 回答 20 道题目（每题 4 个选项）
4. 自动跳转到结果页面
5. 查看详细分析报告并分享

---

## 数据流

```
首页 (index.html)
  ↓
开始测试
  ↓
测试页 (test.html)
  ├── 加载题库 (questions.js)
  ├── 保存答案到 sessionStorage
  └── 显示进度条
  ↓
完成20题
  ↓
结果页 (result.html)
  ├── 读取答案
  ├── 计分 (engine.js)
  ├── 渲染结果 (result.js)
  ├── 绘制雷达图 (radar.js)
  └── 保存到 localStorage
  ↓
分享或重新测试
```

---

## 自定义修改

### 修改题目
编辑 `js/questions.js`，每个题目对象包含：
- `id` - 题号 (1-30)
- `scene` - 场景描述
- `statement` - 言论内容
- `type` - 言论类型（baiting/stupidity/sarcasm/dogpiling/gaslighting/nitpicking）
- `options` - 4 个选项，每个有标签和维度评分

### 修改样式
编辑 `css/global.css` 中的 CSS 变量：
```css
--accent-primary: #ff4757;    /* 主强调色 */
--bg-primary: #0d0d14;        /* 背景色 */
```

### 修改计分规则
编辑 `js/engine.js` 中的函数：
- `calculateScores()` - 计算维度分数
- `getStressLevel()` - 确定抗压等级
- `getPersonalityTag()` - 生成人格标签

---

## 上线部署

### Vercel（推荐）
```bash
npm i -g vercel
vercel
```

### Netlify
1. 连接 GitHub 仓库
2. 自动部署并获得域名

### GitHub Pages
```bash
git branch -M main
git push -u origin main
```
然后在Settings中启用GitHub Pages

---

## 浏览器兼容性

| 浏览器 | 支持 | 备注 |
|------|------|------|
| Chrome | ✅ | 完全支持 |
| Firefox | ✅ | 完全支持 |
| Safari | ✅ | 需要 iOS 15+ |
| Edge | ✅ | 完全支持 |
| IE 11 | ❌ | 不支持 |

---

## 性能优化建议

- 启用 Gzip 压缩
- 使用 CDN 加速字体加载
- 考虑代码分割（如果未来添加更多功能）
- 监听 Web Vitals（Lighthouse 评分）

---

## 调试技巧

### 检查保存的数据
在浏览器控制台运行：
```javascript
JSON.parse(localStorage.getItem('stressTestAnswers'))
JSON.parse(localStorage.getItem('stressTestHistory'))
```

### 清除所有数据
```javascript
localStorage.clear()
sessionStorage.clear()
```

### 模拟不同的答案
编辑 `js/test.js` 中的 `TestSession` 类进行测试

---

## 常见问题

**Q: 为什么我的进度丢失了？**
A: 检查浏览器是否启用了 localStorage。隐私模式下无法保存数据。

**Q: 图表为什么不显示？**
A: 确保浏览器支持 Canvas API。检查浏览器控制台是否有错误。

**Q: 如何修改题目数量？**
A: 在 `js/test.js` 的 `start()` 方法中修改 `slice(0, 20)` 的数字。

---

## 联系和支持

- 🐛 报告 Bug：在 GitHub Issues 中提交
- 💡 功能建议：欢迎 Pull Request
- 📚 学习资源：查看 README.md 中的资源链接

---

**祝你使用愉快！🎉**
