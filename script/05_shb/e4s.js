'use strict'

export const script = {
  zoneId: ZoneId.EdensGateSepultureSavage,
  timelineFile: 'e4s.txt',
  overrideTimelineFile: true,
  timelineTriggers: [
    {
      id: 'E4S Earthen Anguish',
      regex: /大地之痛/,
    },
  ],
  triggers: [
    {
      id: 'E4S Earthen Gauntlets',
      netRegex: NetRegexes.ability({ id: '40E6', source: '泰坦', capture: false }),
    },
    {
      id: 'E4S Earthen Armor',
      netRegex: NetRegexes.ability({ id: ['40E7', '40E9'], source: '泰坦', capture: false }),
    },
    {
      id: 'E4S Stonecrusher',
      netRegex: NetRegexes.startsUsing({ id: '4116', source: '泰坦' }),
    },
    {
      id: 'E4S Evil Earth',
      netRegex: NetRegexes.startsUsing({ id: '410C', source: '泰坦', capture: false }),
      infoText: {
        cn: '观察地板',
      },
    },
    {
      id: 'E4S Voice of the Land',
      netRegex: NetRegexes.startsUsing({ id: '4114', source: '泰坦', capture: false }),
    },
    {
      id: 'E4S Geocrush',
      netRegex: NetRegexes.startsUsing({ id: '4113', source: '泰坦', capture: false }),
    },
    {
      id: 'E4S Massive Landslide - Front',
      netRegex: NetRegexes.ability({ id: '40E6', source: '泰坦', capture: false }),
      alertText: {
        cn: '面前躲避',
      },
    },
    {
      id: 'E4S Massive Landslide - Sides',
      netRegex: NetRegexes.ability({ id: '4117', source: '泰坦', capture: false }),
    },
    {
      id: 'E4S Landslide',
      netRegex: NetRegexes.startsUsing({ id: '411A', source: '泰坦', capture: false }),
      alertText: {
        cn: '后方角落',
      },
    },
    {
      id: 'E4S Bury Directions',
      netRegex: NetRegexes.abilityFull({ id: '4142', source: '爆破岩石' }),
    },
    {
      id: 'E4S Fault Line - Sides',
      netRegex: NetRegexes.ability({ id: '40E8', source: '泰坦', capture: false }),
      alertText: {
        cn: '车轮：两侧',
      },
    },
    {
      id: 'E4S Fault Line - Front',
      netRegex: NetRegexes.ability({ id: '411F', source: '泰坦', capture: false }),
      infoText: {
        cn: '坦克冲锋',
      },
    },
    {
      id: 'E4S Magnitude 5.0',
      netRegex: NetRegexes.startsUsing({ id: '4121', source: '泰坦', capture: false }),
    },
    {
      id: 'E4S Earthen Fury',
      netRegex: NetRegexes.startsUsing({ id: '4124', source: '极大泰坦', capture: false }),
    },
    {
      id: 'E4S Earthen Fist - Left/Right',
      netRegex: NetRegexes.startsUsing({ id: '412F', source: '极大泰坦', capture: false }),
    },
    {
      id: 'E4S Earthen Fist - Right/Left',
      netRegex: NetRegexes.startsUsing({ id: '4130', source: '极大泰坦', capture: false }),
    },
    {
      id: 'E4S Earthen Fist - 2x Left',
      netRegex: NetRegexes.startsUsing({ id: '4131', source: '极大泰坦', capture: false }),
    },
    {
      id: 'E4S Earthen Fist - 2x Right',
      netRegex: NetRegexes.startsUsing({ id: '4132', source: '极大泰坦', capture: false }),
    },
    {
      id: 'E4S Dual Earthen Fists',
      netRegex: NetRegexes.startsUsing({ id: '4135', source: '极大泰坦', capture: false }),
    },
    {
      id: 'E4S Plate Fracture - Front Right',
      netRegex: NetRegexes.startsUsing({ id: '4125', source: '极大泰坦', capture: false }),
    },
    {
      id: 'E4S Plate Fracture - Back Right',
      netRegex: NetRegexes.startsUsing({ id: '4126', source: '极大泰坦', capture: false }),
    },
    {
      id: 'E4S Plate Fracture - Back Left',
      netRegex: NetRegexes.startsUsing({ id: '4127', source: '极大泰坦', capture: false }),
    },
    {
      id: 'E4S Plate Fracture - Front Left',
      netRegex: NetRegexes.startsUsing({ id: '4128', source: '极大泰坦', capture: false }),
    },
    {
      id: 'E4S Tumult',
      netRegex: NetRegexes.startsUsing({ id: '412A', source: '极大泰坦', capture: false }),
    },
  ]
}
