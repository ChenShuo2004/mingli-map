import hiddenStems from '@published/bazi/hidden-stems.json'
import stemRelationsRaw from '@published/bazi/heavenly-stem-relations.json'
import branchRelations from '@published/bazi/earthly-branch-relations.json'
import growthStagesRaw from '@published/bazi/twelve-growth-stages.json'
import tiaohouSelection from '@published/bazi/tiaohou-selection.json'
import strengthObservation from '@published/bazi/strength-observation.json'
import patternStructure from '@published/bazi/pattern-structure.json'
import usefulGodFrameworks from '@published/bazi/useful-god-frameworks.json'
import fourPillarsStructure from '@published/bazi/four-pillars-structure.json'
import sexagenaryCycleRaw from '@published/bazi/sexagenary-cycle.json'
import xunVoid from '@published/bazi/xun-void.json'
import nayinSystem from '@published/bazi/nayin-system.json'
import jianluYuejieRaw from '@published/bazi/jianlu-yuejie.json'
import majorLuckStructureRaw from '@published/bazi/major-luck-structure.json'
import yangrenStructure from '@published/bazi/yangren-structure.json'
import shenshaReading from '@published/bazi/shensha-reading.json'
import seasonalFiveStates from '@published/bazi/seasonal-five-states.json'
import yuanchenLookup from '@published/bazi/yuanchen-lookup.json'
import fiveElementsYinyang from '@published/bazi/five-elements-yinyang.json'
import monthOrderSolarTerms from '@published/bazi/month-order-solar-terms.json'

const elementCycle = ['木', '火', '土', '金', '水']

function relationBetween(dayElement, targetElement) {
  const dayIndex = elementCycle.indexOf(dayElement)
  const targetIndex = elementCycle.indexOf(targetElement)
  if (dayIndex === targetIndex) return '同我'
  if ((dayIndex + 1) % 5 === targetIndex) return '我生'
  if ((dayIndex + 2) % 5 === targetIndex) return '我克'
  if ((targetIndex + 1) % 5 === dayIndex) return '生我'
  return '克我'
}

const tenGodMatrix = Object.fromEntries(stemRelationsRaw.stems.map((day) => [
  day.stem,
  Object.fromEntries(stemRelationsRaw.stems.map((target) => {
    const relation = relationBetween(day.element, target.element)
    const rule = stemRelationsRaw.ten_god_rules.find((item) => item.relation === relation)
    const samePolarity = day.polarity === target.polarity
    return [target.stem, samePolarity ? rule.same_polarity : rule.opposite_polarity]
  })),
]))

const stemRelations = { ...stemRelationsRaw, ten_god_matrix: tenGodMatrix }

const growthMatrix = Object.fromEntries(growthStagesRaw.stem_paths.map((path) => {
  const startIndex = growthStagesRaw.branches.indexOf(path.start_branch)
  const step = path.direction === '顺行' ? 1 : -1
  return [path.stem, Object.fromEntries(growthStagesRaw.stages.map((stage, index) => {
    const branchIndex = (startIndex + step * index + 12) % 12
    return [growthStagesRaw.branches[branchIndex], stage]
  }))]
}))

const growthStages = {
  ...growthStagesRaw,
  matrix: growthMatrix,
  start_branch_by_stem: Object.fromEntries(growthStagesRaw.stem_paths.map((item) => [item.stem, item.start_branch])),
}

const sexagenaryCycle = {
  ...sexagenaryCycleRaw,
  xun: xunVoid.xun,
  interpretation_boundary: xunVoid.interpretation_boundary,
  records: Array.from({ length: 60 }, (_, index) => ({
    index: index + 1,
    stem: sexagenaryCycleRaw.stems[index % 10],
    branch: sexagenaryCycleRaw.branches[index % 12],
    label: `${sexagenaryCycleRaw.stems[index % 10]}${sexagenaryCycleRaw.branches[index % 12]}`,
    xun_index: Math.floor(index / 10),
  })),
}

const shenshaWithYuanchen = { ...shenshaReading, yuanchen: yuanchenLookup }

const jianluYuejie = {
  ...jianluYuejieRaw,
  examples: stemRelationsRaw.stems.map((day) => {
    const jianluBranch = Object.entries(growthStages.matrix[day.stem]).find(([, stage]) => stage === '临官')?.[0]
    const oppositeStem = stemRelationsRaw.stems.find((item) => item.element === day.element && item.polarity !== day.polarity)
    const yuejieBranch = Object.entries(growthStages.matrix[oppositeStem.stem]).find(([, stage]) => stage === '临官')?.[0]
    return { day_stem: day.stem, element: day.element, polarity: day.polarity, jianlu_branch: jianluBranch, yuejie_branch: yuejieBranch }
  }),
}

