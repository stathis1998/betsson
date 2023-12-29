import { useState, useEffect } from "react";

export function useDebounce(initialValue: string, debounceTime: number = 500) {
  const [value, setValue] = useState<string>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<string>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceTime);

    return () => clearTimeout(timer);
  }, [value, debounceTime]);

  return { debouncedValue, setValue };
}
