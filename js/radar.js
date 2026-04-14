/**
 * 雷达图绘制模块
 * 使用 Canvas API 绘制动画雷达图
 */

const dimensionLabels = {
  resilience: "韧性",
  logicDefense: "逻辑",
  emotionControl: "情绪",
  selfAwareness: "自知",
  socialReading: "读人",
  disengagement: "断联"
};

const dimensionKeys = ["resilience", "logicDefense", "emotionControl", "selfAwareness", "socialReading", "disengagement"];

/**
 * 绘制雷达图
 * @param {string} canvasId - canvas 元素 ID
 * @param {Object} scores - 6个维度的分数
 * @param {Object} options - 配置选项
 */
export function drawRadarChart(canvasId, scores, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.error(`Canvas 元素 ${canvasId} 不存在`);
    return;
  }

  const ctx = canvas.getContext("2d");
  const defaultOptions = {
    primaryColor: "#ff4757",
    backgroundColor: "#2ed573",
    gridColor: "rgba(255, 255, 255, 0.1)",
    textColor: "#e8e8f0",
    animationDuration: 1000,
    size: Math.min(canvas.width, canvas.height) * 0.8
  };

  const config = { ...defaultOptions, ...options };

  // 响应式调整
  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  resizeCanvas();
  window.addEventListener("resize", () => {
    resizeCanvas();
    animate(0);
  });

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = config.size / 2;
  const levels = 5; // 5个环

  /**
   * 绘制背景网格和坐标轴
   */
  function drawGrid() {
    ctx.strokeStyle = config.gridColor;
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.lineWidth = 1;

    // 绘制圆形网格
    for (let i = 1; i <= levels; i++) {
      const radius = (maxRadius / levels) * i;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // 绘制百分比文本
      ctx.fillStyle = config.textColor;
      ctx.font = "12px 'Noto Sans SC'";
      ctx.textAlign = "right";
      ctx.fillText(`${(i * 20)}%`, centerX - 10, centerY - radius + 12);
    }

    // 绘制坐标轴
    ctx.strokeStyle = config.gridColor;
    ctx.lineWidth = 1;
    for (let i = 0; i < dimensionKeys.length; i++) {
      const angle = (Math.PI * 2 * i) / dimensionKeys.length - Math.PI / 2;
      const x = centerX + maxRadius * Math.cos(angle);
      const y = centerY + maxRadius * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // 绘制维度标签
      const labelRadius = maxRadius + 40;
      const labelX = centerX + labelRadius * Math.cos(angle);
      const labelY = centerY + labelRadius * Math.sin(angle);

      ctx.fillStyle = config.textColor;
      ctx.font = "bold 14px 'Noto Sans SC'";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(dimensionLabels[dimensionKeys[i]], labelX, labelY);
    }
  }

  /**
   * 获取坐标点
   */
  function getPoint(score, angleIndex, animProgress = 1) {
    const angle = (Math.PI * 2 * angleIndex) / dimensionKeys.length - Math.PI / 2;
    const radius = (maxRadius / 100) * score * animProgress;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  }

  /**
   * 绘制分数多边形
   */
  function drawScorePolygon(animProgress = 1) {
    const points = dimensionKeys.map((key, index) => {
      return getPoint(scores[key], index, animProgress);
    });

    // 绘制填充区域
    ctx.fillStyle = `rgba(255, 71, 87, ${0.2 * animProgress})`;
    ctx.strokeStyle = config.primaryColor;
    ctx.lineWidth = 2;

    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 添加光晕效果
    ctx.shadowBlur = 15;
    ctx.shadowColor = `rgba(255, 71, 87, ${0.4 * animProgress})`;
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.closePath();
    ctx.stroke();
    ctx.shadowBlur = 0;

    // 绘制顶点
    points.forEach(point => {
      ctx.fillStyle = config.primaryColor;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5 * animProgress, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  }

  /**
   * 动画循环
   */
  function animate(startTime) {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / config.animationDuration, 1);

    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制网格
    drawGrid();

    // 绘制分数多边形（带动画进度）
    drawScorePolygon(progress);

    // 如果动画未完成，继续
    if (progress < 1) {
      requestAnimationFrame(() => animate(startTime));
    }
  }

  // 开始动画
  requestAnimationFrame(() => animate(performance.now()));
}

/**
 * 生成维度的文字描述
 */
export function getDimensionDescription(dimensionKey, score) {
  const descriptions = {
    resilience: {
      low: "你容易被网络言论击倒，需要更多自我保护。",
      medium: "你能承受一些压力，但还需继续锻炼。",
      high: "你对网络言论有很强的抵抗力。"
    },
    logicDefense: {
      low: "你在逻辑论证上可能容易被压倒。",
      medium: "你能进行基本的逻辑论证。",
      high: "你的逻辑思维很强，善于反驳谬论。"
    },
    emotionControl: {
      low: "网络言论容易激怒你，建议多做心理建设。",
      medium: "你有基本的情绪管理能力。",
      high: "你有很强的情绪控制能力，很少被激怒。"
    },
    selfAwareness: {
      low: "你可能对自己的反应模式缺乏了解。",
      medium: "你对自己有基本的认识。",
      high: "你非常了解自己，知道自己的弱点。"
    },
    socialReading: {
      low: "你可能难以识别他人言论背后的意图。",
      medium: "你能理解大多数人的基本意图。",
      high: "你能准确读懂他人的真实想法和意图。"
    },
    disengagement: {
      low: "你容易陷入无效对话，难以抽身。",
      medium: "你能在适当时候停止不必要的讨论。",
      high: "你很善于断开无效对话，保护自己。"
    }
  };

  let level = "low";
  if (score >= 60) level = "high";
  else if (score >= 40) level = "medium";

  return descriptions[dimensionKey]?.[level] || "暂无描述。";
}
