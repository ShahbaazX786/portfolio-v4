import { ThemeType } from '@/lib/types';

const useExistingTheme = () => {
    const checkExistingThemeInLocal = typeof window !== "undefined" && window.localStorage;
    const storedTheme: ThemeType = checkExistingThemeInLocal ? (localStorage.getItem("theme") as ThemeType) || "light" : "light";
    return storedTheme;
}

export default useExistingTheme;