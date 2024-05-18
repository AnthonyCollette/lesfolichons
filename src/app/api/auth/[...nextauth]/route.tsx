import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  
    providers: [
        CredentialsProvider({
          type: 'credentials',
          credentials: {
            username: {label: 'Name', type: 'text', placeholder: 'John'},
            password: {label: 'Password', type: 'password'}
          },
          async authorize(credentials, req) {
            const {username, password} = credentials as {
              username: string,
              password: string,
            };
            // validate here your username and password
            if(username !== process.env.NEXT_PUBLIC_ADMIN_USERNAME && password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
              throw new Error('invalid credentials');
            }
            // confirmed users
            return {id: 1, name: "Les Foli'chons", email: 'lesfolichonwebsite@gmail.com'} as any
          }
        }),
      ],
})

export { handler as GET, handler as POST }