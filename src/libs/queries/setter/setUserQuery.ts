import { gql } from "@apollo/client";

const setUserQuery = gql`
    mutation {
        createUser(
            
        ) {
            id 
            password

        }
    }
`