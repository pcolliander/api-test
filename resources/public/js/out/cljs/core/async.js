// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31494 = arguments.length;
switch (G__31494) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31495 = (function (f,blockable,meta31496){
this.f = f;
this.blockable = blockable;
this.meta31496 = meta31496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31497,meta31496__$1){
var self__ = this;
var _31497__$1 = this;
return (new cljs.core.async.t_cljs$core$async31495(self__.f,self__.blockable,meta31496__$1));
});

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31497){
var self__ = this;
var _31497__$1 = this;
return self__.meta31496;
});

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31495.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31496","meta31496",892431758,null)], null);
});

cljs.core.async.t_cljs$core$async31495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31495";

cljs.core.async.t_cljs$core$async31495.cljs$lang$ctorPrWriter = (function (this__28915__auto__,writer__28916__auto__,opt__28917__auto__){
return cljs.core._write.call(null,writer__28916__auto__,"cljs.core.async/t_cljs$core$async31495");
});

cljs.core.async.__GT_t_cljs$core$async31495 = (function cljs$core$async$__GT_t_cljs$core$async31495(f__$1,blockable__$1,meta31496){
return (new cljs.core.async.t_cljs$core$async31495(f__$1,blockable__$1,meta31496));
});

}

return (new cljs.core.async.t_cljs$core$async31495(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31501 = arguments.length;
switch (G__31501) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31504 = arguments.length;
switch (G__31504) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31507 = arguments.length;
switch (G__31507) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31509 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31509);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31509,ret){
return (function (){
return fn1.call(null,val_31509);
});})(val_31509,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31511 = arguments.length;
switch (G__31511) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29235__auto___31513 = n;
var x_31514 = (0);
while(true){
if((x_31514 < n__29235__auto___31513)){
(a[x_31514] = (0));

var G__31515 = (x_31514 + (1));
x_31514 = G__31515;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31516 = (i + (1));
i = G__31516;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31517 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31517 = (function (flag,meta31518){
this.flag = flag;
this.meta31518 = meta31518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31519,meta31518__$1){
var self__ = this;
var _31519__$1 = this;
return (new cljs.core.async.t_cljs$core$async31517(self__.flag,meta31518__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31519){
var self__ = this;
var _31519__$1 = this;
return self__.meta31518;
});})(flag))
;

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31517.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31518","meta31518",536170084,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31517";

cljs.core.async.t_cljs$core$async31517.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28915__auto__,writer__28916__auto__,opt__28917__auto__){
return cljs.core._write.call(null,writer__28916__auto__,"cljs.core.async/t_cljs$core$async31517");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31517 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31517(flag__$1,meta31518){
return (new cljs.core.async.t_cljs$core$async31517(flag__$1,meta31518));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31517(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31520 = (function (flag,cb,meta31521){
this.flag = flag;
this.cb = cb;
this.meta31521 = meta31521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31522,meta31521__$1){
var self__ = this;
var _31522__$1 = this;
return (new cljs.core.async.t_cljs$core$async31520(self__.flag,self__.cb,meta31521__$1));
});

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31522){
var self__ = this;
var _31522__$1 = this;
return self__.meta31521;
});

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31521","meta31521",1795947000,null)], null);
});

cljs.core.async.t_cljs$core$async31520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31520";

cljs.core.async.t_cljs$core$async31520.cljs$lang$ctorPrWriter = (function (this__28915__auto__,writer__28916__auto__,opt__28917__auto__){
return cljs.core._write.call(null,writer__28916__auto__,"cljs.core.async/t_cljs$core$async31520");
});

cljs.core.async.__GT_t_cljs$core$async31520 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31520(flag__$1,cb__$1,meta31521){
return (new cljs.core.async.t_cljs$core$async31520(flag__$1,cb__$1,meta31521));
});

}

