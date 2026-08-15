import originalMutualChanged from '@published/meihua/original-mutual-changed.json'
import earlyHeavenNumberMapping from '@published/meihua/early-heaven-number-mapping.json'
import twoNumberCasting from '@published/meihua/two-number-casting.json'
import threeNumberVariants from '@published/meihua/three-number-variants.json'
import timeCastingVariants from '@published/meihua/time-casting-variants.json'
import bodyUseObjects from '@published/meihua/body-use-objects.json'
import fiveElementDirections from '@published/meihua/five-element-directions.json'
import seasonalStrength from '@published/meihua/seasonal-strength.json'
import trigramVirtues from '@published/meihua/trigram-virtues.json'
import externalSignsTenResponses from '@published/meihua/external-signs-ten-responses.json'
import complementInverseHexagrams from '@published/meihua/complement-inverse-hexagrams.json'
import linePositionStructure from '@published/meihua/line-position-structure.json'
import preciseTimeModernExtension from '@published/meihua/precise-time-modern-extension.json'
import sixtyFourHexagramIndex from '@published/yijing/sixty-four-hexagram-index.json'

export const meihuaDatasets = { originalMutualChanged, earlyHeavenNumberMapping, twoNumberCasting, threeNumberVariants, timeCastingVariants, bodyUseObjects, fiveElementDirections, seasonalStrength, trigramVirtues, externalSignsTenResponses, complementInverseHexagrams, linePositionStructure, preciseTimeModernExtension, sixtyFourHexagramIndex }

export const introductionReadingMapCard = {
  id: 'introduction-reading-map',
  group: '从零开始',
  title: '梅花易数从哪里开始',
  latin: 'Introduction & reading map',
  question: '第一次接触梅花易数，应该怎样把十三个节点连成一条可以理解的路径？',
  summary: '这个导读节点不增加新的术数规则，而是用固定数字 6、8、9 串起数卦映射、起卦、本互变、体用和五行关系，再把附加观察、共享结构与现代扩展分别连到对应节点。',
  count: '1 个固定例 · 13 个节点出口',
  tags: ['从零开始', '固定例', '阅读地图'],
  searchTerms: ['梅花易数是什么', '学习顺序', '知识关系', '6 8 9'],
  publicSources: [],
  status: '产品导读节点 · 不新增规则',
}

export const originalMutualChangedCard = {
  id: 'original-mutual-changed',
  group: '卦形关系',
  title: '本卦、互卦与变卦',
  latin: 'Original, mutual & changed hexagrams',
  question: '同一组六爻，怎样被重新观察成三种卦形？',
  summary: originalMutualChanged.summary,
  count: '3 种卦形 · 5 个固定例',
  tags: ['本卦', '互卦', '变卦'],
  searchTerms: ['动爻', '二至四爻', '三至五爻', '乾坤互卦'],
  publicSources: originalMutualChanged.public_sources,
  status: '正式结构节点 · 版本分歧并列',
}

export const earlyHeavenNumberMappingCard = {
  id: 'early-heaven-number-mapping',
  group: '数与卦',
  title: '先天八卦数与取余',
  latin: 'Early-heaven numbers & remainders',
  question: '一个整数怎样落到八卦之一，余零又去了哪里？',
  summary: earlyHeavenNumberMapping.summary,
  count: '8 个数卦映射 · 2 条取余规则',
  tags: ['先天八卦数', '除八', '余零承接'],
  searchTerms: ['乾一', '坤八', '动爻除六', '取余'],
  publicSources: earlyHeavenNumberMapping.public_sources,
  status: '正式基础节点 · 两实现重合',
}

export const twoNumberCastingCard = {
  id: 'two-number-casting',
  group: '起卦结构',
  title: '两数起卦',
  latin: 'Two-number casting',
  question: '两个数怎样分别成为上卦、下卦与动爻？',
  summary: twoNumberCasting.summary,
  count: '3 个步骤 · 3 个固定例',
  tags: ['第一数', '第二数', '两数和'],
  searchTerms: ['上卦', '下卦', '动爻', '数字起卦'],
  publicSources: twoNumberCasting.public_sources,
  status: '正式规则节点 · 两实现重合',
}

export const threeNumberVariantsCard = {
  id: 'three-number-variants',
  group: '起卦结构',
  title: '三数起卦的版本差异',
  latin: 'Three-number casting variants',
  question: '为什么同样三个数，会在两套实现里生成不同的下卦？',
  summary: threeNumberVariants.summary,
  count: '2 套版本 · 3 个固定例',
  tags: ['三数起卦', '版本分叉', '算法复现'],
  searchTerms: ['列表分半', '第三数', 'Batch 4', '下卦'],
  publicSources: threeNumberVariants.public_sources,
  status: '正式版本节点 · 不裁定唯一规则',
}

export const timeCastingVariantsCard = {
  id: 'time-casting-variants',
  group: '起卦结构',
  title: '时间起卦的版本差异',
  latin: 'Time-casting variants',
  question: '同一农历时刻，年项和23时日界怎样改变生成结果？',
  summary: timeCastingVariants.summary,
  count: '3 套实现 · 2 个固定时刻',
  tags: ['年支数', '农历年整数', '23时日界'],
  searchTerms: ['时间起卦', '子时换日', '时支', '历法差异'],
  publicSources: timeCastingVariants.public_sources,
  status: '正式版本节点 · 历法边界保留',
}

