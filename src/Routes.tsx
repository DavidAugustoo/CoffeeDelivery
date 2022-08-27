import { Route, Routes } from "react-router-dom";
import { DefaultTLayout } from "./layouts/DefaultLayout";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { HomePage } from "./pages/Home";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultTLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
                <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
            </Route>
        </Routes>
    )
}