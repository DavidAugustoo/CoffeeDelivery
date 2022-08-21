import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderFormContainer } from "./components/CompleteOrderForm/styles";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
    return (
    <CompleteOrderContainer className="container">
        
        <CompleteOrderForm />
    </CompleteOrderContainer>
    )
}