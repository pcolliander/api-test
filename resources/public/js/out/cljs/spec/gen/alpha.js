// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28915__auto__,writer__28916__auto__,opt__28917__auto__){
return cljs.core._write.call(null,writer__28916__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29833 = arguments.length;
var i__29460__auto___29834 = (0);
while(true){
if((i__29460__auto___29834 < len__29459__auto___29833)){
args__29466__auto__.push((arguments[i__29460__auto___29834]));

var G__29835 = (i__29460__auto___29834 + (1));
i__29460__auto___29834 = G__29835;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq29832){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29832));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29837 = arguments.length;
var i__29460__auto___29838 = (0);
while(true){
if((i__29460__auto___29838 < len__29459__auto___29837)){
args__29466__auto__.push((arguments[i__29460__auto___29838]));

var G__29839 = (i__29460__auto___29838 + (1));
i__29460__auto___29838 = G__29839;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq29836){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29836));
});

var g_QMARK__29840 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_29841 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__29840){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__29840))
,null));
var mkg_29842 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__29840,g_29841){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__29840,g_29841))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__29840,g_29841,mkg_29842){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__29840).call(null,x);
});})(g_QMARK__29840,g_29841,mkg_29842))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__29840,g_29841,mkg_29842){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_29842).call(null,gfn);
});})(g_QMARK__29840,g_29841,mkg_29842))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__29840,g_29841,mkg_29842){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_29841).call(null,generator);
});})(g_QMARK__29840,g_29841,mkg_29842))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29552__auto___29862 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29552__auto___29862){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29863 = arguments.length;
var i__29460__auto___29864 = (0);
while(true){
if((i__29460__auto___29864 < len__29459__auto___29863)){
args__29466__auto__.push((arguments[i__29460__auto___29864]));

var G__29865 = (i__29460__auto___29864 + (1));
i__29460__auto___29864 = G__29865;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29862))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29862){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29862),args);
});})(g__29552__auto___29862))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29552__auto___29862){
return (function (seq29843){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29843));
});})(g__29552__auto___29862))
;


var g__29552__auto___29866 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29552__auto___29866){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29867 = arguments.length;
var i__29460__auto___29868 = (0);
while(true){
if((i__29460__auto___29868 < len__29459__auto___29867)){
args__29466__auto__.push((arguments[i__29460__auto___29868]));

var G__29869 = (i__29460__auto___29868 + (1));
i__29460__auto___29868 = G__29869;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29866))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29866){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29866),args);
});})(g__29552__auto___29866))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29552__auto___29866){
return (function (seq29844){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29844));
});})(g__29552__auto___29866))
;


var g__29552__auto___29870 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29552__auto___29870){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29871 = arguments.length;
var i__29460__auto___29872 = (0);
while(true){
if((i__29460__auto___29872 < len__29459__auto___29871)){
args__29466__auto__.push((arguments[i__29460__auto___29872]));

var G__29873 = (i__29460__auto___29872 + (1));
i__29460__auto___29872 = G__29873;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29870))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29870){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29870),args);
});})(g__29552__auto___29870))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29552__auto___29870){
return (function (seq29845){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29845));
});})(g__29552__auto___29870))
;


var g__29552__auto___29874 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29552__auto___29874){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29875 = arguments.length;
var i__29460__auto___29876 = (0);
while(true){
if((i__29460__auto___29876 < len__29459__auto___29875)){
args__29466__auto__.push((arguments[i__29460__auto___29876]));

var G__29877 = (i__29460__auto___29876 + (1));
i__29460__auto___29876 = G__29877;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29874))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29874){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29874),args);
});})(g__29552__auto___29874))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29552__auto___29874){
return (function (seq29846){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29846));
});})(g__29552__auto___29874))
;


var g__29552__auto___29878 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29552__auto___29878){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29879 = arguments.length;
var i__29460__auto___29880 = (0);
while(true){
if((i__29460__auto___29880 < len__29459__auto___29879)){
args__29466__auto__.push((arguments[i__29460__auto___29880]));

var G__29881 = (i__29460__auto___29880 + (1));
i__29460__auto___29880 = G__29881;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29878))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29878){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29878),args);
});})(g__29552__auto___29878))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29552__auto___29878){
return (function (seq29847){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29847));
});})(g__29552__auto___29878))
;