const fixedMonthIndex = sexagenaryCycle.records.findIndex((item) => item.label === majorLuckStructureRaw.fixed_month_pillar)
const cycleAt = (index) => sexagenaryCycle.records[(index + 60) % 60]
const majorLuckStructure = {
  ...majorLuckStructureRaw,
  paths: {
    forward: Array.from({ length: 8 }, (_, index) => cycleAt(fixedMonthIndex + index + 1).label),
    reverse: Array.from({ length: 8 }, (_, index) => cycleAt(fixedMonthIndex - index - 1).label),
  },
}

const knowledgeCardsUnordered = [
  {
    id: 'introduction-reading-map',
    group: '从零开始',
    title: '先认识八字',
    latin: 'Introduction & reading map',
    question: '如果从没接触过八字，应该先把它理解成什么？',
    summary: '八字先把出生年、月、日、时写成四组干支，再以日干为参照，观察五行、季节和各个干支之间的关系。这个专题先带你认清：它记录的是什么、为什么月令与节气重要、后面的十八个节点分别在解决哪一层问题，以及这张地图只讲知识结构，不替人排盘或下判断。',
    count: '1 张导读 · 18 个正式节点',
    tags: ['从零开始', '四柱八字', '阅读顺序'],
    publicSources: [
      { title: '韩愈《殿中侍御史李君墓志铭》', note: '唐代材料中可见以出生年、月、日干支和五行关系推人事的记载，常被用来讨论子平以前命术的历史线索。', url: 'https://zh.wikisource.org/zh-hant/%E6%AE%BF%E4%B8%AD%E4%BE%8D%E5%BE%A1%E5%8F%B2%E6%9D%8E%E5%90%9B%E5%A2%93%E8%AA%8C%E9%8A%98' },
      { title: '《四库全书总目提要·李虚中命书》', note: '说明《李虚中命书》的成书与流传层次复杂，现存内容中后半已见四柱法，不宜把“李虚中三柱、徐子平补时柱”当成无争议定论。', url: 'https://www.shidianguji.com/zh/book/SK0000A/chapter/1kgsnqnt29ste' },
      { title: '《三命通会·论年月日时》', note: '说明年、月、日、时四柱的基本排列方式，以及年上起月、日上起时的结构依赖。', url: 'https://www.luckclub.cn/bazi/005/023/' },
    ],
    searchTerms: ['八字是什么', '八字入门', '八字怎么看', '学习顺序'],
    status: '产品导读节点 · 不新增规则',
  },
  {
    id: 'five-elements-yinyang',
    group: '基础关系',
    title: '阴阳五行与生克',
    latin: 'Five elements',
    question: '五行相生相克，阴阳又在区分什么？',
    summary: fiveElementsYinyang.summary,
    count: '5 行 10 干',
    tags: ['五行', '生克', '阴阳'],
    publicSources: fiveElementsYinyang.public_sources,
  },
  {
    id: 'month-order-solar-terms',
    group: '基础关系',
    title: '月令与节气',
    latin: 'Month order',
    question: '八字的寅月，为什么不等于公历一月？',
    summary: monthOrderSolarTerms.summary,
    count: '12 月 24 气',
    tags: ['月令', '节', '中气'],
    publicSources: monthOrderSolarTerms.public_sources,
  },
  {
    id: 'four-pillars-structure',
    group: '命盘构成',
    title: '四柱结构',
    latin: 'Four pillars',
    question: '八个字为什么分成年、月、日、时四组？',
    summary: fourPillarsStructure.summary,
    count: '4 柱 8 字',
    tags: ['年月日时', '天干地支', '日干'],
    publicSources: fourPillarsStructure.public_sources,
  },
  {
    id: 'hidden-stems',
    group: '命盘构成',
    title: '地支藏干',
    latin: 'Hidden stems',
    question: '一个地支里，为什么不只藏着一个天干？',
    summary: '每个地支都有一个主气天干；部分地支还兼藏一至两个天干，因此能继续参与天干的五行与十神关系。',
    count: `${hiddenStems.records.length} 地支`,
    tags: ['地支', '天干', '主气与兼藏'],
    publicSources: hiddenStems.public_sources,
  },
  {
    id: 'stem-relations',
    group: '干支关系',
    title: '天干关系与十神',
    latin: 'Stem relations',
    question: '同一个天干，换了日主，为什么十神也会变化？',
    summary: '十神由五行生克方向与阴阳同异共同生成。十个天干互相对照形成一百格关系，另有五组天干相合。',
    count: '100 关系格',
    tags: ['十神', '五行', '五合'],
    publicSources: stemRelations.public_sources,
  },
  {
    id: 'branch-relations',
    group: '干支关系',
    title: '地支关系',
    latin: 'Branch relations',
    question: '合、冲、刑、害，会不会在同一对地支上重叠？',
    summary: '把六合、六冲、六害、相刑、三合与三会放回同一张关系网，同一地支可以同时参与多种结构。',
    count: '6 类关系',
    tags: ['合冲刑害', '三合', '三会'],
    publicSources: branchRelations.public_sources,
  },
  {
    id: 'growth-stages',
    group: '运行阶段',
    title: '十二长生',
    latin: 'Twelve stages',
    question: '同样十二个阶段，阴干和阳干为什么方向相反？',
    summary: '十天干分别从自己的长生地支起步，阳干顺行、阴干逆行，沿十二阶段形成一百二十格映射。',
    count: '120 映射格',
    tags: ['长生十二宫', '顺逆', '天干'],
    publicSources: growthStages.public_sources,
  },
  {
    id: 'seasonal-five-states',
    group: '运行阶段',
    title: '旺相休囚死',
    latin: 'Seasonal states',
    question: '同一种五行，为什么换一个季节状态就变了？',
    summary: seasonalFiveStates.summary,
    count: '5 时段 25 状态',
    tags: ['五时段', '五行', '旺相休囚死'],
    publicSources: seasonalFiveStates.public_sources,
  },
  {
    id: 'major-luck-structure',
    group: '运行阶段',
    title: '大运结构',
    latin: 'Major cycles',
    question: '一步大运从哪里起，顺排和逆排又是什么？',
    summary: majorLuckStructure.summary,
    count: '一位 10 年',
    tags: ['月柱', '顺逆排列', '节气'],
    publicSources: majorLuckStructure.public_sources,
  },
  {
    id: 'tiaohou-selection',
    group: '取用框架',
    title: '调候取用',
    latin: 'Seasonal balance',
    question: '为什么同一个日干，换一个月份，观察重点就会改变？',
    summary: '调候从月令形成的寒、暖、燥、湿出发，再区分先用、次用、佐用和条件用；它不是一张不分先后的天干清单。',
    count: '2 组阅读样本',
    tags: ['月令', '寒暖燥湿', '取用次序'],
    publicSources: tiaohouSelection.public_sources,
  },
  {
    id: 'strength-observation',
    group: '判断框架',
    title: '旺衰观察',
    latin: 'Strength reading',
    question: '为什么得令不一定就是旺，失令也不一定就是弱？',
    summary: strengthObservation.summary,
    count: '3 条观察轴',
    tags: ['月令', '根气', '全局助制'],
    publicSources: strengthObservation.public_sources,
  },
  {
    id: 'pattern-structure',
    group: '判断框架',
    title: '格局结构',
    latin: 'Pattern structure',
    question: '格局为什么不是给命盘贴一个固定名称？',
    summary: patternStructure.summary,
    count: '5 段阅读链',
    tags: ['月令', '透干', '成败救应'],
    publicSources: patternStructure.public_sources,
  },
  {
    id: 'jianlu-yuejie',
    group: '判断框架',
    title: '建禄月劫',
    latin: 'Jianlu & Yuejie',
    question: '月令是日主同类时，为什么还要继续看透干？',
    summary: jianluYuejie.summary,
    count: '10 干 2 入口',
    tags: ['月令', '临官', '格局入口'],
    publicSources: jianluYuejie.public_sources,
  },
  {
    id: 'yangren-structure',
    group: '判断框架',
    title: '羊刃查法与来源分歧',
    latin: 'Yangren',
    question: '为什么有的查法只给阳干取刃，有的却列出十干？',
    summary: yangrenStructure.summary,
    count: '3 层来源记录',
    tags: ['极盛位', '连珠刃', '子平法'],
    publicSources: yangrenStructure.public_sources,
  },
  {
    id: 'useful-god-frameworks',
    group: '判断框架',
    title: '用神辨义',
    latin: 'Useful god',
    question: '为什么不同书说的“用神”好像不是同一件事？',
    summary: usefulGodFrameworks.summary,
    count: '4 种阅读框架',
    tags: ['格局', '扶抑', '调候与通关'],
    publicSources: usefulGodFrameworks.public_sources,
  },
  {
    id: 'sexagenary-cycle',
    group: '干支历法',
    title: '六十甲子',
    latin: 'Sexagenary cycle',
    question: '十个天干和十二个地支，为什么组成的是六十组？',
    summary: sexagenaryCycle.summary,
    count: '6 旬 60 组',
    tags: ['天干地支', '循环', '六旬'],
    publicSources: sexagenaryCycle.public_sources,
  },
  {
    id: 'nayin-system',
    group: '干支历法',
    title: '纳音体系',
    latin: 'Nayin system',
    question: '六十甲子怎样分成三十组纳音？',
    summary: nayinSystem.summary,
    count: '30 组取象',
    tags: ['六十甲子', '五行', '取象'],
    publicSources: nayinSystem.public_sources,
  },
  {
    id: 'shensha-reading',
    group: '辅助符号',
    title: '神煞查法示例',
    latin: 'Shensha reading',
    question: '神煞是怎样从干支关系里被查出来的？',
    summary: `${shenshaReading.summary}元辰与驿马、咸池、华盖共同组成四条完整查法示例。`,
    count: '4 条查法示例',
    tags: ['驿马', '咸池', '华盖与元辰'],
    publicSources: shenshaReading.public_sources,
  },
]

