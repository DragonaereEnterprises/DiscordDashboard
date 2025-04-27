import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fetchGuilds } from '@/utils/fetchGuilds';
import Link from 'next/link';
import PopupWrapper from '@/components/PopupWrapper';
import { auth } from '@/utils/auth';
import { redirect } from 'next/navigation';
import ServerSelectorPage from '@/components/ServerSelectorPage';

export default async function Servers({ params, searchParams }: any) {
  const session = await auth();
  if (!session) return redirect('/');

  const pathParts = params.servers || [];
  const isIndexPage = pathParts.length === 0;
  const serverId = pathParts[0];

  const errorParams = searchParams;
  let error = typeof errorParams.error === 'string' ? errorParams.error : null;
  let errorDescription = typeof errorParams.error_description === 'string' 
    ? errorParams.error_description 
    : null;

  if (isIndexPage) {
    let guilds: {
      id: string;
      name: string;
      icon: string;
      owner: boolean;
      permissions: string;
      features: string[];
      bot: boolean;
    }[] = [];

    try {
      guilds = await fetchGuilds();
    } catch (err) {
      console.error(err);
      error = 'Bot Offline';
      errorDescription = 'Failed to get guilds from bot. Please try again later.';
    }
    
    return (
      <ServerSelectorPage error={error} errorDescription={errorDescription} guilds={guilds} />
    );
  } else {
    let guilds: {
      id: string;
      name: string;
      icon: string;
      owner: boolean;
      permissions: string;
      features: string[];
      bot: boolean;
    }[] = [];

    let guild:
    | {
        id: string;
        name: string;
        icon: string;
        owner: boolean;
        permissions: string;
        features: string[];
        bot: boolean;
      }
    | undefined;

    try {
      guilds = await fetchGuilds();
      guild = guilds.find(g => g.id === serverId);
      if (!guild) {
        error = 'Server Not Found';
        errorDescription =
          'The server you are looking for does not exist or you do not have permission to access it.';
      }
      if (guild && !guild.bot) {
        error = 'Bot Not Found';
        errorDescription =
          'The bot is not in the server you are trying to access.';
      }
    } catch (err) {
      console.error(err);
      error = 'Bot Offline';
      errorDescription = 'Failed to get guilds from bot. Please try again later.';
    }

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
              <h2>Server Details</h2>
              <p>Now showing details for server ID: {serverId}</p>
              <div className="server-details">
                <div className="server-image">
                  <img width="128px" height="128px" src={`https://cdn.discordapp.com/icons/${guild?.id}/${guild?.icon}.png`} alt={guild?.icon} />
                </div>
                <p>{guild?.name}</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}