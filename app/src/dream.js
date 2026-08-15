import readingMap from '@published/dream/dream-reading-map.json'
import scopeAndObjects from '@published/dream/scope-and-objects.json'
import dreamRecordFields from '@published/dream/dream-record-fields.json'
import sixDreamsZhouli from '@published/dream/six-dreams-zhouli.json'
import dreamClassificationVersions from '@published/dream/dream-classification-versions.json'
import dreamTextTimeline from '@published/dream/dream-text-timeline.json'
import preQinDreamNarratives from '@published/dream/pre-qin-dream-narratives.json'
import hanBibliographyDreamBooks from '@published/dream/han-bibliography-dream-books.json'
import dunhuangDreamManuscripts from '@published/dream/dunhuang-dream-manuscripts.json'
import mengzhanYizhiStructure from '@published/dream/mengzhan-yizhi-structure.json'
import dreamImageIndex from '@published/dream/dream-image-index.json'
import dreamImagesSkyWeather from '@published/dream/dream-images-sky-weather.json'
import dreamImagesLandWaterFire from '@published/dream/dream-images-land-water-fire.json'
import dreamImagesBuildingsRoads from '@published/dream/dream-images-buildings-roads.json'
import dreamImagesPeopleKinship from '@published/dream/dream-images-people-kinship.json'
import dreamImagesBodyLifeIllness from '@published/dream/dream-images-body-life-illness.json'
import dreamImagesAnimalsPlants from '@published/dream/dream-images-animals-plants.json'
import dreamImagesClothingToolsFood from '@published/dream/dream-images-clothing-tools-food.json'
import dreamImagesActionsRituals from '@published/dream/dream-images-actions-rituals.json'
import dreamInterpretationIndex from '@published/dream/dream-interpretation-index.json'
import dreamEntryGrammar from '@published/dream/dream-entry-grammar.json'
import dreamQualifiersAndContrast from '@published/dream/dream-qualifiers-and-contrast.json'
import dreamTimeConditions from '@published/dream/dream-time-conditions.json'
import dreamOutcomeVocabulary from '@published/dream/dream-outcome-vocabulary.json'
import dreamInterpretationPaths from '@published/dream/dream-interpretation-paths.json'
import dreamVersionConflicts from '@published/dream/dream-version-conflicts.json'
import dreamOmenVerificationBoundaries from '@published/dream/dream-omen-verification-boundaries.json'
import dreamCaseIndex from '@published/dream/dream-case-index.json'
import dreamCaseActions from '@published/dream/dream-case-actions.json'
import dreamCaseVerification from '@published/dream/dream-case-verification.json'
import dreamCaseFuyue from '@published/dream/dream-case-fuyue.json'
import dreamCaseJinggong from '@published/dream/dream-case-jinggong.json'
import dreamCaseBoji from '@published/dream/dream-case-boji.json'
import dreamCaseWangjun from '@published/dream/dream-case-wangjun.json'
import dreamBoundaryIndex from '@published/dream/dream-boundary-index.json'
import dreamMedicalTraditions from '@published/dream/dream-medical-traditions.json'
import dreamReligiousTraditions from '@published/dream/dream-religious-traditions.json'
import dreamModernResearch from '@published/dream/dream-modern-research.json'

export const dreamDatasets = {
  readingMap,
  scopeAndObjects,
  dreamRecordFields,
  sixDreamsZhouli,
  dreamClassificationVersions,
  dreamTextTimeline,
  preQinDreamNarratives,
  hanBibliographyDreamBooks,
  dunhuangDreamManuscripts,
  mengzhanYizhiStructure,
  dreamImageIndex,
  dreamImagesSkyWeather,
  dreamImagesLandWaterFire,
  dreamImagesBuildingsRoads,
  dreamImagesPeopleKinship,
  dreamImagesBodyLifeIllness,
  dreamImagesAnimalsPlants,
  dreamImagesClothingToolsFood,
  dreamImagesActionsRituals,
  dreamInterpretationIndex,
  dreamEntryGrammar,
  dreamQualifiersAndContrast,
  dreamTimeConditions,
  dreamOutcomeVocabulary,
  dreamInterpretationPaths,
  dreamVersionConflicts,
  dreamOmenVerificationBoundaries,
  dreamCaseIndex,
  dreamCaseActions,
  dreamCaseVerification,
  dreamCaseFuyue,
  dreamCaseJinggong,
  dreamCaseBoji,
  dreamCaseWangjun,
  dreamBoundaryIndex,
  dreamMedicalTraditions,
  dreamReligiousTraditions,
  dreamModernResearch,
}