const cardsMissingPublicSources = knowledgeCardsUnordered.filter((card) => !card.publicSources?.length)
if (cardsMissingPublicSources.length) {
  throw new Error(`八字公开节点缺少公开资料：${cardsMissingPublicSources.map((card) => card.title).join('、')}`)
}

export const groups = [
  { name: '从零开始', items: ['先认识八字'] },
  { name: '基础关系', items: ['阴阳五行与生克', '月令与节气'] },
  { name: '命盘构成', items: ['四柱结构', '地支藏干'] },
  { name: '干支关系', items: ['天干关系与十神', '地支关系'] },
  { name: '干支历法', items: ['六十甲子', '纳音体系'] },
  { name: '运行阶段', items: ['十二长生', '旺相休囚死', '大运结构'] },
  { name: '判断框架', items: ['旺衰观察', '格局结构', '建禄月劫', '羊刃查法与来源分歧', '用神辨义'] },
  { name: '取用框架', items: ['调候取用'] },
  { name: '辅助符号', items: ['神煞查法示例'] },
]

export const knowledgeCards = groups.flatMap((group) => group.items.map((title) => knowledgeCardsUnordered.find((card) => card.title === title)).filter(Boolean))

export const baziLearningStages = [
  { id: 'orientation', label: '先认对象', note: '先知道八字不是八个孤立标签，而是四组时间干支。', cards: ['four-pillars-structure', 'month-order-solar-terms'] },
  { id: 'properties', label: '再认属性', note: '干支先带入阴阳、五行和地支内部层次，关系才能继续展开。', cards: ['five-elements-yinyang', 'hidden-stems'] },
  { id: 'relations', label: '进入关系', note: '十神、地支关系、六十甲子与纳音分别回答不同层次的连接。', cards: ['stem-relations', 'branch-relations', 'sexagenary-cycle', 'nayin-system'] },
  { id: 'states', label: '加入时令', note: '季节、月令和时间推进，会改变同一五行与同一结构的阅读位置。', cards: ['growth-stages', 'seasonal-five-states', 'major-luck-structure'] },
  { id: 'frameworks', label: '最后分框架', note: '旺衰、格局、建禄月劫、用神、调候与神煞不是同一个判断按钮。', cards: ['strength-observation', 'pattern-structure', 'jianlu-yuejie', 'useful-god-frameworks', 'tiaohou-selection', 'yangren-structure', 'shensha-reading'] },
]

export const baziLearningPath = [
  '先认识八字',
  '四柱结构',
  '月令与节气',
  '阴阳五行与生克',
  '地支藏干',
  '天干关系与十神',
  '地支关系',
  '旺衰观察',
  '格局结构',
  '用神辨义',
]

export const datasets = {
  hiddenStems,
  stemRelations,
  branchRelations,
  growthStages,
  tiaohouSelection,
  strengthObservation,
  patternStructure,
  usefulGodFrameworks,
  fourPillarsStructure,
  sexagenaryCycle,
  nayinSystem,
  jianluYuejie,
  majorLuckStructure,
  yangrenStructure,
  shenshaReading: shenshaWithYuanchen,
  seasonalFiveStates,
  fiveElementsYinyang,
  monthOrderSolarTerms,
}
