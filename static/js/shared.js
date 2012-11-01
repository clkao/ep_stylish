var collectContentPre;
collectContentPre = function(name, arg$){
  var cls, styl, cc, state, i$, ref$, len$, c;
  cls = arg$.cls, styl = arg$.styl, cc = arg$.cc, state = arg$.state;
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
exports.collectContentPre = collectContentPre;