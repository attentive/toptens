// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27944_27956 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27945_27957 = null;
var count__27946_27958 = (0);
var i__27947_27959 = (0);
while(true){
if((i__27947_27959 < count__27946_27958)){
var f_27960 = cljs.core._nth.call(null,chunk__27945_27957,i__27947_27959);
cljs.core.println.call(null,"  ",f_27960);

var G__27961 = seq__27944_27956;
var G__27962 = chunk__27945_27957;
var G__27963 = count__27946_27958;
var G__27964 = (i__27947_27959 + (1));
seq__27944_27956 = G__27961;
chunk__27945_27957 = G__27962;
count__27946_27958 = G__27963;
i__27947_27959 = G__27964;
continue;
} else {
var temp__4423__auto___27965 = cljs.core.seq.call(null,seq__27944_27956);
if(temp__4423__auto___27965){
var seq__27944_27966__$1 = temp__4423__auto___27965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27944_27966__$1)){
var c__18634__auto___27967 = cljs.core.chunk_first.call(null,seq__27944_27966__$1);
var G__27968 = cljs.core.chunk_rest.call(null,seq__27944_27966__$1);
var G__27969 = c__18634__auto___27967;
var G__27970 = cljs.core.count.call(null,c__18634__auto___27967);
var G__27971 = (0);
seq__27944_27956 = G__27968;
chunk__27945_27957 = G__27969;
count__27946_27958 = G__27970;
i__27947_27959 = G__27971;
continue;
} else {
var f_27972 = cljs.core.first.call(null,seq__27944_27966__$1);
cljs.core.println.call(null,"  ",f_27972);

var G__27973 = cljs.core.next.call(null,seq__27944_27966__$1);
var G__27974 = null;
var G__27975 = (0);
var G__27976 = (0);
seq__27944_27956 = G__27973;
chunk__27945_27957 = G__27974;
count__27946_27958 = G__27975;
i__27947_27959 = G__27976;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__17849__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17849__auto__)){
return or__17849__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__27948 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27949 = null;
var count__27950 = (0);
var i__27951 = (0);
while(true){
if((i__27951 < count__27950)){
var vec__27952 = cljs.core._nth.call(null,chunk__27949,i__27951);
var name = cljs.core.nth.call(null,vec__27952,(0),null);
var map__27953 = cljs.core.nth.call(null,vec__27952,(1),null);
var map__27953__$1 = ((cljs.core.seq_QMARK_.call(null,map__27953))?cljs.core.apply.call(null,cljs.core.hash_map,map__27953):map__27953);
var doc = cljs.core.get.call(null,map__27953__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27953__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27977 = seq__27948;
var G__27978 = chunk__27949;
var G__27979 = count__27950;
var G__27980 = (i__27951 + (1));
seq__27948 = G__27977;
chunk__27949 = G__27978;
count__27950 = G__27979;
i__27951 = G__27980;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__27948);
if(temp__4423__auto__){
var seq__27948__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27948__$1)){
var c__18634__auto__ = cljs.core.chunk_first.call(null,seq__27948__$1);
var G__27981 = cljs.core.chunk_rest.call(null,seq__27948__$1);
var G__27982 = c__18634__auto__;
var G__27983 = cljs.core.count.call(null,c__18634__auto__);
var G__27984 = (0);
seq__27948 = G__27981;
chunk__27949 = G__27982;
count__27950 = G__27983;
i__27951 = G__27984;
continue;
} else {
var vec__27954 = cljs.core.first.call(null,seq__27948__$1);
var name = cljs.core.nth.call(null,vec__27954,(0),null);
var map__27955 = cljs.core.nth.call(null,vec__27954,(1),null);
var map__27955__$1 = ((cljs.core.seq_QMARK_.call(null,map__27955))?cljs.core.apply.call(null,cljs.core.hash_map,map__27955):map__27955);
var doc = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27985 = cljs.core.next.call(null,seq__27948__$1);
var G__27986 = null;
var G__27987 = (0);
var G__27988 = (0);
seq__27948 = G__27985;
chunk__27949 = G__27986;
count__27950 = G__27987;
i__27951 = G__27988;
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
}
});

//# sourceMappingURL=repl.js.map?rel=1432336322485