'use strict';

// TODO: some sort of warning about extra tank damage during bow phase?
// TODO: should the post-staff "spread" happen unconditionally prior to marker?

const script = {
  zoneId: ZoneId.AkhAfahAmphitheatreExtreme,
  timelineFile: 'shiva-ex.txt',
  overrideTimelineFile: true,
  timelineTriggers: [
    {
      id: 'ShivaEx Absolute Zero',
      regex: /绝对零度/,
    },
    {
      id: 'ShivaEx Icebrand',
      regex: /冰印剑/,
    },
    {
      // Heavenly Strike is knockback only when unshielded, so use "info" here.
      id: 'ShivaEx Heavenly Strike',
      regex: /天降一击/,
    },
  ],
  triggers: [
    {
      id: 'ShivaEx Staff Phase',
      netRegex: NetRegexes.ability({ source: '希瓦', id: '995', capture: false }),
    },
    {
      id: 'ShivaEx Sword Phase',
      netRegex: NetRegexes.ability({ source: '希瓦', id: '993', capture: false }),
    },
    {
      id: 'ShivaEx Weapon Change Delayed',
      netRegex: NetRegexes.ability({ source: '希瓦', id: ['993', '995'], capture: false }),
    },
    {
      id: 'ShivaEx Current Tank',
      netRegex: NetRegexes.ability({ source: '希瓦', id: 'BE5' }),
    },
    {
      id: 'ShivaEx Diamond Dust',
      netRegex: NetRegexes.ability({ source: '希瓦', id: '98A', capture: false }),
    },
    {
      id: 'ShivaEx Frost Bow',
      netRegex: NetRegexes.ability({ source: '希瓦', id: 'BDD', capture: false }),
    },
    {
      id: 'ShivaEx Shiva Circles',
      netRegex: NetRegexes.abilityFull({ source: '希瓦', id: 'BEB' }),
    }
  ],
}
