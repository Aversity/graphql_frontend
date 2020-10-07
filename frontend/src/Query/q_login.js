import {gql} from "@apollo/client";

//zählt als eine Mutation, weil es Daten hinschickt aber nicht in die DB einträgt deswegen ist es ein POST, schickt email und passwort hin und bekommt bei Übereinstimmung der Daten
//die User ID zurück

export const LOGIN = gql `
    mutation login($email: String!, $password: String!) {
        login (
            email: $email
            password: $password
        ) {
            user {
                id
            }
        }
    }
`
