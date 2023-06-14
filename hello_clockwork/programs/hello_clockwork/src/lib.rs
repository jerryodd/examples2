use anchor_lang::prelude::*;

declare_id!("FhDaNeJmbrgniEtPkbbfF4crqQxsSc3mRscjJdzA1crJ");

#[program]
pub mod hello_clockwork {
    use super::*;

    pub fn hello(_ctx: Context<Hello>, segment: String) -> Result<()> {
        msg!(
            "Hello, {} with <3 from staccoverflow! ts: {}",
            segment,
            Clock::get().unwrap().unix_timestamp
        );

        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(name: String)]
pub struct Hello {}
// Replace the above by this to enforce that the ix can only be run from a given thread
// #[derive(Accounts)]
// pub struct Hello<'info> {
//     #[account(address = thread.pubkey(), signer)]
//     pub thread: Account<'info, Thread>,
// }
