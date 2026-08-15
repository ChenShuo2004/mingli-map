import calendarCoordinateLayers from '@published/almanac/calendar-coordinate-layers.json'
import calendarBoundaries from '@published/almanac/calendar-boundaries.json'
import almanacFieldLayers from '@published/almanac/almanac-field-layers.json'
import twelveDayOfficers from '@published/almanac/twelve-day-officers.json'
import twelveDayGods from '@published/almanac/twelve-day-gods.json'
import twentyEightMansions from '@published/almanac/twenty-eight-mansions.json'
import dailyNineStars from '@published/almanac/daily-nine-stars.json'
import moonPhasesLunarDays from '@published/almanac/moon-phases-lunar-days.json'
import pengzuTaboos from '@published/almanac/pengzu-taboos.json'
import dayClashSha from '@published/almanac/day-clash-sha.json'
import dailyAuspiciousDirections from '@published/almanac/daily-auspicious-directions.json'
import nobleDirections from '@published/almanac/noble-directions.json'
import jupiterDirections from '@published/almanac/jupiter-directions.json'
import fetalSpiritDirections from '@published/almanac/fetal-spirit-directions.json'
import dayGoodGods from '@published/almanac/day-good-gods.json'
import dayBadGods from '@published/almanac/day-bad-gods.json'
import dayRecommendsAvoids from '@published/almanac/day-recommends-avoids.json'
import twelveDoubleHours from '@published/almanac/twelve-double-hours.json'
import hourGods from '@published/almanac/hour-gods.json'
import hourFields from '@published/almanac/hour-fields.json'
import activityIndex from '@published/almanac/activity-index.json'
import candidateFiltering from '@published/almanac/candidate-filtering.json'
import dayHourCombination from '@published/almanac/day-hour-combination.json'
import ruleConflicts from '@published/almanac/rule-conflicts.json'

export const almanacDatasets = { calendarCoordinateLayers, calendarBoundaries, almanacFieldLayers, twelveDayOfficers, twelveDayGods, twentyEightMansions, dailyNineStars, moonPhasesLunarDays, pengzuTaboos, dayClashSha, dailyAuspiciousDirections, nobleDirections, jupiterDirections, fetalSpiritDirections, dayGoodGods, dayBadGods, dayRecommendsAvoids, twelveDoubleHours, hourGods, hourFields, activityIndex, candidateFiltering, dayHourCombination, ruleConflicts }

const cleanSources = (sources) => sources.map((source) => ({
  ...source,
  title: source.title.replace('锁定实现', '黄历字段实现'),
  note: source.note
    .replaceAll('锁定版本', '固定样本')
    .replaceAll('锁定实现', '公开实现')
    .replaceAll('已验收实现', '公开实现'),
}))

export const almanacIntroductionCard = {
  id: 'almanac-reading-map', group: '从零开始', title: '黄历择日从哪里开始', latin: 'Introduction & reading map',
  question: '黄历上并列的日期、神煞、方位和宜忌，应该按什么顺序理解？',
  summary: '先固定日期坐标，再辨认每日周期、干支规则、宜忌与时辰，最后比较择日规则怎样组合；导读只连接五个阶段，不增加吉凶结论。',
  count: '5 个阶段 · 18 个正式节点', tags: ['从零开始', '阅读顺序', '栏目总览'],
  searchTerms: ['黄历是什么', '老黄历怎么看', '择日学习顺序'], publicSources: [],
  status: '产品导读节点 · 不新增规则',
}

export const calendarCoordinateCard = {
  id: 'calendar-coordinate-layers', group: '日期底座', title: '一天的多重日期坐标', latin: 'Calendar coordinates',
  question: '同一天为什么会同时出现公历、农历、干支与节气字段？', summary: calendarCoordinateLayers.summary,
  count: '6 层日期字段 · 1 个固定样本', tags: ['公历农历', '四柱干支', '节气'],
  searchTerms: calendarCoordinateLayers.fixed_example.layers.flatMap((item) => [item.label, item.value, item.basis]),
  publicSources: cleanSources(calendarCoordinateLayers.public_sources), status: '正式坐标节点 · 历法与实现分层',
}

