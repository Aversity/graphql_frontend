import {gql} from "@apollo/client";

export const POSTBLOG = gql `
    mutation postblog($title: String!, $content: String!, $userId: Int!) {
        postBlog (
            title: $title
            content: $content
            userId: $userId
        ) {
            id
            postedBy {name}
        }
    }
`