import NextAuth from "next-auth/next";
import SlackProvider from "next-auth/providers/slack"

export default NextAuth({
    providers:[
        SlackProvider({
            clientId:"2210535565.4593286840769",
            clientSecret:"c84a0f4438664ae31b54e4fb3ad00cab"
        })
    ],
    secret:"bc84059e0c359b64e69598d4ee35c3fd"
})