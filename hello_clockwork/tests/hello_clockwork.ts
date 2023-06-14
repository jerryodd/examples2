import { expect } from "chai";
import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { HelloClockwork } from "../target/types/hello_clockwork";
import { print_address, print_thread, print_tx, stream_program_logs } from "@utils";
import fs from 'fs'
// 0️⃣  Import the Clockwork SDK.
import { ClockworkProvider } from "@clockwork-xyz/sdk";

describe("hello_clockwork", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const wallet = provider.wallet;
  const program = anchor.workspace.HelloClockwork as Program<HelloClockwork>;
  const clockworkProvider = ClockworkProvider.fromAnchorProvider(provider);

  print_address("🔗 HelloClockwork program", program.programId.toString());

  it("It says hello", async () => {
    let file = fs.readFileSync('/workspaces/sea-nn/test.mp4', {encoding: "base64"})
    console.log(file.length)
    let count = 0;

let arrofarrs: any[][] = []
    for (var c = 0; c <= file.length / (1024-138); c++){
      arrofarrs.push([""])
      for (var i = 0; i < (1024-138); i++){
        if (file[count] != undefined){
          // @ts-ignore
        arrofarrs[c]+=( file[count] )
        count++
        }
      }
    }

    for (var c = 0; c <= file.length / (1024-138); c++){
// @ts-ignore
      
     program.methods.hello(arrofarrs[c]).rpc();
    }
    
  });

});

