import NextAuth from "next-auth"
import { authOptions } from "@/utils/authOptions"
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   return NextAuth(req,res,authOptions)
// }
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   return NextAuth(req,res,authOptions)
// }