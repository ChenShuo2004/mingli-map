import sixPalaceSequence from '@published/xiaoliuren/six-palace-sequence.json'
import monthDayHourCasting from '@published/xiaoliuren/month-day-hour-casting.json'
import fixedInputCastingReplay from '@published/xiaoliuren/fixed-input-casting-replay.json'
import versionRegister from '@published/xiaoliuren/version-register.json'
import deitySystemComparison from '@published/xiaoliuren/deity-system-comparison.json'
import attributeVersionDifferences from '@published/xiaoliuren/attribute-version-differences.json'
import threeCourseStageModel from '@published/xiaoliuren/three-course-stage-model.json'
import interpretationMaterialLayers from '@published/xiaoliuren/interpretation-material-layers.json'
import castingEntryConventions from '@published/xiaoliuren/casting-entry-conventions.json'
import hourBranchInputBoundaries from '@published/xiaoliuren/hour-branch-input-boundaries.json'
import fullDayHourPalaceDistribution from '@published/xiaoliuren/full-day-hour-palace-distribution.json'
import sixNineCastingPathComparison from '@published/xiaoliuren/six-nine-casting-path-comparison.json'
import palaceNumberFieldLayers from '@published/xiaoliuren/palace-number-field-layers.json'
import inputNumberMethodCoverage from '@published/xiaoliuren/input-number-method-coverage.json'
import palaceDoubleStemSourceAudit from '@published/xiaoliuren/palace-double-stem-source-audit.json'
import palaceDeityHouseMapping from '@published/xiaoliuren/palace-deity-house-mapping.json'
import palaceTrigramFieldComparison from '@published/xiaoliuren/palace-trigram-field-comparison.json'
import fourPlateAssembly from '@published/xiaoliuren/four-plate-assembly.json'
import timeNumberRouteImplementation from '@published/xiaoliuren/time-number-route-implementation.json'
import heavenBranchTwoStepSequence from '@published/xiaoliuren/heaven-branch-two-step-sequence.json'
import peopleSixRelationsSelfPalace from '@published/xiaoliuren/people-six-relations-self-palace.json'
import dynamicGodBranchMapping from '@published/xiaoliuren/dynamic-god-branch-mapping.json'
import fiveStarAndThreeMarkLayers from '@published/xiaoliuren/five-star-and-three-mark-layers.json'
import engineInfoSourceConflicts from '@published/xiaoliuren/engine-info-source-conflicts.json'

export const xiaoliurenDatasets = { sixPalaceSequence, monthDayHourCasting, fixedInputCastingReplay, versionRegister, deitySystemComparison, attributeVersionDifferences, threeCourseStageModel, interpretationMaterialLayers, castingEntryConventions, hourBranchInputBoundaries, fullDayHourPalaceDistribution, sixNineCastingPathComparison, palaceNumberFieldLayers, inputNumberMethodCoverage, palaceDoubleStemSourceAudit, palaceDeityHouseMapping, palaceTrigramFieldComparison, fourPlateAssembly, timeNumberRouteImplementation, heavenBranchTwoStepSequence, peopleSixRelationsSelfPalace, dynamicGodBranchMapping, fiveStarAndThreeMarkLayers, engineInfoSourceConflicts }

export const xiaoliurenIntroductionCard = {
  id: 'introduction-reading-map',
  group: '从零开始',
  title: '小六壬从哪里开始',
  latin: 'Introduction & reading map',
  question: '第一次接触小六壬，应该先理解六宫、三步起课，还是各种宫义？',
  summary: '首节点先用一个固定例串起六宫循环、月课、日课和时课，再把版本差异与解释材料留给后续节点；它不增加新规则，也不替用户起课。',
  count: '11 批 · 24 个节点出口',
  tags: ['从零开始', '阅读地图', '固定例'],
  searchTerms: ['小六壬是什么', '学习顺序', '六宫', '月日时'],
  publicSources: [],
  status: '产品导读节点 · 不新增规则',
}

export const sixPalaceSequenceCard = {
  id: 'six-palace-sequence',
  group: '六宫底座',
  title: '六宫身份与固定顺序',
  latin: 'Six-palace sequence',
  question: '大安、留连、速喜、赤口、小吉、空亡怎样形成一个循环？',
  summary: sixPalaceSequence.summary,
  count: '6 个掌诀位 · 1 条循环',
  tags: ['六宫', '固定顺序', '循环'],
  searchTerms: ['大安', '留连', '速喜', '赤口', '小吉', '空亡'],
  publicSources: sixPalaceSequence.public_sources,
  status: '正式版本节点 · 只保存身份',
}