export const calendarBoundariesCard = {
  id: 'calendar-boundaries', group: '日期底座', title: '黄历中的年月日边界', latin: 'Calendar boundaries',
  question: '元旦、正月初一、立春、节气和子时分别切换哪个字段？', summary: calendarBoundaries.summary,
  count: '3 种尺度 · 7 条边界', tags: ['年界', '月界', '日界'],
  searchTerms: calendarBoundaries.boundary_rows.flatMap((item) => [item.field, item.boundary]),
  publicSources: cleanSources(calendarBoundaries.public_sources), status: '正式边界节点 · 版本口径并列',
}

export const twelveDayOfficersCard = {
  id:'twelve-day-officers', group:'每日周期', title:'建除十二值的生成顺序', latin:'Twelve Day Officers',
  question:'月支与日支怎样把一天放进建、除、满至闭的十二位循环？', summary:twelveDayOfficers.summary,
  count:'12 个值名 · 1 条月日关系', tags:['建除十二值','月建','日支'],
  searchTerms:twelveDayOfficers.sequence, publicSources:cleanSources(twelveDayOfficers.public_sources), status:'正式周期节点 · 生成顺序明确',
}
export const twelveDayGodsCard = {
  id:'twelve-day-gods', group:'每日周期', title:'十二天神的轮值与黄黑分类', latin:'Twelve Day Gods',
  question:'青龙到勾陈怎样轮值，黄道与黑道又是在分哪一层？', summary:twelveDayGods.summary,
  count:'12 天神 · 6 黄道6黑道', tags:['十二天神','黄道','黑道'],
  searchTerms:twelveDayGods.sequence.flatMap((item)=>[item.name,item.class]), publicSources:cleanSources(twelveDayGods.public_sources), status:'正式分类节点 · 起点按月支',
}
export const twentyEightMansionsCard = {
  id:'twenty-eight-mansions', group:'每日周期', title:'二十八宿的四象结构', latin:'Twenty-Eight Mansions',
  question:'二十八个星空分区怎样归入东、北、西、南四象？', summary:twentyEightMansions.summary,
  count:'4 象 · 28 宿', tags:['四象','黄赤道','每日轮值'],
  searchTerms:twentyEightMansions.zones.flatMap((item)=>[item.direction,item.symbol,...item.mansions]), publicSources:cleanSources(twentyEightMansions.public_sources), status:'正式对象节点 · 天文与历注分层',
}
export const dailyNineStarsCard = {
  id:'daily-nine-stars', group:'每日周期', title:'每日九星的顺逆序', latin:'Daily Nine Stars',
  question:'一白到九紫怎样按冬夏至分段顺行或逆行？', summary:dailyNineStars.summary,
  count:'9 星 · 2 个冬夏至转折', tags:['日家九星','冬夏至','顺逆序'],
  searchTerms:dailyNineStars.stars.flatMap((item)=>[item.name,item.element]), publicSources:cleanSources(dailyNineStars.public_sources), status:'正式周期节点 · 顺逆口径明确',
}
export const moonPhasesCard = {
  id:'moon-phases-lunar-days', group:'每日周期', title:'月相与农历日序', latin:'Moon phases & lunar days',
  question:'朔、上弦、望、下弦为什么不能固定等同于初一、初八、十五和廿三？', summary:moonPhasesLunarDays.summary,
  count:'4 个主相位 · 8 个显示段', tags:['朔望月','月相时刻','农历日序'],
  searchTerms:[...moonPhasesLunarDays.display_segments,...moonPhasesLunarDays.principal_phases.map((item)=>item.name)], publicSources:cleanSources(moonPhasesLunarDays.public_sources), status:'正式天文节点 · 日期不机械等同',
}

