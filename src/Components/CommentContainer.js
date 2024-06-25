import React from "react";

const commentData = [
  {
    name: "vipin kumar",
    text: "I am iterested this video and more motivated ",
    replies: [],
  },

  {
    name: "vipin kumar",
    text: "I am iterested this video and more motivated ",
    replies: [
      {
        name: "vipin kumar",
        text: "I am iterested this video and more motivated ",
        replies: [],
      },
    ],
  },

  {
    name: "vipin kumar",
    text: "I am iterested this video and more motivated ",
    replies: [
      {
        name: "vipin kumar",
        text: "I am iterested this video and more motivated ",
        replies: [],
      },
    ],
  },
  {
    name: "vipin kumar",
    text: "I am iterested this video and more motivated ",
    replies: [
      {
        name: "vipin kumar",
        text: "I am iterested this video and more motivated ",
        replies: [
          {
            name: "vipin kumar",
            text: "I am iterested this video and more motivated ",
            replies: [
              {
                name: "vipin kumar",
                text: "I am iterested this video and more motivated ",
                replies: [
                  {
                    name: "vipin kumar",
                    text: "I am iterested this video and more motivated ",
                    replies: [
                      {
                        name: "vipin kumar",
                        text: "I am iterested this video and more motivated ",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "vipin kumar",
    text: "I am iterested this video and more motivated ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ Comments }) => {
  // Disclaimer: Don't use indexes as keys
  return Comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList Comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">comments:</h1>
      <CommentsList Comments={commentData} />
    </div>
  );
};

export default CommentContainer;
