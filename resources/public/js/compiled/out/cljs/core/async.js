// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t28671 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28671 = (function (fn_handler,f,meta28672){
this.fn_handler = fn_handler;
this.f = f;
this.meta28672 = meta28672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28673,meta28672__$1){
var self__ = this;
var _28673__$1 = this;
return (new cljs.core.async.t28671(self__.fn_handler,self__.f,meta28672__$1));
});

cljs.core.async.t28671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28673){
var self__ = this;
var _28673__$1 = this;
return self__.meta28672;
});

cljs.core.async.t28671.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28671.cljs$lang$type = true;

cljs.core.async.t28671.cljs$lang$ctorStr = "cljs.core.async/t28671";

cljs.core.async.t28671.cljs$lang$ctorPrWriter = (function (this__18428__auto__,writer__18429__auto__,opt__18430__auto__){
return cljs.core._write.call(null,writer__18429__auto__,"cljs.core.async/t28671");
});

cljs.core.async.__GT_t28671 = (function cljs$core$async$fn_handler_$___GT_t28671(fn_handler__$1,f__$1,meta28672){
return (new cljs.core.async.t28671(fn_handler__$1,f__$1,meta28672));
});

}

return (new cljs.core.async.t28671(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__28675 = buff;
if(G__28675){
var bit__18523__auto__ = null;
if(cljs.core.truth_((function (){var or__17849__auto__ = bit__18523__auto__;
if(cljs.core.truth_(or__17849__auto__)){
return or__17849__auto__;
} else {
return G__28675.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28675.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28675);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28675);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__28677 = arguments.length;
switch (G__28677) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__28680 = arguments.length;
switch (G__28680) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28682 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28682);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28682,ret){
return (function (){
return fn1.call(null,val_28682);
});})(val_28682,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__28684 = arguments.length;
switch (G__28684) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
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
var n__18734__auto___28686 = n;
var x_28687 = (0);
while(true){
if((x_28687 < n__18734__auto___28686)){
(a[x_28687] = (0));

var G__28688 = (x_28687 + (1));
x_28687 = G__28688;
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

var G__28689 = (i + (1));
i = G__28689;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28693 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28693 = (function (alt_flag,flag,meta28694){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28694 = meta28694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28695,meta28694__$1){
var self__ = this;
var _28695__$1 = this;
return (new cljs.core.async.t28693(self__.alt_flag,self__.flag,meta28694__$1));
});})(flag))
;

cljs.core.async.t28693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28695){
var self__ = this;
var _28695__$1 = this;
return self__.meta28694;
});})(flag))
;

cljs.core.async.t28693.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28693.cljs$lang$type = true;

cljs.core.async.t28693.cljs$lang$ctorStr = "cljs.core.async/t28693";

cljs.core.async.t28693.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18428__auto__,writer__18429__auto__,opt__18430__auto__){
return cljs.core._write.call(null,writer__18429__auto__,"cljs.core.async/t28693");
});})(flag))
;

cljs.core.async.__GT_t28693 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28693(alt_flag__$1,flag__$1,meta28694){
return (new cljs.core.async.t28693(alt_flag__$1,flag__$1,meta28694));
});})(flag))
;

}

return (new cljs.core.async.t28693(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28699 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28699 = (function (alt_handler,flag,cb,meta28700){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28700 = meta28700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28701,meta28700__$1){
var self__ = this;
var _28701__$1 = this;
return (new cljs.core.async.t28699(self__.alt_handler,self__.flag,self__.cb,meta28700__$1));
});

cljs.core.async.t28699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28701){
var self__ = this;
var _28701__$1 = this;
return self__.meta28700;
});

cljs.core.async.t28699.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28699.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28699.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28699.cljs$lang$type = true;

cljs.core.async.t28699.cljs$lang$ctorStr = "cljs.core.async/t28699";

cljs.core.async.t28699.cljs$lang$ctorPrWriter = (function (this__18428__auto__,writer__18429__auto__,opt__18430__auto__){
return cljs.core._write.call(null,writer__18429__auto__,"cljs.core.async/t28699");
});

cljs.core.async.__GT_t28699 = (function cljs$core$async$alt_handler_$___GT_t28699(alt_handler__$1,flag__$1,cb__$1,meta28700){
return (new cljs.core.async.t28699(alt_handler__$1,flag__$1,cb__$1,meta28700));
});

}