export const monthDayHourCastingCard = {
  id: 'month-day-hour-casting',
  group: '起课结构',
  title: '月课、日课与时课',
  latin: 'Month, day & hour casting',
  question: '农历月、日与时支序数怎样依次进入同一条六宫循环？',
  summary: monthDayHourCasting.summary,
  count: '3 个输入 · 3 个累计步骤',
  tags: ['月课', '日课', '时课'],
  searchTerms: ['农历月', '农历日', '时支序数', '公式'],
  publicSources: monthDayHourCasting.public_sources,
  status: '正式版本规则 · 冻结输入',
}

export const fixedInputCastingReplayCard = {
  id: 'fixed-input-casting-replay',
  group: '固定案例',
  title: '固定输入逐步落宫',
  latin: 'Fixed-input casting replay',
  question: '同一个月、日、时输入，三个落点是怎样一步步算出来的？',
  summary: fixedInputCastingReplay.summary,
  count: '五月二十三 · 戌时序数11',
  tags: ['固定输入', '累计位次', '公式复演'],
  searchTerms: ['五月二十三', '戌时', '小吉', '速喜', '大安'],
  publicSources: fixedInputCastingReplay.public_sources,
  status: '正式固定案例 · 不进入解释',
}

export const versionRegisterCard = {
  id: 'version-register',
  group: '版本底账',
  title: '七套资料版本登记',
  latin: 'Seven-version register',
  question: '仓库里的七套小六壬材料分别是什么，哪些字段可以互相比较？',
  summary: versionRegister.summary,
  count: '7 套具名材料 · 3 种权利边界',
  tags: ['版本登记', '来源边界', '字段覆盖'],
  searchTerms: ['主流六神', '九神道门', '倪海厦', '版本二', '版本三', 'maifusha', 'jishiyu'],
  publicSources: versionRegister.public_sources,
  status: '正式来源登记 · 不选正统',
}

export const deitySystemComparisonCard = {
  id: 'deity-system-comparison',
  group: '对象差异',
  title: '六神与九神不是同一张表',
  latin: 'Six vs nine positions',
  question: '九神版只是六宫后面多三个名字吗？',
  summary: deitySystemComparison.summary,
  count: '6 位系统 · 9 位系统',
  tags: ['六神', '九神', '对象模型'],
  searchTerms: ['病符', '桃花', '天德', '九神道门'],
  publicSources: deitySystemComparison.public_sources,
  status: '正式版本比较 · 整表切换',
}

export const attributeVersionDifferencesCard = {
  id: 'attribute-version-differences',
  group: '属性分歧',
  title: '五行与方位的版本分歧',
  latin: 'Attribute differences',
  question: '同样叫留连，为什么会同时出现木、水、土三种五行？',
  summary: attributeVersionDifferences.summary,
  count: '6 个同名宫 · 3 套字段对照',
  tags: ['五行', '方位', '冲突并列'],
  searchTerms: ['留连', '木东南', '水北方', '土四角'],
  publicSources: attributeVersionDifferences.public_sources,
  status: '正式差异节点 · 不投票合并',
}

export const threeCourseStageModelCard = {
  id: 'three-course-stage-model',
  group: '三课关系',
  title: '三课的初期、过程与结果',
  latin: 'Three-course stage model',
  question: '月课、日课和时课得到三个落点之后，它们各自承担什么阶段身份？',
  summary: threeCourseStageModel.summary,
  count: '3 个阶段 · 复用3个落点',
  tags: ['月课', '过程结构', '版本语义'],
  searchTerms: ['初期', '过程', '结果', '三课'],
  publicSources: threeCourseStageModel.public_sources,
  status: '正式解释结构 · 不预测事件',
}

export const interpretationMaterialLayersCard = {
  id: 'interpretation-material-layers',
  group: '资料边界',
  title: '宫义资料分层与公开边界',
  latin: 'Interpretation material layers',
  question: '六宫属性、144条断辞和42条分类解释，为什么不能当成同一层内容公开？',
  summary: interpretationMaterialLayers.summary,
  count: '6 · 144 · 42 三层资料',
  tags: ['宫义', '断辞', '公开边界'],
  searchTerms: ['SQLite', '断辞', '分类解释', '运势', '身体', '神鬼'],
  publicSources: interpretationMaterialLayers.public_sources,
  status: '正式资料结构 · 受限内容不公开',
}

