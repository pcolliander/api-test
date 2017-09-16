// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__37469 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37470 = null;
var count__37471 = (0);
var i__37472 = (0);
while(true){
if((i__37472 < count__37471)){
var vec__37473 = cljs.core._nth.call(null,chunk__37470,i__37472);
var effect_key = cljs.core.nth.call(null,vec__37473,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37473,(1),null);
var temp__4655__auto___37479 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37479)){
var effect_fn_37480 = temp__4655__auto___37479;
effect_fn_37480.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__37481 = seq__37469;
var G__37482 = chunk__37470;
var G__37483 = count__37471;
var G__37484 = (i__37472 + (1));
seq__37469 = G__37481;
chunk__37470 = G__37482;
count__37471 = G__37483;
i__37472 = G__37484;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37469);
if(temp__4657__auto__){
var seq__37469__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37469__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__37469__$1);
var G__37485 = cljs.core.chunk_rest.call(null,seq__37469__$1);
var G__37486 = c__29129__auto__;
var G__37487 = cljs.core.count.call(null,c__29129__auto__);
var G__37488 = (0);
seq__37469 = G__37485;
chunk__37470 = G__37486;
count__37471 = G__37487;
i__37472 = G__37488;
continue;
} else {
var vec__37476 = cljs.core.first.call(null,seq__37469__$1);
var effect_key = cljs.core.nth.call(null,vec__37476,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37476,(1),null);
var temp__4655__auto___37489 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37489)){
var effect_fn_37490 = temp__4655__auto___37489;
effect_fn_37490.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__37491 = cljs.core.next.call(null,seq__37469__$1);
var G__37492 = null;
var G__37493 = (0);
var G__37494 = (0);
seq__37469 = G__37491;
chunk__37470 = G__37492;
count__37471 = G__37493;
i__37472 = G__37494;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__37495 = cljs.core.seq.call(null,value);
var chunk__37496 = null;
var count__37497 = (0);
var i__37498 = (0);
while(true){
if((i__37498 < count__37497)){
var map__37499 = cljs.core._nth.call(null,chunk__37496,i__37498);
var map__37499__$1 = ((((!((map__37499 == null)))?((((map__37499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37499):map__37499);
var effect = map__37499__$1;
var ms = cljs.core.get.call(null,map__37499__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37499__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37495,chunk__37496,count__37497,i__37498,map__37499,map__37499__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37495,chunk__37496,count__37497,i__37498,map__37499,map__37499__$1,effect,ms,dispatch))
,ms);
}

var G__37503 = seq__37495;
var G__37504 = chunk__37496;
var G__37505 = count__37497;
var G__37506 = (i__37498 + (1));
seq__37495 = G__37503;
chunk__37496 = G__37504;
count__37497 = G__37505;
i__37498 = G__37506;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37495);
if(temp__4657__auto__){
var seq__37495__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37495__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__37495__$1);
var G__37507 = cljs.core.chunk_rest.call(null,seq__37495__$1);
var G__37508 = c__29129__auto__;
var G__37509 = cljs.core.count.call(null,c__29129__auto__);
var G__37510 = (0);
seq__37495 = G__37507;
chunk__37496 = G__37508;
count__37497 = G__37509;
i__37498 = G__37510;
continue;
} else {
var map__37501 = cljs.core.first.call(null,seq__37495__$1);
var map__37501__$1 = ((((!((map__37501 == null)))?((((map__37501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37501):map__37501);
var effect = map__37501__$1;
var ms = cljs.core.get.call(null,map__37501__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37501__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37495,chunk__37496,count__37497,i__37498,map__37501,map__37501__$1,effect,ms,dispatch,seq__37495__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37495,chunk__37496,count__37497,i__37498,map__37501,map__37501__$1,effect,ms,dispatch,seq__37495__$1,temp__4657__auto__))
,ms);
}

var G__37511 = cljs.core.next.call(null,seq__37495__$1);
var G__37512 = null;
var G__37513 = (0);
var G__37514 = (0);
seq__37495 = G__37511;
chunk__37496 = G__37512;
count__37497 = G__37513;
i__37498 = G__37514;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__37515 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__37516 = null;
var count__37517 = (0);
var i__37518 = (0);
while(true){
if((i__37518 < count__37517)){
var event = cljs.core._nth.call(null,chunk__37516,i__37518);
re_frame.router.dispatch.call(null,event);

var G__37519 = seq__37515;
var G__37520 = chunk__37516;
var G__37521 = count__37517;
var G__37522 = (i__37518 + (1));
seq__37515 = G__37519;
chunk__37516 = G__37520;
count__37517 = G__37521;
i__37518 = G__37522;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37515);
if(temp__4657__auto__){
var seq__37515__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37515__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__37515__$1);
var G__37523 = cljs.core.chunk_rest.call(null,seq__37515__$1);
var G__37524 = c__29129__auto__;
var G__37525 = cljs.core.count.call(null,c__29129__auto__);
var G__37526 = (0);
seq__37515 = G__37523;
chunk__37516 = G__37524;
count__37517 = G__37525;
i__37518 = G__37526;
continue;
} else {
var event = cljs.core.first.call(null,seq__37515__$1);
re_frame.router.dispatch.call(null,event);

var G__37527 = cljs.core.next.call(null,seq__37515__$1);
var G__37528 = null;
var G__37529 = (0);
var G__37530 = (0);
seq__37515 = G__37527;
chunk__37516 = G__37528;
count__37517 = G__37529;
i__37518 = G__37530;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__37531 = cljs.core.seq.call(null,value);
var chunk__37532 = null;
var count__37533 = (0);
var i__37534 = (0);
while(true){
if((i__37534 < count__37533)){
var event = cljs.core._nth.call(null,chunk__37532,i__37534);
clear_event.call(null,event);

var G__37535 = seq__37531;
var G__37536 = chunk__37532;
var G__37537 = count__37533;
var G__37538 = (i__37534 + (1));
seq__37531 = G__37535;
chunk__37532 = G__37536;
count__37533 = G__37537;
i__37534 = G__37538;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37531);
if(temp__4657__auto__){
var seq__37531__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37531__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__37531__$1);
var G__37539 = cljs.core.chunk_rest.call(null,seq__37531__$1);
var G__37540 = c__29129__auto__;
var G__37541 = cljs.core.count.call(null,c__29129__auto__);
var G__37542 = (0);
seq__37531 = G__37539;
chunk__37532 = G__37540;
count__37533 = G__37541;
i__37534 = G__37542;
continue;
} else {
var event = cljs.core.first.call(null,seq__37531__$1);
clear_event.call(null,event);

var G__37543 = cljs.core.next.call(null,seq__37531__$1);
var G__37544 = null;
var G__37545 = (0);
var G__37546 = (0);
seq__37531 = G__37543;
chunk__37532 = G__37544;
count__37533 = G__37545;
i__37534 = G__37546;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1505471934763
