import { Ref } from "vue";
import { memberService } from "~~/services/members";
import { Member } from "~~/types";

export default function useMembersApi() {
  const searchText = ref("");

  let list: Ref<Member[]> = ref([]);

  const searchHandler = async (text?: string) => {
    list.value = await memberService.get(text)
  }

  return { list, searchText, searchHandler };
}