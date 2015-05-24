(ns toptens.core
  (:require-macros [reagent.ratom :refer [reaction]]
                   [toptens.macros :refer [p pp]])  
  (:require [ajax.core :refer [GET]]
            [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [register-handler
                                   path
                                   register-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]
            [re-com.core :refer [p button h-box v-box border label title]]))

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
  [h-box
   :gap "5px" 
   :size "auto" 
   :children [[label :label (:title film)] 
              (if-let [dir (:director film)] [label :class "pull-right" :label (str " " dir)])]])

(defn director-view
  [person]
  [title
   :level :level1 
   :label (:director person)])

(defn entry-view [person]
  [v-box
   :size "auto" 
   :children [[director-view person]
              (for [film (:favourites person)] [film-view film])]])

(defn toptens-app []
  (let [entries (subscribe [:entries])]
    (pp (first @entries))
    [v-box
     :size "auto"
     :children [[button :label "Shuffle" :on-click #(dispatch [:shuffle])]
                (for [entry @entries] [entry-view entry]) ]]))

(defn ^:export run
  []
  (reagent/render [toptens-app]
                  (js/document.getElementById "app")))
