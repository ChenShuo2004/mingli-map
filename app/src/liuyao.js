import advancingRetreatingChange from '@published/liuyao/advancing-retreating-change.json'
import actionSourceLayers from '@published/liuyao/action-source-layers.json'
import auxiliaryMarkers from '@published/liuyao/auxiliary-markers.json'
import branchPunishmentHarm from '@published/liuyao/branch-punishment-harm.json'
import changedLineStates from '@published/liuyao/changed-line-states.json'
import hexagramBody from '@published/liuyao/hexagram-body.json'
import flyingHiddenSpirits from '@published/liuyao/flying-hidden-spirits.json'
import flyingHiddenRelations from '@published/liuyao/flying-hidden-relations.json'
import fourSpiritRoles from '@published/liuyao/four-spirit-roles.json'
import growthPeakTombAbsolute from '@published/liuyao/growth-peak-tomb-absolute.json'
import harmonyClashTurn from '@published/liuyao/harmony-clash-turn.json'
import hexagramChongHe from '@published/liuyao/hexagram-chong-he.json'
import hiddenMotionDayBreak from '@published/liuyao/hidden-motion-day-break.json'
import lineHarmonyStates from '@published/liuyao/line-harmony-states.json'
import movingLinesChange from '@published/liuyao/moving-lines-change.json'
import movingStaticPermissions from '@published/liuyao/moving-static-permissions.json'
import monthDayContext from '@published/liuyao/month-day-context.json'
import monthHexagramBody from '@published/liuyao/month-hexagram-body.json'
import multiMovingChain from '@published/liuyao/multi-moving-chain.json'
import monthBreakStateGates from '@published/liuyao/month-break-state-gates.json'
import najiaAssembly from '@published/liuyao/najia-assembly.json'
import palaceMembership from '@published/liuyao/palace-membership.json'
import repeatingOpposingChange from '@published/liuyao/repeating-opposing-change.json'
import returningChangeRelations from '@published/liuyao/returning-change-relations.json'
import sixRelatives from '@published/liuyao/six-relatives.json'
import sixSpiritsSequence from '@published/liuyao/six-spirits-sequence.json'
import singleMovingStill from '@published/liuyao/single-moving-still.json'
import spiritRoleStrength from '@published/liuyao/spirit-role-strength.json'
import selfResponse from '@published/liuyao/self-response.json'
import selfBodyMethods from '@published/liuyao/self-body-methods.json'
import seasonalStrengthByMonth from '@published/liuyao/seasonal-strength-by-month.json'
import threeHarmonyFormations from '@published/liuyao/three-harmony-formations.json'
import timingTriggers from '@published/liuyao/timing-triggers.json'
import trigramChangeRelations from '@published/liuyao/trigram-change-relations.json'
import twelveMessageHexagrams from '@published/liuyao/twelve-message-hexagrams.json'
import twoPresentSelection from '@published/liuyao/two-present-selection.json'
import voidSubstanceConditions from '@published/liuyao/void-substance-conditions.json'
import liuyaoPublicSources from '@published/liuyao/public-sources.json'

