import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Returns `serverValue` while prerendering and during hydration, then the
// browser's value. Use it for anything that depends on the viewer's clock or
// time zone, so the prerendered HTML and the first client render always match.
export function useClientValue<T>(getClientValue: () => T, serverValue: T): T {
  return useSyncExternalStore(subscribe, getClientValue, () => serverValue);
}
