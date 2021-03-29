import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import gfx from './../../assets/image/gfx-b.png'
import symptom1 from './../../assets/image/symptom-a.png'
import symptom2 from './../../assets/image/symptom-b.png'
import symptom3 from './../../assets/image/symptom-c.png'
import { withTranslation } from 'react-i18next'

class Symptoms extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  render() {
    const { t } = this.props
    return (
      <div className="SymptomsWrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 h-100">
              <h6 className="About">{t('symptoms?')}</h6>
              <h4 className="title-Coronavirus">
                {t('Symptoms-of-Coronavirus')}
              </h4>
              <div>
                <div className="row my-3">
                  <div className="col-2 d-flex  w-100 justify-content-center align-items-center">
                    <img
                      src={symptom1}
                      className=" w-100 img-fluid rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <span className="symptoms-symptoms">
                      {t('Continuous-cough')}
                    </span>
                    – {t('cough')}
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-2 d-flex  w-100 justify-content-center align-items-center">
                    <img
                      src={symptom2}
                      className=" w-100 img-fluid rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <span className="symptoms-symptoms">
                      {t('Difficulty-breathing')}
                    </span>
                    –{t('breathing')}
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-2 d-flex  w-100 justify-content-center align-items-center">
                    <img
                      src={symptom3}
                      className=" w-100 img-fluid rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <span className="symptoms-symptoms">{t('High')}</span>–
                    {t('Fever')}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 img d-flex justify-content-center align-items-center">
              <img src={gfx} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withTranslation()(Symptoms)
