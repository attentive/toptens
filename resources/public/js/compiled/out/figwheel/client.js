// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26933__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26934__i = 0, G__26934__a = new Array(arguments.length -  0);
while (G__26934__i < G__26934__a.length) {G__26934__a[G__26934__i] = arguments[G__26934__i + 0]; ++G__26934__i;}
  args = new cljs.core.IndexedSeq(G__26934__a,0);
} 
return G__26933__delegate.call(this,args);};
G__26933.cljs$lang$maxFixedArity = 0;
G__26933.cljs$lang$applyTo = (function (arglist__26935){
var args = cljs.core.seq(arglist__26935);
return G__26933__delegate(args);
});
G__26933.cljs$core$IFn$_invoke$arity$variadic = G__26933__delegate;
return G__26933;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26936){
var map__26938 = p__26936;
var map__26938__$1 = ((cljs.core.seq_QMARK_.call(null,map__26938))?cljs.core.apply.call(null,cljs.core.hash_map,map__26938):map__26938);
var message = cljs.core.get.call(null,map__26938__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26938__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17849__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17849__auto__)){
return or__17849__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17837__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17837__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17837__auto__;
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
var c__23381__auto___27067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___27067,ch){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___27067,ch){
return (function (state_27041){
var state_val_27042 = (state_27041[(1)]);
if((state_val_27042 === (7))){
var inst_27037 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
var statearr_27043_27068 = state_27041__$1;
(statearr_27043_27068[(2)] = inst_27037);

(statearr_27043_27068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (1))){
var state_27041__$1 = state_27041;
var statearr_27044_27069 = state_27041__$1;
(statearr_27044_27069[(2)] = null);

(statearr_27044_27069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (4))){
var inst_27005 = (state_27041[(7)]);
var inst_27005__$1 = (state_27041[(2)]);
var state_27041__$1 = (function (){var statearr_27045 = state_27041;
(statearr_27045[(7)] = inst_27005__$1);

return statearr_27045;
})();
if(cljs.core.truth_(inst_27005__$1)){
var statearr_27046_27070 = state_27041__$1;
(statearr_27046_27070[(1)] = (5));

} else {
var statearr_27047_27071 = state_27041__$1;
(statearr_27047_27071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (13))){
var state_27041__$1 = state_27041;
var statearr_27048_27072 = state_27041__$1;
(statearr_27048_27072[(2)] = null);

(statearr_27048_27072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (6))){
var state_27041__$1 = state_27041;
var statearr_27049_27073 = state_27041__$1;
(statearr_27049_27073[(2)] = null);

(statearr_27049_27073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (3))){
var inst_27039 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27041__$1,inst_27039);
} else {
if((state_val_27042 === (12))){
var inst_27012 = (state_27041[(8)]);
var inst_27025 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27012);
var inst_27026 = cljs.core.first.call(null,inst_27025);
var inst_27027 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27026);
var inst_27028 = console.warn("Figwheel: Not loading code with warnings - ",inst_27027);
var state_27041__$1 = state_27041;
var statearr_27050_27074 = state_27041__$1;
(statearr_27050_27074[(2)] = inst_27028);

(statearr_27050_27074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (2))){
var state_27041__$1 = state_27041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27041__$1,(4),ch);
} else {
if((state_val_27042 === (11))){
var inst_27021 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
var statearr_27051_27075 = state_27041__$1;
(statearr_27051_27075[(2)] = inst_27021);

(statearr_27051_27075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (9))){
var inst_27011 = (state_27041[(9)]);
var inst_27023 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27011,opts);
var state_27041__$1 = state_27041;
if(cljs.core.truth_(inst_27023)){
var statearr_27052_27076 = state_27041__$1;
(statearr_27052_27076[(1)] = (12));

} else {
var statearr_27053_27077 = state_27041__$1;
(statearr_27053_27077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (5))){
var inst_27011 = (state_27041[(9)]);
var inst_27005 = (state_27041[(7)]);
var inst_27007 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27008 = (new cljs.core.PersistentArrayMap(null,2,inst_27007,null));
var inst_27009 = (new cljs.core.PersistentHashSet(null,inst_27008,null));
var inst_27010 = figwheel.client.focus_msgs.call(null,inst_27009,inst_27005);
var inst_27011__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27010);
var inst_27012 = cljs.core.first.call(null,inst_27010);
var inst_27013 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27011__$1,opts);
var state_27041__$1 = (function (){var statearr_27054 = state_27041;
(statearr_27054[(8)] = inst_27012);

(statearr_27054[(9)] = inst_27011__$1);

return statearr_27054;
})();
if(cljs.core.truth_(inst_27013)){
var statearr_27055_27078 = state_27041__$1;
(statearr_27055_27078[(1)] = (8));

} else {
var statearr_27056_27079 = state_27041__$1;
(statearr_27056_27079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (14))){
var inst_27031 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
var statearr_27057_27080 = state_27041__$1;
(statearr_27057_27080[(2)] = inst_27031);

(statearr_27057_27080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (10))){
var inst_27033 = (state_27041[(2)]);
var state_27041__$1 = (function (){var statearr_27058 = state_27041;
(statearr_27058[(10)] = inst_27033);

return statearr_27058;
})();
var statearr_27059_27081 = state_27041__$1;
(statearr_27059_27081[(2)] = null);

(statearr_27059_27081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (8))){
var inst_27012 = (state_27041[(8)]);
var inst_27015 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27016 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27012);
var inst_27017 = cljs.core.async.timeout.call(null,(1000));
var inst_27018 = [inst_27016,inst_27017];
var inst_27019 = (new cljs.core.PersistentVector(null,2,(5),inst_27015,inst_27018,null));
var state_27041__$1 = state_27041;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27041__$1,(11),inst_27019);
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
});})(c__23381__auto___27067,ch))
;
return ((function (switch__23319__auto__,c__23381__auto___27067,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23320__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23320__auto____0 = (function (){
var statearr_27063 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27063[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23320__auto__);

(statearr_27063[(1)] = (1));

return statearr_27063;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23320__auto____1 = (function (state_27041){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_27041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e27064){if((e27064 instanceof Object)){
var ex__23323__auto__ = e27064;
var statearr_27065_27082 = state_27041;
(statearr_27065_27082[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27083 = state_27041;
state_27041 = G__27083;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23320__auto__ = function(state_27041){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23320__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23320__auto____1.call(this,state_27041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23320__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23320__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___27067,ch))
})();
var state__23383__auto__ = (function (){var statearr_27066 = f__23382__auto__.call(null);
(statearr_27066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___27067);

return statearr_27066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___27067,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27084_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27084_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_27091 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27091){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_27089 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27090 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27089,_STAR_print_newline_STAR_27090,base_path_27091){
return (function() { 
var G__27092__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27093__i = 0, G__27093__a = new Array(arguments.length -  0);
while (G__27093__i < G__27093__a.length) {G__27093__a[G__27093__i] = arguments[G__27093__i + 0]; ++G__27093__i;}
  args = new cljs.core.IndexedSeq(G__27093__a,0);
} 
return G__27092__delegate.call(this,args);};
G__27092.cljs$lang$maxFixedArity = 0;
G__27092.cljs$lang$applyTo = (function (arglist__27094){
var args = cljs.core.seq(arglist__27094);
return G__27092__delegate(args);
});
G__27092.cljs$core$IFn$_invoke$arity$variadic = G__27092__delegate;
return G__27092;
})()
;})(_STAR_print_fn_STAR_27089,_STAR_print_newline_STAR_27090,base_path_27091))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27090;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27089;
}}catch (e27088){if((e27088 instanceof Error)){
var e = e27088;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27091], null));
} else {
var e = e27088;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27091))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27095){
var map__27100 = p__27095;
var map__27100__$1 = ((cljs.core.seq_QMARK_.call(null,map__27100))?cljs.core.apply.call(null,cljs.core.hash_map,map__27100):map__27100);
var opts = map__27100__$1;
var build_id = cljs.core.get.call(null,map__27100__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27100,map__27100__$1,opts,build_id){
return (function (p__27101){
var vec__27102 = p__27101;
var map__27103 = cljs.core.nth.call(null,vec__27102,(0),null);
var map__27103__$1 = ((cljs.core.seq_QMARK_.call(null,map__27103))?cljs.core.apply.call(null,cljs.core.hash_map,map__27103):map__27103);
var msg = map__27103__$1;
var msg_name = cljs.core.get.call(null,map__27103__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27102,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__27102,map__27103,map__27103__$1,msg,msg_name,_,map__27100,map__27100__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27102,map__27103,map__27103__$1,msg,msg_name,_,map__27100,map__27100__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27100,map__27100__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27107){
var vec__27108 = p__27107;
var map__27109 = cljs.core.nth.call(null,vec__27108,(0),null);
var map__27109__$1 = ((cljs.core.seq_QMARK_.call(null,map__27109))?cljs.core.apply.call(null,cljs.core.hash_map,map__27109):map__27109);
var msg = map__27109__$1;
var msg_name = cljs.core.get.call(null,map__27109__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27108,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27110){
var map__27118 = p__27110;
var map__27118__$1 = ((cljs.core.seq_QMARK_.call(null,map__27118))?cljs.core.apply.call(null,cljs.core.hash_map,map__27118):map__27118);
var on_compile_warning = cljs.core.get.call(null,map__27118__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27118__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27118,map__27118__$1,on_compile_warning,on_compile_fail){
return (function (p__27119){
var vec__27120 = p__27119;
var map__27121 = cljs.core.nth.call(null,vec__27120,(0),null);
var map__27121__$1 = ((cljs.core.seq_QMARK_.call(null,map__27121))?cljs.core.apply.call(null,cljs.core.hash_map,map__27121):map__27121);
var msg = map__27121__$1;
var msg_name = cljs.core.get.call(null,map__27121__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27120,(1));
var pred__27122 = cljs.core._EQ_;
var expr__27123 = msg_name;
if(cljs.core.truth_(pred__27122.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27123))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27122.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27123))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27118,map__27118__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto__,msg_hist,msg_names,msg){
return (function (state_27324){
var state_val_27325 = (state_27324[(1)]);
if((state_val_27325 === (7))){
var inst_27258 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27326_27367 = state_27324__$1;
(statearr_27326_27367[(2)] = inst_27258);

(statearr_27326_27367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (20))){
var inst_27286 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27324__$1 = state_27324;
if(cljs.core.truth_(inst_27286)){
var statearr_27327_27368 = state_27324__$1;
(statearr_27327_27368[(1)] = (22));

} else {
var statearr_27328_27369 = state_27324__$1;
(statearr_27328_27369[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (27))){
var inst_27298 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27299 = figwheel.client.heads_up.display_warning.call(null,inst_27298);
var state_27324__$1 = state_27324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27324__$1,(30),inst_27299);
} else {
if((state_val_27325 === (1))){
var inst_27246 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27324__$1 = state_27324;
if(cljs.core.truth_(inst_27246)){
var statearr_27329_27370 = state_27324__$1;
(statearr_27329_27370[(1)] = (2));

} else {
var statearr_27330_27371 = state_27324__$1;
(statearr_27330_27371[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (24))){
var inst_27314 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27331_27372 = state_27324__$1;
(statearr_27331_27372[(2)] = inst_27314);

(statearr_27331_27372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (4))){
var inst_27322 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27324__$1,inst_27322);
} else {
if((state_val_27325 === (15))){
var inst_27274 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27275 = figwheel.client.format_messages.call(null,inst_27274);
var inst_27276 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27277 = figwheel.client.heads_up.display_error.call(null,inst_27275,inst_27276);
var state_27324__$1 = state_27324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27324__$1,(18),inst_27277);
} else {
if((state_val_27325 === (21))){
var inst_27316 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27332_27373 = state_27324__$1;
(statearr_27332_27373[(2)] = inst_27316);

(statearr_27332_27373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (31))){
var inst_27305 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27324__$1 = state_27324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27324__$1,(34),inst_27305);
} else {
if((state_val_27325 === (32))){
var state_27324__$1 = state_27324;
var statearr_27333_27374 = state_27324__$1;
(statearr_27333_27374[(2)] = null);

(statearr_27333_27374[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (33))){
var inst_27310 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27334_27375 = state_27324__$1;
(statearr_27334_27375[(2)] = inst_27310);

(statearr_27334_27375[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (13))){
var inst_27264 = (state_27324[(2)]);
var inst_27265 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27266 = figwheel.client.format_messages.call(null,inst_27265);
var inst_27267 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27268 = figwheel.client.heads_up.display_error.call(null,inst_27266,inst_27267);
var state_27324__$1 = (function (){var statearr_27335 = state_27324;
(statearr_27335[(7)] = inst_27264);

return statearr_27335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27324__$1,(14),inst_27268);
} else {
if((state_val_27325 === (22))){
var inst_27288 = figwheel.client.heads_up.clear.call(null);
var state_27324__$1 = state_27324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27324__$1,(25),inst_27288);
} else {
if((state_val_27325 === (29))){
var inst_27312 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27336_27376 = state_27324__$1;
(statearr_27336_27376[(2)] = inst_27312);

(statearr_27336_27376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (6))){
var inst_27254 = figwheel.client.heads_up.clear.call(null);
var state_27324__$1 = state_27324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27324__$1,(9),inst_27254);
} else {
if((state_val_27325 === (28))){
var inst_27303 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27324__$1 = state_27324;
if(cljs.core.truth_(inst_27303)){
var statearr_27337_27377 = state_27324__$1;
(statearr_27337_27377[(1)] = (31));

} else {
var statearr_27338_27378 = state_27324__$1;
(statearr_27338_27378[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (25))){
var inst_27290 = (state_27324[(2)]);
var inst_27291 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27292 = figwheel.client.heads_up.display_warning.call(null,inst_27291);
var state_27324__$1 = (function (){var statearr_27339 = state_27324;
(statearr_27339[(8)] = inst_27290);

return statearr_27339;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27324__$1,(26),inst_27292);
} else {
if((state_val_27325 === (34))){
var inst_27307 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27340_27379 = state_27324__$1;
(statearr_27340_27379[(2)] = inst_27307);

(statearr_27340_27379[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (17))){
var inst_27318 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27341_27380 = state_27324__$1;
(statearr_27341_27380[(2)] = inst_27318);

(statearr_27341_27380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (3))){
var inst_27260 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27324__$1 = state_27324;
if(cljs.core.truth_(inst_27260)){
var statearr_27342_27381 = state_27324__$1;
(statearr_27342_27381[(1)] = (10));

} else {
var statearr_27343_27382 = state_27324__$1;
(statearr_27343_27382[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (12))){
var inst_27320 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27344_27383 = state_27324__$1;
(statearr_27344_27383[(2)] = inst_27320);

(statearr_27344_27383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (2))){
var inst_27248 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27324__$1 = state_27324;
if(cljs.core.truth_(inst_27248)){
var statearr_27345_27384 = state_27324__$1;
(statearr_27345_27384[(1)] = (5));

} else {
var statearr_27346_27385 = state_27324__$1;
(statearr_27346_27385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (23))){
var inst_27296 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27324__$1 = state_27324;
if(cljs.core.truth_(inst_27296)){
var statearr_27347_27386 = state_27324__$1;
(statearr_27347_27386[(1)] = (27));

} else {
var statearr_27348_27387 = state_27324__$1;
(statearr_27348_27387[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (19))){
var inst_27283 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27284 = figwheel.client.heads_up.append_message.call(null,inst_27283);
var state_27324__$1 = state_27324;
var statearr_27349_27388 = state_27324__$1;
(statearr_27349_27388[(2)] = inst_27284);

(statearr_27349_27388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (11))){
var inst_27272 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27324__$1 = state_27324;
if(cljs.core.truth_(inst_27272)){
var statearr_27350_27389 = state_27324__$1;
(statearr_27350_27389[(1)] = (15));

} else {
var statearr_27351_27390 = state_27324__$1;
(statearr_27351_27390[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (9))){
var inst_27256 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27352_27391 = state_27324__$1;
(statearr_27352_27391[(2)] = inst_27256);

(statearr_27352_27391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (5))){
var inst_27250 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27324__$1 = state_27324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27324__$1,(8),inst_27250);
} else {
if((state_val_27325 === (14))){
var inst_27270 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27353_27392 = state_27324__$1;
(statearr_27353_27392[(2)] = inst_27270);

(statearr_27353_27392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (26))){
var inst_27294 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27354_27393 = state_27324__$1;
(statearr_27354_27393[(2)] = inst_27294);

(statearr_27354_27393[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (16))){
var inst_27281 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27324__$1 = state_27324;
if(cljs.core.truth_(inst_27281)){
var statearr_27355_27394 = state_27324__$1;
(statearr_27355_27394[(1)] = (19));

} else {
var statearr_27356_27395 = state_27324__$1;
(statearr_27356_27395[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (30))){
var inst_27301 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27357_27396 = state_27324__$1;
(statearr_27357_27396[(2)] = inst_27301);

(statearr_27357_27396[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (10))){
var inst_27262 = figwheel.client.heads_up.clear.call(null);
var state_27324__$1 = state_27324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27324__$1,(13),inst_27262);
} else {
if((state_val_27325 === (18))){
var inst_27279 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27358_27397 = state_27324__$1;
(statearr_27358_27397[(2)] = inst_27279);

(statearr_27358_27397[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27325 === (8))){
var inst_27252 = (state_27324[(2)]);
var state_27324__$1 = state_27324;
var statearr_27359_27398 = state_27324__$1;
(statearr_27359_27398[(2)] = inst_27252);

(statearr_27359_27398[(1)] = (7));


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
});})(c__23381__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23319__auto__,c__23381__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto____0 = (function (){
var statearr_27363 = [null,null,null,null,null,null,null,null,null];
(statearr_27363[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto__);

(statearr_27363[(1)] = (1));

return statearr_27363;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto____1 = (function (state_27324){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_27324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e27364){if((e27364 instanceof Object)){
var ex__23323__auto__ = e27364;
var statearr_27365_27399 = state_27324;
(statearr_27365_27399[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27400 = state_27324;
state_27324 = G__27400;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto__ = function(state_27324){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto____1.call(this,state_27324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto__,msg_hist,msg_names,msg))
})();
var state__23383__auto__ = (function (){var statearr_27366 = f__23382__auto__.call(null);
(statearr_27366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto__);

return statearr_27366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto__,msg_hist,msg_names,msg))
);

return c__23381__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23381__auto___27463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto___27463,ch){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto___27463,ch){
return (function (state_27446){
var state_val_27447 = (state_27446[(1)]);
if((state_val_27447 === (1))){
var state_27446__$1 = state_27446;
var statearr_27448_27464 = state_27446__$1;
(statearr_27448_27464[(2)] = null);

(statearr_27448_27464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27447 === (2))){
var state_27446__$1 = state_27446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27446__$1,(4),ch);
} else {
if((state_val_27447 === (3))){
var inst_27444 = (state_27446[(2)]);
var state_27446__$1 = state_27446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27446__$1,inst_27444);
} else {
if((state_val_27447 === (4))){
var inst_27434 = (state_27446[(7)]);
var inst_27434__$1 = (state_27446[(2)]);
var state_27446__$1 = (function (){var statearr_27449 = state_27446;
(statearr_27449[(7)] = inst_27434__$1);

return statearr_27449;
})();
if(cljs.core.truth_(inst_27434__$1)){
var statearr_27450_27465 = state_27446__$1;
(statearr_27450_27465[(1)] = (5));

} else {
var statearr_27451_27466 = state_27446__$1;
(statearr_27451_27466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27447 === (5))){
var inst_27434 = (state_27446[(7)]);
var inst_27436 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27434);
var state_27446__$1 = state_27446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27446__$1,(8),inst_27436);
} else {
if((state_val_27447 === (6))){
var state_27446__$1 = state_27446;
var statearr_27452_27467 = state_27446__$1;
(statearr_27452_27467[(2)] = null);

(statearr_27452_27467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27447 === (7))){
var inst_27442 = (state_27446[(2)]);
var state_27446__$1 = state_27446;
var statearr_27453_27468 = state_27446__$1;
(statearr_27453_27468[(2)] = inst_27442);

(statearr_27453_27468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27447 === (8))){
var inst_27438 = (state_27446[(2)]);
var state_27446__$1 = (function (){var statearr_27454 = state_27446;
(statearr_27454[(8)] = inst_27438);

return statearr_27454;
})();
var statearr_27455_27469 = state_27446__$1;
(statearr_27455_27469[(2)] = null);

(statearr_27455_27469[(1)] = (2));


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
});})(c__23381__auto___27463,ch))
;
return ((function (switch__23319__auto__,c__23381__auto___27463,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23320__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23320__auto____0 = (function (){
var statearr_27459 = [null,null,null,null,null,null,null,null,null];
(statearr_27459[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23320__auto__);

(statearr_27459[(1)] = (1));

return statearr_27459;
});
var figwheel$client$heads_up_plugin_$_state_machine__23320__auto____1 = (function (state_27446){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_27446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e27460){if((e27460 instanceof Object)){
var ex__23323__auto__ = e27460;
var statearr_27461_27470 = state_27446;
(statearr_27461_27470[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27471 = state_27446;
state_27446 = G__27471;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23320__auto__ = function(state_27446){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23320__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23320__auto____1.call(this,state_27446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23320__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23320__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto___27463,ch))
})();
var state__23383__auto__ = (function (){var statearr_27462 = f__23382__auto__.call(null);
(statearr_27462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto___27463);

return statearr_27462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto___27463,ch))
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
var c__23381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto__){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto__){
return (function (state_27492){
var state_val_27493 = (state_27492[(1)]);
if((state_val_27493 === (1))){
var inst_27487 = cljs.core.async.timeout.call(null,(3000));
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27492__$1,(2),inst_27487);
} else {
if((state_val_27493 === (2))){
var inst_27489 = (state_27492[(2)]);
var inst_27490 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27492__$1 = (function (){var statearr_27494 = state_27492;
(statearr_27494[(7)] = inst_27489);

return statearr_27494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27492__$1,inst_27490);
} else {
return null;
}
}
});})(c__23381__auto__))
;
return ((function (switch__23319__auto__,c__23381__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23320__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23320__auto____0 = (function (){
var statearr_27498 = [null,null,null,null,null,null,null,null];
(statearr_27498[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23320__auto__);

(statearr_27498[(1)] = (1));

return statearr_27498;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23320__auto____1 = (function (state_27492){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_27492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e27499){if((e27499 instanceof Object)){
var ex__23323__auto__ = e27499;
var statearr_27500_27502 = state_27492;
(statearr_27500_27502[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27503 = state_27492;
state_27492 = G__27503;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23320__auto__ = function(state_27492){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23320__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23320__auto____1.call(this,state_27492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23320__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23320__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto__))
})();
var state__23383__auto__ = (function (){var statearr_27501 = f__23382__auto__.call(null);
(statearr_27501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto__);

return statearr_27501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto__))
);

return c__23381__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__17837__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__17837__auto__)){
return ("CustomEvent" in window);
} else {
return and__17837__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj27507 = {"detail":url};
return obj27507;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27508){
var map__27514 = p__27508;
var map__27514__$1 = ((cljs.core.seq_QMARK_.call(null,map__27514))?cljs.core.apply.call(null,cljs.core.hash_map,map__27514):map__27514);
var ed = map__27514__$1;
var formatted_exception = cljs.core.get.call(null,map__27514__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27514__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27514__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27515_27519 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27516_27520 = null;
var count__27517_27521 = (0);
var i__27518_27522 = (0);
while(true){
if((i__27518_27522 < count__27517_27521)){
var msg_27523 = cljs.core._nth.call(null,chunk__27516_27520,i__27518_27522);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27523);

var G__27524 = seq__27515_27519;
var G__27525 = chunk__27516_27520;
var G__27526 = count__27517_27521;
var G__27527 = (i__27518_27522 + (1));
seq__27515_27519 = G__27524;
chunk__27516_27520 = G__27525;
count__27517_27521 = G__27526;
i__27518_27522 = G__27527;
continue;
} else {
var temp__4423__auto___27528 = cljs.core.seq.call(null,seq__27515_27519);
if(temp__4423__auto___27528){
var seq__27515_27529__$1 = temp__4423__auto___27528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27515_27529__$1)){
var c__18634__auto___27530 = cljs.core.chunk_first.call(null,seq__27515_27529__$1);
var G__27531 = cljs.core.chunk_rest.call(null,seq__27515_27529__$1);
var G__27532 = c__18634__auto___27530;
var G__27533 = cljs.core.count.call(null,c__18634__auto___27530);
var G__27534 = (0);
seq__27515_27519 = G__27531;
chunk__27516_27520 = G__27532;
count__27517_27521 = G__27533;
i__27518_27522 = G__27534;
continue;
} else {
var msg_27535 = cljs.core.first.call(null,seq__27515_27529__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27535);

var G__27536 = cljs.core.next.call(null,seq__27515_27529__$1);
var G__27537 = null;
var G__27538 = (0);
var G__27539 = (0);
seq__27515_27519 = G__27536;
chunk__27516_27520 = G__27537;
count__27517_27521 = G__27538;
i__27518_27522 = G__27539;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27540){
var map__27542 = p__27540;
var map__27542__$1 = ((cljs.core.seq_QMARK_.call(null,map__27542))?cljs.core.apply.call(null,cljs.core.hash_map,map__27542):map__27542);
var w = map__27542__$1;
var message = cljs.core.get.call(null,map__27542__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17837__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17837__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17837__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27549 = cljs.core.seq.call(null,plugins);
var chunk__27550 = null;
var count__27551 = (0);
var i__27552 = (0);
while(true){
if((i__27552 < count__27551)){
var vec__27553 = cljs.core._nth.call(null,chunk__27550,i__27552);
var k = cljs.core.nth.call(null,vec__27553,(0),null);
var plugin = cljs.core.nth.call(null,vec__27553,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27555 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27549,chunk__27550,count__27551,i__27552,pl_27555,vec__27553,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27555.call(null,msg_hist);
});})(seq__27549,chunk__27550,count__27551,i__27552,pl_27555,vec__27553,k,plugin))
);
} else {
}

var G__27556 = seq__27549;
var G__27557 = chunk__27550;
var G__27558 = count__27551;
var G__27559 = (i__27552 + (1));
seq__27549 = G__27556;
chunk__27550 = G__27557;
count__27551 = G__27558;
i__27552 = G__27559;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__27549);
if(temp__4423__auto__){
var seq__27549__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27549__$1)){
var c__18634__auto__ = cljs.core.chunk_first.call(null,seq__27549__$1);
var G__27560 = cljs.core.chunk_rest.call(null,seq__27549__$1);
var G__27561 = c__18634__auto__;
var G__27562 = cljs.core.count.call(null,c__18634__auto__);
var G__27563 = (0);
seq__27549 = G__27560;
chunk__27550 = G__27561;
count__27551 = G__27562;
i__27552 = G__27563;
continue;
} else {
var vec__27554 = cljs.core.first.call(null,seq__27549__$1);
var k = cljs.core.nth.call(null,vec__27554,(0),null);
var plugin = cljs.core.nth.call(null,vec__27554,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27564 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27549,chunk__27550,count__27551,i__27552,pl_27564,vec__27554,k,plugin,seq__27549__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27564.call(null,msg_hist);
});})(seq__27549,chunk__27550,count__27551,i__27552,pl_27564,vec__27554,k,plugin,seq__27549__$1,temp__4423__auto__))
);
} else {
}

var G__27565 = cljs.core.next.call(null,seq__27549__$1);
var G__27566 = null;
var G__27567 = (0);
var G__27568 = (0);
seq__27549 = G__27565;
chunk__27550 = G__27566;
count__27551 = G__27567;
i__27552 = G__27568;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__27570 = arguments.length;
switch (G__27570) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__18889__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18889__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27573){
var map__27574 = p__27573;
var map__27574__$1 = ((cljs.core.seq_QMARK_.call(null,map__27574))?cljs.core.apply.call(null,cljs.core.hash_map,map__27574):map__27574);
var opts = map__27574__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27572){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27572));
});

//# sourceMappingURL=client.js.map?rel=1432336321973