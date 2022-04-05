import { gql } from 'apollo-angular';

let queries = {
    SIGN_UP: gql`
    mutation createUser(
            $username: String!,
            $firstname: String!,
            $lastname: String!,
            $password: String!,
            $email: String!,
            $type: String!
        ) {
        createUser(
            username: $username,
            firstname: $firstname,
            lastname: $lastname,
            password: $password,
            email: $email,
            type: $type
        ){
            id
            username
            firstname
            lastname
            password
            email
            type
        }
    }`,
    LOG_IN: gql`
        query LogIn($username: String!, $password: String!){
            login(
                username: $username,
                password: $password,
            ){
                secret,
                type
            }
        }`,
    CREATE_LISTING: gql`
        mutation createListing(
            $listing_id: String!,
            $listing_title: String!,
            $description: String!,
            $street: String!,
            $city: String!,
            $postal_code: String!,
            $price: Float!,
            $email: String!,
            $username: String!,
            $secret: String!
        ) {
            createListing(
                listing_id: $listing_id,
                listing_title: $listing_title,
                description: $description,
                street: $street,
                city: $city,
                postal_code: $postal_code,
                price: $price,
                email: $email,
                username: $username,
                secret: $secret
            )
            {
                id
            }
        }
    `,
    GET_ALL_ADMIN_LISTINGS: gql`
        query getAllAdminListings {
            getAllAdminListings {
                id
                listing_id
                listing_title
                description
                street
                city
                postal_code
                price
                email
                username
            }
        }
    `,
    CREATE_BOOKING: gql`
        mutation createBooking(
            $listing_id: String!,
            $booking_id: String!,
            $booking_date: Date!,
            $booking_start: Date!,
            $booking_end: Date!,
            $username: String!,
            $secret: String!
        ) {
            createBooking(
                listing_id: $listing_id,
                booking_id: $booking_id,
                booking_date: $booking_date,
                booking_start: $booking_start,
                booking_end: $booking_end,
                username: $username,
                secret: $secret
            )
            {
                id
            }
        }
    `,
    GET_ALL_USER_BOOKING: gql`
    query getAllUserBooking(
        $username: String!,
        $secret: String!
    ) {
            getAllUserBooking(
                username: $username,
                secret: $secret
            ) {
                listing_id
                booking_id
                booking_date
                booking_start
                booking_end
                username
            }
        }
    `
}

export default queries;