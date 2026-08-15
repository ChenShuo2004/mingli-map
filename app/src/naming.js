import nameStructure from '@published/naming/name-structure.json'
import characterForms from '@published/naming/character-forms.json'
import strokeConventions from '@published/naming/stroke-conventions.json'
import fiveGridComponents from '@published/naming/five-grid-components.json'
import fourNameStructureFormulas from '@published/naming/four-name-structure-formulas.json'
import virtualOneRules from '@published/naming/virtual-one-rules.json'
import numberTailElements from '@published/naming/number-tail-elements.json'
import threeTalentsComposition from '@published/naming/three-talents-composition.json'
import threeTalentsRelations from '@published/naming/three-talents-relations.json'
import eightyOneNumberIndex from '@published/naming/eighty-one-number-index.json'
import numberTableApplicationAndConflicts from '@published/naming/number-table-application-and-conflicts.json'

export const namingDatasets = { nameStructure, characterForms, strokeConventions, fiveGridComponents, fourNameStructureFormulas, virtualOneRules, numberTailElements, threeTalentsComposition, threeTalentsRelations, eightyOneNumberIndex, numberTableApplicationAndConflicts }

export const namingIntroductionCard = {
  id: 'naming-reading-map', group: '从零开始', title: '姓名与数理从哪里开始', latin: 'Introduction & reading map',
  question: '一个姓名怎样从文字结构走到五格、三才与八十一数理？',
  summary: '先保留原姓名并确定字形与笔画口径，再进入五格、三才和八十一数理；后续每一步都使用前一步已经注明版本的字段。',
  count: '4 个阶段 · 11个知识节点', tags: ['阅读顺序', '四阶段', '版本边界'],
  searchTerms: ['姓名结构', '繁简异体', '笔画口径', '五格', '三才', '八十一数理'], publicSources: [],
  status: '专题导读 · 四阶段',
}

