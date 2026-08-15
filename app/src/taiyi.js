import boardAssemblyFixedExample from '@published/taiyi/board-assembly-fixed-example.json'
import boardSymbolIdentities from '@published/taiyi/board-symbol-identities.json'
import hostGuestRelationsFixedExample from '@published/taiyi/host-guest-relations-fixed-example.json'
import calculationModesVersionsFixedExample from '@published/taiyi/calculation-modes-versions-fixed-example.json'
import palaceCoordinateLayers from '@published/taiyi/palace-coordinate-layers.json'
import sixteenSpiritNames from '@published/taiyi/sixteen-spirit-names.json'
import eightGatesFixedDynamic from '@published/taiyi/eight-gates-fixed-dynamic.json'
import fourIndependentSpiritsSequences from '@published/taiyi/four-independent-spirits-sequences.json'
import threeBasesFiveBlessingsCycles from '@published/taiyi/three-bases-five-blessings-cycles.json'
import bigSmallWanderingCycles from '@published/taiyi/big-small-wandering-cycles.json'
import threeDoorsFiveGeneralsChecks from '@published/taiyi/three-doors-five-generals-checks.json'
import palaceYinyangCountParity from '@published/taiyi/palace-yinyang-count-parity.json'
import countCategoryTable from '@published/taiyi/count-category-table.json'
import threeTalentsStructuralTags from '@published/taiyi/three-talents-structural-tags.json'
import compositeEncirclementChecks from '@published/taiyi/composite-encirclement-checks.json'
import windBirdCycleSequences from '@published/taiyi/wind-bird-cycle-sequences.json'
import fiveEssenceCycleCoordinates from '@published/taiyi/five-essence-cycle-coordinates.json'
import taiyiNumberSeventyTwo from '@published/taiyi/taiyi-number-seventy-two.json'
import tenEssenceYinOpposites from '@published/taiyi/ten-essence-yin-opposites.json'
import heavenEarthHumanTriplets from '@published/taiyi/heaven-earth-human-triplets.json'
import fiveZiYuanCycle from '@published/taiyi/five-zi-yuan-cycle.json'
import epochYuanFieldBoundaries from '@published/taiyi/epoch-yuan-field-boundaries.json'
import yinYangDunInputSources from '@published/taiyi/yin-yang-dun-input-sources.json'
import hourCountMultipleCycles from '@published/taiyi/hour-count-multiple-cycles.json'
import hourShortcutDayBranchBlocks from '@published/taiyi/hour-shortcut-day-branch-blocks.json'
import monthCountLeapDualBoundaries from '@published/taiyi/month-count-leap-dual-boundaries.json'
import dayCountCalendarBoundaries from '@published/taiyi/day-count-calendar-boundaries.json'
import yearCountBoundaries from '@published/taiyi/year-count-boundaries.json'
import classicalSourcesMap from '@published/taiyi/classical-sources-map.json'
import minuteCount from '@published/taiyi/minute-count.json'
import twentyEightLodges from '@published/taiyi/twenty-eight-lodges.json'
import nineStars from '@published/taiyi/nine-stars.json'
import fiveTones from '@published/taiyi/five-tones.json'
import fiveMovementsSixQi from '@published/taiyi/five-movements-six-qi.json'
import threeFlags from '@published/taiyi/three-flags.json'
import ninePalaceGods from '@published/taiyi/nine-palace-gods.json'
import territorialCorrespondences from '@published/taiyi/territorial-correspondences.json'
import unifiedFortuneCycle from '@published/taiyi/unified-fortune-cycle.json'
import yangNineHundredSix from '@published/taiyi/yang-nine-hundred-six.json'
import cityNames from '@published/taiyi/city-names.json'
import palaceStates from '@published/taiyi/palace-states.json'
import twoEyesTransformations from '@published/taiyi/two-eyes-transformations.json'

export const taiyiDatasets = { boardAssemblyFixedExample, boardSymbolIdentities, hostGuestRelationsFixedExample, calculationModesVersionsFixedExample, palaceCoordinateLayers, sixteenSpiritNames, eightGatesFixedDynamic, fourIndependentSpiritsSequences, threeBasesFiveBlessingsCycles, bigSmallWanderingCycles, threeDoorsFiveGeneralsChecks, palaceYinyangCountParity, countCategoryTable, threeTalentsStructuralTags, compositeEncirclementChecks, windBirdCycleSequences, fiveEssenceCycleCoordinates, taiyiNumberSeventyTwo, tenEssenceYinOpposites, heavenEarthHumanTriplets, fiveZiYuanCycle, epochYuanFieldBoundaries, yinYangDunInputSources, hourCountMultipleCycles, hourShortcutDayBranchBlocks, monthCountLeapDualBoundaries, dayCountCalendarBoundaries, yearCountBoundaries, classicalSourcesMap, minuteCount, twentyEightLodges, nineStars, fiveTones, fiveMovementsSixQi, threeFlags, ninePalaceGods, territorialCorrespondences, unifiedFortuneCycle, yangNineHundredSix, cityNames, palaceStates, twoEyesTransformations }

export const taiyiIntroductionCard = {
  id: 'taiyi-reading-map',
  group: '从零开始',
  title: '先认识太乙',
  latin: 'Taiyi introduction',
  question: '第一次看到五计、七十二局、十六神位和主客算时，应该先把太乙理解成什么？',
  summary: '太乙先把时间换成积数、局号与阴阳遁，再装进式盘宫位和符号层，最后才进入主客算和位置关系。当前这张地图先解释计法、盘面、符号与关系怎样层层进入，不把断语直接当作第一层入口。',
  count: '1 张导读 · 5 段阅读顺序',
  tags: ['太乙入门', '时间积数', '式盘结构'],
  searchTerms: ['太乙是什么', '五计', '七十二局', '主客算', '式盘'],
  publicSources: [
    ...new Map([
      ...classicalSourcesMap.public_sources,
      ...calculationModesVersionsFixedExample.public_sources,
      ...hostGuestRelationsFixedExample.public_sources,
    ].map((source) => [source.url, source])).values(),
  ].slice(0, 3),
  status: '导读节点',
}

