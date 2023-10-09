import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="w-full flex flex-row justify-between my-12 px-12">
        <Link href="/">
            <img src='logo.png' className="w-8 md:w-12 cursor-pointer" alt="Home" />
        </Link>
        <div className="flex justify-end font-fancy pt-2 text-white md:text-4xl lg:text-2xl decoration-4">
            {/*<Link href="/">
                <span className="px-3 md:px-6 cursor-pointer hover:underline">
                    Work
                </span>
            </Link>
            <Link href="/">
                <span className="px-3 md:px-6 cursor-pointer hover:underline">
                    About
                </span>
            </Link>*/}
            <a href="/Erin_Murphy_Resume_2023.pdf" target="_blank" className="pl-3 md:pl-6 cursor-pointer hover:underline">
                Resume
            </a>
        </div>
    </div>
  )
}
