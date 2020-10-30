'use strict';

[{
  zoneId: ZoneId.AlaMhigo,
  timelineFile: 'ala_mhigo.txt',
  timelineTriggers: [
    {
      id: 'Ala Mhigo Umoving Troika',
      regex: /不动三段/,
      beforeSeconds: 5,
      response: Responses.tankCleave(),
    },
  ],
  triggers: [
    {
      id: 'Ala Mhigo Electromagnetic Field',
      netRegex: NetRegexes.startsUsing({ id: '204D', source: 'Magitek Scorpion', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '204D', source: 'Wachskorpion', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '204D', source: 'Scorpion Magitek', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '204D', source: 'ガードスコーピオン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '204D', source: '守卫机蝎', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '204D', source: '경비 전갈', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'Ala Mhigo Mana Burst',
      netRegex: NetRegexes.startsUsing({ id: '204F', source: 'Aulus Mal Asina', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '204F', source: 'Aulus Mal Asina', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '204F', source: 'Aulus Mal Asina', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '204F', source: 'アウルス・マル・アシナ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '204F', source: '奥卢斯·玛尔·亚希纳', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '204F', source: '아울루스 말 아시나', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'Ala Mhigo Demimagicks',
      netRegex: NetRegexes.startsUsing({ id: '205D', source: 'Aulus Mal Asina', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '205D', source: 'Aulus Mal Asina', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '205D', source: 'Aulus Mal Asina', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '205D', source: 'アウルス・マル・アシナ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '205D', source: '奥卢斯·玛尔·亚希纳', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '205D', source: '아울루스 말 아시나', capture: false }),
      response: Responses.spread(),
    },
    {
      id: 'Ala Mhigo Storm',
      netRegex: NetRegexes.startsUsing({ id: ['2066', '2587'], source: 'Zenos Yae Galvus', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: ['2066', '2587'], source: 'Zenos Yae Galvus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: ['2066', '2587'], source: 'Zenos Yae Galvus', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: ['2066', '2587'], source: 'ゼノス・イェー・ガルヴァス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: ['2066', '2587'], source: '芝诺斯·耶·加尔乌斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: ['2066', '2587'], source: '제노스 예 갈부스', capture: false }),
      infoText: {
        en: 'Out of blue circle',
        de: 'Raus aus dem blauen Kreis',
        fr: 'Hors du cercle bleu',
        ja: '青い円に離れ',
        cn: '离开蓝圈',
        ko: '파란 원 바깥으로',
      },
    },
    {
      id: 'Ala Mhigo Swell',
      netRegex: NetRegexes.startsUsing({ id: ['2065', '2586'], source: 'Zenos Yae Galvus', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: ['2065', '2586'], source: 'Zenos Yae Galvus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: ['2065', '2586'], source: 'Zenos Yae Galvus', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: ['2065', '2586'], source: 'ゼノス・イェー・ガルヴァス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: ['2065', '2586'], source: '芝诺斯·耶·加尔乌斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: ['2065', '2586'], source: '제노스 예 갈부스', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'Ala Mhigo Sword',
      netRegex: NetRegexes.startsUsing({ id: ['2068', '2588'], source: 'Zenos Yae Galvus', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: ['2068', '2588'], source: 'Zenos Yae Galvus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: ['2068', '2588'], source: 'Zenos Yae Galvus', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: ['2068', '2588'], source: 'ゼノス・イェー・ガルヴァス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: ['2068', '2588'], source: '芝诺斯·耶·加尔乌斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: ['2068', '2588'], source: '제노스 예 갈부스', capture: false }),
      alertText: {
        en: 'Protean',
        de: 'Um den Boss verteilen',
        fr: 'Changement',
        ja: 'ボスを基準として散開',
        cn: '和队友分散路径',
        ko: '산개',
      },
    },
    {
      id: 'Ala Mhigo Lightless Spark',
      netRegex: NetRegexes.tether({ id: '0029', source: 'Zenos Yae Galvus' }),
      netRegexDe: NetRegexes.tether({ id: '0029', source: 'Zenos Yae Galvus' }),
      netRegexFr: NetRegexes.tether({ id: '0029', source: 'Zenos Yae Galvus' }),
      netRegexJa: NetRegexes.tether({ id: '0029', source: 'ゼノス・イェー・ガルヴァス' }),
      netRegexCn: NetRegexes.tether({ id: '0029', source: '芝诺斯·耶·加尔乌斯' }),
      netRegexKo: NetRegexes.tether({ id: '0029', source: '제노스 예 갈부스' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      alertText: {
        en: 'Face tether out',
        de: 'Verbindung nach draußen richten',
        fr: 'Lien vers l\'extérieur',
        ja: '外へ、線を向かない',
        cn: '离开人群背对连线',
        ko: '본진 바깥으로 유도하기',
      },
    },
    {
      id: 'Ala Mhigo Concentrativity',
      netRegex: NetRegexes.startsUsing({ id: '206D', source: 'Zenos Yae Galvus', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '206D', source: 'Zenos Yae Galvus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '206D', source: 'Zenos Yae Galvus', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '206D', source: 'ゼノス・イェー・ガルヴァス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '206D', source: '芝诺斯·耶·加尔乌斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '206D', source: '제노스 예 갈부스', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Aulus Mal Asina': 'Aulus mal Asina',
        'Magitek Scorpion': 'Wachskorpion',
        'Prototype Bit': 'experimentell(?:e|er|es|en) Drohne',
        'Rhalgr\'s Gate': 'Rhalgrs Tor',
        'The Chamber of Knowledge': 'Wiege des Wissens',
        'The Hall of the Griffin': 'Halle des Greifen',
        'The Storm': 'Durch den Mahlstrom',
        'Zenos Yae Galvus': 'Zenos yae Galvus',
      },
      'replaceText': {
        'Aetherochemical Grenado': 'Magitek-Granate',
        'Art of the Storm': 'Kunst des Sturmes',
        'Art of the Swell': 'Kunst des Windes',
        'Art of the Sword': 'Kunst des Schwertes',
        'Concentrativity': 'Konzentriertheit',
        'Demimagicks': 'Demimagie',
        'Electromagnetic Field': 'Elektromagnetisches Feld',
        'Integrated Aetheromodulator': 'Linearbeschleuniger',
        'Lightless Spark': 'Lichtloser Funke',
        'Lock On': 'Feststellen',
        'Magitek Disruptor': 'Magitek-Disruptor',
        'Magitek Ray': 'Magitek-Laser',
        'Mana Burst': 'Mana-Knall',
        'Mindjack': 'Gehirnwäsche',
        'Order To Charge': 'Angriffsbefehl',
        'Order To Fire': 'Feuerbefehl',
        'Storm, Swell, Sword': 'Wind, Sturm, Schwert',
        'Storm\\?/Swell\\?(?!/Sword)': 'Wind?/Sturm?',
        'Storm\\?/Swell\\?/Sword\\?': 'Wind?/Sturm?/Schwert?',
        'Swell/Sword': 'Sturm/Win',
        'Tail Laser': 'Schweiflaser',
        'Target Search': 'Zielsucher',
        'Unmoving Troika': 'Unbewegte Troika',
        'Vein Splitter': 'Erdader-Spalter',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Aulus Mal Asina': 'Aulus mal Asina',
        'Magitek Scorpion': 'Scorpion magitek',
        'Prototype Bit': 'Drone prototype',
        'Rhalgr\'s Gate': 'Porte de Rhalgr',
        'The Chamber of Knowledge': 'Chambre du Savoir',
        'The Hall of the Griffin': 'Salle du Griffon',
        'The Storm': 'Spirale du chaos',
        'Zenos Yae Galvus': 'Zenos yae Galvus',
      },
      'replaceText': {
        '\\?': ' ?',
        'Aetherochemical Grenado': 'Grenade magitek',
        'Art of the Storm': 'Art de l\'orage',
        'Art of the Swell': 'Art de la tempête',
        'Art of the Sword': 'Art de l\'épée',
        'Concentrativity': 'Kenki concentré',
        'Demimagicks': 'Demimagie',
        'Electromagnetic Field': 'Champ électromagnétique',
        'Integrated Aetheromodulator': 'Rayon accélérateur',
        'Lightless Spark': 'Étincelle sans lueur',
        'Lock On': 'Verrouillage',
        'Magitek Disruptor': 'Disrupteur magitek',
        'Magitek Ray': 'Rayon magitek',
        'Mana Burst': 'Explosion de mana',
        'Mindjack': 'Détournement cérébral',
        'Order To Charge': 'Ordre d\'attaquer',
        'Order To Fire': 'Ordre d\'attaquer',
        '(?<!Art of the )Storm': 'Tempête',
        '(?<!Art of the )Swell': 'Orage',
        '(?<!Art of the )Sword': 'Épée',
        'Tail Laser': 'Laser caudal',
        'Target Search': 'Recherche de cible',
        'Unmoving Troika': 'Troïka immobile',
        'Vein Splitter': 'Fendeur du sol',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Aulus Mal Asina': 'アウルス・マル・アシナ',
        'Magitek Scorpion': 'ガードスコーピオン',
        'Prototype Bit': '実験型ビット',
        'Rhalgr\'s Gate': '壊神門前',
        'The Chamber of Knowledge': 'アシナ仮設実験場',
        'The Hall of the Griffin': '鷲獅子の間',
        'The Storm': '混沌の渦動',
        'Zenos Yae Galvus': 'ゼノス・イェー・ガルヴァス',
      },
      'replaceText': {
        'Aetherochemical Grenado': '魔導榴弾',
        'Art of the Storm': '雷切一閃',
        'Art of the Swell': '風断一閃',
        'Art of the Sword': '妖刀一閃',
        'Concentrativity': '圧縮剣気',
        'Demimagicks': 'デミマジック',
        'Electromagnetic Field': '電磁フィールド',
        'Integrated Aetheromodulator': '加速レーザー',
        'Lightless Spark': '無明閃',
        'Lock On': 'ロックオン',
        'Magitek Disruptor': '魔導ジャマー',
        'Magitek Ray': '魔導レーザー',
        'Mana Burst': 'マナバースト',
        'Mindjack': 'ブレインジャック',
        'Order To Charge': '出撃命令',
        'Order To Fire': '攻撃命令',
        'Storm, Swell, Sword': '秘剣風雷妖',
        'Storm\\?/Swell\\?(?!/Sword)': '風?/雷?',
        'Storm\\?/Swell\\?/Sword\\?': '風?/雷?/妖?',
        'Swell/Sword': '雷/妖',
        'Tail Laser': 'テイルレーザー',
        'Target Search': 'ターゲット・サーチ',
        'Unmoving Troika': '不動三段',
        'Vein Splitter': '地脈断ち',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Aulus Mal Asina': '奥卢斯·玛尔·亚希纳',
        'Magitek Scorpion': '守卫机蝎',
        'Prototype Bit': '试验型魔导浮游炮',
        'Rhalgr\'s Gate': '破坏神之门',
        'The Chamber of Knowledge': '亚希纳临时实验场',
        'The Hall of the Griffin': '狮鹫之间',
        'The Storm': '混沌波动',
        'Zenos Yae Galvus': '芝诺斯·耶·加尔乌斯',
      },
      'replaceText': {
        'Aetherochemical Grenado': '魔导榴弹',
        'Art of the Storm': '雷切一闪',
        'Art of the Swell': '风断一闪',
        'Art of the Sword': '妖刀一闪',
        'Concentrativity': '压缩剑气',
        'Demimagicks': '亚魔法',
        'Electromagnetic Field': '电磁力场',
        'Integrated Aetheromodulator': '加速激光',
        'Lightless Spark': '无明闪',
        'Lock On': '锁定目标',
        'Magitek Disruptor': '魔导干扰器',
        'Magitek Ray': '魔导激光',
        'Mana Burst': '魔力爆发',
        'Mindjack': '精神劫持',
        'Order To Charge': '出击命令',
        'Order To Fire': '攻击命令',
        'Storm, Swell, Sword': '秘剑风雷妖',
        'Storm\\?/Swell\\?(?!/Sword)': '雷切?/风断?',
        'Storm\\?/Swell\\?/Sword\\?': '雷切?/风断?/妖刀?',
        'Swell/Sword': '风断/妖刀',
        'Tail Laser': '尾部射线',
        'Target Search': '寻找目标',
        'Unmoving Troika': '不动三段',
        'Vein Splitter': '地脉断',
      },
    },
    {
      'locale': 'ko',
      'missingTranslations': true,
      'replaceSync': {
        'Aulus Mal Asina': '아울루스 말 아시나',
        'Magitek Scorpion': '경비 전갈',
        'Prototype Bit': '실험형 비트',
        'Rhalgr\'s Gate': '파괴신의 문',
        'The Chamber of Knowledge': '아시나 가설 실험장',
        'The Hall of the Griffin': '그리핀 전당',
        'Zenos Yae Galvus': '제노스 예 갈부스',
      },
      'replaceText': {
        'Aetherochemical Grenado': '마도 유탄',
        'Art of the Storm': '뇌절일섬',
        'Art of the Swell': '풍단일섬',
        'Art of the Sword': '요도일섬',
        'Concentrativity': '압축 검기',
        'Demimagicks': '유사 마법',
        'Electromagnetic Field': '전자기장',
        'Integrated Aetheromodulator': '가속 레이저',
        'Lightless Spark': '무명섬',
        'Lock On': '조준',
        'Magitek Disruptor': '마도 교란기',
        'Magitek Ray': '마도 레이저',
        'Mana Burst': '마나 폭발',
        'Mindjack': '두뇌 장악',
        'Order To Charge': '출격 명령',
        'Order To Fire': '공격 명령',
        'Storm, Swell, Sword': '비검 풍뇌요',
        'Tail Laser': '꼬리 레이저',
        'Target Search': '대상 찾기',
        'Unmoving Troika': '부동삼단',
        'Vein Splitter': '지맥 끊기',
      },
    },
  ],
}];