export const calculationModesVersionsCard = {
  id: 'calculation-modes-versions',
  group: '计法与版本',
  title: '五种时间粒度与四个积年分支',
  latin: 'Time scales & accumulated-number branches',
  question: '年、月、日、时、分与四个具名分支，分别控制计算的哪一层？',
  summary: calculationModesVersionsFixedExample.summary,
  count: '5 种粒度 · 4 个分支',
  tags: ['时间粒度', '积年分支', '命法旁路'],
  publicSources: calculationModesVersionsFixedExample.public_sources,
  status: '正式结构节点 · 接口边界已校正',
}

export const boardAssemblyFixedExampleCard = {
  id: 'board-symbol-layers',
  group: '式盘与符号层',
  title: '固定年计装盘',
  latin: 'Fixed yearly board assembly',
  question: '一个年计时刻，怎样从积年数走到局数、太乙落宫与主客算？',
  summary: boardAssemblyFixedExample.summary,
  count: '1 个固定例 · 3 步生成',
  tags: ['积年数', '七十二局', '太乙落宫'],
  publicSources: boardAssemblyFixedExample.public_sources,
  status: '正式结构节点 · 锁定实现',
}

export const boardSymbolIdentitiesCard = {
  id: 'board-symbol-identities',
  group: '式盘与符号层',
  title: '盘面符号身份',
  latin: 'Board symbol identities',
  question: '太乙、二目、计神、诸将与另行推步的神，分别属于哪条生成支线？',
  summary: boardSymbolIdentities.summary,
  count: '5 组角色 · 12 类对象',
  tags: ['主客二目', '计神定目', '诸将'],
  publicSources: boardSymbolIdentities.public_sources,
  status: '正式结构节点 · 原典与实现并列',
}

export const palaceCoordinateLayersCard = {
  id: 'palace-coordinate-layers',
  group: '式盘与符号层',
  title: '九宫与十六神位',
  latin: 'Nine palaces & sixteen positions',
  question: '九宫数字与十六神位为什么会同时出现在一张太乙式盘上？',
  summary: palaceCoordinateLayers.summary,
  count: '9 宫 · 16 个神位',
  tags: ['九宫数', '正宫间神', '十六神位'],
  publicSources: palaceCoordinateLayers.public_sources,
  status: '正式坐标节点 · 原典与实现分层',
}

export const sixteenSpiritNamesCard = {
  id: 'sixteen-spirit-names',
  group: '式盘与符号层',
  title: '十六神名称与四时序列',
  latin: 'Sixteen position names & seasonal sequence',
  question: '十六个位置各自叫什么，名称为什么沿四时排列？',
  summary: sixteenSpiritNames.summary,
  count: '16 个神名 · 4 组序列',
  tags: ['十六神名', '四时序列', '版本异名'],
  publicSources: sixteenSpiritNames.public_sources,
  status: '正式身份节点 · 异名并列',
}

export const eightGatesFixedDynamicCard = {
  id: 'eight-gates-fixed-dynamic',
  group: '式盘与符号层',
  title: '八门固定身份与动态分布',
  latin: 'Eight gates: fixed identities & dynamic layout',
  question: '八门的固定卦位，为什么不等于每张盘里的实际落宫？',
  summary: eightGatesFixedDynamic.summary,
  count: '8 门 · 4 个分支',
  tags: ['八门身份', '值事门', '动态落宫'],
  publicSources: eightGatesFixedDynamic.public_sources,
  status: '正式结构节点 · 固定与动态分层',
}

export const fourIndependentSpiritsSequencesCard = {
  id: 'four-independent-spirits-sequences',
  group: '式盘与符号层',
  title: '四神、天乙、地乙与直符的独立局序',
  latin: 'Four independent spirit sequences',
  question: '四个另行推步的对象，为什么不能被合并成一条共同落位规则？',
  summary: fourIndependentSpiritsSequences.summary,
  count: '4 个对象 · 4 条局序',
  tags: ['四神', '天乙地乙', '直符局序'],
  publicSources: fourIndependentSpiritsSequences.public_sources,
  status: '正式结构节点 · 原典与局表分层',
}

export const threeBasesFiveBlessingsCyclesCard = {
  id: 'three-bases-five-blessings-cycles',
  group: '式盘与符号层',
  title: '君臣民三基与五福的周期入口',
  latin: 'Three bases & Five Blessings cycles',
  question: '同在一张盘上的三基与五福，分别读取积年还是七十二局数？',
  summary: threeBasesFiveBlessingsCycles.summary,
  count: '4 个对象 · 2 条路径',
  tags: ['君臣民三基', '五福', '周期入口'],
  publicSources: threeBasesFiveBlessingsCycles.public_sources,
  status: '正式周期节点 · 原典与实现分层',
}

export const bigSmallWanderingCyclesCard = {
  id: 'big-small-wandering-cycles',
  group: '式盘与符号层',
  title: '大游与小游的周期结构及实现缺口',
  latin: 'Big & small wandering cycles',
  question: '同名为“游太乙”的大游与小游，周期、起宫和实现状态有什么不同？',
  summary: bigSmallWanderingCycles.summary,
  count: '2 套周期 · 4 个分支审计 · 5 处实现边界',
  tags: ['大游小游', '周期结构', '实现审计'],
  publicSources: bigSmallWanderingCycles.public_sources,
  status: '正式审计节点 · 异常返回不补写',
}

