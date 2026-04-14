/**
 * 测试流程控制模块
 */

import { questions } from "./questions.js";

/**
 * 测试会话类
 */
export class TestSession {
  constructor() {
    this.allQuestions = [...questions];
    this.currentQuestions = [];
    this.answers = [];
    this.currentIndex = 0;
    this.sessionId = Date.now();
  }

  /**
   * 启动测试会话
   */
  start() {
    // 随机打乱题目
    this.allQuestions = this.shuffleArray([...questions]);
    // 选取前30题
    this.currentQuestions = this.allQuestions.slice(0, 30);
    this.answers = [];
    this.currentIndex = 0;
    this.saveToSessionStorage();
  }

  /**
   * 数组随机打乱（Fisher-Yates）
   */
  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * 获取当前题目
   */
  getCurrentQuestion() {
    return this.currentQuestions[this.currentIndex];
  }

  /**
   * 记录答案
   */
  recordAnswer(optionIndex) {
    const currentQuestion = this.getCurrentQuestion();
    if (!currentQuestion) return;

    this.answers.push({
      questionId: currentQuestion.id,
      selectedOptionIndex: optionIndex
    });

    this.saveToSessionStorage();
  }

  /**
   * 跳过题目（记为选择第5个选项）
   */
  skipQuestion() {
    this.recordAnswer(5);
  }

  /**
   * 进入下一题
   */
  next() {
    if (this.currentIndex < this.currentQuestions.length - 1) {
      this.currentIndex++;
      this.saveToSessionStorage();
      return true;
    }
    return false;
  }

  /**
   * 完成测试
   */
  finish() {
    // 保存答案到 localStorage
    const testResults = {
      answers: this.answers,
      timestamp: Date.now(),
      version: 1
    };

    // 保存最近的答案
    localStorage.setItem("stressTestAnswers", JSON.stringify(testResults));

    // 保存到历史记录（最多保留3次）
    let history = JSON.parse(localStorage.getItem("stressTestHistory") || "[]");
    history.unshift(testResults);
    if (history.length > 3) {
      history = history.slice(0, 3);
    }
    localStorage.setItem("stressTestHistory", JSON.stringify(history));

    this.clearSessionStorage();
    return testResults;
  }

  /**
   * 获取进度百分比
   */
  getProgress() {
    return {
      current: this.currentIndex + 1,
      total: this.currentQuestions.length,
      percentage: Math.round(((this.currentIndex + 1) / this.currentQuestions.length) * 100)
    };
  }

  /**
   * 保存到 sessionStorage
   */
  saveToSessionStorage() {
    const sessionData = {
      currentQuestions: this.currentQuestions,
      answers: this.answers,
      currentIndex: this.currentIndex,
      sessionId: this.sessionId
    };
    sessionStorage.setItem("stressTestSession", JSON.stringify(sessionData));
  }

  /**
   * 从 sessionStorage 恢复
   */
  static restoreFromSessionStorage() {
    const data = sessionStorage.getItem("stressTestSession");
    if (!data) return null;

    const session = new TestSession();
    const parsed = JSON.parse(data);
    session.currentQuestions = parsed.currentQuestions;
    session.answers = parsed.answers;
    session.currentIndex = parsed.currentIndex;
    session.sessionId = parsed.sessionId;
    return session;
  }

  /**
   * 清除 sessionStorage
   */
  clearSessionStorage() {
    sessionStorage.removeItem("stressTestSession");
  }
}

/**
 * 初始化测试页面
 */
export function initializeTestPage() {
  let session = TestSession.restoreFromSessionStorage();

  if (!session) {
    session = new TestSession();
    session.start();
  }

  return session;
}

/**
 * 渲染题目
 */
export function renderQuestion(session, containerSelector = ".quiz-container") {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const question = session.getCurrentQuestion();
  if (!question) return;

  const progress = session.getProgress();

  let html = `
    <div class="quiz-header">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress.percentage}%"></div>
      </div>
      <p class="progress-text">${progress.current}/${progress.total}</p>
    </div>

    <div class="question-card">
      <div class="scenario">
        <h3>场景</h3>
        <p>${question.scene}</p>
      </div>

      <div class="statement-bubble">
        <p>"${question.statement}"</p>
      </div>

      <div class="options">
        <h3>你会怎样反应？</h3>
        <div class="options-grid">
  `;

  question.options.forEach((option, index) => {
    html += `
      <button class="option-btn" data-index="${index}">
        <span class="option-label">${option.label}</span>
      </button>
    `;
  });

  html += `
        </div>
        <button class="skip-btn">跳过此题</button>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // 绑定事件
  container.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.currentTarget.dataset.index);
      session.recordAnswer(index);

      // 选项反馈动画
      e.currentTarget.classList.add("selected");
      setTimeout(() => {
        if (session.next()) {
          renderQuestion(session, containerSelector);
        } else {
          handleTestComplete(session);
        }
      }, 300);
    });
  });

  container.querySelector(".skip-btn").addEventListener("click", () => {
    session.skipQuestion();
    if (session.next()) {
      renderQuestion(session, containerSelector);
    } else {
      handleTestComplete(session);
    }
  });

  // 键盘支持
  //document.addEventListener("keydown", (e) => {
    //if (["1", "2", "3", "4"].includes(e.key)) {
      //const index = parseInt(e.key) - 1;
      //const btn = container.querySelector(`[data-index="${index}"]`);
      //if (btn) btn.click();
    //}
  //});
}

/**
 * 处理测试完成
 */
function handleTestComplete(session) {
  session.finish();
  // 跳转到结果页面
  window.location.href = "result.html";
}
