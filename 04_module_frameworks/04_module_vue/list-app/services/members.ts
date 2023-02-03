import { Member } from "~~/types"

export const memberService = {
  async get(organization: any) {
    const config = useRuntimeConfig()
    const members = await $fetch<Member[]>(`https://api.github.com/orgs/${organization}/members`, {
      headers: {
        Authorization: `token ${config.public.apiKey}`
      }
    })
    return members as Member[]
  },
  async getMemberById(login: string) {
    const config = useRuntimeConfig()
    const member = await $fetch<Member>(
      `https://api.github.com/users/${login}`
    , {
      headers: {
        Authorization: `token ${config.public.apiKey}`
      }
    })
    return member
  }
}