export const pengzuTaboosCard = {
  id:'pengzu-taboos', group:'干支规则', title:'彭祖百忌', latin:'Pengzu taboos',
  question:'一天的两条彭祖百忌，分别怎样由日干和日支取得？', summary:pengzuTaboos.summary,
  count:'10 条干忌 · 12 条支忌', tags:['日干','日支','传统历注'], searchTerms:[...pengzuTaboos.stem_rows.map((item)=>item.stem+item.text),...pengzuTaboos.branch_rows.map((item)=>item.branch+item.text)], publicSources:cleanSources(pengzuTaboos.public_sources), status:'正式文本节点 · 不作风险判断',
}
export const dayClashShaCard = {
  id:'day-clash-sha', group:'干支规则', title:'日冲与煞方', latin:'Daily clash & sha direction',
  question:'“冲兔”和“煞东”为什么是两个不同字段？', summary:dayClashSha.summary,
  count:'6 组相冲 · 4 组煞方', tags:['六冲','冲支','煞方'], searchTerms:dayClashSha.rows.flatMap((item)=>[item.branch,item.clash,item.sha]), publicSources:cleanSources(dayClashSha.public_sources), status:'正式关系节点 · 不匹配真人生肖',
}
export const dailyDirectionsCard = {
  id:'daily-auspicious-directions', group:'干支规则', title:'日干对应的六类神方', latin:'Daily spirit directions',
  question:'喜神、福神、财神、阳贵神和阴贵神怎样按日干分别查表？', summary:'黄历中的喜神、福神、财神、阳贵神和阴贵神都以日干为入口，但属于不同对应表；福神的两套表并列保留。',
  count:'10 日干 · 6 列神方', tags:['喜神','福神','财神','阳贵神','阴贵神'], searchTerms:[...dailyAuspiciousDirections.rows.flatMap((item)=>Object.values(item)),...nobleDirections.rows.flatMap((item)=>Object.values(item))], publicSources:cleanSources([...dailyAuspiciousDirections.public_sources,...nobleDirections.public_sources]), status:'正式方位节点 · 六列分开读取',
}
export const jupiterDirectionsCard = {
  id:'jupiter-directions', group:'干支规则', title:'年、月、日太岁的尺度', latin:'Jupiter directions by scale',
  question:'黄历写“太岁方”时，怎样判断它说的是年、月还是日？', summary:jupiterDirections.summary,
  count:'3 种尺度 · 12 年支方位', tags:['年太岁','月太岁','日太岁'], searchTerms:[...jupiterDirections.scales.flatMap((item)=>[item.label,item.input]),...jupiterDirections.year_rows.flatMap((item)=>[item.branch,item.direction])], publicSources:cleanSources(jupiterDirections.public_sources), status:'正式尺度节点 · 年月日分开读取',
}
export const fetalSpiritCard = {
  id:'fetal-spirit-directions', group:'干支规则', title:'胎神占方的三段结构', latin:'Fetal spirit directions',
  question:'“房床门外西南”怎样由干支对象与六十日方位拼成？', summary:fetalSpiritDirections.summary,
  count:'5 组干位 · 6 组支位 · 60 日方位', tags:['六甲胎神','日干支','内外方位'], searchTerms:[...fetalSpiritDirections.stem_objects.flatMap((item)=>[item.stems,item.object]),...fetalSpiritDirections.branch_objects.flatMap((item)=>[item.branches,item.object])], publicSources:cleanSources(fetalSpiritDirections.public_sources), status:'正式结构节点 · 排除孕产建议',
}

export const dayGoodGodsCard = {
  id:'day-good-gods', group:'宜忌与时辰', title:'吉神与凶煞怎样进入宜忌', latin:'Daily favorable & unfavorable gods',
  question:'吉神、凶煞名单与最终宜忌事项，为什么是不同层次？', summary:'吉神宜趋与凶煞宜忌分别列出当天参与判断的神煞；它们需要结合所管事项与其他规则读取，不能按名称数量直接合成一天的吉凶。',
  count:'6 个吉神 · 3 个凶煞 · 1 组固定日', tags:['吉神宜趋','凶煞宜忌','事项范围'], searchTerms:[...dayGoodGods.items.flatMap((item)=>[item.name,item.identity]),...dayBadGods.items.flatMap((item)=>[item.name,item.identity])], publicSources:cleanSources([...dayGoodGods.public_sources,...dayBadGods.public_sources]), status:'正式神煞节点 · 与事项栏分层',
}
export const dayRecommendsAvoidsCard = {
  id:'day-recommends-avoids', group:'宜忌与时辰', title:'每日宜与忌', latin:'Daily recommends & avoids',
  question:'每日宜忌怎样从神煞输入进入事项清单，空忌栏又表示什么？', summary:dayRecommendsAvoids.summary,
  count:'22 项宜 · 忌栏无列出事项', tags:['每日宜忌','事项表','空栏'], searchTerms:[...dayRecommendsAvoids.fixed_example.recommends,...dayRecommendsAvoids.fixed_example.avoids], publicSources:cleanSources(dayRecommendsAvoids.public_sources), status:'正式事项节点 · 原栏位如实呈现',
}
export const twelveDoubleHoursCard = {
  id:'twelve-double-hours', group:'宜忌与时辰', title:'十二时辰与时干支', latin:'Twelve double-hours',
  question:'十二个时辰为什么在一个民用日期页面里会显示十三个时间槽？', summary:twelveDoubleHours.summary,
  count:'12 支位 · 13 个民用日期槽', tags:['十二时辰','时干支','早晚子时'], searchTerms:twelveDoubleHours.slots.flatMap((item)=>[item.slot,item.time,item.ganzhi]), publicSources:cleanSources(twelveDoubleHours.public_sources), status:'正式时间节点 · 23时口径明确',
}
export const hourGodsCard = {
  id:'hour-gods', group:'宜忌与时辰', title:'时神与黄道黑道', latin:'Hourly gods',
  question:'黄道时为什么仍可能在时忌栏出现“诸事不宜”？', summary:hourGods.summary,
  count:'13 槽时神 · 黄黑两类', tags:['时神','黄道','黑道'], searchTerms:hourGods.slots.flatMap((item)=>[item.god,item.class,item.ganzhi]), publicSources:cleanSources(hourGods.public_sources), status:'正式分类节点 · 不替代时宜忌',
}
export const hourFieldsCard = {
  id:'hour-fields', group:'宜忌与时辰', title:'时冲煞与时辰宜忌', latin:'Hourly almanac fields',
  question:'每个时辰的冲、煞、宜、忌怎样保持为四个独立字段？', summary:hourFields.summary,
  count:'13 个时间槽 · 4 类字段', tags:['时冲','时煞','时宜忌'], searchTerms:hourFields.slots.flatMap((item)=>[item.ganzhi,item.clash,item.sha,...item.yi,...item.ji]), publicSources:cleanSources(hourFields.public_sources), status:'正式时辰节点 · 不输出实时建议',
}

