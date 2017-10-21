(ns api-test.macros)

(defmacro if-some? 
  ([value then] `(if-some? ~value ~then nil))
  ([value then else]
    `(if (some? ~value) ~then ~else)))

