import { TitleText } from "../../../../components/Typograph";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./CorfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>  
            <TitleText size="xs" color="subtitle">
                Cofés selecionados
            </TitleText>

            <DetailsContainer>
                <CoffeeCartCard />
                <CoffeeCartCard />
                <CoffeeCartCard />

                <ConfirmationSection />
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}