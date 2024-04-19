"use server"

import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/utils/auth';
import SigninButton from './SigninButton';
import ProfileMenu from './ProfileMenu';
import { User } from 'next-auth';

export default async function Navbar() {
  let session = await auth()
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