return (new cljs.core.async.t28699(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28702_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28702_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28703_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28703_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17849__auto__ = wport;
if(cljs.core.truth_(or__17849__auto__)){
return or__17849__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28704 = (i + (1));
i = G__28704;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17849__auto__ = ret;
if(cljs.core.truth_(or__17849__auto__)){
return or__17849__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__17837__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17837__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17837__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__18889__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18889__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28707){
var map__28708 = p__28707;
var map__28708__$1 = ((cljs.core.seq_QMARK_.call(null,map__28708))?cljs.core.apply.call(null,cljs.core.hash_map,map__28708):map__28708);
var opts = map__28708__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28705){
var G__28706 = cljs.core.first.call(null,seq28705);
var seq28705__$1 = cljs.core.next.call(null,seq28705);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28706,seq28705__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28710 = arguments.length;
switch (G__28710) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23381__auto___28759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___28759){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___28759){
return (function (state_28734){
var state_val_28735 = (state_28734[(1)]);
if((state_val_28735 === (7))){
var inst_28730 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28736_28760 = state_28734__$1;
(statearr_28736_28760[(2)] = inst_28730);

(statearr_28736_28760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (1))){
var state_28734__$1 = state_28734;
var statearr_28737_28761 = state_28734__$1;
(statearr_28737_28761[(2)] = null);

(statearr_28737_28761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (4))){
var inst_28713 = (state_28734[(7)]);
var inst_28713__$1 = (state_28734[(2)]);
var inst_28714 = (inst_28713__$1 == null);
var state_28734__$1 = (function (){var statearr_28738 = state_28734;
(statearr_28738[(7)] = inst_28713__$1);

return statearr_28738;
})();
if(cljs.core.truth_(inst_28714)){
var statearr_28739_28762 = state_28734__$1;
(statearr_28739_28762[(1)] = (5));

} else {
var statearr_28740_28763 = state_28734__$1;
(statearr_28740_28763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (13))){
var state_28734__$1 = state_28734;
var statearr_28741_28764 = state_28734__$1;
(statearr_28741_28764[(2)] = null);

(statearr_28741_28764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (6))){
var inst_28713 = (state_28734[(7)]);
var state_28734__$1 = state_28734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28734__$1,(11),to,inst_28713);
} else {
if((state_val_28735 === (3))){
var inst_28732 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28734__$1,inst_28732);
} else {
if((state_val_28735 === (12))){
var state_28734__$1 = state_28734;
var statearr_28742_28765 = state_28734__$1;
(statearr_28742_28765[(2)] = null);

(statearr_28742_28765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (2))){
var state_28734__$1 = state_28734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28734__$1,(4),from);
} else {
if((state_val_28735 === (11))){
var inst_28723 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
if(cljs.core.truth_(inst_28723)){
var statearr_28743_28766 = state_28734__$1;
(statearr_28743_28766[(1)] = (12));

} else {
var statearr_28744_28767 = state_28734__$1;
(statearr_28744_28767[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (9))){
var state_28734__$1 = state_28734;
var statearr_28745_28768 = state_28734__$1;
(statearr_28745_28768[(2)] = null);

(statearr_28745_28768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (5))){
var state_28734__$1 = state_28734;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28746_28769 = state_28734__$1;
(statearr_28746_28769[(1)] = (8));

} else {
var statearr_28747_28770 = state_28734__$1;
(statearr_28747_28770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (14))){
var inst_28728 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28748_28771 = state_28734__$1;
(statearr_28748_28771[(2)] = inst_28728);

(statearr_28748_28771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (10))){
var inst_28720 = (state_28734[(2)]);
var state_28734__$1 = state_28734;
var statearr_28749_28772 = state_28734__$1;
(statearr_28749_28772[(2)] = inst_28720);

(statearr_28749_28772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28735 === (8))){
var inst_28717 = cljs.core.async.close_BANG_.call(null,to);
var state_28734__$1 = state_28734;
var statearr_28750_28773 = state_28734__$1;
(statearr_28750_28773[(2)] = inst_28717);

(statearr_28750_28773[(1)] = (10));


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
});})(c__23381__auto___28759))
;
return ((function (switch__23319__auto__,c__23381__auto___28759){
return (function() {
var cljs$core$async$state_machine__23320__auto__ = null;
var cljs$core$async$state_machine__23320__auto____0 = (function (){
var statearr_28754 = [null,null,null,null,null,null,null,null];
(statearr_28754[(0)] = cljs$core$async$state_machine__23320__auto__);

(statearr_28754[(1)] = (1));

return statearr_28754;
});
var cljs$core$async$state_machine__23320__auto____1 = (function (state_28734){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_28734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e28755){if((e28755 instanceof Object)){
var ex__23323__auto__ = e28755;
var statearr_28756_28774 = state_28734;
(statearr_28756_28774[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28775 = state_28734;
state_28734 = G__28775;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$state_machine__23320__auto__ = function(state_28734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23320__auto____1.call(this,state_28734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23320__auto____0;
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23320__auto____1;
return cljs$core$async$state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___28759))
})();
var state__23383__auto__ = (function (){var statearr_28757 = f__23382__auto__.call(null);
(statearr_28757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___28759);

return statearr_28757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___28759))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28959){
var vec__28960 = p__28959;
var v = cljs.core.nth.call(null,vec__28960,(0),null);
var p = cljs.core.nth.call(null,vec__28960,(1),null);
var job = vec__28960;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23381__auto___29142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___29142,res,vec__28960,v,p,job,jobs,results){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___29142,res,vec__28960,v,p,job,jobs,results){
return (function (state_28965){
var state_val_28966 = (state_28965[(1)]);
if((state_val_28966 === (1))){
var state_28965__$1 = state_28965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28965__$1,(2),res,v);
} else {
if((state_val_28966 === (2))){
var inst_28962 = (state_28965[(2)]);
var inst_28963 = cljs.core.async.close_BANG_.call(null,res);
var state_28965__$1 = (function (){var statearr_28967 = state_28965;
(statearr_28967[(7)] = inst_28962);

return statearr_28967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28965__$1,inst_28963);
} else {
return null;
}
}
});})(c__23381__auto___29142,res,vec__28960,v,p,job,jobs,results))
;
return ((function (switch__23319__auto__,c__23381__auto___29142,res,vec__28960,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0 = (function (){
var statearr_28971 = [null,null,null,null,null,null,null,null];
(statearr_28971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__);

(statearr_28971[(1)] = (1));

return statearr_28971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1 = (function (state_28965){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_28965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e28972){if((e28972 instanceof Object)){
var ex__23323__auto__ = e28972;
var statearr_28973_29143 = state_28965;
(statearr_28973_29143[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29144 = state_28965;
state_28965 = G__29144;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__ = function(state_28965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1.call(this,state_28965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___29142,res,vec__28960,v,p,job,jobs,results))
})();
var state__23383__auto__ = (function (){var statearr_28974 = f__23382__auto__.call(null);
(statearr_28974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___29142);

return statearr_28974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___29142,res,vec__28960,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28975){
var vec__28976 = p__28975;
var v = cljs.core.nth.call(null,vec__28976,(0),null);
var p = cljs.core.nth.call(null,vec__28976,(1),null);
var job = vec__28976;
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
var n__18734__auto___29145 = n;
var __29146 = (0);
while(true){
if((__29146 < n__18734__auto___29145)){
var G__28977_29147 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28977_29147) {
case "compute":
var c__23381__auto___29149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29146,c__23381__auto___29149,G__28977_29147,n__18734__auto___29145,jobs,results,process,async){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (__29146,c__23381__auto___29149,G__28977_29147,n__18734__auto___29145,jobs,results,process,async){
return (function (state_28990){
var state_val_28991 = (state_28990[(1)]);
if((state_val_28991 === (1))){
var state_28990__$1 = state_28990;
var statearr_28992_29150 = state_28990__$1;
(statearr_28992_29150[(2)] = null);

(statearr_28992_29150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (2))){
var state_28990__$1 = state_28990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28990__$1,(4),jobs);
} else {
if((state_val_28991 === (3))){
var inst_28988 = (state_28990[(2)]);
var state_28990__$1 = state_28990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28990__$1,inst_28988);
} else {
if((state_val_28991 === (4))){
var inst_28980 = (state_28990[(2)]);
var inst_28981 = process.call(null,inst_28980);
var state_28990__$1 = state_28990;
if(cljs.core.truth_(inst_28981)){
var statearr_28993_29151 = state_28990__$1;
(statearr_28993_29151[(1)] = (5));

} else {
var statearr_28994_29152 = state_28990__$1;
(statearr_28994_29152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (5))){
var state_28990__$1 = state_28990;
var statearr_28995_29153 = state_28990__$1;
(statearr_28995_29153[(2)] = null);

(statearr_28995_29153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (6))){
var state_28990__$1 = state_28990;
var statearr_28996_29154 = state_28990__$1;
(statearr_28996_29154[(2)] = null);

(statearr_28996_29154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28991 === (7))){
var inst_28986 = (state_28990[(2)]);
var state_28990__$1 = state_28990;
var statearr_28997_29155 = state_28990__$1;
(statearr_28997_29155[(2)] = inst_28986);

(statearr_28997_29155[(1)] = (3));


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
});})(__29146,c__23381__auto___29149,G__28977_29147,n__18734__auto___29145,jobs,results,process,async))
;
return ((function (__29146,switch__23319__auto__,c__23381__auto___29149,G__28977_29147,n__18734__auto___29145,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0 = (function (){
var statearr_29001 = [null,null,null,null,null,null,null];
(statearr_29001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__);

(statearr_29001[(1)] = (1));

return statearr_29001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1 = (function (state_28990){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_28990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e29002){if((e29002 instanceof Object)){
var ex__23323__auto__ = e29002;
var statearr_29003_29156 = state_28990;
(statearr_29003_29156[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29157 = state_28990;
state_28990 = G__29157;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__ = function(state_28990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1.call(this,state_28990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__;
})()
;})(__29146,switch__23319__auto__,c__23381__auto___29149,G__28977_29147,n__18734__auto___29145,jobs,results,process,async))
})();
var state__23383__auto__ = (function (){var statearr_29004 = f__23382__auto__.call(null);
(statearr_29004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___29149);

return statearr_29004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(__29146,c__23381__auto___29149,G__28977_29147,n__18734__auto___29145,jobs,results,process,async))
);


break;
case "async":
var c__23381__auto___29158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29146,c__23381__auto___29158,G__28977_29147,n__18734__auto___29145,jobs,results,process,async){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (__29146,c__23381__auto___29158,G__28977_29147,n__18734__auto___29145,jobs,results,process,async){
return (function (state_29017){
var state_val_29018 = (state_29017[(1)]);
if((state_val_29018 === (1))){
var state_29017__$1 = state_29017;
var statearr_29019_29159 = state_29017__$1;
(statearr_29019_29159[(2)] = null);

(statearr_29019_29159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (2))){
var state_29017__$1 = state_29017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29017__$1,(4),jobs);
} else {
if((state_val_29018 === (3))){
var inst_29015 = (state_29017[(2)]);
var state_29017__$1 = state_29017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29017__$1,inst_29015);
} else {
if((state_val_29018 === (4))){
var inst_29007 = (state_29017[(2)]);
var inst_29008 = async.call(null,inst_29007);
var state_29017__$1 = state_29017;
if(cljs.core.truth_(inst_29008)){
var statearr_29020_29160 = state_29017__$1;
(statearr_29020_29160[(1)] = (5));

} else {
var statearr_29021_29161 = state_29017__$1;
(statearr_29021_29161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (5))){
var state_29017__$1 = state_29017;
var statearr_29022_29162 = state_29017__$1;
(statearr_29022_29162[(2)] = null);

(statearr_29022_29162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (6))){
var state_29017__$1 = state_29017;
var statearr_29023_29163 = state_29017__$1;
(statearr_29023_29163[(2)] = null);

(statearr_29023_29163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29018 === (7))){
var inst_29013 = (state_29017[(2)]);
var state_29017__$1 = state_29017;
var statearr_29024_29164 = state_29017__$1;
(statearr_29024_29164[(2)] = inst_29013);

(statearr_29024_29164[(1)] = (3));


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
});})(__29146,c__23381__auto___29158,G__28977_29147,n__18734__auto___29145,jobs,results,process,async))
;
return ((function (__29146,switch__23319__auto__,c__23381__auto___29158,G__28977_29147,n__18734__auto___29145,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0 = (function (){
var statearr_29028 = [null,null,null,null,null,null,null];
(statearr_29028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__);

(statearr_29028[(1)] = (1));

return statearr_29028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1 = (function (state_29017){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_29017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e29029){if((e29029 instanceof Object)){
var ex__23323__auto__ = e29029;
var statearr_29030_29165 = state_29017;
(statearr_29030_29165[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29166 = state_29017;
state_29017 = G__29166;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__ = function(state_29017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1.call(this,state_29017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__;
})()
;})(__29146,switch__23319__auto__,c__23381__auto___29158,G__28977_29147,n__18734__auto___29145,jobs,results,process,async))
})();
var state__23383__auto__ = (function (){var statearr_29031 = f__23382__auto__.call(null);
(statearr_29031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___29158);

return statearr_29031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(__29146,c__23381__auto___29158,G__28977_29147,n__18734__auto___29145,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29167 = (__29146 + (1));
__29146 = G__29167;
continue;
} else {
}
break;
}

var c__23381__auto___29168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___29168,jobs,results,process,async){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___29168,jobs,results,process,async){
return (function (state_29053){
var state_val_29054 = (state_29053[(1)]);
if((state_val_29054 === (1))){
var state_29053__$1 = state_29053;
var statearr_29055_29169 = state_29053__$1;
(statearr_29055_29169[(2)] = null);

(statearr_29055_29169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (2))){
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29053__$1,(4),from);
} else {
if((state_val_29054 === (3))){
var inst_29051 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29053__$1,inst_29051);
} else {
if((state_val_29054 === (4))){
var inst_29034 = (state_29053[(7)]);
var inst_29034__$1 = (state_29053[(2)]);
var inst_29035 = (inst_29034__$1 == null);
var state_29053__$1 = (function (){var statearr_29056 = state_29053;
(statearr_29056[(7)] = inst_29034__$1);

return statearr_29056;
})();
if(cljs.core.truth_(inst_29035)){
var statearr_29057_29170 = state_29053__$1;
(statearr_29057_29170[(1)] = (5));

} else {
var statearr_29058_29171 = state_29053__$1;
(statearr_29058_29171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (5))){
var inst_29037 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29053__$1 = state_29053;
var statearr_29059_29172 = state_29053__$1;
(statearr_29059_29172[(2)] = inst_29037);

(statearr_29059_29172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (6))){
var inst_29034 = (state_29053[(7)]);
var inst_29039 = (state_29053[(8)]);
var inst_29039__$1 = cljs.core.async.chan.call(null,(1));
var inst_29040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29041 = [inst_29034,inst_29039__$1];
var inst_29042 = (new cljs.core.PersistentVector(null,2,(5),inst_29040,inst_29041,null));
var state_29053__$1 = (function (){var statearr_29060 = state_29053;
(statearr_29060[(8)] = inst_29039__$1);

return statearr_29060;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29053__$1,(8),jobs,inst_29042);
} else {
if((state_val_29054 === (7))){
var inst_29049 = (state_29053[(2)]);
var state_29053__$1 = state_29053;
var statearr_29061_29173 = state_29053__$1;
(statearr_29061_29173[(2)] = inst_29049);

(statearr_29061_29173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29054 === (8))){
var inst_29039 = (state_29053[(8)]);
var inst_29044 = (state_29053[(2)]);
var state_29053__$1 = (function (){var statearr_29062 = state_29053;
(statearr_29062[(9)] = inst_29044);

return statearr_29062;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29053__$1,(9),results,inst_29039);
} else {
if((state_val_29054 === (9))){
var inst_29046 = (state_29053[(2)]);
var state_29053__$1 = (function (){var statearr_29063 = state_29053;
(statearr_29063[(10)] = inst_29046);

return statearr_29063;
})();
var statearr_29064_29174 = state_29053__$1;
(statearr_29064_29174[(2)] = null);

(statearr_29064_29174[(1)] = (2));


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
});})(c__23381__auto___29168,jobs,results,process,async))
;
return ((function (switch__23319__auto__,c__23381__auto___29168,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0 = (function (){
var statearr_29068 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__);

(statearr_29068[(1)] = (1));

return statearr_29068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1 = (function (state_29053){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_29053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e29069){if((e29069 instanceof Object)){
var ex__23323__auto__ = e29069;
var statearr_29070_29175 = state_29053;
(statearr_29070_29175[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29176 = state_29053;
state_29053 = G__29176;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__ = function(state_29053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1.call(this,state_29053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___29168,jobs,results,process,async))
})();
var state__23383__auto__ = (function (){var statearr_29071 = f__23382__auto__.call(null);
(statearr_29071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___29168);

return statearr_29071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___29168,jobs,results,process,async))
);


var c__23381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto__,jobs,results,process,async){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto__,jobs,results,process,async){
return (function (state_29109){
var state_val_29110 = (state_29109[(1)]);
if((state_val_29110 === (7))){
var inst_29105 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29111_29177 = state_29109__$1;
(statearr_29111_29177[(2)] = inst_29105);

(statearr_29111_29177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (20))){
var state_29109__$1 = state_29109;
var statearr_29112_29178 = state_29109__$1;
(statearr_29112_29178[(2)] = null);

(statearr_29112_29178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (1))){
var state_29109__$1 = state_29109;
var statearr_29113_29179 = state_29109__$1;
(statearr_29113_29179[(2)] = null);

(statearr_29113_29179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (4))){
var inst_29074 = (state_29109[(7)]);
var inst_29074__$1 = (state_29109[(2)]);
var inst_29075 = (inst_29074__$1 == null);
var state_29109__$1 = (function (){var statearr_29114 = state_29109;
(statearr_29114[(7)] = inst_29074__$1);

return statearr_29114;
})();
if(cljs.core.truth_(inst_29075)){
var statearr_29115_29180 = state_29109__$1;
(statearr_29115_29180[(1)] = (5));

} else {
var statearr_29116_29181 = state_29109__$1;
(statearr_29116_29181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (15))){
var inst_29087 = (state_29109[(8)]);
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29109__$1,(18),to,inst_29087);
} else {
if((state_val_29110 === (21))){
var inst_29100 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29117_29182 = state_29109__$1;
(statearr_29117_29182[(2)] = inst_29100);

(statearr_29117_29182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (13))){
var inst_29102 = (state_29109[(2)]);
var state_29109__$1 = (function (){var statearr_29118 = state_29109;
(statearr_29118[(9)] = inst_29102);

return statearr_29118;
})();
var statearr_29119_29183 = state_29109__$1;
(statearr_29119_29183[(2)] = null);

(statearr_29119_29183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (6))){
var inst_29074 = (state_29109[(7)]);
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29109__$1,(11),inst_29074);
} else {
if((state_val_29110 === (17))){
var inst_29095 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
if(cljs.core.truth_(inst_29095)){
var statearr_29120_29184 = state_29109__$1;
(statearr_29120_29184[(1)] = (19));

} else {
var statearr_29121_29185 = state_29109__$1;
(statearr_29121_29185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (3))){
var inst_29107 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29109__$1,inst_29107);
} else {
if((state_val_29110 === (12))){
var inst_29084 = (state_29109[(10)]);
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29109__$1,(14),inst_29084);
} else {
if((state_val_29110 === (2))){
var state_29109__$1 = state_29109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29109__$1,(4),results);
} else {
if((state_val_29110 === (19))){
var state_29109__$1 = state_29109;
var statearr_29122_29186 = state_29109__$1;
(statearr_29122_29186[(2)] = null);

(statearr_29122_29186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (11))){
var inst_29084 = (state_29109[(2)]);
var state_29109__$1 = (function (){var statearr_29123 = state_29109;
(statearr_29123[(10)] = inst_29084);

return statearr_29123;
})();
var statearr_29124_29187 = state_29109__$1;
(statearr_29124_29187[(2)] = null);

(statearr_29124_29187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (9))){
var state_29109__$1 = state_29109;
var statearr_29125_29188 = state_29109__$1;
(statearr_29125_29188[(2)] = null);

(statearr_29125_29188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (5))){
var state_29109__$1 = state_29109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29126_29189 = state_29109__$1;
(statearr_29126_29189[(1)] = (8));

} else {
var statearr_29127_29190 = state_29109__$1;
(statearr_29127_29190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (14))){
var inst_29087 = (state_29109[(8)]);
var inst_29089 = (state_29109[(11)]);
var inst_29087__$1 = (state_29109[(2)]);
var inst_29088 = (inst_29087__$1 == null);
var inst_29089__$1 = cljs.core.not.call(null,inst_29088);
var state_29109__$1 = (function (){var statearr_29128 = state_29109;
(statearr_29128[(8)] = inst_29087__$1);

(statearr_29128[(11)] = inst_29089__$1);

return statearr_29128;
})();
if(inst_29089__$1){
var statearr_29129_29191 = state_29109__$1;
(statearr_29129_29191[(1)] = (15));

} else {
var statearr_29130_29192 = state_29109__$1;
(statearr_29130_29192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (16))){
var inst_29089 = (state_29109[(11)]);
var state_29109__$1 = state_29109;
var statearr_29131_29193 = state_29109__$1;
(statearr_29131_29193[(2)] = inst_29089);

(statearr_29131_29193[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (10))){
var inst_29081 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29132_29194 = state_29109__$1;
(statearr_29132_29194[(2)] = inst_29081);

(statearr_29132_29194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (18))){
var inst_29092 = (state_29109[(2)]);
var state_29109__$1 = state_29109;
var statearr_29133_29195 = state_29109__$1;
(statearr_29133_29195[(2)] = inst_29092);

(statearr_29133_29195[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29110 === (8))){
var inst_29078 = cljs.core.async.close_BANG_.call(null,to);
var state_29109__$1 = state_29109;
var statearr_29134_29196 = state_29109__$1;
(statearr_29134_29196[(2)] = inst_29078);

(statearr_29134_29196[(1)] = (10));


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
});})(c__23381__auto__,jobs,results,process,async))
;
return ((function (switch__23319__auto__,c__23381__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0 = (function (){
var statearr_29138 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__);

(statearr_29138[(1)] = (1));

return statearr_29138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1 = (function (state_29109){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_29109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e29139){if((e29139 instanceof Object)){
var ex__23323__auto__ = e29139;
var statearr_29140_29197 = state_29109;
(statearr_29140_29197[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29198 = state_29109;
state_29109 = G__29198;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__ = function(state_29109){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1.call(this,state_29109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23320__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto__,jobs,results,process,async))
})();
var state__23383__auto__ = (function (){var statearr_29141 = f__23382__auto__.call(null);
(statearr_29141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto__);

return statearr_29141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto__,jobs,results,process,async))
);

return c__23381__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__29200 = arguments.length;
switch (G__29200) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__29203 = arguments.length;
switch (G__29203) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__29206 = arguments.length;
switch (G__29206) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23381__auto___29258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___29258,tc,fc){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___29258,tc,fc){
return (function (state_29232){
var state_val_29233 = (state_29232[(1)]);
if((state_val_29233 === (7))){
var inst_29228 = (state_29232[(2)]);
var state_29232__$1 = state_29232;
var statearr_29234_29259 = state_29232__$1;
(statearr_29234_29259[(2)] = inst_29228);

(statearr_29234_29259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (1))){
var state_29232__$1 = state_29232;
var statearr_29235_29260 = state_29232__$1;
(statearr_29235_29260[(2)] = null);

(statearr_29235_29260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (4))){
var inst_29209 = (state_29232[(7)]);
var inst_29209__$1 = (state_29232[(2)]);
var inst_29210 = (inst_29209__$1 == null);
var state_29232__$1 = (function (){var statearr_29236 = state_29232;
(statearr_29236[(7)] = inst_29209__$1);

return statearr_29236;
})();
if(cljs.core.truth_(inst_29210)){
var statearr_29237_29261 = state_29232__$1;
(statearr_29237_29261[(1)] = (5));

} else {
var statearr_29238_29262 = state_29232__$1;
(statearr_29238_29262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (13))){
var state_29232__$1 = state_29232;
var statearr_29239_29263 = state_29232__$1;
(statearr_29239_29263[(2)] = null);

(statearr_29239_29263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (6))){
var inst_29209 = (state_29232[(7)]);
var inst_29215 = p.call(null,inst_29209);
var state_29232__$1 = state_29232;
if(cljs.core.truth_(inst_29215)){
var statearr_29240_29264 = state_29232__$1;
(statearr_29240_29264[(1)] = (9));

} else {
var statearr_29241_29265 = state_29232__$1;
(statearr_29241_29265[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (3))){
var inst_29230 = (state_29232[(2)]);
var state_29232__$1 = state_29232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29232__$1,inst_29230);
} else {
if((state_val_29233 === (12))){
var state_29232__$1 = state_29232;
var statearr_29242_29266 = state_29232__$1;
(statearr_29242_29266[(2)] = null);

(statearr_29242_29266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (2))){
var state_29232__$1 = state_29232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29232__$1,(4),ch);
} else {
if((state_val_29233 === (11))){
var inst_29209 = (state_29232[(7)]);
var inst_29219 = (state_29232[(2)]);
var state_29232__$1 = state_29232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29232__$1,(8),inst_29219,inst_29209);
} else {
if((state_val_29233 === (9))){
var state_29232__$1 = state_29232;
var statearr_29243_29267 = state_29232__$1;
(statearr_29243_29267[(2)] = tc);

(statearr_29243_29267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (5))){
var inst_29212 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29213 = cljs.core.async.close_BANG_.call(null,fc);
var state_29232__$1 = (function (){var statearr_29244 = state_29232;
(statearr_29244[(8)] = inst_29212);

return statearr_29244;
})();
var statearr_29245_29268 = state_29232__$1;
(statearr_29245_29268[(2)] = inst_29213);

(statearr_29245_29268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (14))){
var inst_29226 = (state_29232[(2)]);
var state_29232__$1 = state_29232;
var statearr_29246_29269 = state_29232__$1;
(statearr_29246_29269[(2)] = inst_29226);

(statearr_29246_29269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (10))){
var state_29232__$1 = state_29232;
var statearr_29247_29270 = state_29232__$1;
(statearr_29247_29270[(2)] = fc);

(statearr_29247_29270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (8))){
var inst_29221 = (state_29232[(2)]);
var state_29232__$1 = state_29232;
if(cljs.core.truth_(inst_29221)){
var statearr_29248_29271 = state_29232__$1;
(statearr_29248_29271[(1)] = (12));

} else {
var statearr_29249_29272 = state_29232__$1;
(statearr_29249_29272[(1)] = (13));

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
});})(c__23381__auto___29258,tc,fc))
;
return ((function (switch__23319__auto__,c__23381__auto___29258,tc,fc){
return (function() {
var cljs$core$async$state_machine__23320__auto__ = null;
var cljs$core$async$state_machine__23320__auto____0 = (function (){
var statearr_29253 = [null,null,null,null,null,null,null,null,null];
(statearr_29253[(0)] = cljs$core$async$state_machine__23320__auto__);

(statearr_29253[(1)] = (1));

return statearr_29253;
});
var cljs$core$async$state_machine__23320__auto____1 = (function (state_29232){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_29232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e29254){if((e29254 instanceof Object)){
var ex__23323__auto__ = e29254;
var statearr_29255_29273 = state_29232;
(statearr_29255_29273[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29274 = state_29232;
state_29232 = G__29274;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$state_machine__23320__auto__ = function(state_29232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23320__auto____1.call(this,state_29232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23320__auto____0;
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23320__auto____1;
return cljs$core$async$state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___29258,tc,fc))
})();
var state__23383__auto__ = (function (){var statearr_29256 = f__23382__auto__.call(null);
(statearr_29256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___29258);

return statearr_29256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___29258,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto__){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto__){
return (function (state_29321){
var state_val_29322 = (state_29321[(1)]);
if((state_val_29322 === (1))){
var inst_29307 = init;
var state_29321__$1 = (function (){var statearr_29323 = state_29321;
(statearr_29323[(7)] = inst_29307);

return statearr_29323;
})();
var statearr_29324_29339 = state_29321__$1;
(statearr_29324_29339[(2)] = null);

(statearr_29324_29339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29322 === (2))){
var state_29321__$1 = state_29321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29321__$1,(4),ch);
} else {
if((state_val_29322 === (3))){
var inst_29319 = (state_29321[(2)]);
var state_29321__$1 = state_29321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29321__$1,inst_29319);
} else {
if((state_val_29322 === (4))){
var inst_29310 = (state_29321[(8)]);
var inst_29310__$1 = (state_29321[(2)]);
var inst_29311 = (inst_29310__$1 == null);
var state_29321__$1 = (function (){var statearr_29325 = state_29321;
(statearr_29325[(8)] = inst_29310__$1);

return statearr_29325;
})();
if(cljs.core.truth_(inst_29311)){
var statearr_29326_29340 = state_29321__$1;
(statearr_29326_29340[(1)] = (5));

} else {
var statearr_29327_29341 = state_29321__$1;
(statearr_29327_29341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29322 === (5))){
var inst_29307 = (state_29321[(7)]);
var state_29321__$1 = state_29321;
var statearr_29328_29342 = state_29321__$1;
(statearr_29328_29342[(2)] = inst_29307);

(statearr_29328_29342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29322 === (6))){
var inst_29307 = (state_29321[(7)]);
var inst_29310 = (state_29321[(8)]);
var inst_29314 = f.call(null,inst_29307,inst_29310);
var inst_29307__$1 = inst_29314;
var state_29321__$1 = (function (){var statearr_29329 = state_29321;
(statearr_29329[(7)] = inst_29307__$1);

return statearr_29329;
})();
var statearr_29330_29343 = state_29321__$1;
(statearr_29330_29343[(2)] = null);

(statearr_29330_29343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29322 === (7))){
var inst_29317 = (state_29321[(2)]);
var state_29321__$1 = state_29321;
var statearr_29331_29344 = state_29321__$1;
(statearr_29331_29344[(2)] = inst_29317);

(statearr_29331_29344[(1)] = (3));


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
});})(c__23381__auto__))
;
return ((function (switch__23319__auto__,c__23381__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23320__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23320__auto____0 = (function (){
var statearr_29335 = [null,null,null,null,null,null,null,null,null];
(statearr_29335[(0)] = cljs$core$async$reduce_$_state_machine__23320__auto__);

(statearr_29335[(1)] = (1));

return statearr_29335;
});
var cljs$core$async$reduce_$_state_machine__23320__auto____1 = (function (state_29321){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_29321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e29336){if((e29336 instanceof Object)){
var ex__23323__auto__ = e29336;
var statearr_29337_29345 = state_29321;
(statearr_29337_29345[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29346 = state_29321;
state_29321 = G__29346;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23320__auto__ = function(state_29321){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23320__auto____1.call(this,state_29321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23320__auto____0;
cljs$core$async$reduce_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23320__auto____1;
return cljs$core$async$reduce_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto__))
})();
var state__23383__auto__ = (function (){var statearr_29338 = f__23382__auto__.call(null);
(statearr_29338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto__);

return statearr_29338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto__))
);

return c__23381__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__29348 = arguments.length;
switch (G__29348) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto__){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto__){
return (function (state_29373){
var state_val_29374 = (state_29373[(1)]);
if((state_val_29374 === (7))){
var inst_29355 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29375_29399 = state_29373__$1;
(statearr_29375_29399[(2)] = inst_29355);

(statearr_29375_29399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (1))){
var inst_29349 = cljs.core.seq.call(null,coll);
var inst_29350 = inst_29349;
var state_29373__$1 = (function (){var statearr_29376 = state_29373;
(statearr_29376[(7)] = inst_29350);

return statearr_29376;
})();
var statearr_29377_29400 = state_29373__$1;
(statearr_29377_29400[(2)] = null);

(statearr_29377_29400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (4))){
var inst_29350 = (state_29373[(7)]);
var inst_29353 = cljs.core.first.call(null,inst_29350);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29373__$1,(7),ch,inst_29353);
} else {
if((state_val_29374 === (13))){
var inst_29367 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29378_29401 = state_29373__$1;
(statearr_29378_29401[(2)] = inst_29367);

(statearr_29378_29401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (6))){
var inst_29358 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
if(cljs.core.truth_(inst_29358)){
var statearr_29379_29402 = state_29373__$1;
(statearr_29379_29402[(1)] = (8));

} else {
var statearr_29380_29403 = state_29373__$1;
(statearr_29380_29403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (3))){
var inst_29371 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29373__$1,inst_29371);
} else {
if((state_val_29374 === (12))){
var state_29373__$1 = state_29373;
var statearr_29381_29404 = state_29373__$1;
(statearr_29381_29404[(2)] = null);

(statearr_29381_29404[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (2))){
var inst_29350 = (state_29373[(7)]);
var state_29373__$1 = state_29373;
if(cljs.core.truth_(inst_29350)){
var statearr_29382_29405 = state_29373__$1;
(statearr_29382_29405[(1)] = (4));

} else {
var statearr_29383_29406 = state_29373__$1;
(statearr_29383_29406[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (11))){
var inst_29364 = cljs.core.async.close_BANG_.call(null,ch);
var state_29373__$1 = state_29373;
var statearr_29384_29407 = state_29373__$1;
(statearr_29384_29407[(2)] = inst_29364);

(statearr_29384_29407[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (9))){
var state_29373__$1 = state_29373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29385_29408 = state_29373__$1;
(statearr_29385_29408[(1)] = (11));

} else {
var statearr_29386_29409 = state_29373__$1;
(statearr_29386_29409[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (5))){
var inst_29350 = (state_29373[(7)]);
var state_29373__$1 = state_29373;
var statearr_29387_29410 = state_29373__$1;
(statearr_29387_29410[(2)] = inst_29350);

(statearr_29387_29410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (10))){
var inst_29369 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29388_29411 = state_29373__$1;
(statearr_29388_29411[(2)] = inst_29369);

(statearr_29388_29411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (8))){
var inst_29350 = (state_29373[(7)]);
var inst_29360 = cljs.core.next.call(null,inst_29350);
var inst_29350__$1 = inst_29360;
var state_29373__$1 = (function (){var statearr_29389 = state_29373;
(statearr_29389[(7)] = inst_29350__$1);

return statearr_29389;
})();
var statearr_29390_29412 = state_29373__$1;
(statearr_29390_29412[(2)] = null);

(statearr_29390_29412[(1)] = (2));


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
});})(c__23381__auto__))
;
return ((function (switch__23319__auto__,c__23381__auto__){
return (function() {
var cljs$core$async$state_machine__23320__auto__ = null;
var cljs$core$async$state_machine__23320__auto____0 = (function (){
var statearr_29394 = [null,null,null,null,null,null,null,null];
(statearr_29394[(0)] = cljs$core$async$state_machine__23320__auto__);

(statearr_29394[(1)] = (1));

return statearr_29394;
});
var cljs$core$async$state_machine__23320__auto____1 = (function (state_29373){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_29373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e29395){if((e29395 instanceof Object)){
var ex__23323__auto__ = e29395;
var statearr_29396_29413 = state_29373;
(statearr_29396_29413[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29414 = state_29373;
state_29373 = G__29414;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$state_machine__23320__auto__ = function(state_29373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23320__auto____1.call(this,state_29373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23320__auto____0;
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23320__auto____1;
return cljs$core$async$state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto__))
})();
var state__23383__auto__ = (function (){var statearr_29397 = f__23382__auto__.call(null);
(statearr_29397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto__);

return statearr_29397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto__))
);

return c__23381__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj29416 = {};
return obj29416;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__17837__auto__ = _;
if(and__17837__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17837__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18485__auto__ = (((_ == null))?null:_);
return (function (){var or__17849__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29418 = {};
return obj29418;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17837__auto__ = m;
if(and__17837__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17837__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18485__auto__ = (((m == null))?null:m);
return (function (){var or__17849__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__17837__auto__ = m;
if(and__17837__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17837__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18485__auto__ = (((m == null))?null:m);
return (function (){var or__17849__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__17837__auto__ = m;
if(and__17837__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17837__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18485__auto__ = (((m == null))?null:m);
return (function (){var or__17849__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29640 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29640 = (function (mult,ch,cs,meta29641){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29641 = meta29641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29642,meta29641__$1){
var self__ = this;
var _29642__$1 = this;
return (new cljs.core.async.t29640(self__.mult,self__.ch,self__.cs,meta29641__$1));
});})(cs))
;

cljs.core.async.t29640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29642){
var self__ = this;
var _29642__$1 = this;
return self__.meta29641;
});})(cs))
;

cljs.core.async.t29640.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29640.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29640.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29640.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29640.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29640.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29640.cljs$lang$type = true;

cljs.core.async.t29640.cljs$lang$ctorStr = "cljs.core.async/t29640";

cljs.core.async.t29640.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18428__auto__,writer__18429__auto__,opt__18430__auto__){
return cljs.core._write.call(null,writer__18429__auto__,"cljs.core.async/t29640");
});})(cs))
;

cljs.core.async.__GT_t29640 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29640(mult__$1,ch__$1,cs__$1,meta29641){
return (new cljs.core.async.t29640(mult__$1,ch__$1,cs__$1,meta29641));
});})(cs))
;

}

return (new cljs.core.async.t29640(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23381__auto___29861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___29861,cs,m,dchan,dctr,done){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___29861,cs,m,dchan,dctr,done){
return (function (state_29773){
var state_val_29774 = (state_29773[(1)]);
if((state_val_29774 === (7))){
var inst_29769 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29775_29862 = state_29773__$1;
(statearr_29775_29862[(2)] = inst_29769);

(statearr_29775_29862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (20))){
var inst_29674 = (state_29773[(7)]);
var inst_29684 = cljs.core.first.call(null,inst_29674);
var inst_29685 = cljs.core.nth.call(null,inst_29684,(0),null);
var inst_29686 = cljs.core.nth.call(null,inst_29684,(1),null);
var state_29773__$1 = (function (){var statearr_29776 = state_29773;
(statearr_29776[(8)] = inst_29685);

return statearr_29776;
})();
if(cljs.core.truth_(inst_29686)){
var statearr_29777_29863 = state_29773__$1;
(statearr_29777_29863[(1)] = (22));

} else {
var statearr_29778_29864 = state_29773__$1;
(statearr_29778_29864[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (27))){
var inst_29714 = (state_29773[(9)]);
var inst_29721 = (state_29773[(10)]);
var inst_29716 = (state_29773[(11)]);
var inst_29645 = (state_29773[(12)]);
var inst_29721__$1 = cljs.core._nth.call(null,inst_29714,inst_29716);
var inst_29722 = cljs.core.async.put_BANG_.call(null,inst_29721__$1,inst_29645,done);
var state_29773__$1 = (function (){var statearr_29779 = state_29773;
(statearr_29779[(10)] = inst_29721__$1);

return statearr_29779;
})();
if(cljs.core.truth_(inst_29722)){
var statearr_29780_29865 = state_29773__$1;
(statearr_29780_29865[(1)] = (30));

} else {
var statearr_29781_29866 = state_29773__$1;
(statearr_29781_29866[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (1))){
var state_29773__$1 = state_29773;
var statearr_29782_29867 = state_29773__$1;
(statearr_29782_29867[(2)] = null);

(statearr_29782_29867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (24))){
var inst_29674 = (state_29773[(7)]);
var inst_29691 = (state_29773[(2)]);
var inst_29692 = cljs.core.next.call(null,inst_29674);
var inst_29654 = inst_29692;
var inst_29655 = null;
var inst_29656 = (0);
var inst_29657 = (0);
var state_29773__$1 = (function (){var statearr_29783 = state_29773;
(statearr_29783[(13)] = inst_29657);

(statearr_29783[(14)] = inst_29656);

(statearr_29783[(15)] = inst_29654);

(statearr_29783[(16)] = inst_29655);

(statearr_29783[(17)] = inst_29691);

return statearr_29783;
})();
var statearr_29784_29868 = state_29773__$1;
(statearr_29784_29868[(2)] = null);

(statearr_29784_29868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (39))){
var state_29773__$1 = state_29773;
var statearr_29788_29869 = state_29773__$1;
(statearr_29788_29869[(2)] = null);

(statearr_29788_29869[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (4))){
var inst_29645 = (state_29773[(12)]);
var inst_29645__$1 = (state_29773[(2)]);
var inst_29646 = (inst_29645__$1 == null);
var state_29773__$1 = (function (){var statearr_29789 = state_29773;
(statearr_29789[(12)] = inst_29645__$1);

return statearr_29789;
})();
if(cljs.core.truth_(inst_29646)){
var statearr_29790_29870 = state_29773__$1;
(statearr_29790_29870[(1)] = (5));

} else {
var statearr_29791_29871 = state_29773__$1;
(statearr_29791_29871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (15))){
var inst_29657 = (state_29773[(13)]);
var inst_29656 = (state_29773[(14)]);
var inst_29654 = (state_29773[(15)]);
var inst_29655 = (state_29773[(16)]);
var inst_29670 = (state_29773[(2)]);
var inst_29671 = (inst_29657 + (1));
var tmp29785 = inst_29656;
var tmp29786 = inst_29654;
var tmp29787 = inst_29655;
var inst_29654__$1 = tmp29786;
var inst_29655__$1 = tmp29787;
var inst_29656__$1 = tmp29785;
var inst_29657__$1 = inst_29671;
var state_29773__$1 = (function (){var statearr_29792 = state_29773;
(statearr_29792[(13)] = inst_29657__$1);

(statearr_29792[(14)] = inst_29656__$1);

(statearr_29792[(15)] = inst_29654__$1);

(statearr_29792[(16)] = inst_29655__$1);

(statearr_29792[(18)] = inst_29670);

return statearr_29792;
})();
var statearr_29793_29872 = state_29773__$1;
(statearr_29793_29872[(2)] = null);

(statearr_29793_29872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (21))){
var inst_29695 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29797_29873 = state_29773__$1;
(statearr_29797_29873[(2)] = inst_29695);

(statearr_29797_29873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (31))){
var inst_29721 = (state_29773[(10)]);
var inst_29725 = done.call(null,null);
var inst_29726 = cljs.core.async.untap_STAR_.call(null,m,inst_29721);
var state_29773__$1 = (function (){var statearr_29798 = state_29773;
(statearr_29798[(19)] = inst_29725);

return statearr_29798;
})();
var statearr_29799_29874 = state_29773__$1;
(statearr_29799_29874[(2)] = inst_29726);

(statearr_29799_29874[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (32))){
var inst_29714 = (state_29773[(9)]);
var inst_29713 = (state_29773[(20)]);
var inst_29715 = (state_29773[(21)]);
var inst_29716 = (state_29773[(11)]);
var inst_29728 = (state_29773[(2)]);
var inst_29729 = (inst_29716 + (1));
var tmp29794 = inst_29714;
var tmp29795 = inst_29713;
var tmp29796 = inst_29715;
var inst_29713__$1 = tmp29795;
var inst_29714__$1 = tmp29794;
var inst_29715__$1 = tmp29796;
var inst_29716__$1 = inst_29729;
var state_29773__$1 = (function (){var statearr_29800 = state_29773;
(statearr_29800[(9)] = inst_29714__$1);

(statearr_29800[(20)] = inst_29713__$1);

(statearr_29800[(21)] = inst_29715__$1);

(statearr_29800[(11)] = inst_29716__$1);

(statearr_29800[(22)] = inst_29728);

return statearr_29800;
})();
var statearr_29801_29875 = state_29773__$1;
(statearr_29801_29875[(2)] = null);

(statearr_29801_29875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (40))){
var inst_29741 = (state_29773[(23)]);
var inst_29745 = done.call(null,null);
var inst_29746 = cljs.core.async.untap_STAR_.call(null,m,inst_29741);
var state_29773__$1 = (function (){var statearr_29802 = state_29773;
(statearr_29802[(24)] = inst_29745);

return statearr_29802;
})();
var statearr_29803_29876 = state_29773__$1;
(statearr_29803_29876[(2)] = inst_29746);

(statearr_29803_29876[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (33))){
var inst_29732 = (state_29773[(25)]);
var inst_29734 = cljs.core.chunked_seq_QMARK_.call(null,inst_29732);
var state_29773__$1 = state_29773;
if(inst_29734){
var statearr_29804_29877 = state_29773__$1;
(statearr_29804_29877[(1)] = (36));

} else {
var statearr_29805_29878 = state_29773__$1;
(statearr_29805_29878[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (13))){
var inst_29664 = (state_29773[(26)]);
var inst_29667 = cljs.core.async.close_BANG_.call(null,inst_29664);
var state_29773__$1 = state_29773;
var statearr_29806_29879 = state_29773__$1;
(statearr_29806_29879[(2)] = inst_29667);

(statearr_29806_29879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (22))){
var inst_29685 = (state_29773[(8)]);
var inst_29688 = cljs.core.async.close_BANG_.call(null,inst_29685);
var state_29773__$1 = state_29773;
var statearr_29807_29880 = state_29773__$1;
(statearr_29807_29880[(2)] = inst_29688);

(statearr_29807_29880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (36))){
var inst_29732 = (state_29773[(25)]);
var inst_29736 = cljs.core.chunk_first.call(null,inst_29732);
var inst_29737 = cljs.core.chunk_rest.call(null,inst_29732);
var inst_29738 = cljs.core.count.call(null,inst_29736);
var inst_29713 = inst_29737;
var inst_29714 = inst_29736;
var inst_29715 = inst_29738;
var inst_29716 = (0);
var state_29773__$1 = (function (){var statearr_29808 = state_29773;
(statearr_29808[(9)] = inst_29714);

(statearr_29808[(20)] = inst_29713);

(statearr_29808[(21)] = inst_29715);

(statearr_29808[(11)] = inst_29716);

return statearr_29808;
})();
var statearr_29809_29881 = state_29773__$1;
(statearr_29809_29881[(2)] = null);

(statearr_29809_29881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (41))){
var inst_29732 = (state_29773[(25)]);
var inst_29748 = (state_29773[(2)]);
var inst_29749 = cljs.core.next.call(null,inst_29732);
var inst_29713 = inst_29749;
var inst_29714 = null;
var inst_29715 = (0);
var inst_29716 = (0);
var state_29773__$1 = (function (){var statearr_29810 = state_29773;
(statearr_29810[(9)] = inst_29714);

(statearr_29810[(20)] = inst_29713);

(statearr_29810[(21)] = inst_29715);

(statearr_29810[(11)] = inst_29716);

(statearr_29810[(27)] = inst_29748);

return statearr_29810;
})();
var statearr_29811_29882 = state_29773__$1;
(statearr_29811_29882[(2)] = null);

(statearr_29811_29882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (43))){
var state_29773__$1 = state_29773;
var statearr_29812_29883 = state_29773__$1;
(statearr_29812_29883[(2)] = null);

(statearr_29812_29883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (29))){
var inst_29757 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29813_29884 = state_29773__$1;
(statearr_29813_29884[(2)] = inst_29757);

(statearr_29813_29884[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (44))){
var inst_29766 = (state_29773[(2)]);
var state_29773__$1 = (function (){var statearr_29814 = state_29773;
(statearr_29814[(28)] = inst_29766);

return statearr_29814;
})();
var statearr_29815_29885 = state_29773__$1;
(statearr_29815_29885[(2)] = null);

(statearr_29815_29885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (6))){
var inst_29705 = (state_29773[(29)]);
var inst_29704 = cljs.core.deref.call(null,cs);
var inst_29705__$1 = cljs.core.keys.call(null,inst_29704);
var inst_29706 = cljs.core.count.call(null,inst_29705__$1);
var inst_29707 = cljs.core.reset_BANG_.call(null,dctr,inst_29706);
var inst_29712 = cljs.core.seq.call(null,inst_29705__$1);
var inst_29713 = inst_29712;
var inst_29714 = null;
var inst_29715 = (0);
var inst_29716 = (0);
var state_29773__$1 = (function (){var statearr_29816 = state_29773;
(statearr_29816[(9)] = inst_29714);

(statearr_29816[(20)] = inst_29713);

(statearr_29816[(21)] = inst_29715);

(statearr_29816[(11)] = inst_29716);

(statearr_29816[(29)] = inst_29705__$1);

(statearr_29816[(30)] = inst_29707);

return statearr_29816;
})();
var statearr_29817_29886 = state_29773__$1;
(statearr_29817_29886[(2)] = null);

(statearr_29817_29886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (28))){
var inst_29713 = (state_29773[(20)]);
var inst_29732 = (state_29773[(25)]);
var inst_29732__$1 = cljs.core.seq.call(null,inst_29713);
var state_29773__$1 = (function (){var statearr_29818 = state_29773;
(statearr_29818[(25)] = inst_29732__$1);

return statearr_29818;
})();
if(inst_29732__$1){
var statearr_29819_29887 = state_29773__$1;
(statearr_29819_29887[(1)] = (33));

} else {
var statearr_29820_29888 = state_29773__$1;
(statearr_29820_29888[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (25))){
var inst_29715 = (state_29773[(21)]);
var inst_29716 = (state_29773[(11)]);
var inst_29718 = (inst_29716 < inst_29715);
var inst_29719 = inst_29718;
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29719)){
var statearr_29821_29889 = state_29773__$1;
(statearr_29821_29889[(1)] = (27));

} else {
var statearr_29822_29890 = state_29773__$1;
(statearr_29822_29890[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (34))){
var state_29773__$1 = state_29773;
var statearr_29823_29891 = state_29773__$1;
(statearr_29823_29891[(2)] = null);

(statearr_29823_29891[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (17))){
var state_29773__$1 = state_29773;
var statearr_29824_29892 = state_29773__$1;
(statearr_29824_29892[(2)] = null);

(statearr_29824_29892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (3))){
var inst_29771 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29773__$1,inst_29771);
} else {
if((state_val_29774 === (12))){
var inst_29700 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29825_29893 = state_29773__$1;
(statearr_29825_29893[(2)] = inst_29700);

(statearr_29825_29893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (2))){
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(4),ch);
} else {
if((state_val_29774 === (23))){
var state_29773__$1 = state_29773;
var statearr_29826_29894 = state_29773__$1;
(statearr_29826_29894[(2)] = null);

(statearr_29826_29894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (35))){
var inst_29755 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29827_29895 = state_29773__$1;
(statearr_29827_29895[(2)] = inst_29755);

(statearr_29827_29895[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (19))){
var inst_29674 = (state_29773[(7)]);
var inst_29678 = cljs.core.chunk_first.call(null,inst_29674);
var inst_29679 = cljs.core.chunk_rest.call(null,inst_29674);
var inst_29680 = cljs.core.count.call(null,inst_29678);
var inst_29654 = inst_29679;
var inst_29655 = inst_29678;
var inst_29656 = inst_29680;
var inst_29657 = (0);
var state_29773__$1 = (function (){var statearr_29828 = state_29773;
(statearr_29828[(13)] = inst_29657);

(statearr_29828[(14)] = inst_29656);

(statearr_29828[(15)] = inst_29654);

(statearr_29828[(16)] = inst_29655);

return statearr_29828;
})();
var statearr_29829_29896 = state_29773__$1;
(statearr_29829_29896[(2)] = null);

(statearr_29829_29896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (11))){
var inst_29674 = (state_29773[(7)]);
var inst_29654 = (state_29773[(15)]);
var inst_29674__$1 = cljs.core.seq.call(null,inst_29654);
var state_29773__$1 = (function (){var statearr_29830 = state_29773;
(statearr_29830[(7)] = inst_29674__$1);

return statearr_29830;
})();
if(inst_29674__$1){
var statearr_29831_29897 = state_29773__$1;
(statearr_29831_29897[(1)] = (16));

} else {
var statearr_29832_29898 = state_29773__$1;
(statearr_29832_29898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (9))){
var inst_29702 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29833_29899 = state_29773__$1;
(statearr_29833_29899[(2)] = inst_29702);

(statearr_29833_29899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (5))){
var inst_29652 = cljs.core.deref.call(null,cs);
var inst_29653 = cljs.core.seq.call(null,inst_29652);
var inst_29654 = inst_29653;
var inst_29655 = null;
var inst_29656 = (0);
var inst_29657 = (0);
var state_29773__$1 = (function (){var statearr_29834 = state_29773;
(statearr_29834[(13)] = inst_29657);

(statearr_29834[(14)] = inst_29656);

(statearr_29834[(15)] = inst_29654);

(statearr_29834[(16)] = inst_29655);

return statearr_29834;
})();
var statearr_29835_29900 = state_29773__$1;
(statearr_29835_29900[(2)] = null);

(statearr_29835_29900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (14))){
var state_29773__$1 = state_29773;
var statearr_29836_29901 = state_29773__$1;
(statearr_29836_29901[(2)] = null);

(statearr_29836_29901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (45))){
var inst_29763 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29837_29902 = state_29773__$1;
(statearr_29837_29902[(2)] = inst_29763);

(statearr_29837_29902[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (26))){
var inst_29705 = (state_29773[(29)]);
var inst_29759 = (state_29773[(2)]);
var inst_29760 = cljs.core.seq.call(null,inst_29705);
var state_29773__$1 = (function (){var statearr_29838 = state_29773;
(statearr_29838[(31)] = inst_29759);

return statearr_29838;
})();
if(inst_29760){
var statearr_29839_29903 = state_29773__$1;
(statearr_29839_29903[(1)] = (42));

} else {
var statearr_29840_29904 = state_29773__$1;
(statearr_29840_29904[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (16))){
var inst_29674 = (state_29773[(7)]);
var inst_29676 = cljs.core.chunked_seq_QMARK_.call(null,inst_29674);
var state_29773__$1 = state_29773;
if(inst_29676){
var statearr_29841_29905 = state_29773__$1;
(statearr_29841_29905[(1)] = (19));

} else {
var statearr_29842_29906 = state_29773__$1;
(statearr_29842_29906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (38))){
var inst_29752 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29843_29907 = state_29773__$1;
(statearr_29843_29907[(2)] = inst_29752);

(statearr_29843_29907[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (30))){
var state_29773__$1 = state_29773;
var statearr_29844_29908 = state_29773__$1;
(statearr_29844_29908[(2)] = null);

(statearr_29844_29908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (10))){
var inst_29657 = (state_29773[(13)]);
var inst_29655 = (state_29773[(16)]);
var inst_29663 = cljs.core._nth.call(null,inst_29655,inst_29657);
var inst_29664 = cljs.core.nth.call(null,inst_29663,(0),null);
var inst_29665 = cljs.core.nth.call(null,inst_29663,(1),null);
var state_29773__$1 = (function (){var statearr_29845 = state_29773;
(statearr_29845[(26)] = inst_29664);

return statearr_29845;
})();
if(cljs.core.truth_(inst_29665)){
var statearr_29846_29909 = state_29773__$1;
(statearr_29846_29909[(1)] = (13));

} else {
var statearr_29847_29910 = state_29773__$1;
(statearr_29847_29910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (18))){
var inst_29698 = (state_29773[(2)]);
var state_29773__$1 = state_29773;
var statearr_29848_29911 = state_29773__$1;
(statearr_29848_29911[(2)] = inst_29698);

(statearr_29848_29911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (42))){
var state_29773__$1 = state_29773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29773__$1,(45),dchan);
} else {
if((state_val_29774 === (37))){
var inst_29741 = (state_29773[(23)]);
var inst_29732 = (state_29773[(25)]);
var inst_29645 = (state_29773[(12)]);
var inst_29741__$1 = cljs.core.first.call(null,inst_29732);
var inst_29742 = cljs.core.async.put_BANG_.call(null,inst_29741__$1,inst_29645,done);
var state_29773__$1 = (function (){var statearr_29849 = state_29773;
(statearr_29849[(23)] = inst_29741__$1);

return statearr_29849;
})();
if(cljs.core.truth_(inst_29742)){
var statearr_29850_29912 = state_29773__$1;
(statearr_29850_29912[(1)] = (39));

} else {
var statearr_29851_29913 = state_29773__$1;
(statearr_29851_29913[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29774 === (8))){
var inst_29657 = (state_29773[(13)]);
var inst_29656 = (state_29773[(14)]);
var inst_29659 = (inst_29657 < inst_29656);
var inst_29660 = inst_29659;
var state_29773__$1 = state_29773;
if(cljs.core.truth_(inst_29660)){
var statearr_29852_29914 = state_29773__$1;
(statearr_29852_29914[(1)] = (10));

} else {
var statearr_29853_29915 = state_29773__$1;
(statearr_29853_29915[(1)] = (11));

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
});})(c__23381__auto___29861,cs,m,dchan,dctr,done))
;
return ((function (switch__23319__auto__,c__23381__auto___29861,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23320__auto__ = null;
var cljs$core$async$mult_$_state_machine__23320__auto____0 = (function (){
var statearr_29857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29857[(0)] = cljs$core$async$mult_$_state_machine__23320__auto__);

(statearr_29857[(1)] = (1));

return statearr_29857;
});
var cljs$core$async$mult_$_state_machine__23320__auto____1 = (function (state_29773){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_29773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e29858){if((e29858 instanceof Object)){
var ex__23323__auto__ = e29858;
var statearr_29859_29916 = state_29773;
(statearr_29859_29916[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29917 = state_29773;
state_29773 = G__29917;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23320__auto__ = function(state_29773){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23320__auto____1.call(this,state_29773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23320__auto____0;
cljs$core$async$mult_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23320__auto____1;
return cljs$core$async$mult_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___29861,cs,m,dchan,dctr,done))
})();
var state__23383__auto__ = (function (){var statearr_29860 = f__23382__auto__.call(null);
(statearr_29860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___29861);

return statearr_29860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___29861,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__29919 = arguments.length;
switch (G__29919) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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

cljs.core.async.Mix = (function (){var obj29922 = {};
return obj29922;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__17837__auto__ = m;
if(and__17837__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17837__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18485__auto__ = (((m == null))?null:m);
return (function (){var or__17849__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__17837__auto__ = m;
if(and__17837__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17837__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18485__auto__ = (((m == null))?null:m);
return (function (){var or__17849__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__17837__auto__ = m;
if(and__17837__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17837__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18485__auto__ = (((m == null))?null:m);
return (function (){var or__17849__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__17837__auto__ = m;
if(and__17837__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17837__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18485__auto__ = (((m == null))?null:m);
return (function (){var or__17849__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__17837__auto__ = m;
if(and__17837__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17837__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18485__auto__ = (((m == null))?null:m);
return (function (){var or__17849__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__18889__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18889__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29927){
var map__29928 = p__29927;
var map__29928__$1 = ((cljs.core.seq_QMARK_.call(null,map__29928))?cljs.core.apply.call(null,cljs.core.hash_map,map__29928):map__29928);
var opts = map__29928__$1;
var statearr_29929_29932 = state;
(statearr_29929_29932[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__29928,map__29928__$1,opts){
return (function (val){
var statearr_29930_29933 = state;
(statearr_29930_29933[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29928,map__29928__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_29931_29934 = state;
(statearr_29931_29934[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29923){
var G__29924 = cljs.core.first.call(null,seq29923);
var seq29923__$1 = cljs.core.next.call(null,seq29923);
var G__29925 = cljs.core.first.call(null,seq29923__$1);
var seq29923__$2 = cljs.core.next.call(null,seq29923__$1);
var G__29926 = cljs.core.first.call(null,seq29923__$2);
var seq29923__$3 = cljs.core.next.call(null,seq29923__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29924,G__29925,G__29926,seq29923__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t30054 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30054 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30055){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30055 = meta30055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30056,meta30055__$1){
var self__ = this;
var _30056__$1 = this;
return (new cljs.core.async.t30054(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30055__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30056){
var self__ = this;
var _30056__$1 = this;
return self__.meta30055;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30054.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30054.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30054.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30054.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30054.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30054.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30054.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30054.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30054.cljs$lang$type = true;

cljs.core.async.t30054.cljs$lang$ctorStr = "cljs.core.async/t30054";

cljs.core.async.t30054.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18428__auto__,writer__18429__auto__,opt__18430__auto__){
return cljs.core._write.call(null,writer__18429__auto__,"cljs.core.async/t30054");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30054 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t30054(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30055){
return (new cljs.core.async.t30054(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30055));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30054(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23381__auto___30173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___30173,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___30173,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30126){
var state_val_30127 = (state_30126[(1)]);
if((state_val_30127 === (7))){
var inst_30070 = (state_30126[(7)]);
var inst_30075 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30070);
var state_30126__$1 = state_30126;
var statearr_30128_30174 = state_30126__$1;
(statearr_30128_30174[(2)] = inst_30075);

(statearr_30128_30174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (20))){
var inst_30085 = (state_30126[(8)]);
var state_30126__$1 = state_30126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30126__$1,(23),out,inst_30085);
} else {
if((state_val_30127 === (1))){
var inst_30060 = (state_30126[(9)]);
var inst_30060__$1 = calc_state.call(null);
var inst_30061 = cljs.core.seq_QMARK_.call(null,inst_30060__$1);
var state_30126__$1 = (function (){var statearr_30129 = state_30126;
(statearr_30129[(9)] = inst_30060__$1);

return statearr_30129;
})();
if(inst_30061){
var statearr_30130_30175 = state_30126__$1;
(statearr_30130_30175[(1)] = (2));

} else {
var statearr_30131_30176 = state_30126__$1;
(statearr_30131_30176[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (24))){
var inst_30078 = (state_30126[(10)]);
var inst_30070 = inst_30078;
var state_30126__$1 = (function (){var statearr_30132 = state_30126;
(statearr_30132[(7)] = inst_30070);

return statearr_30132;
})();
var statearr_30133_30177 = state_30126__$1;
(statearr_30133_30177[(2)] = null);

(statearr_30133_30177[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (4))){
var inst_30060 = (state_30126[(9)]);
var inst_30066 = (state_30126[(2)]);
var inst_30067 = cljs.core.get.call(null,inst_30066,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30068 = cljs.core.get.call(null,inst_30066,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30069 = cljs.core.get.call(null,inst_30066,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30070 = inst_30060;
var state_30126__$1 = (function (){var statearr_30134 = state_30126;
(statearr_30134[(11)] = inst_30067);

(statearr_30134[(12)] = inst_30068);

(statearr_30134[(7)] = inst_30070);

(statearr_30134[(13)] = inst_30069);

return statearr_30134;
})();
var statearr_30135_30178 = state_30126__$1;
(statearr_30135_30178[(2)] = null);

(statearr_30135_30178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (15))){
var state_30126__$1 = state_30126;
var statearr_30136_30179 = state_30126__$1;
(statearr_30136_30179[(2)] = null);

(statearr_30136_30179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (21))){
var inst_30078 = (state_30126[(10)]);
var inst_30070 = inst_30078;
var state_30126__$1 = (function (){var statearr_30137 = state_30126;
(statearr_30137[(7)] = inst_30070);

return statearr_30137;
})();
var statearr_30138_30180 = state_30126__$1;
(statearr_30138_30180[(2)] = null);

(statearr_30138_30180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (13))){
var inst_30122 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
var statearr_30139_30181 = state_30126__$1;
(statearr_30139_30181[(2)] = inst_30122);

(statearr_30139_30181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (22))){
var inst_30120 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
var statearr_30140_30182 = state_30126__$1;
(statearr_30140_30182[(2)] = inst_30120);

(statearr_30140_30182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (6))){
var inst_30124 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30126__$1,inst_30124);
} else {
if((state_val_30127 === (25))){
var state_30126__$1 = state_30126;
var statearr_30141_30183 = state_30126__$1;
(statearr_30141_30183[(2)] = null);

(statearr_30141_30183[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (17))){
var inst_30100 = (state_30126[(14)]);
var state_30126__$1 = state_30126;
var statearr_30142_30184 = state_30126__$1;
(statearr_30142_30184[(2)] = inst_30100);

(statearr_30142_30184[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (3))){
var inst_30060 = (state_30126[(9)]);
var state_30126__$1 = state_30126;
var statearr_30143_30185 = state_30126__$1;
(statearr_30143_30185[(2)] = inst_30060);

(statearr_30143_30185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (12))){
var inst_30086 = (state_30126[(15)]);
var inst_30100 = (state_30126[(14)]);
var inst_30079 = (state_30126[(16)]);
var inst_30100__$1 = inst_30079.call(null,inst_30086);
var state_30126__$1 = (function (){var statearr_30144 = state_30126;
(statearr_30144[(14)] = inst_30100__$1);

return statearr_30144;
})();
if(cljs.core.truth_(inst_30100__$1)){
var statearr_30145_30186 = state_30126__$1;
(statearr_30145_30186[(1)] = (17));

} else {
var statearr_30146_30187 = state_30126__$1;
(statearr_30146_30187[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (2))){
var inst_30060 = (state_30126[(9)]);
var inst_30063 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30060);
var state_30126__$1 = state_30126;
var statearr_30147_30188 = state_30126__$1;
(statearr_30147_30188[(2)] = inst_30063);

(statearr_30147_30188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (23))){
var inst_30111 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
if(cljs.core.truth_(inst_30111)){
var statearr_30148_30189 = state_30126__$1;
(statearr_30148_30189[(1)] = (24));

} else {
var statearr_30149_30190 = state_30126__$1;
(statearr_30149_30190[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (19))){
var inst_30108 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
if(cljs.core.truth_(inst_30108)){
var statearr_30150_30191 = state_30126__$1;
(statearr_30150_30191[(1)] = (20));

} else {
var statearr_30151_30192 = state_30126__$1;
(statearr_30151_30192[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (11))){
var inst_30085 = (state_30126[(8)]);
var inst_30091 = (inst_30085 == null);
var state_30126__$1 = state_30126;
if(cljs.core.truth_(inst_30091)){
var statearr_30152_30193 = state_30126__$1;
(statearr_30152_30193[(1)] = (14));

} else {
var statearr_30153_30194 = state_30126__$1;
(statearr_30153_30194[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (9))){
var inst_30078 = (state_30126[(10)]);
var inst_30078__$1 = (state_30126[(2)]);
var inst_30079 = cljs.core.get.call(null,inst_30078__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30080 = cljs.core.get.call(null,inst_30078__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30081 = cljs.core.get.call(null,inst_30078__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30126__$1 = (function (){var statearr_30154 = state_30126;
(statearr_30154[(10)] = inst_30078__$1);

(statearr_30154[(17)] = inst_30080);

(statearr_30154[(16)] = inst_30079);

return statearr_30154;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30126__$1,(10),inst_30081);
} else {
if((state_val_30127 === (5))){
var inst_30070 = (state_30126[(7)]);
var inst_30073 = cljs.core.seq_QMARK_.call(null,inst_30070);
var state_30126__$1 = state_30126;
if(inst_30073){
var statearr_30155_30195 = state_30126__$1;
(statearr_30155_30195[(1)] = (7));

} else {
var statearr_30156_30196 = state_30126__$1;
(statearr_30156_30196[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (14))){
var inst_30086 = (state_30126[(15)]);
var inst_30093 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30086);
var state_30126__$1 = state_30126;
var statearr_30157_30197 = state_30126__$1;
(statearr_30157_30197[(2)] = inst_30093);

(statearr_30157_30197[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (26))){
var inst_30116 = (state_30126[(2)]);
var state_30126__$1 = state_30126;
var statearr_30158_30198 = state_30126__$1;
(statearr_30158_30198[(2)] = inst_30116);

(statearr_30158_30198[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (16))){
var inst_30096 = (state_30126[(2)]);
var inst_30097 = calc_state.call(null);
var inst_30070 = inst_30097;
var state_30126__$1 = (function (){var statearr_30159 = state_30126;
(statearr_30159[(18)] = inst_30096);

(statearr_30159[(7)] = inst_30070);

return statearr_30159;
})();
var statearr_30160_30199 = state_30126__$1;
(statearr_30160_30199[(2)] = null);

(statearr_30160_30199[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (10))){
var inst_30086 = (state_30126[(15)]);
var inst_30085 = (state_30126[(8)]);
var inst_30084 = (state_30126[(2)]);
var inst_30085__$1 = cljs.core.nth.call(null,inst_30084,(0),null);
var inst_30086__$1 = cljs.core.nth.call(null,inst_30084,(1),null);
var inst_30087 = (inst_30085__$1 == null);
var inst_30088 = cljs.core._EQ_.call(null,inst_30086__$1,change);
var inst_30089 = (inst_30087) || (inst_30088);
var state_30126__$1 = (function (){var statearr_30161 = state_30126;
(statearr_30161[(15)] = inst_30086__$1);

(statearr_30161[(8)] = inst_30085__$1);

return statearr_30161;
})();
if(cljs.core.truth_(inst_30089)){
var statearr_30162_30200 = state_30126__$1;
(statearr_30162_30200[(1)] = (11));

} else {
var statearr_30163_30201 = state_30126__$1;
(statearr_30163_30201[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (18))){
var inst_30086 = (state_30126[(15)]);
var inst_30080 = (state_30126[(17)]);
var inst_30079 = (state_30126[(16)]);
var inst_30103 = cljs.core.empty_QMARK_.call(null,inst_30079);
var inst_30104 = inst_30080.call(null,inst_30086);
var inst_30105 = cljs.core.not.call(null,inst_30104);
var inst_30106 = (inst_30103) && (inst_30105);
var state_30126__$1 = state_30126;
var statearr_30164_30202 = state_30126__$1;
(statearr_30164_30202[(2)] = inst_30106);

(statearr_30164_30202[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30127 === (8))){
var inst_30070 = (state_30126[(7)]);
var state_30126__$1 = state_30126;
var statearr_30165_30203 = state_30126__$1;
(statearr_30165_30203[(2)] = inst_30070);

(statearr_30165_30203[(1)] = (9));


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
});})(c__23381__auto___30173,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23319__auto__,c__23381__auto___30173,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23320__auto__ = null;
var cljs$core$async$mix_$_state_machine__23320__auto____0 = (function (){
var statearr_30169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30169[(0)] = cljs$core$async$mix_$_state_machine__23320__auto__);

(statearr_30169[(1)] = (1));

return statearr_30169;
});
var cljs$core$async$mix_$_state_machine__23320__auto____1 = (function (state_30126){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_30126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e30170){if((e30170 instanceof Object)){
var ex__23323__auto__ = e30170;
var statearr_30171_30204 = state_30126;
(statearr_30171_30204[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30205 = state_30126;
state_30126 = G__30205;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23320__auto__ = function(state_30126){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23320__auto____1.call(this,state_30126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23320__auto____0;
cljs$core$async$mix_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23320__auto____1;
return cljs$core$async$mix_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___30173,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23383__auto__ = (function (){var statearr_30172 = f__23382__auto__.call(null);
(statearr_30172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___30173);

return statearr_30172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___30173,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = (function (){var obj30207 = {};
return obj30207;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17837__auto__ = p;
if(and__17837__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17837__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18485__auto__ = (((p == null))?null:p);
return (function (){var or__17849__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__17837__auto__ = p;
if(and__17837__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17837__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18485__auto__ = (((p == null))?null:p);
return (function (){var or__17849__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__30209 = arguments.length;
switch (G__30209) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__17837__auto__ = p;
if(and__17837__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17837__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18485__auto__ = (((p == null))?null:p);
return (function (){var or__17849__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__17837__auto__ = p;
if(and__17837__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17837__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18485__auto__ = (((p == null))?null:p);
return (function (){var or__17849__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18485__auto__)]);
if(or__17849__auto__){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17849__auto____$1){
return or__17849__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__30213 = arguments.length;
switch (G__30213) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17849__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17849__auto__)){
return or__17849__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17849__auto__,mults){
return (function (p1__30211_SHARP_){
if(cljs.core.truth_(p1__30211_SHARP_.call(null,topic))){
return p1__30211_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30211_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17849__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30214 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30214 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30215){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30215 = meta30215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30216,meta30215__$1){
var self__ = this;
var _30216__$1 = this;
return (new cljs.core.async.t30214(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30215__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30216){
var self__ = this;
var _30216__$1 = this;
return self__.meta30215;
});})(mults,ensure_mult))
;

cljs.core.async.t30214.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30214.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30214.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30214.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30214.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30214.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30214.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30214.cljs$lang$type = true;

cljs.core.async.t30214.cljs$lang$ctorStr = "cljs.core.async/t30214";

cljs.core.async.t30214.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18428__auto__,writer__18429__auto__,opt__18430__auto__){
return cljs.core._write.call(null,writer__18429__auto__,"cljs.core.async/t30214");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30214 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30214(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30215){
return (new cljs.core.async.t30214(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30215));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30214(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23381__auto___30337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___30337,mults,ensure_mult,p){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___30337,mults,ensure_mult,p){
return (function (state_30288){
var state_val_30289 = (state_30288[(1)]);
if((state_val_30289 === (7))){
var inst_30284 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
var statearr_30290_30338 = state_30288__$1;
(statearr_30290_30338[(2)] = inst_30284);

(statearr_30290_30338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (20))){
var state_30288__$1 = state_30288;
var statearr_30291_30339 = state_30288__$1;
(statearr_30291_30339[(2)] = null);

(statearr_30291_30339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (1))){
var state_30288__$1 = state_30288;
var statearr_30292_30340 = state_30288__$1;
(statearr_30292_30340[(2)] = null);

(statearr_30292_30340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (24))){
var inst_30267 = (state_30288[(7)]);
var inst_30276 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30267);
var state_30288__$1 = state_30288;
var statearr_30293_30341 = state_30288__$1;
(statearr_30293_30341[(2)] = inst_30276);

(statearr_30293_30341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (4))){
var inst_30219 = (state_30288[(8)]);
var inst_30219__$1 = (state_30288[(2)]);
var inst_30220 = (inst_30219__$1 == null);
var state_30288__$1 = (function (){var statearr_30294 = state_30288;
(statearr_30294[(8)] = inst_30219__$1);

return statearr_30294;
})();
if(cljs.core.truth_(inst_30220)){
var statearr_30295_30342 = state_30288__$1;
(statearr_30295_30342[(1)] = (5));

} else {
var statearr_30296_30343 = state_30288__$1;
(statearr_30296_30343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (15))){
var inst_30261 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
var statearr_30297_30344 = state_30288__$1;
(statearr_30297_30344[(2)] = inst_30261);

(statearr_30297_30344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (21))){
var inst_30281 = (state_30288[(2)]);
var state_30288__$1 = (function (){var statearr_30298 = state_30288;
(statearr_30298[(9)] = inst_30281);

return statearr_30298;
})();
var statearr_30299_30345 = state_30288__$1;
(statearr_30299_30345[(2)] = null);

(statearr_30299_30345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (13))){
var inst_30243 = (state_30288[(10)]);
var inst_30245 = cljs.core.chunked_seq_QMARK_.call(null,inst_30243);
var state_30288__$1 = state_30288;
if(inst_30245){
var statearr_30300_30346 = state_30288__$1;
(statearr_30300_30346[(1)] = (16));

} else {
var statearr_30301_30347 = state_30288__$1;
(statearr_30301_30347[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (22))){
var inst_30273 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
if(cljs.core.truth_(inst_30273)){
var statearr_30302_30348 = state_30288__$1;
(statearr_30302_30348[(1)] = (23));

} else {
var statearr_30303_30349 = state_30288__$1;
(statearr_30303_30349[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (6))){
var inst_30219 = (state_30288[(8)]);
var inst_30269 = (state_30288[(11)]);
var inst_30267 = (state_30288[(7)]);
var inst_30267__$1 = topic_fn.call(null,inst_30219);
var inst_30268 = cljs.core.deref.call(null,mults);
var inst_30269__$1 = cljs.core.get.call(null,inst_30268,inst_30267__$1);
var state_30288__$1 = (function (){var statearr_30304 = state_30288;
(statearr_30304[(11)] = inst_30269__$1);

(statearr_30304[(7)] = inst_30267__$1);

return statearr_30304;
})();
if(cljs.core.truth_(inst_30269__$1)){
var statearr_30305_30350 = state_30288__$1;
(statearr_30305_30350[(1)] = (19));

} else {
var statearr_30306_30351 = state_30288__$1;
(statearr_30306_30351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (25))){
var inst_30278 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
var statearr_30307_30352 = state_30288__$1;
(statearr_30307_30352[(2)] = inst_30278);

(statearr_30307_30352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (17))){
var inst_30243 = (state_30288[(10)]);
var inst_30252 = cljs.core.first.call(null,inst_30243);
var inst_30253 = cljs.core.async.muxch_STAR_.call(null,inst_30252);
var inst_30254 = cljs.core.async.close_BANG_.call(null,inst_30253);
var inst_30255 = cljs.core.next.call(null,inst_30243);
var inst_30229 = inst_30255;
var inst_30230 = null;
var inst_30231 = (0);
var inst_30232 = (0);
var state_30288__$1 = (function (){var statearr_30308 = state_30288;
(statearr_30308[(12)] = inst_30230);

(statearr_30308[(13)] = inst_30231);

(statearr_30308[(14)] = inst_30232);

(statearr_30308[(15)] = inst_30229);

(statearr_30308[(16)] = inst_30254);

return statearr_30308;
})();
var statearr_30309_30353 = state_30288__$1;
(statearr_30309_30353[(2)] = null);

(statearr_30309_30353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (3))){
var inst_30286 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30288__$1,inst_30286);
} else {
if((state_val_30289 === (12))){
var inst_30263 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
var statearr_30310_30354 = state_30288__$1;
(statearr_30310_30354[(2)] = inst_30263);

(statearr_30310_30354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (2))){
var state_30288__$1 = state_30288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30288__$1,(4),ch);
} else {
if((state_val_30289 === (23))){
var state_30288__$1 = state_30288;
var statearr_30311_30355 = state_30288__$1;
(statearr_30311_30355[(2)] = null);

(statearr_30311_30355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (19))){
var inst_30219 = (state_30288[(8)]);
var inst_30269 = (state_30288[(11)]);
var inst_30271 = cljs.core.async.muxch_STAR_.call(null,inst_30269);
var state_30288__$1 = state_30288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30288__$1,(22),inst_30271,inst_30219);
} else {
if((state_val_30289 === (11))){
var inst_30243 = (state_30288[(10)]);
var inst_30229 = (state_30288[(15)]);
var inst_30243__$1 = cljs.core.seq.call(null,inst_30229);
var state_30288__$1 = (function (){var statearr_30312 = state_30288;
(statearr_30312[(10)] = inst_30243__$1);

return statearr_30312;
})();
if(inst_30243__$1){
var statearr_30313_30356 = state_30288__$1;
(statearr_30313_30356[(1)] = (13));

} else {
var statearr_30314_30357 = state_30288__$1;
(statearr_30314_30357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (9))){
var inst_30265 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
var statearr_30315_30358 = state_30288__$1;
(statearr_30315_30358[(2)] = inst_30265);

(statearr_30315_30358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (5))){
var inst_30226 = cljs.core.deref.call(null,mults);
var inst_30227 = cljs.core.vals.call(null,inst_30226);
var inst_30228 = cljs.core.seq.call(null,inst_30227);
var inst_30229 = inst_30228;
var inst_30230 = null;
var inst_30231 = (0);
var inst_30232 = (0);
var state_30288__$1 = (function (){var statearr_30316 = state_30288;
(statearr_30316[(12)] = inst_30230);

(statearr_30316[(13)] = inst_30231);

(statearr_30316[(14)] = inst_30232);

(statearr_30316[(15)] = inst_30229);

return statearr_30316;
})();
var statearr_30317_30359 = state_30288__$1;
(statearr_30317_30359[(2)] = null);

(statearr_30317_30359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (14))){
var state_30288__$1 = state_30288;
var statearr_30321_30360 = state_30288__$1;
(statearr_30321_30360[(2)] = null);

(statearr_30321_30360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (16))){
var inst_30243 = (state_30288[(10)]);
var inst_30247 = cljs.core.chunk_first.call(null,inst_30243);
var inst_30248 = cljs.core.chunk_rest.call(null,inst_30243);
var inst_30249 = cljs.core.count.call(null,inst_30247);
var inst_30229 = inst_30248;
var inst_30230 = inst_30247;
var inst_30231 = inst_30249;
var inst_30232 = (0);
var state_30288__$1 = (function (){var statearr_30322 = state_30288;
(statearr_30322[(12)] = inst_30230);

(statearr_30322[(13)] = inst_30231);

(statearr_30322[(14)] = inst_30232);

(statearr_30322[(15)] = inst_30229);

return statearr_30322;
})();
var statearr_30323_30361 = state_30288__$1;
(statearr_30323_30361[(2)] = null);

(statearr_30323_30361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (10))){
var inst_30230 = (state_30288[(12)]);
var inst_30231 = (state_30288[(13)]);
var inst_30232 = (state_30288[(14)]);
var inst_30229 = (state_30288[(15)]);
var inst_30237 = cljs.core._nth.call(null,inst_30230,inst_30232);
var inst_30238 = cljs.core.async.muxch_STAR_.call(null,inst_30237);
var inst_30239 = cljs.core.async.close_BANG_.call(null,inst_30238);
var inst_30240 = (inst_30232 + (1));
var tmp30318 = inst_30230;
var tmp30319 = inst_30231;
var tmp30320 = inst_30229;
var inst_30229__$1 = tmp30320;
var inst_30230__$1 = tmp30318;
var inst_30231__$1 = tmp30319;
var inst_30232__$1 = inst_30240;
var state_30288__$1 = (function (){var statearr_30324 = state_30288;
(statearr_30324[(12)] = inst_30230__$1);

(statearr_30324[(13)] = inst_30231__$1);

(statearr_30324[(14)] = inst_30232__$1);

(statearr_30324[(17)] = inst_30239);

(statearr_30324[(15)] = inst_30229__$1);

return statearr_30324;
})();
var statearr_30325_30362 = state_30288__$1;
(statearr_30325_30362[(2)] = null);

(statearr_30325_30362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (18))){
var inst_30258 = (state_30288[(2)]);
var state_30288__$1 = state_30288;
var statearr_30326_30363 = state_30288__$1;
(statearr_30326_30363[(2)] = inst_30258);

(statearr_30326_30363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30289 === (8))){
var inst_30231 = (state_30288[(13)]);
var inst_30232 = (state_30288[(14)]);
var inst_30234 = (inst_30232 < inst_30231);
var inst_30235 = inst_30234;
var state_30288__$1 = state_30288;
if(cljs.core.truth_(inst_30235)){
var statearr_30327_30364 = state_30288__$1;
(statearr_30327_30364[(1)] = (10));

} else {
var statearr_30328_30365 = state_30288__$1;
(statearr_30328_30365[(1)] = (11));

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
});})(c__23381__auto___30337,mults,ensure_mult,p))
;
return ((function (switch__23319__auto__,c__23381__auto___30337,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23320__auto__ = null;
var cljs$core$async$state_machine__23320__auto____0 = (function (){
var statearr_30332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30332[(0)] = cljs$core$async$state_machine__23320__auto__);

(statearr_30332[(1)] = (1));

return statearr_30332;
});
var cljs$core$async$state_machine__23320__auto____1 = (function (state_30288){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_30288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e30333){if((e30333 instanceof Object)){
var ex__23323__auto__ = e30333;
var statearr_30334_30366 = state_30288;
(statearr_30334_30366[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30367 = state_30288;
state_30288 = G__30367;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$state_machine__23320__auto__ = function(state_30288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23320__auto____1.call(this,state_30288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23320__auto____0;
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23320__auto____1;
return cljs$core$async$state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___30337,mults,ensure_mult,p))
})();
var state__23383__auto__ = (function (){var statearr_30335 = f__23382__auto__.call(null);
(statearr_30335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___30337);

return statearr_30335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___30337,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__30369 = arguments.length;
switch (G__30369) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__30372 = arguments.length;
switch (G__30372) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__30375 = arguments.length;
switch (G__30375) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__23381__auto___30445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___30445,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___30445,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30414){
var state_val_30415 = (state_30414[(1)]);
if((state_val_30415 === (7))){
var state_30414__$1 = state_30414;
var statearr_30416_30446 = state_30414__$1;
(statearr_30416_30446[(2)] = null);

(statearr_30416_30446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (1))){
var state_30414__$1 = state_30414;
var statearr_30417_30447 = state_30414__$1;
(statearr_30417_30447[(2)] = null);

(statearr_30417_30447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (4))){
var inst_30378 = (state_30414[(7)]);
var inst_30380 = (inst_30378 < cnt);
var state_30414__$1 = state_30414;
if(cljs.core.truth_(inst_30380)){
var statearr_30418_30448 = state_30414__$1;
(statearr_30418_30448[(1)] = (6));

} else {
var statearr_30419_30449 = state_30414__$1;
(statearr_30419_30449[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (15))){
var inst_30410 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
var statearr_30420_30450 = state_30414__$1;
(statearr_30420_30450[(2)] = inst_30410);

(statearr_30420_30450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (13))){
var inst_30403 = cljs.core.async.close_BANG_.call(null,out);
var state_30414__$1 = state_30414;
var statearr_30421_30451 = state_30414__$1;
(statearr_30421_30451[(2)] = inst_30403);

(statearr_30421_30451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (6))){
var state_30414__$1 = state_30414;
var statearr_30422_30452 = state_30414__$1;
(statearr_30422_30452[(2)] = null);

(statearr_30422_30452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (3))){
var inst_30412 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30414__$1,inst_30412);
} else {
if((state_val_30415 === (12))){
var inst_30400 = (state_30414[(8)]);
var inst_30400__$1 = (state_30414[(2)]);
var inst_30401 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30400__$1);
var state_30414__$1 = (function (){var statearr_30423 = state_30414;
(statearr_30423[(8)] = inst_30400__$1);

return statearr_30423;
})();
if(cljs.core.truth_(inst_30401)){
var statearr_30424_30453 = state_30414__$1;
(statearr_30424_30453[(1)] = (13));

} else {
var statearr_30425_30454 = state_30414__$1;
(statearr_30425_30454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (2))){
var inst_30377 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30378 = (0);
var state_30414__$1 = (function (){var statearr_30426 = state_30414;
(statearr_30426[(9)] = inst_30377);

(statearr_30426[(7)] = inst_30378);

return statearr_30426;
})();
var statearr_30427_30455 = state_30414__$1;
(statearr_30427_30455[(2)] = null);

(statearr_30427_30455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (11))){
var inst_30378 = (state_30414[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30414,(10),Object,null,(9));
var inst_30387 = chs__$1.call(null,inst_30378);
var inst_30388 = done.call(null,inst_30378);
var inst_30389 = cljs.core.async.take_BANG_.call(null,inst_30387,inst_30388);
var state_30414__$1 = state_30414;
var statearr_30428_30456 = state_30414__$1;
(statearr_30428_30456[(2)] = inst_30389);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30414__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (9))){
var inst_30378 = (state_30414[(7)]);
var inst_30391 = (state_30414[(2)]);
var inst_30392 = (inst_30378 + (1));
var inst_30378__$1 = inst_30392;
var state_30414__$1 = (function (){var statearr_30429 = state_30414;
(statearr_30429[(7)] = inst_30378__$1);

(statearr_30429[(10)] = inst_30391);

return statearr_30429;
})();
var statearr_30430_30457 = state_30414__$1;
(statearr_30430_30457[(2)] = null);

(statearr_30430_30457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (5))){
var inst_30398 = (state_30414[(2)]);
var state_30414__$1 = (function (){var statearr_30431 = state_30414;
(statearr_30431[(11)] = inst_30398);

return statearr_30431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30414__$1,(12),dchan);
} else {
if((state_val_30415 === (14))){
var inst_30400 = (state_30414[(8)]);
var inst_30405 = cljs.core.apply.call(null,f,inst_30400);
var state_30414__$1 = state_30414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30414__$1,(16),out,inst_30405);
} else {
if((state_val_30415 === (16))){
var inst_30407 = (state_30414[(2)]);
var state_30414__$1 = (function (){var statearr_30432 = state_30414;
(statearr_30432[(12)] = inst_30407);

return statearr_30432;
})();
var statearr_30433_30458 = state_30414__$1;
(statearr_30433_30458[(2)] = null);

(statearr_30433_30458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (10))){
var inst_30382 = (state_30414[(2)]);
var inst_30383 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30414__$1 = (function (){var statearr_30434 = state_30414;
(statearr_30434[(13)] = inst_30382);

return statearr_30434;
})();
var statearr_30435_30459 = state_30414__$1;
(statearr_30435_30459[(2)] = inst_30383);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30414__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (8))){
var inst_30396 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
var statearr_30436_30460 = state_30414__$1;
(statearr_30436_30460[(2)] = inst_30396);

(statearr_30436_30460[(1)] = (5));


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
});})(c__23381__auto___30445,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23319__auto__,c__23381__auto___30445,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23320__auto__ = null;
var cljs$core$async$state_machine__23320__auto____0 = (function (){
var statearr_30440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30440[(0)] = cljs$core$async$state_machine__23320__auto__);

(statearr_30440[(1)] = (1));

return statearr_30440;
});
var cljs$core$async$state_machine__23320__auto____1 = (function (state_30414){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_30414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e30441){if((e30441 instanceof Object)){
var ex__23323__auto__ = e30441;
var statearr_30442_30461 = state_30414;
(statearr_30442_30461[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30462 = state_30414;
state_30414 = G__30462;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$state_machine__23320__auto__ = function(state_30414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23320__auto____1.call(this,state_30414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23320__auto____0;
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23320__auto____1;
return cljs$core$async$state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___30445,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23383__auto__ = (function (){var statearr_30443 = f__23382__auto__.call(null);
(statearr_30443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___30445);

return statearr_30443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___30445,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__30465 = arguments.length;
switch (G__30465) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23381__auto___30520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___30520,out){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___30520,out){
return (function (state_30495){
var state_val_30496 = (state_30495[(1)]);
if((state_val_30496 === (7))){
var inst_30474 = (state_30495[(7)]);
var inst_30475 = (state_30495[(8)]);
var inst_30474__$1 = (state_30495[(2)]);
var inst_30475__$1 = cljs.core.nth.call(null,inst_30474__$1,(0),null);
var inst_30476 = cljs.core.nth.call(null,inst_30474__$1,(1),null);
var inst_30477 = (inst_30475__$1 == null);
var state_30495__$1 = (function (){var statearr_30497 = state_30495;
(statearr_30497[(9)] = inst_30476);

(statearr_30497[(7)] = inst_30474__$1);

(statearr_30497[(8)] = inst_30475__$1);

return statearr_30497;
})();
if(cljs.core.truth_(inst_30477)){
var statearr_30498_30521 = state_30495__$1;
(statearr_30498_30521[(1)] = (8));

} else {
var statearr_30499_30522 = state_30495__$1;
(statearr_30499_30522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (1))){
var inst_30466 = cljs.core.vec.call(null,chs);
var inst_30467 = inst_30466;
var state_30495__$1 = (function (){var statearr_30500 = state_30495;
(statearr_30500[(10)] = inst_30467);

return statearr_30500;
})();
var statearr_30501_30523 = state_30495__$1;
(statearr_30501_30523[(2)] = null);

(statearr_30501_30523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (4))){
var inst_30467 = (state_30495[(10)]);
var state_30495__$1 = state_30495;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30495__$1,(7),inst_30467);
} else {
if((state_val_30496 === (6))){
var inst_30491 = (state_30495[(2)]);
var state_30495__$1 = state_30495;
var statearr_30502_30524 = state_30495__$1;
(statearr_30502_30524[(2)] = inst_30491);

(statearr_30502_30524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (3))){
var inst_30493 = (state_30495[(2)]);
var state_30495__$1 = state_30495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30495__$1,inst_30493);
} else {
if((state_val_30496 === (2))){
var inst_30467 = (state_30495[(10)]);
var inst_30469 = cljs.core.count.call(null,inst_30467);
var inst_30470 = (inst_30469 > (0));
var state_30495__$1 = state_30495;
if(cljs.core.truth_(inst_30470)){
var statearr_30504_30525 = state_30495__$1;
(statearr_30504_30525[(1)] = (4));

} else {
var statearr_30505_30526 = state_30495__$1;
(statearr_30505_30526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (11))){
var inst_30467 = (state_30495[(10)]);
var inst_30484 = (state_30495[(2)]);
var tmp30503 = inst_30467;
var inst_30467__$1 = tmp30503;
var state_30495__$1 = (function (){var statearr_30506 = state_30495;
(statearr_30506[(10)] = inst_30467__$1);

(statearr_30506[(11)] = inst_30484);

return statearr_30506;
})();
var statearr_30507_30527 = state_30495__$1;
(statearr_30507_30527[(2)] = null);

(statearr_30507_30527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (9))){
var inst_30475 = (state_30495[(8)]);
var state_30495__$1 = state_30495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30495__$1,(11),out,inst_30475);
} else {
if((state_val_30496 === (5))){
var inst_30489 = cljs.core.async.close_BANG_.call(null,out);
var state_30495__$1 = state_30495;
var statearr_30508_30528 = state_30495__$1;
(statearr_30508_30528[(2)] = inst_30489);

(statearr_30508_30528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (10))){
var inst_30487 = (state_30495[(2)]);
var state_30495__$1 = state_30495;
var statearr_30509_30529 = state_30495__$1;
(statearr_30509_30529[(2)] = inst_30487);

(statearr_30509_30529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (8))){
var inst_30467 = (state_30495[(10)]);
var inst_30476 = (state_30495[(9)]);
var inst_30474 = (state_30495[(7)]);
var inst_30475 = (state_30495[(8)]);
var inst_30479 = (function (){var cs = inst_30467;
var vec__30472 = inst_30474;
var v = inst_30475;
var c = inst_30476;
return ((function (cs,vec__30472,v,c,inst_30467,inst_30476,inst_30474,inst_30475,state_val_30496,c__23381__auto___30520,out){
return (function (p1__30463_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30463_SHARP_);
});
;})(cs,vec__30472,v,c,inst_30467,inst_30476,inst_30474,inst_30475,state_val_30496,c__23381__auto___30520,out))
})();
var inst_30480 = cljs.core.filterv.call(null,inst_30479,inst_30467);
var inst_30467__$1 = inst_30480;
var state_30495__$1 = (function (){var statearr_30510 = state_30495;
(statearr_30510[(10)] = inst_30467__$1);

return statearr_30510;
})();
var statearr_30511_30530 = state_30495__$1;
(statearr_30511_30530[(2)] = null);

(statearr_30511_30530[(1)] = (2));


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
});})(c__23381__auto___30520,out))
;
return ((function (switch__23319__auto__,c__23381__auto___30520,out){
return (function() {
var cljs$core$async$state_machine__23320__auto__ = null;
var cljs$core$async$state_machine__23320__auto____0 = (function (){
var statearr_30515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30515[(0)] = cljs$core$async$state_machine__23320__auto__);

(statearr_30515[(1)] = (1));

return statearr_30515;
});
var cljs$core$async$state_machine__23320__auto____1 = (function (state_30495){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_30495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e30516){if((e30516 instanceof Object)){
var ex__23323__auto__ = e30516;
var statearr_30517_30531 = state_30495;
(statearr_30517_30531[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30532 = state_30495;
state_30495 = G__30532;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$state_machine__23320__auto__ = function(state_30495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23320__auto____1.call(this,state_30495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23320__auto____0;
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23320__auto____1;
return cljs$core$async$state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___30520,out))
})();
var state__23383__auto__ = (function (){var statearr_30518 = f__23382__auto__.call(null);
(statearr_30518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___30520);

return statearr_30518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___30520,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__30534 = arguments.length;
switch (G__30534) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23381__auto___30582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___30582,out){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___30582,out){
return (function (state_30558){
var state_val_30559 = (state_30558[(1)]);
if((state_val_30559 === (7))){
var inst_30540 = (state_30558[(7)]);
var inst_30540__$1 = (state_30558[(2)]);
var inst_30541 = (inst_30540__$1 == null);
var inst_30542 = cljs.core.not.call(null,inst_30541);
var state_30558__$1 = (function (){var statearr_30560 = state_30558;
(statearr_30560[(7)] = inst_30540__$1);

return statearr_30560;
})();
if(inst_30542){
var statearr_30561_30583 = state_30558__$1;
(statearr_30561_30583[(1)] = (8));

} else {
var statearr_30562_30584 = state_30558__$1;
(statearr_30562_30584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (1))){
var inst_30535 = (0);
var state_30558__$1 = (function (){var statearr_30563 = state_30558;
(statearr_30563[(8)] = inst_30535);

return statearr_30563;
})();
var statearr_30564_30585 = state_30558__$1;
(statearr_30564_30585[(2)] = null);

(statearr_30564_30585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (4))){
var state_30558__$1 = state_30558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30558__$1,(7),ch);
} else {
if((state_val_30559 === (6))){
var inst_30553 = (state_30558[(2)]);
var state_30558__$1 = state_30558;
var statearr_30565_30586 = state_30558__$1;
(statearr_30565_30586[(2)] = inst_30553);

(statearr_30565_30586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (3))){
var inst_30555 = (state_30558[(2)]);
var inst_30556 = cljs.core.async.close_BANG_.call(null,out);
var state_30558__$1 = (function (){var statearr_30566 = state_30558;
(statearr_30566[(9)] = inst_30555);

return statearr_30566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30558__$1,inst_30556);
} else {
if((state_val_30559 === (2))){
var inst_30535 = (state_30558[(8)]);
var inst_30537 = (inst_30535 < n);
var state_30558__$1 = state_30558;
if(cljs.core.truth_(inst_30537)){
var statearr_30567_30587 = state_30558__$1;
(statearr_30567_30587[(1)] = (4));

} else {
var statearr_30568_30588 = state_30558__$1;
(statearr_30568_30588[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (11))){
var inst_30535 = (state_30558[(8)]);
var inst_30545 = (state_30558[(2)]);
var inst_30546 = (inst_30535 + (1));
var inst_30535__$1 = inst_30546;
var state_30558__$1 = (function (){var statearr_30569 = state_30558;
(statearr_30569[(8)] = inst_30535__$1);

(statearr_30569[(10)] = inst_30545);

return statearr_30569;
})();
var statearr_30570_30589 = state_30558__$1;
(statearr_30570_30589[(2)] = null);

(statearr_30570_30589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (9))){
var state_30558__$1 = state_30558;
var statearr_30571_30590 = state_30558__$1;
(statearr_30571_30590[(2)] = null);

(statearr_30571_30590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (5))){
var state_30558__$1 = state_30558;
var statearr_30572_30591 = state_30558__$1;
(statearr_30572_30591[(2)] = null);

(statearr_30572_30591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (10))){
var inst_30550 = (state_30558[(2)]);
var state_30558__$1 = state_30558;
var statearr_30573_30592 = state_30558__$1;
(statearr_30573_30592[(2)] = inst_30550);

(statearr_30573_30592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (8))){
var inst_30540 = (state_30558[(7)]);
var state_30558__$1 = state_30558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30558__$1,(11),out,inst_30540);
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
});})(c__23381__auto___30582,out))
;
return ((function (switch__23319__auto__,c__23381__auto___30582,out){
return (function() {
var cljs$core$async$state_machine__23320__auto__ = null;
var cljs$core$async$state_machine__23320__auto____0 = (function (){
var statearr_30577 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30577[(0)] = cljs$core$async$state_machine__23320__auto__);

(statearr_30577[(1)] = (1));

return statearr_30577;
});
var cljs$core$async$state_machine__23320__auto____1 = (function (state_30558){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_30558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e30578){if((e30578 instanceof Object)){
var ex__23323__auto__ = e30578;
var statearr_30579_30593 = state_30558;
(statearr_30579_30593[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30594 = state_30558;
state_30558 = G__30594;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$state_machine__23320__auto__ = function(state_30558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23320__auto____1.call(this,state_30558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23320__auto____0;
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23320__auto____1;
return cljs$core$async$state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___30582,out))
})();
var state__23383__auto__ = (function (){var statearr_30580 = f__23382__auto__.call(null);
(statearr_30580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___30582);

return statearr_30580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___30582,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30602 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30602 = (function (map_LT_,f,ch,meta30603){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30603 = meta30603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30604,meta30603__$1){
var self__ = this;
var _30604__$1 = this;
return (new cljs.core.async.t30602(self__.map_LT_,self__.f,self__.ch,meta30603__$1));
});

cljs.core.async.t30602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30604){
var self__ = this;
var _30604__$1 = this;
return self__.meta30603;
});

cljs.core.async.t30602.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30602.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30602.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30605 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30605 = (function (map_LT_,f,ch,meta30603,_,fn1,meta30606){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30603 = meta30603;
this._ = _;
this.fn1 = fn1;
this.meta30606 = meta30606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30607,meta30606__$1){
var self__ = this;
var _30607__$1 = this;
return (new cljs.core.async.t30605(self__.map_LT_,self__.f,self__.ch,self__.meta30603,self__._,self__.fn1,meta30606__$1));
});})(___$1))
;

cljs.core.async.t30605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30607){
var self__ = this;
var _30607__$1 = this;
return self__.meta30606;
});})(___$1))
;

cljs.core.async.t30605.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30595_SHARP_){
return f1.call(null,(((p1__30595_SHARP_ == null))?null:self__.f.call(null,p1__30595_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30605.cljs$lang$type = true;

cljs.core.async.t30605.cljs$lang$ctorStr = "cljs.core.async/t30605";

cljs.core.async.t30605.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18428__auto__,writer__18429__auto__,opt__18430__auto__){
return cljs.core._write.call(null,writer__18429__auto__,"cljs.core.async/t30605");
});})(___$1))
;

cljs.core.async.__GT_t30605 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30605(map_LT___$1,f__$1,ch__$1,meta30603__$1,___$2,fn1__$1,meta30606){
return (new cljs.core.async.t30605(map_LT___$1,f__$1,ch__$1,meta30603__$1,___$2,fn1__$1,meta30606));
});})(___$1))
;

}

return (new cljs.core.async.t30605(self__.map_LT_,self__.f,self__.ch,self__.meta30603,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17837__auto__ = ret;
if(cljs.core.truth_(and__17837__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17837__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30602.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30602.cljs$lang$type = true;

cljs.core.async.t30602.cljs$lang$ctorStr = "cljs.core.async/t30602";

cljs.core.async.t30602.cljs$lang$ctorPrWriter = (function (this__18428__auto__,writer__18429__auto__,opt__18430__auto__){
return cljs.core._write.call(null,writer__18429__auto__,"cljs.core.async/t30602");
});

cljs.core.async.__GT_t30602 = (function cljs$core$async$map_LT__$___GT_t30602(map_LT___$1,f__$1,ch__$1,meta30603){
return (new cljs.core.async.t30602(map_LT___$1,f__$1,ch__$1,meta30603));
});

}

return (new cljs.core.async.t30602(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30611 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30611 = (function (map_GT_,f,ch,meta30612){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30612 = meta30612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30613,meta30612__$1){
var self__ = this;
var _30613__$1 = this;
return (new cljs.core.async.t30611(self__.map_GT_,self__.f,self__.ch,meta30612__$1));
});

cljs.core.async.t30611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30613){
var self__ = this;
var _30613__$1 = this;
return self__.meta30612;
});

cljs.core.async.t30611.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30611.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30611.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30611.cljs$lang$type = true;

cljs.core.async.t30611.cljs$lang$ctorStr = "cljs.core.async/t30611";

cljs.core.async.t30611.cljs$lang$ctorPrWriter = (function (this__18428__auto__,writer__18429__auto__,opt__18430__auto__){
return cljs.core._write.call(null,writer__18429__auto__,"cljs.core.async/t30611");
});

cljs.core.async.__GT_t30611 = (function cljs$core$async$map_GT__$___GT_t30611(map_GT___$1,f__$1,ch__$1,meta30612){
return (new cljs.core.async.t30611(map_GT___$1,f__$1,ch__$1,meta30612));
});

}

return (new cljs.core.async.t30611(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30617 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30617 = (function (filter_GT_,p,ch,meta30618){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30618 = meta30618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30619,meta30618__$1){
var self__ = this;
var _30619__$1 = this;
return (new cljs.core.async.t30617(self__.filter_GT_,self__.p,self__.ch,meta30618__$1));
});

cljs.core.async.t30617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30619){
var self__ = this;
var _30619__$1 = this;
return self__.meta30618;
});

cljs.core.async.t30617.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30617.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30617.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30617.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30617.cljs$lang$type = true;

cljs.core.async.t30617.cljs$lang$ctorStr = "cljs.core.async/t30617";

cljs.core.async.t30617.cljs$lang$ctorPrWriter = (function (this__18428__auto__,writer__18429__auto__,opt__18430__auto__){
return cljs.core._write.call(null,writer__18429__auto__,"cljs.core.async/t30617");
});

cljs.core.async.__GT_t30617 = (function cljs$core$async$filter_GT__$___GT_t30617(filter_GT___$1,p__$1,ch__$1,meta30618){
return (new cljs.core.async.t30617(filter_GT___$1,p__$1,ch__$1,meta30618));
});

}

return (new cljs.core.async.t30617(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__30621 = arguments.length;
switch (G__30621) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23381__auto___30664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___30664,out){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___30664,out){
return (function (state_30642){
var state_val_30643 = (state_30642[(1)]);
if((state_val_30643 === (7))){
var inst_30638 = (state_30642[(2)]);
var state_30642__$1 = state_30642;
var statearr_30644_30665 = state_30642__$1;
(statearr_30644_30665[(2)] = inst_30638);

(statearr_30644_30665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30643 === (1))){
var state_30642__$1 = state_30642;
var statearr_30645_30666 = state_30642__$1;
(statearr_30645_30666[(2)] = null);

(statearr_30645_30666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30643 === (4))){
var inst_30624 = (state_30642[(7)]);
var inst_30624__$1 = (state_30642[(2)]);
var inst_30625 = (inst_30624__$1 == null);
var state_30642__$1 = (function (){var statearr_30646 = state_30642;
(statearr_30646[(7)] = inst_30624__$1);

return statearr_30646;
})();
if(cljs.core.truth_(inst_30625)){
var statearr_30647_30667 = state_30642__$1;
(statearr_30647_30667[(1)] = (5));

} else {
var statearr_30648_30668 = state_30642__$1;
(statearr_30648_30668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30643 === (6))){
var inst_30624 = (state_30642[(7)]);
var inst_30629 = p.call(null,inst_30624);
var state_30642__$1 = state_30642;
if(cljs.core.truth_(inst_30629)){
var statearr_30649_30669 = state_30642__$1;
(statearr_30649_30669[(1)] = (8));

} else {
var statearr_30650_30670 = state_30642__$1;
(statearr_30650_30670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30643 === (3))){
var inst_30640 = (state_30642[(2)]);
var state_30642__$1 = state_30642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30642__$1,inst_30640);
} else {
if((state_val_30643 === (2))){
var state_30642__$1 = state_30642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30642__$1,(4),ch);
} else {
if((state_val_30643 === (11))){
var inst_30632 = (state_30642[(2)]);
var state_30642__$1 = state_30642;
var statearr_30651_30671 = state_30642__$1;
(statearr_30651_30671[(2)] = inst_30632);

(statearr_30651_30671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30643 === (9))){
var state_30642__$1 = state_30642;
var statearr_30652_30672 = state_30642__$1;
(statearr_30652_30672[(2)] = null);

(statearr_30652_30672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30643 === (5))){
var inst_30627 = cljs.core.async.close_BANG_.call(null,out);
var state_30642__$1 = state_30642;
var statearr_30653_30673 = state_30642__$1;
(statearr_30653_30673[(2)] = inst_30627);

(statearr_30653_30673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30643 === (10))){
var inst_30635 = (state_30642[(2)]);
var state_30642__$1 = (function (){var statearr_30654 = state_30642;
(statearr_30654[(8)] = inst_30635);

return statearr_30654;
})();
var statearr_30655_30674 = state_30642__$1;
(statearr_30655_30674[(2)] = null);

(statearr_30655_30674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30643 === (8))){
var inst_30624 = (state_30642[(7)]);
var state_30642__$1 = state_30642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30642__$1,(11),out,inst_30624);
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
});})(c__23381__auto___30664,out))
;
return ((function (switch__23319__auto__,c__23381__auto___30664,out){
return (function() {
var cljs$core$async$state_machine__23320__auto__ = null;
var cljs$core$async$state_machine__23320__auto____0 = (function (){
var statearr_30659 = [null,null,null,null,null,null,null,null,null];
(statearr_30659[(0)] = cljs$core$async$state_machine__23320__auto__);

(statearr_30659[(1)] = (1));

return statearr_30659;
});
var cljs$core$async$state_machine__23320__auto____1 = (function (state_30642){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_30642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e30660){if((e30660 instanceof Object)){
var ex__23323__auto__ = e30660;
var statearr_30661_30675 = state_30642;
(statearr_30661_30675[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30676 = state_30642;
state_30642 = G__30676;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$state_machine__23320__auto__ = function(state_30642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23320__auto____1.call(this,state_30642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23320__auto____0;
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23320__auto____1;
return cljs$core$async$state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___30664,out))
})();
var state__23383__auto__ = (function (){var statearr_30662 = f__23382__auto__.call(null);
(statearr_30662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___30664);

return statearr_30662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___30664,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30678 = arguments.length;
switch (G__30678) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__23381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto__){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto__){
return (function (state_30845){
var state_val_30846 = (state_30845[(1)]);
if((state_val_30846 === (7))){
var inst_30841 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30847_30888 = state_30845__$1;
(statearr_30847_30888[(2)] = inst_30841);

(statearr_30847_30888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (20))){
var inst_30811 = (state_30845[(7)]);
var inst_30822 = (state_30845[(2)]);
var inst_30823 = cljs.core.next.call(null,inst_30811);
var inst_30797 = inst_30823;
var inst_30798 = null;
var inst_30799 = (0);
var inst_30800 = (0);
var state_30845__$1 = (function (){var statearr_30848 = state_30845;
(statearr_30848[(8)] = inst_30799);

(statearr_30848[(9)] = inst_30797);

(statearr_30848[(10)] = inst_30800);

(statearr_30848[(11)] = inst_30822);

(statearr_30848[(12)] = inst_30798);

return statearr_30848;
})();
var statearr_30849_30889 = state_30845__$1;
(statearr_30849_30889[(2)] = null);

(statearr_30849_30889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (1))){
var state_30845__$1 = state_30845;
var statearr_30850_30890 = state_30845__$1;
(statearr_30850_30890[(2)] = null);

(statearr_30850_30890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (4))){
var inst_30786 = (state_30845[(13)]);
var inst_30786__$1 = (state_30845[(2)]);
var inst_30787 = (inst_30786__$1 == null);
var state_30845__$1 = (function (){var statearr_30851 = state_30845;
(statearr_30851[(13)] = inst_30786__$1);

return statearr_30851;
})();
if(cljs.core.truth_(inst_30787)){
var statearr_30852_30891 = state_30845__$1;
(statearr_30852_30891[(1)] = (5));

} else {
var statearr_30853_30892 = state_30845__$1;
(statearr_30853_30892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (15))){
var state_30845__$1 = state_30845;
var statearr_30857_30893 = state_30845__$1;
(statearr_30857_30893[(2)] = null);

(statearr_30857_30893[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (21))){
var state_30845__$1 = state_30845;
var statearr_30858_30894 = state_30845__$1;
(statearr_30858_30894[(2)] = null);

(statearr_30858_30894[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (13))){
var inst_30799 = (state_30845[(8)]);
var inst_30797 = (state_30845[(9)]);
var inst_30800 = (state_30845[(10)]);
var inst_30798 = (state_30845[(12)]);
var inst_30807 = (state_30845[(2)]);
var inst_30808 = (inst_30800 + (1));
var tmp30854 = inst_30799;
var tmp30855 = inst_30797;
var tmp30856 = inst_30798;
var inst_30797__$1 = tmp30855;
var inst_30798__$1 = tmp30856;
var inst_30799__$1 = tmp30854;
var inst_30800__$1 = inst_30808;
var state_30845__$1 = (function (){var statearr_30859 = state_30845;
(statearr_30859[(8)] = inst_30799__$1);

(statearr_30859[(9)] = inst_30797__$1);

(statearr_30859[(10)] = inst_30800__$1);

(statearr_30859[(14)] = inst_30807);

(statearr_30859[(12)] = inst_30798__$1);

return statearr_30859;
})();
var statearr_30860_30895 = state_30845__$1;
(statearr_30860_30895[(2)] = null);

(statearr_30860_30895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (22))){
var state_30845__$1 = state_30845;
var statearr_30861_30896 = state_30845__$1;
(statearr_30861_30896[(2)] = null);

(statearr_30861_30896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (6))){
var inst_30786 = (state_30845[(13)]);
var inst_30795 = f.call(null,inst_30786);
var inst_30796 = cljs.core.seq.call(null,inst_30795);
var inst_30797 = inst_30796;
var inst_30798 = null;
var inst_30799 = (0);
var inst_30800 = (0);
var state_30845__$1 = (function (){var statearr_30862 = state_30845;
(statearr_30862[(8)] = inst_30799);

(statearr_30862[(9)] = inst_30797);

(statearr_30862[(10)] = inst_30800);

(statearr_30862[(12)] = inst_30798);

return statearr_30862;
})();
var statearr_30863_30897 = state_30845__$1;
(statearr_30863_30897[(2)] = null);

(statearr_30863_30897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (17))){
var inst_30811 = (state_30845[(7)]);
var inst_30815 = cljs.core.chunk_first.call(null,inst_30811);
var inst_30816 = cljs.core.chunk_rest.call(null,inst_30811);
var inst_30817 = cljs.core.count.call(null,inst_30815);
var inst_30797 = inst_30816;
var inst_30798 = inst_30815;
var inst_30799 = inst_30817;
var inst_30800 = (0);
var state_30845__$1 = (function (){var statearr_30864 = state_30845;
(statearr_30864[(8)] = inst_30799);

(statearr_30864[(9)] = inst_30797);

(statearr_30864[(10)] = inst_30800);

(statearr_30864[(12)] = inst_30798);

return statearr_30864;
})();
var statearr_30865_30898 = state_30845__$1;
(statearr_30865_30898[(2)] = null);

(statearr_30865_30898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (3))){
var inst_30843 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30845__$1,inst_30843);
} else {
if((state_val_30846 === (12))){
var inst_30831 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30866_30899 = state_30845__$1;
(statearr_30866_30899[(2)] = inst_30831);

(statearr_30866_30899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (2))){
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30845__$1,(4),in$);
} else {
if((state_val_30846 === (23))){
var inst_30839 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30867_30900 = state_30845__$1;
(statearr_30867_30900[(2)] = inst_30839);

(statearr_30867_30900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (19))){
var inst_30826 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30868_30901 = state_30845__$1;
(statearr_30868_30901[(2)] = inst_30826);

(statearr_30868_30901[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (11))){
var inst_30797 = (state_30845[(9)]);
var inst_30811 = (state_30845[(7)]);
var inst_30811__$1 = cljs.core.seq.call(null,inst_30797);
var state_30845__$1 = (function (){var statearr_30869 = state_30845;
(statearr_30869[(7)] = inst_30811__$1);

return statearr_30869;
})();
if(inst_30811__$1){
var statearr_30870_30902 = state_30845__$1;
(statearr_30870_30902[(1)] = (14));

} else {
var statearr_30871_30903 = state_30845__$1;
(statearr_30871_30903[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (9))){
var inst_30833 = (state_30845[(2)]);
var inst_30834 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30845__$1 = (function (){var statearr_30872 = state_30845;
(statearr_30872[(15)] = inst_30833);

return statearr_30872;
})();
if(cljs.core.truth_(inst_30834)){
var statearr_30873_30904 = state_30845__$1;
(statearr_30873_30904[(1)] = (21));

} else {
var statearr_30874_30905 = state_30845__$1;
(statearr_30874_30905[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (5))){
var inst_30789 = cljs.core.async.close_BANG_.call(null,out);
var state_30845__$1 = state_30845;
var statearr_30875_30906 = state_30845__$1;
(statearr_30875_30906[(2)] = inst_30789);

(statearr_30875_30906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (14))){
var inst_30811 = (state_30845[(7)]);
var inst_30813 = cljs.core.chunked_seq_QMARK_.call(null,inst_30811);
var state_30845__$1 = state_30845;
if(inst_30813){
var statearr_30876_30907 = state_30845__$1;
(statearr_30876_30907[(1)] = (17));

} else {
var statearr_30877_30908 = state_30845__$1;
(statearr_30877_30908[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (16))){
var inst_30829 = (state_30845[(2)]);
var state_30845__$1 = state_30845;
var statearr_30878_30909 = state_30845__$1;
(statearr_30878_30909[(2)] = inst_30829);

(statearr_30878_30909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30846 === (10))){
var inst_30800 = (state_30845[(10)]);
var inst_30798 = (state_30845[(12)]);
var inst_30805 = cljs.core._nth.call(null,inst_30798,inst_30800);
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30845__$1,(13),out,inst_30805);
} else {
if((state_val_30846 === (18))){
var inst_30811 = (state_30845[(7)]);
var inst_30820 = cljs.core.first.call(null,inst_30811);
var state_30845__$1 = state_30845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30845__$1,(20),out,inst_30820);
} else {
if((state_val_30846 === (8))){
var inst_30799 = (state_30845[(8)]);
var inst_30800 = (state_30845[(10)]);
var inst_30802 = (inst_30800 < inst_30799);
var inst_30803 = inst_30802;
var state_30845__$1 = state_30845;
if(cljs.core.truth_(inst_30803)){
var statearr_30879_30910 = state_30845__$1;
(statearr_30879_30910[(1)] = (10));

} else {
var statearr_30880_30911 = state_30845__$1;
(statearr_30880_30911[(1)] = (11));

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
});})(c__23381__auto__))
;
return ((function (switch__23319__auto__,c__23381__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23320__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23320__auto____0 = (function (){
var statearr_30884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30884[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23320__auto__);

(statearr_30884[(1)] = (1));

return statearr_30884;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23320__auto____1 = (function (state_30845){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_30845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e30885){if((e30885 instanceof Object)){
var ex__23323__auto__ = e30885;
var statearr_30886_30912 = state_30845;
(statearr_30886_30912[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30913 = state_30845;
state_30845 = G__30913;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23320__auto__ = function(state_30845){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23320__auto____1.call(this,state_30845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23320__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23320__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto__))
})();
var state__23383__auto__ = (function (){var statearr_30887 = f__23382__auto__.call(null);
(statearr_30887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto__);

return statearr_30887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto__))
);

return c__23381__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__30915 = arguments.length;
switch (G__30915) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__30918 = arguments.length;
switch (G__30918) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__30921 = arguments.length;
switch (G__30921) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23381__auto___30971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___30971,out){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___30971,out){
return (function (state_30945){
var state_val_30946 = (state_30945[(1)]);
if((state_val_30946 === (7))){
var inst_30940 = (state_30945[(2)]);
var state_30945__$1 = state_30945;
var statearr_30947_30972 = state_30945__$1;
(statearr_30947_30972[(2)] = inst_30940);

(statearr_30947_30972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (1))){
var inst_30922 = null;
var state_30945__$1 = (function (){var statearr_30948 = state_30945;
(statearr_30948[(7)] = inst_30922);

return statearr_30948;
})();
var statearr_30949_30973 = state_30945__$1;
(statearr_30949_30973[(2)] = null);

(statearr_30949_30973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (4))){
var inst_30925 = (state_30945[(8)]);
var inst_30925__$1 = (state_30945[(2)]);
var inst_30926 = (inst_30925__$1 == null);
var inst_30927 = cljs.core.not.call(null,inst_30926);
var state_30945__$1 = (function (){var statearr_30950 = state_30945;
(statearr_30950[(8)] = inst_30925__$1);

return statearr_30950;
})();
if(inst_30927){
var statearr_30951_30974 = state_30945__$1;
(statearr_30951_30974[(1)] = (5));

} else {
var statearr_30952_30975 = state_30945__$1;
(statearr_30952_30975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (6))){
var state_30945__$1 = state_30945;
var statearr_30953_30976 = state_30945__$1;
(statearr_30953_30976[(2)] = null);

(statearr_30953_30976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (3))){
var inst_30942 = (state_30945[(2)]);
var inst_30943 = cljs.core.async.close_BANG_.call(null,out);
var state_30945__$1 = (function (){var statearr_30954 = state_30945;
(statearr_30954[(9)] = inst_30942);

return statearr_30954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30945__$1,inst_30943);
} else {
if((state_val_30946 === (2))){
var state_30945__$1 = state_30945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30945__$1,(4),ch);
} else {
if((state_val_30946 === (11))){
var inst_30925 = (state_30945[(8)]);
var inst_30934 = (state_30945[(2)]);
var inst_30922 = inst_30925;
var state_30945__$1 = (function (){var statearr_30955 = state_30945;
(statearr_30955[(7)] = inst_30922);

(statearr_30955[(10)] = inst_30934);

return statearr_30955;
})();
var statearr_30956_30977 = state_30945__$1;
(statearr_30956_30977[(2)] = null);

(statearr_30956_30977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (9))){
var inst_30925 = (state_30945[(8)]);
var state_30945__$1 = state_30945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30945__$1,(11),out,inst_30925);
} else {
if((state_val_30946 === (5))){
var inst_30922 = (state_30945[(7)]);
var inst_30925 = (state_30945[(8)]);
var inst_30929 = cljs.core._EQ_.call(null,inst_30925,inst_30922);
var state_30945__$1 = state_30945;
if(inst_30929){
var statearr_30958_30978 = state_30945__$1;
(statearr_30958_30978[(1)] = (8));

} else {
var statearr_30959_30979 = state_30945__$1;
(statearr_30959_30979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (10))){
var inst_30937 = (state_30945[(2)]);
var state_30945__$1 = state_30945;
var statearr_30960_30980 = state_30945__$1;
(statearr_30960_30980[(2)] = inst_30937);

(statearr_30960_30980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (8))){
var inst_30922 = (state_30945[(7)]);
var tmp30957 = inst_30922;
var inst_30922__$1 = tmp30957;
var state_30945__$1 = (function (){var statearr_30961 = state_30945;
(statearr_30961[(7)] = inst_30922__$1);

return statearr_30961;
})();
var statearr_30962_30981 = state_30945__$1;
(statearr_30962_30981[(2)] = null);

(statearr_30962_30981[(1)] = (2));


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
});})(c__23381__auto___30971,out))
;
return ((function (switch__23319__auto__,c__23381__auto___30971,out){
return (function() {
var cljs$core$async$state_machine__23320__auto__ = null;
var cljs$core$async$state_machine__23320__auto____0 = (function (){
var statearr_30966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30966[(0)] = cljs$core$async$state_machine__23320__auto__);

(statearr_30966[(1)] = (1));

return statearr_30966;
});
var cljs$core$async$state_machine__23320__auto____1 = (function (state_30945){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_30945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e30967){if((e30967 instanceof Object)){
var ex__23323__auto__ = e30967;
var statearr_30968_30982 = state_30945;
(statearr_30968_30982[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30983 = state_30945;
state_30945 = G__30983;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$state_machine__23320__auto__ = function(state_30945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23320__auto____1.call(this,state_30945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23320__auto____0;
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23320__auto____1;
return cljs$core$async$state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___30971,out))
})();
var state__23383__auto__ = (function (){var statearr_30969 = f__23382__auto__.call(null);
(statearr_30969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___30971);

return statearr_30969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___30971,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__30985 = arguments.length;
switch (G__30985) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23381__auto___31054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___31054,out){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___31054,out){
return (function (state_31023){
var state_val_31024 = (state_31023[(1)]);
if((state_val_31024 === (7))){
var inst_31019 = (state_31023[(2)]);
var state_31023__$1 = state_31023;
var statearr_31025_31055 = state_31023__$1;
(statearr_31025_31055[(2)] = inst_31019);

(statearr_31025_31055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (1))){
var inst_30986 = (new Array(n));
var inst_30987 = inst_30986;
var inst_30988 = (0);
var state_31023__$1 = (function (){var statearr_31026 = state_31023;
(statearr_31026[(7)] = inst_30987);

(statearr_31026[(8)] = inst_30988);

return statearr_31026;
})();
var statearr_31027_31056 = state_31023__$1;
(statearr_31027_31056[(2)] = null);

(statearr_31027_31056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (4))){
var inst_30991 = (state_31023[(9)]);
var inst_30991__$1 = (state_31023[(2)]);
var inst_30992 = (inst_30991__$1 == null);
var inst_30993 = cljs.core.not.call(null,inst_30992);
var state_31023__$1 = (function (){var statearr_31028 = state_31023;
(statearr_31028[(9)] = inst_30991__$1);

return statearr_31028;
})();
if(inst_30993){
var statearr_31029_31057 = state_31023__$1;
(statearr_31029_31057[(1)] = (5));

} else {
var statearr_31030_31058 = state_31023__$1;
(statearr_31030_31058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (15))){
var inst_31013 = (state_31023[(2)]);
var state_31023__$1 = state_31023;
var statearr_31031_31059 = state_31023__$1;
(statearr_31031_31059[(2)] = inst_31013);

(statearr_31031_31059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (13))){
var state_31023__$1 = state_31023;
var statearr_31032_31060 = state_31023__$1;
(statearr_31032_31060[(2)] = null);

(statearr_31032_31060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (6))){
var inst_30988 = (state_31023[(8)]);
var inst_31009 = (inst_30988 > (0));
var state_31023__$1 = state_31023;
if(cljs.core.truth_(inst_31009)){
var statearr_31033_31061 = state_31023__$1;
(statearr_31033_31061[(1)] = (12));

} else {
var statearr_31034_31062 = state_31023__$1;
(statearr_31034_31062[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (3))){
var inst_31021 = (state_31023[(2)]);
var state_31023__$1 = state_31023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31023__$1,inst_31021);
} else {
if((state_val_31024 === (12))){
var inst_30987 = (state_31023[(7)]);
var inst_31011 = cljs.core.vec.call(null,inst_30987);
var state_31023__$1 = state_31023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31023__$1,(15),out,inst_31011);
} else {
if((state_val_31024 === (2))){
var state_31023__$1 = state_31023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31023__$1,(4),ch);
} else {
if((state_val_31024 === (11))){
var inst_31003 = (state_31023[(2)]);
var inst_31004 = (new Array(n));
var inst_30987 = inst_31004;
var inst_30988 = (0);
var state_31023__$1 = (function (){var statearr_31035 = state_31023;
(statearr_31035[(7)] = inst_30987);

(statearr_31035[(8)] = inst_30988);

(statearr_31035[(10)] = inst_31003);

return statearr_31035;
})();
var statearr_31036_31063 = state_31023__$1;
(statearr_31036_31063[(2)] = null);

(statearr_31036_31063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (9))){
var inst_30987 = (state_31023[(7)]);
var inst_31001 = cljs.core.vec.call(null,inst_30987);
var state_31023__$1 = state_31023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31023__$1,(11),out,inst_31001);
} else {
if((state_val_31024 === (5))){
var inst_30996 = (state_31023[(11)]);
var inst_30987 = (state_31023[(7)]);
var inst_30991 = (state_31023[(9)]);
var inst_30988 = (state_31023[(8)]);
var inst_30995 = (inst_30987[inst_30988] = inst_30991);
var inst_30996__$1 = (inst_30988 + (1));
var inst_30997 = (inst_30996__$1 < n);
var state_31023__$1 = (function (){var statearr_31037 = state_31023;
(statearr_31037[(11)] = inst_30996__$1);

(statearr_31037[(12)] = inst_30995);

return statearr_31037;
})();
if(cljs.core.truth_(inst_30997)){
var statearr_31038_31064 = state_31023__$1;
(statearr_31038_31064[(1)] = (8));

} else {
var statearr_31039_31065 = state_31023__$1;
(statearr_31039_31065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (14))){
var inst_31016 = (state_31023[(2)]);
var inst_31017 = cljs.core.async.close_BANG_.call(null,out);
var state_31023__$1 = (function (){var statearr_31041 = state_31023;
(statearr_31041[(13)] = inst_31016);

return statearr_31041;
})();
var statearr_31042_31066 = state_31023__$1;
(statearr_31042_31066[(2)] = inst_31017);

(statearr_31042_31066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (10))){
var inst_31007 = (state_31023[(2)]);
var state_31023__$1 = state_31023;
var statearr_31043_31067 = state_31023__$1;
(statearr_31043_31067[(2)] = inst_31007);

(statearr_31043_31067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31024 === (8))){
var inst_30996 = (state_31023[(11)]);
var inst_30987 = (state_31023[(7)]);
var tmp31040 = inst_30987;
var inst_30987__$1 = tmp31040;
var inst_30988 = inst_30996;
var state_31023__$1 = (function (){var statearr_31044 = state_31023;
(statearr_31044[(7)] = inst_30987__$1);

(statearr_31044[(8)] = inst_30988);

return statearr_31044;
})();
var statearr_31045_31068 = state_31023__$1;
(statearr_31045_31068[(2)] = null);

(statearr_31045_31068[(1)] = (2));


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
});})(c__23381__auto___31054,out))
;
return ((function (switch__23319__auto__,c__23381__auto___31054,out){
return (function() {
var cljs$core$async$state_machine__23320__auto__ = null;
var cljs$core$async$state_machine__23320__auto____0 = (function (){
var statearr_31049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31049[(0)] = cljs$core$async$state_machine__23320__auto__);

(statearr_31049[(1)] = (1));

return statearr_31049;
});
var cljs$core$async$state_machine__23320__auto____1 = (function (state_31023){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_31023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e31050){if((e31050 instanceof Object)){
var ex__23323__auto__ = e31050;
var statearr_31051_31069 = state_31023;
(statearr_31051_31069[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31070 = state_31023;
state_31023 = G__31070;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$state_machine__23320__auto__ = function(state_31023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23320__auto____1.call(this,state_31023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23320__auto____0;
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23320__auto____1;
return cljs$core$async$state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___31054,out))
})();
var state__23383__auto__ = (function (){var statearr_31052 = f__23382__auto__.call(null);
(statearr_31052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___31054);

return statearr_31052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___31054,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__31072 = arguments.length;
switch (G__31072) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23381__auto___31145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___31145,out){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___31145,out){
return (function (state_31114){
var state_val_31115 = (state_31114[(1)]);
if((state_val_31115 === (7))){
var inst_31110 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31116_31146 = state_31114__$1;
(statearr_31116_31146[(2)] = inst_31110);

(statearr_31116_31146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (1))){
var inst_31073 = [];
var inst_31074 = inst_31073;
var inst_31075 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31114__$1 = (function (){var statearr_31117 = state_31114;
(statearr_31117[(7)] = inst_31074);

(statearr_31117[(8)] = inst_31075);

return statearr_31117;
})();
var statearr_31118_31147 = state_31114__$1;
(statearr_31118_31147[(2)] = null);

(statearr_31118_31147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (4))){
var inst_31078 = (state_31114[(9)]);
var inst_31078__$1 = (state_31114[(2)]);
var inst_31079 = (inst_31078__$1 == null);
var inst_31080 = cljs.core.not.call(null,inst_31079);
var state_31114__$1 = (function (){var statearr_31119 = state_31114;
(statearr_31119[(9)] = inst_31078__$1);

return statearr_31119;
})();
if(inst_31080){
var statearr_31120_31148 = state_31114__$1;
(statearr_31120_31148[(1)] = (5));

} else {
var statearr_31121_31149 = state_31114__$1;
(statearr_31121_31149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (15))){
var inst_31104 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31122_31150 = state_31114__$1;
(statearr_31122_31150[(2)] = inst_31104);

(statearr_31122_31150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (13))){
var state_31114__$1 = state_31114;
var statearr_31123_31151 = state_31114__$1;
(statearr_31123_31151[(2)] = null);

(statearr_31123_31151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (6))){
var inst_31074 = (state_31114[(7)]);
var inst_31099 = inst_31074.length;
var inst_31100 = (inst_31099 > (0));
var state_31114__$1 = state_31114;
if(cljs.core.truth_(inst_31100)){
var statearr_31124_31152 = state_31114__$1;
(statearr_31124_31152[(1)] = (12));

} else {
var statearr_31125_31153 = state_31114__$1;
(statearr_31125_31153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (3))){
var inst_31112 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31114__$1,inst_31112);
} else {
if((state_val_31115 === (12))){
var inst_31074 = (state_31114[(7)]);
var inst_31102 = cljs.core.vec.call(null,inst_31074);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31114__$1,(15),out,inst_31102);
} else {
if((state_val_31115 === (2))){
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31114__$1,(4),ch);
} else {
if((state_val_31115 === (11))){
var inst_31078 = (state_31114[(9)]);
var inst_31082 = (state_31114[(10)]);
var inst_31092 = (state_31114[(2)]);
var inst_31093 = [];
var inst_31094 = inst_31093.push(inst_31078);
var inst_31074 = inst_31093;
var inst_31075 = inst_31082;
var state_31114__$1 = (function (){var statearr_31126 = state_31114;
(statearr_31126[(11)] = inst_31092);

(statearr_31126[(12)] = inst_31094);

(statearr_31126[(7)] = inst_31074);

(statearr_31126[(8)] = inst_31075);

return statearr_31126;
})();
var statearr_31127_31154 = state_31114__$1;
(statearr_31127_31154[(2)] = null);

(statearr_31127_31154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (9))){
var inst_31074 = (state_31114[(7)]);
var inst_31090 = cljs.core.vec.call(null,inst_31074);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31114__$1,(11),out,inst_31090);
} else {
if((state_val_31115 === (5))){
var inst_31078 = (state_31114[(9)]);
var inst_31075 = (state_31114[(8)]);
var inst_31082 = (state_31114[(10)]);
var inst_31082__$1 = f.call(null,inst_31078);
var inst_31083 = cljs.core._EQ_.call(null,inst_31082__$1,inst_31075);
var inst_31084 = cljs.core.keyword_identical_QMARK_.call(null,inst_31075,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31085 = (inst_31083) || (inst_31084);
var state_31114__$1 = (function (){var statearr_31128 = state_31114;
(statearr_31128[(10)] = inst_31082__$1);

return statearr_31128;
})();
if(cljs.core.truth_(inst_31085)){
var statearr_31129_31155 = state_31114__$1;
(statearr_31129_31155[(1)] = (8));

} else {
var statearr_31130_31156 = state_31114__$1;
(statearr_31130_31156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (14))){
var inst_31107 = (state_31114[(2)]);
var inst_31108 = cljs.core.async.close_BANG_.call(null,out);
var state_31114__$1 = (function (){var statearr_31132 = state_31114;
(statearr_31132[(13)] = inst_31107);

return statearr_31132;
})();
var statearr_31133_31157 = state_31114__$1;
(statearr_31133_31157[(2)] = inst_31108);

(statearr_31133_31157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (10))){
var inst_31097 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31134_31158 = state_31114__$1;
(statearr_31134_31158[(2)] = inst_31097);

(statearr_31134_31158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (8))){
var inst_31078 = (state_31114[(9)]);
var inst_31074 = (state_31114[(7)]);
var inst_31082 = (state_31114[(10)]);
var inst_31087 = inst_31074.push(inst_31078);
var tmp31131 = inst_31074;
var inst_31074__$1 = tmp31131;
var inst_31075 = inst_31082;
var state_31114__$1 = (function (){var statearr_31135 = state_31114;
(statearr_31135[(14)] = inst_31087);

(statearr_31135[(7)] = inst_31074__$1);

(statearr_31135[(8)] = inst_31075);

return statearr_31135;
})();
var statearr_31136_31159 = state_31114__$1;
(statearr_31136_31159[(2)] = null);

(statearr_31136_31159[(1)] = (2));


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
});})(c__23381__auto___31145,out))
;
return ((function (switch__23319__auto__,c__23381__auto___31145,out){
return (function() {
var cljs$core$async$state_machine__23320__auto__ = null;
var cljs$core$async$state_machine__23320__auto____0 = (function (){
var statearr_31140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31140[(0)] = cljs$core$async$state_machine__23320__auto__);

(statearr_31140[(1)] = (1));

return statearr_31140;
});
var cljs$core$async$state_machine__23320__auto____1 = (function (state_31114){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_31114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e31141){if((e31141 instanceof Object)){
var ex__23323__auto__ = e31141;
var statearr_31142_31160 = state_31114;
(statearr_31142_31160[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31161 = state_31114;
state_31114 = G__31161;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
cljs$core$async$state_machine__23320__auto__ = function(state_31114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23320__auto____1.call(this,state_31114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23320__auto____0;
cljs$core$async$state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23320__auto____1;
return cljs$core$async$state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___31145,out))
})();
var state__23383__auto__ = (function (){var statearr_31143 = f__23382__auto__.call(null);
(statearr_31143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___31145);

return statearr_31143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___31145,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1432336324253