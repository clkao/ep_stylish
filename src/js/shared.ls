collectContentPre = (name, {styl, cc, state}) ->
    cc.doAttrib state, "style-#styl" if styl

exports <<< { collectContentPre }
