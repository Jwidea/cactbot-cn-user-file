'use strict';

export const script = {
  zoneId: ZoneId.TheEpicOfAlexanderUltimate,
  timelineFile: 'the_epic_of_alexander.txt',
  overrideTimelineFile: true,
  timelineTriggers: [
    {
      id: 'TEA Fluid Swing',
      regex: /流体摆动/,
    },
    {
      // Note: there's nothing in the log for when the hand turns into an
      // open palm or a fist, so this just warns when to move and not
      // where to go based on time.
      id: 'TEA Hand of Stuff',
      regex: /祈祷之手\/离别之手/,
    },
    {
      id: 'TEA Water and Thunder',
      regex: /水 雷/,
    },
    {
      id: 'TEA Flarethrower',
      regex: /大火炎放射/,
    },
    {
      id: 'TEA Propeller Wind',
      regex: /螺旋桨强风/,
    },
    {
      id: 'TEA Final Nisi Pass',
      regex: /螺旋桨强风/,
    },
    {
      id: 'TEA Wormhole Puddle',
      regex: /罪恶感 ([1-3])/,
    },
    {
      // Shared magic tankbuster windup to non-capital Ordained Punishment.
      // Do this from timeline as you can have more than three seconds
      // to move and stack the tanks.
      id: 'TEA Ordained Capital Punishment',
      regex: /^加重诛罚$/,
    },
  ],
  triggers: [
    {
      id: 'TEA Brute Phase',
      netRegex: NetRegexes.startsUsing({ source: '残暴正义号', id: '483E', capture: false })
    },
    {
      id: 'TEA Inception Phase',
      netRegex: NetRegexes.startsUsing({ source: '至尊亚历山大', id: '486F', capture: false }),
    },
    {
      id: 'TEA Wormhole Phase',
      netRegex: NetRegexes.startsUsing({ source: '至尊亚历山大', id: '486E', capture: false }),
    },
    {
      id: 'TEA Fate Alpha Phase',
      netRegex: NetRegexes.startsUsing({ source: '完美亚历山大', id: '487B', capture: false }),
    },
    {
      id: 'TEA Fate Beta Phase',
      netRegex: NetRegexes.startsUsing({ source: '完美亚历山大', id: '4B13', capture: false }),
    },
    {
      id: 'TEA Liquid Tank',
      netRegex: NetRegexes.abilityFull({ source: '有生命活水', id: '4978' }),
    },
    {
      id: 'TEA Hand Tank',
      netRegex: NetRegexes.abilityFull({ source: '活水之手', id: '4979' }),
    },
    {
      id: 'TEA Cruise Chaser Tank',
      netRegex: NetRegexes.abilityFull({ source: '巡航驱逐者', id: '497A' }),
    },
    {
      id: 'TEA Brute Tank',
      netRegex: NetRegexes.abilityFull({ source: '残暴正义号', id: '497B' }),
    },
    {
      id: 'TEA Cascade',
      netRegex: NetRegexes.startsUsing({ source: '有生命活水', id: '4826', capture: false }),

    },
    {
      id: 'TEA Protean Wave',
      netRegex: NetRegexes.startsUsing({ source: '有生命活水', id: '4822', capture: false }),
    },
    {
      id: 'TEA Drainage Tether',
      netRegex: NetRegexes.tether({ source: '活水之怒', id: '0003' }),
    },
    {
      id: 'TEA Hand of Pain 5',
      netRegex: NetRegexes.startsUsing({ source: '活水之手', id: '482D', capture: false }),
    },
    {
      id: 'TEA Chakrams Out',
      // Link Up
      netRegex: NetRegexes.ability({ source: '残暴正义号', id: '483F', capture: false }),
    },
    {
      id: 'TEA Chakrams In',
      // Optical Sight
      netRegex: NetRegexes.ability({ source: '巡航驱逐者', id: '482F', capture: false }),
    },
    {
      id: 'TEA Whirlwind',
      netRegex: NetRegexes.startsUsing({ source: '巡航驱逐者', id: '49C2', capture: false }),
    },
    {
      id: 'TEA Spin Crusher',
      netRegex: NetRegexes.startsUsing({ source: '巡航驱逐者', id: '4A72', capture: false }),
    },
    {
      id: 'TEA Hidden Minefield',
      netRegex: NetRegexes.ability({ source: '残暴正义号', id: '4851', capture: false }),
    },
    {
      id: 'TEA Limit Cut Shield',
      netRegex: NetRegexes.ability({ source: '巡航驱逐者', id: '4833', capture: false }),
    },
    {
      id: 'TEA Pass Nisi 1',
      netRegex: NetRegexes.startsUsing({ source: '巡航驱逐者', id: '4836', capture: false }),
    },
    {
      id: 'TEA Pass Nisi 2',
      netRegex: NetRegexes.ability({ source: '残暴正义号', id: '4850', capture: false }),
    },
    {
      id: 'TEA Pass Nisi 3',
      // 8 seconds after Flarethrower cast starts.
      netRegex: NetRegexes.startsUsing({ source: '残暴正义号', id: '4845', capture: false }),
    },
    {
      id: 'TEA Gavel',
      netRegex: NetRegexes.startsUsing({ source: '残暴正义号', id: '483C', capture: false }),
    },
    {
      id: 'TEA Double Rocket Punch',
      netRegex: NetRegexes.startsUsing({ source: '残暴正义号', id: '4847' }),
    },
    {
      id: 'TEA Brute Ray',
      netRegex: NetRegexes.ability({ source: '残暴正义号', id: '484A', capture: false }),
    },
    {
      id: 'TEA Chastening Heat',
      netRegex: NetRegexes.startsUsing({ source: '至尊亚历山大', id: '4A80' }),
    },
    {
      id: 'TEA Judgment Crystal Placement',
      netRegex: NetRegexes.ability({ source: '至尊亚历山大', id: '485C', capture: false }),
    },
    {
      id: 'TEA Terashatter Flarethrower',
      netRegex: NetRegexes.ability({ source: '审判结晶', id: '4A88', capture: false }),
    },
    {
      id: 'TEA Inception Alpha Sword',
      // Sacrament cast.
      netRegex: NetRegexes.ability({ source: '至尊亚历山大', id: '485F', capture: false }),
    },
    {
      id: 'TEA Wormhole',
      netRegex: NetRegexes.ability({ source: '至尊亚历山大', id: '486E', capture: false }),
    },
    {
      id: 'TEA Cactbot Wormhole 4 Super Jump',
      netRegex: NetRegexes.ability({ source: '残暴正义号', id: '484A', capture: false }),
    },
    {
      id: 'TEA Mega Holy',
      netRegex: NetRegexes.startsUsing({ source: '至尊亚历山大', id: '4A83', capture: false }),
    },
    {
      id: 'TEA Summon Alexander',
      netRegex: NetRegexes.startsUsing({ source: '至尊亚历山大', id: '4A55', capture: false }),
    },
    {
      id: 'TEA Divine Judgment',
      netRegex: NetRegexes.ability({ source: '至尊亚历山大', id: '4879', capture: false }),
    },
    {
      id: 'TEA Perfect Optical Sight Spread',
      netRegex: NetRegexes.startsUsing({ source: '完美亚历山大', id: '488A', capture: false }),
    },
    {
      id: 'TEA Ordained Motion',
      netRegex: NetRegexes.startsUsing({ source: '完美亚历山大', id: '487E', capture: false }),
    },
    {
      id: 'TEA Ordained Stillness',
      netRegex: NetRegexes.startsUsing({ source: '完美亚历山大', id: '487F', capture: false }),
    },
    {
      id: 'TEA Alpha Ordained Motion 1',
      netRegex: NetRegexes.ability({ source: '完美亚历山大', id: '4B0D', capture: false }),
    },
    {
      id: 'TEA Alpha Ordained Stillness 1',
      netRegex: NetRegexes.ability({ source: '完美亚历山大', id: '4B0E', capture: false }),
    },
    {
      id: 'TEA Alpha Ordained Motion 2',
      netRegex: NetRegexes.abilityFull({ source: '完美亚历山大', id: '4899', capture: false }),
    },
    {
      id: 'TEA Alpha Ordained Stillness 2',
      netRegex: NetRegexes.abilityFull({ source: '完美亚历山大', id: '489A', capture: false }),
    },
    {
      id: 'TEA Alpha Safe Spot',
      // The non-safe alexanders use 489F.
      netRegex: NetRegexes.abilityFull({ source: '完美亚历山大', id: '49AA' }),
    },
    {
      id: 'TEA Alpha Resolve First Motion',
      netRegex: NetRegexes.ability({ source: '完美亚历山大', id: '487C', capture: false }),
    },
    {
      id: 'TEA Alpha Resolve Second Motion',
      netRegex: NetRegexes.ability({ source: '完美亚历山大', id: '487C', capture: false }),
    },
    {
      id: 'TEA Beta Radiant',
      netRegex: NetRegexes.abilityFull({ source: '完美亚历山大', id: '489E' }),
    },
    {
      // For reference:
      // Spread (on Alexander) is 48A0.
      // Stack (on Alexander) is 48A1.
      // Spread (per person) is 48A2.
      // Stack (two people) is 48A3.
      id: 'TEA Beta Optical Spread',
      netRegex: NetRegexes.abilityFull({ source: '完美亚历山大', id: '48A0', capture: false }),
    },
    {
      id: 'TEA Beta Optical Stack',
      netRegex: NetRegexes.abilityFull({ source: '完美亚历山大', id: '48A1', capture: false }),
    },
    {
      id: 'TEA Beta Optical Final',
      netRegex: NetRegexes.ability({ source: '完美亚历山大', id: '4B14', capture: false }),
    },
    {
      id: 'TEA Beta Radiant Final',
      netRegex: NetRegexes.ability({ source: '完美亚历山大', id: '4B14', capture: false }),
    },
    {
      id: 'TEA Ordained Punishment',
      netRegex: NetRegexes.startsUsing({ source: '完美亚历山大', id: '4891' }),
    },
    {
      id: 'TEA Trine Get Middle',
      netRegex: NetRegexes.ability({ source: '完美亚历山大', id: '488E', capture: false }),
    },
    {
      id: 'TEA Trine Initial',
      netRegex: NetRegexes.abilityFull({ source: '完美亚历山大', id: '488F', x: '100', y: '(?:92|100|108)' }),
    },
    {
      id: 'TEA Trine Second',
      netRegex: NetRegexes.abilityFull({ source: '完美亚历山大', id: '4890', capture: false }),
    },
    {
      id: 'TEA Irresistible Grace',
      netRegex: NetRegexes.startsUsing({ source: '完美亚历山大', id: '4894' }),
    }
  ],
}
