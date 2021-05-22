"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutContext = exports.LayoutProvider = void 0;
var React = require("react");
var LayoutContext = React.createContext({});
function LayoutProvider(_a) {
    var children = _a.children;
    var _b = React.useState(false), isContactVisible = _b[0], setContactVisibility = _b[1];
    var _c = React.useState(false), isSuggestAppVisible = _c[0], setSuggestAppVisibility = _c[1];
    return (<LayoutContext.Provider value={{
        forms: {
            contact: {
                isVisible: isContactVisible,
                toggle: function () { return setContactVisibility(!isContactVisible); }
            },
            suggestApp: {
                isVisible: isSuggestAppVisible,
                toggle: function () { return setSuggestAppVisibility(!isSuggestAppVisible); }
            }
        }
    }}>
      {children}
    </LayoutContext.Provider>);
}
exports.LayoutProvider = LayoutProvider;
function useLayoutContext() {
    var context = React.useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayoutContext must be used within LayoutProvider");
    }
    return context;
}
exports.useLayoutContext = useLayoutContext;
