import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ReactCountryFlag from 'react-country-flag'
import { withTranslation } from 'react-i18next'

class Table extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      val: '',
    }
  }

  componentWillMount = () => {
    console.log('Table will mount')
  }
  search = (e) => {
    this.setState({
      val: e.target.value,
    })
  }
  render() {
    const { t } = this.props
    return (
      <div className="TableWrapper mb-5">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-8 mx-auto">
              <input
                type="text"
                className="w-100"
                placeholder={t('search')}
                onKeyUp={this.search}
              />
            </div>
          </div>
        </div>

        {(() => {
          if (
            this.props.table.filter((x) => {
              return x.countryRegion
                .toLowerCase()
                .includes(this.state.val.toLowerCase())
            }).length != 0
          ) {
            return (
              <div>
                <div className="container">
                  <div className="row mt-4">
                    <div className="pt-2 fix-table col-md-12 table-responsive text-center">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">{t('flag')}</th>
                            <th scope="col">{t('nameCountry')}</th>
                            <th scope="col">
                              {t('total')}-{t('DEATHS')}
                            </th>
                            <th scope="col">
                              {t('total')}-{t('CONFIRMED')}
                            </th>
                            <th scope="col">
                              {t('total')}-{t('RECOVERED')}
                            </th>
                            <th scope="col">
                              {t('total')}-{t('active')}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.table
                            .filter((x) => {
                              return x.countryRegion
                                .toLowerCase()
                                .includes(this.state.val.toLowerCase())
                            })

                            .map((item) => (
                              <tr>
                                <td>
                                  <ReactCountryFlag
                                    countryCode={item.iso2}
                                    svg
                                  />
                                </td>
                                <td>{item.countryRegion}</td>
                                <td>{item.deaths}</td>
                                <td>{item.confirmed}</td>
                                <td>{item.recovered}</td>
                                <td>{item.active}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div>
                <div className="container my-2">
                  <div className="row ">
                    <div className="col-md-8 p-5 mx-auto card-error text-center">
                      <i className="fas fa-archive"></i>
                      <div className="text-center"> not Found any Data</div>
                      <div className="text-center">
                        {' '}
                        pleases write name country correct
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  table: state.reducers.table,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Table))
