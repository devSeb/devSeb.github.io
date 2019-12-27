import React, { Component } from 'react';
import { Link } from 'react-router'


/** Components **/
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

class CssModule extends Component {

    static propTypes = {};

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount () {
        require('./style.less');
    }

    componentWillReceiveProps(nextProps) { }

    render() {
        var self = this;
        var activeNavBar = "Projects";
        return(

            <div className="css-module">
                <div>
                    <NavBar active={activeNavBar}/>
                </div>
               <div className="container">
                   <div className="menu">
                       <ul className="container-menu">
                           <li><button>FlexBox</button></li>
                           {/* <li><button> Css Grid</button></li> */ }
                        </ul>
                   </div>
                    <div>
                        <h1>Simple tuto Flexbox</h1>
            

                        <h3 className="m-top">FlexBox- Simple header exemple </h3>
                    
                        <p className="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="devseb94" data-slug-hash="jOEwjBe"  data-pen-title="css test">
                            <span>See the Pen <a href="https://codepen.io/devseb94/pen/jOEwjBe">
                            css test</a> by devseb (<a href="https://codepen.io/devseb94">@devseb94</a>)
                            on <a href="https://codepen.io">CodePen</a>.</span>
                        </p>

                        <h3 className="m-top">FlexBox - Simple card</h3>
                        <p className="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="devseb94" data-slug-hash="wvBqMGO" data-pen-title="Flexbox - Simple card native">
                            <span>See the Pen <a href="https://codepen.io/devseb94/pen/wvBqMGO">
                            Flexbox - Simple card native</a> by devseb (<a href="https://codepen.io/devseb94">@devseb94</a>)
                            on <a href="https://codepen.io">CodePen</a>.</span>
                        </p>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}
export default (CssModule);
