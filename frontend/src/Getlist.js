import React from "react";
import { useQuery } from "@apollo/client";
import { GETLIST } from "./Query/q_getlist"

//Die Liste wird über den useQuery Hook ausgelesen und dann gemapped und dargestellt

export default function Getlist(token) {
    const { loading, error, data } = useQuery(GETLIST);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error....</p>
       return data.getBlogs.map(({ id, content, title, postedBy }) => {           
            if (postedBy != null) {
                return (
                <div key={id}>
                    <p>
                        {title} with content {content} posted by {postedBy.name}
                    </p><br />
                    <div>
                        
                    </div>
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
