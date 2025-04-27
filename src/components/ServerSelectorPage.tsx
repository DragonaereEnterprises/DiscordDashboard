import Link from "next/link";
import Navbar from "./Navbar";
import PopupWrapper from "./PopupWrapper";
import Footer from "./Footer";
      
export default function ServerSelectorPage({ error, errorDescription, guilds }: {
  error: string | null;
  errorDescription: string | null;
  guilds: {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permissions: string;
    features: string[];
    bot: boolean;
  }[];
}) {
  return (
    <>
      <Navbar />
      {error && (
        <PopupWrapper
          title="Error"
          message={errorDescription || 'An unknown error occurred'}
          redirectPath={error === 'Bot Offline' ? '/' : undefined}
        />
      )}
      <main className="main">
        <div className="content">
          <div className="mainbody">
            <div className='subtitle'>
              <p>Servers</p>
            </div>
            <div className="servers">
              {guilds.map((guild: any) => (
                <div className='server' key={guild.id}>
                  {guild.bot ?
                    <Link href={`/servers/${guild.id}`}>
                      <div>
                        <div className='server-image'>
                          <img width="128px" height="128px" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name} />
                        </div>
                        <div className='server-name'>
                          <p>{guild.name}</p>
                        </div>
                      </div>
                    </Link>
                    :
                    <Link href={`https://discord.com/oauth2/authorize?client_id=931671325737635840&scope=bot&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fbot.dragonaere.com%2Fservers%2F&guild_id=${guild.id}&disable_guild_select=true`}>
                      <div key={guild.id}>
                        <div className='server-image grayscale'>
                          <img width="128px" height="128px" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name} />
                        </div>
                        <div className='server-name'>
                          <p>{guild.name}</p>
                        </div>
                      </div>
                    </Link>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}