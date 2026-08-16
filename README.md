# 知命图谱

把散落在传统文化、术数与人格测量中的概念、规则、关系和来源，整理成可以逐层探索的知识地图。

## 已发布链接

- **在线访问：** [https://mingli-knowledge-map.vercel.app/](https://mingli-knowledge-map.vercel.app/)
- **GitHub 仓库：** [https://github.com/ChenShuo2004/mingli-map](https://github.com/ChenShuo2004/mingli-map)
- **有温度产品：** [https://aiyouwendu.com/products](https://aiyouwendu.com/products)
- **飞书交流群：** [在飞书中打开](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=d40md8d0-01d1-4b38-8808-39e9a80307fd&qr_code=true)

## 这是什么

知命图谱不是在线算命、抽牌、起卦、排盘或个性化结论产品。

它希望先回答另一类问题：

- 一门知识在研究什么？
- 它有哪些概念、对象和规则？
- 不同知识节点之间怎样连接？
- 一条说法来自哪里？不同来源是否存在冲突？
- 第一次接触时，应该按照什么顺序理解？

因此，页面中的结构展开、步骤演示、固定案例、术语提示和关系图，都只服务于知识理解，不读取真人信息，也不替用户作判断。

## 当前内容

当前公开版本包含 **16 个知识专题、398 个公开入口**，其中包括 17 张专题导读与 381 个正式知识节点。

| 类型 | 专题 |
|---|---|
| 命理与命盘 | 八字、紫微斗数、西方占星、太乙 |
| 卦与式占 | 六爻、梅花易数、奇门遁甲、大六壬、小六壬 |
| 图像与征兆 | 塔罗、占梦、相学 |
| 环境与时间 | 风水、黄历择日 |
| 文字与测量 | 姓名与数理、人格问卷 |

每个专题通常包含：

1. 一张面向初学者的完整导读卡；
2. 专题知识节点总图；
3. 可单独打开的概念、规则、关系与来源页面；
4. 固定案例或结构演示；
5. 来源说明、版本边界与待核验状态。

## 如何使用

1. 打开[知命图谱正式站](https://mingli-knowledge-map.vercel.app/)；
2. 从首页选择一个专题；
3. 先阅读专题导读，了解对象、顺序和边界；
4. 再进入下方知识节点，沿概念、规则、关系和来源继续探索；
5. 通过页面顶部或左下角入口联系我们、加入交流群。

## 本地运行

```bash
git clone https://github.com/ChenShuo2004/mingli-map.git
cd mingli-map/app
npm install
npm run dev
```

生产构建与公开内容检查：

```bash
cd app
npm run build
npm run verify:site
npm run verify:public
```

## 项目结构

- [`app/`](app/)：React + Vite 网页应用
- [`data/knowledge/`](data/knowledge/)：公开知识数据
- [`docs/KNOWLEDGE_MODEL.md`](docs/KNOWLEDGE_MODEL.md)：知识模型说明
- [`docs/SOURCE_RULES.md`](docs/SOURCE_RULES.md)：来源处理规则
- [`PROJECT.md`](PROJECT.md)：项目状态、决定、卡点与发布记录

## 知识与来源原则

- 区分专题、概念、规则、关系、解释和来源，不把它们混成一篇长文；
- 每条实质性知识尽量追溯到来源，暂时无法核验的内容明确标记为待核验；
- 不同流派或来源发生冲突时并列保存，不擅自合并成唯一结论；
- 外部资料许可证不明确时，只保留索引和研究线索；
- 当前专题结构仍会根据真实资料和使用反馈继续调整。

## 联系我们

| 联系有温度 | 加入有温度飞书交流群 |
|---|---|
| <img src="app/public/assets/contact/youwendu-wecom.jpg" width="240" alt="有温度企业微信二维码"> | <a href="https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=d40md8d0-01d1-4b38-8808-39e9a80307fd&amp;qr_code=true"><img src="app/public/assets/contact/youwendu-feishu-group.png" width="240" alt="有温度飞书交流群二维码"></a> |

扫码联系我们，或点击飞书群二维码加入交流群。

---

有温度出品 · 持续整理中
