import deckStructure from '@published/tarot/deck-structure.json'
import historyAndDecks from '@published/tarot/history-and-decks.json'
import glossary from '@published/tarot/glossary.json'
import imageryElementsMap from '@published/tarot/imagery-elements-map.json'
import interpretiveUncertainty from '@published/tarot/interpretive-uncertainty.json'
import majorArcanaImages from '@published/tarot/major-arcana-images.json'
import meaningLineages from '@published/tarot/meaning-lineages.json'
import minorArcanaImages from '@published/tarot/minor-arcana-images.json'
import consultationEthics from '@published/tarot/consultation-ethics.json'
import correspondenceSystems from '@published/tarot/correspondence-systems.json'
import multiCardCombination from '@published/tarot/multi-card-combination.json'
import questionFraming from '@published/tarot/question-framing.json'
import readingReview from '@published/tarot/reading-review.json'
import readingWorkflow from '@published/tarot/reading-workflow.json'
import shuffleAndDraw from '@published/tarot/shuffle-and-draw.json'
import spreadStructures from '@published/tarot/spread-structures.json'
import spreadSelection from '@published/tarot/spread-selection.json'
import waiteMajorMeanings from '@published/tarot/waite-major-meanings.json'
import waiteMinorMeanings from '@published/tarot/waite-minor-meanings.json'

export const tarotDatasets = { consultationEthics, correspondenceSystems, deckStructure, glossary, historyAndDecks, imageryElementsMap, interpretiveUncertainty, majorArcanaImages, meaningLineages, minorArcanaImages, multiCardCombination, questionFraming, readingReview, readingWorkflow, shuffleAndDraw, spreadSelection, spreadStructures, waiteMajorMeanings, waiteMinorMeanings }

const mergePublicSources = (...groups) => [...new Map(groups.flat().map((source) => [source.url, source])).values()]
const minorCardName = (suit, rank) => `${suit.name_zh}${rank.name_zh}`

export const tarotIntroductionCard = {
  id: 'tarot-reading-map',
  group: '从零开始',
  title: '先认识塔罗',
  latin: 'Tarot introduction',
  question: '第一次看到牌面、牌义、牌阵和逆位时，应该先把塔罗理解成什么？',
  summary: '塔罗不是一组固定答案，而是一套把牌卡图像、历史版本、提问方式、牌阵结构与解读语言组织在一起的阅读系统。这张地图先解释牌是什么、怎么读、哪些内容来自哪一层，而不是替人抽牌或给出现成结论。',
  count: '1 张导读 · 4 段阅读顺序',
  tags: ['塔罗入门', '牌面图像', '牌阵与提问'],
  searchTerms: ['塔罗是什么', '怎么看塔罗', '牌阵', '逆位', 'RWS'],
  publicSources: mergePublicSources(deckStructure.public_sources, historyAndDecks.public_sources, readingWorkflow.public_sources).slice(0, 3),
  status: '导读节点',
}

