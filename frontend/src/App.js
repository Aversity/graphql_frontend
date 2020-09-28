import React, {Component, useState} from "react";
import {gql, ApolloProvider, useQuery, ApolloClient, InMemoryCache, useMutation} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
  })

const GETLIST = gql `
    query getBlogs {
        getBlogs {
            id
            content
            title
            postedBy {
                name
            }
        }
    }
`

const LOGIN = gql `
    mutation login($email: String!, $password: String!) {
        login (
            email: $email
            password: $password
        ) {
            token
        }
    }
`



function Getlist() {
    const { loading, error, data } = useQuery(GETLIST);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error....</p>
    console.log(data);
       return data.getBlogs.map(({ id, content, title, postedBy }) => {           
            if (postedBy != null) {
                return (
                <div key={id}>
                    <p>
                        {title} with content {content} posted by {postedBy.name}
                    </p>
                </div>
                )
            } return (
                <div key={id}>
                    <p>
                        {title} with content {content} 
                    </p>
                </div>
            )

        })
}

function Login() {
    let input;
    const [todoInputMail, setTodoInputMail] = useState('')
    const [todoInputPassword, setTodoInputPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState('')
    const [login, { loading: mutationLoading, error: mutationError, data: mutationData}] = useMutation(LOGIN)

    if(mutationLoading) return <p>Loading</p>
    if(mutationError) return <p>Wrong Password please try again</p>
    if(mutationData != null) return <p>Your logged in</p>

        return(
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    login({ variables: {email: todoInputMail, password: todoInputPassword}});
                }}>
                    <input className="input"
                            value={todoInputMail}
                            onChange={e=> (setTodoInputMail(e.target.value))} />
                    <input className="input"
                            type="password"
                            value={todoInputPassword}
                            onChange={e=> (setTodoInputPassword(e.target.value))} />
                    <button type="submit">Login</button>
                </form>
            </div>
        );  
}

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
                    <h2>Ich hoffe hier kommt jetzt was</h2>
                    <Getlist />
                </div>
                <div>
                    <h2>Hier soll ein Login geschehen</h2>
                    <div>
                        <Login />
                    </div>
                </div>
            </ApolloProvider>
        )
    }
}