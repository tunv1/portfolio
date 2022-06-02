import Image from 'next/image';
import styles from '../../styles/Home.module.css'
import { FaAngleDoubleUp, FaEnvelope, FaFacebookMessenger, FaGithub, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ILayoutProps {
    children: JSX.Element
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const showButtonToTop = () => {
            setShowButton(window.scrollY > 400)
        }
        window.addEventListener('scroll', showButtonToTop)
        return () => {
            window.removeEventListener('scroll', showButtonToTop)
        }
    }, [])

    return (
        <div className='bg-background-image text-sky-300'>
            <div className='h-20 fixed top-5 left-0 right-0 z-50'>
                <div className={`h-full py-2 flex justify-between items-center rounded-full group bg-white hover:w-full hover:animate-show-menu animate-hide-menu ${!showButton ? ' w-full animate-show-menu' : 'w-20 animate-hide-menu'}`}>
                    <Link href=''><div className='w-20 h-20 relative cursor-pointer'><Image src='/logo.png' layout='fill' className='rounded-full' /></div></Link>
                    <div className={`w-1/2 h-full gap-5 text-xl ${showButton ? 'hidden' : 'flex'} group-hover:flex`}>
                        <Link href='#about'><div className={`${styles.buttonEffect} w-40 cursor-pointer`}>About Me</div></Link>
                        <Link href=''><div className={`${styles.buttonEffect} w-40 cursor-pointer`}>Contact Me</div></Link>
                        <Link href='#project'><div className={`${styles.buttonEffect} w-40 cursor-pointer`}>My Project</div></Link>
                    </div>
                </div>
            </div>
            <div className='left-2 top-1/2 fixed -translate-y-1/2 flex flex-col gap-8 z-50'>
                <Link href='https://www.linkedin.com/in/v%C4%83n-t%C3%BA-nguy%E1%BB%85n-4531a71b8/'><a target='_blank' className='hover:text-blue-900'><FaLinkedinIn size='40px' /></a></Link>
                <Link href='https://github.com/tunv1'><a target='_blank' className='hover:text-black hover:bg-white rounded-full'><FaGithub size='40px' /></a></Link>
                <Link href='https://m.me/nguyen.vantu.376043'><a target='_blank' className='hover:text-purple-500'><FaFacebookMessenger size='40px' /></a></Link>
                <Link href='mailto:tunguyen26899@gmail.com'><a className='hover:text-orange-400'><FaEnvelope size='40px' /></a></Link>
                <Link href='tel:+84348400317'><a className='hover:text-blue-900'><FaPhoneAlt size='40px' /></a></Link>
            </div>
            {showButton && <div className='fixed bottom-4 right-4 z-50 cursor-pointer'><Link href=''><FaAngleDoubleUp size='50px' /></Link></div>}
            {children}
        </div>
    );
};

export default Layout;
