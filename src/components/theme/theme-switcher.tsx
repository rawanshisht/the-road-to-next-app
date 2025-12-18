"use client"
import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    return (
        <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {
                theme === 'light' ? <LucideMoon /> : <LucideSun />
            }
            <span className="sr-only">Toggle theme</span>
        </Button>

    )
}
export { ThemeSwitcher }