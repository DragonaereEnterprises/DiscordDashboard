"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from '../graphql/gql';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const dynamic = "force-dynamic";


const query = gql(`
  query getBotStats {
    botstats {
      id
      serverCount
      channelCount
      userCount
    }
  }
`);


export default function Stats() {
  const { data } = useSuspenseQuery(query);

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
              {data.botstats!.map(data => {
                
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