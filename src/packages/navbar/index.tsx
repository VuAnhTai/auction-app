import { useState } from 'react';
import { useAuth } from '../common/hooks/useAuth';
import { useProfile } from '@/auth/useProfile';
import { useControlModal } from '@/common/hooks/useModal';
import Link from 'next/link';
import { Icon } from '@/common/headless/Icon';

const Navbar = () => {
  const { logout } = useAuth();
  const { email } = useProfile();
  const [isOpenMobile, setIsOpen] = useState(false);

  return (
    <>
      <nav className='bg-gray-800'>
        <div className='mx-auto container'>
          <div className='flex items-center justify-between h-16 text-white'>
            <div className='flex-shrink-0 text-4xl' data-testid='logo'>
              VAT Auction
            </div>
            <div className='hidden lg:block'>
              <div className='flex items-center md:ml-6 gap-3'>
                <div data-testid='email'>Welcome {email}</div>
                <Link
                  href='/item'
                  className='w-full text-center block px-4 py-2 text-sm bg-white text-gray-700 hover:bg-gray-300 hover:text-gray-900 rounded-md'>
                  Create New Item
                </Link>
                <Link
                  href='/deposit'
                  className='w-full text-center block px-4 py-2 text-sm bg-white text-gray-700 hover:bg-gray-300 hover:text-gray-900 rounded-md'>
                  Deposit
                </Link>
                <Link
                  onClick={logout}
                  className='text-center block px-4 py-2 text-sm bg-white text-gray-700 hover:bg-gray-300 hover:text-gray-900 rounded-md'
                  href={''}>
                  <Icon name='sign-out' height={'1.25em'} />
                </Link>
              </div>
            </div>
            <div className='-mr-2 flex lg:hidden items-center gap-3'>
              <div>Welcome {email}</div>
              <button
                onClick={() => setIsOpen(!isOpenMobile)}
                className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-label='Toggle menu'
                data-testid='toggle-menu'>
                <svg className='h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
              {isOpenMobile && (
                <div className='origin-top-right absolute top-[50px] right-0 mt-2 w-48 rounded-md shadow-lg'>
                  <div className='py-1 bg-white rounded-md shadow-xs'>
                    <Link
                      href='/item'
                      className='w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
                      Create New Item
                    </Link>
                    <Link
                      href='/deposit'
                      className='w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
                      Deposit
                    </Link>
                    <Link
                      onClick={logout}
                      className='w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      href={''}>
                      Sign out
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
