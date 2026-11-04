import { Read } from "./component/Read";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Update } from "./component/Update";


const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Update/>
      <Read />
    </QueryClientProvider>
  );
}

export default App;
