// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.handlers');
goog.require('re_frame.utils');
goog.require('cljs.core.async');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__20997__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20997__auto__){
return (function (){
var f__20998__auto__ = (function (){var switch__20976__auto__ = ((function (c__20997__auto__){
return (function (state_21663){
var state_val_21664 = (state_21663[(1)]);
if((state_val_21664 === (7))){
var inst_21648 = (state_21663[(2)]);
var state_21663__$1 = (function (){var statearr_21665 = state_21663;
(statearr_21665[(7)] = inst_21648);

return statearr_21665;
})();
var statearr_21666_21686 = state_21663__$1;
(statearr_21666_21686[(2)] = null);

(statearr_21666_21686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (1))){
var state_21663__$1 = state_21663;
var statearr_21667_21687 = state_21663__$1;
(statearr_21667_21687[(2)] = null);

(statearr_21667_21687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (4))){
var inst_21635 = (state_21663[(8)]);
var inst_21635__$1 = (state_21663[(2)]);
var inst_21636 = cljs.core.meta.call(null,inst_21635__$1);
var inst_21637 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_21636);
var state_21663__$1 = (function (){var statearr_21668 = state_21663;
(statearr_21668[(8)] = inst_21635__$1);

return statearr_21668;
})();
if(cljs.core.truth_(inst_21637)){
var statearr_21669_21688 = state_21663__$1;
(statearr_21669_21688[(1)] = (5));

} else {
var statearr_21670_21689 = state_21663__$1;
(statearr_21670_21689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (6))){
var inst_21644 = cljs.core.async.timeout.call(null,(0));
var state_21663__$1 = state_21663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21663__$1,(9),inst_21644);
} else {
if((state_val_21664 === (3))){
var inst_21661 = (state_21663[(2)]);
var state_21663__$1 = state_21663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21663__$1,inst_21661);
} else {
if((state_val_21664 === (12))){
var inst_21635 = (state_21663[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21663,(11),Object,null,(10));
var inst_21656 = re_frame.handlers.handle.call(null,inst_21635);
var state_21663__$1 = state_21663;
var statearr_21671_21690 = state_21663__$1;
(statearr_21671_21690[(2)] = inst_21656);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21663__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (2))){
var state_21663__$1 = state_21663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21663__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_21664 === (11))){
var inst_21649 = (state_21663[(2)]);
var inst_21650 = re_frame.router.purge_chan.call(null);
var inst_21651 = re_frame$router$router_loop.call(null);
var inst_21652 = (function(){throw inst_21649})();
var state_21663__$1 = (function (){var statearr_21672 = state_21663;
(statearr_21672[(9)] = inst_21650);

(statearr_21672[(10)] = inst_21651);

return statearr_21672;
})();
var statearr_21673_21691 = state_21663__$1;
(statearr_21673_21691[(2)] = inst_21652);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21663__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (9))){
var inst_21646 = (state_21663[(2)]);
var state_21663__$1 = state_21663;
var statearr_21674_21692 = state_21663__$1;
(statearr_21674_21692[(2)] = inst_21646);

(statearr_21674_21692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (5))){
var inst_21639 = reagent.core.flush.call(null);
var inst_21640 = cljs.core.async.timeout.call(null,(20));
var state_21663__$1 = (function (){var statearr_21675 = state_21663;
(statearr_21675[(11)] = inst_21639);

return statearr_21675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21663__$1,(8),inst_21640);
} else {
if((state_val_21664 === (10))){
var inst_21658 = (state_21663[(2)]);
var state_21663__$1 = (function (){var statearr_21676 = state_21663;
(statearr_21676[(12)] = inst_21658);

return statearr_21676;
})();
var statearr_21677_21693 = state_21663__$1;
(statearr_21677_21693[(2)] = null);

(statearr_21677_21693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21664 === (8))){
var inst_21642 = (state_21663[(2)]);
var state_21663__$1 = state_21663;
var statearr_21678_21694 = state_21663__$1;
(statearr_21678_21694[(2)] = inst_21642);

(statearr_21678_21694[(1)] = (7));


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
});})(c__20997__auto__))
;
return ((function (switch__20976__auto__,c__20997__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__20977__auto__ = null;
var re_frame$router$router_loop_$_state_machine__20977__auto____0 = (function (){
var statearr_21682 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21682[(0)] = re_frame$router$router_loop_$_state_machine__20977__auto__);

(statearr_21682[(1)] = (1));

return statearr_21682;
});
var re_frame$router$router_loop_$_state_machine__20977__auto____1 = (function (state_21663){
while(true){
var ret_value__20978__auto__ = (function (){try{while(true){
var result__20979__auto__ = switch__20976__auto__.call(null,state_21663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20979__auto__;
}
break;
}
}catch (e21683){if((e21683 instanceof Object)){
var ex__20980__auto__ = e21683;
var statearr_21684_21695 = state_21663;
(statearr_21684_21695[(5)] = ex__20980__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21696 = state_21663;
state_21663 = G__21696;
continue;
} else {
return ret_value__20978__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__20977__auto__ = function(state_21663){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__20977__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__20977__auto____1.call(this,state_21663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__20977__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__20977__auto____0;
re_frame$router$router_loop_$_state_machine__20977__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__20977__auto____1;
return re_frame$router$router_loop_$_state_machine__20977__auto__;
})()
;})(switch__20976__auto__,c__20997__auto__))
})();
var state__20999__auto__ = (function (){var statearr_21685 = f__20998__auto__.call(null);
(statearr_21685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20997__auto__);

return statearr_21685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20999__auto__);
});})(c__20997__auto__))
);

return c__20997__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1432392088476