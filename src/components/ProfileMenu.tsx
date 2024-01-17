"use client"

import { useRouter } from 'next/navigation'

import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { signOut } from 'next-auth/react';

type User = {
  global_name: string
  image: string
  email: string
}

type Props = {
  user: User,
}

export default function ProfileMenu( { user }:Props ) {
  const router = useRouter()
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}>
        <Avatar
          size={'lg'}
          src={user?.image || ''}
        />
      </MenuButton>
      <MenuList alignItems={'center'}>
        <br />
        <Center>
          <Avatar
            size={'2xl'}
            src={user?.image || ''}
          />
        </Center>
        <br />
        <Center>
          <Text fontSize='22px' as="b">{user.global_name}</Text>
        </Center>
        <center>
          <Text fontSize='15px'>{user?.email}</Text>
        </center>
        <MenuDivider />
        <MenuItem onClick={() => router.push('/servers')}>Your Servers</MenuItem>
        <MenuItem onClick={() => router.push('/stats')}>Bot Stats</MenuItem>
        <MenuItem onClick={() => signOut()}><Text color={'tomato'}>Logout</Text></MenuItem>
      </MenuList>
    </Menu>
  )
}
