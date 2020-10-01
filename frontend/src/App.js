import React, {Component} from "react";
import {ApolloProvider,ApolloClient, InMemoryCache } from "@apollo/client";
import Login from "./Login"

export const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
  })


export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {

        return(
            <ApolloProvider client={client}>
                <div>
                    <h2>Login</h2>
                    <div>
                        <Login />
                    </div>
                </div>
            </ApolloProvider>
        )
    }
}