# RENT IT UP - Renting NFT Marketplace

Rent It Up is a decentralized marketplace for renting non-fungible tokens (NFTs) built fully on-chain on Flow Blockchain. It allows users to browse, rent, and list NFTs for rent. The platform aims to provide a seamless experience for both NFT owners and renters, enabling them to engage in the emerging trend of NFT renting.

## Features

- Browse and search for available NFTs for rent
- Rent NFTs for a specified duration
- List your own NFTs for rent
- Smart contract integration for secure and transparent transactions
- User-friendly interface for seamless navigation

## Technologies Used

- Cadence: Smart contract development
- Flow Network: Blockchain network for NFT transactions
- Filecoin(web3.storage): Decentralized storage for NFT metadata
- Next.js: Server-side rendering framework
- Chakra UI: UI component library


## Getting Started

To get started with Rent It Up, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/rent-it-up.git`
2. Install dependencies: `yarn install`
3. Start the development server: `npm run dev`
4. Access the application at: `http://localhost:3000`

## Contributing

Contributions are welcome! If you'd like to contribute to Rent It Up, please follow these guidelines:

1. Fork the repository
2. Create a new branch for your feature or bug fix: `git checkout -b my-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push the changes to your forked repository: `git push origin my-feature`
5. Submit a pull request detailing your changes

### Configuration

This app uses [dotenv](https://github.com/motdotla/dotenv) for configuration, so you can set your app's environment variables by creating a `.env` file in this directory.

See [.env.example](./.env.example) for an example of how to configure these environment variables.


### Authentication

This app demonstrates three forms of authentication in the Niftory API.

#### User authentication

We use [NextAuth](https://next-auth.js.org/) to manage user sessions in this app.

[Our configuration](pages/api/auth/[...nextauth].ts) uses Niftory as the only OAuth provider and saves the user's Niftory token in the session.

The browser's [GraphQL client](src/components/GraphQLClientProvider.tsx) then includes that token in every request to the Niftory API as a bearer token in the `Authorization` header

#### App Credentials authentication using NextJS API routes or in your backend.

If you want to make requests using the app's credentials instead of the User's credentials for performing admin only tasks then that can be done using the [Serverside GraphQL Client](src/graphql/getClientForServer.ts).

Note - This client should not be used in the frontend, it should either be used in the backend of your app or in the [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction).


## License

Rent It Up is released under the [MIT License](https://opensource.org/licenses/MIT).
