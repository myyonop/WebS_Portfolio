import Link from 'next/link'

export default function pjPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-10">Project Page</h1>

      <div className='mb-7 text-lg hover:underline hover:text-gray-700'>
        <Link href='https://crud-nine-theta.vercel.app/'>MongoDB CRUD</Link>
      </div>

      <div className='mb-7 text-lg hover:underline hover:text-gray-700'>
        <Link href='https://clerk-app-khaki.vercel.app/'>clerk-app</Link>
      </div>

      <div className='mb-7 text-lg hover:underline hover:text-gray-700'>
        <Link href='https://test-zeta-bay-silwlogc6j.vercel.app/'>test-page</Link>
      </div>

      <div className='mb-7 text-lg hover:underline hover:text-gray-700'>
        <Link href='https://portfolio-psi-drab-14.vercel.app/'>Portfolio</Link>
      </div>
    </div>
  )
}