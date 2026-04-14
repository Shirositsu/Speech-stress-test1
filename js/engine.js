/**
 * 计分引擎 - 计算抗压指数、人格标签等
 */

/**
 * 计算6个维度的分数
 * @param {Array} answers - 回答数组，每项为 { questionId, selectedOptionIndex }
 * @param {Array} questions - 题库数组
 * @returns {Object} 6个维度的分数对象
 */
export function calculateScores(answers, questions) {
  const dimensions = {
    resilience: 50,
    logicDefense: 50,
    emotionControl: 50,
    selfAwareness: 50,
    socialReading: 50,
    disengagement: 50
  };

  // 遍历每个回答
  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      const selectedOption = question.options[answer.selectedOptionIndex];
      if (selectedOption && selectedOption.score) {
        // 累加分数
        Object.keys(selectedOption.score).forEach(dimension => {
          dimensions[dimension] += selectedOption.score[dimension];
        });
      }
    }
  });

  // 钳制分数在 0-100 范围内
  Object.keys(dimensions).forEach(key => {
    dimensions[key] = Math.max(0, Math.min(100, dimensions[key]));
  });

  return dimensions;
}

/**
 * 根据 resilience 分数获取抗压等级
 * @param {Object} scores - 维度分数对象
 * @returns {Object} 等级信息 { level, label, description, emoji }
 */
export function getStressLevel(scores) {
  const resilience = scores.resilience;
  
  if (resilience <= 20) {
    return {
      level: 1,
      label: "玻璃心（Lv.1）",
      description: "你对互联网言论非常敏感，可能容易受到伤害。建议多做心理建设或减少网络冲浪时间。",
      emoji: "💔"
    };
  } else if (resilience <= 40) {
    return {
      level: 2,
      label: "普通网民（Lv.2）",
      description: "你的抗压能力处于平均水平。有时能承受言论，有时也会被打击。这是大多数人的状态。",
      emoji: "😐"
    };
  } else if (resilience <= 60) {
    return {
      level: 3,
      label: "老网虫（Lv.3）",
      description: "你对网络言论有了相当的免疫力。能够区分真诚的批评和无谓的攻击。",
      emoji: "🦾"
    };
  } else if (resilience <= 80) {
    return {
      level: 4,
      label: "铁壁防御（Lv.4）",
      description: "你的心理防线非常坚固。很难被网络言论击倒，具有很强的情绪管理能力。",
      emoji: "🛡️"
    };
  } else {
    return {
      level: 5,
      label: "言论免疫体（Lv.5）",
      description: "你已经达到网络言论的最高抗压等级。任何言论都难以撼动你，这是网络世界的真正勇士。",
      emoji: "👑"
    };
  }
}

/**
 * 根据维度得分获取人格标签
 * @param {Object} scores - 维度分数对象
 * @returns {Object} 人格标签 { tag, description, tips }
 */
export function getPersonalityTag(scores) {
  const { resilience, logicDefense, emotionControl, selfAwareness, socialReading, disengagement } = scores;

  const tags = [
    {
      condition: () => emotionControl >= 70 && logicDefense >= 70 && selfAwareness >= 60,
      tag: "理性堡垒型",
      description: "你具备强大的逻辑思维和情绪管理能力，是讨论中的理性声音。",
      tips: "继续保持理性分析，但也要记得有时候同情比逻辑更有力量。"
    },
    {
      condition: () => logicDefense >= 70 && emotionControl <= 45 && socialReading >= 60,
      tag: "愤怒辩手型",
      description: "你善于论证，但容易被激怒。你知道对方在说什么，但有时候控制不住情绪。",
      tips: "在有把握的论证中，先深呼吸。不是每场战都要赢。"
    },
    {
      condition: () => disengagement >= 75 && selfAwareness >= 70 && emotionControl >= 60,
      tag: "超然旁观者",
      description: "你能够很好地断开无效对话，具有高度的自知之明。你是智者。",
      tips: "有时候参与讨论能帮助他人，考虑在关键时刻打破沉默。"
    },
    {
      condition: () => disengagement <= 35 && emotionControl <= 40 && socialReading <= 45,
      tag: "深渊凝视者",
      description: "你容易陷入网络的情绪漩涡，难以抽身。这种投入可能会伤害你。",
      tips: "学会断开连接。设置刷网时间限制，保护自己的心理健康。"
    },
    {
      condition: () => socialReading >= 75 && emotionControl >= 65 && resilience >= 65,
      tag: "网络心理医生型",
      description: "你能够很好地读懂他人的意图，同时保持情绪稳定。你是天生的调解者。",
      tips: "你的能力很珍贵，但也要注意不要被情感劳动过度消耗。"
    },
    {
      condition: () => logicDefense <= 40 && emotionControl <= 40 && resilience <= 35,
      tag: "易碎陶瓷型",
      description: "你对各种形式的言论都很脆弱，缺乏有效的防御机制。",
      tips: "不妨考虑更多地离线活动，培养现实中的支持网络。"
    },
    {
      condition: () => selfAwareness >= 75 && socialReading >= 65 && logicDefense >= 60,
      tag: "觉悟侠客型",
      description: "你既了解自己，也能读透他人。这让你成为不易被套路的人类。",
      tips: "你的洞察力是礼物，可以考虑在文字或分析方面发展。"
    },
    {
      condition: () => emotionControl >= 75 && disengagement >= 70 && socialReading <= 50,
      tag: "孤岛型钢铁心",
      description: "你有很强的自我防护能力，但可能会忽视他人的意图。你很独立，有时过度独立。",
      tips: "试着多听听他人的真实想法，不是所有批评都是恶意的。"
    },
    {
      condition: () => logicDefense >= 70 && resilience >= 70 && socialReading >= 70,
      tag: "完美战士型",
      description: "你具备了对抗网络言论的所有武器：逻辑、抗压和洞察力。你几乎无敌。",
      tips: "记住，网络上最强的人有时也会陷入不理性。保持谦虚。"
    },
    {
      condition: () => selfAwareness <= 40 && socialReading <= 40 && resilience <= 40,
      tag: "迷茫漂泊者",
      description: "你对自己和他人的理解都不太清楚，这让你在网络冲突中容易被淹没。",
      tips: "花时间认识自己，了解你真正看重的是什么。这会给你方向。"
    }
  ];

  // 找到符合条件的第一个标签
  for (let tagObj of tags) {
    if (tagObj.condition()) {
      return {
        tag: tagObj.tag,
        description: tagObj.description,
        tips: tagObj.tips
      };
    }
  }

  // 如果都不符合，返回默认值
  return {
    tag: "平衡发展型",
    description: "你的各项能力保持均衡发展，是一个全能型网民。",
    tips: "继续保持这种平衡，没必要追求某一方面的极端。"
  };
}

