import {gql} from "@apollo/client";

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