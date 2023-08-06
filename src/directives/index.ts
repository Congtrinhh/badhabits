import { vAutoFocus } from "./v-auto-focus";
import { vFontSize } from "./v-font-size";

export function registerGlobalDirectives(app: any) {
  app.directive("font-size", vFontSize);
  app.directive("auto-focus", vAutoFocus);
}
