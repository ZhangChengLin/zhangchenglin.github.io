import bowser from "./bowser/src/bowser.js";

const UA = window.navigator.userAgent;
const zcl_bowser = bowser.parse(UA);

export const is_desktop = zcl_bowser.platform.type === "desktop";
export const is_mobile = zcl_bowser.platform.type === "mobile";

export const is_iPhone = zcl_bowser.platform.model === "iPhone";
export const is_iPad = zcl_bowser.platform.model === "iPad";

export const is_Android = zcl_bowser.os.name === "Android";
export const is_iOS = zcl_bowser.os.name === "iOS";
