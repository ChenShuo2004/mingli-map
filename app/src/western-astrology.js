import sevenTraditionalPlanets from '@published/western-astrology/seven-traditional-planets.json'
import housesAndHouseSystems from '@published/western-astrology/houses-and-house-systems.json'
import aspectsOrbsAndMovement from '@published/western-astrology/aspects-orbs-and-movement.json'
import essentialDignities from '@published/western-astrology/essential-dignities.json'
import sectAndPlanetaryJoys from '@published/western-astrology/sect-and-planetary-joys.json'
import receptionAndMutualReception from '@published/western-astrology/reception-and-mutual-reception.json'
import accidentalDignities from '@published/western-astrology/accidental-dignities.json'
import coreLotsAndSectFormulas from '@published/western-astrology/core-lots-and-sect-formulas.json'
import fixedStarsPositionAndConjunction from '@published/western-astrology/fixed-stars-position-and-conjunction.json'
import predictiveTechniquesMap from '@published/western-astrology/predictive-techniques-map.json'
import annualProfectionsWholeHouseAndContinuousRotation from '@published/western-astrology/annual-profections-whole-house-and-continuous-rotation.json'
import solarReturnTimeAndChartReconstruction from '@published/western-astrology/solar-return-time-and-chart-reconstruction.json'
import zodiacSignsAndLongitudeCoordinate from '@published/western-astrology/zodiac-signs-and-longitude-coordinate.json'
import chartInputAndCoordinatePipeline from '@published/western-astrology/chart-input-and-coordinate-pipeline.json'
import transitsPositionSetComparison from '@published/western-astrology/transits-position-set-comparison.json'
import symbolicMotionAndPrimaryDirections from '@published/western-astrology/symbolic-motion-and-primary-directions.json'
import periodRulersFirdariaAndZodiacalReleasing from '@published/western-astrology/period-rulers-firdaria-and-zodiacal-releasing.json'

export const westernAstrologyDatasets = { sevenTraditionalPlanets, housesAndHouseSystems, aspectsOrbsAndMovement, essentialDignities, sectAndPlanetaryJoys, receptionAndMutualReception, accidentalDignities, coreLotsAndSectFormulas, fixedStarsPositionAndConjunction, predictiveTechniquesMap, annualProfectionsWholeHouseAndContinuousRotation, solarReturnTimeAndChartReconstruction, zodiacSignsAndLongitudeCoordinate, chartInputAndCoordinatePipeline, transitsPositionSetComparison, symbolicMotionAndPrimaryDirections, periodRulersFirdariaAndZodiacalReleasing }

export const sevenTraditionalPlanetsCard = {
  id: 'seven-traditional-planets',
  group: '基础坐标',
  title: '七曜',
  latin: 'Seven traditional planets',
  question: '一张古典占星盘，最先辨认的是哪七个对象？',
  summary: sevenTraditionalPlanets.summary,
  count: '2 发光体 · 5 游星',
  tags: ['太阳与月亮', '五颗游星', '对象层'],
  searchTerms: sevenTraditionalPlanets.planets.flatMap((item) => [item.name, item.english, item.symbol, ...item.keywords]),
  publicSources: sevenTraditionalPlanets.public_sources,
  status: '正式基础节点 · 来源陈述分层',
}

export const housesAndHouseSystemsCard = {
  id: 'houses-and-house-systems',
  group: '基础坐标',
  title: '宫位与宫制总览',
  latin: 'Houses & house systems',
  question: '十二宫的编号，与划分宫界的方法有什么不同？',
  summary: housesAndHouseSystems.summary,
  count: '12 宫位 · 14 宫制标识',
  tags: ['十二宫', '角续果', '宫制参数'],
  searchTerms: housesAndHouseSystems.houses.flatMap((item) => [`${item.number}宫`, item.group, ...item.themes]).concat(housesAndHouseSystems.house_systems.flatMap((item) => [item.id, item.name])),
  publicSources: housesAndHouseSystems.public_sources,
  status: '正式结构节点 · 数量差异已校正',
}

