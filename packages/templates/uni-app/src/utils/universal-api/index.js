const n =
    'undefined' !== typeof wx &&
    'function' === typeof wx.getSystemInfoSync &&
    Boolean(wx.getSystemInfoSync().fontSizeSetting),
  e = 'undefined' !== typeof uni && 'undefined' === typeof window,
  t = n || e,
  i = 'undefined' !== typeof uni,
  o = ('undefined' !== typeof uni || 'undefined' !== typeof window) && !t,
  d = n ? wx : i ? uni : window,
  f = (o && window && window.navigator && window.navigator.userAgent) || '',
  w = /Android/i.test(f),
  s = /(?:Windows Phone)/.test(f),
  u = /(?:SymbianOS)/.test(f),
  a = /iPad/i.test(f) || /iPhone/i.test(f) || /iPod/i.test(f),
  y = n,
  p = w || s || u || a,
  S = o && !p,
  c = e && !n;
function r() {
  let n = '';
  return S ? (n = 'pc') : p ? (n = 'h5') : y ? (n = 'wechat') : c && (n = 'app'), n;
}
console.log('TUIUniversvalAPI.VERSION:0.0.1');
export { d as TUIGlobal, r as getPlatform };
