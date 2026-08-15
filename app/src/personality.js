import personalityData from '@published/personality-questionnaire.json'

const mergePublicSources = (...groups) => [...new Map(groups.flat().map((source) => [source.url, source])).values()]

export const personalityUnits = personalityData.cards.map(({ public_sources: publicSources = [], ...card }) => ({
  ...card,
  shortTitle: ({
    'questionnaire-anatomy': '问卷组成',
    'bfi-2-questionnaire': 'BFI-2',
    'hexaco-questionnaire': 'HEXACO',
    'mbti-questionnaire': 'MBTI',
    'sixteen-pf-questionnaire': '16PF',
    'hpi-questionnaire': 'HPI',
    'hds-questionnaire': 'HDS',
    'mvpi-questionnaire': 'MVPI',
    'mmpi-3-questionnaire': 'MMPI-3',
    'personality-result-models': '结果模型',
    'personality-report-forms': '报告形态',
    'personality-questionnaire-use-contexts': '使用任务',
    'what-personality-questionnaires-measure': '测量对象',
    'how-a-self-report-item-is-answered': '作答过程',
    'how-personality-scales-are-developed': '量表开发',
    'from-items-to-scores': '计分过程',
    'trait-signal-and-acquiescence': '回答偏向',
    'big-five-domains-and-facets': '五域与facet',
    'trait-expression-across-situations': '情境表达',
    'self-and-informant-personality-reports': '自评与他评',
    'translation-adaptation-and-validation': '翻译适配',
    'comparing-scores-across-groups': '群体比较',
    'reading-scores-and-profile': '分数与常模',
    'interpreting-score-change-over-time': '时间变化',
    'checking-response-quality': '答卷质量',
    'scale-reliability-structure-validity': '量表证据',
  })[card.id] ?? card.title,
  publicSources,
}))

const unitsById = Object.fromEntries(personalityUnits.map((unit) => [unit.id, unit]))

export const personalityIntroductionCard = {
  id: 'personality-reading-map',
  group: '从零开始',
  title: '先认识人格问卷',
  latin: 'Questionnaire introduction',
  question: '第一次看到大五、MBTI、T分数、常模和效度时，应该先把人格问卷理解成什么？',
  summary: '人格问卷不是直接“测出你是谁”，而是把题目、作答、计分、常模和报告连接成一套测量工具。当前这张地图先帮助你认清不同问卷在测什么、分数怎样形成、结果怎样被阅读，以及哪些场景需要不同证据。',
  count: '1 张导读 · 5 段阅读顺序',
  tags: ['人格问卷入门', '题目与计分', '报告与证据'],
  searchTerms: ['人格问卷是什么', '大五', 'MBTI', 'T分数', '常模', '效度'],
  publicSources: mergePublicSources(
    unitsById['questionnaire-anatomy']?.publicSources || [],
    unitsById['bfi-2-questionnaire']?.publicSources || [],
    unitsById['mmpi-3-questionnaire']?.publicSources || [],
  ).slice(0, 3),
  status: '导读节点',
}