export const tarotSearchEntries = [
  ...glossary.terms.map((term) => ({
    label: term.term,
    latin: term.latin,
    parent: '塔罗术语',
    route: term.route.includes('/glossary') ? term.route : `/topic/tarot/glossary?term=${encodeURIComponent(term.id)}`,
    keywords: [term.short, term.detail, term.example],
  })),
  ...majorArcanaImages.cards.map((card) => ({
    label: card.name_zh,
    latin: card.name_en,
    parent: 'RWS大阿卡纳',
    route: `/topic/tarot/major-arcana-images?card=${encodeURIComponent(card.number)}&mode=imagery`,
    keywords: [card.number, `${card.name_zh}牌`, ...card.visible_elements],
  })),
  ...minorArcanaImages.suits.flatMap((suit) => minorArcanaImages.ranks.map((rank) => ({
    label: minorCardName(suit, rank),
    latin: `${rank.name_en} of ${suit.name_en}`,
    parent: 'RWS小阿卡纳',
    route: `/topic/tarot/minor-arcana-images?suit=${encodeURIComponent(suit.id)}&rank=${encodeURIComponent(rank.id)}&mode=imagery`,
    keywords: [`${minorCardName(suit, rank)}牌`, suit.name_zh, rank.name_zh, ...minorArcanaImages.observations[suit.id][rank.id]],
  }))),
  ...minorArcanaImages.suits.map((suit) => ({
    label: suit.name_zh,
    latin: suit.name_en,
    parent: 'RWS小阿卡纳',
    route: `/topic/tarot/minor-arcana-images?suit=${encodeURIComponent(suit.id)}&rank=ace&mode=imagery`,
    keywords: ['花色', suit.mark],
  })),
  ...imageryElementsMap.groups.flatMap((group) => group.terms.map((term) => ({
    label: term,
    parent: '牌面元素地图',
    route: `/topic/tarot/imagery-elements-map?element=${encodeURIComponent(term)}&scope=all`,
    keywords: [group.label, group.note, '牌面元素'],
  }))),
  ...historyAndDecks.timeline.map((item) => ({
    label: item.title,
    parent: '塔罗历史与牌系',
    route: `/topic/tarot/history-and-decks?period=${encodeURIComponent(item.id)}`,
    keywords: [item.period, item.place, item.note],
  })),
  ...spreadStructures.spreads.map((spread) => ({
    label: spread.label,
    latin: spread.latin,
    parent: '牌阵结构',
    route: `/topic/tarot/spread-structures?spread=${encodeURIComponent(spread.id)}&version=waite_1910&position=1&example=${spreadStructures.fixed_example.id}&examplePosition=1`,
    keywords: [`${spread.card_count}张牌`, ...spread.positions],
  })),
  ...[
    { label: '塔罗解读步骤总览', parent: '塔罗解读步骤总览', route: '/topic/tarot/reading-workflow', keywords: readingWorkflow.steps.flatMap((item) => [item.label, item.short]) },
    { label: '如何提出问题', parent: '如何提出问题', route: '/topic/tarot/question-framing', keywords: questionFraming.dimensions.flatMap((item) => [item.label, item.prompt, item.good]) },
    { label: '洗牌与抽牌', parent: '洗牌与抽牌', route: '/topic/tarot/shuffle-and-draw', keywords: shuffleAndDraw.versions.flatMap((item) => [item.label, item.type, item.medium]) },
    { label: '多张牌怎样组合', parent: '多张牌怎样组合', route: '/topic/tarot/multi-card-combination', keywords: multiCardCombination.layers.flatMap((item) => [item.label, item.question, item.note]) },
    { label: '解读记录与复盘', parent: '解读记录与复盘', route: '/topic/tarot/reading-review', keywords: [...readingReview.record_blocks.flatMap((item) => [item.label, ...item.fields]), ...readingReview.review_questions] },
    { label: '咨询边界与伦理', parent: '咨询边界与伦理', route: '/topic/tarot/consultation-ethics', keywords: [...consultationEthics.principles.flatMap((item) => [item.label, item.short, item.note]), ...consultationEthics.situations.flatMap((item) => [item.label, item.action, item.question])] },
    { label: '牌义来源：Mathers与Waite版本', parent: '牌义来源：Mathers与Waite版本', route: '/topic/tarot/meaning-lineages', keywords: [...meaningLineages.stages.flatMap((item) => [item.period, item.label, item.author, item.object, item.note]), ...meaningLineages.source_checklist] },
    { label: '解读语言与不确定性', parent: '解读语言与不确定性', route: '/topic/tarot/interpretive-uncertainty', keywords: [...interpretiveUncertainty.language_layers.flatMap((item) => [item.label, item.verb, item.note]), ...interpretiveUncertainty.rewrites.flatMap((item) => [item.before, item.after, item.changed])] },
    { label: '象征对应体系', parent: '象征对应体系', route: '/topic/tarot/correspondence-systems', keywords: [...correspondenceSystems.layers.flatMap((item) => [item.label, item.scope, item.question]), ...correspondenceSystems.systems.flatMap((item) => [item.label, item.source, item.added])] },
    { label: '按问题层次选择牌阵', parent: '按问题层次选择牌阵', route: '/topic/tarot/spread-selection', keywords: [...spreadSelection.axes.flatMap((item) => [item.label, item.question]), ...spreadSelection.choices.flatMap((item) => [item.label, item.fit, item.not_fit])] },
  ],
]

const searchTermsFor = (parent) => tarotSearchEntries.filter((entry) => entry.parent === parent).flatMap((entry) => [entry.label, entry.latin, ...entry.keywords].filter(Boolean))

export const tarotLearningStages = [
  {
    id: 'orientation',
    label: '先认识塔罗',
    note: '先分清牌卡、牌义、牌阵和解读不是同一层。',
    cardIds: ['tarot-reading-map'],
  },
  {
    id: 'foundation',
    label: '认识牌组',
    note: '先认识牌的组成、历史和常见词。',
    cardIds: ['deck-structure', 'glossary', 'history-and-decks'],
  },
  {
    id: 'cards',
    label: '看懂单牌',
    note: '从牌面观察进入牌义来源与对应体系。',
    cardIds: ['major-arcana-images', 'minor-arcana-images', 'imagery-elements-map', 'meaning-lineages', 'interpretive-uncertainty', 'correspondence-systems'],
  },
  {
    id: 'reading',
    label: '学习使用',
    note: '沿着提问、牌阵、抽牌和组合完成一次解读。',
    cardIds: ['reading-workflow', 'question-framing', 'spread-selection', 'spread-structures', 'shuffle-and-draw', 'multi-card-combination', 'consultation-ethics'],
  },
  {
    id: 'practice',
    label: '练习与复盘',
    note: '保存过程，再用固定材料检查自己的理解。',
    cardIds: ['reading-review'],
  },
]

