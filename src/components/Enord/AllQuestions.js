import { Avatar } from "@material-ui/core";
// import React, { useState } from "react";
import "./css/AllQuestions.css";
// import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
// import { stringAvatar } from "../../utils/Avatar";

function AllQuestions() {
    // parameter hai  { data }
//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   let tags = JSON.parse(data?.tags[0]);
//   // console.log();
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>0</p>
              {/* {data?.answerDetails?.length}  0 ki jgh*/}
              <span>Answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to='/question'>What are the legal requirements for flying 
          a drone in my country/region?
          </Link>
          {/* {data.title}  link ke andr ka cont. */}
          {/* to={`/question?q=${data?._id}`} left link ke baad ka */}

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>Legal requirements for flying a drone
                 vary by country/region. It's essential 
                 to research and understand the regulations 
                 set by your local aviation authority, including 
                 registration, licensing, and airspace restrictions.
            </div>
            {/* Div ke andr ka {ReactHtmlParser(truncate(data.body, 200))} */}
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <span className="question-tags">react
            </span>
            <span className="question-tags">javascript</span>
            <span className="question-tags">frontend</span>

            {/* {tags.map((_tag) => (
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))} */}
          </div>
            <div className="author">
            <small>Timestamp</small> 
            {/* small ke andr {data.create_at} */}
            <div className="author-details">
              <Avatar  />
              {/* inside Avatar  {...stringAvatar(data?.user?.displayName)} */}
              <p>User name
                {/* {data?.user?.displayName
                  ? data?.user?.displayName
                  : "Natalie lee"} */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;