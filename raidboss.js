'use strict';
import * as Shb from './script/05_shb/index'
import * as Arr from './script/02_arr/index'

for (const k in Shb) {
  Options.Triggers.push(Shb[k].script)
}

for (const k in Arr ) {
  Options.Triggers.push(Arr[k].script)
} 