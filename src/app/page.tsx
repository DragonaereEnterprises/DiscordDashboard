import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function Home() {
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
            <p className='subtitle'>
              Coming Soon™
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}