import { TitleText } from "../../../../components/Typograph";
import { FormSectionContainer } from "../../styles";
import { CompleteOrderFormContainer } from "./styles";
import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompleteOrderForm() {
    const { colors } = useTheme();

    return (
        <CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete o seu Pedido
            </TitleText>

            <FormSectionContainer>
                <SectionTitle
                    title="Endereço de entrega"
                    subtitle="Informe o endereço onde deseja receber seu pedido"
                    icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
                />

                <AddressForm />
            </FormSectionContainer>
            <FormSectionContainer>
                <SectionTitle
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
                />

                <PaymentMethodOptions />
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    )
}