var g__29552__auto___29882 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29552__auto___29882){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29883 = arguments.length;
var i__29460__auto___29884 = (0);
while(true){
if((i__29460__auto___29884 < len__29459__auto___29883)){
args__29466__auto__.push((arguments[i__29460__auto___29884]));

var G__29885 = (i__29460__auto___29884 + (1));
i__29460__auto___29884 = G__29885;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29882))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29882){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29882),args);
});})(g__29552__auto___29882))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29552__auto___29882){
return (function (seq29848){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29848));
});})(g__29552__auto___29882))
;


var g__29552__auto___29886 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29552__auto___29886){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29887 = arguments.length;
var i__29460__auto___29888 = (0);
while(true){
if((i__29460__auto___29888 < len__29459__auto___29887)){
args__29466__auto__.push((arguments[i__29460__auto___29888]));

var G__29889 = (i__29460__auto___29888 + (1));
i__29460__auto___29888 = G__29889;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29886))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29886){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29886),args);
});})(g__29552__auto___29886))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29552__auto___29886){
return (function (seq29849){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29849));
});})(g__29552__auto___29886))
;


var g__29552__auto___29890 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29552__auto___29890){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29891 = arguments.length;
var i__29460__auto___29892 = (0);
while(true){
if((i__29460__auto___29892 < len__29459__auto___29891)){
args__29466__auto__.push((arguments[i__29460__auto___29892]));

var G__29893 = (i__29460__auto___29892 + (1));
i__29460__auto___29892 = G__29893;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29890))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29890){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29890),args);
});})(g__29552__auto___29890))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29552__auto___29890){
return (function (seq29850){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29850));
});})(g__29552__auto___29890))
;


var g__29552__auto___29894 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29552__auto___29894){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29895 = arguments.length;
var i__29460__auto___29896 = (0);
while(true){
if((i__29460__auto___29896 < len__29459__auto___29895)){
args__29466__auto__.push((arguments[i__29460__auto___29896]));

var G__29897 = (i__29460__auto___29896 + (1));
i__29460__auto___29896 = G__29897;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29894))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29894){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29894),args);
});})(g__29552__auto___29894))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29552__auto___29894){
return (function (seq29851){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29851));
});})(g__29552__auto___29894))
;


var g__29552__auto___29898 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29552__auto___29898){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29899 = arguments.length;
var i__29460__auto___29900 = (0);
while(true){
if((i__29460__auto___29900 < len__29459__auto___29899)){
args__29466__auto__.push((arguments[i__29460__auto___29900]));

var G__29901 = (i__29460__auto___29900 + (1));
i__29460__auto___29900 = G__29901;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29898))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29898){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29898),args);
});})(g__29552__auto___29898))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29552__auto___29898){
return (function (seq29852){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29852));
});})(g__29552__auto___29898))
;


var g__29552__auto___29902 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29552__auto___29902){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29903 = arguments.length;
var i__29460__auto___29904 = (0);
while(true){
if((i__29460__auto___29904 < len__29459__auto___29903)){
args__29466__auto__.push((arguments[i__29460__auto___29904]));

var G__29905 = (i__29460__auto___29904 + (1));
i__29460__auto___29904 = G__29905;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29902))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29902){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29902),args);
});})(g__29552__auto___29902))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29552__auto___29902){
return (function (seq29853){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29853));
});})(g__29552__auto___29902))
;


var g__29552__auto___29906 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29552__auto___29906){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29907 = arguments.length;
var i__29460__auto___29908 = (0);
while(true){
if((i__29460__auto___29908 < len__29459__auto___29907)){
args__29466__auto__.push((arguments[i__29460__auto___29908]));

var G__29909 = (i__29460__auto___29908 + (1));
i__29460__auto___29908 = G__29909;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29906))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29906){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29906),args);
});})(g__29552__auto___29906))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29552__auto___29906){
return (function (seq29854){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29854));
});})(g__29552__auto___29906))
;


