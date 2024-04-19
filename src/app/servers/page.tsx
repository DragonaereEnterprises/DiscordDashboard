"use server"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { auth } from '@/utils/auth';
import { fetchGuildsWithBot } from '@/utils/fetchGuildsWithBot';

// Grab guilds from session.user.guilds and render them in a way the the User can see what servers they have added and can add the bot too

export default async function Servers() {
  let guildsBot = await fetchGuildsWithBot();
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="content">
          <div className="mainbody">
            <div className='subtitle'>
              <p>Servers</p>
            </div>
            <div className="servers">
              {/* {guildsBot.map((guild: any) => (
                <div className='server' key={guild.id}>
                  <div className='server-image'>
                    <img width="128px" height="128px" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name} />
                  </div>
                  <div className='server-name'>
                    <p>{guild.name}</p>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}