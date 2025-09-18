const Ziggy = {"url":"http:\/\/db-dentalcare-app.test","port":null,"defaults":{},"routes":{"home":{"uri":"\/","methods":["GET","HEAD"]},"google.redirect":{"uri":"auth\/google\/redirect","methods":["GET","HEAD"]},"google.callback":{"uri":"auth\/google\/callback","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
