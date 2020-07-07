import React ,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Home extends Component{
    render(){
        return(
            <div style={{width: '100%',margin:'auto'}}>
                <Grid className="home-grid">
                      <Cell col={12}>
                          <img 
                          src="images/mm.png"
                          alt="MercyJemosop" 
                          className="mercyImage"
                          />

                          <div className="banner-text">
                              <h1>Full stack Web Developer</h1>
                              <hr/>
                              <p>HTML/CSS | Bootsrap | JavaScript | React | Angular | PHP | Laravel | Java | Springboort | Android </p>
                         <div className="social-links">
                             <a href="https://google.com"rel="noopener noreferrer"  target="_blank"><i className="fa fa-linkedin-square"  aria-hidden="true"/></a>
                             <a href="https://google.com"rel="noopener noreferrer"  target="_blank"><i className="fa fa-linkedin-square"  aria-hidden="true"/></a>
                             <a href="https://google.com"rel="noopener noreferrer"  target="_blank"><i className="fa fa-linkedin-square"  aria-hidden="true"/></a>
                             <a href="https://google.com"rel="noopener noreferrer"  target="_blank"><i className="fa fa-linkedin-square"  aria-hidden="true"/></a>
                         </div>
                          </div>

                      </Cell>
                </Grid>
            </div>
        );
    }
}
export default Home;