export const bodyUseObjectsCard = {
  id: 'body-use-objects',
  group: '体用关系',
  title: '体卦与用卦',
  latin: 'Body & use objects',
  question: '动爻落在上半或下半时，体和用分别指向哪个对象？',
  summary: bodyUseObjects.summary,
  count: '2 套对象定义 · 2 个固定例',
  tags: ['体卦', '用卦', '动爻所在半卦'],
  searchTerms: ['不动半卦', '变化后半卦', '体用定位'],
  publicSources: bodyUseObjects.public_sources,
  status: '正式对象节点 · 跨库定义并列',
}

export const fiveElementDirectionsCard = {
  id: 'five-element-directions',
  group: '体用关系',
  title: '五行关系方向',
  latin: 'Five-element directions',
  question: '用生体、体生用、体克用与用克体为什么不能互换？',
  summary: fiveElementDirections.summary,
  count: '5 种方向 · 8 卦五行',
  tags: ['用生体', '体生用', '生克方向'],
  searchTerms: ['体克用', '用克体', '比和', '五行'],
  publicSources: fiveElementDirections.public_sources,
  status: '正式关系节点 · 移除结果标签',
}

export const seasonalStrengthCard = {
  id: 'seasonal-strength',
  group: '时令状态',
  title: '卦气旺衰',
  latin: 'Seasonal strength',
  question: '同一种五行进入不同时令，为什么会落在不同状态？',
  summary: seasonalStrength.summary,
  count: '5 类时令 · 25 个状态位',
  tags: ['旺相休囚死', '五季', '四季末'],
  searchTerms: ['卦气', '时令', '季节', '最后十八日'],
  publicSources: seasonalStrength.public_sources,
  status: '正式状态节点 · 历法口径待核',
}

export const trigramVirtuesCard = {
  id: 'trigram-virtues',
  group: '象意属性',
  title: '八卦之德',
  latin: 'Trigram virtues',
  question: '健、说、丽、动、入、陷、止、顺怎样分别落到八卦？',
  summary: trigramVirtues.summary,
  count: '8 卦德 · 4 组作者对照',
  tags: ['健顺', '动止', '八卦属性'],
  searchTerms: ['卦德', '说卦传', '丽', '陷', '入'],
  publicSources: trigramVirtues.public_sources,
  status: '正式映射节点 · 作者扩展分层',
}

export const externalSignsTenResponsesCard = {
  id: 'external-signs-ten-responses',
  group: '观察方法',
  title: '外应与十应',
  latin: 'External signs & ten responses',
  question: '外应、三要和十应分别回答观察过程中的哪一层？',
  summary: externalSignsTenResponses.summary,
  count: '3 层结构 · 10 类观察',
  tags: ['外应', '三要', '十应'],
  searchTerms: ['眼要', '耳要', '天时', '地理', '声音', '颜色'],
  publicSources: externalSignsTenResponses.public_sources,
  status: '正式分类节点 · 排除实时感知',
}

export const complementInverseHexagramsCard = {
  id: 'complement-inverse-hexagrams',
  group: '卦形关系',
  title: '错卦与综卦',
  latin: 'Complement & inverse hexagrams',
  question: '全爻反转与整卦倒置，为什么会生成两种不同关系卦？',
  summary: complementInverseHexagrams.summary,
  count: '2 种操作 · 4 个固定例',
  tags: ['错卦', '综卦', '自综卦'],
  searchTerms: ['阴阳全反', '上下倒置', '爻位对应', '跨传统透镜'],
  publicSources: complementInverseHexagrams.public_sources,
  status: '正式结构透镜 · 非邵雍原法',
}

export const linePositionStructureCard = {
  id: 'line-position-structure',
  group: '爻位关系',
  title: '爻位结构',
  latin: 'Line-position structure',
  question: '得正、得中、相应和承乘分别在比较什么？',
  summary: linePositionStructure.summary,
  count: '6 个爻位 · 4 类关系',
  tags: ['得正', '得中', '相应', '承乘'],
  searchTerms: ['初四', '二五', '三上', '阴承阳', '阴乘阳'],
  publicSources: linePositionStructure.public_sources,
  status: '正式结构透镜 · 跨传统补充',
}

export const preciseTimeModernExtensionCard = {
  id: 'precise-time-modern-extension',
  group: '现代扩展',
  title: '分秒起卦的现代扩展',
  latin: 'Modern minute-second extension',
  question: '分与秒只是追加输入，还是重新分配了整条时间公式？',
  summary: preciseTimeModernExtension.summary,
  count: '2 套精度 · 3 个字段改位',
  tags: ['分秒起卦', '现代扩展', '字段重分配'],
  searchTerms: ['秒精度', '分钟入下卦', '秒数入动爻', '非邵雍原法'],
  publicSources: preciseTimeModernExtension.public_sources,
  status: '正式算法实验 · 不设默认入口',
}

export const meihuaCards = [
  introductionReadingMapCard,
  earlyHeavenNumberMappingCard,
  twoNumberCastingCard,
  threeNumberVariantsCard,
  timeCastingVariantsCard,
  originalMutualChangedCard,
  bodyUseObjectsCard,
  fiveElementDirectionsCard,
  seasonalStrengthCard,
  trigramVirtuesCard,
  externalSignsTenResponsesCard,
  complementInverseHexagramsCard,
  linePositionStructureCard,
  preciseTimeModernExtensionCard,
]