var g__29552__auto___29910 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29552__auto___29910){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29911 = arguments.length;
var i__29460__auto___29912 = (0);
while(true){
if((i__29460__auto___29912 < len__29459__auto___29911)){
args__29466__auto__.push((arguments[i__29460__auto___29912]));

var G__29913 = (i__29460__auto___29912 + (1));
i__29460__auto___29912 = G__29913;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29910))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29910){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29910),args);
});})(g__29552__auto___29910))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29552__auto___29910){
return (function (seq29855){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29855));
});})(g__29552__auto___29910))
;


var g__29552__auto___29914 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29552__auto___29914){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29915 = arguments.length;
var i__29460__auto___29916 = (0);
while(true){
if((i__29460__auto___29916 < len__29459__auto___29915)){
args__29466__auto__.push((arguments[i__29460__auto___29916]));

var G__29917 = (i__29460__auto___29916 + (1));
i__29460__auto___29916 = G__29917;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29914))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29914){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29914),args);
});})(g__29552__auto___29914))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29552__auto___29914){
return (function (seq29856){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29856));
});})(g__29552__auto___29914))
;


var g__29552__auto___29918 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29552__auto___29918){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29919 = arguments.length;
var i__29460__auto___29920 = (0);
while(true){
if((i__29460__auto___29920 < len__29459__auto___29919)){
args__29466__auto__.push((arguments[i__29460__auto___29920]));

var G__29921 = (i__29460__auto___29920 + (1));
i__29460__auto___29920 = G__29921;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29918))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29918){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29918),args);
});})(g__29552__auto___29918))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29552__auto___29918){
return (function (seq29857){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29857));
});})(g__29552__auto___29918))
;


var g__29552__auto___29922 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29552__auto___29922){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29923 = arguments.length;
var i__29460__auto___29924 = (0);
while(true){
if((i__29460__auto___29924 < len__29459__auto___29923)){
args__29466__auto__.push((arguments[i__29460__auto___29924]));

var G__29925 = (i__29460__auto___29924 + (1));
i__29460__auto___29924 = G__29925;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29922))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29922){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29922),args);
});})(g__29552__auto___29922))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29552__auto___29922){
return (function (seq29858){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29858));
});})(g__29552__auto___29922))
;


var g__29552__auto___29926 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29552__auto___29926){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29927 = arguments.length;
var i__29460__auto___29928 = (0);
while(true){
if((i__29460__auto___29928 < len__29459__auto___29927)){
args__29466__auto__.push((arguments[i__29460__auto___29928]));

var G__29929 = (i__29460__auto___29928 + (1));
i__29460__auto___29928 = G__29929;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29926))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29926){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29926),args);
});})(g__29552__auto___29926))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29552__auto___29926){
return (function (seq29859){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29859));
});})(g__29552__auto___29926))
;


var g__29552__auto___29930 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29552__auto___29930){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29931 = arguments.length;
var i__29460__auto___29932 = (0);
while(true){
if((i__29460__auto___29932 < len__29459__auto___29931)){
args__29466__auto__.push((arguments[i__29460__auto___29932]));

var G__29933 = (i__29460__auto___29932 + (1));
i__29460__auto___29932 = G__29933;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29930))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29930){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29930),args);
});})(g__29552__auto___29930))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29552__auto___29930){
return (function (seq29860){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29860));
});})(g__29552__auto___29930))
;


var g__29552__auto___29934 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29552__auto___29934){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29935 = arguments.length;
var i__29460__auto___29936 = (0);
while(true){
if((i__29460__auto___29936 < len__29459__auto___29935)){
args__29466__auto__.push((arguments[i__29460__auto___29936]));

var G__29937 = (i__29460__auto___29936 + (1));
i__29460__auto___29936 = G__29937;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___29934))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___29934){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___29934),args);
});})(g__29552__auto___29934))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29552__auto___29934){
return (function (seq29861){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29861));
});})(g__29552__auto___29934))
;

