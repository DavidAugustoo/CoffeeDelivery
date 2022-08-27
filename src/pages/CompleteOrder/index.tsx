import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderFormContainer } from "./components/CompleteOrderForm/styles";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money"
}

const confirmOrderFormValidatorSchema = zod.object({
    cep: zod.string().min(1, "Informe o cep"),
    street: zod.string().min(1, "Informe a Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe o UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return {message: "Informe o método de pagamento"}
        }
    })
});

export type OrderData = zod.infer<typeof confirmOrderFormValidatorSchema>

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidatorSchema)
    });

    const {handleSubmit} = confirmOrderForm;

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        console.log(data)
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
                <CompleteOrderForm />
                <SelectedCoffees />
            </CompleteOrderContainer>
        </FormProvider>
    )
}