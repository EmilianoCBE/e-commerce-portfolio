import Link from 'next/link'
import Image from 'next/image'

export function TopBar() {
  return (
    <div>
        <ul>
            <li>
                <Link href="#">+38 (050) 12 34 567</Link>
            </li>
            <li>
                <Link href="#">Ukraine, Kyiv, Khreschatyk 1</Link>
            </li>
            <li>
                <Link href="#">All week 24/7</Link>
            </li>
        </ul>

        <ul>
            <li>
                <Link href="#"><Image src="/icon-facebook.svg" alt="" width={24} height="24"/></Link>
            </li>
            <li>
                <Link href="#"><Image src="/icon-twiter.svg" alt="" width={24} height="24"/></Link>
            </li>
            <li>
                <Link href="#"><Image src="/icon-instagram.svg" alt="" width={24} height="24"/></Link>
            </li>
            <li>
                <Link href="#"><Image src="/icon-pinterest.svg" alt="" width={24} height="24"/></Link>
            </li>
        </ul>
    </div>
  )
}
