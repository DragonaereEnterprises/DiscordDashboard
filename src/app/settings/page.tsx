import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';

export default async function Settings() {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="content">
          <div className="mainbody">
            <p className='subtitle'>
              Setting Page Placeholder
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}