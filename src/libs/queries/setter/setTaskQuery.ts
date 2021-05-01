import { gql } from "@apollo/client";

const setTask = gql`
    mutation createTask() {
        id
        title 
        description 
        
    }
`