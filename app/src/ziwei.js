import twelvePalaceChart from '@published/ziwei/twelve-palace-chart.json'
import fiveElementsBureau from '@published/ziwei/five-elements-bureau.json'
import fourteenMajorStars from '@published/ziwei/fourteen-major-stars.json'
import majorStarAnchors from '@published/ziwei/major-star-anchors.json'
import birthYearTransformations from '@published/ziwei/birth-year-transformations.json'
import starBrightness from '@published/ziwei/star-brightness.json'
import surroundedPalaces from '@published/ziwei/surrounded-palaces.json'
import horoscopeLayers from '@published/ziwei/horoscope-layers.json'
import twelveSpiritCycles from '@published/ziwei/twelve-spirit-cycles.json'
import soulBodyMasters from '@published/ziwei/soul-body-masters.json'
import fourteenMinorStarPlacement from '@published/ziwei/fourteen-minor-star-placement.json'
import adjectiveStarVersionInventory from '@published/ziwei/adjective-star-version-inventory.json'
import horoscopeStarPlacement from '@published/ziwei/horoscope-star-placement.json'
import minorLimitAgeCycle from '@published/ziwei/minor-limit-age-cycle.json'
import flankingHiddenPalaces from '@published/ziwei/flanking-hidden-palaces.json'
import heavenEarthHumanRearrangement from '@published/ziwei/heaven-earth-human-rearrangement.json'
import childhoodLimitSequence from '@published/ziwei/childhood-limit-sequence.json'
import palaceStemFlyingPaths from '@published/ziwei/palace-stem-flying-paths.json'
import monthlyDoujunSequence from '@published/ziwei/monthly-doujun-sequence.json'

const mergePublicSources = (...sourceGroups) => [...new Map(sourceGroups.flat().map((source) => [source.url, source])).values()]

export const ziweiDatasets = { twelvePalaceChart, heavenEarthHumanRearrangement, fiveElementsBureau, fourteenMajorStars, majorStarAnchors, birthYearTransformations, starBrightness, palaceStemFlyingPaths, surroundedPalaces, flankingHiddenPalaces, horoscopeLayers, monthlyDoujunSequence, horoscopeStarPlacement, minorLimitAgeCycle, childhoodLimitSequence, twelveSpiritCycles, soulBodyMasters, fourteenMinorStarPlacement, adjectiveStarVersionInventory }

export const ziweiIntroductionCard = {
  id: 'introduction-reading-map',
  group: '从零开始',
  title: '先认识紫微斗数',
  latin: 'Ziwei introduction',
  question: '第一次看到命宫、主星、四化和大限时，应该先把紫微斗数理解成什么？',
  summary: '紫微斗数先把出生信息装配成一张十二宫盘面，再把命宫、身宫、五行局、星曜、四化与运限层层叠进去。当前这张知识地图先解释这张盘里有哪些对象、它们怎样进入同一结构，以及不同实现和来源的边界，不替真人起盘或下结论。',
  count: '1 张导读 · 5 段阅读顺序',
  tags: ['紫微入门', '十二宫盘面', '星曜与运限'],
  searchTerms: ['紫微斗数是什么', '怎么看紫微', '命宫', '主星', '运限'],
  publicSources: mergePublicSources(twelvePalaceChart.public_sources, fourteenMajorStars.public_sources, horoscopeLayers.public_sources).slice(0, 3),
  status: '导读节点',
}

export const twelvePalaceCard = {
  id: 'twelve-palace-chart',
  group: '基础盘面',
  title: '十二宫盘面',
  latin: 'Twelve-palace chart',
  question: '十二个宫名怎样落进十二个位置，又继续承载哪些字段？',
  summary: twelvePalaceChart.summary,
  count: '12 宫 · 5 组宫干',
  tags: ['十二宫', '盘面坐标', '命身宫'],
  publicSources: twelvePalaceChart.public_sources,
  status: '正式结构节点',
}

