import { PaymentMethodInput } from '../PaymentMethodInput/Index';
import { PaymentMethodOptionsContainer } from './styles';

export function PaymentMethodOptions() {
    return (
        <PaymentMethodOptionsContainer>
            <PaymentMethodInput />
            <PaymentMethodInput />
            <PaymentMethodInput />
        </PaymentMethodOptionsContainer>

    )
}