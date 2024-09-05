import styles from "./LangSelect.module.css"
import { Component } from "react"
import { connect } from "react-redux"

import type { ILangSelector } from "../../../types/LangSelectType"
import type { State } from "../../../app/store/store"
import type { Dispatch } from "@reduxjs/toolkit"

import { toggleSelect } from "../../../app/store/actions"
import { setLanguage } from "../../../app/store/actions"

class Option extends Component<{
  label: string
  value: string
  onChange: (value: string) => void
}> {
  render() {
    return (
      <li
        id="ru"
        className={styles.option}
        onClick={() => this.props.onChange(this.props.label)}
      >
        {this.props.value}
      </li>
    )
  }
}

class LangSelect extends Component<ILangSelector> {
  changeHandler = (value: string) => {
    this.props.toggleActiveSelect()
    this.props.setLanguage(value)
  }
  selectHandler = () => this.props.toggleActiveSelect()

  render() {
    return (
      <div className={styles.select}>
        <div
          className={this.props.state.openSelect ? styles.active : styles.base}
        >
          <p
            className={
              this.props.state.openSelect
                ? styles["lang-unactive"]
                : styles.lang
            }
            onClick={this.selectHandler}
          >
            {this.props.state.lang}
          </p>
          <ul>
            <Option label="ru" value="ru" onChange={this.changeHandler} />
            <Option label="en" value="en" onChange={this.changeHandler} />
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => {
  return { state }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLanguage: (lang: string) => {
      dispatch(setLanguage(lang))
    },
    toggleActiveSelect: () => dispatch(toggleSelect()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LangSelect)
