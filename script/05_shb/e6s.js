'use strict';

const script = {
  zoneId: ZoneId.EdensVerseFurorSavage,
  timelineFile: 'e6s.txt',
  overrideTimelineFile: true,
  triggers: [
    {
      id: 'E6S Strike Spark',
      netRegex: NetRegexes.startsUsing({ source: ['伊弗利特', '赤翼罗羯坨博叉'], id: '4BD3', capture: false }),
    },
    {
      id: 'E6S Superstorm',
      netRegex: NetRegexes.startsUsing({ source: '迦楼罗', id: '4BF7', capture: false }),
    },
    {
      id: 'E6S Ferostorm',
      netRegex: NetRegexes.startsUsing({ source: ['迦楼罗', '赤翼罗羯坨博叉'], id: ['4BF[EF]', '4C0[45]'], capture: false }),
    },
    {
      id: 'E6S Touchdown',
      netRegex: NetRegexes.startsUsing({ source: '伊弗利特', id: '4C09', capture: false }),
    },
    {
      id: 'E6S Inferno Howl',
      netRegex: NetRegexes.startsUsing({ source: ['伊弗利特', '赤翼罗羯坨博叉'], id: '4C14', capture: false }),
    },
    {
      // Save ability state since the generic tether used has multiple uses in this fight
      id: 'E6S Hands of Flame Start',
      netRegex: NetRegexes.startsUsing({ source: ['伊弗利特', '赤翼罗羯坨博叉'], id: '4D00', capture: false }),
    },
    {
      id: 'E6S Hands of Flame Cast',
      netRegex: NetRegexes.ability({ source: ['伊弗利特', '赤翼罗羯坨博叉'], id: '4D00', capture: false }),
    },
    {
      id: 'E6S Instant Incineration',
      netRegex: NetRegexes.startsUsing({ source: ['伊弗利特', '赤翼罗羯坨博叉'], id: '4C0E' }),
    },
    {
      id: 'E6S Meteor Strike',
      netRegex: NetRegexes.startsUsing({ source: ['伊弗利特', '赤翼罗羯坨博叉'], id: '4C0F', capture: false }),
    },
    {
      id: 'E6S Hated of the Vortex',
      netRegex: NetRegexes.startsUsing({ source: '迦楼罗', id: '4F9F', capture: false }),
    },
    {
      id: 'E6S Raktapaksa Spawn',
      netRegex: NetRegexes.ability({ source: '赤翼罗羯坨博叉', id: '4D55', capture: false }),
    },
    {
      id: 'E6S Downburst Knockback 1',
      netRegex: NetRegexes.startsUsing({ source: '迦楼罗', id: '4BFB', capture: false }),
    },
    {
      id: 'E6S Downburst Knockback 2',
      netRegex: NetRegexes.startsUsing({ source: '赤翼罗羯坨博叉', id: '4BFC', capture: false }),
    },
    {
      id: 'E6S Conflag Strike',
      netRegex: NetRegexes.startsUsing({ source: '赤翼罗羯坨博叉', id: '4C10', capture: false }),
    },
    {
      id: 'E6S Conflag Strike Behind',
      netRegex: NetRegexes.startsUsing({ source: '赤翼罗羯坨博叉', id: '4C10', capture: false }),
    },
  ]
}
