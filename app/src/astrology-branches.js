import indianAstrology from '@published/indian-astrology/nodes.json'
import chineseAstral from '@published/chinese-astral/nodes.json'

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
