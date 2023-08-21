'use client';

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type ProvidersType = {
    children: ReactNode
}

const Providers: React.FC<ProvidersType> = ({ children }) => {
    return (
        <ThemeProvider attribute="class">{children}</ThemeProvider>
    )
}

export default Providers;