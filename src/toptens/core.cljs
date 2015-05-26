(ns toptens.core
  (:require-macros [reagent.ratom :refer [reaction]]
                   [toptens.macros :refer [p pp]])  
  (:require [ajax.core :refer [GET]]
            [reagent.core :as reagent :refer [atom]]
            [sablono.core :refer-macros [html]]
            [re-frame.core :refer [register-handler
                                   path
                                   register-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]))
(enable-console-print!)

(defn on-js-reload
  [x]
  (p "App reloaded."))

(def !toptens (atom {:entries nil}))

(defn handler [response] 
  (dispatch [:init response]))

(GET "/toptens.edn" {:handler handler}) 

;; -- Event Handlers ----------------------------------------------------------

(register-handler 
  :init
  (fn [db [_ value]]
    (assoc db :entries value)))

(register-handler
  :shuffle
  (fn [db [_ value]]
    ;(pp db)
    (assoc db :entries (shuffle (:entries db)))))    ;; return the new version of db

;; -- Subscription Handlers ---------------------------------------------------

(register-sub
  :entries
  (fn 
    [db _]
    (reaction (:entries @db))))


;; -- View Components ---------------------------------------------------------

(defn film-view
  [film]
  [:div.row 
   [:div.col-md-6 [:label.pull-right (:title film)]] 
   (if-let [dir (:director film)] 
     [:div.col-md-6 [:span (str " " dir)]])])

(defn director-view
  [person]
  [:div.row [:div.col-md-12 [:h1 (:director person)]]])

(defn entry-view [person]
  [:div
   [director-view person]
   (let [favs (map vector (iterate inc 0) (:favourites person))]
     (for [[k film] favs] 
       ^{:key (str (:director person) (:title film) k)} [film-view film]))])

(defn toptens-app []
  (let [entries (subscribe [:entries])
        data (map vector (iterate inc 0) @entries)]
    [:div.container
     [:button.btn {:on-click #(dispatch [:shuffle])} "Shuffle"]
     (for [[k entry] data] 
       ^{:key (str (:director entry) k)} [entry-view entry])]))

(defn ^:export run
  []
  (reagent/render [toptens-app]
                  (js/document.getElementById "app")))
