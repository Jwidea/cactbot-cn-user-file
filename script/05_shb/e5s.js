'use strict';

const script = {
  zoneId: ZoneId.EdensVerseFulminationSavage,
  timelineFile: 'e5s.txt',
  overrideTimelineFile: true,
  timelineTriggers: [
    {
      id: 'E5S Stepped Leader Next',
      regex: /^梯级先导$/,
    },
  ],
  triggers: [
    {
      id: 'E5S Stratospear Summons',
      netRegex: NetRegexes.ability({ id: '4BA5', source: '拉姆', capture: false }),
    },
    {
      id: 'E5S Tribunal Summons',
      netRegex: NetRegexes.startsUsing({ id: '4BAC', source: '拉姆', capture: false }),
    },
    {
      id: 'E5S Fury\'s Bolt',
      netRegex: NetRegexes.startsUsing({ id: '4BAA', source: '拉姆', capture: false }),
    },
    {
      id: 'E5S Fury\'s Fourteen',
      netRegex: NetRegexes.startsUsing({ id: '4BAB', source: '拉姆', capture: false }),
    },
    {
      id: 'E5S Judgment Volts',
      netRegex: NetRegexes.startsUsing({ id: '4BB5', source: '拉姆', capture: false }),
    },
    {
      id: 'E5S Stepped Leader',
      netRegex: NetRegexes.startsUsing({ id: '4BC6', source: '拉姆', capture: false }),
    },
    {
      id: 'E5S Stepped Leader Spread',
      netRegex: NetRegexes.startsUsing({ id: '4BC6', source: '拉姆', capture: false }),
    },
    {
      id: 'E5S Stepped Leader Cast',
      netRegex: NetRegexes.ability({ id: '4BC6', source: '拉姆', capture: false }),
    },
    {
      id: 'E5S Crippling Blow',
      netRegex: NetRegexes.startsUsing({ id: '4BCA', source: '拉姆' }),
    },
    {
      id: 'E5S Stormcloud Summons',
      netRegex: NetRegexes.startsUsing({ id: '4BB8', source: '拉姆', capture: false }),
    },
    {
      id: 'E5S Centaur\'s Charge',
      netRegex: NetRegexes.startsUsing({ id: '4BAD', source: '拉姆', capture: false }),
    },
    {
      id: 'E5S Chain Lightning',
      netRegex: NetRegexes.startsUsing({ id: '4BC4', source: '拉姆', capture: false }),
    },
    {
      id: 'E5S Levinforce',
      netRegex: NetRegexes.startsUsing({ id: '4BCC', source: '拉姆', capture: false }),
    },
  ]
}
