import { fetchGuildsWithBot } from "./fetchGuildsWithBot";
import { fetchGuildsWithPerms } from "./fetchGuildsWithPerms";

export async function fetchGuilds() {
  const userGuilds = await fetchGuildsWithPerms();
  const botGuilds = await fetchGuildsWithBot();

}