export const hostGuestRelationsCard = {
  id: 'host-guest-structure',
  group: '主客算与关系',
  title: '主客算与七类位置关系',
  latin: 'Host–guest counts & spatial relations',
  question: '主、客、定三类算怎样生成将宫，七种关系又分别检查什么位置条件？',
  summary: hostGuestRelationsFixedExample.summary,
  count: '3 类算 · 7 类关系',
  tags: ['主客定算', '大将参将', '位置证据'],
  publicSources: hostGuestRelationsFixedExample.public_sources,
  status: '正式结构节点 · 固定例证据',
}

export const threeDoorsFiveGeneralsCard = {
  id: 'three-doors-five-generals-checks',
  group: '主客算与关系',
  title: '三门与五将的判定结构',
  latin: 'Three Doors & Five Generals checks',
  question: '“三门具”“五将发”分别检查哪些对象，原典条件与程序条件相同吗？',
  summary: threeDoorsFiveGeneralsChecks.summary,
  count: '2 条判定链 · 4 个分支复核',
  tags: ['三门具不具', '五将发不发', '条件差异'],
  publicSources: threeDoorsFiveGeneralsChecks.public_sources,
  status: '正式判定节点 · 原典与实现分层',
}

export const palaceYinyangCountParityCard = {
  id: 'palace-yinyang-count-parity',
  group: '主客算与关系',
  title: '太乙宫阴阳与主客算奇偶',
  latin: 'Palace nature & count parity',
  question: '太乙所在宫的阴阳，怎样与主算、客算的奇偶配成重阳、重阴或阴阳和？',
  summary: palaceYinyangCountParity.summary,
  count: '2 条输入轴 · 4 格组合 · 4 个分支复核',
  tags: ['宫位阴阳', '算数奇偶', '阴阳和'],
  publicSources: palaceYinyangCountParity.public_sources,
  status: '正式组合节点 · 断语已收敛',
}

export const countCategoryTableCard = {
  id: 'count-category-table',
  group: '主客算与关系',
  title: '主客定算的十类数名与空缺值',
  latin: 'Count categories & unmapped values',
  question: '主算、客算、定算得到完整数值后，怎样查到纯阴、杂重阳或上和等数类名？',
  summary: countCategoryTable.summary,
  count: '10 类名称 · 30 个映射 · 10 个空缺',
  tags: ['纯杂阴阳', '上次下和', '实现空缺'],
  publicSources: countCategoryTable.public_sources,
  status: '正式清单节点 · 原典映射待校',
}

export const threeTalentsStructuralTagsCard = {
  id: 'three-talents-structural-tags',
  group: '主客算与关系',
  title: '三才足数与无天、无地、无人条件',
  latin: 'Three Talents structural tags',
  question: '三才足数、无天、无地、无人是互斥分类，还是可以叠加的数值条件？',
  summary: threeTalentsStructuralTags.summary,
  count: '4 类条件 · 2 组重叠 · 1 处实现差异',
  tags: ['三才数', '多标签条件', '原典实现差异'],
  publicSources: threeTalentsStructuralTags.public_sources,
  status: '正式条件节点 · 断语已剥离',
}

export const compositeEncirclementChecksCard = {
  id: 'composite-encirclement-checks',
  group: '主客算与关系',
  title: '四郭固、郭杜、执提与提挟的组合条件',
  latin: 'Composite encirclement checks',
  question: '基础的同宫、相邻与对宫关系，怎样进一步组成四郭固、郭杜、执提或提挟？',
  summary: compositeEncirclementChecks.summary,
  count: '4 组组合 · 8 个子条件 · 3 类覆盖缺口',
  tags: ['高级组合', '目将门宫', '实现覆盖审计'],
  publicSources: compositeEncirclementChecks.public_sources,
  status: '正式组合节点 · 缺失分支已标明',
}

export const windBirdCycleSequencesCard = {
  id: 'wind-bird-cycle-sequences', group: '式盘与符号层',
  title: '飞鸟与三风、五风、八风的周期序列', latin: 'Wind & bird cycle sequences',
  question: '飞鸟与三类风怎样从积年进入宫位，原典周期与程序余数为什么不同？',
  summary: windBirdCycleSequences.summary,
  count: '4 条周期 · 4 个分支复核 · 3 类返回异常',
  tags: ['飞鸟三风', '五风八风', '周期实现审计'],
  publicSources: windBirdCycleSequences.public_sources,
  status: '正式周期节点 · 异常返回不补写',
}

export const fiveEssenceCycleCoordinatesCard = {
  id: 'five-essence-cycle-coordinates', group: '式盘与符号层',
  title: '天皇、帝符、天时、太尊与五行的周期坐标', latin: 'Five essence cycle coordinates',
  question: '五个十精对象都从积年起算，为什么不能共用一张余数—宫位表？',
  summary: fiveEssenceCycleCoordinates.summary,
  count: '5 条周期 · 4 种坐标 · 5 个边界样本',
  tags: ['十精周期', '坐标分层', '整除分支'],
  publicSources: fiveEssenceCycleCoordinates.public_sources,
  status: '正式周期节点 · 混合坐标已拆分',
}

export const taiyiNumberSeventyTwoCard = {
  id: 'taiyi-number-seventy-two', group: '计法与版本',
  title: '太乙数与七十二局数的同值异义', latin: 'Taiyi number & board-number identity',
  question: '太乙数与七十二局数为什么总是同值，却不能合并成同一个知识字段？',
  summary: taiyiNumberSeventyTwo.summary,
  count: '4 层数值 · 3 条公式 · 6 个边界样本',
  tags: ['太乙数', '七十二局', '同值异义'],
  publicSources: taiyiNumberSeventyTwo.public_sources,
  status: '正式计数节点 · 数值与身份分层',
}

export const heavenEarthHumanTripletsCard = {
  id: 'heaven-earth-human-triplets', group: '计法与版本',
  title: '七十二局的理天、理地、理人三年标签', latin: 'Heaven–earth–human triplets',
  question: '七十二局为什么每三局重复一次理天、理地、理人，它与太乙每宫三年是什么关系？',
  summary: heavenEarthHumanTriplets.summary,
  count: '24 组三局 · 2 条驻宫轨道 · 6 个边界组',
  tags: ['理天理地理人', '三局一宫', '二十四局轮次'],
  publicSources: heavenEarthHumanTriplets.public_sources,
  status: '正式周期节点 · 阶段与宫位分层',
}

