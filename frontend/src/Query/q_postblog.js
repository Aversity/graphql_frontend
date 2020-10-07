import {gql} from "@apollo/client";

//query für das erstellen eines Blogs, useQuery für GET, useMutation für POST und UPDATE

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