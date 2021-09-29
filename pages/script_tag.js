import Shopify from '@shopify/shopify-api';

const client = new Shopify.Clients.Rest('your-development-store.myshopify.com', accessToken);
const data = await client.get({
    path: 'script_tags',
});