export const tarotLearningPath = [
  '先认识塔罗',
  '78张牌组结构',
  '塔罗术语',
  '塔罗历史与牌系',
  'RWS大阿卡纳：牌面与Waite牌义',
  'RWS小阿卡纳：牌面与Waite牌义',
  '牌义来源：Mathers与Waite版本',
  '塔罗解读步骤总览',
  '如何提出问题',
  '四种牌阵结构',
  '解读记录与复盘',
]

export const tarotNodeRelations = {
  'deck-structure': { next: 'glossary', related: ['history-and-decks'] },
  'glossary': { before: 'deck-structure', next: 'major-arcana-images', related: ['history-and-decks'] },
  'history-and-decks': { before: 'deck-structure', next: 'glossary', related: ['major-arcana-images'] },
  'major-arcana-images': { before: 'glossary', next: 'minor-arcana-images', related: ['imagery-elements-map', 'meaning-lineages'] },
  'minor-arcana-images': { before: 'major-arcana-images', next: 'imagery-elements-map', related: ['meaning-lineages'] },
  'imagery-elements-map': { before: 'minor-arcana-images', next: 'meaning-lineages', related: ['major-arcana-images'] },
  'meaning-lineages': { before: 'imagery-elements-map', next: 'interpretive-uncertainty', related: ['correspondence-systems'] },
  'interpretive-uncertainty': { before: 'meaning-lineages', next: 'correspondence-systems', related: ['reading-review'] },
  'correspondence-systems': { before: 'meaning-lineages', next: 'reading-workflow', related: ['imagery-elements-map'] },
  'reading-workflow': { before: 'correspondence-systems', next: 'question-framing', related: ['reading-review'] },
  'question-framing': { before: 'reading-workflow', next: 'spread-selection', related: ['consultation-ethics'] },
  'spread-selection': { before: 'question-framing', next: 'spread-structures', related: ['reading-workflow'] },
  'spread-structures': { before: 'spread-selection', next: 'shuffle-and-draw', related: ['multi-card-combination'] },
  'shuffle-and-draw': { before: 'spread-structures', next: 'multi-card-combination', related: ['history-and-decks'] },
  'multi-card-combination': { before: 'shuffle-and-draw', next: 'consultation-ethics', related: ['major-arcana-images', 'minor-arcana-images'] },
  'consultation-ethics': { before: 'multi-card-combination', next: 'reading-review', related: ['question-framing'] },
  'reading-review': { before: 'consultation-ethics', related: ['reading-workflow', 'major-arcana-images'] },
}

export const deckStructureCard = {
  id: 'deck-structure', group: '牌组结构', title: '78张牌组结构', latin: 'Deck structure',
  question: '78张牌怎样拆成大阿卡纳、四个花色与宫廷牌？', summary: '一副RWS塔罗牌由22张大阿卡纳和56张小阿卡纳组成，小阿卡纳再分为四个花色。',
  count: '22 + 56 张', tags: ['大阿卡纳', '四花色', '宫廷牌'], publicSources: deckStructure.public_sources,
  searchTerms: ['完整牌表', '78张', '22张', '56张', '数字牌', '宫廷牌'],
  status: '正式身份节点 · RWS固定样本',
}

export const historyAndDecksCard = {
  id: 'history-and-decks', group: '牌组结构', title: '塔罗历史与牌系', latin: 'History & deck families',
  question: '塔罗最早是做什么的，RWS又和早期牌系有什么不同？', summary: historyAndDecks.summary,
  count: '15世纪 → RWS', tags: ['历史', '牌系', 'RWS'], publicSources: historyAndDecks.public_sources,
  searchTerms: searchTermsFor('塔罗历史与牌系'),
  status: '正式历史节点 · 馆藏与原始出版物',
}

