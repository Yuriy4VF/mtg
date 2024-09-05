import styles from "./Main.module.css"
import { Component } from "react"
import { connect } from "react-redux"

import { Pagination } from "antd"

import type IMain from "../../types/MainType"
import type { IMainState } from "../../types/MainType"
import type { State } from "../../app/store/store"

import Comment from "../../shared/ui/Comment"
import getComments from "../../helper/getComments"
class Main extends Component<IMain, IMainState> {
  state = { page: 1 }

  render() {
    const changePage = (page: number) => this.setState({ ...this.state, page })

    const { lang } = this.props.state
    const comments = getComments(lang)
    const chunk = comments.slice(
      (this.state.page - 1) * 10,
      this.state.page * 10,
    )
    const total = comments.length

    return (
      <div className={styles.main}>
        <Pagination
          pageSize={10}
          size="small"
          total={total}
          onChange={changePage}
          showSizeChanger={false}
          style={{ marginBottom: "6px" }}
        />
        <ul>
          {chunk.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({ state })

export default connect(mapStateToProps)(Main)