export const aspectsOrbsAndMovementCard = {
  id: 'aspects-orbs-and-movement',
  group: '状态与关系',
  title: '相位与入出相',
  latin: 'Aspects, orbs & movement',
  question: '同一个相位，怎样判断正在形成还是已经分开？',
  summary: aspectsOrbsAndMovement.summary,
  count: '5 主相位 · 3 种运动状态',
  tags: ['目标角', '容许度', '入相与出相'],
  searchTerms: aspectsOrbsAndMovement.major_aspects.flatMap((item) => [item.name, item.english, `${item.angle}°`]).concat(['orb', '入相', '出相', '离相', ...aspectsOrbsAndMovement.minor_aspect_angles.map((angle) => `${angle}°`)]),
  publicSources: aspectsOrbsAndMovement.public_sources,
  status: '正式几何节点 · 固定步进演示',
}

export const essentialDignitiesCard = {
  id: 'essential-dignities',
  group: '状态与关系',
  title: '必然尊贵',
  latin: 'Essential dignities',
  question: '同一颗行星，怎样由星座、昼夜与度数得到不同的位置身份？',
  summary: essentialDignities.summary,
  count: '5 层尊贵 · 3 种无力状态',
  tags: ['入庙与擢升', '三分主', '界与面'],
  searchTerms: essentialDignities.dignity_layers.flatMap((item) => [item.name, item.english]).concat(essentialDignities.debility_states.flatMap((item) => [item.name, item.english])),
  publicSources: essentialDignities.public_sources,
  status: '正式查表节点 · 版本参数分层',
}

export const sectAndPlanetaryJoysCard = {
  id: 'sect-and-planetary-joys',
  group: '状态与关系',
  title: '教派与喜乐基础关系',
  latin: 'Sect & planetary joys',
  question: '盘的昼夜属性、行星教派和喜乐宫，是同一件事吗？',
  summary: sectAndPlanetaryJoys.summary,
  count: '2 种盘面 · 7 个喜乐宫',
  tags: ['日间与夜间', '行星教派', '喜乐宫'],
  searchTerms: sectAndPlanetaryJoys.planets.flatMap((item) => [item.name, item.english, `${item.joy_house}宫`]).concat(['sect', 'diurnal', 'nocturnal', '喜乐']),
  publicSources: sectAndPlanetaryJoys.public_sources,
  status: '正式关系节点 · 抽象昼夜切换',
}

export const receptionAndMutualReceptionCard = {
  id: 'reception-and-mutual-reception',
  group: '状态与关系',
  title: '接纳与互容：入庙／擢升口径',
  latin: 'Reception & mutual reception',
  question: '“落在对方掌管的位置”和“双方互相接纳”之间还差哪些条件？',
  summary: receptionAndMutualReception.summary,
  count: '5 固定例 · 3 种互容类型',
  tags: ['单向接纳', '双向互容', '主相位门'],
  searchTerms: receptionAndMutualReception.concepts.flatMap((item) => [item.name, item.english]).concat(receptionAndMutualReception.supported_reception_types.map((item) => item.name)),
  publicSources: receptionAndMutualReception.public_sources,
  status: '正式关系节点 · 来源条件并列',
}

export const accidentalDignitiesCard = {
  id: 'accidental-dignities',
  group: '状态与关系',
  title: '偶然尊贵因素总览',
  latin: 'Accidental dignities',
  question: '除了星座中的位置身份，哪些外在条件会改变行星状态？',
  summary: accidentalDignities.summary,
  count: '6 类状态 · 5 个日距样本',
  tags: ['宫位与运动', '日光关系', '整盘状态'],
  searchTerms: accidentalDignities.categories.flatMap((item) => [item.name, ...item.properties]).concat(accidentalDignities.implementation_score_inventory.flatMap((item) => item.items)),
  publicSources: accidentalDignities.public_sources,
  status: '正式状态节点 · 实现参数分层',
}

export const coreLotsAndSectFormulasCard = {
  id: 'core-lots-and-sect-formulas',
  group: '派生对象',
  title: '核心 Lots（计算点）',
  latin: 'Lots & sect formulas',
  question: '同一组黄经，为什么日间与夜间会得到不同的计算点？',
  summary: coreLotsAndSectFormulas.summary,
  count: '4 个公式 · 2 层依赖',
  tags: ['福点与精神点', '昼夜反转', '黄经归一化'],
  searchTerms: coreLotsAndSectFormulas.lots.flatMap((item) => [item.name, item.english, item.flatlib_id, ...item.depends_on]).concat(['Arabic Parts', '阿拉伯点', '希腊点']),
  publicSources: coreLotsAndSectFormulas.public_sources,
  status: '正式公式节点 · 命名映射待核',
}