export const glossaryCard = {
  id: 'glossary', group: '牌组结构', title: '塔罗术语', latin: 'Tarot glossary',
  question: '牌面、牌义、宫廷牌和逆位分别是什么意思？', summary: glossary.summary,
  count: '4 组 · 12 个词', tags: ['牌组', '单牌内容', '牌阵'], publicSources: glossary.public_sources,
  searchTerms: searchTermsFor('塔罗术语'),
  status: '正式术语节点 · 跨页索引',
}

export const majorArcanaImagesCard = {
  id: 'major-arcana-images', group: '单牌资料', title: 'RWS大阿卡纳：牌面与Waite牌义', latin: 'Major Arcana',
  question: '22张大阿卡纳分别画了什么、是什么意思？', summary: '浏览RWS大阿卡纳的22张牌面、画面元素和Waite正逆位牌义。',
  count: '22 张 · 牌面与牌义', tags: ['大阿卡纳', '牌面', '正逆位'], publicSources: mergePublicSources(majorArcanaImages.public_sources, waiteMajorMeanings.public_sources),
  searchTerms: searchTermsFor('RWS大阿卡纳'),
  status: '正式单牌节点 · RWS牌面与Waite牌义',
}

export const minorArcanaImagesCard = {
  id: 'minor-arcana-images', group: '单牌资料', title: 'RWS小阿卡纳：牌面与Waite牌义', latin: 'Minor Arcana',
  question: '四个花色的56张牌分别画了什么、是什么意思？', summary: 'RWS小阿卡纳包含权杖、圣杯、宝剑和星币四个花色，可逐张查看牌面与Waite正逆位牌义。',
  count: '4 花色 · 56 张', tags: ['四花色', '牌面', '正逆位'], publicSources: mergePublicSources(minorArcanaImages.public_sources, waiteMinorMeanings.public_sources),
  searchTerms: searchTermsFor('RWS小阿卡纳'),
  status: '正式单牌节点 · RWS牌面与Waite牌义',
}

export const imageryElementsMapCard = {
  id: 'imagery-elements-map', group: '单牌资料', title: '牌面元素地图', latin: 'Imagery map',
  question: '常见景物、动物和人物分别出现在哪些RWS牌面里？', summary: imageryElementsMap.summary,
  count: '4 组 · 20 个元素', tags: ['牌面关系', '大阿卡纳', '小阿卡纳'], publicSources: imageryElementsMap.public_sources,
  searchTerms: searchTermsFor('牌面元素地图'),
  status: '正式关系节点 · 只连接可见元素',
}

export const meaningLineagesCard = {
  id: 'meaning-lineages', group: '解释来源', title: '牌义来源：Mathers与Waite版本', latin: 'Meaning lineages',
  question: '同一张牌为什么会出现不同牌义？', summary: meaningLineages.summary,
  count: '3 个历史节点 · 5 项检查', tags: ['Mathers', 'Waite', '版本'], publicSources: meaningLineages.public_sources,
  searchTerms: searchTermsFor('牌义来源：Mathers与Waite版本'),
  status: '正式来源节点 · 作者版本并列',
}

export const interpretiveUncertaintyCard = {
  id: 'interpretive-uncertainty', group: '解释来源', title: '解读语言与不确定性', latin: 'Language & uncertainty',
  question: '怎样区分看见的、推断的和仍不知道的？', summary: interpretiveUncertainty.summary,
  count: '4 层表达 · 5 个改写', tags: ['观察', '推断', '未知'], publicSources: interpretiveUncertainty.public_sources,
  searchTerms: searchTermsFor('解读语言与不确定性'),
  status: '正式表达节点 · 不生成个人结论',
}

export const correspondenceSystemsCard = {
  id: 'correspondence-systems', group: '解释来源', title: '象征对应体系', latin: 'Correspondence systems',
  question: '数字、元素、占星与卡巴拉为什么会进入塔罗？', summary: correspondenceSystems.summary,
  count: '4 类对应 · 4 个版本', tags: ['数字', '元素', '占星'], publicSources: correspondenceSystems.public_sources,
  searchTerms: searchTermsFor('象征对应体系'),
  status: '正式版本节点 · 对应体系并列',
}

export const waiteMajorMeaningsCard = {
  id: 'waite-major-meanings', group: '单牌资料', title: 'Waite 1910大阿卡纳牌义', latin: 'Waite meanings',
  question: 'Waite原书怎样解释22张大阿卡纳？', summary: waiteMajorMeanings.summary,
  count: '22 张 · 正位／逆位', tags: ['Waite 1910', '正位', '逆位'], publicSources: waiteMajorMeanings.public_sources,
  status: '正式牌义节点 · 作者版本',
}

