export collectContentPre = (name, {tname, cls, styl, cc, state}) ->
    if cls
      for c in cls.split ' ' when c.length
        cc.doAttrib state, "class-#c"
    cc.doAttrib state, "style-#styl" if styl
