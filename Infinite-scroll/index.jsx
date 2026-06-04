
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userList from './userList';

const query = QueryClient();

export const App = ()=>{
    <QueryClientProvider client={query}>
        <userList/>
    </QueryClientProvider>
}