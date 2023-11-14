# Data Service for Aave v3 Protocol BOS Components

This service aggregates data from the Aave v3 Protocol across multiple chains, providing a crucial link between the [Aave lending market](https://github.com/aave) and applications that wish to utilize its data.

This Data Service was initially developed to be used in conjugation with [Spark Nexus](https://github.com/Deepcryptodive/spark-nexus), but it can also be run stand-alone. Note that in the current `aave-nexus` branch, Spark Protocol is not supported - only Aave v3.

## Features

- Aggregates and serves market data from Aave v3
- Provides user-specific deposit, debt, and health factor information.
- Supports multiple blockchains (i.e. where Aave v3 is deployed)
- Is accesible as public API

## Getting Started

You can deploy this locally, or have it run on Cloudflare.
We have deployed it at `https://aave-nexus.pages.dev/`

### Prerequisites

Before running the service locally, ensure you have the following installed:
- Node.js
- Yarn package manager

## Installation (locally)

1. Clone the repository to your local machine.
2. Run `yarn install` to install dependencies.
3. Use `yarn start` to run the app server locally on `localhost:8080`.


## Deployment


Deploy the service to Cloudflare Pages with the `yarn deploy` command. 

Ensure you have the correct permissions and environmental variables set up.
i.e. in the [Cloudflare Dashboard]([url](https://dash.cloudflare.com/)), under `Workers & Pages` create a Page with name `aave-nexus` (or which name you defined in `package.json`). You **do not** need to link it to the Github repo. 

## Support Chains (chainID)

- Ethereum Mainnet (1)
- Optimism (10)
- Gnosis (100)
- Polygon (137)
- Metis (1088)
- Base (8453)
- Arbitrum (42161)
- Avalanche (43114)

## API endpoints

- markets

  - `GET` `/:chainId/markets`
  - Get all available Spark Lend markets
  - `chainId`: Spark Lend supported chain ID
 
    Example query: https://aave-nexus.pages.dev/100/markets
    
    Example local query: http://localhost:8080/100/markets

- deposits

  - `GET` `/:chainId/deposits/:user`
  - Get user deposits
  - `chainId`: Spark Lend supported chain ID
  - `user`: user address

  Example query: https://aave-nexus.pages.dev/100/deposits/0xca4aD39F872E89Ef23eABd5716363Fc22513E147
  
  Example local query: http://localhost:8080/100/deposits/0xca4aD39F872E89Ef23eABd5716363Fc22513E147

- debts

  - `GET` `/:chainId/debts/:user`
  - Get user debts
  - `chainId`: Spark Lend supported chain ID
  - `user`: user address
 
    Example query: https://aave-nexus.pages.dev/100/debts/0xca4aD39F872E89Ef23eABd5716363Fc22513E147
    
    Example local query: http://localhost:8080/100/debts/0xca4aD39F872E89Ef23eABd5716363Fc22513E147

- health factor
  - `GET` `/:chainId/health/:user`
  - Estimate user's new health factor after certain action
  - `chainId`: Spark Lend supported chain ID
  - `user`: user address
  - query params
    - `action`: `deposit` | `withdraw` | `borrow` | `repay`
    - `amount`: token USD value
    - `asset`: token address
   
    Example query: https://aave-nexus.pages.dev/100/health/0xca4aD39F872E89Ef23eABd5716363Fc22513E147?action=deposit&amount=10&asset=0xe91d153e0b41518a2ce8dd3d7944fa863463a97d
    
    Example local query: http://localhost:8080/100/health/0xca4aD39F872E89Ef23eABd5716363Fc22513E147?action=deposit&amount=10&asset=0xe91d153e0b41518a2ce8dd3d7944fa863463a97d



## Acknowledgments

A special thank you to the contributors and maintainers of the Aave Data Service, originally developed for the AAVE v3 NEAR BOS Component, upon which this project is based.

References:
https://github.com/corndao/aave-data-service

https://near.org/aave-v3.near/widget/AAVE

