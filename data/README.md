# 数据分层

| 目录 | 用途 | 是否可直接当作正式知识 |
|---|---|---|
| `sources/` | 从外部仓库或资料忠实提取的来源数据 | 否 |
| `comparisons/` | 多来源的一致、分歧、上游关系和核验目标 | 否 |
| `knowledge/` | 经过分类、转述和来源连接的项目正式知识 | 是，但仍按记录状态展示 |
| `examples/` | 数据结构示例 | 否 |

根目录的 `knowledge-outline-index.json` 是来源知识模块到 `docs/KNOWLEDGE_OUTLINE.md` 节点的结构化路由索引。它不保存知识正文，也不改变来源层内容。

更新或检查路由索引：

```bash
python3 scripts/build-knowledge-outline-index.py
python3 scripts/build-knowledge-outline-index.py --check
```

完整收录流程见 `docs/REPOSITORY_COLLECTION_WORKFLOW.md`。
