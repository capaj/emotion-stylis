import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, ChakraProvider } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <ChakraProvider>

      <Button colorScheme='blue'>Button</Button>
    </ChakraProvider>
      
  )
}

export default Home
