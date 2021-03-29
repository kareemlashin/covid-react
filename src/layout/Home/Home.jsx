import React, { PureComponent } from 'react'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'
import Nav from '../../component/Nav/Nav'
import { connect } from 'react-redux'
import Loading from '../../component/Loading'
import Header from './../../component/Header/index'
import World from './../../component/World/index'
import Egypt from './../../component/Egypt/index'
import Coronavirus from './../../component/Coronavirus/index'
import Symptoms from './../../component/Symptoms/index'
import Call from './../../component/Call/index'
import Table from './../../component/Table/index'
import { getEgypt, getTable, getWorld } from './../../core/action/action'

class Home extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      mode: 'light',
      dir: 'ltr',
    }
  }
  addPage() {
    this.props.history.push('/Add')
  }
  componentDidMount = () => {
    document.title = this.props.t('home')
    this.props.allTableData()
    this.props.allWorldData()
    this.props.allEgyptData()

    let modeStorage = localStorage.getItem('mode') || 'light'
    let direction = localStorage.getItem('dir') || 'ltr'
    this.setState({
      ...this.state,
      mode: modeStorage,
      dir: direction,
    })
  }

  directionPage = (dir) => {
    this.setState({
      ...this.state,
      dir: dir,
    })
  }

  modePage = (mode) => {
    let checked = false
    if (mode == 'dark') {
      checked = true
    }
    this.setState({
      ...this.state,
      mode: mode,
      checked: checked,
    })
  }
  render() {
    const { t, i18n } = this.props

    return (
      <div
        dir={this.state.dir}
        className={('IndexWrapper', this.state.mode, this.props.mode)}
      >
        <Nav dir={this.directionPage} mode={this.modePage}></Nav>
        <Header margin={this.state.marginNav}></Header>
        <World></World>
        <Egypt></Egypt>
        <Coronavirus></Coronavirus>
        <Symptoms></Symptoms>
        <Call></Call>
        <Table></Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.reducers.mode,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    allEgyptData: () => {
      dispatch(getEgypt())
    },
    allTableData: () => {
      dispatch(getTable())
    },

    allWorldData: () => {
      dispatch(getWorld())
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Home))