export const castingEntryConventionsCard = {
  id: 'casting-entry-conventions',
  group: '入口约定',
  title: '起课入口与起点约定',
  latin: 'Casting entry conventions',
  question: '为什么固定例从大安起，却不能说所有事项都从大安起？',
  summary: castingEntryConventions.summary,
  count: '2 条分流路线 · 1 个明确起点',
  tags: ['起课入口', '大安起点', '版本约定'],
  searchTerms: ['后事吉凶', '谋事择时', '当下点拨', '临时起意'],
  publicSources: castingEntryConventions.public_sources,
  status: '正式版本约定 · 缺失不补',
}

export const hourBranchInputBoundariesCard = {
  id: 'hour-branch-input-boundaries',
  group: '输入边界',
  title: '十二时辰输入与实现边界',
  latin: 'Hour-branch input boundaries',
  question: '时支序数可以进入公式，是否等于程序已经能可靠识别当前时辰？',
  summary: hourBranchInputBoundaries.summary,
  count: '12 个序数 · 2 个确认问题',
  tags: ['十二时辰', '子时跨日', '实现审计'],
  searchTerms: ['子时', '未时', '15;00', 'HourInt', 'NowDizhi'],
  publicSources: hourBranchInputBoundaries.public_sources,
  status: '正式实现边界 · 不读取当前时间',
}

export const fullDayHourPalaceDistributionCard = {
  id: 'full-day-hour-palace-distribution',
  group: '完整分布',
  title: '整日十二时辰的六宫分布',
  latin: 'Full-day hour distribution',
  question: '同一天把十二个时支全部代入，六宫会以什么规律重复？',
  summary: fullDayHourPalaceDistribution.summary,
  count: '12 个时支 · 6 组同宫对',
  tags: ['整日分布', '两轮循环', '固定输入'],
  searchTerms: ['子午', '丑未', '寅申', '卯酉', '辰戌', '巳亥'],
  publicSources: fullDayHourPalaceDistribution.public_sources,
  status: '正式固定分布 · 不作择时',
}

export const sixNineCastingPathComparisonCard = {
  id: 'six-nine-casting-path-comparison',
  group: '路径比较',
  title: '同一组三数的六位与九位路径',
  latin: 'Six vs nine casting paths',
  question: '同样输入五月、二十三、戌十一，六位版和九位版为什么会先分岔、再汇合？',
  summary: sixNineCastingPathComparison.summary,
  count: '2 套位序 · 3 步固定复演',
  tags: ['六位九位', '同输入比较', '路径分岔'],
  searchTerms: ['小吉速喜大安', '小吉天德大安', '循环长度'],
  publicSources: sixNineCastingPathComparison.public_sources,
  status: '正式版本比较 · 不判断案例',
}

export const palaceNumberFieldLayersCard = {
  id: 'palace-number-field-layers',
  group: '数字字段',
  title: '排位数、下一轮数与宫位关联数',
  latin: 'Palace number field layers',
  question: '大安旁边的1、7、4、5都叫“数字”，它们在结构里承担的是同一件事吗？',
  summary: palaceNumberFieldLayers.summary,
  count: '6 宫 · 3 层数字身份',
  tags: ['排位数', '下一轮', '字段身份'],
  searchTerms: ['1+6n', '宫位数', '关联数', '排位数'],
  publicSources: palaceNumberFieldLayers.public_sources,
  status: '正式字段节点 · 不执行取数',
}

export const inputNumberMethodCoverageCard = {
  id: 'input-number-method-coverage',
  group: '输入扩展',
  title: '时间三数、变通三数与任意数列',
  latin: 'Input number method coverage',
  question: '月、日、时三个字段与随手取得的三个数、任意多个数，真的属于同一种输入方法吗？',
  summary: inputNumberMethodCoverage.summary,
  count: '3 类入口 · 4 条确认缺口',
  tags: ['输入形状', '作者扩展', '规则覆盖'],
  searchTerms: ['时间三数', '变通三数', '任意数列', '随时取数'],
  publicSources: inputNumberMethodCoverage.public_sources,
  status: '正式覆盖节点 · 不开放报数',
}

export const palaceDoubleStemSourceAuditCard = {
  id: 'palace-double-stem-source-audit',
  group: '来源审计',
  title: '六宫双干字段与来源内冲突',
  latin: 'Double-stem source audit',
  question: '为什么同一份版本三笔记里，大安次干会同时出现“巳火”和“丁火”？',
  summary: palaceDoubleStemSourceAudit.summary,
  count: '6 宫 · 2 个字形冲突',
  tags: ['双干字段', '巳丁冲突', '待核验'],
  searchTerms: ['甲丁', '甲巳', '戊已', '戊己', '主干次干'],
  publicSources: palaceDoubleStemSourceAudit.public_sources,
  status: '正式来源审计 · 不静默纠错',
}

