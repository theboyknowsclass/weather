import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./resolvers/weatherResolvers";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// eslint-disable-next-line no-undef
const { console, process } = globalThis;

const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || "development";

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Add introspection and playground only in development
    introspection: NODE_ENV === "development",
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: Number(PORT) },
  });

  console.log(`🚀 Server ready at ${url}`);
  console.log(`Mode: ${NODE_ENV}`);
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
