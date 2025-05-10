import Link from 'next/link'

export default function ErrorComponent({ message }: { message?: string }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white gap-4">
      <Link href="/">
        <img
          src="/assets/images/logo.png"
          alt="Home"
          className="w-48 mb-10 cursor-pointer"
        />
      </Link>
      <h1 className="text-2xl font-bold text-red-500">Something went wrong</h1>
      {message && <p className="text-base text-red-300">{message}</p>}
    </div>
  )
}
