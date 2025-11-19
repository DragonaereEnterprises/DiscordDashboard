import { gql } from "@apollo/client";
import { getClient } from "@/libs/apolloClient";

const query = gql`
  query getBotGuilds {
    botguilds {
      id
    }
  }
`;

let data: dataProps

export async function fetchGuildsWithBot() {
  let isBotOffline = false;
  try {
    const res = await getClient().query({
      query,
      context: {
        fetchOptions: {
          next: { revalidate: 30 },
        },
      },
    });
    data = res.data as dataProps;
  } catch (error) {
    console.error("Bot data error:", error);
    isBotOffline = true;
  }

  const guilds = data.botguilds.map((data: any) => data.id);

  return guilds[0];
}