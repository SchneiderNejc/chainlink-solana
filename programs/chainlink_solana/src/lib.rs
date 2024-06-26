use anchor_lang::prelude::*;
use chainlink_solana as chainlink

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod chainlink_solana {
    use super::*;
    // Fetch the latest data from chainlink data feed
    public fn execute(ctx: Context<Execute>) -> ProgramResult{
        let round = chainlink::latest_round_data(
            ctx.accounts.chainlink_program.to_account_info(),
            ctx.accounts.chainlink_feed.to_account_info())?;
    }
}

