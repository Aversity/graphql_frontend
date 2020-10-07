import {gql} from "@apollo/client";

//Query für eine einfache GET anweisung

export const GETLIST = gql `
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