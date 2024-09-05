import type { State } from "../app/store/store"
interface IMain {
  state: State
}
export interface IMainState {
  page: number
}

export default IMain
