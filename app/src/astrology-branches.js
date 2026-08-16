import indianAstrology from '@published/indian-astrology/nodes.json'
import chineseAstral from '@published/chinese-astral/nodes.json'
import { westernAstrologyIntroductionCard } from './western-astrology.js'

export const astrologyBranchDatasets = { indianAstrology, chineseAstral }

const normalizeSources = (sources) => sources.map((source) => ({
  ...source,
  note: source.note || (source.fields?.length ? `用于核对：${source.fields.join('、')}。` : '用于核对该条资料的正文与实现。'),
}))

const buildCards = (dataset, traditionGroup) => dataset.groups.flatMap((group) => dataset.nodes
  .filter((node) => node.group === group.id)
  .sort((left, right) => left.sequence - right.sequence)
  .map((node) => ({
    ...node,
    group: `${traditionGroup} · ${group.title}`,
    branch: dataset.tradition,
    searchTerms: [node.title, node.latin, ...node.tags, ...node.facts.flat()],
    publicSources: normalizeSources(node.public_sources ?? dataset.public_sources),
    status: node.status ?? (node.id === 'qintang-full-empty' || node.id === 'polar-precession-differences'
      ? '正式材料节点 · 定义待补底本'
      : node.id === 'yellow-equatorial-overlay' || node.id === 'month-general-hour-divination-natal' || node.id === 'twelve-chart-forms'
        ? '正式作者模型节点 · 非通行共识'
        : '正式知识节点 · 来源边界已分层'),
  })))

export const indianAstrologyCards = buildCards(indianAstrology, '印度占星')
export const chineseAstralCards = buildCards(chineseAstral, '中式星学')
export const astrologyBranchCards = [...indianAstrologyCards, ...chineseAstralCards]

export const astrologyIntroductionCard = {
  id: 'astrology-reading-map',
  group: '专题导读',
  title: '先认识占星',
  latin: 'Astrology reading map',
  question: '第一次进入这个总专题，应该先怎样分清西方古典、印度占星和中式星学？',
  summary: '这里的“占星”不是一套单一规则，而是三条各自成体系的路径：西方古典占星先固定黄道、宫位、七曜与预测技术；印度占星在恒星黄道、九曜、Rashi、Bhava、Nakshatra与Dasha链条内工作；中式星学则把七政四余、宫位、星官、历法测度与覆盘盘式并列保存。这个导读先帮助读者分清三条路径各自在处理什么，再进入具体节点。',
  count: '1 张总导读 · 3 条传统路径',
  tags: ['从零开始', '三条路径', '专题总览'],
  searchTerms: ['占星是什么', '西方占星和印度占星区别', '中式星学是什么', '占星学习顺序'],
  publicSources: [
    ...(westernAstrologyIntroductionCard.publicSources || []),
    ...(indianAstrologyCards[0]?.publicSources || []),
    ...(chineseAstralCards[0]?.publicSources || []),
  ].filter((source, index, sources) => sources.findIndex((item) => item.url === source.url) === index).slice(0, 3),
  status: '导读节点',
}

export const astrologyTraditions = [
  {
    id: 'western',
    title: '西方古典占星',
    latin: 'Western classical',
    coordinate: '回归／恒星黄道',
    objects: '七曜 · 十二星座 · 十二宫',
    timing: '小限 · 回归 · 主限 · 时期主星',
    count: 17,
    firstCardId: 'western-classical-start',
  },
  {
    id: 'vedic',
    title: '印度占星',
    latin: 'Vedic traditions',
    coordinate: '恒星黄道 · Ayanamsa',
    objects: '九曜 · Rashi · Bhava · Nakshatra',
    timing: 'Dasha · 行运 · Tajaka',
    count: indianAstrologyCards.length,
    firstCardId: indianAstrologyCards[0].id,
  },
  {
    id: 'chinese-astral',
    title: '中式星学',
    latin: 'Chinese astral systems',
    coordinate: '黄道 · 赤道 · 二十八宿',
    objects: '七政四余 · 宫位 · 星官',
    timing: '历法测度 · 覆动 · 十二盘式',
    count: chineseAstralCards.length,
    firstCardId: chineseAstralCards[0].id,
  },
]

export const astrologyBranchStages = [
  {
    id: 'western', title: '西方古典占星', note: '从七曜与黄经坐标进入状态、关系和时间技术。',
    groups: ['专题导读', '基础坐标', '状态与关系', '派生对象', '时间技术'],
  },
  {
    id: 'vedic', title: '印度占星', note: indianAstrology.summary,
    groups: indianAstrology.groups.map((group) => `印度占星 · ${group.title}`),
  },
  {
    id: 'chinese-astral', title: '中式星学', note: chineseAstral.summary,
    groups: chineseAstral.groups.map((group) => `中式星学 · ${group.title}`),
  },
]

export function findAstrologyBranchNode(id) {
  for (const dataset of [indianAstrology, chineseAstral]) {
    const node = dataset.nodes.find((item) => item.id === id)
    if (node) return { node, dataset, group: dataset.groups.find((item) => item.id === node.group) }
  }
  return null
}
