import { useState, useEffect } from "react";
import storage from "local-storage-fallback";

export default function useTheme(
  defaultTheme = { mode: "light", textZoom: "normal" }
) {
  const getInitialThem = () => {
    const savedTheme = storage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
  };

  const [theme, _setTheme] = useState(getInitialThem);

  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme)
  };
}
