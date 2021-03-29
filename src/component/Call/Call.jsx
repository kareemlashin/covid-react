import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next';

class Call extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  render () {
   const {t}=this.props;
    return (
      <div className="CallWrapper">
        <div className="container call mb-3">
          <div className="row">
            <div className="col-md-9">
          <div className="row">
          <div className="col-1 d-flex justify-content-center  align-items-center">
          <i className="fas fa-exclamation-triangle"></i>

          </div>
          <div className="col-11">
            <span>
            {t('call')}

            </span>
{t('call2')}

          </div>
          </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center  align-items-center">
              <button className="but-dar rounded-pill">
              
              {t('line')}

              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Call.propTypes = {
  // bla: PropTypes.string,
};

Call.defaultProps = {
  // bla: 'test',
};

export default withTranslation()(Call);