return (new cljs.core.async.t_cljs$core$async31520(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31523_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31523_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31524_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31524_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28290__auto__ = wport;
if(cljs.core.truth_(or__28290__auto__)){
return or__28290__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31525 = (i + (1));
i = G__31525;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28290__auto__ = ret;
if(cljs.core.truth_(or__28290__auto__)){
return or__28290__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28278__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28278__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28278__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29466__auto__ = [];
var len__29459__auto___31531 = arguments.length;
var i__29460__auto___31532 = (0);
while(true){
if((i__29460__auto___31532 < len__29459__auto___31531)){
args__29466__auto__.push((arguments[i__29460__auto___31532]));

var G__31533 = (i__29460__auto___31532 + (1));
i__29460__auto___31532 = G__31533;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((1) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29467__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31528){
var map__31529 = p__31528;
var map__31529__$1 = ((((!((map__31529 == null)))?((((map__31529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31529):map__31529);
var opts = map__31529__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31526){
var G__31527 = cljs.core.first.call(null,seq31526);
var seq31526__$1 = cljs.core.next.call(null,seq31526);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31527,seq31526__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31535 = arguments.length;
switch (G__31535) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31448__auto___31581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___31581){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___31581){
return (function (state_31559){
var state_val_31560 = (state_31559[(1)]);
if((state_val_31560 === (7))){
var inst_31555 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31561_31582 = state_31559__$1;
(statearr_31561_31582[(2)] = inst_31555);

(statearr_31561_31582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (1))){
var state_31559__$1 = state_31559;
var statearr_31562_31583 = state_31559__$1;
(statearr_31562_31583[(2)] = null);

(statearr_31562_31583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (4))){
var inst_31538 = (state_31559[(7)]);
var inst_31538__$1 = (state_31559[(2)]);
var inst_31539 = (inst_31538__$1 == null);
var state_31559__$1 = (function (){var statearr_31563 = state_31559;
(statearr_31563[(7)] = inst_31538__$1);

return statearr_31563;
})();
if(cljs.core.truth_(inst_31539)){
var statearr_31564_31584 = state_31559__$1;
(statearr_31564_31584[(1)] = (5));

} else {
var statearr_31565_31585 = state_31559__$1;
(statearr_31565_31585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (13))){
var state_31559__$1 = state_31559;
var statearr_31566_31586 = state_31559__$1;
(statearr_31566_31586[(2)] = null);

(statearr_31566_31586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (6))){
var inst_31538 = (state_31559[(7)]);
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31559__$1,(11),to,inst_31538);
} else {
if((state_val_31560 === (3))){
var inst_31557 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31559__$1,inst_31557);
} else {
if((state_val_31560 === (12))){
var state_31559__$1 = state_31559;
var statearr_31567_31587 = state_31559__$1;
(statearr_31567_31587[(2)] = null);

(statearr_31567_31587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (2))){
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31559__$1,(4),from);
} else {
if((state_val_31560 === (11))){
var inst_31548 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
if(cljs.core.truth_(inst_31548)){
var statearr_31568_31588 = state_31559__$1;
(statearr_31568_31588[(1)] = (12));

} else {
var statearr_31569_31589 = state_31559__$1;
(statearr_31569_31589[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (9))){
var state_31559__$1 = state_31559;
var statearr_31570_31590 = state_31559__$1;
(statearr_31570_31590[(2)] = null);

(statearr_31570_31590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (5))){
var state_31559__$1 = state_31559;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31571_31591 = state_31559__$1;
(statearr_31571_31591[(1)] = (8));

} else {
var statearr_31572_31592 = state_31559__$1;
(statearr_31572_31592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (14))){
var inst_31553 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31573_31593 = state_31559__$1;
(statearr_31573_31593[(2)] = inst_31553);

(statearr_31573_31593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (10))){
var inst_31545 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31574_31594 = state_31559__$1;
(statearr_31574_31594[(2)] = inst_31545);

(statearr_31574_31594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (8))){
var inst_31542 = cljs.core.async.close_BANG_.call(null,to);
var state_31559__$1 = state_31559;
var statearr_31575_31595 = state_31559__$1;
(statearr_31575_31595[(2)] = inst_31542);

(statearr_31575_31595[(1)] = (10));


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
});})(c__31448__auto___31581))
;
return ((function (switch__31360__auto__,c__31448__auto___31581){
return (function() {
var cljs$core$async$state_machine__31361__auto__ = null;
var cljs$core$async$state_machine__31361__auto____0 = (function (){
var statearr_31576 = [null,null,null,null,null,null,null,null];
(statearr_31576[(0)] = cljs$core$async$state_machine__31361__auto__);

(statearr_31576[(1)] = (1));

return statearr_31576;
});
var cljs$core$async$state_machine__31361__auto____1 = (function (state_31559){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_31559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e31577){if((e31577 instanceof Object)){
var ex__31364__auto__ = e31577;
var statearr_31578_31596 = state_31559;
(statearr_31578_31596[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31597 = state_31559;
state_31559 = G__31597;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$state_machine__31361__auto__ = function(state_31559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31361__auto____1.call(this,state_31559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31361__auto____0;
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31361__auto____1;
return cljs$core$async$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___31581))
})();
var state__31450__auto__ = (function (){var statearr_31579 = f__31449__auto__.call(null);
(statearr_31579[(6)] = c__31448__auto___31581);

return statearr_31579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___31581))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31598){
var vec__31599 = p__31598;
var v = cljs.core.nth.call(null,vec__31599,(0),null);
var p = cljs.core.nth.call(null,vec__31599,(1),null);
var job = vec__31599;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31448__auto___31770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___31770,res,vec__31599,v,p,job,jobs,results){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___31770,res,vec__31599,v,p,job,jobs,results){
return (function (state_31606){
var state_val_31607 = (state_31606[(1)]);
if((state_val_31607 === (1))){
var state_31606__$1 = state_31606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31606__$1,(2),res,v);
} else {
if((state_val_31607 === (2))){
var inst_31603 = (state_31606[(2)]);
var inst_31604 = cljs.core.async.close_BANG_.call(null,res);
var state_31606__$1 = (function (){var statearr_31608 = state_31606;
(statearr_31608[(7)] = inst_31603);

return statearr_31608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31606__$1,inst_31604);
} else {
return null;
}
}
});})(c__31448__auto___31770,res,vec__31599,v,p,job,jobs,results))
;
return ((function (switch__31360__auto__,c__31448__auto___31770,res,vec__31599,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0 = (function (){
var statearr_31609 = [null,null,null,null,null,null,null,null];
(statearr_31609[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__);

(statearr_31609[(1)] = (1));

return statearr_31609;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1 = (function (state_31606){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_31606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e31610){if((e31610 instanceof Object)){
var ex__31364__auto__ = e31610;
var statearr_31611_31771 = state_31606;
(statearr_31611_31771[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31772 = state_31606;
state_31606 = G__31772;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__ = function(state_31606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1.call(this,state_31606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___31770,res,vec__31599,v,p,job,jobs,results))
})();
var state__31450__auto__ = (function (){var statearr_31612 = f__31449__auto__.call(null);
(statearr_31612[(6)] = c__31448__auto___31770);

return statearr_31612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___31770,res,vec__31599,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31613){
var vec__31614 = p__31613;
var v = cljs.core.nth.call(null,vec__31614,(0),null);
var p = cljs.core.nth.call(null,vec__31614,(1),null);
var job = vec__31614;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29235__auto___31773 = n;
var __31774 = (0);
while(true){
if((__31774 < n__29235__auto___31773)){
var G__31617_31775 = type;
var G__31617_31776__$1 = (((G__31617_31775 instanceof cljs.core.Keyword))?G__31617_31775.fqn:null);
switch (G__31617_31776__$1) {
case "compute":
var c__31448__auto___31778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31774,c__31448__auto___31778,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (__31774,c__31448__auto___31778,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async){
return (function (state_31630){
var state_val_31631 = (state_31630[(1)]);
if((state_val_31631 === (1))){
var state_31630__$1 = state_31630;
var statearr_31632_31779 = state_31630__$1;
(statearr_31632_31779[(2)] = null);

(statearr_31632_31779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (2))){
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(4),jobs);
} else {
if((state_val_31631 === (3))){
var inst_31628 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31630__$1,inst_31628);
} else {
if((state_val_31631 === (4))){
var inst_31620 = (state_31630[(2)]);
var inst_31621 = process.call(null,inst_31620);
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31621)){
var statearr_31633_31780 = state_31630__$1;
(statearr_31633_31780[(1)] = (5));

} else {
var statearr_31634_31781 = state_31630__$1;
(statearr_31634_31781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (5))){
var state_31630__$1 = state_31630;
var statearr_31635_31782 = state_31630__$1;
(statearr_31635_31782[(2)] = null);

(statearr_31635_31782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (6))){
var state_31630__$1 = state_31630;
var statearr_31636_31783 = state_31630__$1;
(statearr_31636_31783[(2)] = null);

(statearr_31636_31783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (7))){
var inst_31626 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31637_31784 = state_31630__$1;
(statearr_31637_31784[(2)] = inst_31626);

(statearr_31637_31784[(1)] = (3));


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
});})(__31774,c__31448__auto___31778,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async))
;
return ((function (__31774,switch__31360__auto__,c__31448__auto___31778,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0 = (function (){
var statearr_31638 = [null,null,null,null,null,null,null];
(statearr_31638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__);

(statearr_31638[(1)] = (1));

return statearr_31638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1 = (function (state_31630){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_31630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e31639){if((e31639 instanceof Object)){
var ex__31364__auto__ = e31639;
var statearr_31640_31785 = state_31630;
(statearr_31640_31785[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31786 = state_31630;
state_31630 = G__31786;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__ = function(state_31630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1.call(this,state_31630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__;
})()
;})(__31774,switch__31360__auto__,c__31448__auto___31778,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async))
})();
var state__31450__auto__ = (function (){var statearr_31641 = f__31449__auto__.call(null);
(statearr_31641[(6)] = c__31448__auto___31778);

return statearr_31641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(__31774,c__31448__auto___31778,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async))
);


break;
case "async":
var c__31448__auto___31787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31774,c__31448__auto___31787,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (__31774,c__31448__auto___31787,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async){
return (function (state_31654){
var state_val_31655 = (state_31654[(1)]);
if((state_val_31655 === (1))){
var state_31654__$1 = state_31654;
var statearr_31656_31788 = state_31654__$1;
(statearr_31656_31788[(2)] = null);

(statearr_31656_31788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (2))){
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31654__$1,(4),jobs);
} else {
if((state_val_31655 === (3))){
var inst_31652 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31654__$1,inst_31652);
} else {
if((state_val_31655 === (4))){
var inst_31644 = (state_31654[(2)]);
var inst_31645 = async.call(null,inst_31644);
var state_31654__$1 = state_31654;
if(cljs.core.truth_(inst_31645)){
var statearr_31657_31789 = state_31654__$1;
(statearr_31657_31789[(1)] = (5));

} else {
var statearr_31658_31790 = state_31654__$1;
(statearr_31658_31790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (5))){
var state_31654__$1 = state_31654;
var statearr_31659_31791 = state_31654__$1;
(statearr_31659_31791[(2)] = null);

(statearr_31659_31791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (6))){
var state_31654__$1 = state_31654;
var statearr_31660_31792 = state_31654__$1;
(statearr_31660_31792[(2)] = null);

(statearr_31660_31792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (7))){
var inst_31650 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31661_31793 = state_31654__$1;
(statearr_31661_31793[(2)] = inst_31650);

(statearr_31661_31793[(1)] = (3));


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
});})(__31774,c__31448__auto___31787,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async))
;
return ((function (__31774,switch__31360__auto__,c__31448__auto___31787,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0 = (function (){
var statearr_31662 = [null,null,null,null,null,null,null];
(statearr_31662[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__);

(statearr_31662[(1)] = (1));

return statearr_31662;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1 = (function (state_31654){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_31654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e31663){if((e31663 instanceof Object)){
var ex__31364__auto__ = e31663;
var statearr_31664_31794 = state_31654;
(statearr_31664_31794[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31795 = state_31654;
state_31654 = G__31795;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__ = function(state_31654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1.call(this,state_31654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__;
})()
;})(__31774,switch__31360__auto__,c__31448__auto___31787,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async))
})();
var state__31450__auto__ = (function (){var statearr_31665 = f__31449__auto__.call(null);
(statearr_31665[(6)] = c__31448__auto___31787);

return statearr_31665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(__31774,c__31448__auto___31787,G__31617_31775,G__31617_31776__$1,n__29235__auto___31773,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31617_31776__$1)].join('')));

}

var G__31796 = (__31774 + (1));
__31774 = G__31796;
continue;
} else {
}
break;
}

var c__31448__auto___31797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___31797,jobs,results,process,async){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___31797,jobs,results,process,async){
return (function (state_31687){
var state_val_31688 = (state_31687[(1)]);
if((state_val_31688 === (1))){
var state_31687__$1 = state_31687;
var statearr_31689_31798 = state_31687__$1;
(statearr_31689_31798[(2)] = null);

(statearr_31689_31798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (2))){
var state_31687__$1 = state_31687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31687__$1,(4),from);
} else {
if((state_val_31688 === (3))){
var inst_31685 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31687__$1,inst_31685);
} else {
if((state_val_31688 === (4))){
var inst_31668 = (state_31687[(7)]);
var inst_31668__$1 = (state_31687[(2)]);
var inst_31669 = (inst_31668__$1 == null);
var state_31687__$1 = (function (){var statearr_31690 = state_31687;
(statearr_31690[(7)] = inst_31668__$1);

return statearr_31690;
})();
if(cljs.core.truth_(inst_31669)){
var statearr_31691_31799 = state_31687__$1;
(statearr_31691_31799[(1)] = (5));

} else {
var statearr_31692_31800 = state_31687__$1;
(statearr_31692_31800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (5))){
var inst_31671 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31687__$1 = state_31687;
var statearr_31693_31801 = state_31687__$1;
(statearr_31693_31801[(2)] = inst_31671);

(statearr_31693_31801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (6))){
var inst_31668 = (state_31687[(7)]);
var inst_31673 = (state_31687[(8)]);
var inst_31673__$1 = cljs.core.async.chan.call(null,(1));
var inst_31674 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31675 = [inst_31668,inst_31673__$1];
var inst_31676 = (new cljs.core.PersistentVector(null,2,(5),inst_31674,inst_31675,null));
var state_31687__$1 = (function (){var statearr_31694 = state_31687;
(statearr_31694[(8)] = inst_31673__$1);

return statearr_31694;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31687__$1,(8),jobs,inst_31676);
} else {
if((state_val_31688 === (7))){
var inst_31683 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31695_31802 = state_31687__$1;
(statearr_31695_31802[(2)] = inst_31683);

(statearr_31695_31802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (8))){
var inst_31673 = (state_31687[(8)]);
var inst_31678 = (state_31687[(2)]);
var state_31687__$1 = (function (){var statearr_31696 = state_31687;
(statearr_31696[(9)] = inst_31678);

return statearr_31696;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31687__$1,(9),results,inst_31673);
} else {
if((state_val_31688 === (9))){
var inst_31680 = (state_31687[(2)]);
var state_31687__$1 = (function (){var statearr_31697 = state_31687;
(statearr_31697[(10)] = inst_31680);

return statearr_31697;
})();
var statearr_31698_31803 = state_31687__$1;
(statearr_31698_31803[(2)] = null);

(statearr_31698_31803[(1)] = (2));


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
});})(c__31448__auto___31797,jobs,results,process,async))
;
return ((function (switch__31360__auto__,c__31448__auto___31797,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0 = (function (){
var statearr_31699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__);

(statearr_31699[(1)] = (1));

return statearr_31699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1 = (function (state_31687){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_31687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e31700){if((e31700 instanceof Object)){
var ex__31364__auto__ = e31700;
var statearr_31701_31804 = state_31687;
(statearr_31701_31804[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31805 = state_31687;
state_31687 = G__31805;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__ = function(state_31687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1.call(this,state_31687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___31797,jobs,results,process,async))
})();
var state__31450__auto__ = (function (){var statearr_31702 = f__31449__auto__.call(null);
(statearr_31702[(6)] = c__31448__auto___31797);

return statearr_31702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___31797,jobs,results,process,async))
);


var c__31448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto__,jobs,results,process,async){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto__,jobs,results,process,async){
return (function (state_31740){
var state_val_31741 = (state_31740[(1)]);
if((state_val_31741 === (7))){
var inst_31736 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
var statearr_31742_31806 = state_31740__$1;
(statearr_31742_31806[(2)] = inst_31736);

(statearr_31742_31806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (20))){
var state_31740__$1 = state_31740;
var statearr_31743_31807 = state_31740__$1;
(statearr_31743_31807[(2)] = null);

(statearr_31743_31807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (1))){
var state_31740__$1 = state_31740;
var statearr_31744_31808 = state_31740__$1;
(statearr_31744_31808[(2)] = null);

(statearr_31744_31808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (4))){
var inst_31705 = (state_31740[(7)]);
var inst_31705__$1 = (state_31740[(2)]);
var inst_31706 = (inst_31705__$1 == null);
var state_31740__$1 = (function (){var statearr_31745 = state_31740;
(statearr_31745[(7)] = inst_31705__$1);

return statearr_31745;
})();
if(cljs.core.truth_(inst_31706)){
var statearr_31746_31809 = state_31740__$1;
(statearr_31746_31809[(1)] = (5));

} else {
var statearr_31747_31810 = state_31740__$1;
(statearr_31747_31810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (15))){
var inst_31718 = (state_31740[(8)]);
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31740__$1,(18),to,inst_31718);
} else {
if((state_val_31741 === (21))){
var inst_31731 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
var statearr_31748_31811 = state_31740__$1;
(statearr_31748_31811[(2)] = inst_31731);

(statearr_31748_31811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (13))){
var inst_31733 = (state_31740[(2)]);
var state_31740__$1 = (function (){var statearr_31749 = state_31740;
(statearr_31749[(9)] = inst_31733);

return statearr_31749;
})();
var statearr_31750_31812 = state_31740__$1;
(statearr_31750_31812[(2)] = null);

(statearr_31750_31812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (6))){
var inst_31705 = (state_31740[(7)]);
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31740__$1,(11),inst_31705);
} else {
if((state_val_31741 === (17))){
var inst_31726 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
if(cljs.core.truth_(inst_31726)){
var statearr_31751_31813 = state_31740__$1;
(statearr_31751_31813[(1)] = (19));

} else {
var statearr_31752_31814 = state_31740__$1;
(statearr_31752_31814[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (3))){
var inst_31738 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31740__$1,inst_31738);
} else {
if((state_val_31741 === (12))){
var inst_31715 = (state_31740[(10)]);
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31740__$1,(14),inst_31715);
} else {
if((state_val_31741 === (2))){
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31740__$1,(4),results);
} else {
if((state_val_31741 === (19))){
var state_31740__$1 = state_31740;
var statearr_31753_31815 = state_31740__$1;
(statearr_31753_31815[(2)] = null);

(statearr_31753_31815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (11))){
var inst_31715 = (state_31740[(2)]);
var state_31740__$1 = (function (){var statearr_31754 = state_31740;
(statearr_31754[(10)] = inst_31715);

return statearr_31754;
})();
var statearr_31755_31816 = state_31740__$1;
(statearr_31755_31816[(2)] = null);

(statearr_31755_31816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (9))){
var state_31740__$1 = state_31740;
var statearr_31756_31817 = state_31740__$1;
(statearr_31756_31817[(2)] = null);

(statearr_31756_31817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (5))){
var state_31740__$1 = state_31740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31757_31818 = state_31740__$1;
(statearr_31757_31818[(1)] = (8));

} else {
var statearr_31758_31819 = state_31740__$1;
(statearr_31758_31819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (14))){
var inst_31720 = (state_31740[(11)]);
var inst_31718 = (state_31740[(8)]);
var inst_31718__$1 = (state_31740[(2)]);
var inst_31719 = (inst_31718__$1 == null);
var inst_31720__$1 = cljs.core.not.call(null,inst_31719);
var state_31740__$1 = (function (){var statearr_31759 = state_31740;
(statearr_31759[(11)] = inst_31720__$1);

(statearr_31759[(8)] = inst_31718__$1);

return statearr_31759;
})();
if(inst_31720__$1){
var statearr_31760_31820 = state_31740__$1;
(statearr_31760_31820[(1)] = (15));

} else {
var statearr_31761_31821 = state_31740__$1;
(statearr_31761_31821[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (16))){
var inst_31720 = (state_31740[(11)]);
var state_31740__$1 = state_31740;
var statearr_31762_31822 = state_31740__$1;
(statearr_31762_31822[(2)] = inst_31720);

(statearr_31762_31822[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (10))){
var inst_31712 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
var statearr_31763_31823 = state_31740__$1;
(statearr_31763_31823[(2)] = inst_31712);

(statearr_31763_31823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (18))){
var inst_31723 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
var statearr_31764_31824 = state_31740__$1;
(statearr_31764_31824[(2)] = inst_31723);

(statearr_31764_31824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (8))){
var inst_31709 = cljs.core.async.close_BANG_.call(null,to);
var state_31740__$1 = state_31740;
var statearr_31765_31825 = state_31740__$1;
(statearr_31765_31825[(2)] = inst_31709);

(statearr_31765_31825[(1)] = (10));


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
});})(c__31448__auto__,jobs,results,process,async))
;
return ((function (switch__31360__auto__,c__31448__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0 = (function (){
var statearr_31766 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__);

(statearr_31766[(1)] = (1));

return statearr_31766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1 = (function (state_31740){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_31740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e31767){if((e31767 instanceof Object)){
var ex__31364__auto__ = e31767;
var statearr_31768_31826 = state_31740;
(statearr_31768_31826[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31827 = state_31740;
state_31740 = G__31827;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__ = function(state_31740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1.call(this,state_31740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31361__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto__,jobs,results,process,async))
})();
var state__31450__auto__ = (function (){var statearr_31769 = f__31449__auto__.call(null);
(statearr_31769[(6)] = c__31448__auto__);

return statearr_31769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto__,jobs,results,process,async))
);

return c__31448__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31829 = arguments.length;
switch (G__31829) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31832 = arguments.length;
switch (G__31832) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31835 = arguments.length;
switch (G__31835) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31448__auto___31884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___31884,tc,fc){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___31884,tc,fc){
return (function (state_31861){
var state_val_31862 = (state_31861[(1)]);
if((state_val_31862 === (7))){
var inst_31857 = (state_31861[(2)]);
var state_31861__$1 = state_31861;
var statearr_31863_31885 = state_31861__$1;
(statearr_31863_31885[(2)] = inst_31857);

(statearr_31863_31885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (1))){
var state_31861__$1 = state_31861;
var statearr_31864_31886 = state_31861__$1;
(statearr_31864_31886[(2)] = null);

(statearr_31864_31886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (4))){
var inst_31838 = (state_31861[(7)]);
var inst_31838__$1 = (state_31861[(2)]);
var inst_31839 = (inst_31838__$1 == null);
var state_31861__$1 = (function (){var statearr_31865 = state_31861;
(statearr_31865[(7)] = inst_31838__$1);

return statearr_31865;
})();
if(cljs.core.truth_(inst_31839)){
var statearr_31866_31887 = state_31861__$1;
(statearr_31866_31887[(1)] = (5));

} else {
var statearr_31867_31888 = state_31861__$1;
(statearr_31867_31888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (13))){
var state_31861__$1 = state_31861;
var statearr_31868_31889 = state_31861__$1;
(statearr_31868_31889[(2)] = null);

(statearr_31868_31889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (6))){
var inst_31838 = (state_31861[(7)]);
var inst_31844 = p.call(null,inst_31838);
var state_31861__$1 = state_31861;
if(cljs.core.truth_(inst_31844)){
var statearr_31869_31890 = state_31861__$1;
(statearr_31869_31890[(1)] = (9));

} else {
var statearr_31870_31891 = state_31861__$1;
(statearr_31870_31891[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (3))){
var inst_31859 = (state_31861[(2)]);
var state_31861__$1 = state_31861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31861__$1,inst_31859);
} else {
if((state_val_31862 === (12))){
var state_31861__$1 = state_31861;
var statearr_31871_31892 = state_31861__$1;
(statearr_31871_31892[(2)] = null);

(statearr_31871_31892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (2))){
var state_31861__$1 = state_31861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31861__$1,(4),ch);
} else {
if((state_val_31862 === (11))){
var inst_31838 = (state_31861[(7)]);
var inst_31848 = (state_31861[(2)]);
var state_31861__$1 = state_31861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31861__$1,(8),inst_31848,inst_31838);
} else {
if((state_val_31862 === (9))){
var state_31861__$1 = state_31861;
var statearr_31872_31893 = state_31861__$1;
(statearr_31872_31893[(2)] = tc);

(statearr_31872_31893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (5))){
var inst_31841 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31842 = cljs.core.async.close_BANG_.call(null,fc);
var state_31861__$1 = (function (){var statearr_31873 = state_31861;
(statearr_31873[(8)] = inst_31841);

return statearr_31873;
})();
var statearr_31874_31894 = state_31861__$1;
(statearr_31874_31894[(2)] = inst_31842);

(statearr_31874_31894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (14))){
var inst_31855 = (state_31861[(2)]);
var state_31861__$1 = state_31861;
var statearr_31875_31895 = state_31861__$1;
(statearr_31875_31895[(2)] = inst_31855);

(statearr_31875_31895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (10))){
var state_31861__$1 = state_31861;
var statearr_31876_31896 = state_31861__$1;
(statearr_31876_31896[(2)] = fc);

(statearr_31876_31896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31862 === (8))){
var inst_31850 = (state_31861[(2)]);
var state_31861__$1 = state_31861;
if(cljs.core.truth_(inst_31850)){
var statearr_31877_31897 = state_31861__$1;
(statearr_31877_31897[(1)] = (12));

} else {
var statearr_31878_31898 = state_31861__$1;
(statearr_31878_31898[(1)] = (13));

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
});})(c__31448__auto___31884,tc,fc))
;
return ((function (switch__31360__auto__,c__31448__auto___31884,tc,fc){
return (function() {
var cljs$core$async$state_machine__31361__auto__ = null;
var cljs$core$async$state_machine__31361__auto____0 = (function (){
var statearr_31879 = [null,null,null,null,null,null,null,null,null];
(statearr_31879[(0)] = cljs$core$async$state_machine__31361__auto__);

(statearr_31879[(1)] = (1));

return statearr_31879;
});
var cljs$core$async$state_machine__31361__auto____1 = (function (state_31861){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_31861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e31880){if((e31880 instanceof Object)){
var ex__31364__auto__ = e31880;
var statearr_31881_31899 = state_31861;
(statearr_31881_31899[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31900 = state_31861;
state_31861 = G__31900;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$state_machine__31361__auto__ = function(state_31861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31361__auto____1.call(this,state_31861);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31361__auto____0;
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31361__auto____1;
return cljs$core$async$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___31884,tc,fc))
})();
var state__31450__auto__ = (function (){var statearr_31882 = f__31449__auto__.call(null);
(statearr_31882[(6)] = c__31448__auto___31884);

return statearr_31882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___31884,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto__){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto__){
return (function (state_31921){
var state_val_31922 = (state_31921[(1)]);
if((state_val_31922 === (7))){
var inst_31917 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31923_31941 = state_31921__$1;
(statearr_31923_31941[(2)] = inst_31917);

(statearr_31923_31941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (1))){
var inst_31901 = init;
var state_31921__$1 = (function (){var statearr_31924 = state_31921;
(statearr_31924[(7)] = inst_31901);

return statearr_31924;
})();
var statearr_31925_31942 = state_31921__$1;
(statearr_31925_31942[(2)] = null);

(statearr_31925_31942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (4))){
var inst_31904 = (state_31921[(8)]);
var inst_31904__$1 = (state_31921[(2)]);
var inst_31905 = (inst_31904__$1 == null);
var state_31921__$1 = (function (){var statearr_31926 = state_31921;
(statearr_31926[(8)] = inst_31904__$1);

return statearr_31926;
})();
if(cljs.core.truth_(inst_31905)){
var statearr_31927_31943 = state_31921__$1;
(statearr_31927_31943[(1)] = (5));

} else {
var statearr_31928_31944 = state_31921__$1;
(statearr_31928_31944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (6))){
var inst_31908 = (state_31921[(9)]);
var inst_31901 = (state_31921[(7)]);
var inst_31904 = (state_31921[(8)]);
var inst_31908__$1 = f.call(null,inst_31901,inst_31904);
var inst_31909 = cljs.core.reduced_QMARK_.call(null,inst_31908__$1);
var state_31921__$1 = (function (){var statearr_31929 = state_31921;
(statearr_31929[(9)] = inst_31908__$1);

return statearr_31929;
})();
if(inst_31909){
var statearr_31930_31945 = state_31921__$1;
(statearr_31930_31945[(1)] = (8));

} else {
var statearr_31931_31946 = state_31921__$1;
(statearr_31931_31946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (3))){
var inst_31919 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31921__$1,inst_31919);
} else {
if((state_val_31922 === (2))){
var state_31921__$1 = state_31921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31921__$1,(4),ch);
} else {
if((state_val_31922 === (9))){
var inst_31908 = (state_31921[(9)]);
var inst_31901 = inst_31908;
var state_31921__$1 = (function (){var statearr_31932 = state_31921;
(statearr_31932[(7)] = inst_31901);

return statearr_31932;
})();
var statearr_31933_31947 = state_31921__$1;
(statearr_31933_31947[(2)] = null);

(statearr_31933_31947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (5))){
var inst_31901 = (state_31921[(7)]);
var state_31921__$1 = state_31921;
var statearr_31934_31948 = state_31921__$1;
(statearr_31934_31948[(2)] = inst_31901);

(statearr_31934_31948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (10))){
var inst_31915 = (state_31921[(2)]);
var state_31921__$1 = state_31921;
var statearr_31935_31949 = state_31921__$1;
(statearr_31935_31949[(2)] = inst_31915);

(statearr_31935_31949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31922 === (8))){
var inst_31908 = (state_31921[(9)]);
var inst_31911 = cljs.core.deref.call(null,inst_31908);
var state_31921__$1 = state_31921;
var statearr_31936_31950 = state_31921__$1;
(statearr_31936_31950[(2)] = inst_31911);

(statearr_31936_31950[(1)] = (10));


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
});})(c__31448__auto__))
;
return ((function (switch__31360__auto__,c__31448__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31361__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31361__auto____0 = (function (){
var statearr_31937 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31937[(0)] = cljs$core$async$reduce_$_state_machine__31361__auto__);

(statearr_31937[(1)] = (1));

return statearr_31937;
});
var cljs$core$async$reduce_$_state_machine__31361__auto____1 = (function (state_31921){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_31921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e31938){if((e31938 instanceof Object)){
var ex__31364__auto__ = e31938;
var statearr_31939_31951 = state_31921;
(statearr_31939_31951[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31952 = state_31921;
state_31921 = G__31952;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31361__auto__ = function(state_31921){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31361__auto____1.call(this,state_31921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31361__auto____0;
cljs$core$async$reduce_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31361__auto____1;
return cljs$core$async$reduce_$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto__))
})();
var state__31450__auto__ = (function (){var statearr_31940 = f__31449__auto__.call(null);
(statearr_31940[(6)] = c__31448__auto__);

return statearr_31940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto__))
);

return c__31448__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto__,f__$1){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto__,f__$1){
return (function (state_31958){
var state_val_31959 = (state_31958[(1)]);
if((state_val_31959 === (1))){
var inst_31953 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31958__$1 = state_31958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31958__$1,(2),inst_31953);
} else {
if((state_val_31959 === (2))){
var inst_31955 = (state_31958[(2)]);
var inst_31956 = f__$1.call(null,inst_31955);
var state_31958__$1 = state_31958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31958__$1,inst_31956);
} else {
return null;
}
}
});})(c__31448__auto__,f__$1))
;
return ((function (switch__31360__auto__,c__31448__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31361__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31361__auto____0 = (function (){
var statearr_31960 = [null,null,null,null,null,null,null];
(statearr_31960[(0)] = cljs$core$async$transduce_$_state_machine__31361__auto__);

(statearr_31960[(1)] = (1));

return statearr_31960;
});
var cljs$core$async$transduce_$_state_machine__31361__auto____1 = (function (state_31958){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_31958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e31961){if((e31961 instanceof Object)){
var ex__31364__auto__ = e31961;
var statearr_31962_31964 = state_31958;
(statearr_31962_31964[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31965 = state_31958;
state_31958 = G__31965;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31361__auto__ = function(state_31958){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31361__auto____1.call(this,state_31958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31361__auto____0;
cljs$core$async$transduce_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31361__auto____1;
return cljs$core$async$transduce_$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto__,f__$1))
})();
var state__31450__auto__ = (function (){var statearr_31963 = f__31449__auto__.call(null);
(statearr_31963[(6)] = c__31448__auto__);

return statearr_31963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto__,f__$1))
);

return c__31448__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31967 = arguments.length;
switch (G__31967) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto__){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto__){
return (function (state_31992){
var state_val_31993 = (state_31992[(1)]);
if((state_val_31993 === (7))){
var inst_31974 = (state_31992[(2)]);
var state_31992__$1 = state_31992;
var statearr_31994_32015 = state_31992__$1;
(statearr_31994_32015[(2)] = inst_31974);

(statearr_31994_32015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (1))){
var inst_31968 = cljs.core.seq.call(null,coll);
var inst_31969 = inst_31968;
var state_31992__$1 = (function (){var statearr_31995 = state_31992;
(statearr_31995[(7)] = inst_31969);

return statearr_31995;
})();
var statearr_31996_32016 = state_31992__$1;
(statearr_31996_32016[(2)] = null);

(statearr_31996_32016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (4))){
var inst_31969 = (state_31992[(7)]);
var inst_31972 = cljs.core.first.call(null,inst_31969);
var state_31992__$1 = state_31992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31992__$1,(7),ch,inst_31972);
} else {
if((state_val_31993 === (13))){
var inst_31986 = (state_31992[(2)]);
var state_31992__$1 = state_31992;
var statearr_31997_32017 = state_31992__$1;
(statearr_31997_32017[(2)] = inst_31986);

(statearr_31997_32017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (6))){
var inst_31977 = (state_31992[(2)]);
var state_31992__$1 = state_31992;
if(cljs.core.truth_(inst_31977)){
var statearr_31998_32018 = state_31992__$1;
(statearr_31998_32018[(1)] = (8));

} else {
var statearr_31999_32019 = state_31992__$1;
(statearr_31999_32019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (3))){
var inst_31990 = (state_31992[(2)]);
var state_31992__$1 = state_31992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31992__$1,inst_31990);
} else {
if((state_val_31993 === (12))){
var state_31992__$1 = state_31992;
var statearr_32000_32020 = state_31992__$1;
(statearr_32000_32020[(2)] = null);

(statearr_32000_32020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (2))){
var inst_31969 = (state_31992[(7)]);
var state_31992__$1 = state_31992;
if(cljs.core.truth_(inst_31969)){
var statearr_32001_32021 = state_31992__$1;
(statearr_32001_32021[(1)] = (4));

} else {
var statearr_32002_32022 = state_31992__$1;
(statearr_32002_32022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (11))){
var inst_31983 = cljs.core.async.close_BANG_.call(null,ch);
var state_31992__$1 = state_31992;
var statearr_32003_32023 = state_31992__$1;
(statearr_32003_32023[(2)] = inst_31983);

(statearr_32003_32023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (9))){
var state_31992__$1 = state_31992;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32004_32024 = state_31992__$1;
(statearr_32004_32024[(1)] = (11));

} else {
var statearr_32005_32025 = state_31992__$1;
(statearr_32005_32025[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (5))){
var inst_31969 = (state_31992[(7)]);
var state_31992__$1 = state_31992;
var statearr_32006_32026 = state_31992__$1;
(statearr_32006_32026[(2)] = inst_31969);

(statearr_32006_32026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (10))){
var inst_31988 = (state_31992[(2)]);
var state_31992__$1 = state_31992;
var statearr_32007_32027 = state_31992__$1;
(statearr_32007_32027[(2)] = inst_31988);

(statearr_32007_32027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31993 === (8))){
var inst_31969 = (state_31992[(7)]);
var inst_31979 = cljs.core.next.call(null,inst_31969);
var inst_31969__$1 = inst_31979;
var state_31992__$1 = (function (){var statearr_32008 = state_31992;
(statearr_32008[(7)] = inst_31969__$1);

return statearr_32008;
})();
var statearr_32009_32028 = state_31992__$1;
(statearr_32009_32028[(2)] = null);

(statearr_32009_32028[(1)] = (2));


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
});})(c__31448__auto__))
;
return ((function (switch__31360__auto__,c__31448__auto__){
return (function() {
var cljs$core$async$state_machine__31361__auto__ = null;
var cljs$core$async$state_machine__31361__auto____0 = (function (){
var statearr_32010 = [null,null,null,null,null,null,null,null];
(statearr_32010[(0)] = cljs$core$async$state_machine__31361__auto__);

(statearr_32010[(1)] = (1));

return statearr_32010;
});
var cljs$core$async$state_machine__31361__auto____1 = (function (state_31992){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_31992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e32011){if((e32011 instanceof Object)){
var ex__31364__auto__ = e32011;
var statearr_32012_32029 = state_31992;
(statearr_32012_32029[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32030 = state_31992;
state_31992 = G__32030;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$state_machine__31361__auto__ = function(state_31992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31361__auto____1.call(this,state_31992);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31361__auto____0;
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31361__auto____1;
return cljs$core$async$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto__))
})();
var state__31450__auto__ = (function (){var statearr_32013 = f__31449__auto__.call(null);
(statearr_32013[(6)] = c__31448__auto__);

return statearr_32013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto__))
);

return c__31448__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28973__auto__ = (((_ == null))?null:_);
var m__28974__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,_);
} else {
var m__28974__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28973__auto__ = (((m == null))?null:m);
var m__28974__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28974__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28973__auto__ = (((m == null))?null:m);
var m__28974__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,m,ch);
} else {
var m__28974__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28973__auto__ = (((m == null))?null:m);
var m__28974__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,m);
} else {
var m__28974__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32031 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32031 = (function (ch,cs,meta32032){
this.ch = ch;
this.cs = cs;
this.meta32032 = meta32032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32033,meta32032__$1){
var self__ = this;
var _32033__$1 = this;
return (new cljs.core.async.t_cljs$core$async32031(self__.ch,self__.cs,meta32032__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32033){
var self__ = this;
var _32033__$1 = this;
return self__.meta32032;
});})(cs))
;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32031.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32032","meta32032",1674667378,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32031.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32031";

cljs.core.async.t_cljs$core$async32031.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28915__auto__,writer__28916__auto__,opt__28917__auto__){
return cljs.core._write.call(null,writer__28916__auto__,"cljs.core.async/t_cljs$core$async32031");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32031 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32031(ch__$1,cs__$1,meta32032){
return (new cljs.core.async.t_cljs$core$async32031(ch__$1,cs__$1,meta32032));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32031(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31448__auto___32253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___32253,cs,m,dchan,dctr,done){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___32253,cs,m,dchan,dctr,done){
return (function (state_32168){
var state_val_32169 = (state_32168[(1)]);
if((state_val_32169 === (7))){
var inst_32164 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32170_32254 = state_32168__$1;
(statearr_32170_32254[(2)] = inst_32164);

(statearr_32170_32254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (20))){
var inst_32067 = (state_32168[(7)]);
var inst_32079 = cljs.core.first.call(null,inst_32067);
var inst_32080 = cljs.core.nth.call(null,inst_32079,(0),null);
var inst_32081 = cljs.core.nth.call(null,inst_32079,(1),null);
var state_32168__$1 = (function (){var statearr_32171 = state_32168;
(statearr_32171[(8)] = inst_32080);

return statearr_32171;
})();
if(cljs.core.truth_(inst_32081)){
var statearr_32172_32255 = state_32168__$1;
(statearr_32172_32255[(1)] = (22));

} else {
var statearr_32173_32256 = state_32168__$1;
(statearr_32173_32256[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (27))){
var inst_32036 = (state_32168[(9)]);
var inst_32109 = (state_32168[(10)]);
var inst_32111 = (state_32168[(11)]);
var inst_32116 = (state_32168[(12)]);
var inst_32116__$1 = cljs.core._nth.call(null,inst_32109,inst_32111);
var inst_32117 = cljs.core.async.put_BANG_.call(null,inst_32116__$1,inst_32036,done);
var state_32168__$1 = (function (){var statearr_32174 = state_32168;
(statearr_32174[(12)] = inst_32116__$1);

return statearr_32174;
})();
if(cljs.core.truth_(inst_32117)){
var statearr_32175_32257 = state_32168__$1;
(statearr_32175_32257[(1)] = (30));

} else {
var statearr_32176_32258 = state_32168__$1;
(statearr_32176_32258[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (1))){
var state_32168__$1 = state_32168;
var statearr_32177_32259 = state_32168__$1;
(statearr_32177_32259[(2)] = null);

(statearr_32177_32259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (24))){
var inst_32067 = (state_32168[(7)]);
var inst_32086 = (state_32168[(2)]);
var inst_32087 = cljs.core.next.call(null,inst_32067);
var inst_32045 = inst_32087;
var inst_32046 = null;
var inst_32047 = (0);
var inst_32048 = (0);
var state_32168__$1 = (function (){var statearr_32178 = state_32168;
(statearr_32178[(13)] = inst_32046);

(statearr_32178[(14)] = inst_32086);

(statearr_32178[(15)] = inst_32048);

(statearr_32178[(16)] = inst_32047);

(statearr_32178[(17)] = inst_32045);

return statearr_32178;
})();
var statearr_32179_32260 = state_32168__$1;
(statearr_32179_32260[(2)] = null);

(statearr_32179_32260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (39))){
var state_32168__$1 = state_32168;
var statearr_32183_32261 = state_32168__$1;
(statearr_32183_32261[(2)] = null);

(statearr_32183_32261[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (4))){
var inst_32036 = (state_32168[(9)]);
var inst_32036__$1 = (state_32168[(2)]);
var inst_32037 = (inst_32036__$1 == null);
var state_32168__$1 = (function (){var statearr_32184 = state_32168;
(statearr_32184[(9)] = inst_32036__$1);

return statearr_32184;
})();
if(cljs.core.truth_(inst_32037)){
var statearr_32185_32262 = state_32168__$1;
(statearr_32185_32262[(1)] = (5));

} else {
var statearr_32186_32263 = state_32168__$1;
(statearr_32186_32263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (15))){
var inst_32046 = (state_32168[(13)]);
var inst_32048 = (state_32168[(15)]);
var inst_32047 = (state_32168[(16)]);
var inst_32045 = (state_32168[(17)]);
var inst_32063 = (state_32168[(2)]);
var inst_32064 = (inst_32048 + (1));
var tmp32180 = inst_32046;
var tmp32181 = inst_32047;
var tmp32182 = inst_32045;
var inst_32045__$1 = tmp32182;
var inst_32046__$1 = tmp32180;
var inst_32047__$1 = tmp32181;
var inst_32048__$1 = inst_32064;
var state_32168__$1 = (function (){var statearr_32187 = state_32168;
(statearr_32187[(13)] = inst_32046__$1);

(statearr_32187[(15)] = inst_32048__$1);

(statearr_32187[(16)] = inst_32047__$1);

(statearr_32187[(17)] = inst_32045__$1);

(statearr_32187[(18)] = inst_32063);

return statearr_32187;
})();
var statearr_32188_32264 = state_32168__$1;
(statearr_32188_32264[(2)] = null);

(statearr_32188_32264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (21))){
var inst_32090 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32192_32265 = state_32168__$1;
(statearr_32192_32265[(2)] = inst_32090);

(statearr_32192_32265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (31))){
var inst_32116 = (state_32168[(12)]);
var inst_32120 = done.call(null,null);
var inst_32121 = cljs.core.async.untap_STAR_.call(null,m,inst_32116);
var state_32168__$1 = (function (){var statearr_32193 = state_32168;
(statearr_32193[(19)] = inst_32120);

return statearr_32193;
})();
var statearr_32194_32266 = state_32168__$1;
(statearr_32194_32266[(2)] = inst_32121);

(statearr_32194_32266[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (32))){
var inst_32108 = (state_32168[(20)]);
var inst_32109 = (state_32168[(10)]);
var inst_32111 = (state_32168[(11)]);
var inst_32110 = (state_32168[(21)]);
var inst_32123 = (state_32168[(2)]);
var inst_32124 = (inst_32111 + (1));
var tmp32189 = inst_32108;
var tmp32190 = inst_32109;
var tmp32191 = inst_32110;
var inst_32108__$1 = tmp32189;
var inst_32109__$1 = tmp32190;
var inst_32110__$1 = tmp32191;
var inst_32111__$1 = inst_32124;
var state_32168__$1 = (function (){var statearr_32195 = state_32168;
(statearr_32195[(20)] = inst_32108__$1);

(statearr_32195[(22)] = inst_32123);

(statearr_32195[(10)] = inst_32109__$1);

(statearr_32195[(11)] = inst_32111__$1);

(statearr_32195[(21)] = inst_32110__$1);

return statearr_32195;
})();
var statearr_32196_32267 = state_32168__$1;
(statearr_32196_32267[(2)] = null);

(statearr_32196_32267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (40))){
var inst_32136 = (state_32168[(23)]);
var inst_32140 = done.call(null,null);
var inst_32141 = cljs.core.async.untap_STAR_.call(null,m,inst_32136);
var state_32168__$1 = (function (){var statearr_32197 = state_32168;
(statearr_32197[(24)] = inst_32140);

return statearr_32197;
})();
var statearr_32198_32268 = state_32168__$1;
(statearr_32198_32268[(2)] = inst_32141);

(statearr_32198_32268[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (33))){
var inst_32127 = (state_32168[(25)]);
var inst_32129 = cljs.core.chunked_seq_QMARK_.call(null,inst_32127);
var state_32168__$1 = state_32168;
if(inst_32129){
var statearr_32199_32269 = state_32168__$1;
(statearr_32199_32269[(1)] = (36));

} else {
var statearr_32200_32270 = state_32168__$1;
(statearr_32200_32270[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (13))){
var inst_32057 = (state_32168[(26)]);
var inst_32060 = cljs.core.async.close_BANG_.call(null,inst_32057);
var state_32168__$1 = state_32168;
var statearr_32201_32271 = state_32168__$1;
(statearr_32201_32271[(2)] = inst_32060);

(statearr_32201_32271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (22))){
var inst_32080 = (state_32168[(8)]);
var inst_32083 = cljs.core.async.close_BANG_.call(null,inst_32080);
var state_32168__$1 = state_32168;
var statearr_32202_32272 = state_32168__$1;
(statearr_32202_32272[(2)] = inst_32083);

(statearr_32202_32272[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (36))){
var inst_32127 = (state_32168[(25)]);
var inst_32131 = cljs.core.chunk_first.call(null,inst_32127);
var inst_32132 = cljs.core.chunk_rest.call(null,inst_32127);
var inst_32133 = cljs.core.count.call(null,inst_32131);
var inst_32108 = inst_32132;
var inst_32109 = inst_32131;
var inst_32110 = inst_32133;
var inst_32111 = (0);
var state_32168__$1 = (function (){var statearr_32203 = state_32168;
(statearr_32203[(20)] = inst_32108);

(statearr_32203[(10)] = inst_32109);

(statearr_32203[(11)] = inst_32111);

(statearr_32203[(21)] = inst_32110);

return statearr_32203;
})();
var statearr_32204_32273 = state_32168__$1;
(statearr_32204_32273[(2)] = null);

(statearr_32204_32273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (41))){
var inst_32127 = (state_32168[(25)]);
var inst_32143 = (state_32168[(2)]);
var inst_32144 = cljs.core.next.call(null,inst_32127);
var inst_32108 = inst_32144;
var inst_32109 = null;
var inst_32110 = (0);
var inst_32111 = (0);
var state_32168__$1 = (function (){var statearr_32205 = state_32168;
(statearr_32205[(27)] = inst_32143);

(statearr_32205[(20)] = inst_32108);

(statearr_32205[(10)] = inst_32109);

(statearr_32205[(11)] = inst_32111);

(statearr_32205[(21)] = inst_32110);

return statearr_32205;
})();
var statearr_32206_32274 = state_32168__$1;
(statearr_32206_32274[(2)] = null);

(statearr_32206_32274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (43))){
var state_32168__$1 = state_32168;
var statearr_32207_32275 = state_32168__$1;
(statearr_32207_32275[(2)] = null);

(statearr_32207_32275[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (29))){
var inst_32152 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32208_32276 = state_32168__$1;
(statearr_32208_32276[(2)] = inst_32152);

(statearr_32208_32276[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (44))){
var inst_32161 = (state_32168[(2)]);
var state_32168__$1 = (function (){var statearr_32209 = state_32168;
(statearr_32209[(28)] = inst_32161);

return statearr_32209;
})();
var statearr_32210_32277 = state_32168__$1;
(statearr_32210_32277[(2)] = null);

(statearr_32210_32277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (6))){
var inst_32100 = (state_32168[(29)]);
var inst_32099 = cljs.core.deref.call(null,cs);
var inst_32100__$1 = cljs.core.keys.call(null,inst_32099);
var inst_32101 = cljs.core.count.call(null,inst_32100__$1);
var inst_32102 = cljs.core.reset_BANG_.call(null,dctr,inst_32101);
var inst_32107 = cljs.core.seq.call(null,inst_32100__$1);
var inst_32108 = inst_32107;
var inst_32109 = null;
var inst_32110 = (0);
var inst_32111 = (0);
var state_32168__$1 = (function (){var statearr_32211 = state_32168;
(statearr_32211[(20)] = inst_32108);

(statearr_32211[(29)] = inst_32100__$1);

(statearr_32211[(10)] = inst_32109);

(statearr_32211[(11)] = inst_32111);

(statearr_32211[(30)] = inst_32102);

(statearr_32211[(21)] = inst_32110);

return statearr_32211;
})();
var statearr_32212_32278 = state_32168__$1;
(statearr_32212_32278[(2)] = null);

(statearr_32212_32278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (28))){
var inst_32127 = (state_32168[(25)]);
var inst_32108 = (state_32168[(20)]);
var inst_32127__$1 = cljs.core.seq.call(null,inst_32108);
var state_32168__$1 = (function (){var statearr_32213 = state_32168;
(statearr_32213[(25)] = inst_32127__$1);

return statearr_32213;
})();
if(inst_32127__$1){
var statearr_32214_32279 = state_32168__$1;
(statearr_32214_32279[(1)] = (33));

} else {
var statearr_32215_32280 = state_32168__$1;
(statearr_32215_32280[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (25))){
var inst_32111 = (state_32168[(11)]);
var inst_32110 = (state_32168[(21)]);
var inst_32113 = (inst_32111 < inst_32110);
var inst_32114 = inst_32113;
var state_32168__$1 = state_32168;
if(cljs.core.truth_(inst_32114)){
var statearr_32216_32281 = state_32168__$1;
(statearr_32216_32281[(1)] = (27));

} else {
var statearr_32217_32282 = state_32168__$1;
(statearr_32217_32282[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (34))){
var state_32168__$1 = state_32168;
var statearr_32218_32283 = state_32168__$1;
(statearr_32218_32283[(2)] = null);

(statearr_32218_32283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (17))){
var state_32168__$1 = state_32168;
var statearr_32219_32284 = state_32168__$1;
(statearr_32219_32284[(2)] = null);

(statearr_32219_32284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (3))){
var inst_32166 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32168__$1,inst_32166);
} else {
if((state_val_32169 === (12))){
var inst_32095 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32220_32285 = state_32168__$1;
(statearr_32220_32285[(2)] = inst_32095);

(statearr_32220_32285[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (2))){
var state_32168__$1 = state_32168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32168__$1,(4),ch);
} else {
if((state_val_32169 === (23))){
var state_32168__$1 = state_32168;
var statearr_32221_32286 = state_32168__$1;
(statearr_32221_32286[(2)] = null);

(statearr_32221_32286[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (35))){
var inst_32150 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32222_32287 = state_32168__$1;
(statearr_32222_32287[(2)] = inst_32150);

(statearr_32222_32287[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (19))){
var inst_32067 = (state_32168[(7)]);
var inst_32071 = cljs.core.chunk_first.call(null,inst_32067);
var inst_32072 = cljs.core.chunk_rest.call(null,inst_32067);
var inst_32073 = cljs.core.count.call(null,inst_32071);
var inst_32045 = inst_32072;
var inst_32046 = inst_32071;
var inst_32047 = inst_32073;
var inst_32048 = (0);
var state_32168__$1 = (function (){var statearr_32223 = state_32168;
(statearr_32223[(13)] = inst_32046);

(statearr_32223[(15)] = inst_32048);

(statearr_32223[(16)] = inst_32047);

(statearr_32223[(17)] = inst_32045);

return statearr_32223;
})();
var statearr_32224_32288 = state_32168__$1;
(statearr_32224_32288[(2)] = null);

(statearr_32224_32288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (11))){
var inst_32067 = (state_32168[(7)]);
var inst_32045 = (state_32168[(17)]);
var inst_32067__$1 = cljs.core.seq.call(null,inst_32045);
var state_32168__$1 = (function (){var statearr_32225 = state_32168;
(statearr_32225[(7)] = inst_32067__$1);

return statearr_32225;
})();
if(inst_32067__$1){
var statearr_32226_32289 = state_32168__$1;
(statearr_32226_32289[(1)] = (16));

} else {
var statearr_32227_32290 = state_32168__$1;
(statearr_32227_32290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (9))){
var inst_32097 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32228_32291 = state_32168__$1;
(statearr_32228_32291[(2)] = inst_32097);

(statearr_32228_32291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (5))){
var inst_32043 = cljs.core.deref.call(null,cs);
var inst_32044 = cljs.core.seq.call(null,inst_32043);
var inst_32045 = inst_32044;
var inst_32046 = null;
var inst_32047 = (0);
var inst_32048 = (0);
var state_32168__$1 = (function (){var statearr_32229 = state_32168;
(statearr_32229[(13)] = inst_32046);

(statearr_32229[(15)] = inst_32048);

(statearr_32229[(16)] = inst_32047);

(statearr_32229[(17)] = inst_32045);

return statearr_32229;
})();
var statearr_32230_32292 = state_32168__$1;
(statearr_32230_32292[(2)] = null);

(statearr_32230_32292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (14))){
var state_32168__$1 = state_32168;
var statearr_32231_32293 = state_32168__$1;
(statearr_32231_32293[(2)] = null);

(statearr_32231_32293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (45))){
var inst_32158 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32232_32294 = state_32168__$1;
(statearr_32232_32294[(2)] = inst_32158);

(statearr_32232_32294[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (26))){
var inst_32100 = (state_32168[(29)]);
var inst_32154 = (state_32168[(2)]);
var inst_32155 = cljs.core.seq.call(null,inst_32100);
var state_32168__$1 = (function (){var statearr_32233 = state_32168;
(statearr_32233[(31)] = inst_32154);

return statearr_32233;
})();
if(inst_32155){
var statearr_32234_32295 = state_32168__$1;
(statearr_32234_32295[(1)] = (42));

} else {
var statearr_32235_32296 = state_32168__$1;
(statearr_32235_32296[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (16))){
var inst_32067 = (state_32168[(7)]);
var inst_32069 = cljs.core.chunked_seq_QMARK_.call(null,inst_32067);
var state_32168__$1 = state_32168;
if(inst_32069){
var statearr_32236_32297 = state_32168__$1;
(statearr_32236_32297[(1)] = (19));

} else {
var statearr_32237_32298 = state_32168__$1;
(statearr_32237_32298[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (38))){
var inst_32147 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32238_32299 = state_32168__$1;
(statearr_32238_32299[(2)] = inst_32147);

(statearr_32238_32299[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (30))){
var state_32168__$1 = state_32168;
var statearr_32239_32300 = state_32168__$1;
(statearr_32239_32300[(2)] = null);

(statearr_32239_32300[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (10))){
var inst_32046 = (state_32168[(13)]);
var inst_32048 = (state_32168[(15)]);
var inst_32056 = cljs.core._nth.call(null,inst_32046,inst_32048);
var inst_32057 = cljs.core.nth.call(null,inst_32056,(0),null);
var inst_32058 = cljs.core.nth.call(null,inst_32056,(1),null);
var state_32168__$1 = (function (){var statearr_32240 = state_32168;
(statearr_32240[(26)] = inst_32057);

return statearr_32240;
})();
if(cljs.core.truth_(inst_32058)){
var statearr_32241_32301 = state_32168__$1;
(statearr_32241_32301[(1)] = (13));

} else {
var statearr_32242_32302 = state_32168__$1;
(statearr_32242_32302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (18))){
var inst_32093 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32243_32303 = state_32168__$1;
(statearr_32243_32303[(2)] = inst_32093);

(statearr_32243_32303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (42))){
var state_32168__$1 = state_32168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32168__$1,(45),dchan);
} else {
if((state_val_32169 === (37))){
var inst_32036 = (state_32168[(9)]);
var inst_32127 = (state_32168[(25)]);
var inst_32136 = (state_32168[(23)]);
var inst_32136__$1 = cljs.core.first.call(null,inst_32127);
var inst_32137 = cljs.core.async.put_BANG_.call(null,inst_32136__$1,inst_32036,done);
var state_32168__$1 = (function (){var statearr_32244 = state_32168;
(statearr_32244[(23)] = inst_32136__$1);

return statearr_32244;
})();
if(cljs.core.truth_(inst_32137)){
var statearr_32245_32304 = state_32168__$1;
(statearr_32245_32304[(1)] = (39));

} else {
var statearr_32246_32305 = state_32168__$1;
(statearr_32246_32305[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (8))){
var inst_32048 = (state_32168[(15)]);
var inst_32047 = (state_32168[(16)]);
var inst_32050 = (inst_32048 < inst_32047);
var inst_32051 = inst_32050;
var state_32168__$1 = state_32168;
if(cljs.core.truth_(inst_32051)){
var statearr_32247_32306 = state_32168__$1;
(statearr_32247_32306[(1)] = (10));

} else {
var statearr_32248_32307 = state_32168__$1;
(statearr_32248_32307[(1)] = (11));

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
});})(c__31448__auto___32253,cs,m,dchan,dctr,done))
;
return ((function (switch__31360__auto__,c__31448__auto___32253,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31361__auto__ = null;
var cljs$core$async$mult_$_state_machine__31361__auto____0 = (function (){
var statearr_32249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32249[(0)] = cljs$core$async$mult_$_state_machine__31361__auto__);

(statearr_32249[(1)] = (1));

return statearr_32249;
});
var cljs$core$async$mult_$_state_machine__31361__auto____1 = (function (state_32168){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_32168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e32250){if((e32250 instanceof Object)){
var ex__31364__auto__ = e32250;
var statearr_32251_32308 = state_32168;
(statearr_32251_32308[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32309 = state_32168;
state_32168 = G__32309;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31361__auto__ = function(state_32168){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31361__auto____1.call(this,state_32168);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31361__auto____0;
cljs$core$async$mult_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31361__auto____1;
return cljs$core$async$mult_$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___32253,cs,m,dchan,dctr,done))
})();
var state__31450__auto__ = (function (){var statearr_32252 = f__31449__auto__.call(null);
(statearr_32252[(6)] = c__31448__auto___32253);

return statearr_32252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___32253,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32311 = arguments.length;
switch (G__32311) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28973__auto__ = (((m == null))?null:m);
var m__28974__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,m,ch);
} else {
var m__28974__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28973__auto__ = (((m == null))?null:m);
var m__28974__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,m,ch);
} else {
var m__28974__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28973__auto__ = (((m == null))?null:m);
var m__28974__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,m);
} else {
var m__28974__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28973__auto__ = (((m == null))?null:m);
var m__28974__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,m,state_map);
} else {
var m__28974__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28973__auto__ = (((m == null))?null:m);
var m__28974__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,m,mode);
} else {
var m__28974__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29466__auto__ = [];
var len__29459__auto___32323 = arguments.length;
var i__29460__auto___32324 = (0);
while(true){
if((i__29460__auto___32324 < len__29459__auto___32323)){
args__29466__auto__.push((arguments[i__29460__auto___32324]));

var G__32325 = (i__29460__auto___32324 + (1));
i__29460__auto___32324 = G__32325;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((3) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29467__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32317){
var map__32318 = p__32317;
var map__32318__$1 = ((((!((map__32318 == null)))?((((map__32318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32318):map__32318);
var opts = map__32318__$1;
var statearr_32320_32326 = state;
(statearr_32320_32326[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32318,map__32318__$1,opts){
return (function (val){
var statearr_32321_32327 = state;
(statearr_32321_32327[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32318,map__32318__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32322_32328 = state;
(statearr_32322_32328[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32313){
var G__32314 = cljs.core.first.call(null,seq32313);
var seq32313__$1 = cljs.core.next.call(null,seq32313);
var G__32315 = cljs.core.first.call(null,seq32313__$1);
var seq32313__$2 = cljs.core.next.call(null,seq32313__$1);
var G__32316 = cljs.core.first.call(null,seq32313__$2);
var seq32313__$3 = cljs.core.next.call(null,seq32313__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32314,G__32315,G__32316,seq32313__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32329 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32330){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32330 = meta32330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32331,meta32330__$1){
var self__ = this;
var _32331__$1 = this;
return (new cljs.core.async.t_cljs$core$async32329(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32330__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32331){
var self__ = this;
var _32331__$1 = this;
return self__.meta32330;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32329.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32329.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32329.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32329.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32329.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32329.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32329.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32329.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32330","meta32330",-654266956,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32329";

cljs.core.async.t_cljs$core$async32329.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28915__auto__,writer__28916__auto__,opt__28917__auto__){
return cljs.core._write.call(null,writer__28916__auto__,"cljs.core.async/t_cljs$core$async32329");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32329 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32329(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32330){
return (new cljs.core.async.t_cljs$core$async32329(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32330));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32329(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31448__auto___32493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___32493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___32493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32433){
var state_val_32434 = (state_32433[(1)]);
if((state_val_32434 === (7))){
var inst_32348 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
var statearr_32435_32494 = state_32433__$1;
(statearr_32435_32494[(2)] = inst_32348);

(statearr_32435_32494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (20))){
var inst_32360 = (state_32433[(7)]);
var state_32433__$1 = state_32433;
var statearr_32436_32495 = state_32433__$1;
(statearr_32436_32495[(2)] = inst_32360);

(statearr_32436_32495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (27))){
var state_32433__$1 = state_32433;
var statearr_32437_32496 = state_32433__$1;
(statearr_32437_32496[(2)] = null);

(statearr_32437_32496[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (1))){
var inst_32335 = (state_32433[(8)]);
var inst_32335__$1 = calc_state.call(null);
var inst_32337 = (inst_32335__$1 == null);
var inst_32338 = cljs.core.not.call(null,inst_32337);
var state_32433__$1 = (function (){var statearr_32438 = state_32433;
(statearr_32438[(8)] = inst_32335__$1);

return statearr_32438;
})();
if(inst_32338){
var statearr_32439_32497 = state_32433__$1;
(statearr_32439_32497[(1)] = (2));

} else {
var statearr_32440_32498 = state_32433__$1;
(statearr_32440_32498[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (24))){
var inst_32393 = (state_32433[(9)]);
var inst_32384 = (state_32433[(10)]);
var inst_32407 = (state_32433[(11)]);
var inst_32407__$1 = inst_32384.call(null,inst_32393);
var state_32433__$1 = (function (){var statearr_32441 = state_32433;
(statearr_32441[(11)] = inst_32407__$1);

return statearr_32441;
})();
if(cljs.core.truth_(inst_32407__$1)){
var statearr_32442_32499 = state_32433__$1;
(statearr_32442_32499[(1)] = (29));

} else {
var statearr_32443_32500 = state_32433__$1;
(statearr_32443_32500[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (4))){
var inst_32351 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
if(cljs.core.truth_(inst_32351)){
var statearr_32444_32501 = state_32433__$1;
(statearr_32444_32501[(1)] = (8));

} else {
var statearr_32445_32502 = state_32433__$1;
(statearr_32445_32502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (15))){
var inst_32378 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
if(cljs.core.truth_(inst_32378)){
var statearr_32446_32503 = state_32433__$1;
(statearr_32446_32503[(1)] = (19));

} else {
var statearr_32447_32504 = state_32433__$1;
(statearr_32447_32504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (21))){
var inst_32383 = (state_32433[(12)]);
var inst_32383__$1 = (state_32433[(2)]);
var inst_32384 = cljs.core.get.call(null,inst_32383__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32385 = cljs.core.get.call(null,inst_32383__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32386 = cljs.core.get.call(null,inst_32383__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32433__$1 = (function (){var statearr_32448 = state_32433;
(statearr_32448[(12)] = inst_32383__$1);

(statearr_32448[(13)] = inst_32385);

(statearr_32448[(10)] = inst_32384);

return statearr_32448;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32433__$1,(22),inst_32386);
} else {
if((state_val_32434 === (31))){
var inst_32415 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
if(cljs.core.truth_(inst_32415)){
var statearr_32449_32505 = state_32433__$1;
(statearr_32449_32505[(1)] = (32));

} else {
var statearr_32450_32506 = state_32433__$1;
(statearr_32450_32506[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (32))){
var inst_32392 = (state_32433[(14)]);
var state_32433__$1 = state_32433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32433__$1,(35),out,inst_32392);
} else {
if((state_val_32434 === (33))){
var inst_32383 = (state_32433[(12)]);
var inst_32360 = inst_32383;
var state_32433__$1 = (function (){var statearr_32451 = state_32433;
(statearr_32451[(7)] = inst_32360);

return statearr_32451;
})();
var statearr_32452_32507 = state_32433__$1;
(statearr_32452_32507[(2)] = null);

(statearr_32452_32507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (13))){
var inst_32360 = (state_32433[(7)]);
var inst_32367 = inst_32360.cljs$lang$protocol_mask$partition0$;
var inst_32368 = (inst_32367 & (64));
var inst_32369 = inst_32360.cljs$core$ISeq$;
var inst_32370 = (cljs.core.PROTOCOL_SENTINEL === inst_32369);
var inst_32371 = (inst_32368) || (inst_32370);
var state_32433__$1 = state_32433;
if(cljs.core.truth_(inst_32371)){
var statearr_32453_32508 = state_32433__$1;
(statearr_32453_32508[(1)] = (16));

} else {
var statearr_32454_32509 = state_32433__$1;
(statearr_32454_32509[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (22))){
var inst_32393 = (state_32433[(9)]);
var inst_32392 = (state_32433[(14)]);
var inst_32391 = (state_32433[(2)]);
var inst_32392__$1 = cljs.core.nth.call(null,inst_32391,(0),null);
var inst_32393__$1 = cljs.core.nth.call(null,inst_32391,(1),null);
var inst_32394 = (inst_32392__$1 == null);
var inst_32395 = cljs.core._EQ_.call(null,inst_32393__$1,change);
var inst_32396 = (inst_32394) || (inst_32395);
var state_32433__$1 = (function (){var statearr_32455 = state_32433;
(statearr_32455[(9)] = inst_32393__$1);

(statearr_32455[(14)] = inst_32392__$1);

return statearr_32455;
})();
if(cljs.core.truth_(inst_32396)){
var statearr_32456_32510 = state_32433__$1;
(statearr_32456_32510[(1)] = (23));

} else {
var statearr_32457_32511 = state_32433__$1;
(statearr_32457_32511[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (36))){
var inst_32383 = (state_32433[(12)]);
var inst_32360 = inst_32383;
var state_32433__$1 = (function (){var statearr_32458 = state_32433;
(statearr_32458[(7)] = inst_32360);

return statearr_32458;
})();
var statearr_32459_32512 = state_32433__$1;
(statearr_32459_32512[(2)] = null);

(statearr_32459_32512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (29))){
var inst_32407 = (state_32433[(11)]);
var state_32433__$1 = state_32433;
var statearr_32460_32513 = state_32433__$1;
(statearr_32460_32513[(2)] = inst_32407);

(statearr_32460_32513[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (6))){
var state_32433__$1 = state_32433;
var statearr_32461_32514 = state_32433__$1;
(statearr_32461_32514[(2)] = false);

(statearr_32461_32514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (28))){
var inst_32403 = (state_32433[(2)]);
var inst_32404 = calc_state.call(null);
var inst_32360 = inst_32404;
var state_32433__$1 = (function (){var statearr_32462 = state_32433;
(statearr_32462[(7)] = inst_32360);

(statearr_32462[(15)] = inst_32403);

return statearr_32462;
})();
var statearr_32463_32515 = state_32433__$1;
(statearr_32463_32515[(2)] = null);

(statearr_32463_32515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (25))){
var inst_32429 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
var statearr_32464_32516 = state_32433__$1;
(statearr_32464_32516[(2)] = inst_32429);

(statearr_32464_32516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (34))){
var inst_32427 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
var statearr_32465_32517 = state_32433__$1;
(statearr_32465_32517[(2)] = inst_32427);

(statearr_32465_32517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (17))){
var state_32433__$1 = state_32433;
var statearr_32466_32518 = state_32433__$1;
(statearr_32466_32518[(2)] = false);

(statearr_32466_32518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (3))){
var state_32433__$1 = state_32433;
var statearr_32467_32519 = state_32433__$1;
(statearr_32467_32519[(2)] = false);

(statearr_32467_32519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (12))){
var inst_32431 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32433__$1,inst_32431);
} else {
if((state_val_32434 === (2))){
var inst_32335 = (state_32433[(8)]);
var inst_32340 = inst_32335.cljs$lang$protocol_mask$partition0$;
var inst_32341 = (inst_32340 & (64));
var inst_32342 = inst_32335.cljs$core$ISeq$;
var inst_32343 = (cljs.core.PROTOCOL_SENTINEL === inst_32342);
var inst_32344 = (inst_32341) || (inst_32343);
var state_32433__$1 = state_32433;
if(cljs.core.truth_(inst_32344)){
var statearr_32468_32520 = state_32433__$1;
(statearr_32468_32520[(1)] = (5));

} else {
var statearr_32469_32521 = state_32433__$1;
(statearr_32469_32521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (23))){
var inst_32392 = (state_32433[(14)]);
var inst_32398 = (inst_32392 == null);
var state_32433__$1 = state_32433;
if(cljs.core.truth_(inst_32398)){
var statearr_32470_32522 = state_32433__$1;
(statearr_32470_32522[(1)] = (26));

} else {
var statearr_32471_32523 = state_32433__$1;
(statearr_32471_32523[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (35))){
var inst_32418 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
if(cljs.core.truth_(inst_32418)){
var statearr_32472_32524 = state_32433__$1;
(statearr_32472_32524[(1)] = (36));

} else {
var statearr_32473_32525 = state_32433__$1;
(statearr_32473_32525[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (19))){
var inst_32360 = (state_32433[(7)]);
var inst_32380 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32360);
var state_32433__$1 = state_32433;
var statearr_32474_32526 = state_32433__$1;
(statearr_32474_32526[(2)] = inst_32380);

(statearr_32474_32526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (11))){
var inst_32360 = (state_32433[(7)]);
var inst_32364 = (inst_32360 == null);
var inst_32365 = cljs.core.not.call(null,inst_32364);
var state_32433__$1 = state_32433;
if(inst_32365){
var statearr_32475_32527 = state_32433__$1;
(statearr_32475_32527[(1)] = (13));

} else {
var statearr_32476_32528 = state_32433__$1;
(statearr_32476_32528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (9))){
var inst_32335 = (state_32433[(8)]);
var state_32433__$1 = state_32433;
var statearr_32477_32529 = state_32433__$1;
(statearr_32477_32529[(2)] = inst_32335);

(statearr_32477_32529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (5))){
var state_32433__$1 = state_32433;
var statearr_32478_32530 = state_32433__$1;
(statearr_32478_32530[(2)] = true);

(statearr_32478_32530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (14))){
var state_32433__$1 = state_32433;
var statearr_32479_32531 = state_32433__$1;
(statearr_32479_32531[(2)] = false);

(statearr_32479_32531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (26))){
var inst_32393 = (state_32433[(9)]);
var inst_32400 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32393);
var state_32433__$1 = state_32433;
var statearr_32480_32532 = state_32433__$1;
(statearr_32480_32532[(2)] = inst_32400);

(statearr_32480_32532[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (16))){
var state_32433__$1 = state_32433;
var statearr_32481_32533 = state_32433__$1;
(statearr_32481_32533[(2)] = true);

(statearr_32481_32533[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (38))){
var inst_32423 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
var statearr_32482_32534 = state_32433__$1;
(statearr_32482_32534[(2)] = inst_32423);

(statearr_32482_32534[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (30))){
var inst_32385 = (state_32433[(13)]);
var inst_32393 = (state_32433[(9)]);
var inst_32384 = (state_32433[(10)]);
var inst_32410 = cljs.core.empty_QMARK_.call(null,inst_32384);
var inst_32411 = inst_32385.call(null,inst_32393);
var inst_32412 = cljs.core.not.call(null,inst_32411);
var inst_32413 = (inst_32410) && (inst_32412);
var state_32433__$1 = state_32433;
var statearr_32483_32535 = state_32433__$1;
(statearr_32483_32535[(2)] = inst_32413);

(statearr_32483_32535[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (10))){
var inst_32335 = (state_32433[(8)]);
var inst_32356 = (state_32433[(2)]);
var inst_32357 = cljs.core.get.call(null,inst_32356,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32358 = cljs.core.get.call(null,inst_32356,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32359 = cljs.core.get.call(null,inst_32356,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32360 = inst_32335;
var state_32433__$1 = (function (){var statearr_32484 = state_32433;
(statearr_32484[(16)] = inst_32357);

(statearr_32484[(17)] = inst_32358);

(statearr_32484[(7)] = inst_32360);

(statearr_32484[(18)] = inst_32359);

return statearr_32484;
})();
var statearr_32485_32536 = state_32433__$1;
(statearr_32485_32536[(2)] = null);

(statearr_32485_32536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (18))){
var inst_32375 = (state_32433[(2)]);
var state_32433__$1 = state_32433;
var statearr_32486_32537 = state_32433__$1;
(statearr_32486_32537[(2)] = inst_32375);

(statearr_32486_32537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (37))){
var state_32433__$1 = state_32433;
var statearr_32487_32538 = state_32433__$1;
(statearr_32487_32538[(2)] = null);

(statearr_32487_32538[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32434 === (8))){
var inst_32335 = (state_32433[(8)]);
var inst_32353 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32335);
var state_32433__$1 = state_32433;
var statearr_32488_32539 = state_32433__$1;
(statearr_32488_32539[(2)] = inst_32353);

(statearr_32488_32539[(1)] = (10));


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
});})(c__31448__auto___32493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31360__auto__,c__31448__auto___32493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31361__auto__ = null;
var cljs$core$async$mix_$_state_machine__31361__auto____0 = (function (){
var statearr_32489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32489[(0)] = cljs$core$async$mix_$_state_machine__31361__auto__);

(statearr_32489[(1)] = (1));

return statearr_32489;
});
var cljs$core$async$mix_$_state_machine__31361__auto____1 = (function (state_32433){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_32433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e32490){if((e32490 instanceof Object)){
var ex__31364__auto__ = e32490;
var statearr_32491_32540 = state_32433;
(statearr_32491_32540[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32541 = state_32433;
state_32433 = G__32541;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31361__auto__ = function(state_32433){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31361__auto____1.call(this,state_32433);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31361__auto____0;
cljs$core$async$mix_$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31361__auto____1;
return cljs$core$async$mix_$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___32493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31450__auto__ = (function (){var statearr_32492 = f__31449__auto__.call(null);
(statearr_32492[(6)] = c__31448__auto___32493);

return statearr_32492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___32493,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28973__auto__ = (((p == null))?null:p);
var m__28974__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28974__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28973__auto__ = (((p == null))?null:p);
var m__28974__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,p,v,ch);
} else {
var m__28974__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32543 = arguments.length;
switch (G__32543) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28973__auto__ = (((p == null))?null:p);
var m__28974__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,p);
} else {
var m__28974__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28973__auto__ = (((p == null))?null:p);
var m__28974__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28973__auto__)]);
if(!((m__28974__auto__ == null))){
return m__28974__auto__.call(null,p,v);
} else {
var m__28974__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28974__auto____$1 == null))){
return m__28974__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32547 = arguments.length;
switch (G__32547) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28290__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28290__auto__)){
return or__28290__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28290__auto__,mults){
return (function (p1__32545_SHARP_){
if(cljs.core.truth_(p1__32545_SHARP_.call(null,topic))){
return p1__32545_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32545_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28290__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32548 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32549){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32549 = meta32549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32550,meta32549__$1){
var self__ = this;
var _32550__$1 = this;
return (new cljs.core.async.t_cljs$core$async32548(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32549__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32550){
var self__ = this;
var _32550__$1 = this;
return self__.meta32549;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32548.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32548.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32548.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32548.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32548.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32548.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32548.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32548.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32549","meta32549",891318447,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32548";

cljs.core.async.t_cljs$core$async32548.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28915__auto__,writer__28916__auto__,opt__28917__auto__){
return cljs.core._write.call(null,writer__28916__auto__,"cljs.core.async/t_cljs$core$async32548");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32548 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32548(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32549){
return (new cljs.core.async.t_cljs$core$async32548(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32549));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32548(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31448__auto___32668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___32668,mults,ensure_mult,p){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___32668,mults,ensure_mult,p){
return (function (state_32622){
var state_val_32623 = (state_32622[(1)]);
if((state_val_32623 === (7))){
var inst_32618 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32624_32669 = state_32622__$1;
(statearr_32624_32669[(2)] = inst_32618);

(statearr_32624_32669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (20))){
var state_32622__$1 = state_32622;
var statearr_32625_32670 = state_32622__$1;
(statearr_32625_32670[(2)] = null);

(statearr_32625_32670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (1))){
var state_32622__$1 = state_32622;
var statearr_32626_32671 = state_32622__$1;
(statearr_32626_32671[(2)] = null);

(statearr_32626_32671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (24))){
var inst_32601 = (state_32622[(7)]);
var inst_32610 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32601);
var state_32622__$1 = state_32622;
var statearr_32627_32672 = state_32622__$1;
(statearr_32627_32672[(2)] = inst_32610);

(statearr_32627_32672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (4))){
var inst_32553 = (state_32622[(8)]);
var inst_32553__$1 = (state_32622[(2)]);
var inst_32554 = (inst_32553__$1 == null);
var state_32622__$1 = (function (){var statearr_32628 = state_32622;
(statearr_32628[(8)] = inst_32553__$1);

return statearr_32628;
})();
if(cljs.core.truth_(inst_32554)){
var statearr_32629_32673 = state_32622__$1;
(statearr_32629_32673[(1)] = (5));

} else {
var statearr_32630_32674 = state_32622__$1;
(statearr_32630_32674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (15))){
var inst_32595 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32631_32675 = state_32622__$1;
(statearr_32631_32675[(2)] = inst_32595);

(statearr_32631_32675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (21))){
var inst_32615 = (state_32622[(2)]);
var state_32622__$1 = (function (){var statearr_32632 = state_32622;
(statearr_32632[(9)] = inst_32615);

return statearr_32632;
})();
var statearr_32633_32676 = state_32622__$1;
(statearr_32633_32676[(2)] = null);

(statearr_32633_32676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (13))){
var inst_32577 = (state_32622[(10)]);
var inst_32579 = cljs.core.chunked_seq_QMARK_.call(null,inst_32577);
var state_32622__$1 = state_32622;
if(inst_32579){
var statearr_32634_32677 = state_32622__$1;
(statearr_32634_32677[(1)] = (16));

} else {
var statearr_32635_32678 = state_32622__$1;
(statearr_32635_32678[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (22))){
var inst_32607 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
if(cljs.core.truth_(inst_32607)){
var statearr_32636_32679 = state_32622__$1;
(statearr_32636_32679[(1)] = (23));

} else {
var statearr_32637_32680 = state_32622__$1;
(statearr_32637_32680[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (6))){
var inst_32603 = (state_32622[(11)]);
var inst_32601 = (state_32622[(7)]);
var inst_32553 = (state_32622[(8)]);
var inst_32601__$1 = topic_fn.call(null,inst_32553);
var inst_32602 = cljs.core.deref.call(null,mults);
var inst_32603__$1 = cljs.core.get.call(null,inst_32602,inst_32601__$1);
var state_32622__$1 = (function (){var statearr_32638 = state_32622;
(statearr_32638[(11)] = inst_32603__$1);

(statearr_32638[(7)] = inst_32601__$1);

return statearr_32638;
})();
if(cljs.core.truth_(inst_32603__$1)){
var statearr_32639_32681 = state_32622__$1;
(statearr_32639_32681[(1)] = (19));

} else {
var statearr_32640_32682 = state_32622__$1;
(statearr_32640_32682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (25))){
var inst_32612 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32641_32683 = state_32622__$1;
(statearr_32641_32683[(2)] = inst_32612);

(statearr_32641_32683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (17))){
var inst_32577 = (state_32622[(10)]);
var inst_32586 = cljs.core.first.call(null,inst_32577);
var inst_32587 = cljs.core.async.muxch_STAR_.call(null,inst_32586);
var inst_32588 = cljs.core.async.close_BANG_.call(null,inst_32587);
var inst_32589 = cljs.core.next.call(null,inst_32577);
var inst_32563 = inst_32589;
var inst_32564 = null;
var inst_32565 = (0);
var inst_32566 = (0);
var state_32622__$1 = (function (){var statearr_32642 = state_32622;
(statearr_32642[(12)] = inst_32563);

(statearr_32642[(13)] = inst_32564);

(statearr_32642[(14)] = inst_32566);

(statearr_32642[(15)] = inst_32588);

(statearr_32642[(16)] = inst_32565);

return statearr_32642;
})();
var statearr_32643_32684 = state_32622__$1;
(statearr_32643_32684[(2)] = null);

(statearr_32643_32684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (3))){
var inst_32620 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32622__$1,inst_32620);
} else {
if((state_val_32623 === (12))){
var inst_32597 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32644_32685 = state_32622__$1;
(statearr_32644_32685[(2)] = inst_32597);

(statearr_32644_32685[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (2))){
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32622__$1,(4),ch);
} else {
if((state_val_32623 === (23))){
var state_32622__$1 = state_32622;
var statearr_32645_32686 = state_32622__$1;
(statearr_32645_32686[(2)] = null);

(statearr_32645_32686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (19))){
var inst_32603 = (state_32622[(11)]);
var inst_32553 = (state_32622[(8)]);
var inst_32605 = cljs.core.async.muxch_STAR_.call(null,inst_32603);
var state_32622__$1 = state_32622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32622__$1,(22),inst_32605,inst_32553);
} else {
if((state_val_32623 === (11))){
var inst_32563 = (state_32622[(12)]);
var inst_32577 = (state_32622[(10)]);
var inst_32577__$1 = cljs.core.seq.call(null,inst_32563);
var state_32622__$1 = (function (){var statearr_32646 = state_32622;
(statearr_32646[(10)] = inst_32577__$1);

return statearr_32646;
})();
if(inst_32577__$1){
var statearr_32647_32687 = state_32622__$1;
(statearr_32647_32687[(1)] = (13));

} else {
var statearr_32648_32688 = state_32622__$1;
(statearr_32648_32688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (9))){
var inst_32599 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32649_32689 = state_32622__$1;
(statearr_32649_32689[(2)] = inst_32599);

(statearr_32649_32689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (5))){
var inst_32560 = cljs.core.deref.call(null,mults);
var inst_32561 = cljs.core.vals.call(null,inst_32560);
var inst_32562 = cljs.core.seq.call(null,inst_32561);
var inst_32563 = inst_32562;
var inst_32564 = null;
var inst_32565 = (0);
var inst_32566 = (0);
var state_32622__$1 = (function (){var statearr_32650 = state_32622;
(statearr_32650[(12)] = inst_32563);

(statearr_32650[(13)] = inst_32564);

(statearr_32650[(14)] = inst_32566);

(statearr_32650[(16)] = inst_32565);

return statearr_32650;
})();
var statearr_32651_32690 = state_32622__$1;
(statearr_32651_32690[(2)] = null);

(statearr_32651_32690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (14))){
var state_32622__$1 = state_32622;
var statearr_32655_32691 = state_32622__$1;
(statearr_32655_32691[(2)] = null);

(statearr_32655_32691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (16))){
var inst_32577 = (state_32622[(10)]);
var inst_32581 = cljs.core.chunk_first.call(null,inst_32577);
var inst_32582 = cljs.core.chunk_rest.call(null,inst_32577);
var inst_32583 = cljs.core.count.call(null,inst_32581);
var inst_32563 = inst_32582;
var inst_32564 = inst_32581;
var inst_32565 = inst_32583;
var inst_32566 = (0);
var state_32622__$1 = (function (){var statearr_32656 = state_32622;
(statearr_32656[(12)] = inst_32563);

(statearr_32656[(13)] = inst_32564);

(statearr_32656[(14)] = inst_32566);

(statearr_32656[(16)] = inst_32565);

return statearr_32656;
})();
var statearr_32657_32692 = state_32622__$1;
(statearr_32657_32692[(2)] = null);

(statearr_32657_32692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (10))){
var inst_32563 = (state_32622[(12)]);
var inst_32564 = (state_32622[(13)]);
var inst_32566 = (state_32622[(14)]);
var inst_32565 = (state_32622[(16)]);
var inst_32571 = cljs.core._nth.call(null,inst_32564,inst_32566);
var inst_32572 = cljs.core.async.muxch_STAR_.call(null,inst_32571);
var inst_32573 = cljs.core.async.close_BANG_.call(null,inst_32572);
var inst_32574 = (inst_32566 + (1));
var tmp32652 = inst_32563;
var tmp32653 = inst_32564;
var tmp32654 = inst_32565;
var inst_32563__$1 = tmp32652;
var inst_32564__$1 = tmp32653;
var inst_32565__$1 = tmp32654;
var inst_32566__$1 = inst_32574;
var state_32622__$1 = (function (){var statearr_32658 = state_32622;
(statearr_32658[(12)] = inst_32563__$1);

(statearr_32658[(13)] = inst_32564__$1);

(statearr_32658[(17)] = inst_32573);

(statearr_32658[(14)] = inst_32566__$1);

(statearr_32658[(16)] = inst_32565__$1);

return statearr_32658;
})();
var statearr_32659_32693 = state_32622__$1;
(statearr_32659_32693[(2)] = null);

(statearr_32659_32693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (18))){
var inst_32592 = (state_32622[(2)]);
var state_32622__$1 = state_32622;
var statearr_32660_32694 = state_32622__$1;
(statearr_32660_32694[(2)] = inst_32592);

(statearr_32660_32694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32623 === (8))){
var inst_32566 = (state_32622[(14)]);
var inst_32565 = (state_32622[(16)]);
var inst_32568 = (inst_32566 < inst_32565);
var inst_32569 = inst_32568;
var state_32622__$1 = state_32622;
if(cljs.core.truth_(inst_32569)){
var statearr_32661_32695 = state_32622__$1;
(statearr_32661_32695[(1)] = (10));

} else {
var statearr_32662_32696 = state_32622__$1;
(statearr_32662_32696[(1)] = (11));

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
});})(c__31448__auto___32668,mults,ensure_mult,p))
;
return ((function (switch__31360__auto__,c__31448__auto___32668,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31361__auto__ = null;
var cljs$core$async$state_machine__31361__auto____0 = (function (){
var statearr_32663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32663[(0)] = cljs$core$async$state_machine__31361__auto__);

(statearr_32663[(1)] = (1));

return statearr_32663;
});
var cljs$core$async$state_machine__31361__auto____1 = (function (state_32622){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_32622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e32664){if((e32664 instanceof Object)){
var ex__31364__auto__ = e32664;
var statearr_32665_32697 = state_32622;
(statearr_32665_32697[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32698 = state_32622;
state_32622 = G__32698;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$state_machine__31361__auto__ = function(state_32622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31361__auto____1.call(this,state_32622);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31361__auto____0;
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31361__auto____1;
return cljs$core$async$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___32668,mults,ensure_mult,p))
})();
var state__31450__auto__ = (function (){var statearr_32666 = f__31449__auto__.call(null);
(statearr_32666[(6)] = c__31448__auto___32668);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___32668,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32700 = arguments.length;
switch (G__32700) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32703 = arguments.length;
switch (G__32703) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32706 = arguments.length;
switch (G__32706) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31448__auto___32773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32745){
var state_val_32746 = (state_32745[(1)]);
if((state_val_32746 === (7))){
var state_32745__$1 = state_32745;
var statearr_32747_32774 = state_32745__$1;
(statearr_32747_32774[(2)] = null);

(statearr_32747_32774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (1))){
var state_32745__$1 = state_32745;
var statearr_32748_32775 = state_32745__$1;
(statearr_32748_32775[(2)] = null);

(statearr_32748_32775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (4))){
var inst_32709 = (state_32745[(7)]);
var inst_32711 = (inst_32709 < cnt);
var state_32745__$1 = state_32745;
if(cljs.core.truth_(inst_32711)){
var statearr_32749_32776 = state_32745__$1;
(statearr_32749_32776[(1)] = (6));

} else {
var statearr_32750_32777 = state_32745__$1;
(statearr_32750_32777[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (15))){
var inst_32741 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
var statearr_32751_32778 = state_32745__$1;
(statearr_32751_32778[(2)] = inst_32741);

(statearr_32751_32778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (13))){
var inst_32734 = cljs.core.async.close_BANG_.call(null,out);
var state_32745__$1 = state_32745;
var statearr_32752_32779 = state_32745__$1;
(statearr_32752_32779[(2)] = inst_32734);

(statearr_32752_32779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (6))){
var state_32745__$1 = state_32745;
var statearr_32753_32780 = state_32745__$1;
(statearr_32753_32780[(2)] = null);

(statearr_32753_32780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (3))){
var inst_32743 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32745__$1,inst_32743);
} else {
if((state_val_32746 === (12))){
var inst_32731 = (state_32745[(8)]);
var inst_32731__$1 = (state_32745[(2)]);
var inst_32732 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32731__$1);
var state_32745__$1 = (function (){var statearr_32754 = state_32745;
(statearr_32754[(8)] = inst_32731__$1);

return statearr_32754;
})();
if(cljs.core.truth_(inst_32732)){
var statearr_32755_32781 = state_32745__$1;
(statearr_32755_32781[(1)] = (13));

} else {
var statearr_32756_32782 = state_32745__$1;
(statearr_32756_32782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (2))){
var inst_32708 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32709 = (0);
var state_32745__$1 = (function (){var statearr_32757 = state_32745;
(statearr_32757[(9)] = inst_32708);

(statearr_32757[(7)] = inst_32709);

return statearr_32757;
})();
var statearr_32758_32783 = state_32745__$1;
(statearr_32758_32783[(2)] = null);

(statearr_32758_32783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (11))){
var inst_32709 = (state_32745[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32745,(10),Object,null,(9));
var inst_32718 = chs__$1.call(null,inst_32709);
var inst_32719 = done.call(null,inst_32709);
var inst_32720 = cljs.core.async.take_BANG_.call(null,inst_32718,inst_32719);
var state_32745__$1 = state_32745;
var statearr_32759_32784 = state_32745__$1;
(statearr_32759_32784[(2)] = inst_32720);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32745__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (9))){
var inst_32709 = (state_32745[(7)]);
var inst_32722 = (state_32745[(2)]);
var inst_32723 = (inst_32709 + (1));
var inst_32709__$1 = inst_32723;
var state_32745__$1 = (function (){var statearr_32760 = state_32745;
(statearr_32760[(10)] = inst_32722);

(statearr_32760[(7)] = inst_32709__$1);

return statearr_32760;
})();
var statearr_32761_32785 = state_32745__$1;
(statearr_32761_32785[(2)] = null);

(statearr_32761_32785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (5))){
var inst_32729 = (state_32745[(2)]);
var state_32745__$1 = (function (){var statearr_32762 = state_32745;
(statearr_32762[(11)] = inst_32729);

return statearr_32762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32745__$1,(12),dchan);
} else {
if((state_val_32746 === (14))){
var inst_32731 = (state_32745[(8)]);
var inst_32736 = cljs.core.apply.call(null,f,inst_32731);
var state_32745__$1 = state_32745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32745__$1,(16),out,inst_32736);
} else {
if((state_val_32746 === (16))){
var inst_32738 = (state_32745[(2)]);
var state_32745__$1 = (function (){var statearr_32763 = state_32745;
(statearr_32763[(12)] = inst_32738);

return statearr_32763;
})();
var statearr_32764_32786 = state_32745__$1;
(statearr_32764_32786[(2)] = null);

(statearr_32764_32786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (10))){
var inst_32713 = (state_32745[(2)]);
var inst_32714 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32745__$1 = (function (){var statearr_32765 = state_32745;
(statearr_32765[(13)] = inst_32713);

return statearr_32765;
})();
var statearr_32766_32787 = state_32745__$1;
(statearr_32766_32787[(2)] = inst_32714);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32745__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32746 === (8))){
var inst_32727 = (state_32745[(2)]);
var state_32745__$1 = state_32745;
var statearr_32767_32788 = state_32745__$1;
(statearr_32767_32788[(2)] = inst_32727);

(statearr_32767_32788[(1)] = (5));


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
});})(c__31448__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31360__auto__,c__31448__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31361__auto__ = null;
var cljs$core$async$state_machine__31361__auto____0 = (function (){
var statearr_32768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32768[(0)] = cljs$core$async$state_machine__31361__auto__);

(statearr_32768[(1)] = (1));

return statearr_32768;
});
var cljs$core$async$state_machine__31361__auto____1 = (function (state_32745){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_32745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e32769){if((e32769 instanceof Object)){
var ex__31364__auto__ = e32769;
var statearr_32770_32789 = state_32745;
(statearr_32770_32789[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32790 = state_32745;
state_32745 = G__32790;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$state_machine__31361__auto__ = function(state_32745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31361__auto____1.call(this,state_32745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31361__auto____0;
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31361__auto____1;
return cljs$core$async$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31450__auto__ = (function (){var statearr_32771 = f__31449__auto__.call(null);
(statearr_32771[(6)] = c__31448__auto___32773);

return statearr_32771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___32773,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32793 = arguments.length;
switch (G__32793) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31448__auto___32847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___32847,out){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___32847,out){
return (function (state_32825){
var state_val_32826 = (state_32825[(1)]);
if((state_val_32826 === (7))){
var inst_32804 = (state_32825[(7)]);
var inst_32805 = (state_32825[(8)]);
var inst_32804__$1 = (state_32825[(2)]);
var inst_32805__$1 = cljs.core.nth.call(null,inst_32804__$1,(0),null);
var inst_32806 = cljs.core.nth.call(null,inst_32804__$1,(1),null);
var inst_32807 = (inst_32805__$1 == null);
var state_32825__$1 = (function (){var statearr_32827 = state_32825;
(statearr_32827[(9)] = inst_32806);

(statearr_32827[(7)] = inst_32804__$1);

(statearr_32827[(8)] = inst_32805__$1);

return statearr_32827;
})();
if(cljs.core.truth_(inst_32807)){
var statearr_32828_32848 = state_32825__$1;
(statearr_32828_32848[(1)] = (8));

} else {
var statearr_32829_32849 = state_32825__$1;
(statearr_32829_32849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (1))){
var inst_32794 = cljs.core.vec.call(null,chs);
var inst_32795 = inst_32794;
var state_32825__$1 = (function (){var statearr_32830 = state_32825;
(statearr_32830[(10)] = inst_32795);

return statearr_32830;
})();
var statearr_32831_32850 = state_32825__$1;
(statearr_32831_32850[(2)] = null);

(statearr_32831_32850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (4))){
var inst_32795 = (state_32825[(10)]);
var state_32825__$1 = state_32825;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32825__$1,(7),inst_32795);
} else {
if((state_val_32826 === (6))){
var inst_32821 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32832_32851 = state_32825__$1;
(statearr_32832_32851[(2)] = inst_32821);

(statearr_32832_32851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (3))){
var inst_32823 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32825__$1,inst_32823);
} else {
if((state_val_32826 === (2))){
var inst_32795 = (state_32825[(10)]);
var inst_32797 = cljs.core.count.call(null,inst_32795);
var inst_32798 = (inst_32797 > (0));
var state_32825__$1 = state_32825;
if(cljs.core.truth_(inst_32798)){
var statearr_32834_32852 = state_32825__$1;
(statearr_32834_32852[(1)] = (4));

} else {
var statearr_32835_32853 = state_32825__$1;
(statearr_32835_32853[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (11))){
var inst_32795 = (state_32825[(10)]);
var inst_32814 = (state_32825[(2)]);
var tmp32833 = inst_32795;
var inst_32795__$1 = tmp32833;
var state_32825__$1 = (function (){var statearr_32836 = state_32825;
(statearr_32836[(11)] = inst_32814);

(statearr_32836[(10)] = inst_32795__$1);

return statearr_32836;
})();
var statearr_32837_32854 = state_32825__$1;
(statearr_32837_32854[(2)] = null);

(statearr_32837_32854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (9))){
var inst_32805 = (state_32825[(8)]);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32825__$1,(11),out,inst_32805);
} else {
if((state_val_32826 === (5))){
var inst_32819 = cljs.core.async.close_BANG_.call(null,out);
var state_32825__$1 = state_32825;
var statearr_32838_32855 = state_32825__$1;
(statearr_32838_32855[(2)] = inst_32819);

(statearr_32838_32855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (10))){
var inst_32817 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32839_32856 = state_32825__$1;
(statearr_32839_32856[(2)] = inst_32817);

(statearr_32839_32856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (8))){
var inst_32806 = (state_32825[(9)]);
var inst_32795 = (state_32825[(10)]);
var inst_32804 = (state_32825[(7)]);
var inst_32805 = (state_32825[(8)]);
var inst_32809 = (function (){var cs = inst_32795;
var vec__32800 = inst_32804;
var v = inst_32805;
var c = inst_32806;
return ((function (cs,vec__32800,v,c,inst_32806,inst_32795,inst_32804,inst_32805,state_val_32826,c__31448__auto___32847,out){
return (function (p1__32791_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32791_SHARP_);
});
;})(cs,vec__32800,v,c,inst_32806,inst_32795,inst_32804,inst_32805,state_val_32826,c__31448__auto___32847,out))
})();
var inst_32810 = cljs.core.filterv.call(null,inst_32809,inst_32795);
var inst_32795__$1 = inst_32810;
var state_32825__$1 = (function (){var statearr_32840 = state_32825;
(statearr_32840[(10)] = inst_32795__$1);

return statearr_32840;
})();
var statearr_32841_32857 = state_32825__$1;
(statearr_32841_32857[(2)] = null);

(statearr_32841_32857[(1)] = (2));


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
});})(c__31448__auto___32847,out))
;
return ((function (switch__31360__auto__,c__31448__auto___32847,out){
return (function() {
var cljs$core$async$state_machine__31361__auto__ = null;
var cljs$core$async$state_machine__31361__auto____0 = (function (){
var statearr_32842 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32842[(0)] = cljs$core$async$state_machine__31361__auto__);

(statearr_32842[(1)] = (1));

return statearr_32842;
});
var cljs$core$async$state_machine__31361__auto____1 = (function (state_32825){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_32825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e32843){if((e32843 instanceof Object)){
var ex__31364__auto__ = e32843;
var statearr_32844_32858 = state_32825;
(statearr_32844_32858[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32859 = state_32825;
state_32825 = G__32859;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$state_machine__31361__auto__ = function(state_32825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31361__auto____1.call(this,state_32825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31361__auto____0;
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31361__auto____1;
return cljs$core$async$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___32847,out))
})();
var state__31450__auto__ = (function (){var statearr_32845 = f__31449__auto__.call(null);
(statearr_32845[(6)] = c__31448__auto___32847);

return statearr_32845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___32847,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32861 = arguments.length;
switch (G__32861) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31448__auto___32906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___32906,out){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___32906,out){
return (function (state_32885){
var state_val_32886 = (state_32885[(1)]);
if((state_val_32886 === (7))){
var inst_32867 = (state_32885[(7)]);
var inst_32867__$1 = (state_32885[(2)]);
var inst_32868 = (inst_32867__$1 == null);
var inst_32869 = cljs.core.not.call(null,inst_32868);
var state_32885__$1 = (function (){var statearr_32887 = state_32885;
(statearr_32887[(7)] = inst_32867__$1);

return statearr_32887;
})();
if(inst_32869){
var statearr_32888_32907 = state_32885__$1;
(statearr_32888_32907[(1)] = (8));

} else {
var statearr_32889_32908 = state_32885__$1;
(statearr_32889_32908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (1))){
var inst_32862 = (0);
var state_32885__$1 = (function (){var statearr_32890 = state_32885;
(statearr_32890[(8)] = inst_32862);

return statearr_32890;
})();
var statearr_32891_32909 = state_32885__$1;
(statearr_32891_32909[(2)] = null);

(statearr_32891_32909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (4))){
var state_32885__$1 = state_32885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32885__$1,(7),ch);
} else {
if((state_val_32886 === (6))){
var inst_32880 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
var statearr_32892_32910 = state_32885__$1;
(statearr_32892_32910[(2)] = inst_32880);

(statearr_32892_32910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (3))){
var inst_32882 = (state_32885[(2)]);
var inst_32883 = cljs.core.async.close_BANG_.call(null,out);
var state_32885__$1 = (function (){var statearr_32893 = state_32885;
(statearr_32893[(9)] = inst_32882);

return statearr_32893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32885__$1,inst_32883);
} else {
if((state_val_32886 === (2))){
var inst_32862 = (state_32885[(8)]);
var inst_32864 = (inst_32862 < n);
var state_32885__$1 = state_32885;
if(cljs.core.truth_(inst_32864)){
var statearr_32894_32911 = state_32885__$1;
(statearr_32894_32911[(1)] = (4));

} else {
var statearr_32895_32912 = state_32885__$1;
(statearr_32895_32912[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (11))){
var inst_32862 = (state_32885[(8)]);
var inst_32872 = (state_32885[(2)]);
var inst_32873 = (inst_32862 + (1));
var inst_32862__$1 = inst_32873;
var state_32885__$1 = (function (){var statearr_32896 = state_32885;
(statearr_32896[(10)] = inst_32872);

(statearr_32896[(8)] = inst_32862__$1);

return statearr_32896;
})();
var statearr_32897_32913 = state_32885__$1;
(statearr_32897_32913[(2)] = null);

(statearr_32897_32913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (9))){
var state_32885__$1 = state_32885;
var statearr_32898_32914 = state_32885__$1;
(statearr_32898_32914[(2)] = null);

(statearr_32898_32914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (5))){
var state_32885__$1 = state_32885;
var statearr_32899_32915 = state_32885__$1;
(statearr_32899_32915[(2)] = null);

(statearr_32899_32915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (10))){
var inst_32877 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
var statearr_32900_32916 = state_32885__$1;
(statearr_32900_32916[(2)] = inst_32877);

(statearr_32900_32916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (8))){
var inst_32867 = (state_32885[(7)]);
var state_32885__$1 = state_32885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32885__$1,(11),out,inst_32867);
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
});})(c__31448__auto___32906,out))
;
return ((function (switch__31360__auto__,c__31448__auto___32906,out){
return (function() {
var cljs$core$async$state_machine__31361__auto__ = null;
var cljs$core$async$state_machine__31361__auto____0 = (function (){
var statearr_32901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32901[(0)] = cljs$core$async$state_machine__31361__auto__);

(statearr_32901[(1)] = (1));

return statearr_32901;
});
var cljs$core$async$state_machine__31361__auto____1 = (function (state_32885){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_32885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e32902){if((e32902 instanceof Object)){
var ex__31364__auto__ = e32902;
var statearr_32903_32917 = state_32885;
(statearr_32903_32917[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32918 = state_32885;
state_32885 = G__32918;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$state_machine__31361__auto__ = function(state_32885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31361__auto____1.call(this,state_32885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31361__auto____0;
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31361__auto____1;
return cljs$core$async$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___32906,out))
})();
var state__31450__auto__ = (function (){var statearr_32904 = f__31449__auto__.call(null);
(statearr_32904[(6)] = c__31448__auto___32906);

return statearr_32904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___32906,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32920 = (function (f,ch,meta32921){
this.f = f;
this.ch = ch;
this.meta32921 = meta32921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32922,meta32921__$1){
var self__ = this;
var _32922__$1 = this;
return (new cljs.core.async.t_cljs$core$async32920(self__.f,self__.ch,meta32921__$1));
});

cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32922){
var self__ = this;
var _32922__$1 = this;
return self__.meta32921;
});

cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32923 = (function (f,ch,meta32921,_,fn1,meta32924){
this.f = f;
this.ch = ch;
this.meta32921 = meta32921;
this._ = _;
this.fn1 = fn1;
this.meta32924 = meta32924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32925,meta32924__$1){
var self__ = this;
var _32925__$1 = this;
return (new cljs.core.async.t_cljs$core$async32923(self__.f,self__.ch,self__.meta32921,self__._,self__.fn1,meta32924__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32925){
var self__ = this;
var _32925__$1 = this;
return self__.meta32924;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32919_SHARP_){
return f1.call(null,(((p1__32919_SHARP_ == null))?null:self__.f.call(null,p1__32919_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32923.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32921","meta32921",-1669582887,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32920","cljs.core.async/t_cljs$core$async32920",1826834127,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32924","meta32924",-1276503101,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32923";

cljs.core.async.t_cljs$core$async32923.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28915__auto__,writer__28916__auto__,opt__28917__auto__){
return cljs.core._write.call(null,writer__28916__auto__,"cljs.core.async/t_cljs$core$async32923");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32923 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32923(f__$1,ch__$1,meta32921__$1,___$2,fn1__$1,meta32924){
return (new cljs.core.async.t_cljs$core$async32923(f__$1,ch__$1,meta32921__$1,___$2,fn1__$1,meta32924));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32923(self__.f,self__.ch,self__.meta32921,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28278__auto__ = ret;
if(cljs.core.truth_(and__28278__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28278__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32921","meta32921",-1669582887,null)], null);
});

cljs.core.async.t_cljs$core$async32920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32920";

cljs.core.async.t_cljs$core$async32920.cljs$lang$ctorPrWriter = (function (this__28915__auto__,writer__28916__auto__,opt__28917__auto__){
return cljs.core._write.call(null,writer__28916__auto__,"cljs.core.async/t_cljs$core$async32920");
});

cljs.core.async.__GT_t_cljs$core$async32920 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32920(f__$1,ch__$1,meta32921){
return (new cljs.core.async.t_cljs$core$async32920(f__$1,ch__$1,meta32921));
});

}

return (new cljs.core.async.t_cljs$core$async32920(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32926 = (function (f,ch,meta32927){
this.f = f;
this.ch = ch;
this.meta32927 = meta32927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32928,meta32927__$1){
var self__ = this;
var _32928__$1 = this;
return (new cljs.core.async.t_cljs$core$async32926(self__.f,self__.ch,meta32927__$1));
});

cljs.core.async.t_cljs$core$async32926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32928){
var self__ = this;
var _32928__$1 = this;
return self__.meta32927;
});

cljs.core.async.t_cljs$core$async32926.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32926.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32926.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32927","meta32927",-1231883696,null)], null);
});

cljs.core.async.t_cljs$core$async32926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32926";

cljs.core.async.t_cljs$core$async32926.cljs$lang$ctorPrWriter = (function (this__28915__auto__,writer__28916__auto__,opt__28917__auto__){
return cljs.core._write.call(null,writer__28916__auto__,"cljs.core.async/t_cljs$core$async32926");
});

cljs.core.async.__GT_t_cljs$core$async32926 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32926(f__$1,ch__$1,meta32927){
return (new cljs.core.async.t_cljs$core$async32926(f__$1,ch__$1,meta32927));
});

}

return (new cljs.core.async.t_cljs$core$async32926(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32929 = (function (p,ch,meta32930){
this.p = p;
this.ch = ch;
this.meta32930 = meta32930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32931,meta32930__$1){
var self__ = this;
var _32931__$1 = this;
return (new cljs.core.async.t_cljs$core$async32929(self__.p,self__.ch,meta32930__$1));
});

cljs.core.async.t_cljs$core$async32929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32931){
var self__ = this;
var _32931__$1 = this;
return self__.meta32930;
});

cljs.core.async.t_cljs$core$async32929.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32929.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32929.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32929.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32929.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32929.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32929.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32930","meta32930",-846727599,null)], null);
});

cljs.core.async.t_cljs$core$async32929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32929";

cljs.core.async.t_cljs$core$async32929.cljs$lang$ctorPrWriter = (function (this__28915__auto__,writer__28916__auto__,opt__28917__auto__){
return cljs.core._write.call(null,writer__28916__auto__,"cljs.core.async/t_cljs$core$async32929");
});

cljs.core.async.__GT_t_cljs$core$async32929 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32929(p__$1,ch__$1,meta32930){
return (new cljs.core.async.t_cljs$core$async32929(p__$1,ch__$1,meta32930));
});

}

return (new cljs.core.async.t_cljs$core$async32929(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32933 = arguments.length;
switch (G__32933) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31448__auto___32973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___32973,out){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___32973,out){
return (function (state_32954){
var state_val_32955 = (state_32954[(1)]);
if((state_val_32955 === (7))){
var inst_32950 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32956_32974 = state_32954__$1;
(statearr_32956_32974[(2)] = inst_32950);

(statearr_32956_32974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (1))){
var state_32954__$1 = state_32954;
var statearr_32957_32975 = state_32954__$1;
(statearr_32957_32975[(2)] = null);

(statearr_32957_32975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (4))){
var inst_32936 = (state_32954[(7)]);
var inst_32936__$1 = (state_32954[(2)]);
var inst_32937 = (inst_32936__$1 == null);
var state_32954__$1 = (function (){var statearr_32958 = state_32954;
(statearr_32958[(7)] = inst_32936__$1);

return statearr_32958;
})();
if(cljs.core.truth_(inst_32937)){
var statearr_32959_32976 = state_32954__$1;
(statearr_32959_32976[(1)] = (5));

} else {
var statearr_32960_32977 = state_32954__$1;
(statearr_32960_32977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (6))){
var inst_32936 = (state_32954[(7)]);
var inst_32941 = p.call(null,inst_32936);
var state_32954__$1 = state_32954;
if(cljs.core.truth_(inst_32941)){
var statearr_32961_32978 = state_32954__$1;
(statearr_32961_32978[(1)] = (8));

} else {
var statearr_32962_32979 = state_32954__$1;
(statearr_32962_32979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (3))){
var inst_32952 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32954__$1,inst_32952);
} else {
if((state_val_32955 === (2))){
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32954__$1,(4),ch);
} else {
if((state_val_32955 === (11))){
var inst_32944 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32963_32980 = state_32954__$1;
(statearr_32963_32980[(2)] = inst_32944);

(statearr_32963_32980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (9))){
var state_32954__$1 = state_32954;
var statearr_32964_32981 = state_32954__$1;
(statearr_32964_32981[(2)] = null);

(statearr_32964_32981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (5))){
var inst_32939 = cljs.core.async.close_BANG_.call(null,out);
var state_32954__$1 = state_32954;
var statearr_32965_32982 = state_32954__$1;
(statearr_32965_32982[(2)] = inst_32939);

(statearr_32965_32982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (10))){
var inst_32947 = (state_32954[(2)]);
var state_32954__$1 = (function (){var statearr_32966 = state_32954;
(statearr_32966[(8)] = inst_32947);

return statearr_32966;
})();
var statearr_32967_32983 = state_32954__$1;
(statearr_32967_32983[(2)] = null);

(statearr_32967_32983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (8))){
var inst_32936 = (state_32954[(7)]);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32954__$1,(11),out,inst_32936);
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
});})(c__31448__auto___32973,out))
;
return ((function (switch__31360__auto__,c__31448__auto___32973,out){
return (function() {
var cljs$core$async$state_machine__31361__auto__ = null;
var cljs$core$async$state_machine__31361__auto____0 = (function (){
var statearr_32968 = [null,null,null,null,null,null,null,null,null];
(statearr_32968[(0)] = cljs$core$async$state_machine__31361__auto__);

(statearr_32968[(1)] = (1));

return statearr_32968;
});
var cljs$core$async$state_machine__31361__auto____1 = (function (state_32954){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_32954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e32969){if((e32969 instanceof Object)){
var ex__31364__auto__ = e32969;
var statearr_32970_32984 = state_32954;
(statearr_32970_32984[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32985 = state_32954;
state_32954 = G__32985;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$state_machine__31361__auto__ = function(state_32954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31361__auto____1.call(this,state_32954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31361__auto____0;
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31361__auto____1;
return cljs$core$async$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___32973,out))
})();
var state__31450__auto__ = (function (){var statearr_32971 = f__31449__auto__.call(null);
(statearr_32971[(6)] = c__31448__auto___32973);

return statearr_32971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___32973,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32987 = arguments.length;
switch (G__32987) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto__){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto__){
return (function (state_33050){
var state_val_33051 = (state_33050[(1)]);
if((state_val_33051 === (7))){
var inst_33046 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33052_33090 = state_33050__$1;
(statearr_33052_33090[(2)] = inst_33046);

(statearr_33052_33090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (20))){
var inst_33016 = (state_33050[(7)]);
var inst_33027 = (state_33050[(2)]);
var inst_33028 = cljs.core.next.call(null,inst_33016);
var inst_33002 = inst_33028;
var inst_33003 = null;
var inst_33004 = (0);
var inst_33005 = (0);
var state_33050__$1 = (function (){var statearr_33053 = state_33050;
(statearr_33053[(8)] = inst_33003);

(statearr_33053[(9)] = inst_33004);

(statearr_33053[(10)] = inst_33002);

(statearr_33053[(11)] = inst_33005);

(statearr_33053[(12)] = inst_33027);

return statearr_33053;
})();
var statearr_33054_33091 = state_33050__$1;
(statearr_33054_33091[(2)] = null);

(statearr_33054_33091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (1))){
var state_33050__$1 = state_33050;
var statearr_33055_33092 = state_33050__$1;
(statearr_33055_33092[(2)] = null);

(statearr_33055_33092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (4))){
var inst_32991 = (state_33050[(13)]);
var inst_32991__$1 = (state_33050[(2)]);
var inst_32992 = (inst_32991__$1 == null);
var state_33050__$1 = (function (){var statearr_33056 = state_33050;
(statearr_33056[(13)] = inst_32991__$1);

return statearr_33056;
})();
if(cljs.core.truth_(inst_32992)){
var statearr_33057_33093 = state_33050__$1;
(statearr_33057_33093[(1)] = (5));

} else {
var statearr_33058_33094 = state_33050__$1;
(statearr_33058_33094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (15))){
var state_33050__$1 = state_33050;
var statearr_33062_33095 = state_33050__$1;
(statearr_33062_33095[(2)] = null);

(statearr_33062_33095[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (21))){
var state_33050__$1 = state_33050;
var statearr_33063_33096 = state_33050__$1;
(statearr_33063_33096[(2)] = null);

(statearr_33063_33096[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (13))){
var inst_33003 = (state_33050[(8)]);
var inst_33004 = (state_33050[(9)]);
var inst_33002 = (state_33050[(10)]);
var inst_33005 = (state_33050[(11)]);
var inst_33012 = (state_33050[(2)]);
var inst_33013 = (inst_33005 + (1));
var tmp33059 = inst_33003;
var tmp33060 = inst_33004;
var tmp33061 = inst_33002;
var inst_33002__$1 = tmp33061;
var inst_33003__$1 = tmp33059;
var inst_33004__$1 = tmp33060;
var inst_33005__$1 = inst_33013;
var state_33050__$1 = (function (){var statearr_33064 = state_33050;
(statearr_33064[(8)] = inst_33003__$1);

(statearr_33064[(9)] = inst_33004__$1);

(statearr_33064[(10)] = inst_33002__$1);

(statearr_33064[(11)] = inst_33005__$1);

(statearr_33064[(14)] = inst_33012);

return statearr_33064;
})();
var statearr_33065_33097 = state_33050__$1;
(statearr_33065_33097[(2)] = null);

(statearr_33065_33097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (22))){
var state_33050__$1 = state_33050;
var statearr_33066_33098 = state_33050__$1;
(statearr_33066_33098[(2)] = null);

(statearr_33066_33098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (6))){
var inst_32991 = (state_33050[(13)]);
var inst_33000 = f.call(null,inst_32991);
var inst_33001 = cljs.core.seq.call(null,inst_33000);
var inst_33002 = inst_33001;
var inst_33003 = null;
var inst_33004 = (0);
var inst_33005 = (0);
var state_33050__$1 = (function (){var statearr_33067 = state_33050;
(statearr_33067[(8)] = inst_33003);

(statearr_33067[(9)] = inst_33004);

(statearr_33067[(10)] = inst_33002);

(statearr_33067[(11)] = inst_33005);

return statearr_33067;
})();
var statearr_33068_33099 = state_33050__$1;
(statearr_33068_33099[(2)] = null);

(statearr_33068_33099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (17))){
var inst_33016 = (state_33050[(7)]);
var inst_33020 = cljs.core.chunk_first.call(null,inst_33016);
var inst_33021 = cljs.core.chunk_rest.call(null,inst_33016);
var inst_33022 = cljs.core.count.call(null,inst_33020);
var inst_33002 = inst_33021;
var inst_33003 = inst_33020;
var inst_33004 = inst_33022;
var inst_33005 = (0);
var state_33050__$1 = (function (){var statearr_33069 = state_33050;
(statearr_33069[(8)] = inst_33003);

(statearr_33069[(9)] = inst_33004);

(statearr_33069[(10)] = inst_33002);

(statearr_33069[(11)] = inst_33005);

return statearr_33069;
})();
var statearr_33070_33100 = state_33050__$1;
(statearr_33070_33100[(2)] = null);

(statearr_33070_33100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (3))){
var inst_33048 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33050__$1,inst_33048);
} else {
if((state_val_33051 === (12))){
var inst_33036 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33071_33101 = state_33050__$1;
(statearr_33071_33101[(2)] = inst_33036);

(statearr_33071_33101[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (2))){
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33050__$1,(4),in$);
} else {
if((state_val_33051 === (23))){
var inst_33044 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33072_33102 = state_33050__$1;
(statearr_33072_33102[(2)] = inst_33044);

(statearr_33072_33102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (19))){
var inst_33031 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33073_33103 = state_33050__$1;
(statearr_33073_33103[(2)] = inst_33031);

(statearr_33073_33103[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (11))){
var inst_33016 = (state_33050[(7)]);
var inst_33002 = (state_33050[(10)]);
var inst_33016__$1 = cljs.core.seq.call(null,inst_33002);
var state_33050__$1 = (function (){var statearr_33074 = state_33050;
(statearr_33074[(7)] = inst_33016__$1);

return statearr_33074;
})();
if(inst_33016__$1){
var statearr_33075_33104 = state_33050__$1;
(statearr_33075_33104[(1)] = (14));

} else {
var statearr_33076_33105 = state_33050__$1;
(statearr_33076_33105[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (9))){
var inst_33038 = (state_33050[(2)]);
var inst_33039 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33050__$1 = (function (){var statearr_33077 = state_33050;
(statearr_33077[(15)] = inst_33038);

return statearr_33077;
})();
if(cljs.core.truth_(inst_33039)){
var statearr_33078_33106 = state_33050__$1;
(statearr_33078_33106[(1)] = (21));

} else {
var statearr_33079_33107 = state_33050__$1;
(statearr_33079_33107[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (5))){
var inst_32994 = cljs.core.async.close_BANG_.call(null,out);
var state_33050__$1 = state_33050;
var statearr_33080_33108 = state_33050__$1;
(statearr_33080_33108[(2)] = inst_32994);

(statearr_33080_33108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (14))){
var inst_33016 = (state_33050[(7)]);
var inst_33018 = cljs.core.chunked_seq_QMARK_.call(null,inst_33016);
var state_33050__$1 = state_33050;
if(inst_33018){
var statearr_33081_33109 = state_33050__$1;
(statearr_33081_33109[(1)] = (17));

} else {
var statearr_33082_33110 = state_33050__$1;
(statearr_33082_33110[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (16))){
var inst_33034 = (state_33050[(2)]);
var state_33050__$1 = state_33050;
var statearr_33083_33111 = state_33050__$1;
(statearr_33083_33111[(2)] = inst_33034);

(statearr_33083_33111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33051 === (10))){
var inst_33003 = (state_33050[(8)]);
var inst_33005 = (state_33050[(11)]);
var inst_33010 = cljs.core._nth.call(null,inst_33003,inst_33005);
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33050__$1,(13),out,inst_33010);
} else {
if((state_val_33051 === (18))){
var inst_33016 = (state_33050[(7)]);
var inst_33025 = cljs.core.first.call(null,inst_33016);
var state_33050__$1 = state_33050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33050__$1,(20),out,inst_33025);
} else {
if((state_val_33051 === (8))){
var inst_33004 = (state_33050[(9)]);
var inst_33005 = (state_33050[(11)]);
var inst_33007 = (inst_33005 < inst_33004);
var inst_33008 = inst_33007;
var state_33050__$1 = state_33050;
if(cljs.core.truth_(inst_33008)){
var statearr_33084_33112 = state_33050__$1;
(statearr_33084_33112[(1)] = (10));

} else {
var statearr_33085_33113 = state_33050__$1;
(statearr_33085_33113[(1)] = (11));

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
});})(c__31448__auto__))
;
return ((function (switch__31360__auto__,c__31448__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31361__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31361__auto____0 = (function (){
var statearr_33086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33086[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31361__auto__);

(statearr_33086[(1)] = (1));

return statearr_33086;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31361__auto____1 = (function (state_33050){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_33050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e33087){if((e33087 instanceof Object)){
var ex__31364__auto__ = e33087;
var statearr_33088_33114 = state_33050;
(statearr_33088_33114[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33115 = state_33050;
state_33050 = G__33115;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31361__auto__ = function(state_33050){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31361__auto____1.call(this,state_33050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31361__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31361__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto__))
})();
var state__31450__auto__ = (function (){var statearr_33089 = f__31449__auto__.call(null);
(statearr_33089[(6)] = c__31448__auto__);

return statearr_33089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto__))
);

return c__31448__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33117 = arguments.length;
switch (G__33117) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33120 = arguments.length;
switch (G__33120) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33123 = arguments.length;
switch (G__33123) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31448__auto___33170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___33170,out){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___33170,out){
return (function (state_33147){
var state_val_33148 = (state_33147[(1)]);
if((state_val_33148 === (7))){
var inst_33142 = (state_33147[(2)]);
var state_33147__$1 = state_33147;
var statearr_33149_33171 = state_33147__$1;
(statearr_33149_33171[(2)] = inst_33142);

(statearr_33149_33171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33148 === (1))){
var inst_33124 = null;
var state_33147__$1 = (function (){var statearr_33150 = state_33147;
(statearr_33150[(7)] = inst_33124);

return statearr_33150;
})();
var statearr_33151_33172 = state_33147__$1;
(statearr_33151_33172[(2)] = null);

(statearr_33151_33172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33148 === (4))){
var inst_33127 = (state_33147[(8)]);
var inst_33127__$1 = (state_33147[(2)]);
var inst_33128 = (inst_33127__$1 == null);
var inst_33129 = cljs.core.not.call(null,inst_33128);
var state_33147__$1 = (function (){var statearr_33152 = state_33147;
(statearr_33152[(8)] = inst_33127__$1);

return statearr_33152;
})();
if(inst_33129){
var statearr_33153_33173 = state_33147__$1;
(statearr_33153_33173[(1)] = (5));

} else {
var statearr_33154_33174 = state_33147__$1;
(statearr_33154_33174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33148 === (6))){
var state_33147__$1 = state_33147;
var statearr_33155_33175 = state_33147__$1;
(statearr_33155_33175[(2)] = null);

(statearr_33155_33175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33148 === (3))){
var inst_33144 = (state_33147[(2)]);
var inst_33145 = cljs.core.async.close_BANG_.call(null,out);
var state_33147__$1 = (function (){var statearr_33156 = state_33147;
(statearr_33156[(9)] = inst_33144);

return statearr_33156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33147__$1,inst_33145);
} else {
if((state_val_33148 === (2))){
var state_33147__$1 = state_33147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33147__$1,(4),ch);
} else {
if((state_val_33148 === (11))){
var inst_33127 = (state_33147[(8)]);
var inst_33136 = (state_33147[(2)]);
var inst_33124 = inst_33127;
var state_33147__$1 = (function (){var statearr_33157 = state_33147;
(statearr_33157[(10)] = inst_33136);

(statearr_33157[(7)] = inst_33124);

return statearr_33157;
})();
var statearr_33158_33176 = state_33147__$1;
(statearr_33158_33176[(2)] = null);

(statearr_33158_33176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33148 === (9))){
var inst_33127 = (state_33147[(8)]);
var state_33147__$1 = state_33147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33147__$1,(11),out,inst_33127);
} else {
if((state_val_33148 === (5))){
var inst_33124 = (state_33147[(7)]);
var inst_33127 = (state_33147[(8)]);
var inst_33131 = cljs.core._EQ_.call(null,inst_33127,inst_33124);
var state_33147__$1 = state_33147;
if(inst_33131){
var statearr_33160_33177 = state_33147__$1;
(statearr_33160_33177[(1)] = (8));

} else {
var statearr_33161_33178 = state_33147__$1;
(statearr_33161_33178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33148 === (10))){
var inst_33139 = (state_33147[(2)]);
var state_33147__$1 = state_33147;
var statearr_33162_33179 = state_33147__$1;
(statearr_33162_33179[(2)] = inst_33139);

(statearr_33162_33179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33148 === (8))){
var inst_33124 = (state_33147[(7)]);
var tmp33159 = inst_33124;
var inst_33124__$1 = tmp33159;
var state_33147__$1 = (function (){var statearr_33163 = state_33147;
(statearr_33163[(7)] = inst_33124__$1);

return statearr_33163;
})();
var statearr_33164_33180 = state_33147__$1;
(statearr_33164_33180[(2)] = null);

(statearr_33164_33180[(1)] = (2));


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
});})(c__31448__auto___33170,out))
;
return ((function (switch__31360__auto__,c__31448__auto___33170,out){
return (function() {
var cljs$core$async$state_machine__31361__auto__ = null;
var cljs$core$async$state_machine__31361__auto____0 = (function (){
var statearr_33165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33165[(0)] = cljs$core$async$state_machine__31361__auto__);

(statearr_33165[(1)] = (1));

return statearr_33165;
});
var cljs$core$async$state_machine__31361__auto____1 = (function (state_33147){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_33147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e33166){if((e33166 instanceof Object)){
var ex__31364__auto__ = e33166;
var statearr_33167_33181 = state_33147;
(statearr_33167_33181[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33182 = state_33147;
state_33147 = G__33182;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$state_machine__31361__auto__ = function(state_33147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31361__auto____1.call(this,state_33147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31361__auto____0;
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31361__auto____1;
return cljs$core$async$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___33170,out))
})();
var state__31450__auto__ = (function (){var statearr_33168 = f__31449__auto__.call(null);
(statearr_33168[(6)] = c__31448__auto___33170);

return statearr_33168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___33170,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33184 = arguments.length;
switch (G__33184) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31448__auto___33250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___33250,out){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___33250,out){
return (function (state_33222){
var state_val_33223 = (state_33222[(1)]);
if((state_val_33223 === (7))){
var inst_33218 = (state_33222[(2)]);
var state_33222__$1 = state_33222;
var statearr_33224_33251 = state_33222__$1;
(statearr_33224_33251[(2)] = inst_33218);

(statearr_33224_33251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (1))){
var inst_33185 = (new Array(n));
var inst_33186 = inst_33185;
var inst_33187 = (0);
var state_33222__$1 = (function (){var statearr_33225 = state_33222;
(statearr_33225[(7)] = inst_33186);

(statearr_33225[(8)] = inst_33187);

return statearr_33225;
})();
var statearr_33226_33252 = state_33222__$1;
(statearr_33226_33252[(2)] = null);

(statearr_33226_33252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (4))){
var inst_33190 = (state_33222[(9)]);
var inst_33190__$1 = (state_33222[(2)]);
var inst_33191 = (inst_33190__$1 == null);
var inst_33192 = cljs.core.not.call(null,inst_33191);
var state_33222__$1 = (function (){var statearr_33227 = state_33222;
(statearr_33227[(9)] = inst_33190__$1);

return statearr_33227;
})();
if(inst_33192){
var statearr_33228_33253 = state_33222__$1;
(statearr_33228_33253[(1)] = (5));

} else {
var statearr_33229_33254 = state_33222__$1;
(statearr_33229_33254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (15))){
var inst_33212 = (state_33222[(2)]);
var state_33222__$1 = state_33222;
var statearr_33230_33255 = state_33222__$1;
(statearr_33230_33255[(2)] = inst_33212);

(statearr_33230_33255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (13))){
var state_33222__$1 = state_33222;
var statearr_33231_33256 = state_33222__$1;
(statearr_33231_33256[(2)] = null);

(statearr_33231_33256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (6))){
var inst_33187 = (state_33222[(8)]);
var inst_33208 = (inst_33187 > (0));
var state_33222__$1 = state_33222;
if(cljs.core.truth_(inst_33208)){
var statearr_33232_33257 = state_33222__$1;
(statearr_33232_33257[(1)] = (12));

} else {
var statearr_33233_33258 = state_33222__$1;
(statearr_33233_33258[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (3))){
var inst_33220 = (state_33222[(2)]);
var state_33222__$1 = state_33222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33222__$1,inst_33220);
} else {
if((state_val_33223 === (12))){
var inst_33186 = (state_33222[(7)]);
var inst_33210 = cljs.core.vec.call(null,inst_33186);
var state_33222__$1 = state_33222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33222__$1,(15),out,inst_33210);
} else {
if((state_val_33223 === (2))){
var state_33222__$1 = state_33222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33222__$1,(4),ch);
} else {
if((state_val_33223 === (11))){
var inst_33202 = (state_33222[(2)]);
var inst_33203 = (new Array(n));
var inst_33186 = inst_33203;
var inst_33187 = (0);
var state_33222__$1 = (function (){var statearr_33234 = state_33222;
(statearr_33234[(7)] = inst_33186);

(statearr_33234[(10)] = inst_33202);

(statearr_33234[(8)] = inst_33187);

return statearr_33234;
})();
var statearr_33235_33259 = state_33222__$1;
(statearr_33235_33259[(2)] = null);

(statearr_33235_33259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (9))){
var inst_33186 = (state_33222[(7)]);
var inst_33200 = cljs.core.vec.call(null,inst_33186);
var state_33222__$1 = state_33222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33222__$1,(11),out,inst_33200);
} else {
if((state_val_33223 === (5))){
var inst_33186 = (state_33222[(7)]);
var inst_33187 = (state_33222[(8)]);
var inst_33190 = (state_33222[(9)]);
var inst_33195 = (state_33222[(11)]);
var inst_33194 = (inst_33186[inst_33187] = inst_33190);
var inst_33195__$1 = (inst_33187 + (1));
var inst_33196 = (inst_33195__$1 < n);
var state_33222__$1 = (function (){var statearr_33236 = state_33222;
(statearr_33236[(11)] = inst_33195__$1);

(statearr_33236[(12)] = inst_33194);

return statearr_33236;
})();
if(cljs.core.truth_(inst_33196)){
var statearr_33237_33260 = state_33222__$1;
(statearr_33237_33260[(1)] = (8));

} else {
var statearr_33238_33261 = state_33222__$1;
(statearr_33238_33261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (14))){
var inst_33215 = (state_33222[(2)]);
var inst_33216 = cljs.core.async.close_BANG_.call(null,out);
var state_33222__$1 = (function (){var statearr_33240 = state_33222;
(statearr_33240[(13)] = inst_33215);

return statearr_33240;
})();
var statearr_33241_33262 = state_33222__$1;
(statearr_33241_33262[(2)] = inst_33216);

(statearr_33241_33262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (10))){
var inst_33206 = (state_33222[(2)]);
var state_33222__$1 = state_33222;
var statearr_33242_33263 = state_33222__$1;
(statearr_33242_33263[(2)] = inst_33206);

(statearr_33242_33263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33223 === (8))){
var inst_33186 = (state_33222[(7)]);
var inst_33195 = (state_33222[(11)]);
var tmp33239 = inst_33186;
var inst_33186__$1 = tmp33239;
var inst_33187 = inst_33195;
var state_33222__$1 = (function (){var statearr_33243 = state_33222;
(statearr_33243[(7)] = inst_33186__$1);

(statearr_33243[(8)] = inst_33187);

return statearr_33243;
})();
var statearr_33244_33264 = state_33222__$1;
(statearr_33244_33264[(2)] = null);

(statearr_33244_33264[(1)] = (2));


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
});})(c__31448__auto___33250,out))
;
return ((function (switch__31360__auto__,c__31448__auto___33250,out){
return (function() {
var cljs$core$async$state_machine__31361__auto__ = null;
var cljs$core$async$state_machine__31361__auto____0 = (function (){
var statearr_33245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33245[(0)] = cljs$core$async$state_machine__31361__auto__);

(statearr_33245[(1)] = (1));

return statearr_33245;
});
var cljs$core$async$state_machine__31361__auto____1 = (function (state_33222){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_33222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e33246){if((e33246 instanceof Object)){
var ex__31364__auto__ = e33246;
var statearr_33247_33265 = state_33222;
(statearr_33247_33265[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33266 = state_33222;
state_33222 = G__33266;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$state_machine__31361__auto__ = function(state_33222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31361__auto____1.call(this,state_33222);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31361__auto____0;
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31361__auto____1;
return cljs$core$async$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___33250,out))
})();
var state__31450__auto__ = (function (){var statearr_33248 = f__31449__auto__.call(null);
(statearr_33248[(6)] = c__31448__auto___33250);

return statearr_33248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___33250,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33268 = arguments.length;
switch (G__33268) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31448__auto___33338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31448__auto___33338,out){
return (function (){
var f__31449__auto__ = (function (){var switch__31360__auto__ = ((function (c__31448__auto___33338,out){
return (function (state_33310){
var state_val_33311 = (state_33310[(1)]);
if((state_val_33311 === (7))){
var inst_33306 = (state_33310[(2)]);
var state_33310__$1 = state_33310;
var statearr_33312_33339 = state_33310__$1;
(statearr_33312_33339[(2)] = inst_33306);

(statearr_33312_33339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33311 === (1))){
var inst_33269 = [];
var inst_33270 = inst_33269;
var inst_33271 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33310__$1 = (function (){var statearr_33313 = state_33310;
(statearr_33313[(7)] = inst_33270);

(statearr_33313[(8)] = inst_33271);

return statearr_33313;
})();
var statearr_33314_33340 = state_33310__$1;
(statearr_33314_33340[(2)] = null);

(statearr_33314_33340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33311 === (4))){
var inst_33274 = (state_33310[(9)]);
var inst_33274__$1 = (state_33310[(2)]);
var inst_33275 = (inst_33274__$1 == null);
var inst_33276 = cljs.core.not.call(null,inst_33275);
var state_33310__$1 = (function (){var statearr_33315 = state_33310;
(statearr_33315[(9)] = inst_33274__$1);

return statearr_33315;
})();
if(inst_33276){
var statearr_33316_33341 = state_33310__$1;
(statearr_33316_33341[(1)] = (5));

} else {
var statearr_33317_33342 = state_33310__$1;
(statearr_33317_33342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33311 === (15))){
var inst_33300 = (state_33310[(2)]);
var state_33310__$1 = state_33310;
var statearr_33318_33343 = state_33310__$1;
(statearr_33318_33343[(2)] = inst_33300);

(statearr_33318_33343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33311 === (13))){
var state_33310__$1 = state_33310;
var statearr_33319_33344 = state_33310__$1;
(statearr_33319_33344[(2)] = null);

(statearr_33319_33344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33311 === (6))){
var inst_33270 = (state_33310[(7)]);
var inst_33295 = inst_33270.length;
var inst_33296 = (inst_33295 > (0));
var state_33310__$1 = state_33310;
if(cljs.core.truth_(inst_33296)){
var statearr_33320_33345 = state_33310__$1;
(statearr_33320_33345[(1)] = (12));

} else {
var statearr_33321_33346 = state_33310__$1;
(statearr_33321_33346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33311 === (3))){
var inst_33308 = (state_33310[(2)]);
var state_33310__$1 = state_33310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33310__$1,inst_33308);
} else {
if((state_val_33311 === (12))){
var inst_33270 = (state_33310[(7)]);
var inst_33298 = cljs.core.vec.call(null,inst_33270);
var state_33310__$1 = state_33310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33310__$1,(15),out,inst_33298);
} else {
if((state_val_33311 === (2))){
var state_33310__$1 = state_33310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33310__$1,(4),ch);
} else {
if((state_val_33311 === (11))){
var inst_33274 = (state_33310[(9)]);
var inst_33278 = (state_33310[(10)]);
var inst_33288 = (state_33310[(2)]);
var inst_33289 = [];
var inst_33290 = inst_33289.push(inst_33274);
var inst_33270 = inst_33289;
var inst_33271 = inst_33278;
var state_33310__$1 = (function (){var statearr_33322 = state_33310;
(statearr_33322[(11)] = inst_33288);

(statearr_33322[(7)] = inst_33270);

(statearr_33322[(8)] = inst_33271);

(statearr_33322[(12)] = inst_33290);

return statearr_33322;
})();
var statearr_33323_33347 = state_33310__$1;
(statearr_33323_33347[(2)] = null);

(statearr_33323_33347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33311 === (9))){
var inst_33270 = (state_33310[(7)]);
var inst_33286 = cljs.core.vec.call(null,inst_33270);
var state_33310__$1 = state_33310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33310__$1,(11),out,inst_33286);
} else {
if((state_val_33311 === (5))){
var inst_33274 = (state_33310[(9)]);
var inst_33271 = (state_33310[(8)]);
var inst_33278 = (state_33310[(10)]);
var inst_33278__$1 = f.call(null,inst_33274);
var inst_33279 = cljs.core._EQ_.call(null,inst_33278__$1,inst_33271);
var inst_33280 = cljs.core.keyword_identical_QMARK_.call(null,inst_33271,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33281 = (inst_33279) || (inst_33280);
var state_33310__$1 = (function (){var statearr_33324 = state_33310;
(statearr_33324[(10)] = inst_33278__$1);

return statearr_33324;
})();
if(cljs.core.truth_(inst_33281)){
var statearr_33325_33348 = state_33310__$1;
(statearr_33325_33348[(1)] = (8));

} else {
var statearr_33326_33349 = state_33310__$1;
(statearr_33326_33349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33311 === (14))){
var inst_33303 = (state_33310[(2)]);
var inst_33304 = cljs.core.async.close_BANG_.call(null,out);
var state_33310__$1 = (function (){var statearr_33328 = state_33310;
(statearr_33328[(13)] = inst_33303);

return statearr_33328;
})();
var statearr_33329_33350 = state_33310__$1;
(statearr_33329_33350[(2)] = inst_33304);

(statearr_33329_33350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33311 === (10))){
var inst_33293 = (state_33310[(2)]);
var state_33310__$1 = state_33310;
var statearr_33330_33351 = state_33310__$1;
(statearr_33330_33351[(2)] = inst_33293);

(statearr_33330_33351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33311 === (8))){
var inst_33274 = (state_33310[(9)]);
var inst_33270 = (state_33310[(7)]);
var inst_33278 = (state_33310[(10)]);
var inst_33283 = inst_33270.push(inst_33274);
var tmp33327 = inst_33270;
var inst_33270__$1 = tmp33327;
var inst_33271 = inst_33278;
var state_33310__$1 = (function (){var statearr_33331 = state_33310;
(statearr_33331[(7)] = inst_33270__$1);

(statearr_33331[(8)] = inst_33271);

(statearr_33331[(14)] = inst_33283);

return statearr_33331;
})();
var statearr_33332_33352 = state_33310__$1;
(statearr_33332_33352[(2)] = null);

(statearr_33332_33352[(1)] = (2));


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
});})(c__31448__auto___33338,out))
;
return ((function (switch__31360__auto__,c__31448__auto___33338,out){
return (function() {
var cljs$core$async$state_machine__31361__auto__ = null;
var cljs$core$async$state_machine__31361__auto____0 = (function (){
var statearr_33333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33333[(0)] = cljs$core$async$state_machine__31361__auto__);

(statearr_33333[(1)] = (1));

return statearr_33333;
});
var cljs$core$async$state_machine__31361__auto____1 = (function (state_33310){
while(true){
var ret_value__31362__auto__ = (function (){try{while(true){
var result__31363__auto__ = switch__31360__auto__.call(null,state_33310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31363__auto__;
}
break;
}
}catch (e33334){if((e33334 instanceof Object)){
var ex__31364__auto__ = e33334;
var statearr_33335_33353 = state_33310;
(statearr_33335_33353[(5)] = ex__31364__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31362__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33354 = state_33310;
state_33310 = G__33354;
continue;
} else {
return ret_value__31362__auto__;
}
break;
}
});
cljs$core$async$state_machine__31361__auto__ = function(state_33310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31361__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31361__auto____1.call(this,state_33310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31361__auto____0;
cljs$core$async$state_machine__31361__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31361__auto____1;
return cljs$core$async$state_machine__31361__auto__;
})()
;})(switch__31360__auto__,c__31448__auto___33338,out))
})();
var state__31450__auto__ = (function (){var statearr_33336 = f__31449__auto__.call(null);
(statearr_33336[(6)] = c__31448__auto___33338);

return statearr_33336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31450__auto__);
});})(c__31448__auto___33338,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1505471597268
