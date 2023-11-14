import { ChainId } from "@aave/contract-helpers";
import * as markets from "@bgd-labs/aave-address-book";

export const chainConfig: {
  [key: number]: {
    providerRPC: string;
    uiPoolDataProviderAddress: string;
    lendingPoolAddressProvider: string;
    walletBalanceProvider: string;
  };
} = {
  //Aave v3 on Arbitrum
  [ChainId.arbitrum_one]: {
    providerRPC: "https://arbitrum.llamarpc.com",
    uiPoolDataProviderAddress: markets.AaveV3Arbitrum.UI_POOL_DATA_PROVIDER,
    lendingPoolAddressProvider: markets.AaveV3Arbitrum.POOL_ADDRESSES_PROVIDER,
    walletBalanceProvider: markets.AaveV3Arbitrum.WALLET_BALANCE_PROVIDER,
  },
  //Aave v3 on Mainnet
  [ChainId.mainnet]: {
  providerRPC: "https://eth.llamarpc.com",
  uiPoolDataProviderAddress: markets.AaveV3Ethereum.UI_POOL_DATA_PROVIDER,
  lendingPoolAddressProvider: markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
  walletBalanceProvider: markets.AaveV3Ethereum.WALLET_BALANCE_PROVIDER,
  },
  //Aave v3 on Gnosis - hardcoded chanId since it's not yet update in helper npm package
  [100]: {
  providerRPC: "https://gnosis.publicnode.com",
  uiPoolDataProviderAddress: markets.AaveV3Gnosis.UI_POOL_DATA_PROVIDER,
  lendingPoolAddressProvider: markets.AaveV3Gnosis.POOL_ADDRESSES_PROVIDER,
  walletBalanceProvider: markets.AaveV3Gnosis.WALLET_BALANCE_PROVIDER,
  },
  //Aave v3 on Base
  [ChainId.base]: {
  providerRPC: "https://base.llamarpc.com",
  uiPoolDataProviderAddress: markets.AaveV3Base.UI_POOL_DATA_PROVIDER,
  lendingPoolAddressProvider: markets.AaveV3Base.POOL_ADDRESSES_PROVIDER,
  walletBalanceProvider: markets.AaveV3Base.WALLET_BALANCE_PROVIDER,
  },
  //Aave v3 on Optimism
  [ChainId.optimism]: {
  providerRPC: "https://optimism.llamarpc.com",
  uiPoolDataProviderAddress: markets.AaveV3Optimism.UI_POOL_DATA_PROVIDER,
  lendingPoolAddressProvider: markets.AaveV3Optimism.POOL_ADDRESSES_PROVIDER,
  walletBalanceProvider: markets.AaveV3Optimism.WALLET_BALANCE_PROVIDER,
  },
  //Aave v3 on Polygon
  [ChainId.polygon]: {
    providerRPC: "https://polygon.llamarpc.com",
    uiPoolDataProviderAddress: markets.AaveV3Polygon.UI_POOL_DATA_PROVIDER,
    lendingPoolAddressProvider: markets.AaveV3Polygon.POOL_ADDRESSES_PROVIDER,
    walletBalanceProvider: markets.AaveV3Polygon.WALLET_BALANCE_PROVIDER,
  },

  // Unused Aave markets (for now)

  //Aave v3 on Metis (1088)
  [1088]: {
    providerRPC: "https://metis-pokt.nodies.app",
    uiPoolDataProviderAddress: markets.AaveV3Metis.UI_POOL_DATA_PROVIDER,
    lendingPoolAddressProvider: markets.AaveV3Metis.POOL_ADDRESSES_PROVIDER,
    walletBalanceProvider: markets.AaveV3Metis.WALLET_BALANCE_PROVIDER,
  },

  //Aave v3 on Fantom (250) -  deprecated
 /*
  [ChainId.fantom]: {
    providerRPC: "https://1rpc.io/ftm	",
    uiPoolDataProviderAddress: markets.AaveV3Fantom.UI_POOL_DATA_PROVIDER,
    lendingPoolAddressProvider: markets.AaveV3Fantom.POOL_ADDRESSES_PROVIDER,
    walletBalanceProvider: markets.AaveV3Fantom.WALLET_BALANCE_PROVIDER,
  },
  */

  //Aave v3 on Harmony (1666600000) - deprecated
   /*
  [ChainId.harmony]: {
    providerRPC: "https://1rpc.io/ftm	",
    uiPoolDataProviderAddress: markets.AaveV3Harmony.UI_POOL_DATA_PROVIDER,
    lendingPoolAddressProvider: markets.AaveV3Harmony.POOL_ADDRESSES_PROVIDER,
    walletBalanceProvider: markets.AaveV3Harmony.WALLET_BALANCE_PROVIDER,
  },
  */

  //Hardcoded the addresses of Spark protocol deployments
  //No Github 'address book' for Spark Protocol available
  /*
  [ChainId.mainnet]: {
    providerRPC: "https://eth.llamarpc.com",
    uiPoolDataProviderAddress: "0xF028c2F4b19898718fD0F77b9b881CbfdAa5e8Bb",
    lendingPoolAddressProvider: "0x02C3eA4e34C0cBd694D2adFa2c690EECbC1793eE",
    walletBalanceProvider: "0xd2AeF86F51F92E8e49F42454c287AE4879D1BeDc",
  },
  [100]: {
    providerRPC: "https://gnosis.publicnode.com",
    uiPoolDataProviderAddress: "0xF028c2F4b19898718fD0F77b9b881CbfdAa5e8Bb",
    lendingPoolAddressProvider: "0xA98DaCB3fC964A6A0d2ce3B77294241585EAbA6d",
    walletBalanceProvider: "0xd2AeF86F51F92E8e49F42454c287AE4879D1BeDc",
  },
  */


};

export function getTimestamp() {
  return Math.floor(Date.now() / 1000);
}
