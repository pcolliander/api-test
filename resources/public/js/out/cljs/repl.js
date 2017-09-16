// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35887){
var map__35888 = p__35887;
var map__35888__$1 = ((((!((map__35888 == null)))?((((map__35888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35888):map__35888);
var m = map__35888__$1;
var n = cljs.core.get.call(null,map__35888__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35890_35912 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35891_35913 = null;
var count__35892_35914 = (0);
var i__35893_35915 = (0);
while(true){
if((i__35893_35915 < count__35892_35914)){
var f_35916 = cljs.core._nth.call(null,chunk__35891_35913,i__35893_35915);
cljs.core.println.call(null,"  ",f_35916);

var G__35917 = seq__35890_35912;
var G__35918 = chunk__35891_35913;
var G__35919 = count__35892_35914;
var G__35920 = (i__35893_35915 + (1));
seq__35890_35912 = G__35917;
chunk__35891_35913 = G__35918;
count__35892_35914 = G__35919;
i__35893_35915 = G__35920;
continue;
} else {
var temp__4657__auto___35921 = cljs.core.seq.call(null,seq__35890_35912);
if(temp__4657__auto___35921){
var seq__35890_35922__$1 = temp__4657__auto___35921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35890_35922__$1)){
var c__29129__auto___35923 = cljs.core.chunk_first.call(null,seq__35890_35922__$1);
var G__35924 = cljs.core.chunk_rest.call(null,seq__35890_35922__$1);
var G__35925 = c__29129__auto___35923;
var G__35926 = cljs.core.count.call(null,c__29129__auto___35923);
var G__35927 = (0);
seq__35890_35912 = G__35924;
chunk__35891_35913 = G__35925;
count__35892_35914 = G__35926;
i__35893_35915 = G__35927;
continue;
} else {
var f_35928 = cljs.core.first.call(null,seq__35890_35922__$1);
cljs.core.println.call(null,"  ",f_35928);

var G__35929 = cljs.core.next.call(null,seq__35890_35922__$1);
var G__35930 = null;
var G__35931 = (0);
var G__35932 = (0);
seq__35890_35912 = G__35929;
chunk__35891_35913 = G__35930;
count__35892_35914 = G__35931;
i__35893_35915 = G__35932;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35933 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28290__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28290__auto__)){
return or__28290__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35933);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35933)))?cljs.core.second.call(null,arglists_35933):arglists_35933));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35894_35934 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35895_35935 = null;
var count__35896_35936 = (0);
var i__35897_35937 = (0);
while(true){
if((i__35897_35937 < count__35896_35936)){
var vec__35898_35938 = cljs.core._nth.call(null,chunk__35895_35935,i__35897_35937);
var name_35939 = cljs.core.nth.call(null,vec__35898_35938,(0),null);
var map__35901_35940 = cljs.core.nth.call(null,vec__35898_35938,(1),null);
var map__35901_35941__$1 = ((((!((map__35901_35940 == null)))?((((map__35901_35940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35901_35940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35901_35940):map__35901_35940);
var doc_35942 = cljs.core.get.call(null,map__35901_35941__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35943 = cljs.core.get.call(null,map__35901_35941__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35939);

cljs.core.println.call(null," ",arglists_35943);

if(cljs.core.truth_(doc_35942)){
cljs.core.println.call(null," ",doc_35942);
} else {
}

var G__35944 = seq__35894_35934;
var G__35945 = chunk__35895_35935;
var G__35946 = count__35896_35936;
var G__35947 = (i__35897_35937 + (1));
seq__35894_35934 = G__35944;
chunk__35895_35935 = G__35945;
count__35896_35936 = G__35946;
i__35897_35937 = G__35947;
continue;
} else {
var temp__4657__auto___35948 = cljs.core.seq.call(null,seq__35894_35934);
if(temp__4657__auto___35948){
var seq__35894_35949__$1 = temp__4657__auto___35948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35894_35949__$1)){
var c__29129__auto___35950 = cljs.core.chunk_first.call(null,seq__35894_35949__$1);
var G__35951 = cljs.core.chunk_rest.call(null,seq__35894_35949__$1);
var G__35952 = c__29129__auto___35950;
var G__35953 = cljs.core.count.call(null,c__29129__auto___35950);
var G__35954 = (0);
seq__35894_35934 = G__35951;
chunk__35895_35935 = G__35952;
count__35896_35936 = G__35953;
i__35897_35937 = G__35954;
continue;
} else {
var vec__35903_35955 = cljs.core.first.call(null,seq__35894_35949__$1);
var name_35956 = cljs.core.nth.call(null,vec__35903_35955,(0),null);
var map__35906_35957 = cljs.core.nth.call(null,vec__35903_35955,(1),null);
var map__35906_35958__$1 = ((((!((map__35906_35957 == null)))?((((map__35906_35957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35906_35957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35906_35957):map__35906_35957);
var doc_35959 = cljs.core.get.call(null,map__35906_35958__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35960 = cljs.core.get.call(null,map__35906_35958__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35956);

cljs.core.println.call(null," ",arglists_35960);

if(cljs.core.truth_(doc_35959)){
cljs.core.println.call(null," ",doc_35959);
} else {
}

var G__35961 = cljs.core.next.call(null,seq__35894_35949__$1);
var G__35962 = null;
var G__35963 = (0);
var G__35964 = (0);
seq__35894_35934 = G__35961;
chunk__35895_35935 = G__35962;
count__35896_35936 = G__35963;
i__35897_35937 = G__35964;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35908 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35909 = null;
var count__35910 = (0);
var i__35911 = (0);
while(true){
if((i__35911 < count__35910)){
var role = cljs.core._nth.call(null,chunk__35909,i__35911);
var temp__4657__auto___35965__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35965__$1)){
var spec_35966 = temp__4657__auto___35965__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35966));
} else {
}

var G__35967 = seq__35908;
var G__35968 = chunk__35909;
var G__35969 = count__35910;
var G__35970 = (i__35911 + (1));
seq__35908 = G__35967;
chunk__35909 = G__35968;
count__35910 = G__35969;
i__35911 = G__35970;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35908);
if(temp__4657__auto____$1){
var seq__35908__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35908__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__35908__$1);
var G__35971 = cljs.core.chunk_rest.call(null,seq__35908__$1);
var G__35972 = c__29129__auto__;
var G__35973 = cljs.core.count.call(null,c__29129__auto__);
var G__35974 = (0);
seq__35908 = G__35971;
chunk__35909 = G__35972;
count__35910 = G__35973;
i__35911 = G__35974;
continue;
} else {
var role = cljs.core.first.call(null,seq__35908__$1);
var temp__4657__auto___35975__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35975__$2)){
var spec_35976 = temp__4657__auto___35975__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35976));
} else {
}

var G__35977 = cljs.core.next.call(null,seq__35908__$1);
var G__35978 = null;
var G__35979 = (0);
var G__35980 = (0);
seq__35908 = G__35977;
chunk__35909 = G__35978;
count__35910 = G__35979;
i__35911 = G__35980;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1505471600635
