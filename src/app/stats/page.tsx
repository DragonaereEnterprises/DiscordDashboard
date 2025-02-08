"use server";

import { gql } from "@apollo/client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getClient } from "@/libs/apolloClient";
import HeroBanner from "@/components/HeroBanner";

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
  let data;
  let isBotOffline = false;
  try {
    const res = await getClient().query({
      query,
      context: {
        fetchOptions: {
          next: { revalidate: 30 },
        },
      },
    });
    data = res.data;
  } catch (error) {
    console.error("Bot data error:", error);
    isBotOffline = true;
  }

  return (
    <>
      <Navbar />
      <main className="main">
        <div className="content">
          <HeroBanner />
          <div className="mainbody">
            <div className='subtitle'>
              {isBotOffline ? (
                <p>
                  Failed to get stats from bot.<br />
                  Please try again later</p>
              ) : (
                data?.botstats?.map((stats: any) => (
                  <div key={stats.id}>
                    <p>Server Count: {stats.serverCount}</p>
                    <p>Channel Count: {stats.channelCount}</p>
                    <p>User Count: {stats.userCount}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}