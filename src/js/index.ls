$ = require('ep_etherpad-lite/static/js/rjquery').$

export acePostWriteDomLineHTML = (name, args) ->
  $(args.node)find('.has-style')each ->
    for cls in @className.split(/ /) when /^style-/.test cls
      @style.cssText += \; + decodeURIComponent(cls)substr(6)

export aceAttribsToClasses = (name, {key}) ->
  if /^style-/.test key
    ['has-style', encodeURIComponent key]
  else if /^class-/.test key
    [key.slice 6]
  else
    []
