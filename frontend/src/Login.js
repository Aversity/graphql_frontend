import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import { LOGIN } from "./Query/q_login";
import Getlist from "./Getlist";
import PostBlog from "./PostBlog";

//es werden Hooks genutzt, weil es mit den Apollo Hooks dann unkomplizierter ist
//die useState Hooks geben an wie der leere State heißt und dann die Funktion um den State zu ändern -> todoInputMail = Statename | setTodoInputMail = Funktion
//useMutation gibt als erstes die Funktion an, dann die Konstanten wo die Rückgabe der Query reingeschrieben wird
//im useMutation Hook gibt es wird die Query angegeben und die errorPolicy ist da, damit die App bei einem Fehler z.B. falsches Login nicht gleich crashed 

export default function Login() {
    const [todoInputMail, setTodoInputMail] = useState('')
    const [todoInputPassword, setTodoInputPassword] = useState('')
    const [login, { loading: mutationLoading, error: mutationError, data: mutationData}] = useMutation(LOGIN, { errorPolicy: 'all'})


    if(mutationLoading) return <p>Loading</p>
    if(mutationError) {
        return(
        <div>
           <div> 
                <p>{mutationError.message} try again</p>
           </div>
           <div>
           <form onSubmit={e => {
                    e.preventDefault();
                    login({ variables: {email: todoInputMail, password: todoInputPassword}});
                }}> <label>E-Mail:</label><br />
                    <input className="input"
                            value={todoInputMail}
                            onChange={e=> (setTodoInputMail(e.target.value))} /><br/>
                    <label>Password</label><br />
                    <input className="input"
                            type="password"
                            value={todoInputPassword}
                            onChange={e=> (setTodoInputPassword(e.target.value))} /><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
           </div>
        )     
    }
    if(mutationData != null) {
        const token = mutationData.login
        return (
            <div> 
                <Getlist />
                <PostBlog {...token} />
            </div>
        ) 
        
    }

        return(
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    login({ variables: {email: todoInputMail, password: todoInputPassword}});
                }}>
                    <label>E-Mail:</label><br />
                    <input className="input"
                            value={todoInputMail}
                            onChange={e=> (setTodoInputMail(e.target.value))} /><br/>
                    <label>Password</label><br />
                    <input className="input"
                            type="password"
                            value={todoInputPassword}
                            onChange={e=> (setTodoInputPassword(e.target.value))} /><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );  
}