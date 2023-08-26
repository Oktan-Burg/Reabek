export const dynamic = 'force-dynamic'
import Image from "next/image"
import favicon from "@/assets/favicon.svg"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"
export enum page_loc {
  Home,
  Profiles,
  Contact
}
export default async function Header({ location }: { location: page_loc}) {
  const supabase = createRouteHandlerClient({ cookies })
  const {data: {user}} = await supabase.auth.getUser()
  let uId
  let pfp
  let userResponse: any
  if (user) {
    ["png","jpg","jpeg","svg"].forEach(function(type: string) {
    })
    for (let type in ["png","jpg","jpeg","svg"]) {
      await supabase.from("users").select().eq("id", user.id).single().then(response => {
        if (response.error) {
          userResponse = <span>Database Error | Try reloading the Page</span>
        }
        if (response.data) {
          uId = response.data.userId
          userResponse = <Link href={`/profiles/${uId}`}><img src={pfp} width={25} height={25} alt="Profile Picture"/></Link>
        }
      })
      let {data: {publicUrl}} = supabase.storage.from("profiles").getPublicUrl(`pfp/${user.id}.${type}`)
      if (publicUrl) {
        if (publicUrl !== "") {
          let pfp = publicUrl
        } else {
          let pfp = "./../assets/defualtpfp.svg"
        }
      } else {
        let pfp = "./../assets/defualtpfp.svg"
      }
    }
  }
  return <div className="flex w-screen py-5 px-10 items-center justify-between">
    <div className="flex items-center">
      <Image alt="Reabek Icon" src={favicon} width={25} height={25}/>
      <h1>Reabek</h1>
    </div>
    {user ? userResponse : <link></link>}
  </div>
}