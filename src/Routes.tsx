import { Route, Routes } from "react-router-dom";
import { DefaultTLayout } from "./layouts/DefaultLayout";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { HomePage } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultTLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
            </Route>
        </Routes>
    )
}