Establish a root reference to `this` and preserve its `_` to previousUnderscore.

    root = this
    preveiousUnderscore = root._

Define an object that can be used by underscore to break out of loop iterations.

    breaker = if typeof(StopIteration) is 'undefined' then '__break__' else StopIteration

Function to escape inline regular expressions.

    escapeRegExp = (string) -> string.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1')

