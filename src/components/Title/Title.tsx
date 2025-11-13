import { TitleContainer } from "./TitleStyles";

interface TitleProps {
    label: string;
}

export function Title({label}: TitleProps) {
    return (
        <TitleContainer>{label}</TitleContainer>
    )
}