export const namingCards = [
  namingIntroductionCard,
  {
    id: 'name-structure', group: '姓名文字基础', title: nameStructure.title, latin: 'Surname & given name',
    question: '一个姓名怎样分出姓氏、名字和每个字符的位置？', summary: nameStructure.summary,
    count: '4 种常用模板 · 4 个基础字段', tags: ['姓氏', '名字', '字序'],
    searchTerms: [...nameStructure.core_fields.flatMap((item) => [item.label, item.content]), ...nameStructure.common_patterns.flatMap((item) => [item.surname_type, item.given_type, ...item.layout])],
    publicSources: nameStructure.public_sources, status: '正式结构节点 · 现实姓名不强制四格化',
  },
  {
    id: 'character-forms', group: '姓名文字基础', title: characterForms.title, latin: 'Character forms',
    question: '原字、规范字、繁体字、异体字和显示字形有什么区别？', summary: characterForms.summary,
    count: '5 层字形 · 3 组固定关系', tags: ['繁简', '异体字', '原字保留'],
    searchTerms: [...characterForms.form_layers.flatMap((item) => [item.label, item.question, item.record]), ...characterForms.relation_examples.flatMap((item) => [item.input, item.type, ...item.matches])],
    publicSources: characterForms.public_sources, status: '正式字形节点 · 转换不覆盖原字',
  },
  {
    id: 'stroke-conventions', group: '姓名文字基础', title: strokeConventions.title, latin: 'Stroke conventions',
    question: '同一个字的笔画数为什么必须注明字形、字典和版本？', summary: strokeConventions.summary,
    count: '4 类口径 · 5 步查值', tags: ['笔画', '字库', '康熙字典'],
    searchTerms: [...strokeConventions.stroke_fields.flatMap((item) => [item.label, item.basis, ...item.must_record]), ...strokeConventions.missing_states.flatMap((item) => [item.state, item.action])],
    publicSources: strokeConventions.public_sources, status: '正式输入节点 · 不用编码估算笔画',
  },
  {
    id: 'five-grid-components', group: '五格', title: fiveGridComponents.title, latin: 'Five-grid fields',
    question: '天格、人格、地格、外格和总格分别取姓名的哪些部分？', summary: fiveGridComponents.summary,
    count: '5 个计算字段 · 5 步顺序', tags: ['天格', '人格', '总格'],
    searchTerms: [...fiveGridComponents.grids.flatMap((item) => [item.label, item.position, item.composition]), ...fiveGridComponents.field_distinctions],
    publicSources: fiveGridComponents.public_sources, status: '正式结构节点 · 不含人生解释',
  },
  {
    id: 'four-name-structure-formulas', group: '五格', title: fourNameStructureFormulas.title, latin: 'Four formula templates',
    question: '单姓、复姓、单名和双名怎样组成四套五格公式？', summary: fourNameStructureFormulas.summary,
    count: '4 种结构 · 20 条公式 · 4 个算例', tags: ['四种结构', '公式', '固定算例'],
    searchTerms: [...fourNameStructureFormulas.symbols.flatMap((item) => [item.symbol, item.label]), ...fourNameStructureFormulas.formulas.flatMap((item) => [item.type, item.layout, item.heaven, item.person, item.earth, item.outer, item.total]), ...fourNameStructureFormulas.fixed_example.examples.flatMap((item) => [item.type, item.input, item.outer_check])],
    publicSources: fourNameStructureFormulas.public_sources, status: '正式规则节点 · 四套模板分开使用',
  },
  {
    id: 'virtual-one-rules', group: '五格', title: virtualOneRules.title, latin: 'Virtual-one & versions',
    question: '补一加在哪里，不兼容的五格定义和程序下限怎样区分？', summary: virtualOneRules.summary,
    count: '5 条补一规则 · 3 个版本状态', tags: ['补一', '公式版本', '冲突保留'],
    searchTerms: [...virtualOneRules.virtual_rules.flatMap((item) => [item.condition, item.field, item.rule, item.record]), ...virtualOneRules.version_register.flatMap((item) => [item.label, item.status, item.content])],
    publicSources: virtualOneRules.public_sources, status: '正式版本节点 · 异版不强行合并',
  },
  {
    id: 'number-tail-elements', group: '三才', title: numberTailElements.title, latin: 'Number-tail elements',
    question: '五格数值的个位怎样对应木、火、土、金、水？', summary: numberTailElements.summary,
    count: '5 组对应 · 5 个固定检查', tags: ['数尾', '五行', '个位'],
    searchTerms: [...numberTailElements.mapping.flatMap((item) => [item.element, item.stem_pair, ...item.digits.map(String)]), ...numberTailElements.conversion_steps.flatMap((item) => [item.label, item.content])],
    publicSources: numberTailElements.public_sources, status: '正式映射节点 · 不等于单字五行',
  },
  {
    id: 'three-talents-composition', group: '三才', title: threeTalentsComposition.title, latin: 'Three-talents composition',
    question: '天才、人才、地才分别来自哪一格，按什么顺序组成？', summary: threeTalentsComposition.summary,
    count: '3 个位置 · 3 个固定例', tags: ['天才', '人才', '地才'],
    searchTerms: [...threeTalentsComposition.positions.flatMap((item) => [item.label, item.source_grid, item.content]), ...threeTalentsComposition.fixed_examples.flatMap((item) => [item.source, item.configuration])],
    publicSources: threeTalentsComposition.public_sources, status: '正式结构节点 · 外格总格不进入',
  },
  {
    id: 'three-talents-relations', group: '三才', title: threeTalentsRelations.title, latin: 'Configuration relations',
    question: '三才中的两个五行怎样按方向区分比和、相生、被生、相克和被克？', summary: threeTalentsRelations.summary,
    count: '5 类有向关系 · 3 条比较路径', tags: ['相生', '相克', '方向'],
    searchTerms: [...threeTalentsRelations.ordered_pair_rules.flatMap((item) => [item.label, item.condition, item.example]), ...threeTalentsRelations.generating_cycle, ...threeTalentsRelations.overcoming_cycle],
    publicSources: threeTalentsRelations.public_sources, status: '正式关系节点 · 排除评分与断语',
  },
  {
    id: 'eighty-one-number-index', group: '八十一数理', title: eightyOneNumberIndex.title, latin: '81-number version index',
    question: 'tianji版本怎样完整列出1—81的编号、分类、阴阳与数尾五行？', summary: eightyOneNumberIndex.summary,
    count: '81 个编号 · 4 类来源标签', tags: ['1—81', '版本索引', '完整覆盖'],
    searchTerms: [...eightyOneNumberIndex.entries.flatMap((item) => [String(item.number), item.polarity, item.element, item.source_label]), ...eightyOneNumberIndex.field_notes.flatMap((item) => [item.field, item.content])],
    publicSources: eightyOneNumberIndex.public_sources, status: '正式索引节点 · 标签仅代表来源版本',
  },
  {
    id: 'number-table-application-and-conflicts', group: '八十一数理', title: numberTableApplicationAndConflicts.title, latin: 'Lookup & conflicting versions',
    question: '五格怎样逐格查表，超过81、缺项、重复与同号冲突怎样处理？', summary: numberTableApplicationAndConflicts.summary,
    count: '5 步查表 · 4 个版本 · 5 个冲突例', tags: ['五格查表', '减80', '冲突版本'],
    searchTerms: [...numberTableApplicationAndConflicts.application_steps.flatMap((item) => [item.label, item.content]), ...numberTableApplicationAndConflicts.version_comparison.flatMap((item) => [item.source, item.structure, item.status])],
    publicSources: numberTableApplicationAndConflicts.public_sources, status: '正式版本节点 · 不合成统一吉凶表',
  },
]

export const namingLearningStages = [
  { id: 'characters', label: '姓名文字基础', note: '姓与名、繁简异体、笔画口径', cardIds: ['name-structure', 'character-forms', 'stroke-conventions'], status: '3 个知识节点' },
  { id: 'five-grids', label: '五格', note: '五格组成、四种公式与固定例、补一规则', cardIds: ['five-grid-components', 'four-name-structure-formulas', 'virtual-one-rules'], status: '3 个知识节点' },
  { id: 'three-talents', label: '三才', note: '数尾五行、三才组成与配置关系', cardIds: ['number-tail-elements', 'three-talents-composition', 'three-talents-relations'], status: '3 个知识节点' },
  { id: 'eighty-one', label: '八十一数理', note: '数理表与五格对应、缺项及冲突版本', cardIds: ['eighty-one-number-index', 'number-table-application-and-conflicts'], status: '2 个知识节点' },
]
