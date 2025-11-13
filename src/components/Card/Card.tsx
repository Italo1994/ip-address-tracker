import { CardContainer, CardDescriptionContainer, CardHeaderContainer } from "./CardStyles";
import { ReactNode } from "react";

interface CardProps {
    children?: ReactNode;
}

export function Card({children}: CardProps) {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}

export function CardTitle({children}: CardProps) {
    return (
        <CardHeaderContainer>
            {children}
        </CardHeaderContainer>
    )
}

export function CardDescription({children}: CardProps) {
    return (
        <CardDescriptionContainer>
            {children}
        </CardDescriptionContainer>
    )
}