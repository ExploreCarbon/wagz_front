import { createStorefrontClient } from "@shopify/hydrogen-react";

const client = createStorefrontClient({
	privateStorefrontToken: process.env.SHOPIFY_ADMIN,
	storeDomain: "wagz-store",
	storefrontApiVersion: "2022-10",
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
