// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36175){if((e36175 instanceof Error)){
var e = e36175;
return "Error: Unable to stringify";
} else {
throw e36175;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36178 = arguments.length;
switch (G__36178) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36176_SHARP_){
if(typeof p1__36176_SHARP_ === 'string'){
return p1__36176_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36176_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29466__auto__ = [];
var len__29459__auto___36181 = arguments.length;
var i__29460__auto___36182 = (0);
while(true){
if((i__29460__auto___36182 < len__29459__auto___36181)){
args__29466__auto__.push((arguments[i__29460__auto___36182]));

var G__36183 = (i__29460__auto___36182 + (1));
i__29460__auto___36182 = G__36183;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36180){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36180));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29466__auto__ = [];
var len__29459__auto___36185 = arguments.length;
var i__29460__auto___36186 = (0);
while(true){
if((i__29460__auto___36186 < len__29459__auto___36185)){
args__29466__auto__.push((arguments[i__29460__auto___36186]));

var G__36187 = (i__29460__auto___36186 + (1));
i__29460__auto___36186 = G__36187;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36184){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36184));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36188){
var map__36189 = p__36188;
var map__36189__$1 = ((((!((map__36189 == null)))?((((map__36189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36189):map__36189);
var message = cljs.core.get.call(null,map__36189__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36189__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28290__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28290__auto__)){
return or__28290__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28278__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28278__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28278__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31448__auto___36268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___36268,ch){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___36268,ch){
return (function (state_36240){
var state_val_36241 = (state_36240[(1)]);
if((state_val_36241 === (7))){
var inst_36236 = (state_36240[(2)]);
var state_36240__$1 = state_36240;
var statearr_36242_36269 = state_36240__$1;
(statearr_36242_36269[(2)] = inst_36236);

(statearr_36242_36269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (1))){
var state_36240__$1 = state_36240;
var statearr_36243_36270 = state_36240__$1;
(statearr_36243_36270[(2)] = null);

(statearr_36243_36270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (4))){
var inst_36193 = (state_36240[(7)]);
var inst_36193__$1 = (state_36240[(2)]);
var state_36240__$1 = (function (){var statearr_36244 = state_36240;
(statearr_36244[(7)] = inst_36193__$1);

return statearr_36244;
})();
if(cljs.core.truth_(inst_36193__$1)){
var statearr_36245_36271 = state_36240__$1;
(statearr_36245_36271[(1)] = (5));

} else {
var statearr_36246_36272 = state_36240__$1;
(statearr_36246_36272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (15))){
var inst_36200 = (state_36240[(8)]);
var inst_36215 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36200);
var inst_36216 = cljs.core.first.call(null,inst_36215);
var inst_36217 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36216);
var inst_36218 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36217)].join('');
var inst_36219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36218);
var state_36240__$1 = state_36240;
var statearr_36247_36273 = state_36240__$1;
(statearr_36247_36273[(2)] = inst_36219);

(statearr_36247_36273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (13))){
var inst_36224 = (state_36240[(2)]);
var state_36240__$1 = state_36240;
var statearr_36248_36274 = state_36240__$1;
(statearr_36248_36274[(2)] = inst_36224);

(statearr_36248_36274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (6))){
var state_36240__$1 = state_36240;
var statearr_36249_36275 = state_36240__$1;
(statearr_36249_36275[(2)] = null);

(statearr_36249_36275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (17))){
var inst_36222 = (state_36240[(2)]);
var state_36240__$1 = state_36240;
var statearr_36250_36276 = state_36240__$1;
(statearr_36250_36276[(2)] = inst_36222);

(statearr_36250_36276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (3))){
var inst_36238 = (state_36240[(2)]);
var state_36240__$1 = state_36240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36240__$1,inst_36238);
} else {
if((state_val_36241 === (12))){
var inst_36199 = (state_36240[(9)]);
var inst_36213 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36199,opts);
var state_36240__$1 = state_36240;
if(cljs.core.truth_(inst_36213)){
var statearr_36251_36277 = state_36240__$1;
(statearr_36251_36277[(1)] = (15));

} else {
var statearr_36252_36278 = state_36240__$1;
(statearr_36252_36278[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (2))){
var state_36240__$1 = state_36240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36240__$1,(4),ch);
} else {
if((state_val_36241 === (11))){
var inst_36200 = (state_36240[(8)]);
var inst_36205 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36206 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36200);
var inst_36207 = cljs.core.async.timeout.call(null,(1000));
var inst_36208 = [inst_36206,inst_36207];
var inst_36209 = (new cljs.core.PersistentVector(null,2,(5),inst_36205,inst_36208,null));
var state_36240__$1 = state_36240;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36240__$1,(14),inst_36209);
} else {
if((state_val_36241 === (9))){
var inst_36200 = (state_36240[(8)]);
var inst_36226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36227 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36200);
var inst_36228 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36227);
var inst_36229 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36228)].join('');
var inst_36230 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36229);
var state_36240__$1 = (function (){var statearr_36253 = state_36240;
(statearr_36253[(10)] = inst_36226);

return statearr_36253;
})();
var statearr_36254_36279 = state_36240__$1;
(statearr_36254_36279[(2)] = inst_36230);

(statearr_36254_36279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (5))){
var inst_36193 = (state_36240[(7)]);
var inst_36195 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36196 = (new cljs.core.PersistentArrayMap(null,2,inst_36195,null));
var inst_36197 = (new cljs.core.PersistentHashSet(null,inst_36196,null));
var inst_36198 = figwheel.client.focus_msgs.call(null,inst_36197,inst_36193);
var inst_36199 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36198);
var inst_36200 = cljs.core.first.call(null,inst_36198);
var inst_36201 = figwheel.client.autoload_QMARK_.call(null);
var state_36240__$1 = (function (){var statearr_36255 = state_36240;
(statearr_36255[(9)] = inst_36199);

(statearr_36255[(8)] = inst_36200);

return statearr_36255;
})();
if(cljs.core.truth_(inst_36201)){
var statearr_36256_36280 = state_36240__$1;
(statearr_36256_36280[(1)] = (8));

} else {
var statearr_36257_36281 = state_36240__$1;
(statearr_36257_36281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (14))){
var inst_36211 = (state_36240[(2)]);
var state_36240__$1 = state_36240;
var statearr_36258_36282 = state_36240__$1;
(statearr_36258_36282[(2)] = inst_36211);

(statearr_36258_36282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (16))){
var state_36240__$1 = state_36240;
var statearr_36259_36283 = state_36240__$1;
(statearr_36259_36283[(2)] = null);

(statearr_36259_36283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (10))){
var inst_36232 = (state_36240[(2)]);
var state_36240__$1 = (function (){var statearr_36260 = state_36240;
(statearr_36260[(11)] = inst_36232);

return statearr_36260;
})();
var statearr_36261_36284 = state_36240__$1;
(statearr_36261_36284[(2)] = null);

(statearr_36261_36284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36241 === (8))){
var inst_36199 = (state_36240[(9)]);
var inst_36203 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36199,opts);
var state_36240__$1 = state_36240;
if(cljs.core.truth_(inst_36203)){
var statearr_36262_36285 = state_36240__$1;
(statearr_36262_36285[(1)] = (11));

} else {
var statearr_36263_36286 = state_36240__$1;
(statearr_36263_36286[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31448__auto___36268,ch))
;
return ((function (switch__31360__auto__,c__31448__auto___36268,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31361__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31361__auto____0 = (function (){
var statearr_36264 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36264[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31361__auto__);

(statearr_36264[(1)] = (1));

return statearr_36264;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31361__auto____1 = (function (state_36240){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_36240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e36265){if((e36265 instanceof Object)){
var ex__31364__auto__ = e36265;
var statearr_36266_36287 = state_36240;
(statearr_36266_36287[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36288 = state_36240;
state_36240 = G__36288;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31361__auto__ = function(state_36240){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31361__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31361__auto____1.call(this,state_36240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31361__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31361__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___36268,ch))
})();
var state__31450__auto__ = (function (){var statearr_36267 = f__31449__auto__.call(null);
(statearr_36267[(6)] = c__31448__auto___36268);

return statearr_36267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___36268,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36289_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36289_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36291 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36291){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36290){if((e36290 instanceof Error)){
var e = e36290;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36291], null));
} else {
var e = e36290;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36291))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36292){
var map__36293 = p__36292;
var map__36293__$1 = ((((!((map__36293 == null)))?((((map__36293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36293):map__36293);
var opts = map__36293__$1;
var build_id = cljs.core.get.call(null,map__36293__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36293,map__36293__$1,opts,build_id){
return (function (p__36295){
var vec__36296 = p__36295;
var seq__36297 = cljs.core.seq.call(null,vec__36296);
var first__36298 = cljs.core.first.call(null,seq__36297);
var seq__36297__$1 = cljs.core.next.call(null,seq__36297);
var map__36299 = first__36298;
var map__36299__$1 = ((((!((map__36299 == null)))?((((map__36299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36299):map__36299);
var msg = map__36299__$1;
var msg_name = cljs.core.get.call(null,map__36299__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36297__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36296,seq__36297,first__36298,seq__36297__$1,map__36299,map__36299__$1,msg,msg_name,_,map__36293,map__36293__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36296,seq__36297,first__36298,seq__36297__$1,map__36299,map__36299__$1,msg,msg_name,_,map__36293,map__36293__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36293,map__36293__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36301){
var vec__36302 = p__36301;
var seq__36303 = cljs.core.seq.call(null,vec__36302);
var first__36304 = cljs.core.first.call(null,seq__36303);
var seq__36303__$1 = cljs.core.next.call(null,seq__36303);
var map__36305 = first__36304;
var map__36305__$1 = ((((!((map__36305 == null)))?((((map__36305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36305):map__36305);
var msg = map__36305__$1;
var msg_name = cljs.core.get.call(null,map__36305__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36303__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36307){
var map__36308 = p__36307;
var map__36308__$1 = ((((!((map__36308 == null)))?((((map__36308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36308):map__36308);
var on_compile_warning = cljs.core.get.call(null,map__36308__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36308__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36308,map__36308__$1,on_compile_warning,on_compile_fail){
return (function (p__36310){
var vec__36311 = p__36310;
var seq__36312 = cljs.core.seq.call(null,vec__36311);
var first__36313 = cljs.core.first.call(null,seq__36312);
var seq__36312__$1 = cljs.core.next.call(null,seq__36312);
var map__36314 = first__36313;
var map__36314__$1 = ((((!((map__36314 == null)))?((((map__36314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36314):map__36314);
var msg = map__36314__$1;
var msg_name = cljs.core.get.call(null,map__36314__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36312__$1;
var pred__36316 = cljs.core._EQ_;
var expr__36317 = msg_name;
if(cljs.core.truth_(pred__36316.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36317))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36316.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36317))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36308,map__36308__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto__,msg_hist,msg_names,msg){
return (function (state_36406){
var state_val_36407 = (state_36406[(1)]);
if((state_val_36407 === (7))){
var inst_36326 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
if(cljs.core.truth_(inst_36326)){
var statearr_36408_36455 = state_36406__$1;
(statearr_36408_36455[(1)] = (8));

} else {
var statearr_36409_36456 = state_36406__$1;
(statearr_36409_36456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (20))){
var inst_36400 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36410_36457 = state_36406__$1;
(statearr_36410_36457[(2)] = inst_36400);

(statearr_36410_36457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (27))){
var inst_36396 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36411_36458 = state_36406__$1;
(statearr_36411_36458[(2)] = inst_36396);

(statearr_36411_36458[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (1))){
var inst_36319 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36406__$1 = state_36406;
if(cljs.core.truth_(inst_36319)){
var statearr_36412_36459 = state_36406__$1;
(statearr_36412_36459[(1)] = (2));

} else {
var statearr_36413_36460 = state_36406__$1;
(statearr_36413_36460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (24))){
var inst_36398 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36414_36461 = state_36406__$1;
(statearr_36414_36461[(2)] = inst_36398);

(statearr_36414_36461[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (4))){
var inst_36404 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36406__$1,inst_36404);
} else {
if((state_val_36407 === (15))){
var inst_36402 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36415_36462 = state_36406__$1;
(statearr_36415_36462[(2)] = inst_36402);

(statearr_36415_36462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (21))){
var inst_36355 = (state_36406[(2)]);
var inst_36356 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36357 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36356);
var state_36406__$1 = (function (){var statearr_36416 = state_36406;
(statearr_36416[(7)] = inst_36355);

return statearr_36416;
})();
var statearr_36417_36463 = state_36406__$1;
(statearr_36417_36463[(2)] = inst_36357);

(statearr_36417_36463[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (31))){
var inst_36385 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36406__$1 = state_36406;
if(cljs.core.truth_(inst_36385)){
var statearr_36418_36464 = state_36406__$1;
(statearr_36418_36464[(1)] = (34));

} else {
var statearr_36419_36465 = state_36406__$1;
(statearr_36419_36465[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (32))){
var inst_36394 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36420_36466 = state_36406__$1;
(statearr_36420_36466[(2)] = inst_36394);

(statearr_36420_36466[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (33))){
var inst_36381 = (state_36406[(2)]);
var inst_36382 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36383 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36382);
var state_36406__$1 = (function (){var statearr_36421 = state_36406;
(statearr_36421[(8)] = inst_36381);

return statearr_36421;
})();
var statearr_36422_36467 = state_36406__$1;
(statearr_36422_36467[(2)] = inst_36383);

(statearr_36422_36467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (13))){
var inst_36340 = figwheel.client.heads_up.clear.call(null);
var state_36406__$1 = state_36406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36406__$1,(16),inst_36340);
} else {
if((state_val_36407 === (22))){
var inst_36361 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36362 = figwheel.client.heads_up.append_warning_message.call(null,inst_36361);
var state_36406__$1 = state_36406;
var statearr_36423_36468 = state_36406__$1;
(statearr_36423_36468[(2)] = inst_36362);

(statearr_36423_36468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (36))){
var inst_36392 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36424_36469 = state_36406__$1;
(statearr_36424_36469[(2)] = inst_36392);

(statearr_36424_36469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (29))){
var inst_36372 = (state_36406[(2)]);
var inst_36373 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36374 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36373);
var state_36406__$1 = (function (){var statearr_36425 = state_36406;
(statearr_36425[(9)] = inst_36372);

return statearr_36425;
})();
var statearr_36426_36470 = state_36406__$1;
(statearr_36426_36470[(2)] = inst_36374);

(statearr_36426_36470[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (6))){
var inst_36321 = (state_36406[(10)]);
var state_36406__$1 = state_36406;
var statearr_36427_36471 = state_36406__$1;
(statearr_36427_36471[(2)] = inst_36321);

(statearr_36427_36471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (28))){
var inst_36368 = (state_36406[(2)]);
var inst_36369 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36370 = figwheel.client.heads_up.display_warning.call(null,inst_36369);
var state_36406__$1 = (function (){var statearr_36428 = state_36406;
(statearr_36428[(11)] = inst_36368);

return statearr_36428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36406__$1,(29),inst_36370);
} else {
if((state_val_36407 === (25))){
var inst_36366 = figwheel.client.heads_up.clear.call(null);
var state_36406__$1 = state_36406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36406__$1,(28),inst_36366);
} else {
if((state_val_36407 === (34))){
var inst_36387 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36406__$1 = state_36406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36406__$1,(37),inst_36387);
} else {
if((state_val_36407 === (17))){
var inst_36346 = (state_36406[(2)]);
var inst_36347 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36348 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36347);
var state_36406__$1 = (function (){var statearr_36429 = state_36406;
(statearr_36429[(12)] = inst_36346);

return statearr_36429;
})();
var statearr_36430_36472 = state_36406__$1;
(statearr_36430_36472[(2)] = inst_36348);

(statearr_36430_36472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (3))){
var inst_36338 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36406__$1 = state_36406;
if(cljs.core.truth_(inst_36338)){
var statearr_36431_36473 = state_36406__$1;
(statearr_36431_36473[(1)] = (13));

} else {
var statearr_36432_36474 = state_36406__$1;
(statearr_36432_36474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (12))){
var inst_36334 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36433_36475 = state_36406__$1;
(statearr_36433_36475[(2)] = inst_36334);

(statearr_36433_36475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (2))){
var inst_36321 = (state_36406[(10)]);
var inst_36321__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36406__$1 = (function (){var statearr_36434 = state_36406;
(statearr_36434[(10)] = inst_36321__$1);

return statearr_36434;
})();
if(cljs.core.truth_(inst_36321__$1)){
var statearr_36435_36476 = state_36406__$1;
(statearr_36435_36476[(1)] = (5));

} else {
var statearr_36436_36477 = state_36406__$1;
(statearr_36436_36477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (23))){
var inst_36364 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36406__$1 = state_36406;
if(cljs.core.truth_(inst_36364)){
var statearr_36437_36478 = state_36406__$1;
(statearr_36437_36478[(1)] = (25));

} else {
var statearr_36438_36479 = state_36406__$1;
(statearr_36438_36479[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (35))){
var state_36406__$1 = state_36406;
var statearr_36439_36480 = state_36406__$1;
(statearr_36439_36480[(2)] = null);

(statearr_36439_36480[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (19))){
var inst_36359 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36406__$1 = state_36406;
if(cljs.core.truth_(inst_36359)){
var statearr_36440_36481 = state_36406__$1;
(statearr_36440_36481[(1)] = (22));

} else {
var statearr_36441_36482 = state_36406__$1;
(statearr_36441_36482[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (11))){
var inst_36330 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36442_36483 = state_36406__$1;
(statearr_36442_36483[(2)] = inst_36330);

(statearr_36442_36483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (9))){
var inst_36332 = figwheel.client.heads_up.clear.call(null);
var state_36406__$1 = state_36406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36406__$1,(12),inst_36332);
} else {
if((state_val_36407 === (5))){
var inst_36323 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36406__$1 = state_36406;
var statearr_36443_36484 = state_36406__$1;
(statearr_36443_36484[(2)] = inst_36323);

(statearr_36443_36484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (14))){
var inst_36350 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36406__$1 = state_36406;
if(cljs.core.truth_(inst_36350)){
var statearr_36444_36485 = state_36406__$1;
(statearr_36444_36485[(1)] = (18));

} else {
var statearr_36445_36486 = state_36406__$1;
(statearr_36445_36486[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (26))){
var inst_36376 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36406__$1 = state_36406;
if(cljs.core.truth_(inst_36376)){
var statearr_36446_36487 = state_36406__$1;
(statearr_36446_36487[(1)] = (30));

} else {
var statearr_36447_36488 = state_36406__$1;
(statearr_36447_36488[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (16))){
var inst_36342 = (state_36406[(2)]);
var inst_36343 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36344 = figwheel.client.heads_up.display_exception.call(null,inst_36343);
var state_36406__$1 = (function (){var statearr_36448 = state_36406;
(statearr_36448[(13)] = inst_36342);

return statearr_36448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36406__$1,(17),inst_36344);
} else {
if((state_val_36407 === (30))){
var inst_36378 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36379 = figwheel.client.heads_up.display_warning.call(null,inst_36378);
var state_36406__$1 = state_36406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36406__$1,(33),inst_36379);
} else {
if((state_val_36407 === (10))){
var inst_36336 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36449_36489 = state_36406__$1;
(statearr_36449_36489[(2)] = inst_36336);

(statearr_36449_36489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (18))){
var inst_36352 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36353 = figwheel.client.heads_up.display_exception.call(null,inst_36352);
var state_36406__$1 = state_36406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36406__$1,(21),inst_36353);
} else {
if((state_val_36407 === (37))){
var inst_36389 = (state_36406[(2)]);
var state_36406__$1 = state_36406;
var statearr_36450_36490 = state_36406__$1;
(statearr_36450_36490[(2)] = inst_36389);

(statearr_36450_36490[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36407 === (8))){
var inst_36328 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36406__$1 = state_36406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36406__$1,(11),inst_36328);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31448__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31360__auto__,c__31448__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto____0 = (function (){
var statearr_36451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36451[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto__);

(statearr_36451[(1)] = (1));

return statearr_36451;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto____1 = (function (state_36406){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_36406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e36452){if((e36452 instanceof Object)){
var ex__31364__auto__ = e36452;
var statearr_36453_36491 = state_36406;
(statearr_36453_36491[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36492 = state_36406;
state_36406 = G__36492;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto__ = function(state_36406){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto____1.call(this,state_36406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto__,msg_hist,msg_names,msg))
})();
var state__31450__auto__ = (function (){var statearr_36454 = f__31449__auto__.call(null);
(statearr_36454[(6)] = c__31448__auto__);

return statearr_36454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto__,msg_hist,msg_names,msg))
);

return c__31448__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31448__auto___36521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___36521,ch){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___36521,ch){
return (function (state_36507){
var state_val_36508 = (state_36507[(1)]);
if((state_val_36508 === (1))){
var state_36507__$1 = state_36507;
var statearr_36509_36522 = state_36507__$1;
(statearr_36509_36522[(2)] = null);

(statearr_36509_36522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36508 === (2))){
var state_36507__$1 = state_36507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36507__$1,(4),ch);
} else {
if((state_val_36508 === (3))){
var inst_36505 = (state_36507[(2)]);
var state_36507__$1 = state_36507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36507__$1,inst_36505);
} else {
if((state_val_36508 === (4))){
var inst_36495 = (state_36507[(7)]);
var inst_36495__$1 = (state_36507[(2)]);
var state_36507__$1 = (function (){var statearr_36510 = state_36507;
(statearr_36510[(7)] = inst_36495__$1);

return statearr_36510;
})();
if(cljs.core.truth_(inst_36495__$1)){
var statearr_36511_36523 = state_36507__$1;
(statearr_36511_36523[(1)] = (5));

} else {
var statearr_36512_36524 = state_36507__$1;
(statearr_36512_36524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36508 === (5))){
var inst_36495 = (state_36507[(7)]);
var inst_36497 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36495);
var state_36507__$1 = state_36507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36507__$1,(8),inst_36497);
} else {
if((state_val_36508 === (6))){
var state_36507__$1 = state_36507;
var statearr_36513_36525 = state_36507__$1;
(statearr_36513_36525[(2)] = null);

(statearr_36513_36525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36508 === (7))){
var inst_36503 = (state_36507[(2)]);
var state_36507__$1 = state_36507;
var statearr_36514_36526 = state_36507__$1;
(statearr_36514_36526[(2)] = inst_36503);

(statearr_36514_36526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36508 === (8))){
var inst_36499 = (state_36507[(2)]);
var state_36507__$1 = (function (){var statearr_36515 = state_36507;
(statearr_36515[(8)] = inst_36499);

return statearr_36515;
})();
var statearr_36516_36527 = state_36507__$1;
(statearr_36516_36527[(2)] = null);

(statearr_36516_36527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__31448__auto___36521,ch))
;
return ((function (switch__31360__auto__,c__31448__auto___36521,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31361__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31361__auto____0 = (function (){
var statearr_36517 = [null,null,null,null,null,null,null,null,null];
(statearr_36517[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31361__auto__);

(statearr_36517[(1)] = (1));

return statearr_36517;
});
var figwheel$client$heads_up_plugin_$_state_machine__31361__auto____1 = (function (state_36507){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_36507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e36518){if((e36518 instanceof Object)){
var ex__31364__auto__ = e36518;
var statearr_36519_36528 = state_36507;
(statearr_36519_36528[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36529 = state_36507;
state_36507 = G__36529;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31361__auto__ = function(state_36507){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31361__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31361__auto____1.call(this,state_36507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31361__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31361__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___36521,ch))
})();
var state__31450__auto__ = (function (){var statearr_36520 = f__31449__auto__.call(null);
(statearr_36520[(6)] = c__31448__auto___36521);

return statearr_36520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___36521,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto__){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto__){
return (function (state_36535){
var state_val_36536 = (state_36535[(1)]);
if((state_val_36536 === (1))){
var inst_36530 = cljs.core.async.timeout.call(null,(3000));
var state_36535__$1 = state_36535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36535__$1,(2),inst_36530);
} else {
if((state_val_36536 === (2))){
var inst_36532 = (state_36535[(2)]);
var inst_36533 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36535__$1 = (function (){var statearr_36537 = state_36535;
(statearr_36537[(7)] = inst_36532);

return statearr_36537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36535__$1,inst_36533);
} else {
return null;
}
}
});})(c__31448__auto__))
;
return ((function (switch__31360__auto__,c__31448__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31361__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31361__auto____0 = (function (){
var statearr_36538 = [null,null,null,null,null,null,null,null];
(statearr_36538[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31361__auto__);

(statearr_36538[(1)] = (1));

return statearr_36538;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31361__auto____1 = (function (state_36535){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_36535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e36539){if((e36539 instanceof Object)){
var ex__31364__auto__ = e36539;
var statearr_36540_36542 = state_36535;
(statearr_36540_36542[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36543 = state_36535;
state_36535 = G__36543;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31361__auto__ = function(state_36535){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31361__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31361__auto____1.call(this,state_36535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31361__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31361__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto__))
})();
var state__31450__auto__ = (function (){var statearr_36541 = f__31449__auto__.call(null);
(statearr_36541[(6)] = c__31448__auto__);

return statearr_36541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto__))
);

return c__31448__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36550){
var state_val_36551 = (state_36550[(1)]);
if((state_val_36551 === (1))){
var inst_36544 = cljs.core.async.timeout.call(null,(2000));
var state_36550__$1 = state_36550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36550__$1,(2),inst_36544);
} else {
if((state_val_36551 === (2))){
var inst_36546 = (state_36550[(2)]);
var inst_36547 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36548 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36547);
var state_36550__$1 = (function (){var statearr_36552 = state_36550;
(statearr_36552[(7)] = inst_36546);

return statearr_36552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36550__$1,inst_36548);
} else {
return null;
}
}
});})(c__31448__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31360__auto__,c__31448__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto____0 = (function (){
var statearr_36553 = [null,null,null,null,null,null,null,null];
(statearr_36553[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto__);

(statearr_36553[(1)] = (1));

return statearr_36553;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto____1 = (function (state_36550){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_36550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e36554){if((e36554 instanceof Object)){
var ex__31364__auto__ = e36554;
var statearr_36555_36557 = state_36550;
(statearr_36555_36557[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36558 = state_36550;
state_36550 = G__36558;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto__ = function(state_36550){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto____1.call(this,state_36550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31450__auto__ = (function (){var statearr_36556 = f__31449__auto__.call(null);
(statearr_36556[(6)] = c__31448__auto__);

return statearr_36556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto__,figwheel_version,temp__4657__auto__))
);

return c__31448__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36559){
var map__36560 = p__36559;
var map__36560__$1 = ((((!((map__36560 == null)))?((((map__36560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36560):map__36560);
var file = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36562 = "";
var G__36562__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36562),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36562);
var G__36562__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36562__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36562__$1);
if(cljs.core.truth_((function (){var and__28278__auto__ = line;
if(cljs.core.truth_(and__28278__auto__)){
return column;
} else {
return and__28278__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36562__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36562__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36563){
var map__36564 = p__36563;
var map__36564__$1 = ((((!((map__36564 == null)))?((((map__36564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36564):map__36564);
var ed = map__36564__$1;
var formatted_exception = cljs.core.get.call(null,map__36564__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36564__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36564__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36566_36570 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36567_36571 = null;
var count__36568_36572 = (0);
var i__36569_36573 = (0);
while(true){
if((i__36569_36573 < count__36568_36572)){
var msg_36574 = cljs.core._nth.call(null,chunk__36567_36571,i__36569_36573);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36574);

var G__36575 = seq__36566_36570;
var G__36576 = chunk__36567_36571;
var G__36577 = count__36568_36572;
var G__36578 = (i__36569_36573 + (1));
seq__36566_36570 = G__36575;
chunk__36567_36571 = G__36576;
count__36568_36572 = G__36577;
i__36569_36573 = G__36578;
continue;
} else {
var temp__4657__auto___36579 = cljs.core.seq.call(null,seq__36566_36570);
if(temp__4657__auto___36579){
var seq__36566_36580__$1 = temp__4657__auto___36579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36566_36580__$1)){
var c__29129__auto___36581 = cljs.core.chunk_first.call(null,seq__36566_36580__$1);
var G__36582 = cljs.core.chunk_rest.call(null,seq__36566_36580__$1);
var G__36583 = c__29129__auto___36581;
var G__36584 = cljs.core.count.call(null,c__29129__auto___36581);
var G__36585 = (0);
seq__36566_36570 = G__36582;
chunk__36567_36571 = G__36583;
count__36568_36572 = G__36584;
i__36569_36573 = G__36585;
continue;
} else {
var msg_36586 = cljs.core.first.call(null,seq__36566_36580__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36586);

var G__36587 = cljs.core.next.call(null,seq__36566_36580__$1);
var G__36588 = null;
var G__36589 = (0);
var G__36590 = (0);
seq__36566_36570 = G__36587;
chunk__36567_36571 = G__36588;
count__36568_36572 = G__36589;
i__36569_36573 = G__36590;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36591){
var map__36592 = p__36591;
var map__36592__$1 = ((((!((map__36592 == null)))?((((map__36592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36592):map__36592);
var w = map__36592__$1;
var message = cljs.core.get.call(null,map__36592__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28278__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28278__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28278__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36594 = cljs.core.seq.call(null,plugins);
var chunk__36595 = null;
var count__36596 = (0);
var i__36597 = (0);
while(true){
if((i__36597 < count__36596)){
var vec__36598 = cljs.core._nth.call(null,chunk__36595,i__36597);
var k = cljs.core.nth.call(null,vec__36598,(0),null);
var plugin = cljs.core.nth.call(null,vec__36598,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36604 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36594,chunk__36595,count__36596,i__36597,pl_36604,vec__36598,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36604.call(null,msg_hist);
});})(seq__36594,chunk__36595,count__36596,i__36597,pl_36604,vec__36598,k,plugin))
);
} else {
}

var G__36605 = seq__36594;
var G__36606 = chunk__36595;
var G__36607 = count__36596;
var G__36608 = (i__36597 + (1));
seq__36594 = G__36605;
chunk__36595 = G__36606;
count__36596 = G__36607;
i__36597 = G__36608;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36594);
if(temp__4657__auto__){
var seq__36594__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36594__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__36594__$1);
var G__36609 = cljs.core.chunk_rest.call(null,seq__36594__$1);
var G__36610 = c__29129__auto__;
var G__36611 = cljs.core.count.call(null,c__29129__auto__);
var G__36612 = (0);
seq__36594 = G__36609;
chunk__36595 = G__36610;
count__36596 = G__36611;
i__36597 = G__36612;
continue;
} else {
var vec__36601 = cljs.core.first.call(null,seq__36594__$1);
var k = cljs.core.nth.call(null,vec__36601,(0),null);
var plugin = cljs.core.nth.call(null,vec__36601,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36613 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36594,chunk__36595,count__36596,i__36597,pl_36613,vec__36601,k,plugin,seq__36594__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36613.call(null,msg_hist);
});})(seq__36594,chunk__36595,count__36596,i__36597,pl_36613,vec__36601,k,plugin,seq__36594__$1,temp__4657__auto__))
);
} else {
}

var G__36614 = cljs.core.next.call(null,seq__36594__$1);
var G__36615 = null;
var G__36616 = (0);
var G__36617 = (0);
seq__36594 = G__36614;
chunk__36595 = G__36615;
count__36596 = G__36616;
i__36597 = G__36617;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__36619 = arguments.length;
switch (G__36619) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36620_36625 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36621_36626 = null;
var count__36622_36627 = (0);
var i__36623_36628 = (0);
while(true){
if((i__36623_36628 < count__36622_36627)){
var msg_36629 = cljs.core._nth.call(null,chunk__36621_36626,i__36623_36628);
figwheel.client.socket.handle_incoming_message.call(null,msg_36629);

var G__36630 = seq__36620_36625;
var G__36631 = chunk__36621_36626;
var G__36632 = count__36622_36627;
var G__36633 = (i__36623_36628 + (1));
seq__36620_36625 = G__36630;
chunk__36621_36626 = G__36631;
count__36622_36627 = G__36632;
i__36623_36628 = G__36633;
continue;
} else {
var temp__4657__auto___36634 = cljs.core.seq.call(null,seq__36620_36625);
if(temp__4657__auto___36634){
var seq__36620_36635__$1 = temp__4657__auto___36634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36620_36635__$1)){
var c__29129__auto___36636 = cljs.core.chunk_first.call(null,seq__36620_36635__$1);
var G__36637 = cljs.core.chunk_rest.call(null,seq__36620_36635__$1);
var G__36638 = c__29129__auto___36636;
var G__36639 = cljs.core.count.call(null,c__29129__auto___36636);
var G__36640 = (0);
seq__36620_36625 = G__36637;
chunk__36621_36626 = G__36638;
count__36622_36627 = G__36639;
i__36623_36628 = G__36640;
continue;
} else {
var msg_36641 = cljs.core.first.call(null,seq__36620_36635__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36641);

var G__36642 = cljs.core.next.call(null,seq__36620_36635__$1);
var G__36643 = null;
var G__36644 = (0);
var G__36645 = (0);
seq__36620_36625 = G__36642;
chunk__36621_36626 = G__36643;
count__36622_36627 = G__36644;
i__36623_36628 = G__36645;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29466__auto__ = [];
var len__29459__auto___36650 = arguments.length;
var i__29460__auto___36651 = (0);
while(true){
if((i__29460__auto___36651 < len__29459__auto___36650)){
args__29466__auto__.push((arguments[i__29460__auto___36651]));

var G__36652 = (i__29460__auto___36651 + (1));
i__29460__auto___36651 = G__36652;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36647){
var map__36648 = p__36647;
var map__36648__$1 = ((((!((map__36648 == null)))?((((map__36648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36648):map__36648);
var opts = map__36648__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36646){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36646));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36653){if((e36653 instanceof Error)){
var e = e36653;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36653;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36654){
var map__36655 = p__36654;
var map__36655__$1 = ((((!((map__36655 == null)))?((((map__36655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36655):map__36655);
var msg_name = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1505471601106
