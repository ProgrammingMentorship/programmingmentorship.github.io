;; Add custom functions here to include in scheme lessons
;; Note, have to shut off caching (or clear the cached file) for this to work on reload

(define (lolwut x) (* x x))


;Modified Type function to separate out "number" from "integer" and "real"
(define (get-type x)
    (cond 
        ((integer? x) "integer")
        ((real? x) "real")
        (true (type x))
        ))

;Can't figure out how to get R7RS functions loaded in so just creating my own here
(define (string-upcase x)
    (list->string (map char-upcase (string->list x)))
    )





