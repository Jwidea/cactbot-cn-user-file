'use strict';

// In your cactbot/user/raidboss.js file, add the line:
//   Options.cactbote8sUptimeKnockbackStrat = true;
// .. if you want cactbot to callout Mirror Mirror 4's double knockback
// Callout happens during/after boss turns and requires <1.4s reaction time
// to avoid both Green and Read Mirror knockbacks.
// Example: https://clips.twitch.tv/CreativeDreamyAsparagusKlappa
// Group splits into two groups behind boss after the jump.
// Tanks adjust to where the Red and Green Mirror are located.
// One tank must be inbetween the party, the other closest to Greem Mirror.
// Once Green Mirror goes off, the tanks adjust for Red Mirror.

// TODO: figure out *anything* with mirrors and mirror colors
// TODO: yell at you to take the last tower for Light Rampant if needed
// TODO: yell at you to take the last tower for Icelit Dragonsong if needed
// TODO: House of light clock position callout
// TODO: Light Rampant early callouts (who has prox marker, who gets aoes)
// TODO: reflected scythe kick callout (stand by mirror)
// TODO: reflected axe kick callout (get under)
// TODO: callouts for initial Hallowed Wings mirrors?
// TODO: callouts for the stack group mirrors?
// TODO: icelit dragonsong callouts?

const script = {
  zoneId: ZoneId.EdensVerseRefulgenceSavage,
  timelineFile: 'e8s.txt',
  overrideTimelineFile: true,
  timelineTriggers: [
    {
      id: 'E8S Shining Armor',
      regex: /(?<!Reflected )闪光护甲闪光护甲/,
    },
    {
      id: 'E8S Reflected Armor',
      regex: /闪光护甲/,
    },
    {
      id: 'E8S Frost Armor',
      // Not the reflected one, as we want the "move" call there
      // which will happen naturally from `Reflected Drachen Armor`.
      regex: /^冰霜护甲$/,
    },
    {
      id: 'E8S Rush',
      regex: /蓄势冲撞 \d/,
    },
  ],
  triggers: [
    {
      id: 'E8S Absolute Zero',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4DCC', capture: false }),
    },
    {
      id: 'E8S Biting Frost First Mirror',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D66', capture: false }),
    },
    {
      id: 'E8S Driving Frost First Mirror',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D67', capture: false }),
    },
    {
      id: 'E8S Reflected Frost 1',
      netRegex: NetRegexes.ability({ source: '冰面镜', id: '4DB[78]', capture: false }),
    },
    {
      id: 'E8S Biting Frost',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D66', capture: false }),
    },
    {
      id: 'E8S Driving Frost',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D67', capture: false }),
    },
    {
      id: 'E8S Forgetful Tank Second Frost',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D6[67]', capture: false }),
    },
    {
      id: 'E8S Diamond Frost',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D6C', capture: false }),
    },
    {
      id: 'E8S Icicle Impact',
      netRegex: NetRegexes.abilityFull({ source: '希瓦', id: '4DA0' }),
    },
    {
      id: 'E8S Diamond Frost Cleanse',
      netRegex: NetRegexes.ability({ source: '希瓦', id: '4D6C', capture: false }),
    },
    {
      id: 'E8S Double Slap',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D65' }),
    },
    {
      id: 'E8S Axe Kick',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D6D', capture: false })
    },
    {
      id: 'E8S Scythe Kick',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D6E', capture: false }),
    },
    {
      id: 'E8S Light Rampant',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D73', capture: false }),
    },
    {
      id: 'E8S Banish III',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D80', capture: false }),
    },
    {
      id: 'E8S Banish III Divided',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D81', capture: false }),
    },
    {
      id: 'E8S Akh Morn',
      netRegex: NetRegexes.startsUsing({ source: ['希瓦', '圣龙'], id: ['4D98', '4D79'] }),
    },
    {
      id: 'E8S Akh Morn Cleanup',
      netRegex: NetRegexes.startsUsing({ source: ['希瓦', '圣龙'], id: ['4D98', '4D79'], capture: false }),
    },
    {
      id: 'E8S Morn Afah',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D7B' }),
    },
    {
      id: 'E8S Hallowed Wings Left',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D75', capture: false }),
    },
    {
      id: 'E8S Hallowed Wings Right',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D76', capture: false }),
    },
    {
      id: 'E8S Hallowed Wings Knockback',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D77', capture: false }),
    },
    {
      id: 'E8S Wyrm\'s Lament',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D7C', capture: false }),
    },
    {
      id: 'E8S Wyrm\'s Lament Counter',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D7C', capture: false }),
    },
    {
      id: 'E8S Drachen Armor',
      netRegex: NetRegexes.ability({ source: '希瓦', id: '4DD2', capture: false }),
    },
    {
      id: 'E8S Reflected Drachen Armor',
      netRegex: NetRegexes.ability({ source: '冰面镜', id: '4DC2', capture: false }),
    },
    {
      id: 'E8S Holy',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D82', capture: false }),
    },
    {
      id: 'E8S Holy Divided',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D83', capture: false }),
    },
    {
      id: 'E8S Twin Stillness',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D68', capture: false }),
    },
    {
      id: 'E8S Twin Silence',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D69', capture: false }),
    },
    {
      id: 'E8S Spiteful Dance',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D6F', capture: false }),
    },
    {
      id: 'E8S Embittered Dance',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D70', capture: false }),
    },
    {
      id: 'E8S Icelit Dragonsong Cleanse',
      netRegex: NetRegexes.ability({ source: '希瓦', id: '4D7D', capture: false }),
    },
    {
      id: 'E8S Banish',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D7E', capture: false }),
    },
    {
      id: 'E8S Banish Divided',
      netRegex: NetRegexes.startsUsing({ source: '希瓦', id: '4D7F', capture: false }),
    },
  ]
}