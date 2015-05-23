(ns figwheel.connect (:require [figwheel.client] [toptens.core]))
(figwheel.client/start {:build-id "dev", :on-jsload toptens.core/on-js-reload, :websocket-url "ws://localhost:3450/figwheel-ws"})

