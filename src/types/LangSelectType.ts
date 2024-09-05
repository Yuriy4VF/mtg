import type { State } from "../app/store/store"
export interface ILangSelector {
  state: State
  toggleActiveSelect: () => void
  setLanguage: (lang: string) => void
}
