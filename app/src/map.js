export const lenses = [
  { id: 'all', label: '全部方法', short: '全貌', description: '不预设唯一分类，先看目前进入地图的方法。' },
  { id: 'birth', label: '出生推命', short: '出生', description: '从出生时间、历法或天体位置建立人生模型。' },
  { id: 'question', label: '问事占断', short: '问事', description: '围绕具体问题起卦、排局、抽取或演算。' },
  { id: 'omen', label: '征兆启示', short: '征兆', description: '解释梦境、异常现象与被认为有意义的讯息。' },
  { id: 'form', label: '形态符号', short: '形态', description: '从人体、文字、数字或物象的形态进行判读。' },
  { id: 'environment', label: '环境择时', short: '环境', description: '关注地点、方位与行动时机。' },
  { id: 'test', label: '测验人格', short: '测验', description: '以问卷、量表或类型模型帮助认识个体差异。' },
]

export const knowledgeFoundations = [
  {
    id: 'common', code: 'K-00', title: '共同基础', latin: 'Shared foundations',
    question: '阴阳五行、干支与历法怎样同时支撑多种体系？',
    description: '把跨专题重复使用的符号和时间底座集中阅读，不把它们误算成某一门方法的私有规则。',
    nodes: ['阴阳与五行', '天干、地支与干支循环', '历法、节气与时间校正', '通用资料形态'],
  },
  {
    id: 'yijing', code: 'K-YJ', title: '易经与八卦', latin: 'Yijing foundations',
    question: '爻、卦、卦序与筮法怎样成为六爻和梅花的共同上游？',
    description: '单独保存符号、生成与阅读基础，避免把《易》学底座直接等同于某一种占断方法。',
    nodes: ['阴阳与爻', '八卦符号与属性', '六十四卦与卦序', '筮法生成与取辞'],
  },
  {
    id: 'comparison', code: 'K-X', title: '体系比较', latin: 'Cross-system comparison',
    question: '不同体系的相似概念，哪些只是类比，哪些共享真实上游？',
    description: '集中承接概念类比、方法差异与共同依赖，不用名称相似替代来源核验。',
    nodes: ['概念类比', '方法比较', '共同时间与符号基础', '关系评分边界'],
  },
  {
    id: 'history', code: 'K-HIST', title: '历史与边界', latin: 'History & boundaries',
    question: '这些体系怎样被分类、传播，又应当怎样说明证据和使用边界？',
    description: '把历史材料、作者观点与项目判断分开，帮助读者辨认一条说法所处的语境。',
    nodes: ['五术与体系分类', '历史材料', '命运观与作者本体', '职业伦理与文化边界'],
  },
]

