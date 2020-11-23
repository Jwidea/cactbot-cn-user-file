!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=36)}({2:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=(()=>{const e=["GLA","PLD","MRD","WAR","DRK","GNB"],t=["CNJ","WHM","SCH","AST"],n=["PGL","MNK","LNC","DRG","ROG","NIN","SAM"],i=["ARC","BRD","DNC","MCH"],o=["BLU","RDM","BLM","SMN","ACN","THM"],l=[...n,...i,...o],a=["CRP","BSM","ARM","GSM","LTW","WVR","ALC","CUL"],r=["MIN","BTN","FSH"],d=["BLU",...e,...n],s=["BLU",...e,...i],c=["BLM","BLU",...t],u=[...n],m=[...o],b=["BLU","BRD",...t],g=["tank","healer","dps","crafter","gatherer","none"],y={0:"NONE",1:"GLA",2:"PGL",3:"MRD",4:"LNC",5:"ARC",6:"CNJ",7:"THM",8:"CRP",9:"BSM",10:"ARM",11:"GSM",12:"LTW",13:"WVR",14:"ALC",15:"CUL",16:"MIN",17:"BTN",18:"FSH",19:"PLD",20:"MNK",21:"WAR",22:"DRG",23:"BRD",24:"WHM",25:"BLM",26:"ACN",27:"SMN",28:"SCH",29:"ROG",30:"NIN",31:"MCH",32:"DRK",33:"AST",34:"SAM",35:"RDM",36:"BLU",37:"GNB",38:"DNC"},f=(()=>{const n=(e,t,n)=>t.forEach(t=>e.set(t,n)),i=new Map([["NONE","none"]]);return n(i,e,"tank"),n(i,t,"healer"),n(i,l,"dps"),n(i,a,"crafter"),n(i,r,"gatherer"),new Proxy(i,{get:function(e,t){return e.has(t)?e.get(t):(console.log("Unknown job role "+t),"")}})})();return{jobEnumToJob:e=>y[e],jobToJobEnum:e=>Object.keys(y).find(t=>y[t]===e),jobToRole:e=>f[e],getAllRoles:()=>g,isTankJob:t=>e.includes(t),isHealerJob:e=>t.includes(e),isMeleeDpsJob:e=>n.includes(e),isRangedDpsJob:e=>i.includes(e),isCasterDpsJob:e=>o.includes(e),isDpsJob:e=>l.includes(e),isCraftingJob:e=>a.includes(e),isGatheringJob:e=>r.includes(e),isCombatJob:function(e){return!this.isCraftingJob(e)&&!this.isGatheringJob(e)},canStun:e=>d.includes(e),canSilence:e=>s.includes(e),canSleep:e=>c.includes(e),canCleanse:e=>b.includes(e),canFeint:e=>u.includes(e),canAddle:e=>m.includes(e)}})();!function(){if("undefined"==typeof location)return;let e=/[\?&]OVERLAY_WS=([^&]+)/.exec(location.href),t=null,n=[],i=0,o={},l={},a=null;if(e){a=e=>{n?n.push(e):t.send(JSON.stringify(e))};let i=function(){t=new WebSocket(e[1]),t.addEventListener("error",e=>{console.error(e)}),t.addEventListener("open",()=>{console.log("Connected!");let e=n;n=null,a({call:"subscribe",events:Object.keys(l)});for(let t of e)a(t)}),t.addEventListener("message",e=>{try{e=JSON.parse(e.data)}catch(t){return void console.error("Invalid message received: ",e)}void 0!==e.rseq&&o[e.rseq]?(o[e.rseq](e),delete o[e.rseq]):r(e)}),t.addEventListener("close",()=>{n=[],console.log("Trying to reconnect..."),setTimeout(()=>{i()},300)})};i()}else{a=(e,t)=>{n?n.push([e,t]):OverlayPluginApi.callHandler(JSON.stringify(e),t)};let e=function(){if(!window.OverlayPluginApi||!window.OverlayPluginApi.ready)return void setTimeout(e,300);let t=n;n=null,window.__OverlayCallback=r,a({call:"subscribe",events:Object.keys(l)},null);for(let[e,n]of t)a(e,n)};e()}function r(e){if(l[e.type])for(let t of l[e.type])t(e)}window.dispatchOverlayEvent=r,window.addOverlayListener=(e,t)=>{l[e]||(l[e]=[],n||a({call:"subscribe",events:[e]})),l[e].push(t)},window.removeOverlayListener=(e,t)=>{if(l[e]){let n=l[e],i=n.indexOf(t);i>-1&&n.splice(i,1)}},window.callOverlayHandler=e=>{let n;return t?(e.rseq=i++,n=new Promise((t,n)=>{o[e.rseq]=t}),a(e)):n=new Promise(t=>{a(e,e=>{t(null===e?null:JSON.parse(e))})}),n}}()},36:function(e,t,n){"use strict";n.r(t);n(2);addOverlayListener("ChangeZone",e=>{document.getElementById("currentZone").innerText=`currentZone: ${e.zoneName} (${e.zoneID})`}),addOverlayListener("onInCombatChangedEvent",e=>{document.getElementById("inCombat").innerText="inCombat: act: "+(e.detail.inACTCombat?"yes":"no")+" game: "+(e.detail.inGameCombat?"yes":"no")}),addOverlayListener("onPlayerChangedEvent",e=>{document.getElementById("hp").innerText=e.detail.currentHP+"/"+e.detail.maxHP+" ("+e.detail.currentShield+")",document.getElementById("mp").innerText=e.detail.currentMP+"/"+e.detail.maxMP,document.getElementById("cp").innerText=e.detail.currentCP+"/"+e.detail.maxCP,document.getElementById("gp").innerText=e.detail.currentGP+"/"+e.detail.maxGP,document.getElementById("job").innerText=e.detail.level+" "+e.detail.job,document.getElementById("debug").innerText=e.detail.debugJob;let t=e.detail.jobDetail;"RDM"===e.detail.job?document.getElementById("jobinfo").innerText=t.whiteMana+" | "+t.blackMana:"WAR"===e.detail.job?document.getElementById("jobinfo").innerText=t.beast:"DRK"===e.detail.job?document.getElementById("jobinfo").innerText=t.blood+" | "+t.darksideMilliseconds+" | "+t.darkArts+" | "+t.livingShadowMilliseconds:"GNB"===e.detail.job?document.getElementById("jobinfo").innerText=t.cartridges+t.continuationState:"PLD"===e.detail.job?document.getElementById("jobinfo").innerText=t.oath:"BRD"===e.detail.job?document.getElementById("jobinfo").innerText=t.songName+" | "+t.songProcs+" | "+t.soulGauge+" | "+t.songMilliseconds:"DNC"===e.detail.job?document.getElementById("jobinfo").innerText=t.feathers+" | "+t.esprit+" | ("+t.steps+") | "+t.currentStep:"NIN"===e.detail.job?document.getElementById("jobinfo").innerText=t.hutonMilliseconds+" | "+t.ninkiAmount:"DRG"===e.detail.job?document.getElementById("jobinfo").innerText=t.bloodMilliseconds+" | "+t.lifeMilliseconds+" | "+t.eyesAmount:"BLM"===e.detail.job?document.getElementById("jobinfo").innerText=t.umbralStacks+" ("+t.umbralMilliseconds+") | "+t.umbralHearts+" | "+t.foulCount+" "+t.enochian+" ("+t.nextPolyglotMilliseconds+")":"THM"===e.detail.job?document.getElementById("jobinfo").innerText=t.umbralStacks+" ("+t.umbralMilliseconds+")":"WHM"===e.detail.job?document.getElementById("jobinfo").innerText=t.lilyStacks+" ("+t.lilyMilliseconds+") | "+t.bloodlilyStacks:"SMN"===e.detail.job?document.getElementById("jobinfo").innerText=t.aetherflowStacks+" | "+t.dreadwyrmStacks+" | "+t.bahamutStance+" | "+t.bahamutSummoned+" ( "+t.stanceMilliseconds+") | "+t.phoenixReady:"SCH"===e.detail.job?document.getElementById("jobinfo").innerText=t.aetherflowStacks+" | "+t.fairyGauge+" | "+t.fairyStatus+" ("+t.fairyMilliseconds+")":"ACN"===e.detail.job?document.getElementById("jobinfo").innerText=t.aetherflowStacks:"AST"===e.detail.job?document.getElementById("jobinfo").innerText=t.heldCard+" ("+t.arcanums+")":"MNK"===e.detail.job?document.getElementById("jobinfo").innerText=t.lightningStacks+" | "+t.chakraStacks+" ("+t.lightningMilliseconds+")":"PGL"===e.detail.job?document.getElementById("jobinfo").innerText=t.lightningStacks+" ("+t.lightningMilliseconds+")":"MNK"===e.detail.job?document.getElementById("jobinfo").innerText=t.lightningStacks+" ("+t.lightningMilliseconds+") | "+t.chakraStacks+" | "+t.lightningTimerFrozen:"MCH"===e.detail.job?document.getElementById("jobinfo").innerText=t.heat+" ("+t.overheatMilliseconds+") | "+t.battery+" ("+t.batteryMilliseconds+") | last: "+t.lastBatteryAmount+" | "+t.overheatActive+" | "+t.robotActive:"SAM"===e.detail.job?document.getElementById("jobinfo").innerText=t.kenki+" | "+t.meditationStacks+"("+t.setsu+","+t.getsu+","+t.ka+")":document.getElementById("jobinfo").innerText="",document.getElementById("pos").innerText=e.detail.pos.x.toFixed(2)+","+e.detail.pos.y.toFixed(2)+","+e.detail.pos.z.toFixed(2),document.getElementById("rotation").innerText=e.detail.rotation,document.getElementById("bait").innerText=e.detail.bait}),addOverlayListener("EnmityTargetData",e=>{let t=e.Target;t?(document.getElementById("target").innerText=t.Name,document.getElementById("tid").innerText=t.ID.toString(16),document.getElementById("tdistance").innerText=t.Distance):(document.getElementById("target").innerText="--",document.getElementById("tid").innerText="",document.getElementById("tdistance").innerText="")}),addOverlayListener("onGameExistsEvent",e=>{}),addOverlayListener("onGameActiveChangedEvent",e=>{}),addOverlayListener("onLogEvent",e=>{for(let t=0;t<e.detail.logs.length;t++){let n=e.detail.logs[t].match("00:0038:tts:(.*)");n&&callOverlayHandler({call:"cactbotSay",text:n[1]})}}),addOverlayListener("onUserFileChanged",e=>{console.log(`User file ${e.file} changed!`)}),addOverlayListener("FileChanged",e=>{console.log(`File ${e.file} changed!`)}),callOverlayHandler({call:"cactbotRequestState"})}});