import React, {Component} from 'react';
import {Layout,Header, Navigation,Drawer,Content} from 'react-mdl';
import { Link} from 'react-router-dom';
import Main from './Main';
class NavBar extends Component{
    render(){
        return(

<div className="demo-big-content">
    <Layout>
        
        <Header className="header-color" title={<a href="/" style={{textDecoration:"none",color:"white"}}>MercyJemosop</a> }  scroll>
            <Navigation>
          
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
             
            </Navigation>
            </Header>
            <Drawer title="MercyJemosop">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
           
        <Content>
            <div className="page-content" />
             <Main/>
        </Content>
    </Layout>
</div>
        );
    }

}

export default NavBar;