export const palaceDeityHouseMappingCard = {
  id: 'palace-deity-house-mapping',
  group: '对象关系',
  title: '六宫、神煞与主题宫名字段',
  latin: 'Palace, deity & topic fields',
  question: '大安、青龙、事业宫是三个同义名称，还是三层不同的对象关系？',
  summary: palaceDeityHouseMapping.summary,
  count: '6 组关系 · 2 份来源对齐',
  tags: ['神煞字段', '主题宫名', '关系映射'],
  searchTerms: ['青龙', '腾蛇', '事业宫', '疾厄宫', '福德宫'],
  publicSources: palaceDeityHouseMapping.public_sources,
  status: '正式关系节点 · 只保存名称',
}

export const palaceTrigramFieldComparisonCard = {
  id: 'palace-trigram-field-comparison',
  group: '卦位比较',
  title: '六宫卦位字段的共同项与分歧',
  latin: 'Trigram field comparison',
  question: '为什么四个宫的卦位对得上，留连与空亡却不能写成同一个答案？',
  summary: palaceTrigramFieldComparison.summary,
  count: '4 项对齐 · 2 项分歧',
  tags: ['卦位字段', '留连', '空亡'],
  searchTerms: ['震离兑坎', '巽坤乾艮', '中', '无卦'],
  publicSources: palaceTrigramFieldComparison.public_sources,
  status: '正式字段比较 · 分歧并列',
}

export const fourPlateAssemblyCard = {
  id: 'four-plate-assembly', group: '四盘实现', title: '四盘与附加层怎样逐层装配', latin: 'Four-plate assembly',
  question: '算出月、日、时三个落宫之后，天盘、人盘、神盘、五星与标记按照什么顺序接入？', summary: fourPlateAssembly.summary,
  count: '6 层装配 · 7 个输出字段', tags: ['四盘', '装配顺序', '实现分支'], searchTerms: ['地盘', '天盘', '人盘', '神盘', '五星'],
  publicSources: fourPlateAssembly.public_sources, status: '正式实现结构 · 特定作者版本',
}

export const timeNumberRouteImplementationCard = {
  id: 'time-number-route-implementation', group: '实现入口', title: '时间起课与报数起课的实现分流', latin: 'Time vs number routes',
  question: '时间与报数两条入口只是换了输入字段，还是连地盘路径也不同？', summary: timeNumberRouteImplementation.summary,
  count: '2 条路线 · 12 个位运算探针', tags: ['时间起课', '报数起课', '位运算审计'], searchTerms: ['num%6|6', '按位或', '数字5'],
  publicSources: timeNumberRouteImplementation.public_sources, status: '正式实现审计 · 不开放报数',
}

export const heavenBranchTwoStepSequenceCard = {
  id: 'heaven-branch-two-step-sequence', group: '天盘', title: '天盘地支怎样隔位顺排', latin: 'Two-step branch sequence',
  question: '为什么戌时放在大安以后，六宫依次得到戌、子、寅、辰、午、申？', summary: heavenBranchTwoStepSequence.summary,
  count: '6 宫 · 每宫前进2支', tags: ['天盘地支', '隔位顺排', '固定例'], searchTerms: ['戌子寅辰午申', 'getHeavenPlate'],
  publicSources: heavenBranchTwoStepSequence.public_sources, status: '正式固定复演 · 作者实现',
}

export const peopleSixRelationsSelfPalaceCard = {
  id: 'people-six-relations-self-palace', group: '人盘', title: '人盘六亲怎样以时宫为自身', latin: 'Six relations from self palace',
  question: '自身、父母、官鬼、妻财、子孙和兄弟怎样从天盘地支五行得到？', summary: peopleSixRelationsSelfPalace.summary,
  count: '6 个关系标签 · 1 条作者特例', tags: ['人盘', '六亲', '时宫为我'], searchTerms: ['自身', '父母', '官鬼', '妻财', '子孙', '兄弟'],
  publicSources: peopleSixRelationsSelfPalace.public_sources, status: '正式关系审计 · 不作取用',
}

