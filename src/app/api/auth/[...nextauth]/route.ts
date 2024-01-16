import NextAuth from "next-auth"
import { nextAuthOptions } from "@/utils/authOptions"
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST }

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   return NextAuth(req,res,nextAuthOptions)
// }
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   return NextAuth(req,res,nextAuthOptions)
// }