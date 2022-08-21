import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({...props}: InputProps ) {
    return (
        <InputStyleContainer {...props} />
    )
}