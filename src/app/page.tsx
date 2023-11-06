import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <h1>This is my home page</h1>
      <div>
        <Image src={'/images/kodak.jpeg'} alt='Sample image' width={300} height={300}/>
      </div>
      <div>
        <Image src={'/images/kodak.jpeg'} alt='Sample image' width={300} height={300}/>
      </div>
      <div>
        <Image src={'/images/kodak.jpeg'} alt='Sample image' width={300} height={300}/>
      </div>
      <h3>
        This is home page contents
      </h3>
    </div>
  )
}
