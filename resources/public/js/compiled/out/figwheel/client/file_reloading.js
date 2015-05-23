// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__28005_SHARP_,p2__28006_SHARP_){
var and__17837__auto__ = p1__28005_SHARP_;
if(cljs.core.truth_(and__17837__auto__)){
return p2__28006_SHARP_;
} else {
return and__17837__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17849__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17849__auto__){
return or__17849__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__17849__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__17849__auto__){
return or__17849__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__17849__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__17849__auto__)){
return or__17849__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18744__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18748__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18748__auto__,method_table__18744__auto__,prefer_table__18745__auto__,method_cache__18746__auto__,cached_hierarchy__18747__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28007){
var map__28008 = p__28007;
var map__28008__$1 = ((cljs.core.seq_QMARK_.call(null,map__28008))?cljs.core.apply.call(null,cljs.core.hash_map,map__28008):map__28008);
var file = cljs.core.get.call(null,map__28008__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__28009){
var map__28010 = p__28009;
var map__28010__$1 = ((cljs.core.seq_QMARK_.call(null,map__28010))?cljs.core.apply.call(null,cljs.core.hash_map,map__28010):map__28010);
var namespace = cljs.core.get.call(null,map__28010__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__18744__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18748__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18748__auto__,method_table__18744__auto__,prefer_table__18745__auto__,method_cache__18746__auto__,cached_hierarchy__18747__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28011){if((e28011 instanceof Error)){
var e = e28011;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28011;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__28013 = arguments.length;
switch (G__28013) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28015,callback){
var map__28017 = p__28015;
var map__28017__$1 = ((cljs.core.seq_QMARK_.call(null,map__28017))?cljs.core.apply.call(null,cljs.core.hash_map,map__28017):map__28017);
var file_msg = map__28017__$1;
var request_url = cljs.core.get.call(null,map__28017__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28017,map__28017__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28017,map__28017__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28018){
var map__28020 = p__28018;
var map__28020__$1 = ((cljs.core.seq_QMARK_.call(null,map__28020))?cljs.core.apply.call(null,cljs.core.hash_map,map__28020):map__28020);
var file_msg = map__28020__$1;
var namespace = cljs.core.get.call(null,map__28020__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__28020__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__17849__auto__ = meta_data;
if(cljs.core.truth_(or__17849__auto__)){
return or__17849__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__17837__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__17837__auto__){
var or__17849__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17849__auto__)){
return or__17849__auto__;
} else {
var or__17849__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17849__auto____$1)){
return or__17849__auto____$1;
} else {
var and__17837__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__17837__auto____$1){
var or__17849__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__17849__auto____$2){
return or__17849__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__17837__auto____$1;
}
}
}
} else {
return and__17837__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28021,callback){
var map__28023 = p__28021;
var map__28023__$1 = ((cljs.core.seq_QMARK_.call(null,map__28023))?cljs.core.apply.call(null,cljs.core.hash_map,map__28023):map__28023);
var file_msg = map__28023__$1;
var request_url = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23381__auto___28110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___28110,out){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___28110,out){
return (function (state_28092){
var state_val_28093 = (state_28092[(1)]);
if((state_val_28093 === (1))){
var inst_28070 = cljs.core.nth.call(null,files,(0),null);
var inst_28071 = cljs.core.nthnext.call(null,files,(1));
var inst_28072 = files;
var state_28092__$1 = (function (){var statearr_28094 = state_28092;
(statearr_28094[(7)] = inst_28071);

(statearr_28094[(8)] = inst_28070);

(statearr_28094[(9)] = inst_28072);

return statearr_28094;
})();
var statearr_28095_28111 = state_28092__$1;
(statearr_28095_28111[(2)] = null);

(statearr_28095_28111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (2))){
var inst_28075 = (state_28092[(10)]);
var inst_28072 = (state_28092[(9)]);
var inst_28075__$1 = cljs.core.nth.call(null,inst_28072,(0),null);
var inst_28076 = cljs.core.nthnext.call(null,inst_28072,(1));
var inst_28077 = (inst_28075__$1 == null);
var inst_28078 = cljs.core.not.call(null,inst_28077);
var state_28092__$1 = (function (){var statearr_28096 = state_28092;
(statearr_28096[(11)] = inst_28076);

(statearr_28096[(10)] = inst_28075__$1);

return statearr_28096;
})();
if(inst_28078){
var statearr_28097_28112 = state_28092__$1;
(statearr_28097_28112[(1)] = (4));

} else {
var statearr_28098_28113 = state_28092__$1;
(statearr_28098_28113[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (3))){
var inst_28090 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28092__$1,inst_28090);
} else {
if((state_val_28093 === (4))){
var inst_28075 = (state_28092[(10)]);
var inst_28080 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28075);
var state_28092__$1 = state_28092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28092__$1,(7),inst_28080);
} else {
if((state_val_28093 === (5))){
var inst_28086 = cljs.core.async.close_BANG_.call(null,out);
var state_28092__$1 = state_28092;
var statearr_28099_28114 = state_28092__$1;
(statearr_28099_28114[(2)] = inst_28086);

(statearr_28099_28114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (6))){
var inst_28088 = (state_28092[(2)]);
var state_28092__$1 = state_28092;
var statearr_28100_28115 = state_28092__$1;
(statearr_28100_28115[(2)] = inst_28088);

(statearr_28100_28115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28093 === (7))){
var inst_28076 = (state_28092[(11)]);
var inst_28082 = (state_28092[(2)]);
var inst_28083 = cljs.core.async.put_BANG_.call(null,out,inst_28082);
var inst_28072 = inst_28076;
var state_28092__$1 = (function (){var statearr_28101 = state_28092;
(statearr_28101[(12)] = inst_28083);

(statearr_28101[(9)] = inst_28072);

return statearr_28101;
})();
var statearr_28102_28116 = state_28092__$1;
(statearr_28102_28116[(2)] = null);

(statearr_28102_28116[(1)] = (2));


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
});})(c__23381__auto___28110,out))
;
return ((function (switch__23319__auto__,c__23381__auto___28110,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto____0 = (function (){
var statearr_28106 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28106[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto__);

(statearr_28106[(1)] = (1));

return statearr_28106;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto____1 = (function (state_28092){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_28092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e28107){if((e28107 instanceof Object)){
var ex__23323__auto__ = e28107;
var statearr_28108_28117 = state_28092;
(statearr_28108_28117[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28118 = state_28092;
state_28092 = G__28118;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto__ = function(state_28092){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto____1.call(this,state_28092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___28110,out))
})();
var state__23383__auto__ = (function (){var statearr_28109 = f__23382__auto__.call(null);
(statearr_28109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___28110);

return statearr_28109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___28110,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__28119,p__28120){
var map__28123 = p__28119;
var map__28123__$1 = ((cljs.core.seq_QMARK_.call(null,map__28123))?cljs.core.apply.call(null,cljs.core.hash_map,map__28123):map__28123);
var opts = map__28123__$1;
var url_rewriter = cljs.core.get.call(null,map__28123__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__28124 = p__28120;
var map__28124__$1 = ((cljs.core.seq_QMARK_.call(null,map__28124))?cljs.core.apply.call(null,cljs.core.hash_map,map__28124):map__28124);
var file_msg = map__28124__$1;
var file = cljs.core.get.call(null,map__28124__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28125){
var map__28128 = p__28125;
var map__28128__$1 = ((cljs.core.seq_QMARK_.call(null,map__28128))?cljs.core.apply.call(null,cljs.core.hash_map,map__28128):map__28128);
var eval_body__$1 = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__17837__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17837__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17837__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e28129){var e = e28129;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28134,p__28135){
var map__28336 = p__28134;
var map__28336__$1 = ((cljs.core.seq_QMARK_.call(null,map__28336))?cljs.core.apply.call(null,cljs.core.hash_map,map__28336):map__28336);
var opts = map__28336__$1;
var before_jsload = cljs.core.get.call(null,map__28336__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28336__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__28336__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__28337 = p__28135;
var map__28337__$1 = ((cljs.core.seq_QMARK_.call(null,map__28337))?cljs.core.apply.call(null,cljs.core.hash_map,map__28337):map__28337);
var msg = map__28337__$1;
var files = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__23381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files){
return (function (state_28461){
var state_val_28462 = (state_28461[(1)]);
if((state_val_28462 === (7))){
var inst_28350 = (state_28461[(7)]);
var inst_28351 = (state_28461[(8)]);
var inst_28348 = (state_28461[(9)]);
var inst_28349 = (state_28461[(10)]);
var inst_28356 = cljs.core._nth.call(null,inst_28349,inst_28351);
var inst_28357 = figwheel.client.file_reloading.eval_body.call(null,inst_28356);
var inst_28358 = (inst_28351 + (1));
var tmp28463 = inst_28350;
var tmp28464 = inst_28348;
var tmp28465 = inst_28349;
var inst_28348__$1 = tmp28464;
var inst_28349__$1 = tmp28465;
var inst_28350__$1 = tmp28463;
var inst_28351__$1 = inst_28358;
var state_28461__$1 = (function (){var statearr_28466 = state_28461;
(statearr_28466[(7)] = inst_28350__$1);

(statearr_28466[(8)] = inst_28351__$1);

(statearr_28466[(9)] = inst_28348__$1);

(statearr_28466[(11)] = inst_28357);

(statearr_28466[(10)] = inst_28349__$1);

return statearr_28466;
})();
var statearr_28467_28536 = state_28461__$1;
(statearr_28467_28536[(2)] = null);

(statearr_28467_28536[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (20))){
var inst_28398 = (state_28461[(12)]);
var inst_28397 = (state_28461[(13)]);
var inst_28394 = (state_28461[(14)]);
var inst_28400 = (state_28461[(15)]);
var inst_28393 = (state_28461[(16)]);
var inst_28403 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28405 = (function (){var all_files = inst_28393;
var files_SINGLEQUOTE_ = inst_28394;
var res_SINGLEQUOTE_ = inst_28397;
var res = inst_28398;
var files_not_loaded = inst_28400;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28398,inst_28397,inst_28394,inst_28400,inst_28393,inst_28403,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files){
return (function (p__28404){
var map__28468 = p__28404;
var map__28468__$1 = ((cljs.core.seq_QMARK_.call(null,map__28468))?cljs.core.apply.call(null,cljs.core.hash_map,map__28468):map__28468);
var namespace = cljs.core.get.call(null,map__28468__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28398,inst_28397,inst_28394,inst_28400,inst_28393,inst_28403,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files))
})();
var inst_28406 = cljs.core.map.call(null,inst_28405,inst_28398);
var inst_28407 = cljs.core.pr_str.call(null,inst_28406);
var inst_28408 = figwheel.client.utils.log.call(null,inst_28407);
var inst_28409 = (function (){var all_files = inst_28393;
var files_SINGLEQUOTE_ = inst_28394;
var res_SINGLEQUOTE_ = inst_28397;
var res = inst_28398;
var files_not_loaded = inst_28400;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28398,inst_28397,inst_28394,inst_28400,inst_28393,inst_28403,inst_28405,inst_28406,inst_28407,inst_28408,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28398,inst_28397,inst_28394,inst_28400,inst_28393,inst_28403,inst_28405,inst_28406,inst_28407,inst_28408,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files))
})();
var inst_28410 = setTimeout(inst_28409,(10));
var state_28461__$1 = (function (){var statearr_28469 = state_28461;
(statearr_28469[(17)] = inst_28403);

(statearr_28469[(18)] = inst_28408);

return statearr_28469;
})();
var statearr_28470_28537 = state_28461__$1;
(statearr_28470_28537[(2)] = inst_28410);

(statearr_28470_28537[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (27))){
var inst_28420 = (state_28461[(19)]);
var state_28461__$1 = state_28461;
var statearr_28471_28538 = state_28461__$1;
(statearr_28471_28538[(2)] = inst_28420);

(statearr_28471_28538[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (1))){
var inst_28340 = (state_28461[(20)]);
var inst_28338 = before_jsload.call(null,files);
var inst_28339 = (function (){return ((function (inst_28340,inst_28338,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files){
return (function (p1__28130_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28130_SHARP_);
});
;})(inst_28340,inst_28338,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files))
})();
var inst_28340__$1 = cljs.core.filter.call(null,inst_28339,files);
var inst_28341 = cljs.core.not_empty.call(null,inst_28340__$1);
var state_28461__$1 = (function (){var statearr_28472 = state_28461;
(statearr_28472[(21)] = inst_28338);

(statearr_28472[(20)] = inst_28340__$1);

return statearr_28472;
})();
if(cljs.core.truth_(inst_28341)){
var statearr_28473_28539 = state_28461__$1;
(statearr_28473_28539[(1)] = (2));

} else {
var statearr_28474_28540 = state_28461__$1;
(statearr_28474_28540[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (24))){
var state_28461__$1 = state_28461;
var statearr_28475_28541 = state_28461__$1;
(statearr_28475_28541[(2)] = null);

(statearr_28475_28541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (4))){
var inst_28385 = (state_28461[(2)]);
var inst_28386 = (function (){return ((function (inst_28385,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files){
return (function (p1__28131_SHARP_){
var and__17837__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28131_SHARP_);
if(cljs.core.truth_(and__17837__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28131_SHARP_));
} else {
return and__17837__auto__;
}
});
;})(inst_28385,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files))
})();
var inst_28387 = cljs.core.filter.call(null,inst_28386,files);
var state_28461__$1 = (function (){var statearr_28476 = state_28461;
(statearr_28476[(22)] = inst_28385);

(statearr_28476[(23)] = inst_28387);

return statearr_28476;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_28477_28542 = state_28461__$1;
(statearr_28477_28542[(1)] = (16));

} else {
var statearr_28478_28543 = state_28461__$1;
(statearr_28478_28543[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (15))){
var inst_28375 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28479_28544 = state_28461__$1;
(statearr_28479_28544[(2)] = inst_28375);

(statearr_28479_28544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (21))){
var state_28461__$1 = state_28461;
var statearr_28480_28545 = state_28461__$1;
(statearr_28480_28545[(2)] = null);

(statearr_28480_28545[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (31))){
var inst_28428 = (state_28461[(24)]);
var inst_28438 = (state_28461[(2)]);
var inst_28439 = cljs.core.not_empty.call(null,inst_28428);
var state_28461__$1 = (function (){var statearr_28481 = state_28461;
(statearr_28481[(25)] = inst_28438);

return statearr_28481;
})();
if(cljs.core.truth_(inst_28439)){
var statearr_28482_28546 = state_28461__$1;
(statearr_28482_28546[(1)] = (32));

} else {
var statearr_28483_28547 = state_28461__$1;
(statearr_28483_28547[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (32))){
var inst_28428 = (state_28461[(24)]);
var inst_28441 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28428);
var inst_28442 = cljs.core.pr_str.call(null,inst_28441);
var inst_28443 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_28442)].join('');
var inst_28444 = figwheel.client.utils.log.call(null,inst_28443);
var state_28461__$1 = state_28461;
var statearr_28484_28548 = state_28461__$1;
(statearr_28484_28548[(2)] = inst_28444);

(statearr_28484_28548[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (33))){
var state_28461__$1 = state_28461;
var statearr_28485_28549 = state_28461__$1;
(statearr_28485_28549[(2)] = null);

(statearr_28485_28549[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (13))){
var inst_28361 = (state_28461[(26)]);
var inst_28365 = cljs.core.chunk_first.call(null,inst_28361);
var inst_28366 = cljs.core.chunk_rest.call(null,inst_28361);
var inst_28367 = cljs.core.count.call(null,inst_28365);
var inst_28348 = inst_28366;
var inst_28349 = inst_28365;
var inst_28350 = inst_28367;
var inst_28351 = (0);
var state_28461__$1 = (function (){var statearr_28486 = state_28461;
(statearr_28486[(7)] = inst_28350);

(statearr_28486[(8)] = inst_28351);

(statearr_28486[(9)] = inst_28348);

(statearr_28486[(10)] = inst_28349);

return statearr_28486;
})();
var statearr_28487_28550 = state_28461__$1;
(statearr_28487_28550[(2)] = null);

(statearr_28487_28550[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (22))){
var inst_28400 = (state_28461[(15)]);
var inst_28413 = (state_28461[(2)]);
var inst_28414 = cljs.core.not_empty.call(null,inst_28400);
var state_28461__$1 = (function (){var statearr_28488 = state_28461;
(statearr_28488[(27)] = inst_28413);

return statearr_28488;
})();
if(cljs.core.truth_(inst_28414)){
var statearr_28489_28551 = state_28461__$1;
(statearr_28489_28551[(1)] = (23));

} else {
var statearr_28490_28552 = state_28461__$1;
(statearr_28490_28552[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (36))){
var state_28461__$1 = state_28461;
var statearr_28491_28553 = state_28461__$1;
(statearr_28491_28553[(2)] = null);

(statearr_28491_28553[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (29))){
var inst_28427 = (state_28461[(28)]);
var inst_28432 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28427);
var inst_28433 = cljs.core.pr_str.call(null,inst_28432);
var inst_28434 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28433)].join('');
var inst_28435 = figwheel.client.utils.log.call(null,inst_28434);
var state_28461__$1 = state_28461;
var statearr_28492_28554 = state_28461__$1;
(statearr_28492_28554[(2)] = inst_28435);

(statearr_28492_28554[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (6))){
var inst_28382 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28493_28555 = state_28461__$1;
(statearr_28493_28555[(2)] = inst_28382);

(statearr_28493_28555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (28))){
var inst_28427 = (state_28461[(28)]);
var inst_28426 = (state_28461[(2)]);
var inst_28427__$1 = cljs.core.get.call(null,inst_28426,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28428 = cljs.core.get.call(null,inst_28426,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_28429 = cljs.core.get.call(null,inst_28426,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28430 = cljs.core.not_empty.call(null,inst_28427__$1);
var state_28461__$1 = (function (){var statearr_28494 = state_28461;
(statearr_28494[(24)] = inst_28428);

(statearr_28494[(29)] = inst_28429);

(statearr_28494[(28)] = inst_28427__$1);

return statearr_28494;
})();
if(cljs.core.truth_(inst_28430)){
var statearr_28495_28556 = state_28461__$1;
(statearr_28495_28556[(1)] = (29));

} else {
var statearr_28496_28557 = state_28461__$1;
(statearr_28496_28557[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (25))){
var inst_28459 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28461__$1,inst_28459);
} else {
if((state_val_28462 === (34))){
var inst_28429 = (state_28461[(29)]);
var inst_28447 = (state_28461[(2)]);
var inst_28448 = cljs.core.not_empty.call(null,inst_28429);
var state_28461__$1 = (function (){var statearr_28497 = state_28461;
(statearr_28497[(30)] = inst_28447);

return statearr_28497;
})();
if(cljs.core.truth_(inst_28448)){
var statearr_28498_28558 = state_28461__$1;
(statearr_28498_28558[(1)] = (35));

} else {
var statearr_28499_28559 = state_28461__$1;
(statearr_28499_28559[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (17))){
var inst_28387 = (state_28461[(23)]);
var state_28461__$1 = state_28461;
var statearr_28500_28560 = state_28461__$1;
(statearr_28500_28560[(2)] = inst_28387);

(statearr_28500_28560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (3))){
var state_28461__$1 = state_28461;
var statearr_28501_28561 = state_28461__$1;
(statearr_28501_28561[(2)] = null);

(statearr_28501_28561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (12))){
var inst_28378 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28502_28562 = state_28461__$1;
(statearr_28502_28562[(2)] = inst_28378);

(statearr_28502_28562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (2))){
var inst_28340 = (state_28461[(20)]);
var inst_28347 = cljs.core.seq.call(null,inst_28340);
var inst_28348 = inst_28347;
var inst_28349 = null;
var inst_28350 = (0);
var inst_28351 = (0);
var state_28461__$1 = (function (){var statearr_28503 = state_28461;
(statearr_28503[(7)] = inst_28350);

(statearr_28503[(8)] = inst_28351);

(statearr_28503[(9)] = inst_28348);

(statearr_28503[(10)] = inst_28349);

return statearr_28503;
})();
var statearr_28504_28563 = state_28461__$1;
(statearr_28504_28563[(2)] = null);

(statearr_28504_28563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (23))){
var inst_28420 = (state_28461[(19)]);
var inst_28398 = (state_28461[(12)]);
var inst_28397 = (state_28461[(13)]);
var inst_28394 = (state_28461[(14)]);
var inst_28400 = (state_28461[(15)]);
var inst_28393 = (state_28461[(16)]);
var inst_28416 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28419 = (function (){var all_files = inst_28393;
var files_SINGLEQUOTE_ = inst_28394;
var res_SINGLEQUOTE_ = inst_28397;
var res = inst_28398;
var files_not_loaded = inst_28400;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28420,inst_28398,inst_28397,inst_28394,inst_28400,inst_28393,inst_28416,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files){
return (function (p__28418){
var map__28505 = p__28418;
var map__28505__$1 = ((cljs.core.seq_QMARK_.call(null,map__28505))?cljs.core.apply.call(null,cljs.core.hash_map,map__28505):map__28505);
var meta_data = cljs.core.get.call(null,map__28505__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_28420,inst_28398,inst_28397,inst_28394,inst_28400,inst_28393,inst_28416,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files))
})();
var inst_28420__$1 = cljs.core.group_by.call(null,inst_28419,inst_28400);
var inst_28421 = cljs.core.seq_QMARK_.call(null,inst_28420__$1);
var state_28461__$1 = (function (){var statearr_28506 = state_28461;
(statearr_28506[(19)] = inst_28420__$1);

(statearr_28506[(31)] = inst_28416);

return statearr_28506;
})();
if(inst_28421){
var statearr_28507_28564 = state_28461__$1;
(statearr_28507_28564[(1)] = (26));

} else {
var statearr_28508_28565 = state_28461__$1;
(statearr_28508_28565[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (35))){
var inst_28429 = (state_28461[(29)]);
var inst_28450 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28429);
var inst_28451 = cljs.core.pr_str.call(null,inst_28450);
var inst_28452 = [cljs.core.str("not required: "),cljs.core.str(inst_28451)].join('');
var inst_28453 = figwheel.client.utils.log.call(null,inst_28452);
var state_28461__$1 = state_28461;
var statearr_28509_28566 = state_28461__$1;
(statearr_28509_28566[(2)] = inst_28453);

(statearr_28509_28566[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (19))){
var inst_28398 = (state_28461[(12)]);
var inst_28397 = (state_28461[(13)]);
var inst_28394 = (state_28461[(14)]);
var inst_28393 = (state_28461[(16)]);
var inst_28397__$1 = (state_28461[(2)]);
var inst_28398__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28397__$1);
var inst_28399 = (function (){var all_files = inst_28393;
var files_SINGLEQUOTE_ = inst_28394;
var res_SINGLEQUOTE_ = inst_28397__$1;
var res = inst_28398__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_28398,inst_28397,inst_28394,inst_28393,inst_28397__$1,inst_28398__$1,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files){
return (function (p1__28133_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28133_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_28398,inst_28397,inst_28394,inst_28393,inst_28397__$1,inst_28398__$1,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files))
})();
var inst_28400 = cljs.core.filter.call(null,inst_28399,inst_28397__$1);
var inst_28401 = cljs.core.not_empty.call(null,inst_28398__$1);
var state_28461__$1 = (function (){var statearr_28510 = state_28461;
(statearr_28510[(12)] = inst_28398__$1);

(statearr_28510[(13)] = inst_28397__$1);

(statearr_28510[(15)] = inst_28400);

return statearr_28510;
})();
if(cljs.core.truth_(inst_28401)){
var statearr_28511_28567 = state_28461__$1;
(statearr_28511_28567[(1)] = (20));

} else {
var statearr_28512_28568 = state_28461__$1;
(statearr_28512_28568[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (11))){
var state_28461__$1 = state_28461;
var statearr_28513_28569 = state_28461__$1;
(statearr_28513_28569[(2)] = null);

(statearr_28513_28569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (9))){
var inst_28380 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28514_28570 = state_28461__$1;
(statearr_28514_28570[(2)] = inst_28380);

(statearr_28514_28570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (5))){
var inst_28350 = (state_28461[(7)]);
var inst_28351 = (state_28461[(8)]);
var inst_28353 = (inst_28351 < inst_28350);
var inst_28354 = inst_28353;
var state_28461__$1 = state_28461;
if(cljs.core.truth_(inst_28354)){
var statearr_28515_28571 = state_28461__$1;
(statearr_28515_28571[(1)] = (7));

} else {
var statearr_28516_28572 = state_28461__$1;
(statearr_28516_28572[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (14))){
var inst_28361 = (state_28461[(26)]);
var inst_28370 = cljs.core.first.call(null,inst_28361);
var inst_28371 = figwheel.client.file_reloading.eval_body.call(null,inst_28370);
var inst_28372 = cljs.core.next.call(null,inst_28361);
var inst_28348 = inst_28372;
var inst_28349 = null;
var inst_28350 = (0);
var inst_28351 = (0);
var state_28461__$1 = (function (){var statearr_28517 = state_28461;
(statearr_28517[(7)] = inst_28350);

(statearr_28517[(8)] = inst_28351);

(statearr_28517[(32)] = inst_28371);

(statearr_28517[(9)] = inst_28348);

(statearr_28517[(10)] = inst_28349);

return statearr_28517;
})();
var statearr_28518_28573 = state_28461__$1;
(statearr_28518_28573[(2)] = null);

(statearr_28518_28573[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (26))){
var inst_28420 = (state_28461[(19)]);
var inst_28423 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28420);
var state_28461__$1 = state_28461;
var statearr_28519_28574 = state_28461__$1;
(statearr_28519_28574[(2)] = inst_28423);

(statearr_28519_28574[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (16))){
var inst_28387 = (state_28461[(23)]);
var inst_28389 = (function (){var all_files = inst_28387;
return ((function (all_files,inst_28387,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files){
return (function (p1__28132_SHARP_){
return cljs.core.update_in.call(null,p1__28132_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_28387,state_val_28462,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files))
})();
var inst_28390 = cljs.core.map.call(null,inst_28389,inst_28387);
var state_28461__$1 = state_28461;
var statearr_28520_28575 = state_28461__$1;
(statearr_28520_28575[(2)] = inst_28390);

(statearr_28520_28575[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (30))){
var state_28461__$1 = state_28461;
var statearr_28521_28576 = state_28461__$1;
(statearr_28521_28576[(2)] = null);

(statearr_28521_28576[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (10))){
var inst_28361 = (state_28461[(26)]);
var inst_28363 = cljs.core.chunked_seq_QMARK_.call(null,inst_28361);
var state_28461__$1 = state_28461;
if(inst_28363){
var statearr_28522_28577 = state_28461__$1;
(statearr_28522_28577[(1)] = (13));

} else {
var statearr_28523_28578 = state_28461__$1;
(statearr_28523_28578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (18))){
var inst_28394 = (state_28461[(14)]);
var inst_28393 = (state_28461[(16)]);
var inst_28393__$1 = (state_28461[(2)]);
var inst_28394__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_28393__$1);
var inst_28395 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28394__$1);
var state_28461__$1 = (function (){var statearr_28524 = state_28461;
(statearr_28524[(14)] = inst_28394__$1);

(statearr_28524[(16)] = inst_28393__$1);

return statearr_28524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28461__$1,(19),inst_28395);
} else {
if((state_val_28462 === (37))){
var inst_28456 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28525_28579 = state_28461__$1;
(statearr_28525_28579[(2)] = inst_28456);

(statearr_28525_28579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (8))){
var inst_28361 = (state_28461[(26)]);
var inst_28348 = (state_28461[(9)]);
var inst_28361__$1 = cljs.core.seq.call(null,inst_28348);
var state_28461__$1 = (function (){var statearr_28526 = state_28461;
(statearr_28526[(26)] = inst_28361__$1);

return statearr_28526;
})();
if(inst_28361__$1){
var statearr_28527_28580 = state_28461__$1;
(statearr_28527_28580[(1)] = (10));

} else {
var statearr_28528_28581 = state_28461__$1;
(statearr_28528_28581[(1)] = (11));

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
});})(c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files))
;
return ((function (switch__23319__auto__,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto____0 = (function (){
var statearr_28532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28532[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto__);

(statearr_28532[(1)] = (1));

return statearr_28532;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto____1 = (function (state_28461){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_28461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e28533){if((e28533 instanceof Object)){
var ex__23323__auto__ = e28533;
var statearr_28534_28582 = state_28461;
(statearr_28534_28582[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28583 = state_28461;
state_28461 = G__28583;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto__ = function(state_28461){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto____1.call(this,state_28461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files))
})();
var state__23383__auto__ = (function (){var statearr_28535 = f__23382__auto__.call(null);
(statearr_28535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto__);

return statearr_28535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto__,map__28336,map__28336__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__28337,map__28337__$1,msg,files))
);

return c__23381__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28586,link){
var map__28588 = p__28586;
var map__28588__$1 = ((cljs.core.seq_QMARK_.call(null,map__28588))?cljs.core.apply.call(null,cljs.core.hash_map,map__28588):map__28588);
var file = cljs.core.get.call(null,map__28588__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__28588,map__28588__$1,file){
return (function (p1__28584_SHARP_,p2__28585_SHARP_){
if(cljs.core._EQ_.call(null,p1__28584_SHARP_,p2__28585_SHARP_)){
return p1__28584_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__28588,map__28588__$1,file))
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28592){
var map__28593 = p__28592;
var map__28593__$1 = ((cljs.core.seq_QMARK_.call(null,map__28593))?cljs.core.apply.call(null,cljs.core.hash_map,map__28593):map__28593);
var match_length = cljs.core.get.call(null,map__28593__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28593__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28589_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28589_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__28595 = arguments.length;
switch (G__28595) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28597){
var map__28599 = p__28597;
var map__28599__$1 = ((cljs.core.seq_QMARK_.call(null,map__28599))?cljs.core.apply.call(null,cljs.core.hash_map,map__28599):map__28599);
var f_data = map__28599__$1;
var file = cljs.core.get.call(null,map__28599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__28599__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__17849__auto__ = request_url;
if(cljs.core.truth_(or__17849__auto__)){
return or__17849__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28600,files_msg){
var map__28622 = p__28600;
var map__28622__$1 = ((cljs.core.seq_QMARK_.call(null,map__28622))?cljs.core.apply.call(null,cljs.core.hash_map,map__28622):map__28622);
var opts = map__28622__$1;
var on_cssload = cljs.core.get.call(null,map__28622__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28623_28643 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28624_28644 = null;
var count__28625_28645 = (0);
var i__28626_28646 = (0);
while(true){
if((i__28626_28646 < count__28625_28645)){
var f_28647 = cljs.core._nth.call(null,chunk__28624_28644,i__28626_28646);
figwheel.client.file_reloading.reload_css_file.call(null,f_28647);

var G__28648 = seq__28623_28643;
var G__28649 = chunk__28624_28644;
var G__28650 = count__28625_28645;
var G__28651 = (i__28626_28646 + (1));
seq__28623_28643 = G__28648;
chunk__28624_28644 = G__28649;
count__28625_28645 = G__28650;
i__28626_28646 = G__28651;
continue;
} else {
var temp__4423__auto___28652 = cljs.core.seq.call(null,seq__28623_28643);
if(temp__4423__auto___28652){
var seq__28623_28653__$1 = temp__4423__auto___28652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28623_28653__$1)){
var c__18634__auto___28654 = cljs.core.chunk_first.call(null,seq__28623_28653__$1);
var G__28655 = cljs.core.chunk_rest.call(null,seq__28623_28653__$1);
var G__28656 = c__18634__auto___28654;
var G__28657 = cljs.core.count.call(null,c__18634__auto___28654);
var G__28658 = (0);
seq__28623_28643 = G__28655;
chunk__28624_28644 = G__28656;
count__28625_28645 = G__28657;
i__28626_28646 = G__28658;
continue;
} else {
var f_28659 = cljs.core.first.call(null,seq__28623_28653__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28659);

var G__28660 = cljs.core.next.call(null,seq__28623_28653__$1);
var G__28661 = null;
var G__28662 = (0);
var G__28663 = (0);
seq__28623_28643 = G__28660;
chunk__28624_28644 = G__28661;
count__28625_28645 = G__28662;
i__28626_28646 = G__28663;
continue;
}
} else {
}
}
break;
}

var c__23381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto__,map__28622,map__28622__$1,opts,on_cssload){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto__,map__28622,map__28622__$1,opts,on_cssload){
return (function (state_28633){
var state_val_28634 = (state_28633[(1)]);
if((state_val_28634 === (1))){
var inst_28627 = cljs.core.async.timeout.call(null,(100));
var state_28633__$1 = state_28633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28633__$1,(2),inst_28627);
} else {
if((state_val_28634 === (2))){
var inst_28629 = (state_28633[(2)]);
var inst_28630 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_28631 = on_cssload.call(null,inst_28630);
var state_28633__$1 = (function (){var statearr_28635 = state_28633;
(statearr_28635[(7)] = inst_28629);

return statearr_28635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28633__$1,inst_28631);
} else {
return null;
}
}
});})(c__23381__auto__,map__28622,map__28622__$1,opts,on_cssload))
;
return ((function (switch__23319__auto__,c__23381__auto__,map__28622,map__28622__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto____0 = (function (){
var statearr_28639 = [null,null,null,null,null,null,null,null];
(statearr_28639[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto__);

(statearr_28639[(1)] = (1));

return statearr_28639;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto____1 = (function (state_28633){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_28633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e28640){if((e28640 instanceof Object)){
var ex__23323__auto__ = e28640;
var statearr_28641_28664 = state_28633;
(statearr_28641_28664[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28665 = state_28633;
state_28633 = G__28665;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto__ = function(state_28633){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto____1.call(this,state_28633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto__,map__28622,map__28622__$1,opts,on_cssload))
})();
var state__23383__auto__ = (function (){var statearr_28642 = f__23382__auto__.call(null);
(statearr_28642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto__);

return statearr_28642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto__,map__28622,map__28622__$1,opts,on_cssload))
);

return c__23381__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1432336322863