import React, {Component} from 'react';
import {Layout,Header, Navigation,Drawer,Content} from 'react-mdl';
import { Link} from 'react-router-dom';
import Main from './Main';
class NavBar extends Component{
    render(){
        return(

<div className="demo-big-content">
    <Layout>
        
    <Header className="header-color" Link to={"/about"} title="MercyJemosop" scroll>
            <Navigation>
          
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
             
            </Navigation>
            </Header>
        <Drawer title="MercyJemosop">
            <Navigation>
            
            <Link to="/resume">Springboot</Link>
                <Link to="/about">Laravel</Link>
                <Link to="/projects">React</Link>
                <Link to="/contact">Angular</Link>
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