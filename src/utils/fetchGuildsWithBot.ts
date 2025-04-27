import { gql } from "@apollo/client";
import { getClient } from "@/libs/apolloClient";

const query = gql`
  query getBotGuilds {
    botguilds {
      id
    }
  }
`;

export async function fetchGuildsWithBot() {
  const client = getClient();
  const { data } = await client.query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 30 },
      },
    }
  });

  const guilds = data.botguilds.map((data: any) => data.id);

  return guilds[0];
}