export const waiteMinorMeaningsCard = {
  id: 'waite-minor-meanings', group: '单牌资料', title: 'Waite 1910小阿卡纳牌义', latin: 'Minor meanings',
  question: 'Waite原书怎样解释四花色的56张牌？', summary: waiteMinorMeanings.summary,
  count: '56 张 · 正位／逆位', tags: ['Waite 1910', '四花色', '正逆位'], publicSources: waiteMinorMeanings.public_sources,
  status: '正式牌义节点 · 作者版本',
}

export const spreadStructuresCard = {
  id: 'spread-structures', group: '牌阵与解读', title: '四种牌阵结构', latin: 'Spread structures',
  question: '常见牌阵的牌位怎样排列？', summary: spreadStructures.summary,
  count: '1 · 3 · 5 · 10 张', tags: ['牌位', '顺序', '凯尔特十字'], publicSources: mergePublicSources(spreadStructures.public_sources, waiteMajorMeanings.public_sources, waiteMinorMeanings.public_sources),
  searchTerms: searchTermsFor('牌阵结构'),
  status: '正式结构节点',
}

export const spreadSelectionCard = {
  id: 'spread-selection', group: '牌阵与解读', title: '按问题层次选择牌阵', latin: 'Choosing a spread',
  question: '什么时候用一张、三张、五张或十张？', summary: spreadSelection.summary,
  count: '4 种结构 · 5 步选择', tags: ['问题层次', '牌位数量', '版本'], publicSources: spreadSelection.public_sources,
  searchTerms: searchTermsFor('按问题层次选择牌阵'),
  status: '正式导航节点 · 不抽牌',
}

export const readingWorkflowCard = {
  id: 'reading-workflow', group: '使用方法', title: '塔罗解读步骤总览', latin: 'Reading workflow',
  question: '从问题到记录，一次解读依次经过哪些步骤？', summary: readingWorkflow.summary,
  count: '7 个步骤', tags: ['问题', '牌阵', '记录'], publicSources: readingWorkflow.public_sources,
  searchTerms: searchTermsFor('塔罗解读步骤总览'),
  status: '正式流程节点 · 只作知识导航',
}

export const questionFramingCard = {
  id: 'question-framing', group: '使用方法', title: '如何提出问题', latin: 'Question framing',
  question: '怎样把一个模糊问题整理清楚？', summary: questionFraming.summary,
  count: '4 个维度 · 4 个例子', tags: ['对象', '主题', '时间'], publicSources: questionFraming.public_sources,
  searchTerms: searchTermsFor('如何提出问题'),
  status: '正式方法节点 · 来源与项目模板分层',
}

export const shuffleAndDrawCard = {
  id: 'shuffle-and-draw', group: '使用方法', title: '洗牌与抽牌', latin: 'Shuffle & draw',
  question: '洗牌、切牌、逆位和取牌有哪些不同做法？', summary: shuffleAndDraw.summary,
  count: '2 个历史版本 · 2 个程序版本', tags: ['洗牌', '切牌', '正逆位'], publicSources: shuffleAndDraw.public_sources,
  searchTerms: searchTermsFor('洗牌与抽牌'),
  status: '正式版本节点 · 不提供真人抽牌',
}

export const multiCardCombinationCard = {
  id: 'multi-card-combination', group: '牌阵与解读', title: '多张牌怎样组合', latin: 'Combining cards',
  question: '多张牌为什么不能只把几条牌义拼在一起？', summary: multiCardCombination.summary,
  count: '5 层 · 2 个固定例', tags: ['问题', '牌位', '次序'], publicSources: multiCardCombination.public_sources,
  searchTerms: searchTermsFor('多张牌怎样组合'),
  status: '正式组合节点 · 只展示结构关系',
}

export const readingReviewCard = {
  id: 'reading-review', group: '学习记录', title: '解读记录与复盘', latin: 'Reading journal',
  question: '一次解读需要记录什么，之后怎样复核？', summary: readingReview.summary,
  count: '5 组字段 · 5 个复核问题', tags: ['记录', '版本', '复盘'], publicSources: readingReview.public_sources,
  searchTerms: searchTermsFor('解读记录与复盘'),
  status: '正式学习节点 · 静态记录模板',
}

export const consultationEthicsCard = {
  id: 'consultation-ethics', group: '使用边界', title: '咨询边界与伦理', latin: 'Ethics & boundaries',
  question: '哪些问题应该改写、转交或停止？', summary: consultationEthics.summary,
  count: '5 项原则 · 5 个情境', tags: ['选择权', '隐私', '专业转介'], publicSources: consultationEthics.public_sources,
  searchTerms: searchTermsFor('咨询边界与伦理'),
  status: '正式边界节点 · 组织规范交叉整理',
}
