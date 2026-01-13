import { resolve } from "$app/paths"
import { redirect } from "@sveltejs/kit"

export const load = async () => {
  throw redirect(303, resolve("/components/combobox"))
}