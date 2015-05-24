(ns toptens.films
  (:require [instaparse.core :as insta]))

(def toptens-parser
  (insta/parser (slurp "resources/grammar.txt")))

(defn toptens-data [entries]
  (map (fn [[entry director & favourites]] 
         {:director (second director)
          :favourites 
          (into [] (map (fn [[favourite film director]] 
                          {:title (second film) 
                           :director (second director)}) 
                        favourites))})
       entries)) 

(println (toptens-data (toptens-parser (slurp "resources/films.txt"))))


#_(println (toptens-parser SAMPLE))
#_(println (toptens-parser (slurp "resources/films.txt")))



(def PARSED-SAMPLE
  [:Entry 
   [:Director "Pedro Almodóvar"] 
   [:FavouriteEntry 
    [:Film "The Night of the Hunter"] 
    [:Director "Laughton"]] 
   [:FavouriteEntry 
    [:Film "The Rules of the Game"] 
    [:Director "Renoir"]]])

(def SAMPLE "Pedro Almodóvar

            The Night of the Hunter (Laughton)
            The Rules of the Game (Renoir)\n")

(def BIGGER-SAMPLE 
  "Pedro Almodóvar

  The Night of the Hunter (Laughton) 
  The Rules of the Game (Renoir)
  All About Eve (Mankiewicz) 
  Leave Her to Heaven (Stahl)
  North by Northwest (Hitchcock)
  Out of the Past (Tourneur) 
  Midnight (Leisen) 
  Some Like It Hot (Wilder) 
  Touch of Evil (Welles)
  Senso (Visconti)

  Allison Anders

  All That Heaven Allows (Sirk) 
  Alice in the Cities (Wenders)
  The Hours and Times (Munch)
  The Man from Laramie (Mann)
  Letter from an Unknown Woman (Ophuls)
  A Hard Day’s Night (Lester)
  Woman on the Beach (Renoir) 
  Naked (Leigh) 
  The Age of Innocence (Scorsese) 
  There’s Always Tomorrow (Sirk)
  ")