export const fiveZiYuanCycleCard = {
  id: 'five-zi-yuan-cycle', group: '计法与版本',
  title: '五子元的五段七十二局与三百六十编号', latin: 'Five Zi-yuan cycle',
  question: '同一个七十二局号，怎样由干支定位到五子元之一，并形成1至360总编号？',
  summary: fiveZiYuanCycle.summary,
  count: '5 元 · 6 纪 · 360 总编号 · 2 个实现缺口',
  tags: ['五子元', '六纪甲子', '三百六十编号'],
  publicSources: fiveZiYuanCycle.public_sources,
  status: '正式计数节点 · 元名与总编号分层',
}

export const epochYuanFieldBoundariesCard = {
  id: 'epoch-yuan-field-boundaries', group: '计法与版本',
  title: '六纪、三元与五子元的字段边界', latin: 'Epoch & yuan field boundaries',
  question: '纪、上中下元、五子元与程序“纪元”字符串分别是什么，为什么不能合并？',
  summary: epochYuanFieldBoundaries.summary,
  count: '4 层字段 · 10 个边界 · 20 组返回',
  tags: ['六纪三元', '五子元边界', '纪元字段审计'],
  publicSources: epochYuanFieldBoundaries.public_sources,
  status: '正式字段节点 · 混合输出已拆分',
}

export const yinYangDunInputSourcesCard = {
  id: 'yin-yang-dun-input-sources', group: '计法与版本',
  title: '阴阳遁的二至分界与分计输入旁路', latin: 'Yin–yang dun input routes',
  question: '年、月、日、时、分的阴阳遁，读取的是节气、积数还是不同层级的干支？',
  summary: yinYangDunInputSources.summary,
  count: '5 种入口 · 7 个交节样本 · 2 组分计矩阵',
  tags: ['冬夏二至', '阴阳遁入口', '分计旁路'],
  publicSources: yinYangDunInputSources.public_sources,
  status: '正式取值节点 · 交节缺口已标明',
}

export const hourCountMultipleCyclesCard = {
  id: 'hour-count-multiple-cycles', group: '计法与版本',
  title: '时计积时的二十四、六十与七十二周期', latin: 'Hour count across 24, 60 & 72',
  question: '同一个积时数为什么要分别除以24、60与72，它们各自回答什么？',
  summary: hourCountMultipleCycles.summary,
  count: '3 个周期 · 4 个method · 10 个时间探针',
  tags: ['时计积时', '二四六十七十二', '历史日期断点'],
  publicSources: hourCountMultipleCycles.public_sources,
  status: '正式计数节点 · 负日差断点已标明',
}

export const hourShortcutDayBranchBlocksCard = {
  id: 'hour-shortcut-day-branch-blocks', group: '计法与版本',
  title: '时计捷法的六类日支与十二时局序', latin: 'Hour shortcut by day-branch blocks',
  question: '子午、丑未等六类日支，怎样决定子时起局并走满七十二局？',
  summary: hourShortcutDayBranchBlocks.summary,
  count: '6 类日支 · 12 时局序 · 720 组校验',
  tags: ['时计捷法', '六类日支', '晚子换日'],
  publicSources: hourShortcutDayBranchBlocks.public_sources,
  status: '正式局序节点 · 720组合已校验',
}

export const monthCountLeapDualBoundariesCard = {
  id: 'month-count-leap-dual-boundaries', group: '计法与版本',
  title: '月计的十二乘积月、闰月与双重月界', latin: 'Month count, leap months & dual boundaries',
  question: '月计究竟何时加一：农历朔日、闰月开始，还是节气交接？',
  summary: monthCountLeapDualBoundaries.summary,
  count: '4 层月字段 · 8 个边界探针 · 4 个method',
  tags: ['月计积月', '闰月标记', '节气月界'],
  publicSources: monthCountLeapDualBoundaries.public_sources,
  status: '正式月界节点 · 双时钟已拆分',
}

export const tenEssenceYinOppositesCard = {
  id: 'ten-essence-yin-opposites', group: '式盘与符号层',
  title: '十精阳遁基位与阴遁冲位', latin: 'Ten essences: yang bases & yin opposites',
  question: '阴遁十精应取阳遁所在之冲，锁定程序为什么只转换了太乙本体？',
  summary: tenEssenceYinOpposites.summary,
  count: '8 组十六位对冲 · 4 个阴遁分支 · 3 层覆盖审计',
  tags: ['十精阴阳遁', '对冲坐标', '覆盖缺口'],
  publicSources: tenEssenceYinOpposites.public_sources,
  status: '正式转换节点 · 派生位不冒充实现',
}

const mergePublicSources = (...cards) => {
  const sourcesByUrl = new Map()
  cards.flatMap((card) => card.publicSources || []).forEach((source) => {
    const current = sourcesByUrl.get(source.url)
    if (!current) {
      sourcesByUrl.set(source.url, { ...source })
      return
    }
    const titles = [...new Set([current.title, source.title])]
    const notes = [...new Set([current.note, source.note].filter(Boolean))]
    sourcesByUrl.set(source.url, { ...current, title: titles.join('；'), note: notes.join('；') })
  })
  return [...sourcesByUrl.values()]
}

const section = (id, label, note) => ({ id, label, note })