export const dynamicGodBranchMappingCard = {
  id: 'dynamic-god-branch-mapping', group: '神盘', title: '神盘六神怎样由天盘地支取得', latin: 'Dynamic god mapping',
  question: '宫位固定关联神煞与地支动态取得六神，为什么不能合成同一张表？', summary: dynamicGodBranchMapping.summary,
  count: '12 支 · 6 神 · 动态落宫', tags: ['神盘', '六神', '动态映射'], searchTerms: ['青龙', '朱雀', '勾陈', '腾蛇', '白虎', '玄武'],
  publicSources: dynamicGodBranchMapping.public_sources, status: '正式动态映射 · 不合并静态表',
}

export const fiveStarAndThreeMarkLayersCard = {
  id: 'five-star-and-three-mark-layers', group: '显示层', title: '五星轮转与月日时标记', latin: 'Stars & input marks',
  question: '五星从哪里起排，月、日、时三个标签又为什么落在不同宫？', summary: fiveStarAndThreeMarkLayers.summary,
  count: '6 个星标签 · 3 类落点标记', tags: ['五星', '月日时标记', '日宫锚点'], searchTerms: ['辅木', '英火', '芮土', '柱金', '蓬水', '任空'],
  publicSources: fiveStarAndThreeMarkLayers.public_sources, status: '正式展示层 · 不采用星义',
}

export const engineInfoSourceConflictsCard = {
  id: 'engine-info-source-conflicts', group: '来源审计', title: '计算引擎与说明文本的内部冲突', latin: 'Engine vs text conflicts',
  question: '同一个仓库里，留连和小吉的五行为什么会在代码与说明中给出不同答案？', summary: engineInfoSourceConflicts.summary,
  count: '2 份文件 · 3 组冲突', tags: ['来源内冲突', '五行分歧', '对象模型'], searchTerms: ['留连土水', '小吉水木', '六合', '动态六神'],
  publicSources: engineInfoSourceConflicts.public_sources, status: '正式来源审计 · 不裁定正统',
}

export const xiaoliurenLearningStages = [
  {
    id: 'casting-foundation', label: '六宫与起课', note: '先理解六位循环、三步接续、固定例与时支输入边界。',
    cardIds: ['six-palace-sequence', 'month-day-hour-casting', 'fixed-input-casting-replay', 'casting-entry-conventions', 'hour-branch-input-boundaries', 'full-day-hour-palace-distribution'],
  },
  {
    id: 'versions-and-fields', label: '版本与字段', note: '再辨认对象数量、资料权利、数字字段和版本内部冲突。',
    cardIds: ['version-register', 'deity-system-comparison', 'attribute-version-differences', 'three-course-stage-model', 'interpretation-material-layers', 'six-nine-casting-path-comparison', 'palace-number-field-layers', 'input-number-method-coverage', 'palace-double-stem-source-audit', 'palace-deity-house-mapping', 'palace-trigram-field-comparison'],
  },
  {
    id: 'four-plate-implementation', label: '四盘实现', note: '沿冻结地盘追踪天盘、人盘、神盘、五星与标记的依赖关系。',
    cardIds: ['four-plate-assembly', 'time-number-route-implementation', 'heaven-branch-two-step-sequence', 'people-six-relations-self-palace', 'dynamic-god-branch-mapping', 'five-star-and-three-mark-layers'],
  },
  {
    id: 'source-closure', label: '来源收口', note: '最后确认代码与说明文本仍有哪些不能消除的冲突。',
    cardIds: ['engine-info-source-conflicts'],
  },
]

export const xiaoliurenCards = [
  xiaoliurenIntroductionCard,
  sixPalaceSequenceCard,
  monthDayHourCastingCard,
  fixedInputCastingReplayCard,
  versionRegisterCard,
  deitySystemComparisonCard,
  attributeVersionDifferencesCard,
  threeCourseStageModelCard,
  interpretationMaterialLayersCard,
  castingEntryConventionsCard,
  hourBranchInputBoundariesCard,
  fullDayHourPalaceDistributionCard,
  sixNineCastingPathComparisonCard,
  palaceNumberFieldLayersCard,
  inputNumberMethodCoverageCard,
  palaceDoubleStemSourceAuditCard,
  palaceDeityHouseMappingCard,
  palaceTrigramFieldComparisonCard,
  fourPlateAssemblyCard,
  timeNumberRouteImplementationCard,
  heavenBranchTwoStepSequenceCard,
  peopleSixRelationsSelfPalaceCard,
  dynamicGodBranchMappingCard,
  fiveStarAndThreeMarkLayersCard,
  engineInfoSourceConflictsCard,
]
