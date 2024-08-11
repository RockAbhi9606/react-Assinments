import React from "react";
import { commentsData } from "../utilities/constant";
import CommentsList from "./CommentsList";

function CommentsContainer() {
  return (
    <>
      <div>
        <p className="text-xl font-semibold pb-3 border-b-2">Comments</p>
      </div>
      <div className="text-sm">
        <CommentsList comments={commentsData} />
      </div>
    </>
  );
}

export default CommentsContainer;
