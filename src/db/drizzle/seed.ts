import { db } from "@/db/drizzle/db";
import { reset } from "drizzle-seed";
import * as schemas from "./schemas";

async function main() {
  console.log("seeding started !");

  console.log("\n===reseting database !===");
  await reset(db, schemas);
}

main();
