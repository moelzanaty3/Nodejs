require("source-map-support").install(),exports.id=0,exports.modules={"./src/index.js":function(n,e,r){"use strict";r.r(e);var o=r("express"),s=r.n(o),t=s()(),u=s.a.Router();u.get("/",function(n,e){return e.json({api:!0})}),u.get("*",function(n,e){return e.json({apiAll:!0})}),t.use("/api",u),t.get("/",function(n,e){return e.json({backslash:!0})}),t.all("*",function(n,e){return e.json({all:"hello *"})});t.listen(3e3,"127.0.0.1",function(){console.log("now your server run @ port 3000")})}};
//# sourceMappingURL=0.ba78e58d2705f1414cf4.hot-update.js.map