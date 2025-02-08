import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="content">
          <HeroBanner />
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