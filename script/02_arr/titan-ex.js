'use strict';

const script = {
  zoneId: ZoneId.TheNavelExtreme,
  timelineFile: 'titan-ex.txt',
  overrideTimelineFile: true,
  timelineTriggers: [
    {
      id: 'TitanEx Mountain Buster',
      regex: /山崩/,
    },
    {
      id: 'TitanEx Mountain Buster Avoid',
      regex: /山崩/,
    },
    {
      id: 'TitanEx Tumult',
      regex: /怒震/,
    },
    {
      id: 'TitanEx Gaoler Adds',
      regex: /花岗石卫出现/,
    },
    {
      id: 'TitanEx Double Weight',
      regex: /大地之重 1/,
    }
  ],
  triggers: [
  ]
}
