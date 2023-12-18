import { Avatar } from "@material-ui/core";
// import React, { useState } from "react";
import "./css/AllQuestions.css";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
// import { stringAvatar } from "../../utils/Avatar";

function AllQuestions({question}) {
  
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

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
              <p>{question?.answerDetails?.length}</p>
              {/* {data?.answerDetails?.length}  0 ki jgh*/}
              <span>Answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to={`/question?q=${question?._id}`} >{question?.title}
          </Link>
          {/* {data.title}  link ke andr ka cont. */}
          {/* to={`/question?q=${data?._id}`} left link ke baad ka */}

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>
              {ReactHtmlParser(truncate(question?.body,200))}
            </div>
            
          </div>
          
            <div className="author">
            <small>{new Date(question?.created_at).toLocaleString()}</small> 
            {/* small ke andr {data.create_at} */}
            <div className="author-details">
              <Avatar src={question?.user?.photo} />
              {/* inside Avatar  {...stringAvatar(data?.user?.displayName)} */}
              <p>{question?.user?.displayName ? question?.user?.displayName : String(question?.user?.email).split('@')[0] }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;