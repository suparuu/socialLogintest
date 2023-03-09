import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import SpotifyWebApi from "spotify-web-api-node"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {session.user.name}님 반갑습니다 <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <Link href="/api/auth/signin">로그인</Link>
    </>
  )
}