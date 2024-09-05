import styles from "./Watch.module.css"
import { Component } from "react"

import getCurrentTime from "../../helper/getCurrentTime"
import type { IWatchProps, IWatchState } from "../../types/WatchType"

class Watch extends Component<{}, IWatchState> {
  constructor(props: IWatchProps) {
    super(props)
    this.state = { time: null, id: undefined }
  }

  componentDidMount(): void {
    const id = setInterval(() => {
      this.setState({ ...this.state, time: getCurrentTime() })
    }, 1000)
    this.setState({ ...this.state, id })
  }

  componentWillUnmount(): void {
    clearInterval(this.state.id)
  }

  render() {
    return <div className={styles.watch}>{this.state.time}</div>
  }
}

export default Watch
