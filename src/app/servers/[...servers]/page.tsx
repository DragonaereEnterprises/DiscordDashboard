"use server";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroBanner from "@/components/HeroBanner";

export default async function ServerEditor() {
    <>
      <Navbar />
      <main className="main">
        <div className="content">
          <HeroBanner />
          <div className="mainbody">
            <div className='subtitle'>
              Soon
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
