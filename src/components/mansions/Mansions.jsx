import React from 'react'
import './mansions.css'
import {BsFillSaveFill} from 'react-icons/bs'
const Mansions = () => {
  return (
     <div className='container'> 
    <div className=".container-card-items">
        <div className="card1">
            <div className="card1-items">
                <div className="title">All Mansions</div>
                <div className="value">0</div>
            </div>
            <div class="vl"></div>
            <div className="card1-items">
                <div className="title">My Mansions</div>
                <div className="value">-/0</div>
            </div>
            <div class="vl"></div>
            <div className="card1-items">
                <div className="title">My Rewards</div>
                <div className="value">-$PLAYMATES</div>
            </div>
            <div className="card1-items">
                    <BsFillSaveFill className='card1-items-logo'/>
            </div>
        </div>

        <div className="card1">
        <div className="card1-items">
                <div className='card1-items-left'>
                    <div className="title">
                        <h4>Create a Mansion</h4>
                    </div>
                    <div className="value">
                    <h4>Compound</h4>
                    </div>
                </div>
            </div>
            <div class="vl"></div>
            <div className="card1-items">
                <div className="title">All Mansions</div>
                <div className="value">0</div>
            </div>
           
        </div>

        <div className='card3'>
            <h3>Your Mansions</h3>
        <div className="card1">
            <div className="card1-items">
                <div className="title">ID</div>
                {/* <div className="value">0</div> */}
            </div>
            <div class="vl"></div>
            <div className="card1-items">
                <div className="title">Name</div>
                {/* <div className="value">-/0</div> */}
            </div>
            <div class="vl"></div>
            <div className="card1-items">
                <div className="title">Creation</div>
                {/* <div className="value">-$PLAYMATES</div> */}
            </div>
            <div class="vl"></div>
            <div className="card1-items">
                <div className="title">Last Clain</div>
                {/* <div className="value">-$PLAYMATES</div> */}
            </div>
            <div class="vl"></div>
            <div className="card1-items">
                <div className="title">Claimed Rewards</div>
                {/* <div className="value">-$PLAYMATES</div> */}
            </div>
            <div class="vl"></div>
            <div className="card1-items">
                <div className="title">Pending Rewards</div>
                {/* <div className="value">-$PLAYMATES</div> */}
            </div>
            <div class="vl"></div>
            <div className="card1-items">
                <div className="title">RPC</div>
                {/* <div className="value">-$PLAYMATES</div> */}
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Mansions