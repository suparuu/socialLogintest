import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            scope: 'user-read-email user-library-read',
            callbacks: {
                async redirect(url, baseUrl){
                    console.log(baseUrl)
                    return `${baseUrl}/callback`
                }
            }
        })  
    ]
})