var g__29565__auto___29959 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29565__auto___29959){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29960 = arguments.length;
var i__29460__auto___29961 = (0);
while(true){
if((i__29460__auto___29961 < len__29459__auto___29960)){
args__29466__auto__.push((arguments[i__29460__auto___29961]));

var G__29962 = (i__29460__auto___29961 + (1));
i__29460__auto___29961 = G__29962;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___29959))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___29959){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___29959);
});})(g__29565__auto___29959))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29565__auto___29959){
return (function (seq29938){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29938));
});})(g__29565__auto___29959))
;


var g__29565__auto___29963 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29565__auto___29963){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29964 = arguments.length;
var i__29460__auto___29965 = (0);
while(true){
if((i__29460__auto___29965 < len__29459__auto___29964)){
args__29466__auto__.push((arguments[i__29460__auto___29965]));

var G__29966 = (i__29460__auto___29965 + (1));
i__29460__auto___29965 = G__29966;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___29963))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___29963){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___29963);
});})(g__29565__auto___29963))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29565__auto___29963){
return (function (seq29939){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29939));
});})(g__29565__auto___29963))
;


var g__29565__auto___29967 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29565__auto___29967){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29968 = arguments.length;
var i__29460__auto___29969 = (0);
while(true){
if((i__29460__auto___29969 < len__29459__auto___29968)){
args__29466__auto__.push((arguments[i__29460__auto___29969]));

var G__29970 = (i__29460__auto___29969 + (1));
i__29460__auto___29969 = G__29970;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___29967))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___29967){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___29967);
});})(g__29565__auto___29967))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29565__auto___29967){
return (function (seq29940){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29940));
});})(g__29565__auto___29967))
;


var g__29565__auto___29971 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29565__auto___29971){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29972 = arguments.length;
var i__29460__auto___29973 = (0);
while(true){
if((i__29460__auto___29973 < len__29459__auto___29972)){
args__29466__auto__.push((arguments[i__29460__auto___29973]));

var G__29974 = (i__29460__auto___29973 + (1));
i__29460__auto___29973 = G__29974;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___29971))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___29971){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___29971);
});})(g__29565__auto___29971))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29565__auto___29971){
return (function (seq29941){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29941));
});})(g__29565__auto___29971))
;


var g__29565__auto___29975 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29565__auto___29975){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29976 = arguments.length;
var i__29460__auto___29977 = (0);
while(true){
if((i__29460__auto___29977 < len__29459__auto___29976)){
args__29466__auto__.push((arguments[i__29460__auto___29977]));

var G__29978 = (i__29460__auto___29977 + (1));
i__29460__auto___29977 = G__29978;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___29975))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___29975){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___29975);
});})(g__29565__auto___29975))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29565__auto___29975){
return (function (seq29942){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29942));
});})(g__29565__auto___29975))
;


var g__29565__auto___29979 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29565__auto___29979){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29980 = arguments.length;
var i__29460__auto___29981 = (0);
while(true){
if((i__29460__auto___29981 < len__29459__auto___29980)){
args__29466__auto__.push((arguments[i__29460__auto___29981]));

var G__29982 = (i__29460__auto___29981 + (1));
i__29460__auto___29981 = G__29982;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___29979))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___29979){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___29979);
});})(g__29565__auto___29979))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29565__auto___29979){
return (function (seq29943){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29943));
});})(g__29565__auto___29979))
;


var g__29565__auto___29983 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29565__auto___29983){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29984 = arguments.length;
var i__29460__auto___29985 = (0);
while(true){
if((i__29460__auto___29985 < len__29459__auto___29984)){
args__29466__auto__.push((arguments[i__29460__auto___29985]));

var G__29986 = (i__29460__auto___29985 + (1));
i__29460__auto___29985 = G__29986;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___29983))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___29983){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___29983);
});})(g__29565__auto___29983))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29565__auto___29983){
return (function (seq29944){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29944));
});})(g__29565__auto___29983))
;


