import Link from 'next/link'

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Contact Page</h1>
      <p className='mb-5'>소속 | 중부대학교 고양캠퍼스 정보보호학과</p>
      <p className='mb-5'>메일 | kreideprinz913@gmail.com</p>
      <p className='mb-5'></p>
      <div className='hover:underline'>
        <Link href='https://github.com/myyonop/'>https://github.com/myyonop/</Link>
      </div>
    </div>
  )
}