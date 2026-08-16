import frameworkData from '@published/topic-frameworks.json'
import { consultationEthicsCard, correspondenceSystemsCard, deckStructureCard, glossaryCard, historyAndDecksCard, imageryElementsMapCard, interpretiveUncertaintyCard, majorArcanaImagesCard, meaningLineagesCard, minorArcanaImagesCard, multiCardCombinationCard, questionFramingCard, readingReviewCard, readingWorkflowCard, shuffleAndDrawCard, spreadSelectionCard, spreadStructuresCard, tarotIntroductionCard, tarotLearningPath, tarotLearningStages, tarotSearchEntries } from './tarot.js'
import { taiyiCompactCards, taiyiLearningPath } from './taiyi.js'
import { adjectiveStarVersionInventoryCard, birthYearTransformationsCard, fiveElementsBureauCard, flankingHiddenPalacesCard, fourteenMajorStarsCard, fourteenMinorStarPlacementCard, heavenEarthHumanRearrangementCard, horoscopeLayersCard, horoscopeStarPlacementCard, minorLimitAgeCycleCard, monthlyDoujunSequenceCard, palaceStemFlyingPathsCard, soulBodyMastersCard, starBrightnessCard, surroundedPalacesCard, twelvePalaceCard, twelveSpiritCyclesCard, ziweiIntroductionCard, ziweiLearningPath, ziweiLearningStages } from './ziwei.js'
import { meihuaCards } from './meihua.js'
import { qimenCards, qimenLearningStages } from './qimen.js'
import { westernAstrologyCards } from './western-astrology.js'
import { astrologyBranchCards, astrologyIntroductionCard } from './astrology-branches.js'
import { xiaoliurenCards, xiaoliurenLearningStages } from './xiaoliuren.js'
import { daliurenCards, daliurenLearningPath } from './daliuren.js'
import { personalityTopic } from './personality.js'
import { almanacCards } from './almanac.js'
import { fengshuiCards, fengshuiLearningStages } from './fengshui.js'
import { namingCards, namingLearningStages } from './naming.js'
import { dreamCards, dreamLearningStages } from './dream.js'
import { palmistryCards, palmistryLearningStages } from './palmistry.js'

