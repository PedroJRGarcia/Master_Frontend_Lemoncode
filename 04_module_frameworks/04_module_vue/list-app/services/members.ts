import { Member } from "~~/types"

export const memberService = {
  async get() {
    const members = await fetch('https://api.github.com/orgs/lemoncode/members').then((r) =>
      r.json()
    )
    return members as Member[]
  },
  async getMemberById(id: number) {
    const member = await $fetch<Member>(
      `https://api.github.com/orgs/lemoncode/members/${id}`
    )
    return member
  }
}