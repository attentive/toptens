// Compiled by ClojureScript 0.0-3211 {}
goog.provide('yow_workshop.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.match');
cljs.core.enable_console_print_BANG_.call(null);
yow_workshop.core.expensive_fn = (function yow_workshop$core$expensive_fn(x){
console.log("I ran");

return (x + (1));
});
yow_workshop.core.proust = (function yow_workshop$core$proust(f){
var _BANG_remembrance = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (_BANG_remembrance){
return (function (x){
var mem = cljs.core.get.call(null,cljs.core.deref.call(null,_BANG_remembrance),x,new cljs.core.Keyword("yow-workshop.core","proust-notfound","yow-workshop.core/proust-notfound",1315929935));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword("yow-workshop.core","proust-notfound","yow-workshop.core/proust-notfound",1315929935),mem))){
var res__20717__auto___23171 = "Cached";
console.log(cljs.core.prn_str.call(null,res__20717__auto___23171));


return mem;
} else {
var res__20717__auto___23172 = "Caching \u2026";
console.log(cljs.core.prn_str.call(null,res__20717__auto___23172));


var new_mem = f.call(null,x);
cljs.core.swap_BANG_.call(null,_BANG_remembrance,cljs.core.assoc,x,new_mem);

return new_mem;
}
});
;})(_BANG_remembrance))
});
yow_workshop.core.nostalgic_fn = yow_workshop.core.proust.call(null,yow_workshop.core.expensive_fn);
if(typeof yow_workshop.core._BANG_app_state !== 'undefined'){
} else {
yow_workshop.core._BANG_app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!",new cljs.core.Keyword(null,"num-squares","num-squares",-63892768),(5)], null));
}
yow_workshop.core.app_template = (function yow_workshop$core$app_template(app){
return React.createElement("div",{"id": "container"},(function (){var attrs23174 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(app);
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs23174))?sablono.interpreter.attributes.call(null,attrs23174):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23174))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23174)], null))));
})());
});
yow_workshop.core.on_js_reload = (function yow_workshop$core$on_js_reload(x){
var res__20711__auto__ = "App reloaded.";
console.log(res__20711__auto__);

return res__20711__auto__;
});
yow_workshop.core.main = (function yow_workshop$core$main(){
var container = document.getElementById("container");
var reload_BANG_ = ((function (container){
return (function (component){
return React.render(component,container);
});})(container))
;
reload_BANG_.call(null,yow_workshop.core.app_template.call(null,cljs.core.deref.call(null,yow_workshop.core._BANG_app_state)));

cljs.core.add_watch.call(null,yow_workshop.core._BANG_app_state,new cljs.core.Keyword(null,"foo","foo",1268894036),((function (container,reload_BANG_){
return (function (_,___$1,___$2,new_state){
return reload_BANG_.call(null,yow_workshop.core.app_template.call(null,new_state));
});})(container,reload_BANG_))
);

return setTimeout(((function (container,reload_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,yow_workshop.core._BANG_app_state,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),"Hello YOW!");
});})(container,reload_BANG_))
,(2000));
});
yow_workshop.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1432353763197