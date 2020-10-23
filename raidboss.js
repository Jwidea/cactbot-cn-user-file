'use strict';
import * as Shb from './script/05_shb/index'

for (const k in Shb) {
  Options.Triggers.push(Shb[k].script)
}
