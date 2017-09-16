// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28290__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28290__auto__){
return or__28290__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28290__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28290__auto__)){
return or__28290__auto__;
} else {
var or__28290__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28290__auto____$1)){
return or__28290__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34676_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34676_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34677 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34678 = null;
var count__34679 = (0);
var i__34680 = (0);
while(true){
if((i__34680 < count__34679)){
var n = cljs.core._nth.call(null,chunk__34678,i__34680);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34681 = seq__34677;
var G__34682 = chunk__34678;
var G__34683 = count__34679;
var G__34684 = (i__34680 + (1));
seq__34677 = G__34681;
chunk__34678 = G__34682;
count__34679 = G__34683;
i__34680 = G__34684;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34677);
if(temp__4657__auto__){
var seq__34677__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34677__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__34677__$1);
var G__34685 = cljs.core.chunk_rest.call(null,seq__34677__$1);
var G__34686 = c__29129__auto__;
var G__34687 = cljs.core.count.call(null,c__29129__auto__);
var G__34688 = (0);
seq__34677 = G__34685;
chunk__34678 = G__34686;
count__34679 = G__34687;
i__34680 = G__34688;
continue;
} else {
var n = cljs.core.first.call(null,seq__34677__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34689 = cljs.core.next.call(null,seq__34677__$1);
var G__34690 = null;
var G__34691 = (0);
var G__34692 = (0);
seq__34677 = G__34689;
chunk__34678 = G__34690;
count__34679 = G__34691;
i__34680 = G__34692;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34702_34710 = cljs.core.seq.call(null,deps);
var chunk__34703_34711 = null;
var count__34704_34712 = (0);
var i__34705_34713 = (0);
while(true){
if((i__34705_34713 < count__34704_34712)){
var dep_34714 = cljs.core._nth.call(null,chunk__34703_34711,i__34705_34713);
topo_sort_helper_STAR_.call(null,dep_34714,(depth + (1)),state);

var G__34715 = seq__34702_34710;
var G__34716 = chunk__34703_34711;
var G__34717 = count__34704_34712;
var G__34718 = (i__34705_34713 + (1));
seq__34702_34710 = G__34715;
chunk__34703_34711 = G__34716;
count__34704_34712 = G__34717;
i__34705_34713 = G__34718;
continue;
} else {
var temp__4657__auto___34719 = cljs.core.seq.call(null,seq__34702_34710);
if(temp__4657__auto___34719){
var seq__34702_34720__$1 = temp__4657__auto___34719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34702_34720__$1)){
var c__29129__auto___34721 = cljs.core.chunk_first.call(null,seq__34702_34720__$1);
var G__34722 = cljs.core.chunk_rest.call(null,seq__34702_34720__$1);
var G__34723 = c__29129__auto___34721;
var G__34724 = cljs.core.count.call(null,c__29129__auto___34721);
var G__34725 = (0);
seq__34702_34710 = G__34722;
chunk__34703_34711 = G__34723;
count__34704_34712 = G__34724;
i__34705_34713 = G__34725;
continue;
} else {
var dep_34726 = cljs.core.first.call(null,seq__34702_34720__$1);
topo_sort_helper_STAR_.call(null,dep_34726,(depth + (1)),state);

var G__34727 = cljs.core.next.call(null,seq__34702_34720__$1);
var G__34728 = null;
var G__34729 = (0);
var G__34730 = (0);
seq__34702_34710 = G__34727;
chunk__34703_34711 = G__34728;
count__34704_34712 = G__34729;
i__34705_34713 = G__34730;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34706){
var vec__34707 = p__34706;
var seq__34708 = cljs.core.seq.call(null,vec__34707);
var first__34709 = cljs.core.first.call(null,seq__34708);
var seq__34708__$1 = cljs.core.next.call(null,seq__34708);
var x = first__34709;
var xs = seq__34708__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34707,seq__34708,first__34709,seq__34708__$1,x,xs,get_deps__$1){
return (function (p1__34693_SHARP_){
return clojure.set.difference.call(null,p1__34693_SHARP_,x);
});})(vec__34707,seq__34708,first__34709,seq__34708__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34731 = cljs.core.seq.call(null,provides);
var chunk__34732 = null;
var count__34733 = (0);
var i__34734 = (0);
while(true){
if((i__34734 < count__34733)){
var prov = cljs.core._nth.call(null,chunk__34732,i__34734);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34735_34743 = cljs.core.seq.call(null,requires);
var chunk__34736_34744 = null;
var count__34737_34745 = (0);
var i__34738_34746 = (0);
while(true){
if((i__34738_34746 < count__34737_34745)){
var req_34747 = cljs.core._nth.call(null,chunk__34736_34744,i__34738_34746);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34747,prov);

var G__34748 = seq__34735_34743;
var G__34749 = chunk__34736_34744;
var G__34750 = count__34737_34745;
var G__34751 = (i__34738_34746 + (1));
seq__34735_34743 = G__34748;
chunk__34736_34744 = G__34749;
count__34737_34745 = G__34750;
i__34738_34746 = G__34751;
continue;
} else {
var temp__4657__auto___34752 = cljs.core.seq.call(null,seq__34735_34743);
if(temp__4657__auto___34752){
var seq__34735_34753__$1 = temp__4657__auto___34752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34735_34753__$1)){
var c__29129__auto___34754 = cljs.core.chunk_first.call(null,seq__34735_34753__$1);
var G__34755 = cljs.core.chunk_rest.call(null,seq__34735_34753__$1);
var G__34756 = c__29129__auto___34754;
var G__34757 = cljs.core.count.call(null,c__29129__auto___34754);
var G__34758 = (0);
seq__34735_34743 = G__34755;
chunk__34736_34744 = G__34756;
count__34737_34745 = G__34757;
i__34738_34746 = G__34758;
continue;
} else {
var req_34759 = cljs.core.first.call(null,seq__34735_34753__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34759,prov);

var G__34760 = cljs.core.next.call(null,seq__34735_34753__$1);
var G__34761 = null;
var G__34762 = (0);
var G__34763 = (0);
seq__34735_34743 = G__34760;
chunk__34736_34744 = G__34761;
count__34737_34745 = G__34762;
i__34738_34746 = G__34763;
continue;
}
} else {
}
}
break;
}

var G__34764 = seq__34731;
var G__34765 = chunk__34732;
var G__34766 = count__34733;
var G__34767 = (i__34734 + (1));
seq__34731 = G__34764;
chunk__34732 = G__34765;
count__34733 = G__34766;
i__34734 = G__34767;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34731);
if(temp__4657__auto__){
var seq__34731__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34731__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__34731__$1);
var G__34768 = cljs.core.chunk_rest.call(null,seq__34731__$1);
var G__34769 = c__29129__auto__;
var G__34770 = cljs.core.count.call(null,c__29129__auto__);
var G__34771 = (0);
seq__34731 = G__34768;
chunk__34732 = G__34769;
count__34733 = G__34770;
i__34734 = G__34771;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34731__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34739_34772 = cljs.core.seq.call(null,requires);
var chunk__34740_34773 = null;
var count__34741_34774 = (0);
var i__34742_34775 = (0);
while(true){
if((i__34742_34775 < count__34741_34774)){
var req_34776 = cljs.core._nth.call(null,chunk__34740_34773,i__34742_34775);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34776,prov);

var G__34777 = seq__34739_34772;
var G__34778 = chunk__34740_34773;
var G__34779 = count__34741_34774;
var G__34780 = (i__34742_34775 + (1));
seq__34739_34772 = G__34777;
chunk__34740_34773 = G__34778;
count__34741_34774 = G__34779;
i__34742_34775 = G__34780;
continue;
} else {
var temp__4657__auto___34781__$1 = cljs.core.seq.call(null,seq__34739_34772);
if(temp__4657__auto___34781__$1){
var seq__34739_34782__$1 = temp__4657__auto___34781__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34739_34782__$1)){
var c__29129__auto___34783 = cljs.core.chunk_first.call(null,seq__34739_34782__$1);
var G__34784 = cljs.core.chunk_rest.call(null,seq__34739_34782__$1);
var G__34785 = c__29129__auto___34783;
var G__34786 = cljs.core.count.call(null,c__29129__auto___34783);
var G__34787 = (0);
seq__34739_34772 = G__34784;
chunk__34740_34773 = G__34785;
count__34741_34774 = G__34786;
i__34742_34775 = G__34787;
continue;
} else {
var req_34788 = cljs.core.first.call(null,seq__34739_34782__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34788,prov);

var G__34789 = cljs.core.next.call(null,seq__34739_34782__$1);
var G__34790 = null;
var G__34791 = (0);
var G__34792 = (0);
seq__34739_34772 = G__34789;
chunk__34740_34773 = G__34790;
count__34741_34774 = G__34791;
i__34742_34775 = G__34792;
continue;
}
} else {
}
}
break;
}