var g__29565__auto___29987 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29565__auto___29987){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29988 = arguments.length;
var i__29460__auto___29989 = (0);
while(true){
if((i__29460__auto___29989 < len__29459__auto___29988)){
args__29466__auto__.push((arguments[i__29460__auto___29989]));

var G__29990 = (i__29460__auto___29989 + (1));
i__29460__auto___29989 = G__29990;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___29987))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___29987){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___29987);
});})(g__29565__auto___29987))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29565__auto___29987){
return (function (seq29945){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29945));
});})(g__29565__auto___29987))
;


var g__29565__auto___29991 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29565__auto___29991){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29992 = arguments.length;
var i__29460__auto___29993 = (0);
while(true){
if((i__29460__auto___29993 < len__29459__auto___29992)){
args__29466__auto__.push((arguments[i__29460__auto___29993]));

var G__29994 = (i__29460__auto___29993 + (1));
i__29460__auto___29993 = G__29994;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___29991))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___29991){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___29991);
});})(g__29565__auto___29991))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29565__auto___29991){
return (function (seq29946){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29946));
});})(g__29565__auto___29991))
;


var g__29565__auto___29995 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29565__auto___29995){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29466__auto__ = [];
var len__29459__auto___29996 = arguments.length;
var i__29460__auto___29997 = (0);
while(true){
if((i__29460__auto___29997 < len__29459__auto___29996)){
args__29466__auto__.push((arguments[i__29460__auto___29997]));

var G__29998 = (i__29460__auto___29997 + (1));
i__29460__auto___29997 = G__29998;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___29995))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___29995){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___29995);
});})(g__29565__auto___29995))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29565__auto___29995){
return (function (seq29947){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29947));
});})(g__29565__auto___29995))
;


var g__29565__auto___29999 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29565__auto___29999){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30000 = arguments.length;
var i__29460__auto___30001 = (0);
while(true){
if((i__29460__auto___30001 < len__29459__auto___30000)){
args__29466__auto__.push((arguments[i__29460__auto___30001]));

var G__30002 = (i__29460__auto___30001 + (1));
i__29460__auto___30001 = G__30002;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___29999))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___29999){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___29999);
});})(g__29565__auto___29999))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29565__auto___29999){
return (function (seq29948){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29948));
});})(g__29565__auto___29999))
;


var g__29565__auto___30003 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29565__auto___30003){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30004 = arguments.length;
var i__29460__auto___30005 = (0);
while(true){
if((i__29460__auto___30005 < len__29459__auto___30004)){
args__29466__auto__.push((arguments[i__29460__auto___30005]));

var G__30006 = (i__29460__auto___30005 + (1));
i__29460__auto___30005 = G__30006;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___30003))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___30003){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___30003);
});})(g__29565__auto___30003))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29565__auto___30003){
return (function (seq29949){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29949));
});})(g__29565__auto___30003))
;


var g__29565__auto___30007 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29565__auto___30007){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30008 = arguments.length;
var i__29460__auto___30009 = (0);
while(true){
if((i__29460__auto___30009 < len__29459__auto___30008)){
args__29466__auto__.push((arguments[i__29460__auto___30009]));

var G__30010 = (i__29460__auto___30009 + (1));
i__29460__auto___30009 = G__30010;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___30007))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___30007){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___30007);
});})(g__29565__auto___30007))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29565__auto___30007){
return (function (seq29950){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29950));
});})(g__29565__auto___30007))
;


var g__29565__auto___30011 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29565__auto___30011){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30012 = arguments.length;
var i__29460__auto___30013 = (0);
while(true){
if((i__29460__auto___30013 < len__29459__auto___30012)){
args__29466__auto__.push((arguments[i__29460__auto___30013]));

var G__30014 = (i__29460__auto___30013 + (1));
i__29460__auto___30013 = G__30014;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___30011))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___30011){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___30011);
});})(g__29565__auto___30011))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29565__auto___30011){
return (function (seq29951){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29951));
});})(g__29565__auto___30011))
;


var g__29565__auto___30015 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29565__auto___30015){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30016 = arguments.length;
var i__29460__auto___30017 = (0);
while(true){
if((i__29460__auto___30017 < len__29459__auto___30016)){
args__29466__auto__.push((arguments[i__29460__auto___30017]));

var G__30018 = (i__29460__auto___30017 + (1));
i__29460__auto___30017 = G__30018;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___30015))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___30015){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___30015);
});})(g__29565__auto___30015))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29565__auto___30015){
return (function (seq29952){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29952));
});})(g__29565__auto___30015))
;


