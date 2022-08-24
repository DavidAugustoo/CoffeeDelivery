import { TitleText } from "../../../../components/Typograph";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>  
            <TitleText size="xs" color="subtitle">
                Cofés selecionados
            </TitleText>

            <DetailsContainer>
                <CoffeeCartCard />
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}