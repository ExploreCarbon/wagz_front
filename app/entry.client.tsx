import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { CartProvider } from "@shopify/hydrogen-react";
import { WistiaProvider } from "@wistia/react-embeds";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function hydrate() {
  const client = new ApolloClient({
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    uri: "https://dev-wagz.pantheonsite.io/graphql", // the same uri in our entry.server file
  });
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <CartProvider>
          <WistiaProvider>
            <ApolloProvider client={client}>
              <RemixBrowser />
            </ApolloProvider>
          </WistiaProvider>
        </CartProvider>
      </StrictMode>
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
