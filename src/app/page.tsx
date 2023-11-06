import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <h1>This is my home page</h1>
      <Image src={'/images/kodak.jpeg'} alt='Sample image' width={300} height={300}/>
      <Image src={'/images/kodak.jpeg'} alt='Sample image' width={300} height={300}/>
      <Image src={'/images/kodak.jpeg'} alt='Sample image' width={300} height={300}/>
    </div>
  )
}
