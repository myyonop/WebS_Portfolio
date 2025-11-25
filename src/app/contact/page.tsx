import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <section
      style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: '30px',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: '30px',
      maxWidth: '700px', 
      margin: '70px auto',
  }}
>
      <Image
        src="/profile.png"
        alt="Profile"
        width={300}
        height={300} 
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '0.5rem',
          border: '1px solid rgba(0,0,0,0.1)',
        }}
/>


      <div>
        <h1 className="text-2xl font-bold mb-5">조은수</h1>
        <ul style={{ margin: 5, paddingLeft: '8px', lineHeight: '1.6' }}>
          <li>중부대학교 정보보호학과</li>
          <li>Birth : 2005.03.03.</li>
          <li>
            GitHub:{' '}
            <a
              href="https://github.com/myyonop"
              target="_blank"
              className="hover: underline hover:text-gray-500"
            >
              github.com/myyonop
            </a>
          </li>
          <li>
            Instagram:{' '}
            <a href="https://www.instagram.com/myyonop/"
            target="_blank"
            className="hover: underline hover:text-gray-500"
            >
              @myyonop
            </a>
          </li>
          <li>Phone: 010-2382-9978</li>
        </ul>
      </div>
    </section>
  )
}