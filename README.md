# 知命图谱

这是一个仍在验证中的命理、占卜、传统文化与人格测验知识地图。

它尝试把散乱、艰深、彼此交叉的知识，整理成普通人可以探索、理解并看见知识关系的体验。

当前不是在开发排盘、测算或个性化结论功能，也不追求一次性建立完整分类。第一阶段只建立能够承接真实资料的最小知识框架，并用少量 GitHub 仓库和专题样本检验它。

## 从哪里开始

- 网页应用：[app/](app/)
- 当前状态与决定：[PROJECT.md](PROJECT.md)
- 知识如何组织：[docs/KNOWLEDGE_MODEL.md](docs/KNOWLEDGE_MODEL.md)
- 来源如何处理：[docs/SOURCE_RULES.md](docs/SOURCE_RULES.md)
- 公开知识数据：[data/knowledge/](data/knowledge/)

## 查看页面原型

```bash
cd app
npm install
npm run dev
```

页面现包含总知识地图、专题首页和知识详情页，覆盖八字、六爻、紫微、占星、塔罗、太乙、奇门、大六壬、小六壬、梅花、黄历、风水、占梦、姓名、相学和人格问卷等专题。

所有交互只服务固定知识映射与结构理解，不接收真人信息，不排盘、起卦、抽牌或输出个人结论。

## 生产构建

```bash
cd app
npm run build
npm run verify:public
```

## 当前工作顺序

```text
建立最小框架
→ 盘点候选 GitHub 仓库
→ 提取少量知识样本
→ 检查模型是否承载得住
→ 用一个专题做可探索原型
→ 观察真实使用
```
