import Link from 'next/link'

export default function NavBar() {
  return (
    <div className="w-full flex justify-around xl:justify-between py-8">
        <Link href="/">
            <img src='logo.png' className="w-8 md:w-12 cursor-pointer" alt="Home" />
        </Link>
        <div className="flex justify-end font-fancy pt-2 text-white md:text-xl decoration-4">
            <Link href="/">
                <span className="px-3 md:px-6 cursor-pointer hover:underline">
                    Work
                </span>
            </Link>
            <Link href="/">
                <span className="px-3 md:px-6 cursor-pointer hover:underline">
                    About
                </span>
            </Link>
            <Link href="/">
                <span className="px-3 md:px-6 cursor-pointer hover:underline">
                    Blog
                </span>
            </Link>
            <a href="https://drive.google.com/file/d/19NU02qXh8VOWNsBYDqGYhyL53QsvnM9p/view?usp=sharing" target="_blank" className=" pl-3 md:pl-6 cursor-pointer hover:underline">
                CV
            </a>
        </div>
    </div>
  )
}