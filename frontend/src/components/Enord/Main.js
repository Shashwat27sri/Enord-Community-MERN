import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./css/Main.css";
import AllQuestions from "./AllQuestions";
import { Link } from "react-router-dom";
// import axios from "axios";

function Main( ) {
  // const [questions, setQuestions] = useState([]);

  // console.log(questions);
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/add-question"><button>Ask Question</button></Link>
          
          {/* <a href="/add-question"> */}

          {/* </a> */}
        </div>
        <div className="main-desc">
          <p>All question List</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                {/* <a href="/">Newest</a> */}
                <Link>Newest</Link>
              </div>
              <div className="main-tab">
                <Link>Active</Link>

                {/* <a href="/">Active</a> */}
              </div>
              <div className="main-tab">
                {/* <a href="/">More</a> */}
                <Link >More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          {/* {questions?.map((_q) => ( */}
            <div className="question">
              <AllQuestions />
              <AllQuestions />
              <AllQuestions />
              <AllQuestions />
              <AllQuestions />
              {/* <AllQuestions />
              <AllQuestions />
              <AllQuestions />
              <AllQuestions />
              <AllQuestions /> */}

              {/* data={_q}   All questions ke andr jayega ye*/} 
            </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
}

export default Main;