var G__34793 = cljs.core.next.call(null,seq__34731__$1);
var G__34794 = null;
var G__34795 = (0);
var G__34796 = (0);
seq__34731 = G__34793;
chunk__34732 = G__34794;
count__34733 = G__34795;
i__34734 = G__34796;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34797_34801 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34798_34802 = null;
var count__34799_34803 = (0);
var i__34800_34804 = (0);
while(true){
if((i__34800_34804 < count__34799_34803)){
var ns_34805 = cljs.core._nth.call(null,chunk__34798_34802,i__34800_34804);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34805);

var G__34806 = seq__34797_34801;
var G__34807 = chunk__34798_34802;
var G__34808 = count__34799_34803;
var G__34809 = (i__34800_34804 + (1));
seq__34797_34801 = G__34806;
chunk__34798_34802 = G__34807;
count__34799_34803 = G__34808;
i__34800_34804 = G__34809;
continue;
} else {
var temp__4657__auto___34810 = cljs.core.seq.call(null,seq__34797_34801);
if(temp__4657__auto___34810){
var seq__34797_34811__$1 = temp__4657__auto___34810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34797_34811__$1)){
var c__29129__auto___34812 = cljs.core.chunk_first.call(null,seq__34797_34811__$1);
var G__34813 = cljs.core.chunk_rest.call(null,seq__34797_34811__$1);
var G__34814 = c__29129__auto___34812;
var G__34815 = cljs.core.count.call(null,c__29129__auto___34812);
var G__34816 = (0);
seq__34797_34801 = G__34813;
chunk__34798_34802 = G__34814;
count__34799_34803 = G__34815;
i__34800_34804 = G__34816;
continue;
} else {
var ns_34817 = cljs.core.first.call(null,seq__34797_34811__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34817);

var G__34818 = cljs.core.next.call(null,seq__34797_34811__$1);
var G__34819 = null;
var G__34820 = (0);
var G__34821 = (0);
seq__34797_34801 = G__34818;
chunk__34798_34802 = G__34819;
count__34799_34803 = G__34820;
i__34800_34804 = G__34821;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28290__auto__ = goog.require__;
if(cljs.core.truth_(or__28290__auto__)){
return or__28290__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34822__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34823__i = 0, G__34823__a = new Array(arguments.length -  0);
while (G__34823__i < G__34823__a.length) {G__34823__a[G__34823__i] = arguments[G__34823__i + 0]; ++G__34823__i;}
  args = new cljs.core.IndexedSeq(G__34823__a,0,null);
} 
return G__34822__delegate.call(this,args);};
G__34822.cljs$lang$maxFixedArity = 0;
G__34822.cljs$lang$applyTo = (function (arglist__34824){
var args = cljs.core.seq(arglist__34824);
return G__34822__delegate(args);
});
G__34822.cljs$core$IFn$_invoke$arity$variadic = G__34822__delegate;
return G__34822;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34825_SHARP_,p2__34826_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34825_SHARP_)].join('')),p2__34826_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34827_SHARP_,p2__34828_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34827_SHARP_)].join(''),p2__34828_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34829 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34829.addCallback(((function (G__34829){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34829))
);

G__34829.addErrback(((function (G__34829){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34829))
);

return G__34829;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34830 = cljs.core._EQ_;
var expr__34831 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34830.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34831))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34830,expr__34831){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34830,expr__34831))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34830,expr__34831){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34833){if((e34833 instanceof Error)){
var e = e34833;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34833;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34830,expr__34831))
} else {
if(cljs.core.truth_(pred__34830.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34831))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34830.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34831))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34830.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34831))){
return ((function (pred__34830,expr__34831){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34834){if((e34834 instanceof Error)){
var e = e34834;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34834;

}
}})());
});
;})(pred__34830,expr__34831))
} else {
return ((function (pred__34830,expr__34831){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34830,expr__34831))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34835,callback){
var map__34836 = p__34835;
var map__34836__$1 = ((((!((map__34836 == null)))?((((map__34836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34836):map__34836);
var file_msg = map__34836__$1;
var request_url = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34836,map__34836__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34836,map__34836__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto__){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto__){
return (function (state_34860){
var state_val_34861 = (state_34860[(1)]);
if((state_val_34861 === (7))){
var inst_34856 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
var statearr_34862_34879 = state_34860__$1;
(statearr_34862_34879[(2)] = inst_34856);

(statearr_34862_34879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (1))){
var state_34860__$1 = state_34860;
var statearr_34863_34880 = state_34860__$1;
(statearr_34863_34880[(2)] = null);

(statearr_34863_34880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (4))){
var inst_34840 = (state_34860[(7)]);
var inst_34840__$1 = (state_34860[(2)]);
var state_34860__$1 = (function (){var statearr_34864 = state_34860;
(statearr_34864[(7)] = inst_34840__$1);

return statearr_34864;
})();
if(cljs.core.truth_(inst_34840__$1)){
var statearr_34865_34881 = state_34860__$1;
(statearr_34865_34881[(1)] = (5));

} else {
var statearr_34866_34882 = state_34860__$1;
(statearr_34866_34882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (6))){
var state_34860__$1 = state_34860;
var statearr_34867_34883 = state_34860__$1;
(statearr_34867_34883[(2)] = null);

(statearr_34867_34883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (3))){
var inst_34858 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34860__$1,inst_34858);
} else {
if((state_val_34861 === (2))){
var state_34860__$1 = state_34860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34860__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34861 === (11))){
var inst_34852 = (state_34860[(2)]);
var state_34860__$1 = (function (){var statearr_34868 = state_34860;
(statearr_34868[(8)] = inst_34852);

return statearr_34868;
})();
var statearr_34869_34884 = state_34860__$1;
(statearr_34869_34884[(2)] = null);

(statearr_34869_34884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (9))){
var inst_34844 = (state_34860[(9)]);
var inst_34846 = (state_34860[(10)]);
var inst_34848 = inst_34846.call(null,inst_34844);
var state_34860__$1 = state_34860;
var statearr_34870_34885 = state_34860__$1;
(statearr_34870_34885[(2)] = inst_34848);

(statearr_34870_34885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (5))){
var inst_34840 = (state_34860[(7)]);
var inst_34842 = figwheel.client.file_reloading.blocking_load.call(null,inst_34840);
var state_34860__$1 = state_34860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34860__$1,(8),inst_34842);
} else {
if((state_val_34861 === (10))){
var inst_34844 = (state_34860[(9)]);
var inst_34850 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34844);
var state_34860__$1 = state_34860;
var statearr_34871_34886 = state_34860__$1;
(statearr_34871_34886[(2)] = inst_34850);

(statearr_34871_34886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34861 === (8))){
var inst_34846 = (state_34860[(10)]);
var inst_34840 = (state_34860[(7)]);
var inst_34844 = (state_34860[(2)]);
var inst_34845 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34846__$1 = cljs.core.get.call(null,inst_34845,inst_34840);
var state_34860__$1 = (function (){var statearr_34872 = state_34860;
(statearr_34872[(9)] = inst_34844);

(statearr_34872[(10)] = inst_34846__$1);

return statearr_34872;
})();
if(cljs.core.truth_(inst_34846__$1)){
var statearr_34873_34887 = state_34860__$1;
(statearr_34873_34887[(1)] = (9));

} else {
var statearr_34874_34888 = state_34860__$1;
(statearr_34874_34888[(1)] = (10));

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
});})(c__31448__auto__))
;
return ((function (switch__31360__auto__,c__31448__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31361__auto__ = null;
var figwheel$client$file_reloading$state_machine__31361__auto____0 = (function (){
var statearr_34875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34875[(0)] = figwheel$client$file_reloading$state_machine__31361__auto__);

(statearr_34875[(1)] = (1));

return statearr_34875;
});
var figwheel$client$file_reloading$state_machine__31361__auto____1 = (function (state_34860){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_34860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e34876){if((e34876 instanceof Object)){
var ex__31364__auto__ = e34876;
var statearr_34877_34889 = state_34860;
(statearr_34877_34889[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34890 = state_34860;
state_34860 = G__34890;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31361__auto__ = function(state_34860){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31361__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31361__auto____1.call(this,state_34860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31361__auto____0;
figwheel$client$file_reloading$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31361__auto____1;
return figwheel$client$file_reloading$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto__))
})();
var state__31450__auto__ = (function (){var statearr_34878 = f__31449__auto__.call(null);
(statearr_34878[(6)] = c__31448__auto__);

return statearr_34878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto__))
);

return c__31448__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34891,callback){
var map__34892 = p__34891;
var map__34892__$1 = ((((!((map__34892 == null)))?((((map__34892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34892):map__34892);
var file_msg = map__34892__$1;
var namespace = cljs.core.get.call(null,map__34892__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34892,map__34892__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34892,map__34892__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34894){
var map__34895 = p__34894;
var map__34895__$1 = ((((!((map__34895 == null)))?((((map__34895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34895):map__34895);
var file_msg = map__34895__$1;
var namespace = cljs.core.get.call(null,map__34895__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34897){
var map__34898 = p__34897;
var map__34898__$1 = ((((!((map__34898 == null)))?((((map__34898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34898):map__34898);
var file_msg = map__34898__$1;
var namespace = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28278__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28278__auto__){
var or__28290__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28290__auto__)){
return or__28290__auto__;
} else {
var or__28290__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28290__auto____$1)){
return or__28290__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28278__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34900,callback){
var map__34901 = p__34900;
var map__34901__$1 = ((((!((map__34901 == null)))?((((map__34901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34901):map__34901);
var file_msg = map__34901__$1;
var request_url = cljs.core.get.call(null,map__34901__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34901__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31448__auto___34951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___34951,out){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___34951,out){
return (function (state_34936){
var state_val_34937 = (state_34936[(1)]);
if((state_val_34937 === (1))){
var inst_34910 = cljs.core.seq.call(null,files);
var inst_34911 = cljs.core.first.call(null,inst_34910);
var inst_34912 = cljs.core.next.call(null,inst_34910);
var inst_34913 = files;
var state_34936__$1 = (function (){var statearr_34938 = state_34936;
(statearr_34938[(7)] = inst_34913);

(statearr_34938[(8)] = inst_34912);

(statearr_34938[(9)] = inst_34911);

return statearr_34938;
})();
var statearr_34939_34952 = state_34936__$1;
(statearr_34939_34952[(2)] = null);

(statearr_34939_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (2))){
var inst_34913 = (state_34936[(7)]);
var inst_34919 = (state_34936[(10)]);
var inst_34918 = cljs.core.seq.call(null,inst_34913);
var inst_34919__$1 = cljs.core.first.call(null,inst_34918);
var inst_34920 = cljs.core.next.call(null,inst_34918);
var inst_34921 = (inst_34919__$1 == null);
var inst_34922 = cljs.core.not.call(null,inst_34921);
var state_34936__$1 = (function (){var statearr_34940 = state_34936;
(statearr_34940[(10)] = inst_34919__$1);

(statearr_34940[(11)] = inst_34920);

return statearr_34940;
})();
if(inst_34922){
var statearr_34941_34953 = state_34936__$1;
(statearr_34941_34953[(1)] = (4));

} else {
var statearr_34942_34954 = state_34936__$1;
(statearr_34942_34954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (3))){
var inst_34934 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34936__$1,inst_34934);
} else {
if((state_val_34937 === (4))){
var inst_34919 = (state_34936[(10)]);
var inst_34924 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34919);
var state_34936__$1 = state_34936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34936__$1,(7),inst_34924);
} else {
if((state_val_34937 === (5))){
var inst_34930 = cljs.core.async.close_BANG_.call(null,out);
var state_34936__$1 = state_34936;
var statearr_34943_34955 = state_34936__$1;
(statearr_34943_34955[(2)] = inst_34930);

(statearr_34943_34955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (6))){
var inst_34932 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
var statearr_34944_34956 = state_34936__$1;
(statearr_34944_34956[(2)] = inst_34932);

(statearr_34944_34956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (7))){
var inst_34920 = (state_34936[(11)]);
var inst_34926 = (state_34936[(2)]);
var inst_34927 = cljs.core.async.put_BANG_.call(null,out,inst_34926);
var inst_34913 = inst_34920;
var state_34936__$1 = (function (){var statearr_34945 = state_34936;
(statearr_34945[(12)] = inst_34927);

(statearr_34945[(7)] = inst_34913);

return statearr_34945;
})();
var statearr_34946_34957 = state_34936__$1;
(statearr_34946_34957[(2)] = null);

(statearr_34946_34957[(1)] = (2));


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
});})(c__31448__auto___34951,out))
;
return ((function (switch__31360__auto__,c__31448__auto___34951,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto____0 = (function (){
var statearr_34947 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34947[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto__);

(statearr_34947[(1)] = (1));

return statearr_34947;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto____1 = (function (state_34936){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_34936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e34948){if((e34948 instanceof Object)){
var ex__31364__auto__ = e34948;
var statearr_34949_34958 = state_34936;
(statearr_34949_34958[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34959 = state_34936;
state_34936 = G__34959;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto__ = function(state_34936){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto____1.call(this,state_34936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___34951,out))
})();
var state__31450__auto__ = (function (){var statearr_34950 = f__31449__auto__.call(null);
(statearr_34950[(6)] = c__31448__auto___34951);

return statearr_34950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___34951,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34960,opts){
var map__34961 = p__34960;
var map__34961__$1 = ((((!((map__34961 == null)))?((((map__34961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34961):map__34961);
var eval_body = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28278__auto__ = eval_body;
if(cljs.core.truth_(and__28278__auto__)){
return typeof eval_body === 'string';
} else {
return and__28278__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34963){var e = e34963;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34964_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34964_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34965){
var vec__34966 = p__34965;
var k = cljs.core.nth.call(null,vec__34966,(0),null);
var v = cljs.core.nth.call(null,vec__34966,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34969){
var vec__34970 = p__34969;
var k = cljs.core.nth.call(null,vec__34970,(0),null);
var v = cljs.core.nth.call(null,vec__34970,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34976,p__34977){
var map__34978 = p__34976;
var map__34978__$1 = ((((!((map__34978 == null)))?((((map__34978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34978):map__34978);
var opts = map__34978__$1;
var before_jsload = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34979 = p__34977;
var map__34979__$1 = ((((!((map__34979 == null)))?((((map__34979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34979):map__34979);
var msg = map__34979__$1;
var files = cljs.core.get.call(null,map__34979__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34979__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34979__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35133){
var state_val_35134 = (state_35133[(1)]);
if((state_val_35134 === (7))){
var inst_34995 = (state_35133[(7)]);
var inst_34993 = (state_35133[(8)]);
var inst_34996 = (state_35133[(9)]);
var inst_34994 = (state_35133[(10)]);
var inst_35001 = cljs.core._nth.call(null,inst_34994,inst_34996);
var inst_35002 = figwheel.client.file_reloading.eval_body.call(null,inst_35001,opts);
var inst_35003 = (inst_34996 + (1));
var tmp35135 = inst_34995;
var tmp35136 = inst_34993;
var tmp35137 = inst_34994;
var inst_34993__$1 = tmp35136;
var inst_34994__$1 = tmp35137;
var inst_34995__$1 = tmp35135;
var inst_34996__$1 = inst_35003;
var state_35133__$1 = (function (){var statearr_35138 = state_35133;
(statearr_35138[(11)] = inst_35002);

(statearr_35138[(7)] = inst_34995__$1);

(statearr_35138[(8)] = inst_34993__$1);

(statearr_35138[(9)] = inst_34996__$1);

(statearr_35138[(10)] = inst_34994__$1);

return statearr_35138;
})();
var statearr_35139_35222 = state_35133__$1;
(statearr_35139_35222[(2)] = null);

(statearr_35139_35222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (20))){
var inst_35036 = (state_35133[(12)]);
var inst_35044 = figwheel.client.file_reloading.sort_files.call(null,inst_35036);
var state_35133__$1 = state_35133;
var statearr_35140_35223 = state_35133__$1;
(statearr_35140_35223[(2)] = inst_35044);

(statearr_35140_35223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (27))){
var state_35133__$1 = state_35133;
var statearr_35141_35224 = state_35133__$1;
(statearr_35141_35224[(2)] = null);

(statearr_35141_35224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (1))){
var inst_34985 = (state_35133[(13)]);
var inst_34982 = before_jsload.call(null,files);
var inst_34983 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34984 = (function (){return ((function (inst_34985,inst_34982,inst_34983,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34973_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34973_SHARP_);
});
;})(inst_34985,inst_34982,inst_34983,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34985__$1 = cljs.core.filter.call(null,inst_34984,files);
var inst_34986 = cljs.core.not_empty.call(null,inst_34985__$1);
var state_35133__$1 = (function (){var statearr_35142 = state_35133;
(statearr_35142[(14)] = inst_34983);

(statearr_35142[(13)] = inst_34985__$1);

(statearr_35142[(15)] = inst_34982);

return statearr_35142;
})();
if(cljs.core.truth_(inst_34986)){
var statearr_35143_35225 = state_35133__$1;
(statearr_35143_35225[(1)] = (2));

} else {
var statearr_35144_35226 = state_35133__$1;
(statearr_35144_35226[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (24))){
var state_35133__$1 = state_35133;
var statearr_35145_35227 = state_35133__$1;
(statearr_35145_35227[(2)] = null);

(statearr_35145_35227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (39))){
var inst_35086 = (state_35133[(16)]);
var state_35133__$1 = state_35133;
var statearr_35146_35228 = state_35133__$1;
(statearr_35146_35228[(2)] = inst_35086);

(statearr_35146_35228[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (46))){
var inst_35128 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
var statearr_35147_35229 = state_35133__$1;
(statearr_35147_35229[(2)] = inst_35128);

(statearr_35147_35229[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (4))){
var inst_35030 = (state_35133[(2)]);
var inst_35031 = cljs.core.List.EMPTY;
var inst_35032 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35031);
var inst_35033 = (function (){return ((function (inst_35030,inst_35031,inst_35032,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34974_SHARP_){
var and__28278__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34974_SHARP_);
if(cljs.core.truth_(and__28278__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34974_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34974_SHARP_)));
} else {
return and__28278__auto__;
}
});
;})(inst_35030,inst_35031,inst_35032,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35034 = cljs.core.filter.call(null,inst_35033,files);
var inst_35035 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35036 = cljs.core.concat.call(null,inst_35034,inst_35035);
var state_35133__$1 = (function (){var statearr_35148 = state_35133;
(statearr_35148[(17)] = inst_35032);

(statearr_35148[(18)] = inst_35030);

(statearr_35148[(12)] = inst_35036);

return statearr_35148;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35149_35230 = state_35133__$1;
(statearr_35149_35230[(1)] = (16));

} else {
var statearr_35150_35231 = state_35133__$1;
(statearr_35150_35231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (15))){
var inst_35020 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
var statearr_35151_35232 = state_35133__$1;
(statearr_35151_35232[(2)] = inst_35020);

(statearr_35151_35232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (21))){
var inst_35046 = (state_35133[(19)]);
var inst_35046__$1 = (state_35133[(2)]);
var inst_35047 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35046__$1);
var state_35133__$1 = (function (){var statearr_35152 = state_35133;
(statearr_35152[(19)] = inst_35046__$1);

return statearr_35152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35133__$1,(22),inst_35047);
} else {
if((state_val_35134 === (31))){
var inst_35131 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35133__$1,inst_35131);
} else {
if((state_val_35134 === (32))){
var inst_35086 = (state_35133[(16)]);
var inst_35091 = inst_35086.cljs$lang$protocol_mask$partition0$;
var inst_35092 = (inst_35091 & (64));
var inst_35093 = inst_35086.cljs$core$ISeq$;
var inst_35094 = (cljs.core.PROTOCOL_SENTINEL === inst_35093);
var inst_35095 = (inst_35092) || (inst_35094);
var state_35133__$1 = state_35133;
if(cljs.core.truth_(inst_35095)){
var statearr_35153_35233 = state_35133__$1;
(statearr_35153_35233[(1)] = (35));

} else {
var statearr_35154_35234 = state_35133__$1;
(statearr_35154_35234[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (40))){
var inst_35108 = (state_35133[(20)]);
var inst_35107 = (state_35133[(2)]);
var inst_35108__$1 = cljs.core.get.call(null,inst_35107,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35109 = cljs.core.get.call(null,inst_35107,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35110 = cljs.core.not_empty.call(null,inst_35108__$1);
var state_35133__$1 = (function (){var statearr_35155 = state_35133;
(statearr_35155[(21)] = inst_35109);

(statearr_35155[(20)] = inst_35108__$1);

return statearr_35155;
})();
if(cljs.core.truth_(inst_35110)){
var statearr_35156_35235 = state_35133__$1;
(statearr_35156_35235[(1)] = (41));

} else {
var statearr_35157_35236 = state_35133__$1;
(statearr_35157_35236[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (33))){
var state_35133__$1 = state_35133;
var statearr_35158_35237 = state_35133__$1;
(statearr_35158_35237[(2)] = false);

(statearr_35158_35237[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (13))){
var inst_35006 = (state_35133[(22)]);
var inst_35010 = cljs.core.chunk_first.call(null,inst_35006);
var inst_35011 = cljs.core.chunk_rest.call(null,inst_35006);
var inst_35012 = cljs.core.count.call(null,inst_35010);
var inst_34993 = inst_35011;
var inst_34994 = inst_35010;
var inst_34995 = inst_35012;
var inst_34996 = (0);
var state_35133__$1 = (function (){var statearr_35159 = state_35133;
(statearr_35159[(7)] = inst_34995);

(statearr_35159[(8)] = inst_34993);

(statearr_35159[(9)] = inst_34996);

(statearr_35159[(10)] = inst_34994);

return statearr_35159;
})();
var statearr_35160_35238 = state_35133__$1;
(statearr_35160_35238[(2)] = null);

(statearr_35160_35238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (22))){
var inst_35054 = (state_35133[(23)]);
var inst_35050 = (state_35133[(24)]);
var inst_35046 = (state_35133[(19)]);
var inst_35049 = (state_35133[(25)]);
var inst_35049__$1 = (state_35133[(2)]);
var inst_35050__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35049__$1);
var inst_35051 = (function (){var all_files = inst_35046;
var res_SINGLEQUOTE_ = inst_35049__$1;
var res = inst_35050__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35054,inst_35050,inst_35046,inst_35049,inst_35049__$1,inst_35050__$1,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34975_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34975_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35054,inst_35050,inst_35046,inst_35049,inst_35049__$1,inst_35050__$1,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35052 = cljs.core.filter.call(null,inst_35051,inst_35049__$1);
var inst_35053 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35054__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35053);
var inst_35055 = cljs.core.not_empty.call(null,inst_35054__$1);
var state_35133__$1 = (function (){var statearr_35161 = state_35133;
(statearr_35161[(23)] = inst_35054__$1);

(statearr_35161[(26)] = inst_35052);

(statearr_35161[(24)] = inst_35050__$1);

(statearr_35161[(25)] = inst_35049__$1);

return statearr_35161;
})();
if(cljs.core.truth_(inst_35055)){
var statearr_35162_35239 = state_35133__$1;
(statearr_35162_35239[(1)] = (23));

} else {
var statearr_35163_35240 = state_35133__$1;
(statearr_35163_35240[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (36))){
var state_35133__$1 = state_35133;
var statearr_35164_35241 = state_35133__$1;
(statearr_35164_35241[(2)] = false);

(statearr_35164_35241[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (41))){
var inst_35108 = (state_35133[(20)]);
var inst_35112 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35113 = cljs.core.map.call(null,inst_35112,inst_35108);
var inst_35114 = cljs.core.pr_str.call(null,inst_35113);
var inst_35115 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35114)].join('');
var inst_35116 = figwheel.client.utils.log.call(null,inst_35115);
var state_35133__$1 = state_35133;
var statearr_35165_35242 = state_35133__$1;
(statearr_35165_35242[(2)] = inst_35116);

(statearr_35165_35242[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (43))){
var inst_35109 = (state_35133[(21)]);
var inst_35119 = (state_35133[(2)]);
var inst_35120 = cljs.core.not_empty.call(null,inst_35109);
var state_35133__$1 = (function (){var statearr_35166 = state_35133;
(statearr_35166[(27)] = inst_35119);

return statearr_35166;
})();
if(cljs.core.truth_(inst_35120)){
var statearr_35167_35243 = state_35133__$1;
(statearr_35167_35243[(1)] = (44));

} else {
var statearr_35168_35244 = state_35133__$1;
(statearr_35168_35244[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (29))){
var inst_35054 = (state_35133[(23)]);
var inst_35052 = (state_35133[(26)]);
var inst_35050 = (state_35133[(24)]);
var inst_35046 = (state_35133[(19)]);
var inst_35086 = (state_35133[(16)]);
var inst_35049 = (state_35133[(25)]);
var inst_35082 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35085 = (function (){var all_files = inst_35046;
var res_SINGLEQUOTE_ = inst_35049;
var res = inst_35050;
var files_not_loaded = inst_35052;
var dependencies_that_loaded = inst_35054;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35054,inst_35052,inst_35050,inst_35046,inst_35086,inst_35049,inst_35082,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35084){
var map__35169 = p__35084;
var map__35169__$1 = ((((!((map__35169 == null)))?((((map__35169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35169):map__35169);
var namespace = cljs.core.get.call(null,map__35169__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35054,inst_35052,inst_35050,inst_35046,inst_35086,inst_35049,inst_35082,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35086__$1 = cljs.core.group_by.call(null,inst_35085,inst_35052);
var inst_35088 = (inst_35086__$1 == null);
var inst_35089 = cljs.core.not.call(null,inst_35088);
var state_35133__$1 = (function (){var statearr_35171 = state_35133;
(statearr_35171[(16)] = inst_35086__$1);

(statearr_35171[(28)] = inst_35082);

return statearr_35171;
})();
if(inst_35089){
var statearr_35172_35245 = state_35133__$1;
(statearr_35172_35245[(1)] = (32));

} else {
var statearr_35173_35246 = state_35133__$1;
(statearr_35173_35246[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (44))){
var inst_35109 = (state_35133[(21)]);
var inst_35122 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35109);
var inst_35123 = cljs.core.pr_str.call(null,inst_35122);
var inst_35124 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35123)].join('');
var inst_35125 = figwheel.client.utils.log.call(null,inst_35124);
var state_35133__$1 = state_35133;
var statearr_35174_35247 = state_35133__$1;
(statearr_35174_35247[(2)] = inst_35125);

(statearr_35174_35247[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (6))){
var inst_35027 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
var statearr_35175_35248 = state_35133__$1;
(statearr_35175_35248[(2)] = inst_35027);

(statearr_35175_35248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (28))){
var inst_35052 = (state_35133[(26)]);
var inst_35079 = (state_35133[(2)]);
var inst_35080 = cljs.core.not_empty.call(null,inst_35052);
var state_35133__$1 = (function (){var statearr_35176 = state_35133;
(statearr_35176[(29)] = inst_35079);

return statearr_35176;
})();
if(cljs.core.truth_(inst_35080)){
var statearr_35177_35249 = state_35133__$1;
(statearr_35177_35249[(1)] = (29));

} else {
var statearr_35178_35250 = state_35133__$1;
(statearr_35178_35250[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (25))){
var inst_35050 = (state_35133[(24)]);
var inst_35066 = (state_35133[(2)]);
var inst_35067 = cljs.core.not_empty.call(null,inst_35050);
var state_35133__$1 = (function (){var statearr_35179 = state_35133;
(statearr_35179[(30)] = inst_35066);

return statearr_35179;
})();
if(cljs.core.truth_(inst_35067)){
var statearr_35180_35251 = state_35133__$1;
(statearr_35180_35251[(1)] = (26));

} else {
var statearr_35181_35252 = state_35133__$1;
(statearr_35181_35252[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (34))){
var inst_35102 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
if(cljs.core.truth_(inst_35102)){
var statearr_35182_35253 = state_35133__$1;
(statearr_35182_35253[(1)] = (38));

} else {
var statearr_35183_35254 = state_35133__$1;
(statearr_35183_35254[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (17))){
var state_35133__$1 = state_35133;
var statearr_35184_35255 = state_35133__$1;
(statearr_35184_35255[(2)] = recompile_dependents);

(statearr_35184_35255[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (3))){
var state_35133__$1 = state_35133;
var statearr_35185_35256 = state_35133__$1;
(statearr_35185_35256[(2)] = null);

(statearr_35185_35256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (12))){
var inst_35023 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
var statearr_35186_35257 = state_35133__$1;
(statearr_35186_35257[(2)] = inst_35023);

(statearr_35186_35257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (2))){
var inst_34985 = (state_35133[(13)]);
var inst_34992 = cljs.core.seq.call(null,inst_34985);
var inst_34993 = inst_34992;
var inst_34994 = null;
var inst_34995 = (0);
var inst_34996 = (0);
var state_35133__$1 = (function (){var statearr_35187 = state_35133;
(statearr_35187[(7)] = inst_34995);

(statearr_35187[(8)] = inst_34993);

(statearr_35187[(9)] = inst_34996);

(statearr_35187[(10)] = inst_34994);

return statearr_35187;
})();
var statearr_35188_35258 = state_35133__$1;
(statearr_35188_35258[(2)] = null);

(statearr_35188_35258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (23))){
var inst_35054 = (state_35133[(23)]);
var inst_35052 = (state_35133[(26)]);
var inst_35050 = (state_35133[(24)]);
var inst_35046 = (state_35133[(19)]);
var inst_35049 = (state_35133[(25)]);
var inst_35057 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35059 = (function (){var all_files = inst_35046;
var res_SINGLEQUOTE_ = inst_35049;
var res = inst_35050;
var files_not_loaded = inst_35052;
var dependencies_that_loaded = inst_35054;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35054,inst_35052,inst_35050,inst_35046,inst_35049,inst_35057,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35058){
var map__35189 = p__35058;
var map__35189__$1 = ((((!((map__35189 == null)))?((((map__35189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35189):map__35189);
var request_url = cljs.core.get.call(null,map__35189__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35054,inst_35052,inst_35050,inst_35046,inst_35049,inst_35057,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35060 = cljs.core.reverse.call(null,inst_35054);
var inst_35061 = cljs.core.map.call(null,inst_35059,inst_35060);
var inst_35062 = cljs.core.pr_str.call(null,inst_35061);
var inst_35063 = figwheel.client.utils.log.call(null,inst_35062);
var state_35133__$1 = (function (){var statearr_35191 = state_35133;
(statearr_35191[(31)] = inst_35057);

return statearr_35191;
})();
var statearr_35192_35259 = state_35133__$1;
(statearr_35192_35259[(2)] = inst_35063);

(statearr_35192_35259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (35))){
var state_35133__$1 = state_35133;
var statearr_35193_35260 = state_35133__$1;
(statearr_35193_35260[(2)] = true);

(statearr_35193_35260[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (19))){
var inst_35036 = (state_35133[(12)]);
var inst_35042 = figwheel.client.file_reloading.expand_files.call(null,inst_35036);
var state_35133__$1 = state_35133;
var statearr_35194_35261 = state_35133__$1;
(statearr_35194_35261[(2)] = inst_35042);

(statearr_35194_35261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (11))){
var state_35133__$1 = state_35133;
var statearr_35195_35262 = state_35133__$1;
(statearr_35195_35262[(2)] = null);

(statearr_35195_35262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (9))){
var inst_35025 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
var statearr_35196_35263 = state_35133__$1;
(statearr_35196_35263[(2)] = inst_35025);

(statearr_35196_35263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (5))){
var inst_34995 = (state_35133[(7)]);
var inst_34996 = (state_35133[(9)]);
var inst_34998 = (inst_34996 < inst_34995);
var inst_34999 = inst_34998;
var state_35133__$1 = state_35133;
if(cljs.core.truth_(inst_34999)){
var statearr_35197_35264 = state_35133__$1;
(statearr_35197_35264[(1)] = (7));

} else {
var statearr_35198_35265 = state_35133__$1;
(statearr_35198_35265[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (14))){
var inst_35006 = (state_35133[(22)]);
var inst_35015 = cljs.core.first.call(null,inst_35006);
var inst_35016 = figwheel.client.file_reloading.eval_body.call(null,inst_35015,opts);
var inst_35017 = cljs.core.next.call(null,inst_35006);
var inst_34993 = inst_35017;
var inst_34994 = null;
var inst_34995 = (0);
var inst_34996 = (0);
var state_35133__$1 = (function (){var statearr_35199 = state_35133;
(statearr_35199[(7)] = inst_34995);

(statearr_35199[(8)] = inst_34993);

(statearr_35199[(32)] = inst_35016);

(statearr_35199[(9)] = inst_34996);

(statearr_35199[(10)] = inst_34994);

return statearr_35199;
})();
var statearr_35200_35266 = state_35133__$1;
(statearr_35200_35266[(2)] = null);

(statearr_35200_35266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (45))){
var state_35133__$1 = state_35133;
var statearr_35201_35267 = state_35133__$1;
(statearr_35201_35267[(2)] = null);

(statearr_35201_35267[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (26))){
var inst_35054 = (state_35133[(23)]);
var inst_35052 = (state_35133[(26)]);
var inst_35050 = (state_35133[(24)]);
var inst_35046 = (state_35133[(19)]);
var inst_35049 = (state_35133[(25)]);
var inst_35069 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35071 = (function (){var all_files = inst_35046;
var res_SINGLEQUOTE_ = inst_35049;
var res = inst_35050;
var files_not_loaded = inst_35052;
var dependencies_that_loaded = inst_35054;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35054,inst_35052,inst_35050,inst_35046,inst_35049,inst_35069,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35070){
var map__35202 = p__35070;
var map__35202__$1 = ((((!((map__35202 == null)))?((((map__35202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35202):map__35202);
var namespace = cljs.core.get.call(null,map__35202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35202__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35054,inst_35052,inst_35050,inst_35046,inst_35049,inst_35069,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35072 = cljs.core.map.call(null,inst_35071,inst_35050);
var inst_35073 = cljs.core.pr_str.call(null,inst_35072);
var inst_35074 = figwheel.client.utils.log.call(null,inst_35073);
var inst_35075 = (function (){var all_files = inst_35046;
var res_SINGLEQUOTE_ = inst_35049;
var res = inst_35050;
var files_not_loaded = inst_35052;
var dependencies_that_loaded = inst_35054;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35054,inst_35052,inst_35050,inst_35046,inst_35049,inst_35069,inst_35071,inst_35072,inst_35073,inst_35074,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35054,inst_35052,inst_35050,inst_35046,inst_35049,inst_35069,inst_35071,inst_35072,inst_35073,inst_35074,state_val_35134,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35076 = setTimeout(inst_35075,(10));
var state_35133__$1 = (function (){var statearr_35204 = state_35133;
(statearr_35204[(33)] = inst_35074);

(statearr_35204[(34)] = inst_35069);

return statearr_35204;
})();
var statearr_35205_35268 = state_35133__$1;
(statearr_35205_35268[(2)] = inst_35076);

(statearr_35205_35268[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (16))){
var state_35133__$1 = state_35133;
var statearr_35206_35269 = state_35133__$1;
(statearr_35206_35269[(2)] = reload_dependents);

(statearr_35206_35269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (38))){
var inst_35086 = (state_35133[(16)]);
var inst_35104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35086);
var state_35133__$1 = state_35133;
var statearr_35207_35270 = state_35133__$1;
(statearr_35207_35270[(2)] = inst_35104);

(statearr_35207_35270[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (30))){
var state_35133__$1 = state_35133;
var statearr_35208_35271 = state_35133__$1;
(statearr_35208_35271[(2)] = null);

(statearr_35208_35271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (10))){
var inst_35006 = (state_35133[(22)]);
var inst_35008 = cljs.core.chunked_seq_QMARK_.call(null,inst_35006);
var state_35133__$1 = state_35133;
if(inst_35008){
var statearr_35209_35272 = state_35133__$1;
(statearr_35209_35272[(1)] = (13));

} else {
var statearr_35210_35273 = state_35133__$1;
(statearr_35210_35273[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (18))){
var inst_35040 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
if(cljs.core.truth_(inst_35040)){
var statearr_35211_35274 = state_35133__$1;
(statearr_35211_35274[(1)] = (19));

} else {
var statearr_35212_35275 = state_35133__$1;
(statearr_35212_35275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (42))){
var state_35133__$1 = state_35133;
var statearr_35213_35276 = state_35133__$1;
(statearr_35213_35276[(2)] = null);

(statearr_35213_35276[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (37))){
var inst_35099 = (state_35133[(2)]);
var state_35133__$1 = state_35133;
var statearr_35214_35277 = state_35133__$1;
(statearr_35214_35277[(2)] = inst_35099);

(statearr_35214_35277[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35134 === (8))){
var inst_34993 = (state_35133[(8)]);
var inst_35006 = (state_35133[(22)]);
var inst_35006__$1 = cljs.core.seq.call(null,inst_34993);
var state_35133__$1 = (function (){var statearr_35215 = state_35133;
(statearr_35215[(22)] = inst_35006__$1);

return statearr_35215;
})();
if(inst_35006__$1){
var statearr_35216_35278 = state_35133__$1;
(statearr_35216_35278[(1)] = (10));

} else {
var statearr_35217_35279 = state_35133__$1;
(statearr_35217_35279[(1)] = (11));

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
});})(c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31360__auto__,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto____0 = (function (){
var statearr_35218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35218[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto__);

(statearr_35218[(1)] = (1));

return statearr_35218;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto____1 = (function (state_35133){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_35133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e35219){if((e35219 instanceof Object)){
var ex__31364__auto__ = e35219;
var statearr_35220_35280 = state_35133;
(statearr_35220_35280[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35281 = state_35133;
state_35133 = G__35281;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto__ = function(state_35133){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto____1.call(this,state_35133);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31450__auto__ = (function (){var statearr_35221 = f__31449__auto__.call(null);
(statearr_35221[(6)] = c__31448__auto__);

return statearr_35221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto__,map__34978,map__34978__$1,opts,before_jsload,on_jsload,reload_dependents,map__34979,map__34979__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31448__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35284,link){
var map__35285 = p__35284;
var map__35285__$1 = ((((!((map__35285 == null)))?((((map__35285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35285):map__35285);
var file = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35285,map__35285__$1,file){
return (function (p1__35282_SHARP_,p2__35283_SHARP_){
if(cljs.core._EQ_.call(null,p1__35282_SHARP_,p2__35283_SHARP_)){
return p1__35282_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35285,map__35285__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35288){
var map__35289 = p__35288;
var map__35289__$1 = ((((!((map__35289 == null)))?((((map__35289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35289):map__35289);
var match_length = cljs.core.get.call(null,map__35289__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35289__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35287_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35287_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35291_SHARP_,p2__35292_SHARP_){
return cljs.core.assoc.call(null,p1__35291_SHARP_,cljs.core.get.call(null,p2__35292_SHARP_,key),p2__35292_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35293 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35293);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35293);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35294,p__35295){
var map__35296 = p__35294;
var map__35296__$1 = ((((!((map__35296 == null)))?((((map__35296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35296):map__35296);
var on_cssload = cljs.core.get.call(null,map__35296__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35297 = p__35295;
var map__35297__$1 = ((((!((map__35297 == null)))?((((map__35297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35297):map__35297);
var files_msg = map__35297__$1;
var files = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1505471599647