var g__29565__auto___30019 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29565__auto___30019){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30020 = arguments.length;
var i__29460__auto___30021 = (0);
while(true){
if((i__29460__auto___30021 < len__29459__auto___30020)){
args__29466__auto__.push((arguments[i__29460__auto___30021]));

var G__30022 = (i__29460__auto___30021 + (1));
i__29460__auto___30021 = G__30022;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___30019))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___30019){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___30019);
});})(g__29565__auto___30019))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29565__auto___30019){
return (function (seq29953){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29953));
});})(g__29565__auto___30019))
;


var g__29565__auto___30023 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29565__auto___30023){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30024 = arguments.length;
var i__29460__auto___30025 = (0);
while(true){
if((i__29460__auto___30025 < len__29459__auto___30024)){
args__29466__auto__.push((arguments[i__29460__auto___30025]));

var G__30026 = (i__29460__auto___30025 + (1));
i__29460__auto___30025 = G__30026;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___30023))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___30023){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___30023);
});})(g__29565__auto___30023))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29565__auto___30023){
return (function (seq29954){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29954));
});})(g__29565__auto___30023))
;


var g__29565__auto___30027 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29565__auto___30027){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30028 = arguments.length;
var i__29460__auto___30029 = (0);
while(true){
if((i__29460__auto___30029 < len__29459__auto___30028)){
args__29466__auto__.push((arguments[i__29460__auto___30029]));

var G__30030 = (i__29460__auto___30029 + (1));
i__29460__auto___30029 = G__30030;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___30027))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___30027){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___30027);
});})(g__29565__auto___30027))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29565__auto___30027){
return (function (seq29955){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29955));
});})(g__29565__auto___30027))
;


var g__29565__auto___30031 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29565__auto___30031){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30032 = arguments.length;
var i__29460__auto___30033 = (0);
while(true){
if((i__29460__auto___30033 < len__29459__auto___30032)){
args__29466__auto__.push((arguments[i__29460__auto___30033]));

var G__30034 = (i__29460__auto___30033 + (1));
i__29460__auto___30033 = G__30034;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___30031))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___30031){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___30031);
});})(g__29565__auto___30031))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29565__auto___30031){
return (function (seq29956){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29956));
});})(g__29565__auto___30031))
;


var g__29565__auto___30035 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29565__auto___30035){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30036 = arguments.length;
var i__29460__auto___30037 = (0);
while(true){
if((i__29460__auto___30037 < len__29459__auto___30036)){
args__29466__auto__.push((arguments[i__29460__auto___30037]));

var G__30038 = (i__29460__auto___30037 + (1));
i__29460__auto___30037 = G__30038;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___30035))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___30035){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___30035);
});})(g__29565__auto___30035))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29565__auto___30035){
return (function (seq29957){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29957));
});})(g__29565__auto___30035))
;


var g__29565__auto___30039 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29565__auto___30039){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30040 = arguments.length;
var i__29460__auto___30041 = (0);
while(true){
if((i__29460__auto___30041 < len__29459__auto___30040)){
args__29466__auto__.push((arguments[i__29460__auto___30041]));

var G__30042 = (i__29460__auto___30041 + (1));
i__29460__auto___30041 = G__30042;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___30039))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___30039){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___30039);
});})(g__29565__auto___30039))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29565__auto___30039){
return (function (seq29958){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29958));
});})(g__29565__auto___30039))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29466__auto__ = [];
var len__29459__auto___30045 = arguments.length;
var i__29460__auto___30046 = (0);
while(true){
if((i__29460__auto___30046 < len__29459__auto___30045)){
args__29466__auto__.push((arguments[i__29460__auto___30046]));

var G__30047 = (i__29460__auto___30046 + (1));
i__29460__auto___30046 = G__30047;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__30043_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30043_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq30044){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30044));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__30048_SHARP_){
return (new Date(p1__30048_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1505471592767
