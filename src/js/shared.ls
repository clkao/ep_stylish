console.log \loading
collectContentPre = (name, {styl, cc, state}) ->
    console.log \collecting, styl
    cc.doAttrib state, "style-#styl"

exports <<< { collectContentPre }
