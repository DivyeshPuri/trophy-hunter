/* eslint-disable no-unused-vars */import settings from'../../settings.js';console.log(`Trophy Hunter - ${settings.name} Overlay`);const setOverlayUrl=summonerInfo=>{let src=settings.overlayDomain;if(summonerInfo){const parsed=JSON.parse(summonerInfo);parsed&&parsed.region&&parsed.accountId&&(src+=`/${parsed.region}/${parsed.accountId}`)}document.getElementById('app').src=src,console.log(`Set iFrame url to ${src}`)};setOverlayUrl(localStorage.getItem('summonerInfo')),window.addEventListener('storage',event=>{if('summonerInfo'===event.key){const summonerInfo=event.newValue;setOverlayUrl(summonerInfo)}});let source;function receiveMessage(event){if(event.origin===settings.domain){var data=event.data;if(console.log('received',data),data.overwolf){const{type,message}=data;'showWindow'===type?overwolf.windows.getCurrentWindow(function(result){'success'==result.status&&overwolf.windows.restore(result.window.id,()=>{})}):'hideWindow'===type?overwolf.windows.getCurrentWindow(function(result){'success'==result.status&&overwolf.windows.minimize(result.window.id,()=>{})}):'close'===type?overwolf.windows.getCurrentWindow(function(result){'success'==result.status&&overwolf.windows.close(result.window.id)}):'mouseDown'===type?overwolf.windows.getCurrentWindow(function(result){'success'==result.status&&overwolf.windows.dragMove(result.window.id)}):'initialized'===type?initialize(event):'openHotkeys'===type?window.location='overwolf://settings/hotkeys#trophy_hunter_overlay':'closeSettings'===type?overwolf.settings.getHotKey(settings.overlayHotkey,function(result){source.postMessage({overwolf:!0,type:'overlayHotkey',message:result.hotkey},settings.domain)}):void 0}}}window.addEventListener('message',receiveMessage,!1);function initialize(event){// Send app version
source=event.source,source.postMessage({overwolf:!0,type:'version',message:1.7},settings.domain),overwolf.settings.getHotKey(settings.overlayHotkey,function(result){source.postMessage({overwolf:!0,type:'overlayHotkey',message:result.hotkey},settings.domain)})}