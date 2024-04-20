"use server";
export const dynamic = 'force-dynamic';

import { gql } from "@apollo/client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getClient } from "@/libs/apolloClient";

const query = gql`
  query getBotStats {
    botstats {
      id
      serverCount
      channelCount
      userCount
    }
  }
`;


export default async function Stats() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 30 },
      },
    }
  })

  return (
    <>
      <Navbar />
      <main className="main">
        <div className="content">
          <div className="head">
            <h1 className="title">Dragonaere</h1>
            <h1 className="title">&nbsp;</h1>
            <h1 className="title orange">Discord</h1>
            <h1 className="title">&nbsp;</h1>
            <h1 className="title">Bot</h1>
          </div>
          <div className="mainbody">
            <div className='subtitle'>
              {data.botstats!.map((data: any) => {
                return (
                  <div key={data!.id}>
                    <p>Server Count: {data!.serverCount}</p>
                    <p>Channel Count: {data!.channelCount}</p>
                    <p>User Count: {data!.userCount}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}