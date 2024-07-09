import { useState } from "react";
import "./advice.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Advice = () => {
  const [advice, setAdvice] = useState("Please click button to get advice");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    //    console.log(res)
    const data = await res.json();
    //    console.log(data)

    setAdvice(data.slip.advice);
    setCount((e) => e + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  const Counter = (props) => {
    return (
      <p>
        You have read <b>{props.count}</b> pieces of advice
      </p>
    );
  };

  // Define prop types for validation
  Counter.propTypes = {
    count: PropTypes.number.isRequired,
  };

  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice </button>
      <Counter count={count} />
    </div>
  );
};

export default Advice;
