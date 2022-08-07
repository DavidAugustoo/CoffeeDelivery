import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export function DefaultTLayout() {
    return (
        <LayoutContainer>
            <Outlet />
        </LayoutContainer>
    )
}