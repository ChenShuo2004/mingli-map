import observationScope from '@published/palmistry/observation-scope.json'
import observableVocabulary from '@published/palmistry/observable-vocabulary.json'
import imageOrientationRecording from '@published/palmistry/image-orientation-recording.json'
import faceRegionsAndDirections from '@published/palmistry/face-regions-and-directions.json'
import threeSectionsFaceProportion from '@published/palmistry/three-sections-face-proportion.json'
import fiveFeaturesObservationFields from '@published/palmistry/five-features-observation-fields.json'
import twelvePalacesPositionsVersions from '@published/palmistry/twelve-palaces-positions-versions.json'
import boneContourSurface from '@published/palmistry/bone-contour-surface.json'
import palmDirectionLeftRight from '@published/palmistry/palm-direction-left-right.json'
import handShapePalmFingerProportion from '@published/palmistry/hand-shape-palm-finger-proportion.json'
import threeMajorPalmLines from '@published/palmistry/three-major-palm-lines.json'
import otherPalmLinesVersions from '@published/palmistry/other-palm-lines-versions.json'
import palmMountsPosition from '@published/palmistry/palm-mounts-position.json'
import fingersJointsNails from '@published/palmistry/fingers-joints-nails.json'
import observationRecordStructure from '@published/palmistry/observation-record-structure.json'
import sourceVersionLayers from '@published/palmistry/source-version-layers.json'

export const palmistryDatasets = { observationScope, observableVocabulary, imageOrientationRecording, faceRegionsAndDirections, threeSectionsFaceProportion, fiveFeaturesObservationFields, twelvePalacesPositionsVersions, boneContourSurface, palmDirectionLeftRight, handShapePalmFingerProportion, threeMajorPalmLines, otherPalmLinesVersions, palmMountsPosition, fingersJointsNails, observationRecordStructure, sourceVersionLayers }

export const palmistryGuideCard = {
  id: 'palmistry-reading-map', group: '从零开始', title: '相学从哪里开始', latin: 'Introduction & reading map',
  question: '面相与手相怎样从图像观察走到术语和来源？',
  summary: '先固定图像方向和可观察字段，再分别进入面部与手部结构；传统解释始终与图像观察、术语位置和来源版本分层保存。',
  count: '4 个阶段 · 当前 16 个知识节点', tags: ['阅读顺序', '图像教学', '四阶段'],
  searchTerms: ['相学', '面相', '手相', '观察字段', '图像方向', '来源版本'], publicSources: [],
  status: '专题导读 · 四阶段',
}

