import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero.jsx'

export default function Home() {

    return (
        <div className="flex justify-center items-center h-screen w-screen flex-col">
            <Navbar/>
            <Hero/>
        </div>
    );
}
