import { gql } from "@apollo/client";
import { getClient } from "@/libs/apolloClient";
import { RedirectType } from "next/navigation";

const query = gql`
  query getBotGuilds {
    botguilds {
      id
    }
  }
`;

export async function fetchGuildsWithBot() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 30 },
      },
    }
  })

  const guilds = data.botguilds.map((data: any) => data.id);

  return guilds[0];
}