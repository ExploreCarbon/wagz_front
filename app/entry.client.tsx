import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { CartProvider } from "@shopify/hydrogen-react";
import { Provider } from "react-wrap-balancer";

function hydrate() {
	startTransition(() => {
		hydrateRoot(
			document,
			<StrictMode>
				<Provider>
					<CartProvider>
						<RemixBrowser />
					</CartProvider>
				</Provider>
			</StrictMode>,
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
