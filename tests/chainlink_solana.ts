import * as anchor from "@coral-xyz/anchor";
import { program } from "@coral-xyz/anchor/dist/cjs/native/system";

// List of data feed account addresses: https://docs.chain.link/data-feeds/price-feeds/

const CHAINLINK_FEED = "99B2bTijsU6f1GCT73HmdR7HCFFjGMBcPZY6jZ96ynrR"; // SOL -> USD @devnet
const CHAINLINK_PROGRAM_ID = "HEvSKofvBgfaexv23kMabbYqxasxU3mQ4ibBMEmJWHny";
describe("chainlink_solana", () => {
  const provider = anchor.Provider.env()
  anchor.setProvider(provider)
  const program = anchor.workspace.chainlink_solana
  it('Queries SOL/USD Price Feed', async() => {
    const resultAccount = anchor.web3.Keypair.generate()
    await program.rpc.execute({
      accounts: {
        resultAccount: resultAccount.publicKey,
        user: anchor.getProvider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
        chainlinkFeed: CHAINLINK_FEED,
        chainlinkProgram: CHAINLINK_PROGRAM_ID
      },
      signers: [resultAccount],

    });
    const latestPrice = await program.account.resultAccount.fetch(resultAccount.publicKey);
    console.log("Price is: " + latestPrice.value / 100_000_000)
  })
});