export const candidateFilteringCard = {
  id:'candidate-filtering', group:'择日结构', title:'一件事项怎样比较日期与时辰', latin:'Activity-first day & hour comparison',
  question:'从确定事项到比较日期、展开时辰，应该按什么顺序读取？', summary:'择日先固定一项具体事项和日期范围，再分别读取日宜、日忌与未列出；对演示日期继续展开时辰，并把黄黑道、事项宜忌和日时尺度分开理解。',
  count:'5 步 · 7 个日期 · 13 个时槽', tags:['以事为纲','候选日期','日时组合'], searchTerms:[...activityIndex.fixed_example.items.flatMap((item)=>[item.group,...item.activities]),...candidateFiltering.candidates.flatMap((item)=>Object.values(item)),...dayHourCombination.slots.flatMap((item)=>Object.values(item))], publicSources:cleanSources([...candidateFiltering.public_sources,...dayHourCombination.public_sources,...ruleConflicts.public_sources]), status:'正式流程节点 · 固定案例只演示读法',
}

export const almanacCards = [almanacIntroductionCard, calendarCoordinateCard, calendarBoundariesCard, twelveDayOfficersCard, twelveDayGodsCard, twentyEightMansionsCard, dailyNineStarsCard, moonPhasesCard, pengzuTaboosCard, dayClashShaCard, dailyDirectionsCard, jupiterDirectionsCard, fetalSpiritCard, dayGoodGodsCard, dayRecommendsAvoidsCard, twelveDoubleHoursCard, hourGodsCard, hourFieldsCard, candidateFilteringCard]

export const almanacLearningStages = [
  { id: 'foundation', label: '日期底座', note: '先看栏目总览，再辨认公历、农历、干支与节气', cardIds: ['calendar-coordinate-layers', 'calendar-boundaries'], status: '2 个节点' },
  { id: 'cycles', label: '每日周期', note: '建除、十二天神、二十八宿、九星与月相', cardIds: ['twelve-day-officers','twelve-day-gods','twenty-eight-mansions','daily-nine-stars','moon-phases-lunar-days'], status: '本批已完成' },
  { id: 'ganzhi', label: '干支规则', note: '百忌、冲煞、六类神方、太岁与胎神', cardIds: ['pengzu-taboos','day-clash-sha','daily-auspicious-directions','jupiter-directions','fetal-spirit-directions'], status: '5 个节点' },
  { id: 'activities', label: '宜忌与时辰', note: '吉凶神、每日宜忌与十二时辰', cardIds: ['day-good-gods','day-recommends-avoids','twelve-double-hours','hour-gods','hour-fields'], status: '5 个节点' },
  { id: 'selection', label: '择日结构', note: '以事项为纲，依次比较日栏与时栏', cardIds: ['candidate-filtering'], status: '1 个综合节点' }
]