const generatedFrameworkTopics = Object.fromEntries(frameworkData.topics.map((topic) => {
  const expandedCards = topic.cards.flatMap((card) => {
    if (topic.id === 'ziwei' && card.id === 'chart-foundation') return [ziweiIntroductionCard, twelvePalaceCard, fiveElementsBureauCard, soulBodyMastersCard, twelveSpiritCyclesCard, heavenEarthHumanRearrangementCard]
    if (topic.id === 'ziwei' && card.id === 'stars-transformations') return [fourteenMajorStarsCard, fourteenMinorStarPlacementCard, birthYearTransformationsCard, starBrightnessCard, adjectiveStarVersionInventoryCard]
    if (topic.id === 'ziwei' && card.id === 'palaces-timing') return [surroundedPalacesCard, flankingHiddenPalacesCard, palaceStemFlyingPathsCard, horoscopeLayersCard, monthlyDoujunSequenceCard, minorLimitAgeCycleCard, horoscopeStarPlacementCard]
    if (topic.id === 'tarot' && card.id === 'deck-structure') return [tarotIntroductionCard, deckStructureCard, glossaryCard, historyAndDecksCard]
    if (topic.id === 'tarot' && card.id === 'card-meanings') return [majorArcanaImagesCard, minorArcanaImagesCard, imageryElementsMapCard, meaningLineagesCard, interpretiveUncertaintyCard, correspondenceSystemsCard]
    if (topic.id === 'tarot' && card.id === 'spreads-reading') return [readingWorkflowCard, questionFramingCard, spreadSelectionCard, spreadStructuresCard, shuffleAndDrawCard, multiCardCombinationCard, consultationEthicsCard, readingReviewCard]
    if (topic.id === 'taiyi' && card.id === 'calculation-modes-versions') return [taiyiCompactCards.find((item) => item.id === 'taiyi-reading-map'), ...taiyiCompactCards.filter((item) => item.group === '计法与版本')].filter(Boolean)
    if (topic.id === 'taiyi' && card.id === 'board-symbol-layers') return taiyiCompactCards.filter((item) => item.group === '式盘与符号')
    if (topic.id === 'taiyi' && card.id === 'host-guest-structure') return taiyiCompactCards.filter((item) => item.group === '主客算与关系')
    if (topic.id === 'meihua') {
      if (card.id === 'casting-methods') return meihuaCards
      return []
    }
    if (topic.id === 'qimen') {
      if (card.id === 'nine-palace-symbols') return qimenCards
      return []
    }
    if (topic.id === 'xiaoliuren') {
      if (card.id === 'six-palaces-casting') return xiaoliurenCards
      return []
    }
    if (topic.id === 'daliuren') {
      if (card.id === 'generals-foundation') return daliurenCards
      return []
    }
    if (topic.id === 'almanac') {
      if (card.id === 'calendar-foundation') return almanacCards
      return []
    }
    if (topic.id === 'fengshui') {
      if (card.id === 'environment-directions') return fengshuiCards
      return []
    }
    if (topic.id === 'naming') {
      if (card.id === 'characters-strokes') return namingCards
      return []
    }
    if (topic.id === 'dream') {
      if (card.id === 'dream-images') return dreamCards
      return []
    }
    if (topic.id === 'palmistry') {
      if (card.id === 'face-forms') return palmistryCards
      return []
    }
    if (topic.id === 'astrology' && card.id === 'western-classical') return [astrologyIntroductionCard, ...westernAstrologyCards, ...astrologyBranchCards]
    if (topic.id === 'astrology' && ['vedic-traditions', 'chinese-astral'].includes(card.id)) return []
    return {
      ...card,
      group: card.group || (topic.id === 'ziwei' ? card.title : topic.id === 'astrology' ? '其他占星体系' : '首层框架'),
      status: topic.id === 'mbti' ? '正式知识节点 · 来源与边界已分层' : '框架已建立 · 细则待核验',
      publicSources: card.public_sources || topic.public_sources,
    }
  })

  const guideSources = expandedCards
    .flatMap((card) => card.publicSources || card.public_sources || [])
    .filter((source, index, sources) => sources.findIndex((item) => item.url === source.url) === index)
    .slice(0, 3)
  const cards = expandedCards.map((card) => (
    card.status?.includes('导读') && !(card.publicSources?.length || card.public_sources?.length)
      ? { ...card, publicSources: guideSources }
      : card
  ))

  const groupNames = [...new Set(cards.map((card) => card.group))]

  return [topic.id, {
    ...topic,
    id: topic.id,
    kicker: topic.id === 'meihua' ? '梅花易数 · 数与卦形' : topic.id === 'qimen' ? '奇门遁甲 · 坐标与四盘' : topic.id === 'xiaoliuren' ? '小六壬 · 六宫与四盘' : topic.id === 'daliuren' ? '大六壬 · 四课与三传' : topic.id === 'fengshui' ? '风水 · 环境与方位' : topic.id === 'naming' ? '姓名与数理 · 文字与数理' : topic.id === 'palmistry' ? '相学 · 形态与图像' : topic.id === 'dream' ? '占梦 · 梦象与占辞' : topic.id === 'astrology' ? '占星 · 三种传统路径' : `${topic.title} · 首层框架`,
    cards,
    groups: topic.id === 'xiaoliuren'
      ? [{ name: '从零开始', items: [xiaoliurenCards[0].title] }, ...xiaoliurenLearningStages.map((stage) => ({ name: stage.label, items: stage.cardIds.map((id) => xiaoliurenCards.find((card) => card.id === id).title) }))]
      : topic.id === 'dream'
        ? [{ name: '从零开始', items: [dreamCards[0].title] }, ...dreamLearningStages.filter((stage) => stage.card_ids.length).map((stage) => ({ name: stage.label, items: stage.card_ids.map((id) => dreamCards.find((card) => card.id === id).title) }))]
      : topic.id === 'palmistry'
        ? [{ name: '从零开始', items: [palmistryCards[0].title] }, ...palmistryLearningStages.filter((stage) => stage.cardIds.length).map((stage) => ({ name: stage.label, items: stage.cardIds.map((id) => palmistryCards.find((card) => card.id === id).title) }))]
      : topic.id === 'ziwei'
        ? [{ name: '从零开始', items: [ziweiIntroductionCard.title] }, ...ziweiLearningStages.map((stage) => ({ name: stage.label, items: stage.cards.map((id) => cards.find((card) => card.id === id)?.title).filter(Boolean) }))]
        : groupNames.map((name) => ({ name, items: cards.filter((card) => card.group === name).map((card) => card.title) })),
    searchHint: topic.id === 'tarot' ? '搜索单牌、术语、流程或牌面元素…' : topic.id === 'meihua' ? '搜索取余、体用、错综卦、爻位或分秒扩展…' : topic.id === 'qimen' ? '搜索九宫、三奇六仪、八门、九星或四盘…' : topic.id === 'xiaoliuren' ? '搜索六宫、起课、天盘、六亲、六神或来源冲突…' : topic.id === 'daliuren' ? '搜索月将、四课、三传、伏吟或天将…' : topic.id === 'fengshui' ? '搜索二十四山、宅卦、命卦、游年或门主灶…' : topic.id === 'naming' ? '搜索姓氏、异体字、康熙笔画或字库…' : topic.id === 'palmistry' ? '搜索面部、手部、比例、镜像或图像条件…' : topic.id === 'dream' ? '搜索六梦、梦象、占辞或梦验…' : `搜索${topic.title}板块…`,
    emptyHint: topic.id === 'tarot' ? '可以试试“愚人”“如何提问”“洗牌”或“王座”。' : topic.id === 'meihua' ? '可以试试“错卦”“得中”或“分秒起卦”。' : topic.id === 'qimen' ? '可以试试“天禽”“十八局”或“神盘”。' : topic.id === 'xiaoliuren' ? '可以试试“六宫”“天盘”或“六亲”。' : topic.id === 'daliuren' ? '可以试试“月将”“涉害”或“十二天将”。' : topic.id === 'fengshui' ? '可以试试“东四宅”“伏位”或“门主灶”。' : topic.id === 'naming' ? '可以试试“复姓”“异体字”或“笔画口径”。' : topic.id === 'palmistry' ? '可以试试“镜像”“比例”或“左右手”。' : topic.id === 'dream' ? '可以试试“六梦”“梦验”或“梦境记录”。' : `可以试试“${cards[0].title}”或“${cards[1].title}”。`,
    searchEntries: topic.id === 'tarot' ? tarotSearchEntries : undefined,
    frameworkOnly: !['meihua', 'xiaoliuren', 'daliuren', 'qimen', 'mbti', 'almanac', 'fengshui', 'naming', 'palmistry', 'dream'].includes(topic.id),
    learningPath: topic.id === 'taiyi'
      ? taiyiLearningPath
      : topic.id === 'tarot'
        ? tarotLearningPath
      : topic.id === 'meihua'
        ? ['梅花易数从哪里开始', '先天八卦数与取余', '两数起卦', '三数起卦的版本差异', '时间起卦的版本差异', '本卦、互卦与变卦', '体卦与用卦', '五行关系方向', '卦气旺衰', '八卦之德', '外应与十应', '错卦与综卦', '爻位结构', '分秒起卦的现代扩展']
      : topic.id === 'qimen'
        ? [qimenCards[0].title, ...qimenLearningStages.flatMap((stage) => stage.cards.map((id) => qimenCards.find((card) => card.id === id).title))]
      : topic.id === 'daliuren'
        ? daliurenLearningPath
      : topic.id === 'ziwei'
        ? ziweiLearningPath
      : topic.id === 'astrology'
        ? cards.map((card) => card.title)
      : topic.id === 'almanac'
        ? almanacCards.map((card) => card.title)
      : topic.id === 'fengshui'
        ? [fengshuiCards[0].title, ...fengshuiLearningStages.flatMap((stage) => stage.cardIds.map((id) => fengshuiCards.find((card) => card.id === id).title))]
      : topic.id === 'naming'
        ? [namingCards[0].title, ...namingLearningStages.flatMap((stage) => stage.cardIds.map((id) => namingCards.find((card) => card.id === id).title))]
      : topic.id === 'palmistry'
        ? [palmistryCards[0].title, ...palmistryLearningStages.flatMap((stage) => stage.cardIds.map((id) => palmistryCards.find((card) => card.id === id).title))]
      : topic.id === 'dream'
        ? dreamCards.map((card) => card.title)
      : undefined,
  }]
}))

export const frameworkTopics = {
  ...generatedFrameworkTopics,
  mbti: personalityTopic,
}
