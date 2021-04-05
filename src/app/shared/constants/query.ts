import { gql } from "apollo-angular";

export const GET_CHARACTERS = gql`
    query($page: Int!, $filter: FilterCharacter){
        characters(page: $page, filter: $filter) {
            info {
                count
            }
            results {
                name
                image
                status
                species
                location{
                    name
                }
                episode{
                    name
                }
            }
        }
    }
`;