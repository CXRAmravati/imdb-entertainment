import {Hydrate, QueryClient, QueryClientProvider } from "react-query";
import "styles/index.scss";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  console.log("dehydrate",pageProps)
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
       
      <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
