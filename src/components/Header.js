import Link from 'next/link'
import Image from 'next/image'

import { Box, Flex } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex w="100%" as="header" justifyContent='space-between' border="solid 2px black ">
        <Box margin="1rem 0">
            <Image src="/logo.svg" alt="" width={100} height={48} />
        </Box>
        <nav>
            <Flex as="ul"> 
                <li><Link href="#">About us</Link></li>
                <li><Link href="#">Woman</Link></li>
                <li><Link href="#">Men</Link></li>
                <li><Link href="#">Beauty</Link></li>
                <li><Link href="#">Accessories</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contact</Link></li>
            </Flex>
        </nav>

        <div className="commerce_menu">
            <Flex as="ul">
                <li>
                    <Link href="#"><Image src="/icon-search.svg" alt="" width="24" height="24"/></Link>
                </li>
                <li>
                    <Link href="#"><Image src="/icon-globe.svg" alt="" width="24" height="24"/></Link>
                </li>
                <li>
                    <Link href="#"><Image src="/icon-user.svg" alt="" width="24" height="24"/></Link>
                </li>
                <li>
                    <Link href="#"><Image src="/icon-bag.svg" alt="" width="24" height="24"/></Link>
                </li>
            </Flex>
        </div>
    </Flex>
  )
}
