import React from 'react'
import styled from "styled-components";
import {BsArrowDownUp} from 'react-icons/bs'
import './body.css';
const Body = () => {
  return (
    <div className="container">
        <div className="card">
            <input type="radio" id="tab1" name="tabs" checked />
            <label for="tab1">Swap</label>
            <input type="radio" id="tab2" name="tabs" />
            <label for="tab2">Limit</label>
            <div id="content1">
                <div className="from-card">
                    <div className="p">From</div>
                    <div className="prices">
                        <div className="price-card">WETH</div>
                        <div className="value">0</div>
                    </div>
                    <div className="desc">
                        <div className="price">Wrapped Ether</div>
                        <div className="price">~$2300</div>
                    </div>
                </div>
                <div className="circle">
                <BsArrowDownUp />
                </div>
                <div className="to-card">
                    <div className="p">To (estimated)</div>
                    <div className="price-card-to">BOLLINGER</div>
                    <div className="primary-card">
                        <div className="selected">Primary</div>
                        <div className="units-conversion">
                            <div className="units">1 inch</div>
                            <div className="value">0</div>
                        </div>
                        <div className="unit-result">~Tx Cost 0 = (~$0)</div>
                    </div>
                    <div className="primary-card-2">
                        <div className="units-conversion">
                            <div className="units">-- / --</div>
                            <div className="value">0</div>
                        </div>
                        <div className="unit-result">~Tx Cost 0 = (~$0)</div>
                    </div>
                    
                </div>
                <div className="wrapper-div">
                <button type='submit' className='button'>Connect Wallet</button>
               </div>
            </div>
            <div className='btm-items'>
            <div className="units-conversion">
                <div className="units-btm">Rate</div>
                <div className="value-btm">1 BOL = 0 WETH(~$0) </div>
            </div>
            <div className="units-conversion">
                <div className="units-btm">Route</div>
                <div className="value-btm">Tx Cost 0 = (~$0) </div>
            </div>
            <div className="units-conversion">
                <div className="units-btm">Gas Refund</div>
                <div className="value-btm">1 BOL = 0 WETH(~$0) </div>
            </div>
            </div>
           
            <div id="content2">
                <p>Tab 2.
                </p>
            </div>
           
        </div>
    </div>
  )
}

export default Body

const Container = styled.div`
position: relative;
top: 50%;
left: 50%;
margin-left: -25%;
width: 50%;
height: 100vh;
background: white;
  }
`;