import { useContext, useSyncExternalStore } from "react"
import { CartContext } from "../context/CartContext"

export function useCart() {
    const context = useContext(CartContext);
    return context;
}