export const heavenEarthHumanRearrangementCard = {
  id: 'heaven-earth-human-rearrangement',
  group: '基础盘面',
  title: 'iztro天地人盘重排模型',
  latin: 'Three-chart rearrangement',
  question: '天盘、地盘与人盘分别从哪个宫位重新立命，又会连带改写哪些字段？',
  summary: heavenEarthHumanRearrangement.summary,
  count: '3 种入口 · 3 类字段',
  tags: ['天地人盘', '重新立命', '实现字段审计'],
  publicSources: heavenEarthHumanRearrangement.public_sources,
  status: '正式实现结构节点 · iztro锁定实现',
}

export const fiveElementsBureauCard = {
  id: 'five-elements-bureau',
  group: '基础盘面',
  title: '五行局',
  latin: 'Five-elements bureau',
  question: '命宫干支怎样被归入水二、木三、金四、土五、火六五类局？',
  summary: fiveElementsBureau.summary,
  count: '5 类 · 3 个固定例',
  tags: ['命宫干支', '五行局', '盘面参数'],
  publicSources: fiveElementsBureau.public_sources,
  status: '正式结构节点 · iztro锁定实现',
}

export const soulBodyMastersCard = {
  id: 'soul-body-masters',
  group: '基础盘面',
  title: '命主与身主',
  latin: 'Soul & body masters',
  question: '命主和身主分别从哪个地支查出，又为何不能当作命宫与身宫？',
  summary: soulBodyMasters.summary,
  count: '12 支 × 2 列 · 2 种入口',
  tags: ['命主', '身主', '算法差异'],
  publicSources: soulBodyMasters.public_sources,
  status: '正式映射节点 · 入口版本并列',
}

export const fourteenMajorStarsCard = {
  id: 'fourteen-major-stars',
  group: '星曜与四化',
  title: '十四主星安置',
  latin: 'Fourteen major-star placement',
  question: '五行局与农历日怎样定出两颗锚星，再展开十四颗主星？',
  summary: fourteenMajorStars.summary,
  count: '14 星 · 5 项身份 · 5 类局×30日',
  tags: ['主星身份', '紫微天府锚点', '两星系展开'],
  publicSources: mergePublicSources(fourteenMajorStars.public_sources, majorStarAnchors.public_sources),
  status: '正式安置节点 · 版本并列',
}

export const fourteenMinorStarPlacementCard = {
  id: 'fourteen-minor-star-placement',
  group: '星曜与四化',
  title: 'iztro十四辅星安置',
  latin: 'Fourteen minor stars',
  question: '十四颗辅星分别读取生月、时支、年干和年支中的哪一类输入？',
  summary: fourteenMinorStarPlacement.summary,
  count: '14 星 · 5 类输入 · 5 项身份',
  tags: ['辅星定位', '输入分组', '实现口径'],
  publicSources: fourteenMinorStarPlacement.public_sources,
  status: '正式安置节点 · iztro锁定实现',
}

export const adjectiveStarVersionInventoryCard = {
  id: 'adjective-star-version-inventory',
  group: '星曜与四化',
  title: 'iztro杂曜清单：37／38／40三种口径',
  latin: 'Adjective-star versions',
  question: '为什么同一仓库会同时出现37、38与40颗杂曜？',
  summary: adjectiveStarVersionInventory.summary,
  count: '37／38／40 · 3 种口径',
  tags: ['杂曜身份', '算法差集', '发布面漂移'],
  publicSources: adjectiveStarVersionInventory.public_sources,
  status: '正式版本节点 · iztro锁定实现',
}

export const majorStarAnchorsCard = {
  id: 'major-star-anchors',
  group: '星曜与四化',
  title: '主星锚点',
  latin: 'Major-star anchors',
  question: '五行局与农历日怎样共同确定紫微、天府两颗锚星？',
  summary: majorStarAnchors.summary,
  count: '5 类局 × 30 日',
  tags: ['五行局', '紫微锚点', '天府镜像'],
  publicSources: majorStarAnchors.public_sources,
  status: '正式规则节点 · 版本并列',
}

