"use server"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions';

// Grab guilds from session.user.guilds and render them in a way the the User can see what servers they have added and can add the bot too

export default async function Servers() {
  let session = await getServerSession(authOptions)
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="content">
          <div className="mainbody">
            <div className='subtitle'>
              {<pre>{JSON.stringify(session, null, 2)}</pre>}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}