import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { POSTBLOG } from "./Query/q_postblog";

export default function PostBlog(logindata) {
    const [inputTitle, setInputTitle] = useState('')
    const [inputContent, setInputContent] = useState('')
    const [postblog, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(POSTBLOG, { errorPolicy: 'all'})
    console.log(logindata);
    if(mutationLoading) return <p>Loading</p>
    if(mutationError) return <p>Error</p>

    return(
        <div>
        <form onSubmit={e => {
            e.preventDefault();
            postblog({ variables: {title: inputTitle, content: inputContent, userId: parseInt(logindata.user.id)}});
        }}>
            <label>E-Mail:</label><br />
            <input className="input"
                    value={inputTitle}
                    onChange={e=> (setInputTitle(e.target.value))} /><br/>
            <label>Password</label><br />
            <input className="input"
                    type="input"
                    value={inputContent}
                    onChange={e=> (setInputContent(e.target.value))} /><br/>
            <button type="submit">Post Blog</button>
        </form>
    </div>
    )
}