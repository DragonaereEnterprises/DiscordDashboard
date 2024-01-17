export async function fetchGuildsWithPerms(access_token: string) {
  let guilds = await fetch("https://discordapp.com/api/v10/users/@me", {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  })
  .then(async (guilds) => {
    console.log(guilds.status);

    return guilds;
  })
  .catch(console.error);

  // Figure out what guilds user has "Manage Server" or "Admininstrator" Permissions in
  // Then return then to session.user.guilds so they can be rendered nicely on the "servers" page

}

