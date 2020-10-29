'use strict';

[{
  zoneId: ZoneId.TheFractalContinuumHard,
  triggers: [
    {
      id: 'Fractal Swipe Servo',
      netRegex: NetRegexes.startsUsing({ id: '2AE5', source: 'Servomechanical Minotaur', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2AE5', source: 'Servomechanisch(?:e|er|es|en) Minotaurus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2AE5', source: 'Minotaure Servomécanique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2AE5', source: 'サーヴォ・ミノタウロス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2AE5', source: '自控化弥诺陶洛斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2AE5', source: '자동제어 미노타우로스', capture: false }),
      infoText: {
        en: 'swipe',
        de: 'Hieb',
        fr: 'Fauche',
        ja: 'スワイプ',
        cn: '去目标背后',
        ko: '전방 피하기',
      },
    },
    {
      id: 'Fractal Swipe Bio',
      netRegex: NetRegexes.startsUsing({ id: '29A2', source: 'Biomanufactured Minotaur', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '29A2', source: 'Biotech-Minotaurus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '29A2', source: 'Minotaure Biologique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '29A2', source: 'バイオ・ミノタウロス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '29A2', source: '生化弥诺陶洛斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '29A2', source: '양산체 미노타우로스', capture: false }),
      infoText: {
        en: 'swipe',
        de: 'Hieb',
        fr: 'Fauche',
        ja: 'スワイプ',
        cn: '去目标背后',
        ko: '전방 피하기',
      },
    },
    {
      id: 'Fractal Swing Servo',
      netRegex: NetRegexes.startsUsing({ id: '2AE4', source: 'Servomechanical Minotaur', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2AE4', source: 'Servomechanisch(?:e|er|es|en) Minotaurus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2AE4', source: 'Minotaure Servomécanique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2AE4', source: 'サーヴォ・ミノタウロス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2AE4', source: '自控化弥诺陶洛斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2AE4', source: '자동제어 미노타우로스', capture: false }),
      alertText: {
        en: 'Swing',
        de: 'Schwung',
        fr: 'Swing',
        ja: 'スウィング',
        cn: '远离目标',
        ko: '밖으로',
      },
    },
    {
      id: 'Fractal Swing Bio',
      netRegex: NetRegexes.startsUsing({ id: '29A1', source: 'Biomanufactured Minotaur', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '29A1', source: 'Biotech-Minotaurus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '29A1', source: 'Minotaure Biologique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '29A1', source: 'バイオ・ミノタウロス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '29A1', source: '生化弥诺陶洛斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '29A1', source: '양산체 미노타우로스', capture: false }),
      alertText: {
        en: 'Swing',
        de: 'Schwung',
        fr: 'Swing',
        ja: 'スウィング',
        cn: '远离目标',
        ko: '밖으로',
      },
    },
    {
      id: 'Fractal Dragon Voice',
      netRegex: NetRegexes.startsUsing({ id: '861', source: 'Servomechanical Chimera', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '861', source: 'Servomechanisch(?:e|er|es|en) Chimära', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '861', source: 'Chimère Servomécanique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '861', source: 'サーヴォ・キマイラ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '861', source: '自控化奇美拉', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '861', source: '자동제어 키마이라', capture: false }),
      alertText: {
        en: 'Dragon\'s Voice',
        de: 'Stimme Des Drachen',
        fr: 'Voix Du Dragon',
        ja: '雷電の咆哮',
        cn: '靠近奇美拉',
        ko: '뇌전의 포효',
      },
      tts: {
        en: 'dragon',
        de: 'drache',
        fr: 'dragon',
        ja: '中へ',
        cn: '靠近奇美拉',
        ko: '뇌전의 포효',
      },
    },
    {
      id: 'Fractal Ram Voice',
      netRegex: NetRegexes.startsUsing({ id: '860', source: 'Servomechanical Chimera', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '860', source: 'Servomechanisch(?:e|er|es|en) Chimära', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '860', source: 'Chimère Servomécanique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '860', source: 'サーヴォ・キマイラ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '860', source: '自控化奇美拉', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '860', source: '자동제어 키마이라', capture: false }),
      alertText: {
        en: 'Ram\'s Voice',
        de: 'Stimme Des Widders',
        fr: 'Voix Du Bélier',
        ja: '氷結の咆哮',
        cn: '远离奇美拉',
        ko: '빙결의 포효',
      },
      tts: {
        en: 'ram',
        de: 'widder',
        fr: 'bélier',
        ja: '外へ',
        cn: '远离奇美拉',
        ko: '빙결의 포효',
      },
    },
    {
      id: 'Fractal Death Spin',
      netRegex: NetRegexes.startsUsing({ id: '27AE', source: 'The Ultima Beast', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '27AE', source: 'Ultimativ(?:e|er|es|en) Bestie', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '27AE', source: 'Ultima-Monstre', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '27AE', source: 'アルテマビースト', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '27AE', source: '究极神兽', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '27AE', source: '알테마 비스트', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'Fractal Aether Bend',
      netRegex: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: 'The Ultima Beast', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: 'Ultimativ(?:e|er|es|en) Bestie', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: 'Ultima-Monstre', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: 'アルテマビースト', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: '究极神兽', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: '알테마 비스트', capture: false }),
      response: Responses.getIn(),
    },
  ],
}];