export const birthYearTransformationsCard = {
  id: 'birth-year-transformations',
  group: '星曜与四化',
  title: '生年四化',
  latin: 'Birth-year transformations',
  question: '一个年干怎样把禄、权、科、忌四种标记分别附到星曜？',
  summary: birthYearTransformations.summary,
  count: '10 干×4 化 · 3 类来源干',
  tags: ['年干映射', '禄权科忌', '版本差异'],
  publicSources: birthYearTransformations.public_sources,
  status: '正式映射节点 · 庚壬并列',
}

export const starBrightnessCard = {
  id: 'star-brightness',
  group: '星曜与四化',
  title: 'iztro星曜亮度表',
  latin: 'Star brightness',
  question: '同一颗星落在不同地支位时，怎样从二维表中读取亮度标签？',
  summary: starBrightness.summary,
  count: '20 星 × 12 位',
  tags: ['星曜状态', '宫位矩阵', '空值分层'],
  publicSources: starBrightness.public_sources,
  status: '正式状态节点 · iztro锁定实现',
}

export const palaceStemFlyingPathsCard = {
  id: 'palace-stem-flying-paths',
  group: '宫位关系与运限',
  title: 'iztro宫干飞化路径',
  latin: 'Palace-stem flying paths',
  question: '一个宫位的天干怎样找到四颗目标星，并形成四条有方向的跨宫路径？',
  summary: palaceStemFlyingPaths.summary,
  count: '12 起宫 · 4 条路径',
  tags: ['宫干飞化', '目标落宫', '自化判定'],
  publicSources: palaceStemFlyingPaths.public_sources,
  status: '正式关系节点 · iztro锁定实现',
}

export const surroundedPalacesCard = {
  id: 'surrounded-palaces',
  group: '宫位关系与运限',
  title: '三方四正',
  latin: 'Surrounded palaces',
  question: '选择任一宫位后，本宫、两个三合方与对宫怎样组成四宫关系网？',
  summary: surroundedPalaces.summary,
  count: '12 起点 · 4 宫范围',
  tags: ['三合方', '对宫', '跨宫网络'],
  publicSources: surroundedPalaces.public_sources,
  status: '正式关系节点 · 错误样本分层',
}

export const flankingHiddenPalacesCard = {
  id: 'flanking-hidden-palaces',
  group: '宫位关系与运限',
  title: '夹宫与暗合宫',
  latin: 'Flanking & hidden palaces',
  question: '目标位的前后夹宫与六合暗合宫，怎样形成两条不同关系？',
  summary: flankingHiddenPalaces.summary,
  count: '12 起点 · 6 组暗合',
  tags: ['夹宫', '地支六合', '关系重合'],
  publicSources: flankingHiddenPalaces.public_sources,
  status: '正式关系节点 · iztro锁定实现',
}

export const horoscopeLayersCard = {
  id: 'horoscope-layers',
  group: '宫位关系与运限',
  title: '运限层次',
  latin: 'Horoscope layers',
  question: '本命、大限、流年、流月、流日与流时怎样叠在同一张十二宫底盘上？',
  summary: horoscopeLayers.summary,
  count: '6 层 · 4级定位链 · 大限12段',
  tags: ['时间作用域', '大限宫轨', '童限回退'],
  publicSources: mergePublicSources(horoscopeLayers.public_sources, childhoodLimitSequence.public_sources),
  status: '正式时间节点 · iztro锁定实现',
}

export const monthlyDoujunSequenceCard = {
  id: 'monthly-doujun-sequence',
  group: '宫位关系与运限',
  title: '流月斗君序列',
  latin: 'Monthly Doujun sequence',
  question: '流年地支怎样经过生月与生时，定出正月锚点和十二月宫序？',
  summary: monthlyDoujunSequence.summary,
  count: '3 类锚点输入 · 12 月',
  tags: ['斗君', '流月起宫', '闰月修正'],
  publicSources: monthlyDoujunSequence.public_sources,
  status: '正式序列节点 · iztro锁定实现',
}

