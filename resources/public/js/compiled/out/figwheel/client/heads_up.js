// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__18889__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18889__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27701_27709 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27702_27710 = null;
var count__27703_27711 = (0);
var i__27704_27712 = (0);
while(true){
if((i__27704_27712 < count__27703_27711)){
var k_27713 = cljs.core._nth.call(null,chunk__27702_27710,i__27704_27712);
e.setAttribute(cljs.core.name.call(null,k_27713),cljs.core.get.call(null,attrs,k_27713));

var G__27714 = seq__27701_27709;
var G__27715 = chunk__27702_27710;
var G__27716 = count__27703_27711;
var G__27717 = (i__27704_27712 + (1));
seq__27701_27709 = G__27714;
chunk__27702_27710 = G__27715;
count__27703_27711 = G__27716;
i__27704_27712 = G__27717;
continue;
} else {
var temp__4423__auto___27718 = cljs.core.seq.call(null,seq__27701_27709);
if(temp__4423__auto___27718){
var seq__27701_27719__$1 = temp__4423__auto___27718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27701_27719__$1)){
var c__18634__auto___27720 = cljs.core.chunk_first.call(null,seq__27701_27719__$1);
var G__27721 = cljs.core.chunk_rest.call(null,seq__27701_27719__$1);
var G__27722 = c__18634__auto___27720;
var G__27723 = cljs.core.count.call(null,c__18634__auto___27720);
var G__27724 = (0);
seq__27701_27709 = G__27721;
chunk__27702_27710 = G__27722;
count__27703_27711 = G__27723;
i__27704_27712 = G__27724;
continue;
} else {
var k_27725 = cljs.core.first.call(null,seq__27701_27719__$1);
e.setAttribute(cljs.core.name.call(null,k_27725),cljs.core.get.call(null,attrs,k_27725));

var G__27726 = cljs.core.next.call(null,seq__27701_27719__$1);
var G__27727 = null;
var G__27728 = (0);
var G__27729 = (0);
seq__27701_27709 = G__27726;
chunk__27702_27710 = G__27727;
count__27703_27711 = G__27728;
i__27704_27712 = G__27729;
continue;
}
} else {
}
}
break;
}

