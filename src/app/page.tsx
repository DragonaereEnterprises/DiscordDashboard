"use client"

import Image from 'next/image'
import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <Image className='navbar-image' src="https://images.static.dragonaere.com/logos/transparent/orange.png" alt={'test'} width={64} height={64} />
        <button className='signin-button' onClick={() => signIn("Discord")}>DO NOT USE</button>
      </nav>
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
            <p className='subtitle'>
              Coming Soon™
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>© 2024 Dragonaere Enterprises</p>
      </footer>
    </>
  )
}