export const fixedStarsPositionAndConjunctionCard = {
  id: 'fixed-stars-position-and-conjunction',
  group: '派生对象',
  title: '恒星位置与合相：四星示例',
  latin: 'Fixed stars',
  question: '恒星既然叫“固定”，为什么黄道度数仍会随历元改变？',
  summary: fixedStarsPositionAndConjunction.summary,
  count: '4 颗入口星 · 3 个固定历元',
  tags: ['名称与别名', '历元位置', '合相参数'],
  searchTerms: fixedStarsPositionAndConjunction.stars.flatMap((item) => [item.name, item.english, item.catalog_alias]).concat(['fixed star', '视星等', '黄经', '黄纬', '岁差']),
  publicSources: fixedStarsPositionAndConjunction.public_sources,
  status: '正式星表节点 · 解释词留在来源层',
}

export const predictiveTechniquesMapCard = {
  id: 'predictive-techniques-map',
  group: '时间技术',
  title: '预测技术总览与实现边界',
  latin: 'Predictive techniques',
  question: '八类预测技术，究竟是在比较天空、变换星盘，还是划分时期？',
  summary: predictiveTechniquesMap.summary,
  count: '8 类技术 · 4 个方法家族',
  tags: ['输入与变换', '时间尺度', '实现覆盖'],
  searchTerms: predictiveTechniquesMap.techniques.flatMap((item) => [item.name, item.english, item.time_scope]).concat(predictiveTechniquesMap.families.map((item) => item.name)),
  publicSources: predictiveTechniquesMap.public_sources,
  status: '正式导航节点 · 不运行预测',
}

export const annualProfectionsCard = {
  id: 'annual-profections-whole-house-and-continuous-rotation',
  group: '时间技术',
  title: '年度小限',
  latin: 'Annual Profections',
  question: '“每年推进一个整宫”，为什么软件会在一年内继续旋转？',
  summary: annualProfectionsWholeHouseAndContinuousRotation.summary,
  count: '2 个模型 · 6 个边界探针',
  tags: ['年龄模12', '连续旋转', '双时钟边界'],
  searchTerms: ['小限', 'Annual Profections', '年度宫位', '太阳回归', 'fixedObjects', ...annualProfectionsWholeHouseAndContinuousRotation.whole_house_model.age_samples.flatMap((item) => [`${item.age}岁`, `${item.house}宫`, item.sign, item.ruler])],
  publicSources: annualProfectionsWholeHouseAndContinuousRotation.public_sources,
  status: '正式比较节点 · 双时钟边界已复算',
}

export const solarReturnCard = {
  id: 'solar-return-time-and-chart-reconstruction',
  group: '时间技术',
  title: '太阳回归',
  latin: 'Solar Return',
  question: '找到太阳回到本命黄经的时刻后，回归盘究竟沿用哪些原盘参数？',
  summary: solarReturnTimeAndChartReconstruction.summary,
  count: '3 层计算 · 2 个方向',
  tags: ['黄经回归', '时区显示', '星盘重建'],
  searchTerms: ['太阳回归', 'Solar Return', '回归盘', 'Julian Day', 'UTC offset', '月亮回归', ...solarReturnTimeAndChartReconstruction.concept_layers.flatMap((item) => [item.name, item.question])],
  publicSources: solarReturnTimeAndChartReconstruction.public_sources,
  status: '正式实现节点 · 月返未接通',
}

export const zodiacSignsCard = {
  id: 'zodiac-signs-and-longitude-coordinate', group: '基础坐标', title: '十二星座与黄经坐标', latin: 'Zodiac signs & longitude',
  question: '十二星座怎样把0—360°黄经切成连续区间？', summary: zodiacSignsAndLongitudeCoordinate.summary,
  count: '12 星座 · 4 元素 · 3 模式', tags: ['黄经区间', '元素与模式', '传统主宰'],
  searchTerms: zodiacSignsAndLongitudeCoordinate.fixed_samples.flatMap((item) => [item.label, item.output]), publicSources: zodiacSignsAndLongitudeCoordinate.public_sources,
  status: '正式坐标节点 · 不推导人格',
}

