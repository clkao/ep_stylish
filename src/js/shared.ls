collectContentPre = (name, {styl, cc, state}) ->
    cc.doAttrib state, "style-#styl"

exports <<< { collectContentPre }
