var collectContentPre;
console.log('loading');
collectContentPre = function(name, arg$){
  var styl, cc, state;
  styl = arg$.styl, cc = arg$.cc, state = arg$.state;
  console.log('collecting', styl);
  return cc.doAttrib(state, "style-" + styl);
};
exports.collectContentPre = collectContentPre;