export const chartPipelineCard = {
  id: 'chart-input-and-coordinate-pipeline', group: '基础坐标', title: '星盘输入与坐标生成链', latin: 'Chart input pipeline',
  question: '日期、时区、地点和宫制怎样共同生成一张星盘？', summary: chartInputAndCoordinatePipeline.summary,
  count: '4 层输入输出 · 1 个固定盘', tags: ['绝对时刻', '地理坐标', '对象与轴点'],
  searchTerms: chartInputAndCoordinatePipeline.concept_cards.flatMap((item) => [item.name, item.tag, ...item.details]), publicSources: chartInputAndCoordinatePipeline.public_sources,
  status: '正式生成链节点 · 只用固定夹具',
}

export const transitsCard = {
  id: 'transits-position-set-comparison', group: '时间技术', title: '行运位置集合比较', latin: 'Transits',
  question: '行运如何比较两个真实时刻的对象位置，而不覆盖本命盘？', summary: transitsPositionSetComparison.summary,
  count: '2 套位置 · 6 组关系', tags: ['本命与目标', '跨集合相位', '入相与出相'],
  searchTerms: transitsPositionSetComparison.fixed_samples.flatMap((item) => [item.label, item.output, item.note]), publicSources: transitsPositionSetComparison.public_sources,
  status: '正式比较节点 · 不输出事件',
}

export const symbolicMotionCard = {
  id: 'symbolic-motion-and-primary-directions', group: '时间技术', title: '象征推进与主限方向弧', latin: 'Symbolic motion & primary directions',
  question: '日弧、次限和主限都在“推进”，为什么不能合成一种算法？', summary: symbolicMotionAndPrimaryDirections.summary,
  count: '3 种机制 · 1,158 条固定弧', tags: ['日弧', '次限', '主限'],
  searchTerms: symbolicMotionAndPrimaryDirections.concept_cards.flatMap((item) => [item.name, item.tag, ...item.details]), publicSources: symbolicMotionAndPrimaryDirections.public_sources,
  status: '正式比较节点 · 实现覆盖分层',
}

export const periodRulersCard = {
  id: 'period-rulers-firdaria-and-zodiacal-releasing', group: '时间技术', title: '时期主星：法达与黄道释放', latin: 'Firdaria & zodiacal releasing',
  question: '法达星限和黄道释放都切分时间，它们的起点与单位有什么不同？', summary: periodRulersFirdariaAndZodiacalReleasing.summary,
  count: '2 套时期系统 · 3 个前置依赖', tags: ['法达星限', '黄道释放', '教派与Lots'],
  searchTerms: periodRulersFirdariaAndZodiacalReleasing.fixed_samples.flatMap((item) => [item.label, item.output, item.note]), publicSources: periodRulersFirdariaAndZodiacalReleasing.public_sources,
  status: '正式来源结构节点 · 算法版本待核',
}

export const westernAstrologyIntroductionCard = {
  id: 'western-classical-start', group: '专题导读', title: '西方古典占星从哪里开始', latin: 'Start here',
  question: '17个节点应该按什么顺序读，才能从星盘对象走到时间技术？',
  summary: '用四个学习阶段串联17个正式节点，并明确固定样本路径、学习成果、材料边界和V1完成口径；它是专题导航，不新增占星规则。',
  count: '4 个阶段 · 17 个正式节点', tags: ['从零导读', '固定样本路径', 'V1完成口径'],
  searchTerms: ['西方古典占星入门', '学习顺序', '从哪里开始', 'V1完成'],
  publicSources: sevenTraditionalPlanets.public_sources,
  status: '产品导读节点 · 不计入正式知识数据',
}

export const westernAstrologyCards = [westernAstrologyIntroductionCard, sevenTraditionalPlanetsCard, zodiacSignsCard, chartPipelineCard, housesAndHouseSystemsCard, aspectsOrbsAndMovementCard, essentialDignitiesCard, sectAndPlanetaryJoysCard, receptionAndMutualReceptionCard, accidentalDignitiesCard, coreLotsAndSectFormulasCard, fixedStarsPositionAndConjunctionCard, predictiveTechniquesMapCard, annualProfectionsCard, solarReturnCard, transitsCard, symbolicMotionCard, periodRulersCard]
