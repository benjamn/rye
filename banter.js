var Selection = require("tricks/dom/selection").Selection,
    whenReady = require("tricks/dom/ready").whenReady,
    addEvent = require("tricks/dom/events").addEvent,
    splat = location.href.split("#"),
    styles = {
        background: "lightgreen",
        padding: "2px 0 3px 0"
    };
    
if (splat.length > 1)
    whenReady(function() {
        var sel = Selection.fromString(decodeURIComponent(splat.pop()));
        if (sel) {
            sel.wrap(styles);
            setTimeout(function() {
                sel.scrollTo(10);
            }, 10);
        }
    });

addEvent(document, "mouseup", function() {
    var sel = Selection.getCurrent();
    if (sel) {
        var splat = location.href.split("#");
        if (splat.length > 1)
            splat.pop();
        splat.push(encodeURIComponent(sel.toString()));
        location = splat.join("#");
        sel.wrap(styles, true);
    }
});
