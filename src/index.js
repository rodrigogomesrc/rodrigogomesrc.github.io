import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';


const GRAPHCMS_API = 'https://api-useast.graphcms.com/v1/ck4ztvlo7kgr401bqaqw6g2i1/master';

const client = new ApolloClient({

  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),

});

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {

  ReactDOM.hydrate(

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>, 
    rootElement
  );

} else {
    
  ReactDOM.render(

   <ApolloProvider client={client}>
      <App />
    </ApolloProvider>, 
    rootElement
  );
}
serviceWorker.unregister();
