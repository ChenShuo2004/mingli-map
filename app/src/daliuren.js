import publicKnowledgeMap from '@published/daliuren/public-knowledge-map.json'

function resolveNode(node) {
  return {
    ...node,
    public_sources: node.public_sources,
  }
}

export const daliurenFixedLesson = publicKnowledgeMap.fixed_lesson

const orderedNodes = [
  ...publicKnowledgeMap.nodes.filter((node) => node.id !== 'fixed-lesson-review'),
  publicKnowledgeMap.nodes.find((node) => node.id === 'fixed-lesson-review'),
].filter(Boolean)

export const daliurenDatasetByCardId = Object.fromEntries(
  orderedNodes.map((node) => [node.id, resolveNode(node)]),
)

export const daliurenCards = orderedNodes.map((node) => ({
  id: node.id,
  group: node.group,
  title: node.title,
  latin: node.latin,
  question: node.question,
  summary: node.summary,
  count: node.count,
  tags: node.tags,
  searchTerms: node.search_terms,
  publicSources: node.public_sources,
  status: node.role === 'guide' ? '专题导读' : '知识节点',
}))

export const daliurenLearningPath = daliurenCards.map((item) => item.title)
