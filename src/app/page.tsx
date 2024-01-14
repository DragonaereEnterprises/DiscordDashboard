import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <Image className='navbar-image' src="https://images.static.dragonaere.com/logos/transparent/orange.png" alt={'test'} width={64} height={64} />
        <Link className='signin-button' href='https://discord.com/api/oauth2/authorize?client_id=931671325737635840&response_type=code&redirect_uri=https%3A%2F%2Fdiscordbotapi.dragonaere.com%2F&scope=identify+email+applications.commands.permissions.update+guilds'>DO NOT USE</Link>
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