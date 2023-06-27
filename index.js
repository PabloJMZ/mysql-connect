const Database = require("./src/database/connection");

async function main() {
  const db = new Database();

  await db.connect({
    host: "localhost",
    user: "root",
    password: "your-password",
    database: "your-database",
  });
  // write the querys in your terminal
  process.stdin.on('data', (query)=>{
    db.query(query.toString());
  });
}

main();
