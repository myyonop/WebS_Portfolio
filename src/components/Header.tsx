import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignOutButton,
    SignUpButton,
} from '@clerk/nextjs'
import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <nav className='bg-gray-700 py-4 px-8'>
                <div className='flex items-center justify-between container'>
                    <div className='flex items-center font-bold'>    
                        <Link href='/'>
                            <div className='text-lg text-white'>MyPage</div>
                        </Link>
                    </div>
                    <div className='flex items-center font-bold'>
                        <SignedOut>
                            <div className='text-gray-300 hover:text-white mr-4'>
                                <SignInButton />
                            </div>
                            <div className='text-gray-300 hover:text-white mr-4'>
                                <SignUpButton />
                            </div>
                        </SignedOut>

                        <SignedIn>
                            <Link href='/dashboard' className='text-gray-300 hover:text-white mr-4'>
                            Dashboard
                            </Link>
                            <Link href='/project' className='text-gray-300 hover:text-white mr-4'>
                            Project
                            </Link>
                            <Link href='/contact' className='text-gray-300 hover:text-white mr-4'>
                            Contact
                            </Link>
                            <div className='text-gray-300 hover:text-white mr-4'>
                                <SignOutButton />
                            </div>
                        </SignedIn>
                    </div>
                </div>
            </nav>
        </div>
    )
}