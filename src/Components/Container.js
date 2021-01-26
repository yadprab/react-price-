import React,{useState, useEffect} from "react";
import {Slider} from '@material-ui/core';
import { withStyles} from "@material-ui/core/styles";
const Container = () => {
  const [toggle, setToggle] = useState(false);
  const [catchVal, setVal]=useState(20);
  const [price, setPrice]= useState('16');
  const [type, setType] = useState('monthly');

  const priceVal = ()=>{

    if (type === "monthly" && catchVal <= 20) {
      setPrice("16");
    } else if (type === "yearly" && catchVal <= 20) {
      setPrice("48");
    } else if (type === "monthly" && catchVal > 20 && catchVal <= 40) {
      setPrice("32");
    } else if (type === "yearly" && catchVal > 20 && catchVal <= 40) {
      setPrice("96");
    } else if (type === "monthly" && catchVal > 40 && catchVal <= 60) {
      setPrice("64");
    } else if (type === "yearly" && catchVal > 40 && catchVal <= 60) {
      setPrice("192");
    } else if (type === "monthly" && catchVal > 60 && catchVal <= 80) {
      setPrice("128");
    } else if (type === "yearly" && catchVal > 60 && catchVal <= 80) {
      setPrice("384");
    } else if (type === "monthly" && catchVal > 80 && catchVal <= 100) {
      setPrice("256");
    } else if (type === "yearly" && catchVal > 80 && catchVal <= 100) {
      setPrice("768");
    }




  }
  
  const PrettoSlider = withStyles({
    root: {
      color: "hsl(174, 77%, 80%)",
      height: 8,
    },
    thumb: {
      height: 30,
      width: 30,
      background: " url(/images/icon-slider.svg), hsl(174, 86%, 45%)",
      backgroundImage: "url(/images/icon-slider.svg)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      boxShadow:'0px 16px 26px 0px hsl(174, 77%, 80%) ',
      marginTop: -12,
      marginLeft: -14,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
   track: {
      height: 10,
      borderRadius: 4,
    },
    rail: {
      height: 10,
      borderRadius: 4,
      backgroundColor: "hsl(224, 65%, 95%)",
    },
  })(Slider);

  useEffect(() => {
    
    priceVal();
  })

  return (
    <>
      <section className="container">
        <article className="slider--section">
          <h2 className='pages'>{`${
            type === "monthly" ? catchVal : catchVal * 2
          }k page views`}</h2>
          <section className="slider">
            <PrettoSlider
              valueLabelDisplay="off"
              aria-label="pretto slider"
              defaultValue={20}
              onChange={(event, newValue) => {
                setVal(newValue);
              }}
              value={catchVal}
            />
          </section>

          <h2 id="price">
            {`$ ${price}`}
            <span className="text--small">/{type}</span>
          </h2>
          
          <article className="toggle--section">
            <p className="text--small">Monthly Billing</p>
            <label
              htmlFor="toggle"
              className={`toggle--button ${toggle ? "yearly" : ""} `}
            >
              <button
                id="toggle"
                onClick={() => {
                  setToggle(!toggle);
                  toggle ? setType("monthly") : setType("yearly");
                }}
              ></button>
            </label>
            <p className="text--small">
              Yearly Billing <span className='discount'>-25%  <span>discount</span> </span>
            </p>
          </article>
        </article>
        <article className="bottom--section">
          <ul>
            <li>
              <img src="/images/icon-check.svg" alt="icon-check" />
              <p className="text--small">Unlimited websites</p>
            </li>
            <li>
              <img src="/images/icon-check.svg" alt="icon-check" />
              <p className="text--small"> 100% data ownership</p>
            </li>
            <li>
              <img src="/images/icon-check.svg" alt="icon-check" />
              <p className="text--small"> Email reports</p>
            </li>
          </ul>
          <button id='start--trial' aria-label='start-trail button'>start my trail</button>
        </article>
      </section>
    </>
  );
};

export { Container };