const liuyaoCardsWithPendingSources = [
  {
    id: 'hexagram-body', group: '结构与装配', title: '六爻卦体', latin: 'Hexagram body',
    question: '八个经卦怎样上下相重，形成六十四种六爻卦？', summary: hexagramBody.summary,
    count: '8 经卦 64 组合', tags: ['爻位', '内外卦', '六十四卦'],
  },
  {
    id: 'self-response', group: '结构与装配', title: '世应', latin: 'Self & response',
    question: '世应怎样定位，两端之间的间爻又在什么情况下才需要读取？', summary: selfResponse.summary,
    count: '8 种定位 3 组间爻', tags: ['世应定位', '间爻', '角色范围'],
  },
  {
    id: 'palace-membership', group: '结构与装配', title: '八宫', latin: 'Eight palaces',
    question: '六十四卦怎样沿逐爻变化被分入八个卦宫？', summary: palaceMembership.summary,
    count: '8 宫 64 卦', tags: ['八宫', '逐爻变序', '游魂归魂'],
  },
  {
    id: 'najia-assembly', group: '结构与装配', title: '纳甲', latin: 'Najia',
    question: '天干地支怎样进入一卦的六个爻位？', summary: najiaAssembly.summary,
    count: '8 卦 2 条支轨', tags: ['内外位置', '阴阳支轨', '固定起点'],
  },
  {
    id: 'six-relatives', group: '结构与装配', title: '六亲', latin: 'Six relatives',
    question: '六亲怎样由原卦宫生成，动爻变化后又为什么仍沿用同一个基准？', summary: sixRelatives.summary,
    count: '25 生成 125 转换', tags: ['原卦宫五行', '本爻六亲', '变爻六亲'],
  },
  {
    id: 'flying-hidden-spirits', group: '结构与装配', title: '飞神与伏神', latin: 'Flying & hidden',
    question: '缺少的六亲怎样映射成伏神，不同资料又按什么顺序读取它？',
    summary: '一卦缺少某类六亲时，可回到本宫纯卦的同一爻位标出伏神；伏神的位置结构与实际取用顺序分开保存，资料会在日月、变爻、伏神或另占之间采用不同路径。完成飞伏叠放后，再读取两层之间的生克方向与伏神条件。',
    count: '2 层 4 顺序 5 关系', tags: ['缺失六亲', '来源顺序', '飞伏作用'],
    sourceIds: ['flying-hidden-spirits', 'flying-hidden-relations'],
  },
  {
    id: 'six-spirits-sequence', group: '辅助符号', title: '六神', latin: 'Six spirits',
    question: '六个名称怎样排到爻位，又能提示什么而不能直接断什么？', summary: sixSpiritsSequence.summary,
    count: '6 神 6 起点', tags: ['日干起点', '象义提示', '条件读取'],
  },
  {
    id: 'auxiliary-markers', group: '辅助符号', title: '星煞', latin: 'Auxiliary markers',
    question: '星煞怎样从日干支或季节查到爻上，又为什么不能单独决定吉凶？', summary: auxiliaryMarkers.summary,
    count: '4 种查法 3 类基准', tags: ['贵人禄神', '驿马天喜', '辅助层级'],
  },
  {
    id: 'moving-lines-change', group: '动变与作用', title: '动爻与变卦', latin: 'Moving lines & change',
    question: '一次取爻怎样形成四种爻态，动爻又怎样产生变卦？',
    summary: '三钱一次生成一个爻态，连续六次由初爻记到上爻；老阴、老阳发动并翻转为变卦。变化形成后，既可比较内外经卦的整体变化，也可继续读取同位地支、进退、回头作用及变爻状态。',
    count: '4 爻态 7 层变化', tags: ['三钱取爻', '经卦变化', '本卦与变卦'],
    sourceIds: ['moving-lines-change', 'trigram-change-relations', 'repeating-opposing-change', 'advancing-retreating-change', 'returning-change-relations', 'changed-line-states', 'single-moving-still'],
  },
  {
    id: 'multi-moving-chain', group: '动变与作用', title: '爻的作用关系', latin: 'Line interactions',
    question: '作用箭头从哪里进入，又怎样成立、接续或改道？',
    summary: '作用可以从太岁、月建、日辰、卦中动爻或同位变爻进入；太岁先经过时间范围门，其他关系出现后也要看动静与旺衰是否允许箭头通过。多个动爻同时出现时，箭头还可能接续、截断或改道。',
    count: '5 种来源 4 种权限 6 条路线', tags: ['时间与卦内来源', '动静旺衰', '多动爻'],
    sourceIds: ['action-source-layers', 'moving-static-permissions', 'multi-moving-chain'],
  },
  {
    id: 'hexagram-chong-he', group: '地支关系', title: '六冲与六合', latin: 'Clash & harmony',
    question: '六冲、六合怎样落在卦与爻上，遇到动静和后续介入时又怎样变化？',
    summary: '六冲与六合先保存固定地支配对和卦级分类，再分别读取爻逢冲、爻逢合时的动静状态；已有冲合后来受到日月、动爻或卦变介入时，还会形成合处逢冲与冲中逢合。',
    count: '2 关系 4 个层次', tags: ['卦级冲合', '爻的动静', '关系转化'],
    sourceIds: ['hexagram-chong-he', 'hidden-motion-day-break', 'line-harmony-states', 'harmony-clash-turn'],
  },
  {
    id: 'three-harmony-formations', group: '地支关系', title: '三合局', latin: 'Three-harmony formations',
    question: '同一组三支，为什么还要追踪它们来自本卦、变爻还是日月？', summary: threeHarmonyFormations.summary,
    count: '4 局 4 路径', tags: ['三合成员', '动变来源', '缺一待补'],
  },
  {
    id: 'branch-punishment-harm', group: '地支关系', title: '三刑与六害', latin: 'Punishment & harm',
    question: '同一对地支，为什么可能同时出现刑与害？', summary: branchPunishmentHarm.summary,
    count: '4 刑类 6 害对', tags: ['月日与卦爻', '相刑', '标签重叠'],
  },
  {
    id: 'month-day-context', group: '时间与状态', title: '时间来源', latin: 'Time sources',
    question: '年、月、日怎样进入卦中，它们的作用范围为什么不同？',
    summary: '太岁、月建与日辰共同提供卦外时间背景：太岁主要承接年度、远期与少数大事，月建提供当月旺衰和月破，日辰提供当日关系与冲动触发；三者可以并列记录，但不能等权套用。',
    count: '3 时间源 3 种尺度', tags: ['太岁', '月建', '日辰'],
    sourceIds: ['month-day-context', 'seasonal-strength-by-month', 'month-break-state-gates'],
  },
  {
    id: 'twelve-message-hexagrams', group: '时间与状态', title: '十二消息卦', latin: 'Twelve waxing hexagrams',
    question: '十二个月建怎样沿一爻一月的变化，连成阴阳消长的一整圈？', summary: twelveMessageHexagrams.summary,
    count: '12 月建 12 卦', tags: ['消息卦', '月建', '阴阳消长'],
  },
  {
    id: 'growth-peak-tomb-absolute', group: '时间与状态', title: '生旺墓绝', latin: 'Growth, peak, tomb & absolute',
    question: '生旺墓绝怎样从十二阶段进入六爻，又为什么不能见墓就定论？', summary: growthPeakTombAbsolute.summary,
    count: '12 阶段 4 锚 3 墓源', tags: ['十二长生', '日墓动墓化墓', '入墓条件复核'],
  },
  {
    id: 'void-substance-conditions', group: '时间与状态', title: '旬空', latin: 'Void branches',
    question: '旬空怎样定位，空支当前是否有支撑，后来又怎样恢复？', summary: voidSubstanceConditions.summary,
    count: '定位 8 条件 3 路径', tags: ['六十甲子日旬', '当前状态', '出空填实冲空'],
  },
  {
    id: 'timing-triggers', group: '时间与状态', title: '应期', latin: 'Timing triggers',
    question: '一个状态已经成立以后，古籍怎样把它转换成后续时间关系？', summary: timingTriggers.summary,
    count: '4 类 16 条规则', tags: ['状态转时间', '值冲合生旺', '远近尺度'],
  },
  {
    id: 'month-hexagram-body', group: '定位与取用', title: '卦身与世身', latin: 'Hexagram & self body',
    question: '月卦身与世身分别怎样由世爻推出，又为什么不能混用？',
    summary: '月卦身由世爻阴阳和爻位推出一个地支，再检查是否上卦；世身则从世爻所纳地支反查爻位。两者输入、输出和资料评价不同，但都属于围绕世爻的辅助取法。',
    count: '2 种取法 12 地支', tags: ['月卦身', '世身', '两套映射'],
    sourceIds: ['month-hexagram-body', 'self-body-methods'],
  },
  {
    id: 'four-spirit-roles', group: '定位与取用', title: '用神与相关角色', latin: 'Useful and related roles',
    question: '观察对象怎样落到用神，原神、忌神、仇神又怎样随之生成？',
    summary: '先按观察对象与自身的关系，把目标落到世爻或相应六亲；再以该爻为中心生成原神、忌神、仇神。角色确定后仍要检查作用条件，同名用神出现两处时再并列比较候选。',
    count: '6 类入口 4 角色', tags: ['取用分类', '原忌仇', '两现取舍'],
    sourceIds: ['four-spirit-roles', 'spirit-role-strength', 'two-present-selection'],
  },
]

