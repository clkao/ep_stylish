var $, acePostWriteDomLineHTML, aceAttribsToClasses;
$ = require('ep_etherpad-lite/static/js/rjquery').$;
acePostWriteDomLineHTML = function(name, args){
  return $(args.node).find('.has-style').each(function(){
    var i$, ref$, len$, cls, results$ = [];
    for (i$ = 0, len$ = (ref$ = this.className.split(/ /)).length; i$ < len$; ++i$) {
      cls = ref$[i$];
      if (/^style-/.test(cls)) {
        results$.push(this.style.cssText += ';' + decodeURIComponent(cls).substr(6));
      }
    }
    return results$;
  });
};
aceAttribsToClasses = function(name, arg$){
  var key;
  key = arg$.key;
  if (/^style-/.test(key)) {
    return ['has-style', encodeURIComponent(key)];
  } else if (/^class-/.test(key)) {
    return [key.slice(6)];
  } else {
    return [];
  }
};
exports.acePostWriteDomLineHTML = acePostWriteDomLineHTML;
exports.aceAttribsToClasses = aceAttribsToClasses;