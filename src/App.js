import "./App.css";


function App() {
    return (
    <div className='container'>
      <div className='wrapper'>
        <div className="head">
            <h5>Calculator</h5>
        </div>
        
        <div className="btn-clmn">
            <span></span>
            <h6>Cake</h6>
            <label class="switch">
            <input type="checkbox"></input>
            <span class="slider round"></span>
            </label>
            <h6>USD</h6>
        </div>
        <div className="display">
         <h5 className="first-txt">2.1000 Cake</h5>
        </div>
        <div className="btn-cont">
          <button className="btn1">USE BALANCE</button>
          <button className="btn2">$1000</button>
          <button className="btn2">$100</button>
          <span class="sidetxt">~$20.82</span>
        </div>
        <h6 style={{color:"black"}}>Timeframe</h6>
        <div className="circles">
            <div className="circle">1 day</div>
            <div className="circle">7 day</div>
            <div className="circle">30 days</div>
            <div className="circle">1 year</div>
            <div className="circle">5 year</div>
        </div>
        <div className="acc">
          <h5 className="apy-text">Enable Accelerated APY</h5>
          <label class="switch">
            <input type="checkbox"></input>
            <span class="slider round"></span>
          </label>
        </div>
        <h6 className="tier">Select Tier</h6>
        <div className="circles">
            <div className="circle">Tier 1</div>
            <div className="circle">Tier 2</div>
            <div className="circle">Tier 3</div>
            <div className="circle">Tier 4</div>
            <div className="circle">Tier 5</div>
        </div>
        <div className="roi">
          ROI at current rates
        </div>
        <div className="display">
         <h5 className="hzar">1000 USD</h5>
        </div>

        <div className="finalbtns">
          <button className="btn-final">Apply</button>
          <button className="btn-final">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default App;
