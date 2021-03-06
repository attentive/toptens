(defproject toptens "0.1.0-SNAPSHOT"
  :description "Visualising the favourite films of film directors"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [re-frame "0.4.1"]
                 [sablono "0.3.6"]
                 [instaparse "1.4.1"]
                 [cljs-ajax "0.3.14"]
                 #_[net.drib/strokes "0.5.1"]]

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.3.9"]]

  :source-paths ["src"]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]

                        :figwheel {:repl false 
                                   :on-jsload "toptens.core/on-js-reload" }

                        :compiler {:main toptens.core 
                                   :asset-path "js/compiled/out"
                                   :output-to "resources/public/js/compiled/toptens.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}]}

  :figwheel {
             ;; :http-server-root "public" ;; default and assumes "resources"
             :server-port 3450 ;; default is 3449
             :css-dirs ["resources/public/css"] ;; watch and update CSS
             })