export const liuyaoIntroductionCard = {
  id: 'introduction-reading-map',
  group: '从零开始',
  title: '六爻从哪里开始',
  latin: 'Introduction & reading map',
  question: '第一次看到六条爻和一排术语，应该先分清哪几个层次？',
  summary: '先把一张六爻盘拆成六个问题：卦体与位置怎样成立，干支与六亲怎样装入，辅助符号怎样附加，动爻怎样改变关系，时间与地支状态怎样进入，最后怎样围绕目标读取用神与应期。导读完整连接二十个正式节点，并用一张固定盘示范字段身份；不接收真人问题，也不生成占断。',
  count: '1 张阅读图 · 20 个正式节点',
  tags: ['从零开始', '学习顺序', '固定案例'],
  searchTerms: ['六爻是什么', '六爻怎么看', '学习顺序', '新手入门'],
  publicSources: [],
  status: '产品导读节点 · 不新增规则',
}

export const liuyaoLearningStages = [
  { id: 'body', label: '先认卦体', question: '六条爻在哪里？', note: '先固定爻位、上下卦、八宫和世应位置。', cards: ['hexagram-body', 'palace-membership', 'self-response'] },
  { id: 'assembly', label: '完成装配', question: '信息怎样进入爻位？', note: '纳入干支、六亲，再处理缺项形成的飞伏两层。', cards: ['najia-assembly', 'six-relatives', 'flying-hidden-spirits'] },
  { id: 'symbols', label: '辨认辅助', question: '哪些只是附加标签？', note: '六神和星煞都有生成入口，但都不能脱离爻的关系单独判断。', cards: ['six-spirits-sequence', 'auxiliary-markers'] },
  { id: 'change', label: '读取动变', question: '关系怎样开始移动？', note: '先看动爻如何生成变卦，再追踪作用来源、权限与改道。', cards: ['moving-lines-change', 'multi-moving-chain'] },
  { id: 'states', label: '加入状态', question: '外部条件怎样进入？', note: '地支关系、年月份日、十二阶段与旬空分别进入，不压成一个强弱总分。', cards: ['hexagram-chong-he', 'three-harmony-formations', 'branch-punishment-harm', 'month-day-context', 'twelve-message-hexagrams', 'growth-peak-tomb-absolute', 'void-substance-conditions'] },
  { id: 'focus', label: '最后定位', question: '围绕什么继续读？', note: '辅助身法、目标角色与后续时间关系放在结构成立之后。', cards: ['month-hexagram-body', 'four-spirit-roles', 'timing-triggers'] },
]

