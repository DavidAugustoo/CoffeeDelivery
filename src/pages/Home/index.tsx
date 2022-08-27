import { useCart } from "../../hooks/useCart";
import { Intro } from "./components/Intro";
import { OurCoffees } from './components/OurCoffes'
import { HomeContainer } from "./styles";

export function HomePage() {
    return (
        <HomeContainer>
            <Intro />
            <OurCoffees />
        </HomeContainer>
    )
}