import CouponsOverviewPage from "./pages/coupons/CouponsOverviewPage";
import DefaultLayout from "./layouts/DefaultLayout";
import "normalize.css";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <DefaultLayout>
                    <Routes>
                        <Route
                            path="/coupons"
                            element={<CouponsOverviewPage />}
                        />
                        <Route path="/" element={<CouponsOverviewPage />} />
                    </Routes>
                </DefaultLayout>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
