import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Coronavirus.styles';
import gfx from './../../assets/image/gfx-a.png'
import { withTranslation } from 'react-i18next';
class Coronavirus extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  

  render () {
   const {t}=this.props;
    return (

      <div className="CoronavirusWrapper mt-5 pt-5">
<div className="container">
  <div className="row">
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <img src={gfx} alt=""  className="w-100 img-fluid" />
    </div>
    <div className="col-md-6 h-100">
      <h6 className="About">
         
        {t('About')}
 </h6>
 <h4 className="title-Coronavirus">
 {t('Coronavirus')} {t('Covid-19')}

 </h4>
 <article>
 <p>
{t('pOne')}
 </p>
 <p>
 {t('pTwo')}

</p>
<p>
{t('pThree')}

</p>


 </article>
    </div>
  </div>
</div>
    
      </div>
    );
  }
}



export default withTranslation()(Coronavirus);