export const liuyaoLearningPath = [
  '六爻从哪里开始',
  '六爻卦体',
  '八宫',
  '世应',
  '纳甲',
  '六亲',
  '飞神与伏神',
  '六神',
  '星煞',
  '动爻与变卦',
  '爻的作用关系',
  '六冲与六合',
  '三合局',
  '三刑与六害',
  '时间来源',
  '十二消息卦',
  '生旺墓绝',
  '旬空',
  '卦身与世身',
  '用神与相关角色',
  '应期',
]

const sourceIdsForCard = (card) => card.sourceIds || [card.id]
const liuyaoCardsMissingPublicSources = liuyaoCardsWithPendingSources.filter((card) => sourceIdsForCard(card).some((id) => !liuyaoPublicSources[id]?.length))
if (liuyaoCardsMissingPublicSources.length) {
  throw new Error(`六爻公开节点缺少公开资料：${liuyaoCardsMissingPublicSources.map((card) => card.title).join('、')}`)
}

const resolvedLiuyaoCards = liuyaoCardsWithPendingSources.map((card) => ({
    ...card,
    publicSources: sourceIdsForCard(card)
      .flatMap((id) => liuyaoPublicSources[id])
      .filter((source, index, sources) => sources.findIndex((item) => item.url === source.url) === index),
  }))

export const liuyaoCards = [
  { ...liuyaoIntroductionCard, publicSources: resolvedLiuyaoCards.slice(0, 3).flatMap((card) => card.publicSources).filter((source, index, sources) => sources.findIndex((item) => item.url === source.url) === index).slice(0, 3) },
  ...resolvedLiuyaoCards,
]

export const liuyaoGroups = [
  { name: '从零开始', items: ['六爻从哪里开始'] },
  { name: '结构与装配', items: ['六爻卦体', '世应', '八宫', '纳甲', '六亲', '飞神与伏神'] },
  { name: '辅助符号', items: ['六神', '星煞'] },
  { name: '动变与作用', items: ['动爻与变卦', '爻的作用关系'] },
  { name: '地支关系', items: ['六冲与六合', '三合局', '三刑与六害'] },
  { name: '时间与状态', items: ['时间来源', '十二消息卦', '生旺墓绝', '旬空', '应期'] },
  { name: '定位与取用', items: ['卦身与世身', '用神与相关角色'] },
]

export const liuyaoDatasets = { actionSourceLayers, advancingRetreatingChange, auxiliaryMarkers, branchPunishmentHarm, changedLineStates, flyingHiddenRelations, flyingHiddenSpirits, fourSpiritRoles, growthPeakTombAbsolute, harmonyClashTurn, hexagramBody, hexagramChongHe, hiddenMotionDayBreak, lineHarmonyStates, monthBreakStateGates, monthDayContext, monthHexagramBody, movingLinesChange, movingStaticPermissions, multiMovingChain, najiaAssembly, palaceMembership, repeatingOpposingChange, returningChangeRelations, seasonalStrengthByMonth, selfBodyMethods, sixRelatives, sixSpiritsSequence, singleMovingStill, spiritRoleStrength, selfResponse, threeHarmonyFormations, timingTriggers, trigramChangeRelations, twelveMessageHexagrams, twoPresentSelection, voidSubstanceConditions }
