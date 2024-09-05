import styles from "./Comment.module.css"

import type ICommentComponent from "../../../types/CommentType"

import { Component } from "react"

import getShortName from "../../../helper/getShortName"

class Comment extends Component<ICommentComponent> {
  render() {
    const { name, review, date } = this.props.comment

    const shortName = getShortName(name)

    return (
      <li className={styles.comment}>
        <blockquote>
          <p className={styles.review}>{review}</p>
          <cite className={styles.name}>{shortName}</cite>
          <time className={styles.date}>{date}</time>
        </blockquote>
      </li>
    )
  }
}

export default Comment