export const taiyiCompactCards = [
  taiyiIntroductionCard,
  {
    id: 'classical-sources', group: '计法与版本', title: '典籍', latin: 'Classical sources',
    question: '当前太乙网页依据哪些典籍，底本、OCR、程序实现与项目判断又分别处在哪一层？',
    summary: classicalSourcesMap.summary,
    count: '5 组古籍 · 4 层证据', tags: ['来源地图', '版本边界', '规则追溯'],
    status: '正式来源节点', publicSources: classicalSourcesMap.public_sources,
    sections: [section('classical-sources-map', '来源地图', '核心典籍、证据层次与当前节点覆盖')],
  },
  {
    id: 'five-counts', group: '计法与版本', title: '五计', latin: 'Five time scales',
    question: '年、月、日、时、分五种计法，分别怎样把时间送入太乙式盘？',
    summary: '先辨认年、月、日、时、分五种普通式盘入口，再区分四个积数分支与独立命法旁路。这里建立全专题的入口地图，不把软件接口直接当作古籍共识。',
    count: '5 种计法 · 4 个分支', tags: ['时间粒度', '积数分支', '命法旁路'],
    status: '正式结构节点', publicSources: calculationModesVersionsCard.publicSources,
    sections: [section('calculation-modes-versions', '五计入口', '五种时间粒度、四个积数分支与命法旁路')],
  },
  {
    id: 'seventy-two-boards', group: '计法与版本', title: '七十二局', latin: 'Seventy-two boards',
    question: '七十二局的局号、理天理地理人标签与三年驻宫轨道怎样衔接？',
    summary: '七十二局既是取余后的局号，又承接理天、理地、理人的三局标签与太乙三年移宫节律。各层数值可以相同，但知识身份不能混写。',
    count: '72 局 · 24 组三局', tags: ['局号身份', '理天理地理人', '三局一宫'],
    status: '正式周期节点', publicSources: mergePublicSources(taiyiNumberSeventyTwoCard, heavenEarthHumanTripletsCard),
    sections: [
      section('taiyi-number-seventy-two', '局号身份', '太乙数、七十二局数与各层取余字段'),
      section('heaven-earth-human-triplets', '三局标签', '理天、理地、理人与驻宫轨道'),
    ],
  },
  {
    id: 'epochs', group: '计法与版本', title: '纪元', latin: 'Epoch cycles',
    question: '六纪、三元、五子元与三百六十总编号分别处在哪一层？',
    summary: '把六纪、上中下三元、五子元、元内七十二局和三百六十总编号放回同一套周期结构，同时保留程序“纪元”字段与传统名称之间的边界。',
    count: '6 纪 · 5 元 · 360 编号', tags: ['六纪三元', '五子元', '总编号'],
    status: '正式周期节点', publicSources: mergePublicSources(fiveZiYuanCycleCard, epochYuanFieldBoundariesCard),
    sections: [
      section('five-zi-yuan-cycle', '五子元', '五段七十二局与三百六十总编号'),
      section('epoch-yuan-field-boundaries', '字段边界', '六纪、三元、五子元与程序返回字段'),
    ],
  },
  {
    id: 'tongyun', group: '计法与版本', title: '统运入卦路线与实现缺口', latin: 'Unified fortune cycle',
    question: '公元年怎样进入11520年、十二运、卦与爻，当前实现又在哪里没有闭合？',
    summary: unifiedFortuneCycle.summary,
    count: '12 运 · 1 条入卦链', tags: ['11520年', '十二运', '入卦入爻'],
    status: '正式结构审计节点', publicSources: unifiedFortuneCycle.public_sources,
    sections: [section('unified-fortune-cycle', '统运结构', '大周、十二运、固定探针与实现缺口')],
  },
  {
    id: 'yang-nine-hundred-six', group: '计法与版本', title: '阳九百六', latin: 'Yang-nine and Hundred-six',
    question: '阳九与百六各有哪两层周期，岁计支位为什么不能替代积年限数？',
    summary: yangNineHundredSix.summary,
    count: '2 组大小限 · 3 条输入路线', tags: ['阳九', '百六', '限数周期'],
    status: '正式周期审计节点', publicSources: yangNineHundredSix.public_sources,
    sections: [section('yang-nine-hundred-six', '阳九百六结构', '岁计支位、两组大小限、九会表与实现缺口')],
  },
  {
    id: 'yin-yang-dun', group: '计法与版本', title: '阴阳遁', latin: 'Yin and yang dun',
    question: '不同计法怎样确定阴阳遁，二至交界与分计旁路又在哪里？',
    summary: '年、月、日、时、分并不共享一条定遁输入路线。二至气应、各计法输入、顺逆方向以及交节处尚未解决的实现缺口分开保存。',
    count: '5 种入口 · 7 个交节样本', tags: ['冬夏二至', '定遁入口', '分计旁路'],
    status: '正式取值节点', publicSources: yinYangDunInputSourcesCard.publicSources,
    sections: [section('yin-yang-dun-input-sources', '定遁路线', '二至分界、各计法输入与分计旁路')],
  },
  {
    id: 'year-count', group: '计法与版本', title: '年计', latin: 'Year count',
    question: '公历年、岁干支与农历年在什么时候换年，积年数实际读取哪一层？',
    summary: '年计把公历年份、立春换岁的岁干支、正月初一换岁的农历年与积年原数分开保存。两条原典检查点、四个method常数和2024双年界共同说明：局号相同并不代表积年原数或全部积年周期相同。',
    count: '4 层年字段 · 5 个年界样本', tags: ['积年', '双年界', '四个常数'],
    status: '正式计数节点', publicSources: yearCountBoundaries.public_sources,
    sections: [section('year-count-boundaries', '年计结构', '公历年、岁干支、农历年与积年数')],
  },
  {
    id: 'month-count', group: '计法与版本', title: '月计', latin: 'Month count',
    question: '月计何时加一，农历月、闰月与节气月界怎样同时存在？',
    summary: '月计同时涉及积月、农历数字月、闰月标记与节气月干支。页面保留农历朔日和节气交接两套月界，避免把局号变化与月干支变化误认为同一时钟。',
    count: '4 层月字段 · 8 个边界样本', tags: ['积月', '闰月', '双重月界'],
    status: '正式月界节点', publicSources: monthCountLeapDualBoundariesCard.publicSources,
    sections: [section('month-count-leap-dual-boundaries', '月计结构', '积月、闰标记、农历月界与节气月界')],
  },
  {
    id: 'day-count', group: '计法与版本', title: '日计', latin: 'Day count',
    question: '积月怎样转为积日，程序中的公历日差又在哪些日界发生错位？',
    summary: '日计先把时间累积为日数，再分别进入周纪、七十二局与太乙宫轨。原典的积月、闰法和朔策路线与锁定程序的公历日差／农历近似路线分开保存，并用同日小时与农历月首检查连续性。',
    count: '3 条路线 · 11 个边界样本', tags: ['积日', '日界', '闰月与连续性'],
    status: '正式计数节点', publicSources: dayCountCalendarBoundaries.public_sources,
    sections: [section('day-count-calendar-boundaries', '日计结构', '积日、周期、局号与三类日界')],
  },
  {
    id: 'hour-count', group: '计法与版本', title: '时计', latin: 'Hour count',
    question: '时计通法的多重周期与六类日支捷法，怎样得到同一套局序？',
    summary: '时计通法让同一个积时数分别进入二十四、六十与七十二周期；捷法则以六类日支确定子时起局，再随十二时支顺排。两种方法并列展示，不混成一条公式。',
    count: '3 个周期 · 6 类日支', tags: ['积时周期', '时计捷法', '晚子换日'],
    status: '正式计数节点', publicSources: mergePublicSources(hourCountMultipleCyclesCard, hourShortcutDayBranchBlocksCard),
    sections: [
      section('hour-count-multiple-cycles', '积时通法', '二十四、六十与七十二三条周期支线'),
      section('hour-shortcut-day-branch-blocks', '日支捷法', '六类日支、十二时局序与换日边界'),
    ],
  },
  {
    id: 'minute-count', group: '计法与版本', title: 'kintaiyi分计扩展', latin: 'Minute count',
    question: '程序怎样把每一分钟变成分干支、积分数和局号，它为什么不能直接当作已有古法？',
    summary: minuteCount.summary,
    count: '60 分干支 · 4 个分支', tags: ['现代扩展', '积分数', '定遁旁路'],
    status: '正式实现节点', publicSources: minuteCount.public_sources,
    sections: [section('minute-count', '分计结构', '分干支、积分、局号、定遁与下游缺口')],
  },
  {
    id: 'board', group: '式盘与符号', title: '式盘', latin: 'Taiyi board',
    question: '一张太乙式盘有哪些对象，它们又按什么先后被装入？',
    summary: '先辨认太乙、二目、计神、诸将与另行推步诸神的身份和依赖路径，再用固定年计案例观察积年、局号、落宫与主客算如何逐步进入盘面。',
    count: '5 组角色 · 1 个固定例', tags: ['盘面对象', '生成支线', '固定装盘'],
    status: '正式结构节点', publicSources: mergePublicSources(boardSymbolIdentitiesCard, boardAssemblyFixedExampleCard),
    sections: [
      section('board-symbol-identities', '符号身份', '盘面角色、依赖路径与术语差异'),
      section('board-symbol-layers', '固定装盘', '从积年数到局号、落宫与主客算'),
    ],
  },
  {
    id: 'sixteen-spirit-positions', group: '式盘与符号', title: '十六神位', latin: 'Sixteen positions',
    question: '九宫数字、十六个位置与四时神名怎样叠在同一张盘上？',
    summary: '九宫与十六神位是两套相互映射而不等同的坐标；十六个固定位置又各有沿四时排列的名称。坐标、神名和版本异名在同一入口内分层查看。',
    count: '9 宫 · 16 神位', tags: ['九宫映射', '十六神名', '四时序列'],
    status: '正式坐标节点', publicSources: mergePublicSources(palaceCoordinateLayersCard, sixteenSpiritNamesCard),
    sections: [
      section('palace-coordinate-layers', '宫位映射', '九宫数字、正宫间神与十六位置'),
      section('sixteen-spirit-names', '神名序列', '十六神名、四时次序与版本异名'),
    ],
  },
  {
    id: 'palace-states', group: '式盘与符号', title: '宫位状态', latin: 'Palace states',
    question: '宫位取得坐标后，节气旺衰、九宫身份与阴阳绝易分别怎样叠加？',
    summary: palaceStates.summary,
    count: '3 层状态 · 8 宫轮转 · 4 类绝易', tags: ['节气旺衰', '九宫身份', '阴阳绝易'],
    status: '正式结构节点', publicSources: palaceStates.public_sources,
    sections: [section('palace-states', '宫位状态结构', '节气旺衰、九宫身份、绝易命中与固定分支')],
  },
  {
    id: 'twenty-eight-lodges', group: '式盘与符号', title: '二十八宿', latin: 'Twenty-eight lodges',
    question: '宿序、神位锚宿、太岁宿、始击宿和值日宿，分别读取哪一条输入？',
    summary: twentyEightLodges.summary,
    count: '28 宿 · 16 个锚宿 · 4 条路线', tags: ['宿序', '太岁宿', '始击与值日'],
    status: '正式结构节点', publicSources: twentyEightLodges.public_sources,
    sections: [section('twenty-eight-lodges', '二十八宿结构', '宿序、锚宿、三条普通式盘路线与命法边界')],
  },
  {
    id: 'nine-stars', group: '式盘与符号', title: '太乙九星与文昌九星', latin: 'Nine stars',
    question: '太乙九星与文昌九星为什么不能合成同一套星名、周期和宫位表？',
    summary: nineStars.summary,
    count: '2 套九星 · 4 个周期尺度', tags: ['太乙九星', '文昌九星', '周期与分布'],
    status: '正式对照节点', publicSources: nineStars.public_sources,
    sections: [section('nine-stars', '两套九星', '星名、周期、固定输出与宫位实现缺口')],
  },
  {
    id: 'five-tones', group: '式盘与符号', title: '五音', latin: 'Five tones',
    question: '宫商角徵羽怎样分别从算数、太乙宫、日支和时支生成？',
    summary: fiveTones.summary,
    count: '5 音 · 5 条输入', tags: ['算数五音', '五音之元', '宫与日時支'],
    status: '正式结构节点', publicSources: fiveTones.public_sources,
    sections: [section('five-tones', '五音结构', '数字、河图元、地支、太乙宫与固定结果')],
  },
  {
    id: 'five-movements-six-qi', group: '式盘与符号', title: 'kintaiyi五运六气入口', latin: 'Five movements and six qi',
    question: '年干五运、年支司天、在泉与盘面主客气，当前实现分别覆盖到哪一步？',
    summary: fiveMovementsSixQi.summary,
    count: '5 运 · 6 气 · 5 层入口', tags: ['年干五运', '司天在泉', '主客气缺口'],
    status: '正式结构节点', publicSources: fiveMovementsSixQi.public_sources,
    sections: [section('five-movements-six-qi', '五运六气结构', '年度入口、固定输出与未完成的主客步序')],
  },
  {
    id: 'three-flags', group: '式盘与符号', title: '三旗', latin: 'Three flags',
    question: '青龙、太阴与害气三旗为什么要各走一条积年周期？',
    summary: threeFlags.summary,
    count: '3 旗 · 3 条周期', tags: ['青龙旗', '太阴旗', '害气旗'],
    status: '正式周期节点', publicSources: threeFlags.public_sources,
    sections: [section('three-flags', '三旗结构', '三条周期、固定输出与同位边界')],
  },
  {
    id: 'nine-palace-gods', group: '式盘与符号', title: '九宫贵神', latin: 'Nine palace gods',
    question: '九位贵神怎样选出直事者，再从中宫飞布九宫？',
    summary: ninePalaceGods.summary,
    count: '9 神 · 9 种直事', tags: ['直事贵神', '入中', '九宫飞布'],
    status: '正式分布节点', publicSources: ninePalaceGods.public_sources,
    sections: [section('nine-palace-gods', '九宫贵神结构', '神名、直事序、入中与固定分布')],
  },
  {
    id: 'fenye', group: '式盘与符号', title: '分野', latin: 'Territorial correspondences',
    question: '十二辰、九宫和三座特殊宫，分别怎样连接古代州国与十二次？',
    summary: territorialCorrespondences.summary,
    count: '12 辰 · 9 宫 · 3 特宫', tags: ['十二辰分野', '九宫分野', '历史州国'],
    status: '正式映射节点', publicSources: territorialCorrespondences.public_sources,
    sections: [section('territorial-correspondences', '分野结构', '十二辰、九宫、三座特殊宫与固定例')],
  },
  {
    id: 'city-names', group: '式盘与符号', title: 'kintaiyi卷十一城名支线', latin: 'City-name methods',
    question: '州国月数、城名诸术与飞符路线为什么应放在同一个输入节点里？',
    summary: cityNames.summary,
    count: '6 条支线 · 4 组共享输入', tags: ['城名干支', '州国月数', '卷十一接口'],
    status: '正式接口审计节点', publicSources: cityNames.public_sources,
    sections: [section('city-names', '城名结构', '共享输入、六条支线、固定分支与公开边界')],
  },
  {
    id: 'eight-gates', group: '式盘与符号', title: '八门', latin: 'Eight gates',
    question: '八门的固定卦位身份与每局的动态分布有什么不同？',
    summary: '开、休、生、伤、杜、景、死、惊各有固定身份；具体盘面还要经过值事门与旋转规则生成动态落宫，两层不能互相替代。',
    count: '8 门 · 4 个分支', tags: ['固定身份', '值事门', '动态落宫'],
    status: '正式结构节点', publicSources: eightGatesFixedDynamicCard.publicSources,
    sections: [section('eight-gates-fixed-dynamic', '八门结构', '固定身份、值事门与动态分布')],
  },
  {
    id: 'independent-spirits', group: '式盘与符号', title: '独立神序', latin: 'Independent spirits',
    question: '四个另行推步的对象为什么要保留各自独立的局序？',
    summary: '四神、天乙、地乙与直符各有独立的原典锚点或实现局表。名称相邻不等于推步规则相同，地乙原典路径的缺口也继续单独标记。',
    count: '4 个对象 · 4 条局序', tags: ['独立推步', '局序', '来源缺口'],
    status: '正式结构节点', publicSources: fourIndependentSpiritsSequencesCard.publicSources,
    sections: [section('four-independent-spirits-sequences', '独立局序', '四神、天乙、地乙与直符的四条路线')],
  },
  {
    id: 'three-bases-five-blessings', group: '式盘与符号', title: '三基与五福', latin: 'Three bases and Five Blessings',
    question: '君臣民三基与五福分别读取积年还是七十二局数？',
    summary: '君基、臣基、民基与五福同在式盘，却并不共享一条输入路径。页面保留各自周期、起点、实现路线与固定样本差异。',
    count: '4 个对象 · 2 条路径', tags: ['君臣民三基', '五福', '周期入口'],
    status: '正式周期节点', publicSources: threeBasesFiveBlessingsCyclesCard.publicSources,
    sections: [section('three-bases-five-blessings-cycles', '周期入口', '三基与五福的周期、输入路径和固定样本')],
  },
  {
    id: 'big-small-wandering', group: '式盘与符号', title: '大游与小游', latin: 'Big and small wandering',
    question: '大游与小游的周期、起宫和当前实现状态有什么不同？',
    summary: '大游与小游是两套独立周期。原典常数、推步路线、程序返回与缺失值分别保存；异常返回不会被补写成传统宫位。',
    count: '2 套周期 · 4 个分支', tags: ['大游', '小游', '实现缺口'],
    status: '正式周期节点', publicSources: bigSmallWanderingCyclesCard.publicSources,
    sections: [section('big-small-wandering-cycles', '大小游周期', '两套周期、起宫、程序返回与实现缺口')],
  },
  {
    id: 'ten-essences', group: '式盘与符号', title: '十精', latin: 'Ten essences',
    question: '十精各自怎样取周期坐标，阴遁时又如何处理对冲位置？',
    summary: '太乙本体与飞鸟、三风、五风、八风、天皇、帝符、天时、太尊、五行共同组成十精，但各自使用的周期和坐标域不同。阴遁对冲规则与当前实现覆盖另作一层核对。',
    count: '10 个对象 · 3 层结构', tags: ['周期序列', '坐标域', '阴遁对冲'],
    status: '正式周期节点', publicSources: mergePublicSources(windBirdCycleSequencesCard, fiveEssenceCycleCoordinatesCard, tenEssenceYinOppositesCard),
    sections: [
      section('wind-bird-cycle-sequences', '风鸟序列', '飞鸟、三风、五风与八风'),
      section('five-essence-cycle-coordinates', '五精坐标', '天皇、帝符、天时、太尊与五行'),
      section('ten-essence-yin-opposites', '阴遁对冲', '十精阳遁基位、阴遁冲位与实现覆盖'),
    ],
  },
  {
    id: 'host-guest-counts', group: '主客算与关系', title: '主客算', latin: 'Host and guest counts',
    question: '主、客、定三算如何生成，又会派生出哪些数类、三才和位置关系？',
    summary: '以主算、客算、定算为共同入口，依次查看将宫与位置关系、宫位阴阳和算数奇偶、十类数名，以及三才足数等可叠加条件。各派生层共享输入，但不互相替代。',
    count: '3 类算 · 4 层派生', tags: ['主客定算', '数类', '三才与位置'],
    status: '正式结构节点', publicSources: mergePublicSources(hostGuestRelationsCard, palaceYinyangCountParityCard, countCategoryTableCard, threeTalentsStructuralTagsCard),
    sections: [
      section('host-guest-structure', '生成与位置', '主客定三算、诸将与七类位置关系'),
      section('palace-yinyang-count-parity', '阴阳奇偶', '太乙宫阴阳与主客算奇偶组合'),
      section('count-category-table', '数类', '十类数名、实现映射与空缺值'),
      section('three-talents-structural-tags', '三才', '足数与无天、无地、无人条件'),
    ],
  },
  {
    id: 'two-eyes-transformations', group: '主客算与关系', title: '二目变化', latin: 'Two-eye transformations',
    question: '同属二目的文昌与始击，为什么分别读取空间关系与岁干五行？',
    summary: twoEyesTransformations.summary,
    count: '2 条路线 · 8 类文昌条件 · 25 格始击矩阵', tags: ['文昌变化', '始击变化', '未执行分支'],
    status: '正式结构审计节点', publicSources: twoEyesTransformations.public_sources,
    sections: [section('two-eyes-transformations', '二目变化结构', '文昌空间条件、始击五行矩阵与实现缺口')],
  },
  {
    id: 'three-doors-five-generals', group: '主客算与关系', title: '三门五将', latin: 'Three Doors and Five Generals',
    question: '三门具与五将发分别检查哪些对象，原典条件与程序条件相同吗？',
    summary: '三门与五将是两条独立判定链。页面把原典组合条件、锁定函数输入、分支顺序和固定返回分开呈现，不用同一返回词证明全部传统条件成立。',
    count: '2 条判定链 · 4 个分支', tags: ['三门', '五将', '条件差异'],
    status: '正式判定节点', publicSources: threeDoorsFiveGeneralsCard.publicSources,
    sections: [section('three-doors-five-generals-checks', '判定结构', '三门与五将的检查对象、分支和来源差异')],
  },
  {
    id: 'composite-relations', group: '主客算与关系', title: '复合关系', latin: 'Composite relations',
    question: '基础的同宫、相邻与对宫关系怎样组成四类复合条件？',
    summary: '四郭固、郭杜、执提与提挟都由更基础的位置关系组合而成。页面保留各自输入对象、判定步骤、实现覆盖与缺失分支，不因同属复合关系而抹平差异。',
    count: '4 组组合 · 8 个子条件', tags: ['复合关系', '目将门宫', '覆盖缺口'],
    status: '正式组合节点', publicSources: compositeEncirclementChecksCard.publicSources,
    sections: [section('composite-encirclement-checks', '组合条件', '四郭固、郭杜、执提与提挟的输入和判定步骤')],
  },
]

