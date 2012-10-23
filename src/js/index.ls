$ = require('ep_etherpad-lite/static/js/rjquery').$

acePostWriteDomLineHTML = (name, args) ->
    $(args.node)find('.has-style')each ->
        for cls in @className.split(/ /) when /^style-/.test cls
            @style.cssText += \; + decodeURIComponent(cls)substr(6)

aceAttribsToClasses = (name, {key}) ->
    return 'has-style ' + encodeURIComponent key if /^style-/.test key
    return ''


exports <<< { acePostWriteDomLineHTML, aceAttribsToClasses}
