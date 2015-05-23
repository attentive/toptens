(ns ^:figwheel-always yow-workshop.core
  (:require-macros [yow-workshop.macros :refer [p pp]])
  (:require [sablono.core :refer-macros [html]]
            [cljs.core.match :refer-macros [match]]))

(enable-console-print!)

;; Memoization exercise

(defn expensive-fn
  [x]
  (.log js/console "I ran")
  (+ x 1))

(defn proust [f]
 (let [!remembrance (atom {})] 
  (fn [x]
    (let [mem (get @!remembrance x ::proust-notfound)]
      (if-not (= ::proust-notfound mem)
        (do (pp "Cached")
            mem)
        (do (pp "Caching …")
            (let [new-mem (f x)]
              (swap! !remembrance assoc x new-mem)
              new-mem)))))))

(def nostalgic-fn (proust expensive-fn))

;;

(defonce !app-state
  (atom {:text "Hello world!"
         :num-squares 5}))

(defn app-template
  [app]
  (html
    [:div#container
     [:h1 (:text app)]]))


(defn on-js-reload
  [x]
  (p "App reloaded."))


(defn main
  []
  (let [container (.getElementById js/document "container")
        reload! (fn [component]
                  (.render js/React component container))]

    (reload! (app-template @!app-state))

    (add-watch !app-state :foo (fn [_ _ _ new-state]
                                 (reload! (app-template new-state))))

    (js/setTimeout #(swap! !app-state assoc :text "Hello YOW!") 2000)))

(main)
