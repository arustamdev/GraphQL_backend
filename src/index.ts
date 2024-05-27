import express from "express";
import { createHandler } from "graphql-http/lib/use/express";

import schema from "./graphql/schema";
import root from "./graphql/query";

import initDB from "./db/init";

const app = express();

(async () => {
  await initDB();

  app.all(
    "/graphql",
    createHandler({
      schema: schema,
      rootValue: root,
    })
  );

  await app.listen(3000);

  console.log("Server is running...");
})();
