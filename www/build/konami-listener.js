/*! Built with http://stenciljs.com */
(function(win, doc, appNamespace, publicPath, appCore, appCoreSsr, appCorePolyfilled, components) {

function init(win, doc, appNamespace, publicPath, appCore, appCoreSsr, appCorePolyfilled, components, x, y) {
    // create global namespace if it doesn't already exist
    (win[appNamespace] = win[appNamespace] || {}).components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}';
        x.setAttribute('data-visibility', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // get this current script
    // script tag cannot use "async" attribute
    appNamespace = appNamespace.toLowerCase();
    x = doc.scripts[doc.scripts.length - 1];
    if (x && x.src) {
        y = x.src.split('/').slice(0, -1);
        publicPath = (y.join('/')) + (y.length ? '/' : '') + appNamespace + '/';
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    x.src = publicPath + ((supportsCustomElements(x) && supportsEsModules(win) && supportsFetch(win) && supportsCssVariables(win)) ? (requiresSsrClient(doc) ? appCoreSsr : appCore) : appCorePolyfilled);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-namespace', appNamespace);
    doc.head.appendChild(x);
}
function supportsCustomElements(scriptElm) {
    return 'noModule' in scriptElm;
}
function supportsEsModules(win) {
    return win.customElements;
}
function supportsFetch(win) {
    return win.fetch;
}
function supportsCssVariables(win) {
    return (win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'));
}
function requiresSsrClient(doc) {
    return doc.documentElement.hasAttribute('data-ssr');
}


init(win, doc, appNamespace, publicPath, appCore, appCoreSsr, appCorePolyfilled, components);

})(window, document, "konami-listener","/build/konami-listener/","konami-listener.core.js","konami-listener.core.ssr.js","es5-build-disabled.js",[["konami-listener",["konami-listener",null],1,[["el",7],["inputs",5]],1,1,[["document:keydown","handleKey"]]]]);