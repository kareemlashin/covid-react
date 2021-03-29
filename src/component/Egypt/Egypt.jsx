import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getEgypt } from '../../core/action/action'
import {withTranslation} from 'react-i18next'

class Egypt extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount = () => {
    this.props.allEgyptData()
  }

  render() {
    const {t, i18n} = this.props;

    return (
      <div className="EgyptWrapper mt-4">
        <div className="container">
          <h6 className="c-color font-weight-bold">Egypt Statistics</h6>
          {(() => {
            if (this.props.egypt !={}) {
              return (
                <div>
                  <div className="row">
                    <div className="col-md-3 col-6">
                      <div className="number">
                        {this.props.egypt.confirmed}
                      </div>
                      <div className="CONFIRMED">{t('CONFIRMED')}</div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="number">
                      {this.props.egypt.deaths}

                      </div>
                      <div className="DEATHS">{t('DEATHS')}</div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="number">
                      {this.props.egypt.recovered}

                      </div>
                      <div className="RECOVERED">{t("RECOVERED")}</div>
                    </div>
                  </div>
                </div>
              )
            } else {
              return <div></div>
            }
          })()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  egypt: state.reducers.egypt,
})

const mapDispatchToProps = (dispatch) => ({
  allEgyptData: () => {
    dispatch(getEgypt())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Egypt))