const methodDefinitions = [
  {
    id: 'bazi', title: '八字', latin: 'BaZi', question: '出生时间如何被转换成干支关系？',
    input: '出生年月日时', medium: '四柱与干支', output: '人生模型', lenses: ['birth'],
    tags: ['中国', '出生信息', '干支'], status: '已有内容', count: '1 张导读 · 18 个正式节点', route: 'topic/bazi',
  },
  {
    id: 'ziwei', title: '紫微斗数', latin: 'Zi Wei Dou Shu', question: '星曜与十二宫如何组成一张命盘？',
    input: '出生信息', medium: '星曜与宫位', output: '人生模型', lenses: ['birth'],
    tags: ['中国', '出生信息', '命盘'], status: '已有内容', count: '1 张导读 · 17 个正式节点',
  },
  {
    id: 'astrology', title: '占星', latin: 'Astrology', question: '不同占星传统如何用天体与时间组织判断？',
    input: '时间与地点', medium: '天体、宫位与周期', output: '出生／问事／择时', lenses: ['birth', 'question', 'environment'],
    tags: ['西方 · 印度 · 中式', '天体位置', '三条路径'], status: '三种传统已展开', count: '55 个正式节点 · 1 张西占导读',
  },
  {
    id: 'liuyao', title: '六爻', latin: 'Liu Yao', question: '一次起卦如何围绕具体事情建立关系？',
    input: '问事与起卦', medium: '卦爻与纳甲', output: '具体事件', lenses: ['question'],
    tags: ['中国', '卦象', '问事'], status: '六爻 V1 已完成', count: '1 个导读 · 20 个正式节点', route: 'topic/liuyao',
  },
  {
    id: 'tarot', title: '塔罗', latin: 'Tarot', question: '随机牌面、图像象征与解释之间是什么关系？',
    input: '问题与抽牌', medium: '牌卡图像', output: '事件与自我解释', lenses: ['question'],
    tags: ['欧洲起源', '随机抽取', '牌卡'], status: '已有内容', count: '1 张导读 · 17 个正式节点',
  },
  {
    id: 'taiyi', title: '太乙', latin: 'Taiyi', question: '时间如何被累积成局数，再装入一张太乙式盘？',
    input: '年月日时与计法', medium: '积数、宫位与主客算', output: '局式结构', lenses: ['question', 'environment'],
    tags: ['中国', '式占', '多种计法'], status: '已有内容', count: '1 张导读 · 32 个正式节点',
  },
  {
    id: 'qimen', title: '奇门遁甲', latin: 'Qi Men Dun Jia', question: '为什么它会同时出现在问事、方位和择时中？',
    input: '时间与方位', medium: '式盘与起局', output: '问事／方向／时机', lenses: ['question', 'environment'],
    tags: ['中国', '式盘', '多入口'], status: 'V1 教学路径已收口', count: '1 个导读 · 23 个正式节点',
  },
  {
    id: 'dream', title: '占梦', latin: 'Oneiromancy', question: '梦是怎样从个人经验变成文化中的征兆？',
    input: '梦境体验', medium: '象征与解释传统', output: '征兆与意义', lenses: ['omen'],
    tags: ['跨文化', '梦境', '启示'], status: '已有来源资料', count: '梦象资料已收录',
  },
  {
    id: 'palmistry', title: '相学', latin: 'Physiognomy', question: '面部与手部形态如何被组织成判读语言？',
    input: '身体形态', medium: '面相与手相', output: '性格与人生解释', lenses: ['form'],
    tags: ['跨文化', '身体形态', '面相 · 手相'], status: '已有来源资料', count: '面相与手相资料已收录',
  },
  {
    id: 'fengshui', title: '风水', latin: 'Feng Shui', question: '环境、方位与时间为何会被放进同一套判断？',
    input: '地形与空间', medium: '方位与形势', output: '环境选择', lenses: ['environment'],
    tags: ['中国', '环境', '八宅 · 玄空'], status: '已有来源资料', count: '多类风水资料已收录',
  },
  {
    id: 'mbti', title: '人格问卷', latin: 'Personality Tests', question: '问卷、计分与类型标签之间是什么关系？',
    input: '自陈题目', medium: '计分与类型模型', output: '个体差异描述', lenses: ['test'],
    tags: ['现代', '问卷', '测量边界'], status: '已有内容', count: '1 张导读 · 13 个正式节点',
  },
  {
    id: 'meihua', title: '梅花易数', latin: 'Meihua Yishu', question: '时间或数字如何被转换成体用与卦象？',
    input: '时间与数字', medium: '本卦、互卦与体用', output: '具体问题', lenses: ['question'],
    tags: ['中国', '数字起卦', '体用'], status: '已有内容', count: '1 个导读 · 13 个知识节点',
  },
  {
    id: 'daliuren', title: '大六壬', latin: 'Da Liu Ren', question: '月将、四课与三传如何组成一张课式？',
    input: '时间与问题', medium: '四课三传', output: '事情结构', lenses: ['question'],
    tags: ['中国', '式占', '课式'], status: '公开知识主线已重写', count: '1 个导读 · 39 个知识节点',
  },
  {
    id: 'xiaoliuren', title: '小六壬', latin: 'Xiao Liu Ren', question: '不同版本如何用六宫或神将组织快速判断？',
    input: '时间或报数', medium: '六宫与神将', output: '具体问题', lenses: ['question'],
    tags: ['中国', '多版本', '起课'], status: '八批节点已建立', count: '1 个导读 · 17 个知识节点',
  },
  {
    id: 'almanac', title: '黄历择日', latin: 'Almanac & Election', question: '历法事实如何被进一步组织成宜忌与时机？',
    input: '日期与事项', medium: '干支、宜忌与时辰', output: '择日结构', lenses: ['environment'],
    tags: ['中国', '历法', '择日择时'], status: '五批知识路径已完成', count: '1 个导读 · 26 个正式节点',
  },
  {
    id: 'naming', title: '姓名与数理', latin: 'Names & Numerology', question: '文字、笔画与数字如何被转换成象征解释？',
    input: '姓名与笔画', medium: '五格、三才与数理', output: '符号解释', lenses: ['birth', 'form'],
    tags: ['中国', '文字与数字', '多入口'], status: '已有来源资料', count: '姓名与数理资料已收录',
  },
]

export const methods = methodDefinitions.map((method) => ({
  ...method,
  route: `topic/${method.id}`,
  status: ['bazi', 'liuyao', 'ziwei', 'tarot', 'taiyi', 'meihua', 'mbti', 'daliuren', 'almanac'].includes(method.id) ? method.status : '首层框架已建立',
  count: ({
    bazi: '1 张导读 · 18 个正式节点',
    ziwei: '1 张导读 · 17 个正式节点',
    astrology: '1 张导读 · 55 个正式节点',
    liuyao: '1 张导读 · 20 个正式节点',
    tarot: '1 张导读 · 17 个正式节点',
    taiyi: '1 张导读 · 32 个正式节点',
    qimen: '1 张导读 · 23 个正式节点',
    dream: '1 张导读 · 37 个正式节点',
    palmistry: '1 张导读 · 16 个正式节点',
    fengshui: '1 张导读 · 28 个正式节点',
    mbti: '1 张导读 · 13 个正式节点',
    meihua: '1 张导读 · 13 个正式节点',
    daliuren: '1 张导读 · 39 个正式节点',
    xiaoliuren: '1 张导读 · 24 个正式节点',
    almanac: '1 张导读 · 18 个正式节点',
    naming: '1 张导读 · 11 个正式节点',
  })[method.id],
}))