export const taiyiLearningStages = [
  { id: 'orientation', label: '先认入口', note: '先知道太乙不是直接读断语，而是先把时间送进一套积数和局式。', cardIds: ['taiyi-reading-map', 'classical-sources', 'five-counts'] },
  { id: 'cycles', label: '再认周期', note: '七十二局、纪元、阴阳遁和五计边界决定时间怎样进入。', cardIds: ['seventy-two-boards', 'epochs', 'yin-yang-dun', 'year-count', 'month-count', 'day-count', 'hour-count', 'minute-count'] },
  { id: 'board', label: '再认盘面', note: '盘面不是一块板，而是九宫、十六神位、八门与多条独立周期的叠层。', cardIds: ['board', 'sixteen-spirit-positions', 'eight-gates', 'independent-spirits', 'three-bases-five-blessings', 'big-small-wandering', 'ten-essences'] },
  { id: 'relations', label: '最后认关系', note: '主客算与位置关系是建立在前面盘面对象已经装好的基础上。', cardIds: ['host-guest-counts', 'three-doors-five-generals', 'composite-relations'] },
]

export const taiyiLearningPath = [
  '先认识太乙',
  '典籍',
  '五计',
  '七十二局',
  '纪元',
  '阴阳遁',
  '年计',
  '月计',
  '日计',
  '时计',
  '分计',
  '式盘',
  '十六神位',
  '八门',
  '主客算',
  '三门与五将',
]
