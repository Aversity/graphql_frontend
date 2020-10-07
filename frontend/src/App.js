import React, {Component} from "react";
import {ApolloProvider,ApolloClient, InMemoryCache } from "@apollo/client";
import Login from "./Login"

//Der Client gibt die Verbindung zur API an und die gerenderte Komponente wird wie bei Redux gewrapped
//Der InMemoryCache ist wie der Redux Store, hier aber nicht weiter genutzt, weil keine Zeit

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