export const horoscopeStarPlacementCard = {
  id: 'horoscope-star-placement',
  group: '宫位关系与运限',
  title: 'iztro六层动态星曜安置',
  latin: 'Horoscope-star placement',
  question: '同一组动态星曜怎样在本命、大限与四个流层之间换名并重新落宫？',
  summary: horoscopeStarPlacement.summary,
  count: '6 层 · 10＋1 星',
  tags: ['动态星曜', '层干支', '年解独有'],
  publicSources: horoscopeStarPlacement.public_sources,
  status: '正式安置节点 · iztro锁定实现',
}

export const minorLimitAgeCycleCard = {
  id: 'minor-limit-age-cycle',
  group: '宫位关系与运限',
  title: 'iztro小限岁序',
  latin: 'Minor-limit age cycle',
  question: '小限怎样从一岁起宫，按男顺女逆逐年走完十二宫？',
  summary: minorLimitAgeCycle.summary,
  count: '4 组起宫 · 1–120岁',
  tags: ['小限', '男顺女逆', '虚岁循环'],
  publicSources: minorLimitAgeCycle.public_sources,
  status: '正式岁序节点 · iztro锁定实现',
}

export const childhoodLimitSequenceCard = {
  id: 'childhood-limit-sequence',
  group: '宫位关系与运限',
  title: '大限前童限回退',
  latin: 'Childhood-limit fallback',
  question: '首个大限开始之前，虚岁怎样依次落入六个童限候选宫？',
  summary: childhoodLimitSequence.summary,
  count: '6 项序列 · 5 种实际窗口',
  tags: ['童限', '大限前回退', '可达性审计'],
  publicSources: childhoodLimitSequence.public_sources,
  status: '正式实现节点 · 第六项不可达',
}

export const twelveSpiritCyclesCard = {
  id: 'twelve-spirit-cycles',
  group: '基础盘面',
  title: '四组十二神循环',
  latin: 'Twelve-spirit cycles',
  question: '长生、博士、岁前与将前四条十二位循环，分别从哪里起、向哪里排？',
  summary: twelveSpiritCycles.summary,
  count: '4 环 × 12 位',
  tags: ['宫格字段', '循环锚点', '顺逆与版本'],
  publicSources: twelveSpiritCycles.public_sources,
  status: '正式宫格节点 · iztro锁定实现',
}

export const ziweiLearningStages = [
  {
    id: 'orientation',
    label: '先认盘面',
    note: '先知道紫微不是一串星名，而是一张会承载对象与关系的十二宫底盘。',
    cards: ['twelve-palace-chart', 'soul-body-masters'],
  },
  {
    id: 'parameters',
    label: '再认装盘参数',
    note: '命宫、身宫之外，还要知道五行局与不同起盘入口怎样改写盘面。',
    cards: ['five-elements-bureau', 'heaven-earth-human-rearrangement', 'twelve-spirit-cycles'],
  },
  {
    id: 'stars',
    label: '再认星曜层',
    note: '主星、辅星、四化和亮度不是同一回事，它们是不同的叠加字段。',
    cards: ['fourteen-major-stars', 'fourteen-minor-star-placement', 'birth-year-transformations', 'star-brightness', 'adjective-star-version-inventory'],
  },
  {
    id: 'relations',
    label: '再认宫位关系',
    note: '同一张盘还会继续组织对宫、三方四正、夹宫与飞化路径。',
    cards: ['surrounded-palaces', 'flanking-hidden-palaces', 'palace-stem-flying-paths'],
  },
  {
    id: 'timing',
    label: '最后认时间层',
    note: '紫微还会把大限、流年、流月、流日、流时继续叠回同一张底盘。',
    cards: ['horoscope-layers', 'monthly-doujun-sequence', 'minor-limit-age-cycle', 'horoscope-star-placement'],
  },
]

export const ziweiLearningPath = [
  '先认识紫微斗数',
  '十二宫盘面',
  '命主与身主',
  '五行局',
  '十四主星安置',
  '生年四化',
  '三方四正',
  '运限层次',
]
