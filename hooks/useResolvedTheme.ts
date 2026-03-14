import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function useResolvedTheme() {
  const { resolvedTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return {
    theme: isMounted ? resolvedTheme : "light",
    isMounted,
    isDark: isMounted && resolvedTheme === "dark",
    isLight: isMounted && resolvedTheme === "light",
  };
}
