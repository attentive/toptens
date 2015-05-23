// Compiled by ClojureScript 0.0-3211 {}
goog.provide('toptens.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
if(typeof toptens.core.time_updater !== 'undefined'){
} else {
toptens.core.time_updater = setInterval((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),(new Date())], null));
}),(1000));
}
toptens.core.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer","timer",-1266967739),(new Date()),new cljs.core.Keyword(null,"time-color","time-color",-1916736551),"#f34"], null);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,toptens.core.initial_state);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null)),(function (time_color,p__21220){
var vec__21221 = p__21220;
var _ = cljs.core.nth.call(null,vec__21221,(0),null);
var value = cljs.core.nth.call(null,vec__21221,(1),null);
return value;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__21222){
var vec__21223 = p__21222;
var _ = cljs.core.nth.call(null,vec__21223,(0),null);
var value = cljs.core.nth.call(null,vec__21223,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"timer","timer",-1266967739),value);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"time-color","time-color",-1916736551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
toptens.core.greeting = (function toptens$core$greeting(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),message], null);
});
toptens.core.clock = (function toptens$core$clock(){
var time_color = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null));
var timer = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739)], null));
return ((function (time_color,timer){
return (function toptens$core$clock_$_clock_render(){
var time_str = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,timer).toTimeString()," "));
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,time_color)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),style,time_str], null);
});
;})(time_color,timer))
});
toptens.core.color_input = (function toptens$core$color_input(){
var time_color = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null));
return ((function (time_color){
return (function toptens$core$color_input_$_color_input_render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,time_color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (time_color){
return (function (p1__21224_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551),p1__21224_SHARP_.target.value], null));
});})(time_color))
], null)], null)], null);
});
;})(time_color))
});
toptens.core.simple_example = (function toptens$core$simple_example(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [toptens.core.greeting,"Hello world, it is now"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [toptens.core.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [toptens.core.color_input], null)], null);
});
toptens.core.run = (function toptens$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [toptens.core.simple_example], null),document.getElementById("app"));
});
goog.exportSymbol('toptens.core.run', toptens.core.run);

//# sourceMappingURL=core.js.map?rel=1432392087237