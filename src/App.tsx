import CouponsOverviewPage from "./pages/coupons/CouponsOverviewPage";
import DefaultLayout from "./layouts/DefaultLayout";
import "normalize.css";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

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
            <DefaultLayout>
                <CouponsOverviewPage />
            </DefaultLayout>
        </QueryClientProvider>
    );
}

export default App;
