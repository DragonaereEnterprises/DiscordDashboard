"use server"

import { headers } from 'next/headers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fetchGuilds } from '@/utils/fetchGuilds';
import Link from 'next/link';
import PopupWrapper from '@/components/PopupWrapper';
import { auth } from '@/utils/auth';
import { redirect } from 'next/navigation';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Servers({ searchParams }: PageProps) {
  const session = await auth()
  if (!session) return redirect('/');
  const params = await searchParams;
  let error = typeof params.error === 'string' ? params.error : null;
  let errorDescription = typeof params.error_description === 'string' 
    ? params.error_description 
    : null;

  let guilds = [] as {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permissions: string;
    features: string[];
    bot: boolean;
  }[];

  try {
    guilds = await fetchGuilds();
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