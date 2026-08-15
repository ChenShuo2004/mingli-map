import { fileURLToPath, URL } from 'node:url'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const publishedKnowledgeRoot = fileURLToPath(new URL('../data/knowledge', import.meta.url))

const privateFieldNames = new Set([
  'schema_version',
  'internal_review',
  'source_refs',
  'consensus_scope',
  'presentation_rule',
  'accepted_core_only',
  'held_back',
  'preservation_rule',
  'comparison_refs',
  'source_ref',
  'locked_commit',
])

function projectPublicFields(value) {
  if (Array.isArray(value)) return value.map(projectPublicFields)
  if (typeof value === 'string') {
    return value
      .replaceAll('本专题', '这套知识路径')
      .replaceAll('本节点', '该条资料')
      .replaceAll('本轮', '当前版本')
      .replaceAll('本线程', '后续步骤')
      .replaceAll('公开层', '阅读页面')
      .replaceAll('本批', '当前版本')
  }
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key]) => !privateFieldNames.has(key))
      .map(([key, item]) => [key, projectPublicFields(item)]),
  )
}

function publicKnowledgeOnly() {
  const virtualPrefix = '\0public-knowledge:'
  return {
    name: 'public-knowledge-only',
    enforce: 'pre',
    resolveId(source) {
      if (source.startsWith('@published/')) return `${virtualPrefix}${encodeURIComponent(source.slice('@published/'.length))}.js`
      return null
    },
    load(id) {
      if (!id.startsWith(virtualPrefix)) return null
      const relativePath = decodeURIComponent(id.slice(virtualPrefix.length, -3))
      const rawData = JSON.parse(readFileSync(resolve(publishedKnowledgeRoot, relativePath), 'utf8'))
      const publicData = projectPublicFields(rawData)
      if (relativePath === 'personality-questionnaire.json') {
        const sourcesByRef = new Map((rawData.public_sources ?? []).map((source) => [source.source_ref, source]))
        publicData.cards = publicData.cards.map((card, index) => ({
          ...card,
          public_sources: (rawData.cards[index].source_refs ?? [])
            .map((sourceRef) => sourcesByRef.get(sourceRef))
            .filter(Boolean)
            .map(projectPublicFields),
        }))
      }
      if (relativePath === 'daliuren/public-knowledge-map.json') {
        publicData.nodes = publicData.nodes.map((node, index) => ({
          ...node,
          public_sources: (rawData.nodes[index].source_refs ?? [])
            .map((sourceRef) => rawData.source_catalog[sourceRef])
            .filter(Boolean)
            .map(projectPublicFields),
        }))
      }
      return `export default ${JSON.stringify(publicData)}`
    },
  }
}

export default defineConfig({
  plugins: [publicKnowledgeOnly(), react()],
  server: {
    port: 4222,
    strictPort: true,
    fs: {
      allow: ['..'],
    },
  },
})
