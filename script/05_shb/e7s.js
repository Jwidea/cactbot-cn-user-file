'use strict';

const script = {
  zoneId: ZoneId.EdensVerseIconoclasmSavage,
  timelineFile: 'e7s.txt',
  overrideTimelineFile: true,
  triggers: [
    {
      id: 'E7S Empty Wave',
      netRegex: NetRegexes.startsUsing({ source: '暗黑心象', id: '4C8A', capture: false }),
    },
    {
      id: 'E7S Unshadowed Stake',
      netRegex: NetRegexes.tether({ source: '暗黑心象', id: '0025' }),
    },
    {
      id: 'E7S Betwixt Worlds',
      netRegex: NetRegexes.startsUsing({ source: '暗黑心象', id: '4CFD', capture: false }),
    },
    {
      id: 'E7S Betwixt Worlds Tether',
      netRegex: NetRegexes.tether({ source: '暗黑心象', id: '0011' }),
    },
    {
      id: 'E7S False Midnight',
      netRegex: NetRegexes.startsUsing({ source: '暗黑心象', id: '4C99', capture: false }),
    },
    {
      id: 'E7S Adds',
      netRegex: NetRegexes.addedCombatant({ name: '亵渎', capture: false })
    },
    {
      id: 'E7S Advent Of Light',
      netRegex: NetRegexes.startsUsing({ source: '盲崇', id: '4C6E' }),
    },
    {
      id: 'E7S Insatiable Light',
      netRegex: NetRegexes.ability({ source: '盲崇', id: '4C6D', capture: false }),
    },
    {
      id: 'E7S Strength in Numbers',
      netRegex: NetRegexes.startsUsing({ source: '盲崇', id: '4C70', capture: false }),
    },
    {
      id: 'E7S Unearned Envy',
      netRegex: NetRegexes.ability({ source: '亵渎', id: '4C74', capture: false }),
    },
    {
      id: 'E7S Empty Flood',
      netRegex: NetRegexes.startsUsing({ source: '暗黑心象', id: '(?:4C8[BC]|4E5[56])', capture: false }),
    },
    {
      id: 'E7S Unjoined Aspect',
      netRegex: NetRegexes.startsUsing({ source: '暗黑心象', id: '4C3B', capture: false }),
    },
    {
      id: 'E7S Boundless Tracker',
      netRegex: NetRegexes.startsUsing({ source: '未被宽恕的盲崇', id: '4C5[CD]' }),
    },
    {
      id: 'E7S Boundless Light Dark Stack',
      netRegex: NetRegexes.startsUsing({ source: '未被宽恕的盲崇', id: '4C5[CD]' }),
    },
    {
      id: 'E7S Boundless Cleanup',
      netRegex: NetRegexes.startsUsing({ source: '未被宽恕的盲崇', id: '4C5[CD]' }),
    },
    {
      id: 'E7S Words of Night',
      netRegex: NetRegexes.startsUsing({ source: '未被宽恕的盲崇', id: '(?:4C2C|4C65)', capture: false }),
    },
    {
      id: 'E7S False Dawn',
      netRegex: NetRegexes.startsUsing({ source: '暗黑心象', id: '4C9A', capture: false }),
    },
    {
      id: 'E7S Crusade',
      netRegex: NetRegexes.startsUsing({ source: '暗黑心象', id: '4C76', capture: false }),
    },
    {
      id: 'E7S Unjoined Aspect P3',
      netRegex: NetRegexes.ability({ source: '暗黑心象', id: '4C7A', capture: false }),
    },
    {
      id: 'E7S Threefold Grace',
      netRegex: NetRegexes.startsUsing({ source: '暗黑心象', id: '4C7E', capture: false }),
    },
  ],
}