"use client"

import { useRouter } from 'next/navigation'

import {
  Avatar,
  Button,
  Menu,
  MenuItem,
} from '@mui/material'
import { signOut } from 'next-auth/react';
import React from 'react';
import { User } from 'next-auth';
import { color } from '@mui/system';

type Props = {
  user: User,
}

export default function ProfileMenu( { user }:Props ) {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button id="profile" aria-controls="profile" aria-haspopup="true" onClick={handleClick}><Avatar sx={{width: '52px', height: '52px'}} src={user?.image || ''} /></Button>
      <Menu PaperProps={{sx: {width: '144px'}}} id="profile" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'profile', }}>
        <center>
        <b><p>{user.name}</p></b>
        <MenuItem onClick={() => router.push('/servers')}>Your Servers</MenuItem>
        <MenuItem onClick={() => router.push('/stats')}>Global Stats</MenuItem>
        <MenuItem onClick={() => router.push('/settings')}>Settings</MenuItem>
        <MenuItem onClick={() => signOut()}><b><p style={{color: "#ff0000"}}>Sign Out</p></b></MenuItem>
        </center>
      </Menu>
    </div>
  )
}
