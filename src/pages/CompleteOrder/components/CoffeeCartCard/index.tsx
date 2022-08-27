import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typograph";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { Trash } from 'phosphor-react';
import { CartItem } from "../../../../context/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
    coffee: CartItem;
}

export function CoffeeCartCard({coffee}: CoffeeCartCardProps) {
    const { changeCartItem, removeCartItem } = useCart();

    function handleIncrease() {
        changeCartItem(coffee.id, 'increase');
    }

    function handleDecrease() {
        changeCartItem(coffee.id, 'decrease');
    }

    function handleRemove() {
        removeCartItem(coffee.id);
    }


    const coffeeTotal = coffee.price * coffee.quantity;
    const formattedPrice = formatMoney(coffeeTotal);
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`} />
                <div>
                    <RegularText color="subtitle">{coffee.name}</RegularText>
                    <ActionsContainer>
                        <QuantityInput 
                            size="small" 
                            quantity={coffee.quantity} 
                            onIncrease={handleIncrease} 
                            onDecrease={handleDecrease} 
                        />
                        <RemoveButton onClick={handleRemove} >
                            <Trash size={16} /> 
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ {formattedPrice}</p>
        </CoffeeCartCardContainer>
    )
}