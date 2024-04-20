import { fetchGuildsWithBot } from "./fetchGuildsWithBot";
import { fetchGuildsWithPerms } from "./fetchGuildsWithPerms";

export async function fetchGuilds() {
  const userGuilds = await fetchGuildsWithPerms() as {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permissions: string;
    features: string[];
    bot: boolean;
  }[];
  const botGuilds = await fetchGuildsWithBot() as string[];

  userGuilds.forEach((guild) => {
    if (botGuilds.includes(guild.id)) {
      guild.bot = true;
    }
    else {
      guild.bot = false;
    }
  });

  userGuilds.sort((a, b) => { if (a.bot && !b.bot) { return -1; } else if (!a.bot && b.bot) { return 1; } else { return a.name.localeCompare(b.name); } });

  return userGuilds;
}