(ns toptens.films-test
  (:use midje.sweet)
  (:require [toptens.films :as films]))

(def SAMPLE "Pedro Almodóvar

            The Night of the Hunter (Laughton)
            The Rules of the Game (Renoir)\n")

(def as-and-bs 
  (insta/parser
          "S = AB*
           <AB> = A B
           A = 'a'+
           B = 'b'+"))

(facts
  (fact "as-and-bs parses correctly"
        (vector? (as-and-bs "aaaaabbbaaabbb")) => true))


#(defn films-test []
  (director-toptens SAMPLE))


#_(facts 
 (fact "`post-content` returns hiccup data"
       (even? (first [2 4])) => truthy 
       (vector? (first (content/post-content test-post))) => true))



