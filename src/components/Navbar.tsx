"use server"

import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions';
import SigninButton from './SigninButton';
import ProfileMenu from './ProfileMenu';
import { User } from 'next-auth';

export default async function Navbar() {
  let session = await getServerSession(authOptions)
  return (
    <nav className="navbar">
      <Link href="/">
        <Image className='navbar-image' src="https://images.static.dragonaere.com/logos/transparent/orange.png" alt={'temp logo'} width={64} height={64} />
      </Link>
      {!session && <SigninButton />}
      {session && <ProfileMenu user={session.user as User} />}
    </nav>
  )
}
