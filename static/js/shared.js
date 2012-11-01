var collectContentPre, out$ = typeof exports != 'undefined' && exports || this;
out$.collectContentPre = collectContentPre = function(name, arg$){
  var tname, cls, styl, cc, state, i$, ref$, len$, c;
  tname = arg$.tname, cls = arg$.cls, styl = arg$.styl, cc = arg$.cc, state = arg$.state;
  if (cls) {
    for (i$ = 0, len$ = (ref$ = cls.split(' ')).length; i$ < len$; ++i$) {
      c = ref$[i$];
      if (c.length) {
        cc.doAttrib(state, "class-" + c);
      }
    }
  }
  if (styl) {
    return cc.doAttrib(state, "style-" + styl);
  }
};