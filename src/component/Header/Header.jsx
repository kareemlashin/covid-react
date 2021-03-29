import React, { PureComponent } from 'react'
import advice from './../../assets/image/header.png'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
/*

*/
class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      height: '',
    }
  }
  componentWillMount = () => {
    let height =
      100 - this.props.nav * (100 / document.documentElement.clientHeight)
    this.setState({
      height: height,
    })
  }

  render() {
    const { t, i18n } = this.props
    return (
      <div className="HeaderWrapper">
        <header
          style={{
            minHeight: this.state.height + 'vh',
            Height: this.state.height + 'vh',
          }}
        >
          <div className="overlay">
            <div
              className="container d-flex justify-content-center align-items-center"
              style={{
                minHeight: this.state.height + 'vh',
                Height: this.state.height + 'vh',
              }}
            >
              <div className="w-100  ">
                <div className="row  ">
                  <div className="col-md-6  hed  ">
                    <div className="  hed d-flex align-items-center">
                      <div>
                        <div className="badge-Coronavirus">
                          <span>{t('Covid-19')}</span>
                          {t('Coronavirus')}
                        </div>
                        <h2>{t('headTitle')}</h2>
                        <p>{t('headP')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 ">
                    <div className="d-flex justify-content-center align-items-center ">
                      <div className="">
                        <img src={advice} className=" " alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.reducers.nav,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Header))
