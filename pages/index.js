import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Page, Layout, EmptyState, Button, Card } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from './components/ResourceList';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

// const url_ = `https://05ce07551a14094626d7611a5aa64254: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@shopyfyliquid.myshopify.com/admin/api/2021-07/script_tags.json`;
const url_ = `https://shopyfyliquid.myshopify.com/admin/api/2021-07/script_tags.json`;
let options = {
  method: 'post',
  script_tag: {
    event: 'onload',
    src: 'https://unpkg.com/vue@next'
  }
}
fetch(url_, options)
  .then(response => response.json())
  .then(result => response.text())


// body: JSON.stringify({
//   "script_tag": {
//     "event": "onload"
//     , "src": "https://21c3ed9616a8.ngrok.io/scripttag.js"
//     , "display_scope": "all"
//   }
// })

// import Shopify, { DataType } from '@shopify/shopify-api';

// const client = new Shopify.Clients.Rest('shopyfyliquid.myshopify.com', accessToken);
// const data = client.post({
//   path: 'script_tags',
//   body: { "script_tag": { "event": "onload", "src": "https:\/\/djavaskripped.org\/fancy.js" } },
//   type: DataType.JSON,
// });





class Index extends React.Component {
  state = { open: false };
  render() {
    // A constant that defines your app's empty state
    const emptyState = !store.get('ids');
    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: 'Select products',
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        {emptyState ? ( // Controls the layout of your app's empty state
          <Layout>

            <p id='tag_script'>test</p>

            <EmptyState
              heading="Discount your products temporarily"
              action={{
                content: 'Select products',
                onAction: () => this.setState({ open: true }),
              }}
              image={img}
            >
              <p>Select products to change their price temporarily.</p>
            </EmptyState>
          </Layout>
        ) : (
          // Uses the new resource list that retrieves products by IDs
          <ResourceListWithProducts />
        )}
      </Page>
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    store.set('ids', idsFromResources);
  };
}

export default Index;