export const personalityCards = personalityData.node_structure.map((node) => {
  const sections = node.unit_ids.map((id) => unitsById[id] ? ({ ...unitsById[id], nodeRole: node.unit_roles?.[id] }) : null).filter(Boolean)
  const publicSources = [...new Map(sections.flatMap((section) => section.publicSources).map((source) => [source.url, source])).values()]
  if (node.direct_unit && sections[0]) return {
    ...sections[0],
    group: node.group,
    publicSources,
    searchTerms: [sections[0].title, sections[0].shortTitle, sections[0].latin, sections[0].question, sections[0].summary, ...JSON.stringify(sections[0].teaching).replace(/[\[\]{}\",:]/g, ' ').split(/\s+/)],
    status: '正式知识节点',
  }
  return {
    ...node,
    sections,
    publicSources,
    searchTerms: [
      node.title,
      node.latin,
      node.question,
      node.summary,
      ...sections.flatMap((section) => [section.title, section.shortTitle, section.question, section.summary, ...JSON.stringify(section.teaching).replace(/[\[\]{}\",:]/g, ' ').split(/\s+/)]),
    ],
    status: '正式知识节点',
  }
})

export const personalityLearningStages = [
  { id: 'orientation', label: '先认工具', note: '先知道问卷是一套测量工具，不是一道题直接等于一个结论。', cardIds: ['personality-reading-map', 'questionnaire-form'] },
  { id: 'families', label: '再认常见体系', note: '先分清连续特质、类型偏好、职场模型和临床量表不是同一类结果。', cardIds: ['bfi-2-questionnaire', 'hexaco-questionnaire', 'mbti-questionnaire', 'sixteen-pf-questionnaire', 'hpi-questionnaire', 'hds-questionnaire', 'mvpi-questionnaire', 'mmpi-3-questionnaire'] },
  { id: 'scoring', label: '再认作答与结果', note: '题目怎样变成分数、分数怎样变成报告，是另一层知识。', cardIds: ['answering-and-scoring', 'models-and-dimensions', 'scores-and-reports'] },
  { id: 'evidence', label: '最后认证据', note: '不同用途需要不同证据，不能把所有问卷当作同一类自我测试。', cardIds: ['uses-and-evidence'] },
]

export const personalityLearningPath = [
  '先认识人格问卷',
  '问卷长什么样',
  'BFI-2',
  'HEXACO',
  'MBTI',
  '特质怎样呈现',
  '作答与计分',
  '分数与报告',
  '用途与证据',
]

export const PERSONALITY_ROUTE_ALIASES = {
  'questionnaire-workflow': 'answering-and-scoring',
  'trait-expression': 'models-and-dimensions',
  'score-interpretation': 'scores-and-reports',
  'evidence-checks': 'uses-and-evidence',
  'questionnaire-anatomy': 'questionnaire-form',
  'what-personality-questionnaires-measure': 'questionnaire-form',
  'questionnaire-versions-and-structure': 'bfi-2-questionnaire',
  'questionnaire-length-and-versions': 'bfi-2-questionnaire',
  'questionnaire-families': 'bfi-2-questionnaire',
  'major-personality-questionnaires': 'bfi-2-questionnaire',
  'personality-result-models': 'scores-and-reports',
  'domains-and-facets': 'models-and-dimensions',
  'big-five-domains-and-facets': 'models-and-dimensions',
  'trait-expression-across-situations': 'models-and-dimensions',
  'self-and-informant-personality-reports': 'models-and-dimensions',
  'neuroticism-emotional-reactivity': 'models-and-dimensions',
  'extraversion-social-energy': 'models-and-dimensions',
  'openness-experience-and-ideas': 'models-and-dimensions',
  'agreeableness-interpersonal-orientation': 'models-and-dimensions',
  'conscientiousness-self-management': 'models-and-dimensions',
  'how-a-self-report-item-is-answered': 'answering-and-scoring',
  'how-personality-scales-are-developed': 'uses-and-evidence',
  'from-items-to-scores': 'answering-and-scoring',
  'trait-signal-and-acquiescence': 'answering-and-scoring',
  'personality-report-forms': 'scores-and-reports',
  'translation-adaptation-and-validation': 'uses-and-evidence',
  'comparing-scores-across-groups': 'uses-and-evidence',
  'hogan-questionnaires': 'hpi-questionnaire',
  'reading-scores-and-profile': 'scores-and-reports',
  'interpreting-score-change-over-time': 'scores-and-reports',
  'raw-t-percentile-scores': 'scores-and-reports',
  'norm-groups-and-comparisons': 'scores-and-reports',
  'reading-a-trait-profile': 'scores-and-reports',
  'personality-questionnaire-use-contexts': 'uses-and-evidence',
  'checking-response-quality': 'uses-and-evidence',
  'scale-reliability-structure-validity': 'uses-and-evidence',
  'response-quality-before-interpretation': 'uses-and-evidence',
  'reliability-validity-factor-structure': 'uses-and-evidence',
  'validated-scale-versus-project-quiz': 'uses-and-evidence',
  'evaluating-questionnaire-evidence': 'uses-and-evidence',
}

export const personalityTopic = {
  ...personalityData,
  cards: [personalityIntroductionCard, ...personalityCards],
  groups: [
    { name: '从零开始', items: [personalityIntroductionCard.title] },
    ...[...new Set(personalityCards.map((card) => card.group))].map((name) => ({
      name,
      items: personalityCards.filter((card) => card.group === name).map((card) => card.title),
    })),
  ],
  frameworkOnly: false,
  learningPath: personalityLearningPath,
}
