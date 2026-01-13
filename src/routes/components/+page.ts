import { redirect } from "@sveltejs/kit"

export const load = async () => {
  throw redirect(303, "/components/combobox")
}