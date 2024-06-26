import * as anchor from "@coral-xyz/anchor";
import { program } from "@coral-xyz/anchor/dist/cjs/native/system";

// List of data feed account addresses: https://docs.chain.link/data-feeds/price-feeds/

const CHAINLINK_FEED = "99B2bTijsU6f1GCT73HmdR7HCFFjGMBcPZY6jZ96ynrR"; // SOL -> USD @devnet
const CHAINLINK_PROGRAM_ID = "HEvSKofvBgfaexv23kMabbYqxasxU3mQ4ibBMEmJWHny";
describe("chainlink_solana", () => {
  const provider = anchor.Provider.env()
  anchor.setProvider(provider)
  const program = anchor.workspace.chainlink_solana
});
