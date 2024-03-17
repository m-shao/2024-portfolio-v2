import Link from 'next/link'

import { navLinks } from '@/config/navLinks'

const Navbar = () => {
    return (
        <nav className="flex justify-center gap-20 font-sans font-normal py-12 text-xl text-primary">
            {navLinks.map((link, index) => (
                <Link href={link.path} className="group" key={index}>
                    <p>/{link.title}</p>
                    <div className="w-0 group-hover:w-full bg-primary h-[1px] transition-all"></div>
                </Link>
            ))}
        </nav>
    )
}

export default Navbar