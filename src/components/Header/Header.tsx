import { ReactNode } from "react"

import { HeaderContainer } from "./HeaderStyles"

interface HeaderProps {
    children?: ReactNode;
}

export function Header({children}: HeaderProps) {
    return (
        <HeaderContainer>
            {children}
        </HeaderContainer>
    )
}