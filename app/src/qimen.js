import ninePalaceCoordinate from '@published/qimen/nine-palace-coordinate.json'
import threeWondersSixInstruments from '@published/qimen/three-wonders-six-instruments.json'
import eighteenEarthPlateLayouts from '@published/qimen/eighteen-earth-plate-layouts.json'
import eightDoors from '@published/qimen/eight-doors.json'
import nineStars from '@published/qimen/nine-stars.json'
import eightDeities from '@published/qimen/eight-deities.json'
import fourPlateAssembly from '@published/qimen/four-plate-assembly.json'
import yinYangDunSolarTermRanges from '@published/qimen/yin-yang-dun-solar-term-ranges.json'
import solarTermThreeYuanJuTable from '@published/qimen/solar-term-three-yuan-ju-table.json'
import juMethodVariants from '@published/qimen/ju-method-variants.json'
import dutyStarDutyDoor from '@published/qimen/duty-star-duty-door.json'
import plateStyleVariants from '@published/qimen/plate-style-variants.json'
import xunVoidPalaces from '@published/qimen/xun-void-palaces.json'
import timeBranchHorseStar from '@published/qimen/time-branch-horse-star.json'
import stemTombEntry from '@published/qimen/stem-tomb-entry.json'
import sixInstrumentPunishment from '@published/qimen/six-instrument-punishment.json'
import doorPalaceOvercoming from '@published/qimen/door-palace-overcoming.json'
import seasonalFivePhaseStates from '@published/qimen/seasonal-five-phase-states.json'
import nineStarPalaceStates from '@published/qimen/nine-star-palace-states.json'
import eightDoorSeasonalStates from '@published/qimen/eight-door-seasonal-states.json'
import earthBranchPalaceMap from '@published/qimen/earth-branch-palace-map.json'
import fiveNotMeetHourVariants from '@published/qimen/five-not-meet-hour-variants.json'
import threeWonderConditionPatterns from '@published/qimen/three-wonder-condition-patterns.json'

export const qimenDatasets = {
  ninePalaceCoordinate,
  threeWondersSixInstruments,
  eighteenEarthPlateLayouts,
  eightDoors,
  nineStars,
  eightDeities,
  fourPlateAssembly,
  yinYangDunSolarTermRanges,
  solarTermThreeYuanJuTable,
  juMethodVariants,
  dutyStarDutyDoor,
  plateStyleVariants,
  xunVoidPalaces,
  timeBranchHorseStar,
  stemTombEntry,
  sixInstrumentPunishment,
  doorPalaceOvercoming,
  seasonalFivePhaseStates,
  nineStarPalaceStates,
  eightDoorSeasonalStates,
  earthBranchPalaceMap,
  fiveNotMeetHourVariants,
  threeWonderConditionPatterns,
}

export const qimenDatasetByCardId = {
  'nine-palace-coordinate': ninePalaceCoordinate,
  'three-wonders-six-instruments': threeWondersSixInstruments,
  'eighteen-earth-plate-layouts': eighteenEarthPlateLayouts,
  'eight-doors': eightDoors,
  'nine-stars': nineStars,
  'eight-deities': eightDeities,
  'four-plate-assembly': fourPlateAssembly,
  'yin-yang-dun-solar-term-ranges': yinYangDunSolarTermRanges,
  'solar-term-three-yuan-ju-table': solarTermThreeYuanJuTable,
  'ju-method-variants': juMethodVariants,
  'duty-star-duty-door': dutyStarDutyDoor,
  'plate-style-variants': plateStyleVariants,
  'xun-void-palaces': xunVoidPalaces,
  'time-branch-horse-star': timeBranchHorseStar,
  'stem-tomb-entry': stemTombEntry,
  'six-instrument-punishment': sixInstrumentPunishment,
  'door-palace-overcoming': doorPalaceOvercoming,
  'seasonal-five-phase-states': seasonalFivePhaseStates,
  'nine-star-palace-states': nineStarPalaceStates,
  'eight-door-seasonal-states': eightDoorSeasonalStates,
  'earth-branch-palace-map': earthBranchPalaceMap,
  'five-not-meet-hour-variants': fiveNotMeetHourVariants,
  'three-wonder-condition-patterns': threeWonderConditionPatterns,
}

