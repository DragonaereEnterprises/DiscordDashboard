import { auth } from "./auth";

export async function fetchGuildsWithPerms() {
  const session = await auth();

  if (!session) {
    return false;
  }

  return await fetch("https://discord.com/api/v10/users/@me/guilds", {
    headers: {
      Authorization: "Bearer " + session.user.token,
      "Content-Type": "application/json"
    },
    next: { revalidate: 300 }
  })
  .then(function(response){
    return response.json();
  }, function(error) {
    // Called when Discord responds with an error
    console.error(error);
    return false;
  })
  .then(function(guildsJson) {
    return guildsJson.filter((guild: any) => {
      const ADMINISTRATOR = 0x00000008;
      if ((guild.permissions & ADMINISTRATOR) === ADMINISTRATOR || guild.owner === true) {
        return guild;
      }
    });
  }, function(error) {
    // Called when Database responds with an error
    console.error(error);
    return false;
  })
  .then(function(guilds) {
    return guilds.sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name))
  });
}