var seq__27705_27730 = cljs.core.seq.call(null,children);
var chunk__27706_27731 = null;
var count__27707_27732 = (0);
var i__27708_27733 = (0);
while(true){
if((i__27708_27733 < count__27707_27732)){
var ch_27734 = cljs.core._nth.call(null,chunk__27706_27731,i__27708_27733);
e.appendChild(ch_27734);

var G__27735 = seq__27705_27730;
var G__27736 = chunk__27706_27731;
var G__27737 = count__27707_27732;
var G__27738 = (i__27708_27733 + (1));
seq__27705_27730 = G__27735;
chunk__27706_27731 = G__27736;
count__27707_27732 = G__27737;
i__27708_27733 = G__27738;
continue;
} else {
var temp__4423__auto___27739 = cljs.core.seq.call(null,seq__27705_27730);
if(temp__4423__auto___27739){
var seq__27705_27740__$1 = temp__4423__auto___27739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27705_27740__$1)){
var c__18634__auto___27741 = cljs.core.chunk_first.call(null,seq__27705_27740__$1);
var G__27742 = cljs.core.chunk_rest.call(null,seq__27705_27740__$1);
var G__27743 = c__18634__auto___27741;
var G__27744 = cljs.core.count.call(null,c__18634__auto___27741);
var G__27745 = (0);
seq__27705_27730 = G__27742;
chunk__27706_27731 = G__27743;
count__27707_27732 = G__27744;
i__27708_27733 = G__27745;
continue;
} else {
var ch_27746 = cljs.core.first.call(null,seq__27705_27740__$1);
e.appendChild(ch_27746);

var G__27747 = cljs.core.next.call(null,seq__27705_27740__$1);
var G__27748 = null;
var G__27749 = (0);
var G__27750 = (0);
seq__27705_27730 = G__27747;
chunk__27706_27731 = G__27748;
count__27707_27732 = G__27749;
i__27708_27733 = G__27750;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27698){
var G__27699 = cljs.core.first.call(null,seq27698);
var seq27698__$1 = cljs.core.next.call(null,seq27698);
var G__27700 = cljs.core.first.call(null,seq27698__$1);
var seq27698__$2 = cljs.core.next.call(null,seq27698__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27699,G__27700,seq27698__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18744__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18748__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18744__auto__,prefer_table__18745__auto__,method_cache__18746__auto__,cached_hierarchy__18747__auto__,hierarchy__18748__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18744__auto__,prefer_table__18745__auto__,method_cache__18746__auto__,cached_hierarchy__18747__auto__,hierarchy__18748__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18748__auto__,method_table__18744__auto__,prefer_table__18745__auto__,method_cache__18746__auto__,cached_hierarchy__18747__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27751 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27751.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27751.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_27751.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27751);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27752,st_map){
var map__27756 = p__27752;
var map__27756__$1 = ((cljs.core.seq_QMARK_.call(null,map__27756))?cljs.core.apply.call(null,cljs.core.hash_map,map__27756):map__27756);
var container_el = cljs.core.get.call(null,map__27756__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27756,map__27756__$1,container_el){
return (function (p__27757){
var vec__27758 = p__27757;
var k = cljs.core.nth.call(null,vec__27758,(0),null);
var v = cljs.core.nth.call(null,vec__27758,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27756,map__27756__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27759,dom_str){
var map__27761 = p__27759;
var map__27761__$1 = ((cljs.core.seq_QMARK_.call(null,map__27761))?cljs.core.apply.call(null,cljs.core.hash_map,map__27761):map__27761);
var c = map__27761__$1;
var content_area_el = cljs.core.get.call(null,map__27761__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27762){
var map__27764 = p__27762;
var map__27764__$1 = ((cljs.core.seq_QMARK_.call(null,map__27764))?cljs.core.apply.call(null,cljs.core.hash_map,map__27764):map__27764);
var content_area_el = cljs.core.get.call(null,map__27764__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto__){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto__){
return (function (state_27806){
var state_val_27807 = (state_27806[(1)]);
if((state_val_27807 === (1))){
var inst_27791 = (state_27806[(7)]);
var inst_27791__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27792 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27793 = ["10px","10px","100%","68px","1.0"];
var inst_27794 = cljs.core.PersistentHashMap.fromArrays(inst_27792,inst_27793);
var inst_27795 = cljs.core.merge.call(null,inst_27794,style);
var inst_27796 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27791__$1,inst_27795);
var inst_27797 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27791__$1,msg);
var inst_27798 = cljs.core.async.timeout.call(null,(300));
var state_27806__$1 = (function (){var statearr_27808 = state_27806;
(statearr_27808[(8)] = inst_27797);

(statearr_27808[(9)] = inst_27796);

(statearr_27808[(7)] = inst_27791__$1);

return statearr_27808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27806__$1,(2),inst_27798);
} else {
if((state_val_27807 === (2))){
var inst_27791 = (state_27806[(7)]);
var inst_27800 = (state_27806[(2)]);
var inst_27801 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27802 = ["auto"];
var inst_27803 = cljs.core.PersistentHashMap.fromArrays(inst_27801,inst_27802);
var inst_27804 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27791,inst_27803);
var state_27806__$1 = (function (){var statearr_27809 = state_27806;
(statearr_27809[(10)] = inst_27800);

return statearr_27809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27806__$1,inst_27804);
} else {
return null;
}
}
});})(c__23381__auto__))
;
return ((function (switch__23319__auto__,c__23381__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto____0 = (function (){
var statearr_27813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27813[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto__);

(statearr_27813[(1)] = (1));

return statearr_27813;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto____1 = (function (state_27806){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_27806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e27814){if((e27814 instanceof Object)){
var ex__23323__auto__ = e27814;
var statearr_27815_27817 = state_27806;
(statearr_27815_27817[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27818 = state_27806;
state_27806 = G__27818;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto__ = function(state_27806){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto____1.call(this,state_27806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto__))
})();
var state__23383__auto__ = (function (){var statearr_27816 = f__23382__auto__.call(null);
(statearr_27816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto__);

return statearr_27816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto__))
);

return c__23381__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__27820 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__27820,(0),null);
var ln = cljs.core.nth.call(null,vec__27820,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27823 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27823,(0),null);
var file_line = cljs.core.nth.call(null,vec__27823,(1),null);
var file_column = cljs.core.nth.call(null,vec__27823,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27823,file_name,file_line,file_column){
return (function (p1__27821_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__27821_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__27823,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__17849__auto__ = file_line;
if(cljs.core.truth_(or__17849__auto__)){
return or__17849__auto__;
} else {
var and__17837__auto__ = cause;
if(cljs.core.truth_(and__17837__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__17837__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27825 = figwheel.client.heads_up.ensure_container.call(null);
var map__27825__$1 = ((cljs.core.seq_QMARK_.call(null,map__27825))?cljs.core.apply.call(null,cljs.core.hash_map,map__27825):map__27825);
var content_area_el = cljs.core.get.call(null,map__27825__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto__){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto__){
return (function (state_27872){
var state_val_27873 = (state_27872[(1)]);
if((state_val_27873 === (1))){
var inst_27855 = (state_27872[(7)]);
var inst_27855__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27856 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27857 = ["0.0"];
var inst_27858 = cljs.core.PersistentHashMap.fromArrays(inst_27856,inst_27857);
var inst_27859 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27855__$1,inst_27858);
var inst_27860 = cljs.core.async.timeout.call(null,(300));
var state_27872__$1 = (function (){var statearr_27874 = state_27872;
(statearr_27874[(7)] = inst_27855__$1);

(statearr_27874[(8)] = inst_27859);

return statearr_27874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27872__$1,(2),inst_27860);
} else {
if((state_val_27873 === (2))){
var inst_27855 = (state_27872[(7)]);
var inst_27862 = (state_27872[(2)]);
var inst_27863 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27864 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27865 = cljs.core.PersistentHashMap.fromArrays(inst_27863,inst_27864);
var inst_27866 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27855,inst_27865);
var inst_27867 = cljs.core.async.timeout.call(null,(200));
var state_27872__$1 = (function (){var statearr_27875 = state_27872;
(statearr_27875[(9)] = inst_27866);

(statearr_27875[(10)] = inst_27862);

return statearr_27875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27872__$1,(3),inst_27867);
} else {
if((state_val_27873 === (3))){
var inst_27855 = (state_27872[(7)]);
var inst_27869 = (state_27872[(2)]);
var inst_27870 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27855,"");
var state_27872__$1 = (function (){var statearr_27876 = state_27872;
(statearr_27876[(11)] = inst_27869);

return statearr_27876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27872__$1,inst_27870);
} else {
return null;
}
}
}
});})(c__23381__auto__))
;
return ((function (switch__23319__auto__,c__23381__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23320__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23320__auto____0 = (function (){
var statearr_27880 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27880[(0)] = figwheel$client$heads_up$clear_$_state_machine__23320__auto__);

(statearr_27880[(1)] = (1));

return statearr_27880;
});
var figwheel$client$heads_up$clear_$_state_machine__23320__auto____1 = (function (state_27872){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_27872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e27881){if((e27881 instanceof Object)){
var ex__23323__auto__ = e27881;
var statearr_27882_27884 = state_27872;
(statearr_27882_27884[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27885 = state_27872;
state_27872 = G__27885;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23320__auto__ = function(state_27872){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23320__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23320__auto____1.call(this,state_27872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23320__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23320__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto__))
})();
var state__23383__auto__ = (function (){var statearr_27883 = f__23382__auto__.call(null);
(statearr_27883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto__);

return statearr_27883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto__))
);

return c__23381__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23381__auto__){
return (function (){
var f__23382__auto__ = (function (){var switch__23319__auto__ = ((function (c__23381__auto__){
return (function (state_27917){
var state_val_27918 = (state_27917[(1)]);
if((state_val_27918 === (1))){
var inst_27907 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27917__$1 = state_27917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27917__$1,(2),inst_27907);
} else {
if((state_val_27918 === (2))){
var inst_27909 = (state_27917[(2)]);
var inst_27910 = cljs.core.async.timeout.call(null,(400));
var state_27917__$1 = (function (){var statearr_27919 = state_27917;
(statearr_27919[(7)] = inst_27909);

return statearr_27919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27917__$1,(3),inst_27910);
} else {
if((state_val_27918 === (3))){
var inst_27912 = (state_27917[(2)]);
var inst_27913 = figwheel.client.heads_up.clear.call(null);
var state_27917__$1 = (function (){var statearr_27920 = state_27917;
(statearr_27920[(8)] = inst_27912);

return statearr_27920;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27917__$1,(4),inst_27913);
} else {
if((state_val_27918 === (4))){
var inst_27915 = (state_27917[(2)]);
var state_27917__$1 = state_27917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27917__$1,inst_27915);
} else {
return null;
}
}
}
}
});})(c__23381__auto__))
;
return ((function (switch__23319__auto__,c__23381__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto____0 = (function (){
var statearr_27924 = [null,null,null,null,null,null,null,null,null];
(statearr_27924[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto__);

(statearr_27924[(1)] = (1));

return statearr_27924;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto____1 = (function (state_27917){
while(true){
var ret_value__23321__auto__ = (function (){try{while(true){
var result__23322__auto__ = switch__23319__auto__.call(null,state_27917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23322__auto__;
}
break;
}
}catch (e27925){if((e27925 instanceof Object)){
var ex__23323__auto__ = e27925;
var statearr_27926_27928 = state_27917;
(statearr_27926_27928[(5)] = ex__23323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27929 = state_27917;
state_27917 = G__27929;
continue;
} else {
return ret_value__23321__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto__ = function(state_27917){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto____1.call(this,state_27917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23320__auto__;
})()
;})(switch__23319__auto__,c__23381__auto__))
})();
var state__23383__auto__ = (function (){var statearr_27927 = f__23382__auto__.call(null);
(statearr_27927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23381__auto__);

return statearr_27927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23383__auto__);
});})(c__23381__auto__))
);

return c__23381__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1432336322429