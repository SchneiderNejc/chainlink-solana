anchor init chainlink_solana
-init new project

solana-keygen new -o id.json
-generate new wallet

solana airdrop 2 EK2GBtQ11PYpcoVUqQEA19VgU4NYektyd7SjbZawdBRt --url devnet
-airdrop solana

cargo add solana-program@=1.14.18
-fix error: package solana-program v1.18.0 cannot be built because it requires rustc 1.72.0 or newer, while the currently active rustc version is 1.68.0-dev
