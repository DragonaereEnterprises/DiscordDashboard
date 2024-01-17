"use server"

import Image from 'next/image'
import { signIn } from "next-auth/react"
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions';
import { Session } from 'next-auth';
import SigninButton from './SigninButton';


export default async function Navbar() {
  let session = await getServerSession(authOptions)
  return (
    <nav className="navbar">
      <Image className='navbar-image' src="https://images.static.dragonaere.com/logos/transparent/orange.png" alt={'temp logo'} width={64} height={64} />
      {!session && <SigninButton />}
      {session &&
        <div>
          <Image className='navbar-image' src={session.user.image} alt={session.user.global_name + "'s Discord profile picture"} width={64} height={64} />
        </div>
      }
    </nav>
  )
}