/**
 * 获取最弱的维度
 * @param {Object} scores - 维度分数对象
 * @returns {Object} { dimension, score, suggestion }
 */
export function getWeakestDimension(scores) {
  const dimensions = [
    { key: "resilience", label: "总抗压力", suggestions: [
      "尝试每天看一些不同观点的内容，循序渐进地提高耐受度。",
      "找一个值得信赖的人，倾诉你的担忧，寻求情感支持。",
      "设定一个'网络静音时间'，给自己恢复的机会。"
    ]},
    { key: "logicDefense", label: "逻辑自洽能力", suggestions: [
      "多阅读高质量的评论和论证，学习他人如何构建复杂观点。",
      "在回应他人前，先列出3个支撑自己观点的理由。",
      "练习识别常见的逻辑谬误，这会帮助你更快发现问题所在。"
    ]},
    { key: "emotionControl", label: "情绪稳定性", suggestions: [
      "试试冥想或深呼吸练习，这些简单的技巧意外有效。",
      "在回复前等待10分钟，让情绪冷静下来。",
      "找一个能让你放松的爱好，作为网络冲突后的'解毒剂'。"
    ]},
    { key: "selfAwareness", label: "自我认知清晰度", suggestions: [
      "定期写日记，反思你的言论和行为模式。",
      "问问朋友对你的评价，这可能会给你新的视角。",
      "思考你在网络上最常被激怒的话题，它们反映了你的什么价值观？"
    ]},
    { key: "socialReading", label: "读懂对方意图的能力", suggestions: [
      "在讨论前，先问自己'这个人真的想讨论，还是想发泄？'",
      "观察高手如何在评论区应对冲突，学习他们的技巧。",
      "练习看'字里行间'——言论的措辞、用词能透露很多意图。"
    ]},
    { key: "disengagement", label: "主动断开无效对话的能力", suggestions: [
      "设定一个关键词触发器——某些词出现就立即停止互动。",
      "提前决定：一个讨论最多投入多少时间，一旦到时就离开。",
      "提醒自己：赢得一场网络争论的成本永远高于放弃。"
    ]}
  ];

  let weakest = { key: "resilience", score: 100 };
  dimensions.forEach(dim => {
    if (scores[dim.key] < weakest.score) {
      weakest = { ...dim, score: scores[dim.key] };
    }
  });

  return {
    dimension: weakest.label,
    dimensionKey: weakest.key,
    score: weakest.score,
    suggestions: weakest.suggestions
  };
}

/**
 * 获取最强的维度
 * @param {Object} scores - 维度分数对象
 * @returns {Object} { dimension, score }
 */
export function getStrongestDimension(scores) {
  const dimensionLabels = {
    resilience: "总抗压力",
    logicDefense: "逻辑自洽能力",
    emotionControl: "情绪稳定性",
    selfAwareness: "自我认知清晰度",
    socialReading: "读懂对方意图的能力",
    disengagement: "主动断开无效对话的能力"
  };

  let strongest = { key: "resilience", score: 0 };
  Object.keys(scores).forEach(key => {
    if (scores[key] > strongest.score) {
      strongest = { key, score: scores[key] };
    }
  });

  return {
    dimension: dimensionLabels[strongest.key],
    dimensionKey: strongest.key,
    score: strongest.score
  };
}

/**
 * 生成分享文本
 * @param {Object} scores - 维度分数对象
 * @param {Object} stressLevel - 抗压等级信息
 * @param {Object} personality - 人格标签信息
 * @returns {string} 分享文本
 */
export function generateShareText(scores, stressLevel, personality) {
  return `
🎯 我的言论抗压测试成绩：

${stressLevel.emoji} ${stressLevel.label}

人格标签：${personality.tag}

维度成绩：
📊 总抗压力：${scores.resilience}/100
🧠 逻辑自洽：${scores.logicDefense}/100
😌 情绪稳定：${scores.emotionControl}/100
🪞 自我认知：${scores.selfAwareness}/100
👁️ 读人能力：${scores.socialReading}/100
🔌 断联能力：${scores.disengagement}/100

你的抗压指数是多少？快来测测看 👉 [link]
`;
}
