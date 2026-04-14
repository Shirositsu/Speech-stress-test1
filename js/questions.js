/**
 * 题库数据模块
 * 包含30道测试题，涵盖6种言论类型
 */

export const questions = [
  // ============ 引战型（baiting）题 ============
  {
    id: 1,
    scene: "你在某社交平台发了一条关于某领域知识的观点后...",
    statement: "不会真的有人这么想吧？不会吧？你啥学历啊？",
    type: "baiting",
    options: [
      {
        label: "立即回怼，逐句反驳对方",
        score: { resilience: -1, logicDefense: 2, emotionControl: -2, selfAwareness: 0, socialReading: -1, disengagement: -2 }
      },
      {
        label: "感到被冒犯，但先冷静想想",
        score: { resilience: 1, logicDefense: 1, emotionControl: 1, selfAwareness: 1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "直接屏蔽或删除，不理睬",
        score: { resilience: 2, logicDefense: 0, emotionControl: 2, selfAwareness: 0, socialReading: 0, disengagement: 3 }
      },
      {
        label: "感到伤害，但还是想继续争论",
        score: { resilience: 0, logicDefense: 0, emotionControl: -2, selfAwareness: 0, socialReading: 1, disengagement: -2 }
      }
    ]
  },
  {
    id: 2,
    scene: "在知识讨论社区，你提出了一个技术观点...",
    statement: "你就是想博眼球啊，这种低级话题还要拿出来说？厌蠢症犯了，和你这样的人讨论简直是浪费我的时间",
    type: "baiting",
    options: [
      {
        label: "质问对方为什么这么不尊重人",
        score: { resilience: 0, logicDefense: 1, emotionControl: -1, selfAwareness: 0, socialReading: -1, disengagement: -1 }
      },
      {
        label: "反思自己是否真的表达有问题",
        score: { resilience: 2, logicDefense: 0, emotionControl: 1, selfAwareness: 2, socialReading: 1, disengagement: 1 }
      },
      {
        label: "礼貌地邀请他提出具体建议",
        score: { resilience: 2, logicDefense: 1, emotionControl: 2, selfAwareness: 1, socialReading: 2, disengagement: 1 }
      },
      {
        label: "怒火中烧，痛骂对方装逼",
        score: { resilience: -2, logicDefense: -1, emotionControl: -3, selfAwareness: -1, socialReading: -2, disengagement: -3 }
      }
    ]
  },
  {
    id: 3,
    scene: "你分享了一条关于社会问题的观点...",
    statement: "傻逼才会这么想，一看就是没长脑子。我倒是想看看你怎么解释这种智障言论",
    type: "baiting",
    options: [
      {
        label: "尽管受辱，还是想论证自己的观点",
        score: { resilience: 1, logicDefense: 2, emotionControl: -1, selfAwareness: 0, socialReading: 0, disengagement: 0 }
      },
      {
        label: "意识到对方不是在真诚讨论，停止互动",
        score: { resilience: 2, logicDefense: 1, emotionControl: 2, selfAwareness: 1, socialReading: 3, disengagement: 2 }
      },
      {
        label: "感觉被羞辱，但不想再说话",
        score: { resilience: 0, logicDefense: 0, emotionControl: 1, selfAwareness: 0, socialReading: 1, disengagement: 1 }
      },
      {
        label: "用更激烈的语言回击",
        score: { resilience: -2, logicDefense: -2, emotionControl: -3, selfAwareness: -1, socialReading: -2, disengagement: -2 }
      }
    ]
  },
  {
    id: 4,
    scene: "你的作品在网上被分享后...",
    statement: "感觉不如XXX，菜就多练",
    type: "baiting",
    options: [
      {
        label: "感到挫折，但问自己对方是否有道理",
        score: { resilience: 2, logicDefense: 1, emotionControl: 1, selfAwareness: 2, socialReading: 1, disengagement: 1 }
      },
      {
        label: "一言不发，删除评论继续创作",
        score: { resilience: 2, logicDefense: 0, emotionControl: 2, selfAwareness: 1, socialReading: 1, disengagement: 2 }
      },
      {
        label: "立即回复：你有种也发一个",
        score: { resilience: 0, logicDefense: 0, emotionControl: -1, selfAwareness: 0, socialReading: -1, disengagement: -2 }
      },
      {
        label: "感到深深的自我否定",
        score: { resilience: -2, logicDefense: -1, emotionControl: -2, selfAwareness: -1, socialReading: 1, disengagement: 1 }
      }
    ]
  },

  // ============ 犯蠢型（stupidity）题 ============
  {
    id: 5,
    scene: "在新闻评论区，有人发了一条常识性错误的评论...",
    statement: "老祖宗教会我们天圆地方、、美国人的视频、、不科学",
    type: "stupidity",
    options: [
      {
        label: "耐心解释科学事实和证据",
        score: { resilience: 2, logicDefense: 2, emotionControl: 1, selfAwareness: 0, socialReading: 0, disengagement: -1 }
      },
      {
        label: "一笑而过，不值得浪费时间",
        score: { resilience: 3, logicDefense: 1, emotionControl: 2, selfAwareness: 1, socialReading: 1, disengagement: 2 }
      },
      {
        label: "嘲笑对方的无知",
        score: { resilience: 1, logicDefense: 1, emotionControl: 0, selfAwareness: -1, socialReading: -2, disengagement: 0 }
      },
      {
        label: "感到愤怒，想痛骂对方",
        score: { resilience: 0, logicDefense: 0, emotionControl: -2, selfAwareness: 0, socialReading: -1, disengagement: -1 }
      }
    ]
  },
  {
    id: 6,
    scene: "你看到一条分享量极高的新闻评论...",
    statement: "5G会传播病毒！我朋友的朋友就是装了5G后生病了。大家不要用5G了",
    type: "stupidity",
    options: [
      {
        label: "指出逻辑漏洞，提供正确信息",
        score: { resilience: 2, logicDefense: 3, emotionControl: 1, selfAwareness: 0, socialReading: 0, disengagement: 0 }
      },
      {
        label: "不管它，反正这类谣言天天有",
        score: { resilience: 3, logicDefense: 0, emotionControl: 2, selfAwareness: 2, socialReading: 0, disengagement: 3 }
      },
      {
        label: "转发这条评论，提醒朋友们小心",
        score: { resilience: -1, logicDefense: -2, emotionControl: 0, selfAwareness: -1, socialReading: -1, disengagement: 1 }
      },
      {
        label: "感觉世界充满了愚蠢，很沮丧",
        score: { resilience: -1, logicDefense: 1, emotionControl: -1, selfAwareness: 1, socialReading: 0, disengagement: 1 }
      }
    ]
  },
  {
    id: 7,
    scene: "在工作讨论群里，同事发了个完全不合逻辑的建议...",
    statement: "我支持大家自愿加班，只有多劳多得才能创造价值，为公司带来更好的未来",
    type: "stupidity",
    options: [
      {
        label: "礼貌地列举这个建议的问题",
        score: { resilience: 2, logicDefense: 2, emotionControl: 2, selfAwareness: 1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "在心里吐槽，没有直接回应",
        score: { resilience: 1, logicDefense: 0, emotionControl: 1, selfAwareness: 1, socialReading: 0, disengagement: 2 }
      },
      {
        label: "直接嘲笑这个想法有多荒唐",
        score: { resilience: 1, logicDefense: 1, emotionControl: -1, selfAwareness: -1, socialReading: -2, disengagement: 0 }
      },
      {
        label: "在群里质疑同事是否有智商问题",
        score: { resilience: 0, logicDefense: 1, emotionControl: -2, selfAwareness: -1, socialReading: -2, disengagement: 0 }
      }
    ]
  },
  {
    id: 8,
    scene: "你在网上看到某个大V发的错误数据...",
    statement: "为什么你的精力没我多？我每天凌晨三点起床第一件事是喝一杯黑咖啡....",
    type: "stupidity",
    options: [
      {
        label: "指出这个论断的科学问题",
        score: { resilience: 2, logicDefense: 3, emotionControl: 1, selfAwareness: 0, socialReading: 0, disengagement: 0 }
      },
      {
        label: "拉黑这个账号，省得再看到",
        score: { resilience: 2, logicDefense: 0, emotionControl: 2, selfAwareness: 1, socialReading: 1, disengagement: 3 }
      },
      {
        label: "转发给朋友们嘲笑",
        score: { resilience: 1, logicDefense: 0, emotionControl: 0, selfAwareness: -1, socialReading: -1, disengagement: 1 }
      },
      {
        label: "觉得自己的知识水平被侮辱了",
        score: { resilience: -1, logicDefense: 1, emotionControl: -1, selfAwareness: 0, socialReading: 0, disengagement: 0 }
      }
    ]
  },

  // ============ 阴阳怪气型（sarcasm）题 ============
  {
    id: 9,
    scene: "你分享了努力工作的经历...",
    statement: "哇，真是太勤快了呢，想必老板一定很喜欢你吧！",
    type: "sarcasm",
    options: [
      {
        label: "明白对方言外之意，心里不适但不吭声",
        score: { resilience: 1, logicDefense: 1, emotionControl: 0, selfAwareness: 1, socialReading: 3, disengagement: 1 }
      },
      {
        label: "直指对方的言外之意，表示不满",
        score: { resilience: 1, logicDefense: 2, emotionControl: 0, selfAwareness: 1, socialReading: 2, disengagement: -1 }
      },
      {
        label: "选择性地只听字面意思，当没听懂",
        score: { resilience: 2, logicDefense: 0, emotionControl: 2, selfAwareness: 1, socialReading: 1, disengagement: 2 }
      },
      {
        label: "感到被冒犯和讽刺，生气",
        score: { resilience: 0, logicDefense: 0, emotionControl: -1, selfAwareness: 0, socialReading: 2, disengagement: 0 }
      }
    ]
  },
  {
    id: 10,
    scene: "你穿了新衣服去上班...",
    statement: "哎呀，今天我们的XXX打扮得可真'与众不同'啊，不会是要去见crush了吧？",
    type: "sarcasm",
    options: [
      {
        label: "听出了讽刺但不动声色，继续工作",
        score: { resilience: 2, logicDefense: 1, emotionControl: 2, selfAwareness: 1, socialReading: 3, disengagement: 2 }
      },
      {
        label: "笑着回一句，打破尴尬",
        score: { resilience: 2, logicDefense: 1, emotionControl: 1, selfAwareness: 2, socialReading: 2, disengagement: 1 }
      },
      {
        label: "觉得尴尬，有点后悔穿这身",
        score: { resilience: -1, logicDefense: 0, emotionControl: 0, selfAwareness: 0, socialReading: 2, disengagement: 0 }
      },
      {
        label: "当众讽刺回去",
        score: { resilience: 0, logicDefense: 1, emotionControl: -1, selfAwareness: 0, socialReading: 1, disengagement: 0 }
      }
    ]
  },
  {
    id: 11,
    scene: "你提出了一个新的工作方案...",
    statement: "噢，这个想法真是...太有创意了呢！我们就等着看奇迹发生吧（笑容）",
    type: "sarcasm",
    options: [
      {
        label: "听出是讽刺，但问对方有什么更好的建议",
        score: { resilience: 2, logicDefense: 2, emotionControl: 1, selfAwareness: 1, socialReading: 3, disengagement: 0 }
      },
      {
        label: "假装没听懂，继续推进方案",
        score: { resilience: 2, logicDefense: 0, emotionControl: 1, selfAwareness: 0, socialReading: 1, disengagement: 2 }
      },
      {
        label: "感到被贬低和嘲笑",
        score: { resilience: -1, logicDefense: 0, emotionControl: -1, selfAwareness: 0, socialReading: 3, disengagement: 0 }
      },
      {
        label: "当众讽刺回敬对方",
        score: { resilience: 0, logicDefense: 0, emotionControl: -1, selfAwareness: -1, socialReading: 2, disengagement: -1 }
      }
    ]
  },
  {
    id: 12,
    scene: "你在社交媒体上晒了一个小成就...",
    statement: "给我们分享一下'成功学'呢？顺便问一下，这个'小目标'是怎么定的？",
    type: "sarcasm",
    options: [
      {
        label: "看出讽刺，觉得有趣，继续分享",
        score: { resilience: 3, logicDefense: 0, emotionControl: 2, selfAwareness: 2, socialReading: 3, disengagement: 1 }
      },
      {
        label: "理解对方的讽刺，但感到有点冒犯",
        score: { resilience: 1, logicDefense: 0, emotionControl: 0, selfAwareness: 1, socialReading: 3, disengagement: 0 }
      },
      {
        label: "删除评论，不想看到",
        score: { resilience: 1, logicDefense: 0, emotionControl: 1, selfAwareness: 0, socialReading: 1, disengagement: 2 }
      },
      {
        label: "用更刻薄的讽刺回怼",
        score: { resilience: -1, logicDefense: 0, emotionControl: -2, selfAwareness: -1, socialReading: 2, disengagement: -1 }
      }
    ]
  },

  // ============ 群体攻击型（dogpiling）题 ============
  {
    id: 13,
    scene: "你发了一条相对小众的观点后...",
    statement: "妈呀我不行了，文明观猴。@XXX @YYY @ZZZ ",
    type: "dogpiling",
    options: [
      {
        label: "感到被围攻，但想坚守自己的观点",
        score: { resilience: 1, logicDefense: 2, emotionControl: 0, selfAwareness: 1, socialReading: 1, disengagement: -1 }
      },
      {
        label: "快速取消之前的发言，道歉",
        score: { resilience: 0, logicDefense: 0, emotionControl: 0, selfAwareness: -1, socialReading: 1, disengagement: 1 }
      },
      {
        label: "沉默一会后，直接删除原帖和账号",
        score: { resilience: -1, logicDefense: -1, emotionControl: -1, selfAwareness: 0, socialReading: 1, disengagement: 3 }
      },
      {
        label: "感到绝望，可能产生心理危机",
        score: { resilience: -3, logicDefense: -1, emotionControl: -3, selfAwareness: 0, socialReading: 1, disengagement: 1 }
      }
    ]
  },
  {
    id: 14,
    scene: "你是一个内容创作者，发布了一个作品后...",
    statement: "这垃圾内容也能发？（5000+转发）经典东施效颦（1000+赞同大军涌入）",
    type: "dogpiling",
    options: [
      {
        label: "分析大量反馈中是否有有效的批评",
        score: { resilience: 2, logicDefense: 1, emotionControl: 1, selfAwareness: 1, socialReading: 1, disengagement: 1 }
      },
      {
        label: "禁用评论区，只保留友好人士",
        score: { resilience: 1, logicDefense: 0, emotionControl: 1, selfAwareness: 0, socialReading: 1, disengagement: 2 }
      },
      {
        label: "发长文为自己辩护，激化冲突",
        score: { resilience: 0, logicDefense: 1, emotionControl: -2, selfAwareness: 0, socialReading: 0, disengagement: -2 }
      },
      {
        label: "完全崩溃，停止创作一段时间",
        score: { resilience: -2, logicDefense: -1, emotionControl: -3, selfAwareness: -1, socialReading: 1, disengagement: 2 }
      }
    ]
  },
  {
    id: 15,
    scene: "一个名人不小心说了'问题言论'后...",
    statement: "（全网1000万人口诛笔伐）滚出娱乐圈！你这样的人不配！我要曝光你的所有隐私！",
    type: "dogpiling",
    options: [
      {
        label: "理性评估言论本身，不跟风",
        score: { resilience: 3, logicDefense: 2, emotionControl: 2, selfAwareness: 2, socialReading: 2, disengagement: 1 }
      },
      {
        label: "跟风转发，但心里有些不安",
        score: { resilience: -1, logicDefense: -1, emotionControl: 0, selfAwareness: 0, socialReading: 1, disengagement: 0 }
      },
      {
        label: "感到群体的力量很恐怖，主动远离",
        score: { resilience: 1, logicDefense: 0, emotionControl: 1, selfAwareness: 2, socialReading: 2, disengagement: 2 }
      },
      {
        label: "积极参与口诛笔伐，享受群体感觉",
        score: { resilience: 0, logicDefense: -1, emotionControl: 0, selfAwareness: -1, socialReading: -1, disengagement: -2 }
      }
    ]
  },
  {
    id: 16,
    scene: "学生时代，你被班里多人针对...",
    statement: "（生物课群里几十条消息同时出现，都在笑话你）今早上那个谁回答问题答了个APT，笑死我了哈哈哈",
    type: "dogpiling",
    options: [
      {
        label: "告诉老师或家长，寻求大人帮助",
        score: { resilience: 1, logicDefense: 1, emotionControl: 1, selfAwareness: 2, socialReading: 1, disengagement: 0 }
      },
      {
        label: "孤立地承受，学会冷漠",
        score: { resilience: 0, logicDefense: 0, emotionControl: 1, selfAwareness: 0, socialReading: 1, disengagement: 3 }
      },
      {
        label: "尝试和其中一个人建立友谊以打破局面",
        score: { resilience: 1, logicDefense: 0, emotionControl: 1, selfAwareness: 1, socialReading: 2, disengagement: -1 }
      },
      {
        label: "心理崩溃，产生长期创伤",
        score: { resilience: -3, logicDefense: -2, emotionControl: -3, selfAwareness: -1, socialReading: 1, disengagement: 1 }
      }
    ]
  },

  // ============ 颠倒黑白型（gaslighting）题 ============
  {
    id: 17,
    scene: "你指出了某个公众人物显然的错误...",
    statement: "你这样理解真的太偏激了。我原本的意思完全是另外一个，是你自己想太多了。而且，像你这样误读别人的人，真的应该好好反思一下",
    type: "gaslighting",
    options: [
      {
        label: "坚持自己的理解，但承认也许理解有偏差",
        score: { resilience: 2, logicDefense: 2, emotionControl: 1, selfAwareness: 1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "开始怀疑自己的理解力",
        score: { resilience: -1, logicDefense: -1, emotionControl: 0, selfAwareness: -1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "查看原始言论，反驳对方的歪曲",
        score: { resilience: 2, logicDefense: 3, emotionControl: 1, selfAwareness: 1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "感到自己被操纵，陷入自我否定",
        score: { resilience: -2, logicDefense: 0, emotionControl: -2, selfAwareness: -2, socialReading: 1, disengagement: 1 }
      }
    ]
  },
  {
    id: 18,
    scene: "在亲密关系中，你提出了对方的问题...",
    statement: "我从没这样说过。你是在故意扭曲我的意思。你总是这样，你是不是根本没把我当好人？",
    type: "gaslighting",
    options: [
      {
        label: "冷静下来，回顾之前的对话记录",
        score: { resilience: 2, logicDefense: 2, emotionControl: 2, selfAwareness: 1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "立即认为自己记错了，放弃争论",
        score: { resilience: -1, logicDefense: -1, emotionControl: 0, selfAwareness: -1, socialReading: 1, disengagement: 1 }
      },
      {
        label: "感到被冤枉，情绪激动",
        score: { resilience: 0, logicDefense: 1, emotionControl: -2, selfAwareness: 0, socialReading: 1, disengagement: -1 }
      },
      {
        label: "深刻怀疑自己的记忆和判断",
        score: { resilience: -2, logicDefense: -2, emotionControl: -1, selfAwareness: -2, socialReading: 1, disengagement: 0 }
      }
    ]
  },
  {
    id: 19,
    scene: "你因为工作失误受到批评...",
    statement: "其实这不是你的问题。而是因为你太敏感了，把别人的建议当成了攻击。你应该学会承受批评而不是总想着逃避",
    type: "gaslighting",
    options: [
      {
        label: "认真检查自己的表现，但不盲目接受",
        score: { resilience: 2, logicDefense: 1, emotionControl: 1, selfAwareness: 2, socialReading: 0, disengagement: 0 }
      },
      {
        label: "相信对方的话，开始自我怀疑",
        score: { resilience: 0, logicDefense: -1, emotionControl: 0, selfAwareness: -1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "直指对方在推卸责任",
        score: { resilience: 1, logicDefense: 2, emotionControl: -1, selfAwareness: 0, socialReading: 1, disengagement: 0 }
      },
      {
        label: "被这种'心理操纵'摧毁信心",
        score: { resilience: -2, logicDefense: -1, emotionControl: -2, selfAwareness: -2, socialReading: 1, disengagement: 1 }
      }
    ]
  },
  {
    id: 20,
    scene: "在线讨论中，对方在你说错一点后...",
    statement: "看啊，你连这点都错了，说明你的整个观点都是错的。而且，敢这么确定自己是对的，真的很傲慢呢",
    type: "gaslighting",
    options: [
      {
        label: "承认这一点的错误，但坚持整体观点的有效性",
        score: { resilience: 2, logicDefense: 2, emotionControl: 1, selfAwareness: 1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "被对方打击，开始全面怀疑自己",
        score: { resilience: -1, logicDefense: -2, emotionControl: -1, selfAwareness: -1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "看穿对方的逻辑谬误，反驳",
        score: { resilience: 2, logicDefense: 3, emotionControl: 1, selfAwareness: 1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "被反复打击，最后选择沉默",
        score: { resilience: -1, logicDefense: -1, emotionControl: -2, selfAwareness: 0, socialReading: 1, disengagement: 2 }
      }
    ]
  },

  // ============ 鸡蛋里挑骨头型（nitpicking）题 ============
  {
    id: 21,
    scene: "你发表了一篇观点文章...",
    statement: "第三段你用了'很多人'这个表述。很多人是多少？数据哪来的？感觉你是那种想到啥是啥的",
    type: "nitpicking",
    options: [
      {
        label: "大方承认这个细节表述可以改进",
        score: { resilience: 2, logicDefense: 1, emotionControl: 1, selfAwareness: 1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "解释为什么'很多'在这个语境是合理的表述",
        score: { resilience: 1, logicDefense: 2, emotionControl: 1, selfAwareness: 0, socialReading: 0, disengagement: 0 }
      },
      {
        label: "感到被鸡蛋里挑骨头，但不知道如何回应",
        score: { resilience: 0, logicDefense: 0, emotionControl: 0, selfAwareness: 1, socialReading: 1, disengagement: 1 }
      },
      {
        label: "讽刺回怼：你这么闲吗？",
        score: { resilience: 1, logicDefense: 0, emotionControl: -1, selfAwareness: -1, socialReading: -1, disengagement: 0 }
      }
    ]
  },
  {
    id: 22,
    scene: "你分享了一个经历...",
    statement: "等等，博主说的那个地方我昨天也在，为啥我没看到？感觉不像是真的",
    type: "nitpicking",
    options: [
      {
        label: "不必要地逐一补充细节来满足对方",
        score: { resilience: 0, logicDefense: 0, emotionControl: 0, selfAwareness: 0, socialReading: 1, disengagement: -1 }
      },
      {
        label: "礼貌但坚定地表示这些细节无关紧要",
        score: { resilience: 2, logicDefense: 1, emotionControl: 1, selfAwareness: 1, socialReading: 0, disengagement: 1 }
      },
      {
        label: "感到对方在故意挑剔，但容忍",
        score: { resilience: 1, logicDefense: 0, emotionControl: 0, selfAwareness: 0, socialReading: 2, disengagement: 1 }
      },
      {
        label: "失去耐心，讽刺对方过分执着",
        score: { resilience: 0, logicDefense: 0, emotionControl: -1, selfAwareness: -1, socialReading: 1, disengagement: 0 }
      }
    ]
  },
  {
    id: 23,
    scene: "你提出了一个建议方案...",
    statement: "尽快是多快？你既然想到了你为什么不早这么做？感觉你就是想拖延时间，逃避责任",
    type: "nitpicking",
    options: [
      {
        label: "尽管有点烦，还是提供更具体的时间框架",
        score: { resilience: 1, logicDefense: 1, emotionControl: 1, selfAwareness: 0, socialReading: 0, disengagement: 0 }
      },
      {
        label: "解释在复杂环境下'尽快'这样的灵活表述是必要的",
        score: { resilience: 2, logicDefense: 2, emotionControl: 1, selfAwareness: 0, socialReading: 0, disengagement: 0 }
      },
      {
        label: "感到被过度挑剔，想放弃",
        score: { resilience: -1, logicDefense: 0, emotionControl: -1, selfAwareness: 0, socialReading: 1, disengagement: 2 }
      },
      {
        label: "反问对方：你为什么不去做？",
        score: { resilience: 1, logicDefense: 1, emotionControl: -1, selfAwareness: 0, socialReading: -1, disengagement: 0 }
      }
    ]
  },
  {
    id: 24,
    scene: "在论文评审中...",
    statement: "第一页脚注的格式和第五页不一致。而且你在导言用了三个引用号，在方法论却用了四个。这种不规范很可笑",
    type: "nitpicking",
    options: [
      {
        label: "承认格式问题，但指出这些细节不影响学术内容",
        score: { resilience: 2, logicDefense: 2, emotionControl: 1, selfAwareness: 1, socialReading: 0, disengagement: 0 }
      },
      {
        label: "快速修正这些格式问题",
        score: { resilience: 1, logicDefense: 0, emotionControl: 1, selfAwareness: 0, socialReading: 1, disengagement: 0 }
      },
      {
        label: "感到被矮化，认为评审者只会挑毛病",
        score: { resilience: 0, logicDefense: 0, emotionControl: -1, selfAwareness: 0, socialReading: 1, disengagement: 1 }
      },
      {
        label: "被反复的鸡蛋挑骨头搞得很沮丧",
        score: { resilience: -1, logicDefense: -1, emotionControl: -2, selfAwareness: -1, socialReading: 1, disengagement: 1 }
      }
    ]
  },

  // ============ 补充题 ============
  {
    id: 25,
    scene: "你在社交媒体上意外看到一个陌生人嘲笑你的外表...",
    statement: "这种倒赔我100块我都不睡😂",
    type: "sarcasm",
    options: [
      {
        label: "忽视评论，坚信自己的价值",
        score: { resilience: 3, logicDefense: 0, emotionControl: 2, selfAwareness: 2, socialReading: 1, disengagement: 2 }
      },
      {
        label: "被言语刺伤，删除自己的内容",
        score: { resilience: -1, logicDefense: -1, emotionControl: -1, selfAwareness: -1, socialReading: 1, disengagement: 1 }
      },
      {
        label: "用幽默回应，缓解尴尬气氛",
        score: { resilience: 2, logicDefense: 0, emotionControl: 1, selfAwareness: 1, socialReading: 1, disengagement: 1 }
      },
      {
        label: "直接怼回去，说对方更差",
        score: { resilience: 0, logicDefense: -1, emotionControl: -2, selfAwareness: -1, socialReading: -1, disengagement: -1 }
      }
    ]
  },
  {
    id: 26,
    scene: "你看到某个话题下，有人在散布不实信息...",
    statement: "我听说X私底下和粉丝那个欸。不过我没有证据啦，但是...你懂的",
    type: "stupidity",
    options: [
      {
        label: "指出这是无根据的指控，拒绝传播",
        score: { resilience: 2, logicDefense: 3, emotionControl: 1, selfAwareness: 1, socialReading: 0, disengagement: 1 }
      },
      {
        label: "虽然怀疑，但还是转发了出去",
        score: { resilience: -1, logicDefense: -2, emotionControl: -1, selfAwareness: 0, socialReading: 0, disengagement: 1 }
      },
      {
        label: "一笑而过，不参与谣言",
        score: { resilience: 3, logicDefense: 1, emotionControl: 2, selfAwareness: 1, socialReading: 1, disengagement: 2 }
      },
      {
        label: "对此很感兴趣，继续深挖背后真相",
        score: { resilience: 0, logicDefense: -1, emotionControl: -1, selfAwareness: 0, socialReading: 0, disengagement: -1 }
      }
    ]
  },
  {
    id: 27,
    scene: "工作中，你的上司突然指责你一个错误，但其实是他自己的决定...",
    statement: "这完全是你的责任。我从来没有同意过这个方案，是你自作聪明。现在出了问题，可别怪我",
    type: "gaslighting",
    options: [
      {
        label: "冷静地确认决策过程，记录证据",
        score: { resilience: 2, logicDefense: 3, emotionControl: 1, selfAwareness: 1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "虽然心里不服，也不敢争论",
        score: { resilience: 0, logicDefense: 0, emotionControl: 0, selfAwareness: 0, socialReading: 1, disengagement: 1 }
      },
      {
        label: "开始自我怀疑，认为可能是自己记错了",
        score: { resilience: -1, logicDefense: -1, emotionControl: 0, selfAwareness: -1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "愤怒地对老板甩脸子",
        score: { resilience: 0, logicDefense: 1, emotionControl: -3, selfAwareness: -1, socialReading: -2, disengagement: -2 }
      }
    ]
  },
  {
    id: 28,
    scene: "你买了一件商品，有个瑕疵...",
    statement: "（卖家在竞争激烈的平台上）我们的商品都是精品！像你这样找茬的买家真的太挑剔了。我看过你的留言，我根本不相信有瑕疵。估计是你自己用坏的，算不了！",
    type: "gaslighting",
    options: [
      {
        label: "准备好证据照片，冷静地要求退货",
        score: { resilience: 2, logicDefense: 2, emotionControl: 1, selfAwareness: 1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "相信卖家的话，放弃维权",
        score: { resilience: 0, logicDefense: -1, emotionControl: 0, selfAwareness: -1, socialReading: 1, disengagement: 1 }
      },
      {
        label: "感到被冤枉和气愤，但坚持维权",
        score: { resilience: 1, logicDefense: 1, emotionControl: -1, selfAwareness: 0, socialReading: 1, disengagement: 0 }
      },
      {
        label: "感受到被操纵和欺凌，心理受伤",
        score: { resilience: -2, logicDefense: 0, emotionControl: -2, selfAwareness: -1, socialReading: 1, disengagement: 1 }
      }
    ]
  },
  {
    id: 29,
    scene: "社交媒体热搜上，某个话题引发了大规模讨论...",
    statement: "（前10条评论都是粗暴指责）你怎么敢这样想？真是太自私了！别人都在骂你呢，你怎么还好意思发言？",
    type: "dogpiling",
    options: [
      {
        label: "在真诚反思的同时，保持自己独立的思考",
        score: { resilience: 2, logicDefense: 1, emotionControl: 1, selfAwareness: 2, socialReading: 1, disengagement: 1 }
      },
      {
        label: "被大量负面评价击垮，删除原微博",
        score: { resilience: -2, logicDefense: -1, emotionControl: -2, selfAwareness: -1, socialReading: 1, disengagement: 2 }
      },
      {
        label: "无视所有噪音，继续坚持原来想法",
        score: { resilience: 3, logicDefense: 1, emotionControl: 2, selfAwareness: 1, socialReading: 0, disengagement: 1 }
      },
      {
        label: "激烈地和所有反对者对骂",
        score: { resilience: -1, logicDefense: -2, emotionControl: -3, selfAwareness: -2, socialReading: -1, disengagement: -3 }
      }
    ]
  },
  {
    id: 30,
    scene: "你跟一个网友讨论价值观问题，突然冒出来一条言论说...",
    statement: "楼主就是想制造话题热度骗关注。而且你的语序有问题，说明你根本没想清楚。不过既然大家都反对你，我就不多说了（实际上已经说了）",
    type: "nitpicking",
    options: [
      {
        label: "承认有些观点需要更清晰地表述，但坚持讨论要点",
        score: { resilience: 2, logicDefense: 1, emotionControl: 1, selfAwareness: 1, socialReading: 1, disengagement: 0 }
      },
      {
        label: "被这种复合型批评打击，感到无力",
        score: { resilience: -1, logicDefense: -1, emotionControl: -1, selfAwareness: 0, socialReading: 1, disengagement: 1 }
      },
      {
        label: "指出对方的逻辑矛盾（说要不多说却说了很多）",
        score: { resilience: 2, logicDefense: 2, emotionControl: 1, selfAwareness: 0, socialReading: 1, disengagement: 0 }
      },
      {
        label: "愤怒地讽刺回怼，引发新一轮对骂",
        score: { resilience: -1, logicDefense: -1, emotionControl: -2, selfAwareness: -1, socialReading: 0, disengagement: -1 }
      }
    ]
  }
];
