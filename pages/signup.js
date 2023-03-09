import { signIn } from "next-auth/react";



export default function Signup() {
    const handleSubmit = (e) => {
        e.preventDefault()
        signIn()
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Sign up</h1>
            <button type="submit">Sign up with spotify</button>
        </form>
    )
}
