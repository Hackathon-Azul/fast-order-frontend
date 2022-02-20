import Link from "next/link"

const Logo = () => {
  return (
    <>
    <Link href="/">
      <a>
        <img
          src="/logo_header.png"
          alt="Pedido Rápido"
          width={48}
          height={45}
        />
        </a>
      </Link>
    </>
  )
}

export default Logo