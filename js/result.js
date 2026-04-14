/**
 * 结果展示模块
 */

import { questions } from "./questions.js";
import { calculateScores, getStressLevel, getPersonalityTag, getWeakestDimension, getStrongestDimension, generateShareText } from "./engine.js";
import { drawRadarChart, getDimensionDescription } from "./radar.js";

/**
 * 从 localStorage 读取结果
 */
function loadResults() {
  const testData = JSON.parse(localStorage.getItem("stressTestAnswers") || "null");
  if (!testData) {
    return null;
  }

  const scores = calculateScores(testData.answers, questions);
  const stressLevel = getStressLevel(scores);
  const personality = getPersonalityTag(scores);
  const weakest = getWeakestDimension(scores);
  const strongest = getStrongestDimension(scores);

  return {
    scores,
    stressLevel,
    personality,
    weakest,
    strongest,
    testData
  };
}

/**
 * 初始化结果页面
 */
export function initializeResultPage() {
  const results = loadResults();

  if (!results) {
    document.body.innerHTML = `
      <div class="error-container">
        <h1>未找到测试结果</h1>
        <p>请先完成测试</p>
        <a href="test.html" class="btn-primary">重新测试</a>
      </div>
    `;
    return;
  }

  renderResults(results);
}

/**
 * 渲染结果页面
 */
function renderResults(results) {
  const { scores, stressLevel, personality, weakest, strongest } = results;
  const container = document.querySelector(".result-container");

  if (!container) return;

  // 生成维度显示
  const dimensionLabelsMap = {
    resilience: "总抗压力",
    logicDefense: "逻辑自洽",
    emotionControl: "情绪稳定",
    selfAwareness: "自我认知",
    socialReading: "读人能力",
    disengagement: "断联能力"
  };

  const dimensionKeys = ["resilience", "logicDefense", "emotionControl", "selfAwareness", "socialReading", "disengagement"];

  let dimensionBarsHTML = "";
  dimensionKeys.forEach(key => {
    const score = scores[key];
    const label = dimensionLabelsMap[key];
    let color = "#ff4757"; // red
    if (score >= 71) color = "#2ed573"; // green
    else if (score >= 40) color = "#ffa502"; // orange

    dimensionBarsHTML += `
      <div class="dimension-item">
        <div class="dimension-label">
          <span class="label-text">${label}</span>
          <span class="label-score">${score}</span>
        </div>
        <div class="dimension-bar">
          <div class="dimension-fill" style="width: ${score}%; background-color: ${color};"></div>
        </div>
        <p class="dimension-description">${getDimensionDescription(key, score)}</p>
      </div>
    `;
  });

  const html = `
    <!-- 抗压等级卡 -->
    <section class="level-section">
      <div class="level-badge" style="animation: levelReveal 0.8s ease-out;">
        <div class="level-emoji">${stressLevel.emoji}</div>
        <div class="level-label">${stressLevel.label}</div>
        <div class="level-number">Lv.${stressLevel.level}</div>
      </div>
      <p class="level-description">${stressLevel.description}</p>
    </section>

    <!-- 雷达图 -->
    <section class="radar-section">
      <h2>你的多维度能力分析</h2>
      <div class="radar-container">
        <canvas id="radarChart" width="400" height="400"></canvas>
      </div>
    </section>

    <!-- 人格标签卡 -->
    <section class="personality-section">
      <h2>你是谁？</h2>
      <div class="personality-card">
        <h3 class="personality-tag">${personality.tag}</h3>
        <p class="personality-description">${personality.description}</p>
        <div class="personality-tips">
          <h4>💡 建议：</h4>
          <p>${personality.tips}</p>
        </div>
      </div>
    </section>

    <!-- 维度分析 -->
    <section class="dimension-section">
      <h2>六维度成绩单</h2>
      <div class="dimension-breakdown">
        ${dimensionBarsHTML}
      </div>
    </section>

    <!-- 最强/最弱维度 -->
    <section class="extremes-section">
      <div class="extreme-card strongest">
        <h3>✨ 你的优势</h3>
        <p class="extreme-label">${strongest.dimension}</p>
        <p class="extreme-score">${strongest.score}/100</p>
        <p class="extreme-description">这是你最突出的能力，好好利用它！</p>
      </div>

      <div class="extreme-card weakest">
        <h3>📍 你的瓶颈</h3>
        <p class="extreme-label">${weakest.dimension}</p>
        <p class="extreme-score">${weakest.score}/100</p>
        <div class="tips-list">
          ${weakest.suggestions.map(tip => `<li>• ${tip}</li>`).join("")}
        </div>
      </div>
    </section>

    <!-- 分享卡 -->
    <section class="share-section">
      <h2>分享你的结果</h2>
      <div class="share-card">
        <textarea id="shareText" readonly>${generateShareMessage(scores, stressLevel, personality)}</textarea>
        <button id="copyBtn" class="btn-copy">📋 复制分享文本</button>
      </div>
    </section>

    <!-- 操作按钮 -->
    <section class="action-section">
      <button id="retryBtn" class="btn-primary">🔄 重新测试</button>
      <a href="/" class="btn-ghost">← 返回首页</a>
    </section>
  `;

  container.innerHTML = html;

  // 绘制雷达图
  setTimeout(() => {
    drawRadarChart("radarChart", scores);
  }, 100);

  // 复制分享文本
  document.getElementById("copyBtn").addEventListener("click", () => {
    const text = document.getElementById("shareText");
    text.select();
    document.execCommand("copy");

    const btn = document.getElementById("copyBtn");
    const originalText = btn.textContent;
    btn.textContent = "✅ 已复制！";
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  });

  // 重新测试
  document.getElementById("retryBtn").addEventListener("click", () => {
    localStorage.removeItem("stressTestAnswers");
    sessionStorage.removeItem("stressTestSession");
    window.location.href = "test.html";
  });
}

/**
 * 生成分享消息
 */
function generateShareMessage(scores, stressLevel, personality) {
  return `🎯 我的言论抗压测试成绩：

${stressLevel.emoji} ${stressLevel.label} (Lv.${stressLevel.level})

人格标签：${personality.tag}

📊 六维度成绩：
• 总抗压力：${scores.resilience}/100
• 逻辑自洽：${scores.logicDefense}/100
• 情绪稳定：${scores.emotionControl}/100
• 自我认知：${scores.selfAwareness}/100
• 读人能力：${scores.socialReading}/100
• 断联能力：${scores.disengagement}/100

你的抗压指数是多少？快来测测看！`;
}

/**
 * 获取历史记录
 */
export function getHistoryRecords() {
  const history = JSON.parse(localStorage.getItem("stressTestHistory") || "[]");
  return history.map((record, index) => {
    const scores = calculateScores(record.answers, questions);
    const stressLevel = getStressLevel(scores);
    return {
      index,
      timestamp: new Date(record.timestamp),
      stressLevel,
      scores
    };
  });
}

/**
 * 清除所有历史记录
 */
export function clearHistory() {
  localStorage.removeItem("stressTestHistory");
  localStorage.removeItem("stressTestAnswers");
  sessionStorage.removeItem("stressTestSession");
}