export const qimenIntroductionCard = {
  id: 'introduction-reading-map',
  group: '从零开始',
  title: '奇门遁甲从哪里开始',
  latin: 'Introduction & reading map',
  question: '第一次看到一张奇门盘，怎样分清坐标、起局与装盘结果？',
  summary: '先把盘看成“九个固定房间 + 一条时间入口 + 四层可移动对象”：九宫与地支提供坐标，节气、三元与起局法确定地盘，星、门、神再按盘式进入不同层，最后才给旬空、马星、入墓、击刑、门迫、旺衰与跨层条件贴标签。导读连接二十三个正式节点，不实时起局、不解释吉凶。',
  count: '1 张阅读图 · 23 个正式节点',
  tags: ['从零开始', '九宫', '四盘'],
  searchTerms: ['奇门是什么', '学习顺序', '盘面怎么看'],
  publicSources: [],
  status: '产品导读节点 · 不新增规则',
}

function card({ id, group, title, latin, question, count, tags, searchTerms, status }) {
  const dataset = qimenDatasetByCardId[id]
  return { id, group, title, latin, question, summary: dataset.summary, count, tags, searchTerms, publicSources: dataset.public_sources, status }
}

export const qimenLearningStages = [
  { id:'coordinates', label:'先认坐标', question:'盘面在哪里？', note:'宫号、方位、八卦、五行与地支落点先固定。', cards:['nine-palace-coordinate','earth-branch-palace-map'] },
  { id:'objects', label:'再认对象', question:'盘里有什么？', note:'九个干、八门、九星与八神先分清身份。', cards:['three-wonders-six-instruments','eight-doors','nine-stars','eight-deities'] },
  { id:'time-earth', label:'接入时间', question:'地盘怎样确定？', note:'阴阳遁、三元与起局版本逐层进入十八局。', cards:['yin-yang-dun-solar-term-ranges','solar-term-three-yuan-ju-table','ju-method-variants','eighteen-earth-plate-layouts'] },
  { id:'assembly', label:'完成装盘', question:'对象怎样移动？', note:'轮值角色、四盘层次与盘式版本分开处理。', cards:['duty-star-duty-door','four-plate-assembly','plate-style-variants'] },
  { id:'marks', label:'识别标记', question:'盘上为何出现这些标签？', note:'五类标记各自回到旬、支、干、六仪或门宫关系。', cards:['xun-void-palaces','time-branch-horse-star','stem-tomb-entry','six-instrument-punishment','door-palace-overcoming'] },
  { id:'strength-conditions', label:'最后分层', question:'状态和条件怎样读取？', note:'季令、落宫强弱与跨层条件保持不同输入层。', cards:['seasonal-five-phase-states','nine-star-palace-states','eight-door-seasonal-states','five-not-meet-hour-variants','three-wonder-condition-patterns'] },
]

