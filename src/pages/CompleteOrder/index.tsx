import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderFormContainer } from "./components/CompleteOrderForm/styles";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
    return (
    <CompleteOrderContainer className="container">
        <CompleteOrderForm />
        <SelectedCoffees />
    </CompleteOrderContainer>
    )
}