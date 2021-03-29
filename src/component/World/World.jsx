import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getWorld } from '../../core/action/action'
//import { Test } from './World.styles';
import {withTranslation} from 'react-i18next'

class World extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }
  componentDidMount = () => {
    this.props.allWorldData()
  }

  render() {
    const {t, i18n} = this.props;

    return (
      <div className="WorldWrapper">
        <div className="container">
          
   
        <div className="row">
            <div className="col-md-3 col-6">
              <div className="number">{ this.props.world.cases }</div>
              <div className="CONFIRMED">{t('CONFIRMED')}</div>
            </div>
            <div className="col-md-3 col-6">
              <div className="number">{ this.props.world.deaths }</div>
              <div className="DEATHS">{t('DEATHS')}</div>
            </div>
            <div className="col-md-3 col-6">
              <div className="number">{this.props.world.recovered }</div>
              <div className="RECOVERED">{t("RECOVERED")}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  world: state.reducers.world,
})

const mapDispatchToProps = (dispatch) => ({
  allWorldData: () => {
    dispatch(getWorld())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(World))