export const qimenCards = [
  qimenIntroductionCard,
  card({ id:'nine-palace-coordinate', group:'坐标', title:'九宫坐标与原始位置', latin:'Nine-palace coordinates', question:'一至九宫在盘面上究竟怎样排列？', count:'9 宫 · 4 类坐标字段', tags:['洛书九宫','八卦','方位'], searchTerms:['四九二','三五七','八一六','中五宫'], status:'正式坐标节点 · 中宫单列' }),
  card({ id:'earth-branch-palace-map', group:'坐标', title:'十二地支怎样进入八个外围宫', latin:'Earth branches into palaces', question:'十二地支为什么只进入八个外围宫，中五宫又为什么没有地支？', count:'12 地支 · 8 个外围宫 · 4 组双支', tags:['地支入宫','四正四维','共同依赖'], searchTerms:['子坎一','丑寅艮八','戌亥乾六'], status:'正式坐标节点 · 中五无支' }),
  card({ id:'three-wonders-six-instruments', group:'对象', title:'三奇六仪与固定序列', latin:'Three wonders & six instruments', question:'九个天干对象为何不是按三奇、六仪分组排入？', count:'3 奇 · 6 仪 · 1 条序列', tags:['三奇','六仪','戊己庚辛'], searchTerms:['乙丙丁','戊己庚辛壬癸','固定序列'], status:'正式对象节点 · 规则级底本待补' }),
  card({ id:'eight-doors', group:'对象', title:'八门对象与原始宫位', latin:'Eight doors', question:'休生伤杜景死惊开各自从哪一宫出发？', count:'8 门 · 8 个原始宫位', tags:['八门','原始宫位','人盘'], searchTerms:['休门','生门','开门','中五无门'], status:'正式对象节点 · 排除吉凶断语' }),
  card({ id:'nine-stars', group:'对象', title:'九星对象与中宫处理', latin:'Nine stars', question:'为什么叫九星，转盘序列里却常只看见八项？', count:'9 星 · 3 种中宫处理线索', tags:['九星','天禽','寄宫'], searchTerms:['天蓬','天芮','天禽','八宫转动'], status:'正式对象节点 · 寄宫版本并列' }),
  card({ id:'eight-deities', group:'对象', title:'八神对象与版本边界', latin:'Eight deities', question:'八神为何没有固定原始宫位，又会出现九神版本？', count:'8 神 · 3 类版本差异', tags:['八神','神盘','太常'], searchTerms:['值符','螣蛇','腾蛇','九神'], status:'正式对象节点 · 神系版本并列' }),
  card({ id:'yin-yang-dun-solar-term-ranges', group:'时间与地盘', title:'阴阳遁的节气范围', latin:'Yin-yang dun ranges', question:'二十四节气怎样先被分成阳遁与阴遁两个半年？', count:'24 节气 · 2 个范围', tags:['冬至夏至','阳遁阴遁','节气'], searchTerms:['冬至到芒种','夏至到大雪','交节'], status:'正式范围节点 · 不计算交节时刻' }),
  card({ id:'solar-term-three-yuan-ju-table', group:'时间与地盘', title:'二十四节气与上中下三元局数', latin:'Solar terms & three yuan', question:'同一节气为什么还要按上元、中元、下元查三种局数？', count:'24 节气 · 72 个表位', tags:['上中下元','局数表','固定查表'], searchTerms:['小寒下元','夏至上元','大雪下元'], status:'正式固定表 · 三元算法另列' }),
  card({ id:'ju-method-variants', group:'时间与地盘', title:'拆补、置闰与茅山起局法', latin:'Ju-method variants', question:'三种方法在什么地方决定了不同的三元边界？', count:'3 种方法 · 3 组符头', tags:['拆补','置闰','茅山'], searchTerms:['符头','超神接气','60时辰','孟仲季'], status:'正式版本节点 · 不裁定唯一方法' }),
  card({ id:'eighteen-earth-plate-layouts', group:'时间与地盘', title:'十八局地盘', latin:'Eighteen earth-plate layouts', question:'阳遁九局与阴遁九局怎样把同一序列放进九宫？', count:'18 张固定表 · 162 个宫位', tags:['阳遁','阴遁','地盘'], searchTerms:['阳遁一局','阴遁九局','戊起宫'], status:'正式固定表节点 · 不自动起局' }),
  card({ id:'duty-star-duty-door', group:'轮值与装盘', title:'值符星与值使门', latin:'Duty star & duty door', question:'旬首六仪怎样指出本旬的值符星与值使门？', count:'6 个旬首映射 · 3 张固定盘', tags:['旬首六仪','值符星','值使门'], searchTerms:['甲子遁戊','甲寅遁癸','值符神'], status:'正式角色节点 · 固定盘说明' }),
  card({ id:'four-plate-assembly', group:'轮值与装盘', title:'四盘层次与装配顺序', latin:'Four-plate assembly', question:'地盘、天盘、人盘与神盘分别承载什么？', count:'4 层 · 3 种盘式边界', tags:['地盘天盘','人盘神盘','转盘飞盘'], searchTerms:['四盘','值符值使','鸣法','中宫寄宫'], status:'正式层次节点 · 不宣称唯一算法' }),
  card({ id:'plate-style-variants', group:'轮值与装盘', title:'转盘、飞盘与鸣法的装盘差异', latin:'Plate-style variants', question:'三种盘式为什么不是同一张盘的不同皮肤？', count:'3 种盘式 · 5 条比较轴', tags:['转盘','飞盘','鸣法'], searchTerms:['九门九神','太常','中门','飞支暗干'], status:'正式版本节点 · 实现边界并列' }),
  card({ id:'xun-void-palaces', group:'盘面标记', title:'六甲旬空与空亡落宫', latin:'Xun void & palace marks', question:'为什么一旬空两支，盘上有时却只标出一个空亡宫？', count:'6 旬 · 12 个空支 · 12 个落宫位', tags:['旬空','空亡','时旬'], searchTerms:['甲子戌亥空','甲寅子丑空','空宫'], status:'正式映射节点 · 排除空亡断语' }),
  card({ id:'time-branch-horse-star', group:'盘面标记', title:'时支取马星与四组三合', latin:'Hour-branch horse star', question:'十二时支怎样缩成四组马星落宫？', count:'12 时支 · 4 组 · 4 个落宫', tags:['马星','时支','三合'], searchTerms:['午时马在申','子时马在寅','驿马'], status:'正式查表节点 · 不解释移动应期' }),
  card({ id:'stem-tomb-entry', group:'盘面标记', title:'天干入墓与乙奇版本分歧', latin:'Stem tomb-entry variants', question:'天盘干落到哪座宫才会标作入墓，乙奇为何又有两种说法？', count:'10 干 · 4 个墓支 · 1 条分歧', tags:['入墓','墓库','乙奇'], searchTerms:['乙墓乾坤','癸墓未','庚墓丑'], status:'正式条件节点 · 乙奇分歧并列' }),
  card({ id:'six-instrument-punishment', group:'盘面标记', title:'六仪击刑的六组落宫条件', latin:'Six-instrument punishment', question:'六仪什么时候只是落宫，什么时候才形成击刑？', count:'6 仪 · 6 个条件 · 3 个无标记宫', tags:['六仪击刑','旬首','地支刑'], searchTerms:['甲子戊落震','甲寅癸落巽','自刑'], status:'正式条件节点 · 排除事件断语' }),
  card({ id:'door-palace-overcoming', group:'盘面标记', title:'门迫与宫制的五行方向', latin:'Door-palace overcoming', question:'同样是门与宫相克，为什么门迫和宫制不能互换？', count:'8 门 · 2 个方向 · 各 13 组', tags:['门迫','宫制','五行方向'], searchTerms:['门克宫','宫克门','惊门落巽'], status:'正式关系节点 · 不换算吉凶强弱' }),
  card({ id:'seasonal-five-phase-states', group:'强弱与条件', title:'月支季令与五行旺相休囚死', latin:'Seasonal five-phase states', question:'十二月支怎样先归为五组季令，再决定五行的五种状态？', count:'12 月支 · 5 个季令 · 25 个表位', tags:['月令','旺相休囚死','五行'], searchTerms:['寅卯春木旺','辰戌丑未四季','季令'], status:'正式底表节点 · 不输出吉凶' }),
  card({ id:'nine-star-palace-states', group:'强弱与条件', title:'九星落宫的旺相休囚废', latin:'Nine-star palace states', question:'九星的“旺”为什么反而是星生宫，而不是宫生星？', count:'9 星 × 9 宫 · 5 种关系', tags:['九星旺衰','旺相休囚废','实际落宫'], searchTerms:['星生宫为旺','宫生星为休','天蓬落震'], status:'正式关系节点 · 月令层另列' }),
  card({ id:'eight-door-seasonal-states', group:'强弱与条件', title:'八门的月支季令状态', latin:'Eight-door seasonal states', question:'知道门的五行和月支后，怎样机械查出季令状态？', count:'8 门 × 12 月支 · 1 张推导表', tags:['八门旺衰','月支','项目推导'], searchTerms:['休门子月旺','开门午月死','固定月支'], status:'正式推导节点 · 不合成门迫吉凶' }),
  card({ id:'five-not-meet-hour-variants', group:'强弱与条件', title:'五不遇时的十组表与实现放宽', latin:'Five-not-meet hour variants', question:'为什么资料表只有十组，某套程序按同一名称却会识别出二十组？', count:'10 组严格表 · 20 组实现覆盖', tags:['五不遇时','日干时干','实现分歧'], searchTerms:['时干克日干','同性相克','甲日庚午'], status:'正式版本条件 · 排除结果断语' }),
  card({ id:'three-wonder-condition-patterns', group:'强弱与条件', title:'三奇得使、玉女守门与升殿条件', latin:'Three-wonder condition patterns', question:'三奇和值使门同宫时，怎样分清究竟是谁落到谁所在的宫？', count:'3 种条件 · 3 组升殿落宫', tags:['三奇得使','玉女守门','贵人升殿'], searchTerms:['乙震丙离丁兑','值使门落丁奇','同宫方向'], status:'正式跨层条件 · 不发布格局效果' }),
]