export const palmistryCards = [
  palmistryGuideCard,
  {
    id: observationScope.id, group: '观察基础', title: observationScope.title, latin: 'Observation scope',
    question: '相学页面究竟记录什么，又明确不做什么？', summary: observationScope.summary,
    count: '2 类对象 · 4 层记录', tags: ['面部与手部', '观察层', '公开边界'],
    searchTerms: [...observationScope.objects.flatMap((item) => [item.label, ...item.fields]), ...observationScope.record_layers.flatMap((item) => [item.label, item.content]), ...observationScope.public_excludes],
    publicSources: observationScope.public_sources, status: '正式基础节点 · 不输出人物判断',
  },
  {
    id: observableVocabulary.id, group: '观察基础', title: observableVocabulary.title, latin: 'Observable vocabulary',
    question: '一项外观特征怎样被写成可复核的观察记录？', summary: observableVocabulary.summary,
    count: '5 类字段 · 5 种可见状态', tags: ['位置', '比例', '形态与纹理'],
    searchTerms: [...observableVocabulary.dimensions.flatMap((item) => [item.label, item.question, ...item.fields]), ...observableVocabulary.visibility_states.flatMap((item) => [item.label, item.action])],
    publicSources: observableVocabulary.public_sources, status: '正式字段节点 · 先记录后命名',
  },
  {
    id: imageOrientationRecording.id, group: '观察基础', title: imageOrientationRecording.title, latin: 'Image orientation & recording',
    question: '正面、侧面、左手和右手怎样避免被镜像与拍摄条件混淆？', summary: imageOrientationRecording.summary,
    count: '3 种视图 · 11 个记录字段', tags: ['方向', '镜像', '图像条件'],
    searchTerms: [...imageOrientationRecording.views.flatMap((item) => [item.label, item.subject_direction, ...item.checks]), ...imageOrientationRecording.direction_fields, ...imageOrientationRecording.record_fields],
    publicSources: imageOrientationRecording.public_sources, status: '正式图像节点 · AI 教学样本',
  },
  {
    id: faceRegionsAndDirections.id, group: '面相结构', title: faceRegionsAndDirections.title, latin: 'Facial regions & directions',
    question: '面部正面、侧面和各局部区域怎样先建立统一坐标？', summary: faceRegionsAndDirections.summary,
    count: '2 个视角 · 5 个区域', tags: ['正面与侧面', '区域', '方位'],
    searchTerms: [...faceRegionsAndDirections.views.flatMap((item) => [item.label, item.use, ...item.checks]), ...faceRegionsAndDirections.regions.flatMap((item) => [item.label, item.range, ...item.fields]), ...faceRegionsAndDirections.direction_pairs],
    publicSources: faceRegionsAndDirections.public_sources, status: '正式面相节点 · 只负责定位',
  },
  {
    id: threeSectionsFaceProportion.id, group: '面相结构', title: threeSectionsFaceProportion.title, latin: 'Three sections & proportion',
    question: '上庭、中庭和下庭怎样取点、测量并保存版本？', summary: threeSectionsFaceProportion.summary,
    count: '3 段 · 6 个比例字段', tags: ['上中下庭', '比例', '取点版本'],
    searchTerms: [...threeSectionsFaceProportion.sections.flatMap((item) => [item.label, item.traditional_anchor, item.drawing_range, ...item.observe]), ...threeSectionsFaceProportion.ratio_fields],
    publicSources: threeSectionsFaceProportion.public_sources, status: '正式比例节点 · 图示口径明示',
  },
  {
    id: fiveFeaturesObservationFields.id, group: '面相结构', title: fiveFeaturesObservationFields.title, latin: 'Five features',
    question: '耳、眉、眼、鼻、口分别由哪些部位和观察字段组成？', summary: fiveFeaturesObservationFields.summary,
    count: '5 官 · 20 个局部组成', tags: ['耳眉眼鼻口', '传统官名', '观察字段'],
    searchTerms: [...fiveFeaturesObservationFields.features.flatMap((item) => [item.label, item.traditional_name, item.side, ...item.parts, ...item.observe]), ...fiveFeaturesObservationFields.shared_fields],
    publicSources: fiveFeaturesObservationFields.public_sources, status: '正式部位节点 · 不复制断语',
  },
  {
    id: twelvePalacesPositionsVersions.id, group: '面相结构', title: twelvePalacesPositionsVersions.title, latin: 'Twelve facial palaces',
    question: '面相十二宫的名称、位置和版本差异怎样并列保存？', summary: twelvePalacesPositionsVersions.summary,
    count: '12 宫 · 3 类版本差异', tags: ['十二宫', '位置重叠', '古今名称'],
    searchTerms: [...twelvePalacesPositionsVersions.classical_sequence, ...twelvePalacesPositionsVersions.palaces.flatMap((item) => [item.classical, item.modern, item.reference]), ...twelvePalacesPositionsVersions.version_comparison.flatMap((item) => [item.label, item.status, ...item.changes])],
    publicSources: twelvePalacesPositionsVersions.public_sources, status: '正式版本节点 · 不画成唯一分区',
  },
  {
    id: boneContourSurface.id, group: '面相结构', title: boneContourSurface.title, latin: 'Bone, contour & surface',
    question: '骨性参照、软组织轮廓和表面状态为什么必须分层观察？', summary: boneContourSurface.summary,
    count: '3 层 · 5 类干扰条件', tags: ['骨形', '轮廓', '表面状态'],
    searchTerms: [...boneContourSurface.layers.flatMap((item) => [item.label, ...item.objects, ...item.observe]), ...boneContourSurface.confounders.flatMap((item) => [item.label, ...item.affects])],
    publicSources: boneContourSurface.public_sources, status: '正式形态节点 · 图像条件优先',
  },
  {
    id: palmDirectionLeftRight.id, group: '手相结构', title: palmDirectionLeftRight.title, latin: 'Palm direction & laterality',
    question: '主体左右手、画面左右和掌面方向怎样避免混淆？', summary: palmDirectionLeftRight.summary,
    count: '2 只手 · 8 个记录字段', tags: ['左右手', '镜像', '掌面方向'],
    searchTerms: [...palmDirectionLeftRight.hands.flatMap((item) => [item.label, item.image_side, item.thumb_side, item.little_side]), ...palmDirectionLeftRight.direction_pairs, ...palmDirectionLeftRight.record_fields],
    publicSources: palmDirectionLeftRight.public_sources, status: '正式方向节点 · 不预设左右分工',
  },
  {
    id: handShapePalmFingerProportion.id, group: '手相结构', title: handShapePalmFingerProportion.title, latin: 'Hand shape & proportion',
    question: '手形怎样拆成可复核的掌长、掌宽与掌指比例？', summary: handShapePalmFingerProportion.summary,
    count: '4 条量线 · 6 个比例字段', tags: ['手形', '掌指比例', '固定取点'],
    searchTerms: [...handShapePalmFingerProportion.measurement_lines.flatMap((item) => [item.label, item.from, item.to, ...item.observe]), ...handShapePalmFingerProportion.ratio_fields, ...handShapePalmFingerProportion.shape_vocabulary.flatMap((item) => [item.label, ...item.terms])],
    publicSources: handShapePalmFingerProportion.public_sources, status: '正式比例节点 · 取点口径明示',
  },
  {
    id: threeMajorPalmLines.id, group: '手相结构', title: threeMajorPalmLines.title, latin: 'Three major palm lines',
    question: '三条常用主线怎样按位置、走向和可见状态定位？', summary: threeMajorPalmLines.summary,
    count: '3 条主线 · 10 个观察字段', tags: ['生命线', '智慧线', '感情线'],
    searchTerms: [...threeMajorPalmLines.lines.flatMap((item) => [item.label, ...item.aliases, item.reference_position, ...item.observe]), ...threeMajorPalmLines.shared_fields],
    publicSources: threeMajorPalmLines.public_sources, status: '正式线纹节点 · 名称不等于功能',
  },
  {
    id: otherPalmLinesVersions.id, group: '手相结构', title: otherPalmLinesVersions.title, latin: 'Other lines & naming versions',
    question: '主线以外的纵线、侧缘短线和腕纹为什么必须保存名称版本？', summary: otherPalmLinesVersions.summary,
    count: '5 类线纹 · 6 种可见状态', tags: ['异名同位', '同名异位', '线纹版本'],
    searchTerms: [...otherPalmLinesVersions.line_families.flatMap((item) => [item.label, ...item.common_names, item.reference_position, item.availability]), ...otherPalmLinesVersions.version_fields, ...otherPalmLinesVersions.visibility_states],
    publicSources: otherPalmLinesVersions.public_sources, status: '正式版本节点 · 历史线名不作判断',
  },
  {
    id: palmMountsPosition.id, group: '手相结构', title: palmMountsPosition.title, latin: 'Palm mounts & locations',
    question: '掌丘怎样借指根、拇指根、掌侧缘和掌心建立参考位置？', summary: palmMountsPosition.summary,
    count: '9 个参考区域 · 3 条版本说明', tags: ['掌丘', '位置参照', '火星区域'],
    searchTerms: [...palmMountsPosition.mounts.flatMap((item) => [item.label, item.reference]), ...palmMountsPosition.observe_fields, ...palmMountsPosition.version_notes.flatMap((item) => [item.label, item.content])],
    publicSources: palmMountsPosition.public_sources, status: '正式位置节点 · 不画硬边界',
  },
  {
    id: fingersJointsNails.id, group: '手相结构', title: fingersJointsNails.title, latin: 'Fingers, joints & nails',
    question: '五指、指节和指甲分别需要记录哪些可见字段？', summary: fingersJointsNails.summary,
    count: '5 指 · 8 个指甲字段', tags: ['手指', '指节', '指甲'],
    searchTerms: [...fingersJointsNails.fingers.flatMap((item) => [item.label, item.segments, item.reference, ...item.observe]), ...fingersJointsNails.joint_fields, ...fingersJointsNails.nail_fields],
    publicSources: fingersJointsNails.public_sources, status: '正式部位节点 · 不作健康判断',
  },
  {
    id: observationRecordStructure.id, group: '记录与版本', title: observationRecordStructure.title, latin: 'Observation record structure',
    question: '一条相学观察需要哪些字段，才能被别人复核？', summary: observationRecordStructure.summary,
    count: '6 层记录 · 5 种证据状态', tags: ['观察记录', '事实与术语', '可追溯'],
    searchTerms: [...observationRecordStructure.record_layers.flatMap((item) => [item.label, item.question, ...item.fields, item.example]), ...observationRecordStructure.evidence_states.flatMap((item) => [item.label, item.meaning]), ...observationRecordStructure.validation_checks],
    publicSources: observationRecordStructure.public_sources, status: '正式记录节点 · 缺项不补成事实',
  },
  {
    id: sourceVersionLayers.id, group: '记录与版本', title: sourceVersionLayers.title, latin: 'Sources, editions & images',
    question: '古籍原页、现代整理、教学图像和研究线索分别能证明什么？', summary: sourceVersionLayers.summary,
    count: '5 层材料 · 5 条比较轴', tags: ['古籍版本', '现代整理', '图像权利'],
    searchTerms: [...sourceVersionLayers.source_layers.flatMap((item) => [item.label, item.identity, ...item.supports, ...item.does_not_support, item.status]), ...sourceVersionLayers.comparison_axes.flatMap((item) => [item.label, item.question]), ...sourceVersionLayers.connection_rules],
    publicSources: sourceVersionLayers.public_sources, status: '正式来源节点 · 材料身份分层',
  },
]

export const palmistryLearningStages = [
  { id: 'foundation', label: '共同观察基础', note: '观察对象、描述字段与图像记录条件', cardIds: ['observation-scope', 'observable-vocabulary', 'image-orientation-recording'], status: '第一批 · 3 个节点' },
  { id: 'face', label: '面相结构', note: '区域、三庭、五官、十二宫与轮廓', cardIds: ['face-regions-and-directions', 'three-sections-face-proportion', 'five-features-observation-fields', 'twelve-palaces-positions-versions', 'bone-contour-surface'], status: '第二批 · 5 个节点' },
  { id: 'hand', label: '手相结构', note: '方向、手形、线纹、掌丘与手指', cardIds: ['palm-direction-left-right', 'hand-shape-palm-finger-proportion', 'three-major-palm-lines', 'other-palm-lines-versions', 'palm-mounts-position', 'fingers-joints-nails'], status: '第三批 · 6 个节点' },
  { id: 'sources', label: '记录与版本', note: '观察记录结构、古籍与现代版本', cardIds: ['observation-record-structure', 'source-version-layers'], status: '第四批 · 2 个节点' },
]
