import { Fragment } from "react";

function FinishedPage({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <Fragment>
      <p className="result">
        you scored <strong>{points}</strong>out of {maxPossiblePoints} (
        {Math.ceil(percentage)})
      </p>
      <p className="highscore">(Highscore:{highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </Fragment>
  );
}

export default FinishedPage;