export const dreamIntroductionCard = {
  id: 'dream-reading-map', group: '从零开始', title: readingMap.title, latin: 'Introduction & reading map',
  question: '梦境材料、梦类、梦象、占辞和梦验应该按什么顺序理解？', summary: readingMap.summary,
  count: '6 个阶段 · 已展开 37 个节点', tags: ['阅读顺序', '材料分层', '来源版本'], publicSources: readingMap.public_sources,
  searchTerms: [...readingMap.reading_chain, ...readingMap.stages.flatMap((item) => [item.label, item.note])], status: '专题导读 · 六阶段关系',
}

export const dreamCards = [
  dreamIntroductionCard,
  { id: 'scope-and-objects', group: '占梦基础', title: scopeAndObjects.title, latin: 'Scope & reading order', question: '占梦包含哪些知识对象，阅读时应按什么顺序分开？', summary: scopeAndObjects.summary, count: '5 层对象 · 5 步阅读', tags: ['梦境材料', '占辞', '梦验'], searchTerms: [...scopeAndObjects.object_layers.flatMap((item) => [item.label, item.question, ...item.fields]), ...scopeAndObjects.material_forms.flatMap((item) => Object.values(item)), ...scopeAndObjects.steps.flatMap((item) => Object.values(item)), ...scopeAndObjects.separation_checks.flatMap((item) => Object.values(item))], publicSources: scopeAndObjects.public_sources, status: '正式基础节点 · 对象与顺序' },
  { id: 'dream-record-fields', group: '占梦基础', title: dreamRecordFields.title, latin: 'Dream record fields', question: '一则梦境材料至少要分开记录哪些内容？', summary: dreamRecordFields.summary, count: '6 类字段 · 1 个固定例', tags: ['梦者', '对象动作', '醒后信息'], searchTerms: [...dreamRecordFields.fields.flatMap((item) => Object.values(item)), ...dreamRecordFields.fixed_example.rows.flatMap((item) => Object.values(item))], publicSources: dreamRecordFields.public_sources, status: '正式记录节点 · 缺项不补写' },
  { id: 'six-dreams-zhouli', group: '占梦基础', title: sixDreamsZhouli.title, latin: 'Six dreams in Zhouli', question: '正、噩、思、寤、喜、惧六梦分别指什么？', summary: sixDreamsZhouli.summary, count: '6 梦 · 4 项职官次序', tags: ['周礼', '六梦', '郑玄注'], searchTerms: [...sixDreamsZhouli.dreams.flatMap((item) => Object.values(item)), ...sixDreamsZhouli.office_sequence.flatMap((item) => Object.values(item))], publicSources: sixDreamsZhouli.public_sources, status: '正式分类节点 · 正文注疏分栏' },
  { id: 'dream-classification-versions', group: '占梦基础', title: dreamClassificationVersions.title, latin: 'Classification versions', question: '《周礼》的六梦和《潜夫论》的十梦可以互相对照吗？', summary: dreamClassificationVersions.summary, count: '6 梦 × 10 梦', tags: ['梦因', '梦类', '版本差异'], searchTerms: [...dreamClassificationVersions.systems.flatMap((item) => [item.source, item.period, ...item.names]), ...dreamClassificationVersions.qianfu_ten.flatMap((item) => Object.values(item))], publicSources: dreamClassificationVersions.public_sources, status: '正式版本节点 · 不强行合并' },
  { id: 'dream-text-timeline', group: '典籍与流变', title: dreamTextTimeline.title, latin: 'Textual timeline', question: '甲骨卜辞、经史梦例、敦煌写本与明代梦书怎样连接？', summary: dreamTextTimeline.summary, count: '5 段材料 · 4 次转形', tags: ['时间轴', '材料形态', '流变'], searchTerms: [...dreamTextTimeline.periods.flatMap((item) => Object.values(item)), ...dreamTextTimeline.transformations.flatMap((item) => Object.values(item))], publicSources: dreamTextTimeline.public_sources, status: '正式流变节点 · 材料分期' },
  { id: 'pre-qin-dream-narratives', group: '典籍与流变', title: preQinDreamNarratives.title, latin: 'Pre-Qin narratives', question: '《诗经》《尚书》《左传》分别怎样把梦写进文本？', summary: preQinDreamNarratives.summary, count: '3 个梦例 · 4 个字段', tags: ['诗经', '说命', '左传'], searchTerms: [...preQinDreamNarratives.examples.flatMap((item) => Object.values(item)), ...preQinDreamNarratives.reading_fields.flatMap((item) => Object.values(item))], publicSources: preQinDreamNarratives.public_sources, status: '正式梦例节点 · 体裁分栏' },
  { id: 'han-bibliography-dream-books', group: '典籍与流变', title: hanBibliographyDreamBooks.title, latin: 'Han bibliography', question: '《汉书·艺文志》留下了哪些梦书信息，又没有留下什么？', summary: hanBibliographyDreamBooks.summary, count: '2 部梦书 · 31 卷著录', tags: ['汉书', '艺文志', '存佚'], searchTerms: [hanBibliographyDreamBooks.catalog.class, ...hanBibliographyDreamBooks.catalog.dream_titles.flatMap((item) => Object.values(item)), ...hanBibliographyDreamBooks.catalog_layers.flatMap((item) => Object.values(item))], publicSources: hanBibliographyDreamBooks.public_sources, status: '正式书目节点 · 著录不等于现存' },
  { id: 'dunhuang-dream-manuscripts', group: '典籍与流变', title: dunhuangDreamManuscripts.title, latin: 'Dunhuang manuscripts', question: 'P.3908让我们实际看见了怎样的梦书结构？', summary: dunhuangDreamManuscripts.summary, count: '23 章 · 342 条占文', tags: ['敦煌', 'P.3908', '写本'], searchTerms: [dunhuangDreamManuscripts.manuscript.shelfmark, dunhuangDreamManuscripts.manuscript.title, ...dunhuangDreamManuscripts.chapter_groups.flatMap((item) => [item.label, ...item.chapters]), ...dunhuangDreamManuscripts.related_witnesses], publicSources: dunhuangDreamManuscripts.public_sources, status: '正式写本节点 · 卷号与文本分层' },
  { id: 'mengzhan-yizhi-structure', group: '典籍与流变', title: mengzhanYizhiStructure.title, latin: 'Mengzhan yizhi', question: '《梦占逸旨》的内篇、外篇与九梦分别承担什么作用？', summary: mengzhanYizhiStructure.summary, count: '8 卷 · 内外篇 · 9 梦', tags: ['陈士元', '内外篇', '九梦'], searchTerms: [mengzhanYizhiStructure.metadata.author, ...mengzhanYizhiStructure.metadata.main_divisions, ...mengzhanYizhiStructure.architecture.flatMap((item) => [item.division, item.role, ...item.contents]), ...mengzhanYizhiStructure.nine_dreams.flatMap((item) => Object.values(item))], publicSources: mengzhanYizhiStructure.public_sources, status: '正式典籍节点 · 理论与梦例分层' },
  { id: 'dream-image-index', group: '梦象分类', title: dreamImageIndex.title, latin: 'Dream image index', question: '梦象怎样按对象、动作、状态和位置关系进入八类索引？', summary: dreamImageIndex.summary, count: '8 类 · 4 个字段', tags: ['总表', '交叉索引', '对象动作'], searchTerms: [...dreamImageIndex.facets.flatMap((item) => [item.label, item.question, ...item.examples]), ...dreamImageIndex.categories.flatMap((item) => [item.label, ...item.key_terms])], publicSources: dreamImageIndex.public_sources, status: '正式索引节点 · 不含吉凶' },
  { id: 'dream-images-sky-weather', group: '梦象分类', title: dreamImagesSkyWeather.title, latin: 'Sky & weather', question: '日月星辰与风雨雷雪有哪些对象、变化和位置关系？', summary: dreamImagesSkyWeather.summary, count: '3 组 · 38 个索引词', tags: ['日月', '风雨', '天象'], searchTerms: dreamImagesSkyWeather.facets.flatMap((item) => [item.label, ...item.items]), publicSources: dreamImagesSkyWeather.public_sources, status: '正式梦象节点 · 天象类' },
  { id: 'dream-images-land-water-fire', group: '梦象分类', title: dreamImagesLandWaterFire.title, latin: 'Land, water & fire', question: '山川水火与土地怎样按对象、动作和状态展开？', summary: dreamImagesLandWaterFire.summary, count: '3 组 · 40 个索引词', tags: ['山川', '水火', '土地'], searchTerms: dreamImagesLandWaterFire.facets.flatMap((item) => [item.label, ...item.items]), publicSources: dreamImagesLandWaterFire.public_sources, status: '正式梦象节点 · 自然类' },
  { id: 'dream-images-buildings-roads', group: '梦象分类', title: dreamImagesBuildingsRoads.title, latin: 'Buildings & roads', question: '房屋门户、道路桥市和舟车怎样分层记录？', summary: dreamImagesBuildingsRoads.summary, count: '3 组 · 45 个索引词', tags: ['房屋', '门户', '道路舟车'], searchTerms: dreamImagesBuildingsRoads.facets.flatMap((item) => [item.label, ...item.items]), publicSources: dreamImagesBuildingsRoads.public_sources, status: '正式梦象节点 · 空间类' },
  { id: 'dream-images-people-kinship', group: '梦象分类', title: dreamImagesPeopleKinship.title, latin: 'People & kinship', question: '人物身份、亲属角色与相遇关系怎样分开？', summary: dreamImagesPeopleKinship.summary, count: '3 组 · 38 个索引词', tags: ['人物', '身份', '亲属'], searchTerms: dreamImagesPeopleKinship.facets.flatMap((item) => [item.label, ...item.items]), publicSources: dreamImagesPeopleKinship.public_sources, status: '正式梦象节点 · 人物类' },
  { id: 'dream-images-body-life-illness', group: '梦象分类', title: dreamImagesBodyLifeIllness.title, latin: 'Body, life & illness', question: '身体部位、疾病、生死与棺墓怎样保持边界？', summary: dreamImagesBodyLifeIllness.summary, count: '3 组 · 46 个索引词', tags: ['身体', '生死', '疾病'], searchTerms: dreamImagesBodyLifeIllness.facets.flatMap((item) => [item.label, ...item.items]), publicSources: dreamImagesBodyLifeIllness.public_sources, status: '正式梦象节点 · 身体类' },
  { id: 'dream-images-animals-plants', group: '梦象分类', title: dreamImagesAnimalsPlants.title, latin: 'Animals & plants', question: '龙蛇禽兽、虫鱼和草木花果怎样展开？', summary: dreamImagesAnimalsPlants.summary, count: '3 组 · 46 个索引词', tags: ['禽兽', '虫鱼', '草木'], searchTerms: dreamImagesAnimalsPlants.facets.flatMap((item) => [item.label, ...item.items]), publicSources: dreamImagesAnimalsPlants.public_sources, status: '正式梦象节点 · 生物类' },
  { id: 'dream-images-clothing-tools-food', group: '梦象分类', title: dreamImagesClothingToolsFood.title, latin: 'Clothing, tools & food', question: '衣物、器具、钱帛与饮食怎样分组记录？', summary: dreamImagesClothingToolsFood.summary, count: '3 组 · 46 个索引词', tags: ['衣物', '器具', '饮食'], searchTerms: dreamImagesClothingToolsFood.facets.flatMap((item) => [item.label, ...item.items]), publicSources: dreamImagesClothingToolsFood.public_sources, status: '正式梦象节点 · 生活物类' },
  { id: 'dream-images-actions-rituals', group: '梦象分类', title: dreamImagesActionsRituals.title, latin: 'Dream actions & rituals', question: '梦中的行走、追逐、争斗与仪式如何成为跨对象索引？', summary: dreamImagesActionsRituals.summary, count: '3 组 · 39 个索引词', tags: ['行走', '争斗', '梦中仪式'], searchTerms: dreamImagesActionsRituals.facets.flatMap((item) => [item.label, ...item.items]), publicSources: dreamImagesActionsRituals.public_sources, status: '正式梦象节点 · 动作类' },
  { id: 'dream-interpretation-index', group: '占辞形成', title: dreamInterpretationIndex.title, latin: 'Interpretation index', question: '一条占辞怎样由梦象、限定、连接词、结果与条件组成？', summary: dreamInterpretationIndex.summary, count: '5 层 · 3 条关系', tags: ['占辞总表', '条目拆分', '条件来源'], searchTerms: dreamInterpretationIndex.sections.flatMap((section) => [section.label, section.note, ...section.items.flatMap((item) => Object.values(item))]), publicSources: dreamInterpretationIndex.public_sources, status: '正式关系节点 · 占辞总表' },
  { id: 'dream-entry-grammar', group: '占辞形成', title: dreamEntryGrammar.title, latin: 'Entry grammar', question: '“梦见……者主……”这样的短句由哪些部分构成？', summary: dreamEntryGrammar.summary, count: '4 组句法 · 3 个固定例', tags: ['梦见', '主有得忧', '句式'], searchTerms: dreamEntryGrammar.sections.flatMap((section) => [section.label, section.note, ...section.items.flatMap((item) => Object.values(item))]), publicSources: dreamEntryGrammar.public_sources, status: '正式条目节点 · 句法拆分' },
  { id: 'dream-qualifiers-and-contrast', group: '占辞形成', title: dreamQualifiersAndContrast.title, latin: 'Qualifiers & contrast', question: '为什么同一个对象会因明暗、新破、入出而出现不同占辞？', summary: dreamQualifiersAndContrast.summary, count: '4 类限定 · 3 组对举', tags: ['状态', '动作', '位置'], searchTerms: dreamQualifiersAndContrast.sections.flatMap((section) => [section.label, section.note, ...section.items.flatMap((item) => Object.values(item))]), publicSources: dreamQualifiersAndContrast.public_sources, status: '正式关系节点 · 限定词分流' },
  { id: 'dream-time-conditions', group: '占辞形成', title: dreamTimeConditions.title, latin: 'Time conditions', question: '十二支日、十二时和建除十二日分别怎样进入占辞？', summary: dreamTimeConditions.summary, count: '3 套时间表 · 36 项', tags: ['支日', '时辰', '建除'], searchTerms: dreamTimeConditions.sections.flatMap((section) => [section.label, section.note, ...section.items.flatMap((item) => Object.values(item))]), publicSources: dreamTimeConditions.public_sources, status: '正式条件节点 · 不自动换算' },
  { id: 'dream-outcome-vocabulary', group: '占辞形成', title: dreamOutcomeVocabulary.title, latin: 'Outcome vocabulary', question: '占辞除了吉凶，还使用哪些具体结果词？', summary: dreamOutcomeVocabulary.summary, count: '8 类结果词 · 不计权重', tags: ['结果词', '事件对象', '简判'], searchTerms: dreamOutcomeVocabulary.sections.flatMap((section) => [section.label, section.note, ...section.items.flatMap((item) => Object.values(item))]), publicSources: dreamOutcomeVocabulary.public_sources, status: '正式词汇节点 · 结果分类' },
  { id: 'dream-interpretation-paths', group: '占辞形成', title: dreamInterpretationPaths.title, latin: 'Interpretation paths', question: '延续、类比、反转、谐音与拆字怎样连接梦象和占辞？', summary: dreamInterpretationPaths.summary, count: '6 条路径 · 6 个固定例', tags: ['类比', '反转', '谐音拆字'], searchTerms: dreamInterpretationPaths.sections.flatMap((section) => [section.label, section.note, ...section.items.flatMap((item) => Object.values(item))]), publicSources: dreamInterpretationPaths.public_sources, status: '正式解释节点 · 研究分类' },
  { id: 'dream-version-conflicts', group: '占辞形成', title: dreamVersionConflicts.title, latin: 'Variant conflicts', question: '同一梦象在不同敦煌写本中为何会出现不同结果？', summary: dreamVersionConflicts.summary, count: '5 类差异 · 3 组对校', tags: ['异本', '冲突', '校录'], searchTerms: dreamVersionConflicts.sections.flatMap((section) => [section.label, section.note, ...section.items.flatMap((item) => Object.values(item))]), publicSources: dreamVersionConflicts.public_sources, status: '正式版本节点 · 异说并列' },
  { id: 'dream-omen-verification-boundaries', group: '占辞形成', title: dreamOmenVerificationBoundaries.title, latin: 'Omen, verification & ritual', question: '占辞、梦验和禳梦分别处在什么时间与材料层？', summary: dreamOmenVerificationBoundaries.summary, count: '3 层边界 · 4 类字段', tags: ['占辞', '梦验', '禳梦'], searchTerms: dreamOmenVerificationBoundaries.sections.flatMap((section) => [section.label, section.note, ...section.items.flatMap((item) => Object.values(item))]), publicSources: dreamOmenVerificationBoundaries.public_sources, status: '正式边界节点 · 说法记录行动' },
  { id: 'dream-case-index', group: '梦例与占后叙事', title: dreamCaseIndex.title, latin: 'Case narrative & roles', question: '一则梦例怎样沿八段叙事展开，其中有哪些不同人物角色？', summary: dreamCaseIndex.summary, count: '8 段叙事链 · 6 种角色', tags: ['总表', '人物角色', '后事'], searchTerms: [...dreamCaseIndex.stages.flatMap(Object.values), ...dreamCaseIndex.records.flatMap((record) => [record.label, ...record.items.flatMap(Object.values)])], publicSources: dreamCaseIndex.public_sources, status: '正式梦例节点 · 叙事与角色' },
  { id: 'dream-case-actions', group: '梦例与占后叙事', title: dreamCaseActions.title, latin: 'Dream-triggered actions', question: '梦被转述或解释以后，文本中的人物采取了哪些行动？', summary: dreamCaseActions.summary, count: '3 类行动 · 3 条案例链', tags: ['梦后行动', '搜求', '求医'], searchTerms: [...dreamCaseActions.stages.flatMap(Object.values), ...dreamCaseActions.records.flatMap((record) => [record.label, ...record.items.flatMap(Object.values)])], publicSources: dreamCaseActions.public_sources, status: '正式行动节点 · 行动与结果分开' },
  { id: 'dream-case-verification', group: '梦例与占后叙事', title: dreamCaseVerification.title, latin: 'Narrated verification', question: '文本用哪些距离与连接词，把梦和后来的事联系起来？', summary: dreamCaseVerification.summary, count: '3 种距离 · 4 类连接', tags: ['梦验', '叙事距离', '连接词'], searchTerms: [...dreamCaseVerification.stages.flatMap(Object.values), ...dreamCaseVerification.records.flatMap((record) => [record.label, ...record.items.flatMap(Object.values)])], publicSources: dreamCaseVerification.public_sources, status: '正式叙事节点 · 不等于实验验证' },
  { id: 'dream-case-fuyue', group: '梦例与占后叙事', title: dreamCaseFuyue.title, latin: 'Fu Yue case', question: '今本《说命上》怎样把梦、画像、搜求和任命连在一起？', summary: dreamCaseFuyue.summary, count: '6 段叙事 · 今本版本', tags: ['高宗', '傅说', '旁求'], searchTerms: [...dreamCaseFuyue.stages.flatMap(Object.values), ...dreamCaseFuyue.records.flatMap((record) => [record.label, ...record.items.flatMap(Object.values)])], publicSources: dreamCaseFuyue.public_sources, status: '固定梦例 · 版本身份明确' },
  { id: 'dream-case-jinggong', group: '梦例与占后叙事', title: dreamCaseJinggong.title, latin: 'Duke Jing case', question: '《左传》怎样并置多梦、桑田巫、医缓与人物结局？', summary: dreamCaseJinggong.summary, count: '3 梦 · 2 类解释者', tags: ['晋景公', '桑田巫', '医缓'], searchTerms: [...dreamCaseJinggong.stages.flatMap(Object.values), ...dreamCaseJinggong.records.flatMap((record) => [record.label, ...record.items.flatMap(Object.values)])], publicSources: dreamCaseJinggong.public_sources, status: '固定梦例 · 梦与诊断分栏' },
  { id: 'dream-case-boji', group: '梦例与占后叙事', title: dreamCaseBoji.title, latin: 'Lady Bo case', question: '《史记》怎样把前占、苍龙梦、贵征与代王后事分层叙述？', summary: dreamCaseBoji.summary, count: '2 层预兆 · 2 段后事', tags: ['薄姬', '苍龙', '代王'], searchTerms: [...dreamCaseBoji.stages.flatMap(Object.values), ...dreamCaseBoji.records.flatMap((record) => [record.label, ...record.items.flatMap(Object.values)])], publicSources: dreamCaseBoji.public_sources, status: '固定梦例 · 近远后事分开' },
  { id: 'dream-case-wangjun', group: '梦例与占后叙事', title: dreamCaseWangjun.title, latin: 'Wang Jun case', question: '同一个三刀梦为什么会出现梦者自解与李毅拆字两种解释？', summary: dreamCaseWangjun.summary, count: '2 种解释 · 1 条拆字链', tags: ['王濬', '三刀', '益州'], searchTerms: [...dreamCaseWangjun.stages.flatMap(Object.values), ...dreamCaseWangjun.records.flatMap((record) => [record.label, ...record.items.flatMap(Object.values)])], publicSources: dreamCaseWangjun.public_sources, status: '固定梦例 · 异解并列' },
  { id: 'dream-boundary-index', group: '相邻体系', title: dreamBoundaryIndex.title, latin: 'Adjacent systems & boundaries', question: '五条研究路线分别在问什么，传统占梦可以研究到哪里？', summary: dreamBoundaryIndex.summary, count: '5 条路线 · 5 条边界', tags: ['总表', '研究对象', '用途边界'], searchTerms: [...dreamBoundaryIndex.profiles.flatMap(Object.values), ...dreamBoundaryIndex.records.flatMap((record) => [record.label, ...record.items.flatMap(Object.values)])], publicSources: dreamBoundaryIndex.public_sources, status: '正式边界节点 · 路线与用途' },
  { id: 'dream-medical-traditions', group: '相邻体系', title: dreamMedicalTraditions.title, latin: 'Medical dream traditions', question: '《灵枢·淫邪发梦》怎样把梦放进藏府盛衰与治法？', summary: dreamMedicalTraditions.summary, count: '12 盛 · 15 不足', tags: ['灵枢', '医梦', '藏府'], searchTerms: [...dreamMedicalTraditions.profiles.flatMap(Object.values), ...dreamMedicalTraditions.records.flatMap((record) => [record.label, ...record.items.flatMap(Object.values)])], publicSources: dreamMedicalTraditions.public_sources, status: '正式医梦节点 · 不作诊断' },
  { id: 'dream-religious-traditions', group: '相邻体系', title: dreamReligiousTraditions.title, latin: 'Religious dream traditions', question: '宗教文本中的梦为什么不能直接并入普通占辞？', summary: dreamReligiousTraditions.summary, count: '4 梦 · 3 类判断', tags: ['善见律', '四梦', '宗教文本'], searchTerms: [...dreamReligiousTraditions.profiles.flatMap(Object.values), ...dreamReligiousTraditions.records.flatMap((record) => [record.label, ...record.items.flatMap(Object.values)])], publicSources: dreamReligiousTraditions.public_sources, status: '正式宗教梦节点 · 版本限定' },
  { id: 'dream-modern-research', group: '相邻体系', title: dreamModernResearch.title, latin: 'Psychology & sleep research', question: '精神分析、睡眠分期和脑电研究各自取得了什么材料？', summary: dreamModernResearch.summary, count: '4 条路线 · 4 个锚点', tags: ['精神分析', 'REM/NREM', '梦报告'], searchTerms: [...dreamModernResearch.profiles.flatMap(Object.values), ...dreamModernResearch.records.flatMap((record) => [record.label, ...record.items.flatMap(Object.values)])], publicSources: dreamModernResearch.public_sources, status: '正式现代研究节点 · 理论实验分开' },
]

export const dreamLearningStages = readingMap.stages
