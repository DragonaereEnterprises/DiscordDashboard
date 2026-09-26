import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { auth } from '@/utils/auth';
import { redirect } from 'next/navigation';

export default async function Settings() {
  const session = await auth();
  if (!session) return redirect('/');
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