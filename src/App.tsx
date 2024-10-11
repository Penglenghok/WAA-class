import { useState } from "react";
import "./App.scss";
import Comment from "./components/Comment";
import avatar from "./images/bozai.png";
import { orderBy } from "lodash";
import moment from "moment";

// Comment List data
const defaultList = [
  {
    // comment id
    rpid: 3,
    // user info
    user: {
      uid: "13258165",
      avatar: "",
      uname: "Jay Zhou",
    },
    // comment content
    content: "Nice, well done",
    // created datetime
    ctime: "10-18 08:15",
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar: "",
      uname: "Song Xu",
    },
    content: "I search for you thousands of times, from dawn till dusk.",
    ctime: "11-13 11:29",
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content:
      "I told my computer I needed a break... now it will not stop sending me vacation ads.",
    ctime: "10-19 09:00",
    like: 66,
  },
];
// current logged in user info
const user = {
  // userid
  uid: "30009257",
  // profile
  avatar,
  // username
  uname: "John",
};

// Nav Tab
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

const App = () => {
  const [comments, setcomments] = useState(defaultList);
  const [content, setcontent] = useState("");

  const [currentFilter, setcurrentFilter] = useState<string>("");

  const onFilter = (filter: string) => {
    setcurrentFilter(filter);
    setcomments(
      orderBy([...comments], filter === "hot" ? "like" : "ctime", "desc")
    );
  };

  const isSelectedFilter = (filter: string) => {
    return currentFilter === filter ? "#00aeec" : "";
  };

  const onNewComment = () => {
    const data = {
      user,
      ctime: moment().format("MM-DD HH:MM"),
      like: 0,
      content,
      rpid: comments[0].rpid + 1,
    };
    setcomments([data, ...comments]);
    setcontent("");
  };

  const onDelete = (index: number) => {
    const tmp = [...comments];
    tmp.splice(index, 1);
    setcomments(tmp);
  };

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{defaultList.length}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs?.map((tab, index) => {
              return (
                <span
                  className="nav-item"
                  onClick={() => onFilter(tab.type)}
                  style={{ color: isSelectedFilter(tab.type) }}
                  key={index}
                >
                  {tab.text}
                </span>
              );
            })}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              className="reply-box-textarea"
              placeholder="tell something..."
              value={content}
              onChange={(e) => setcontent(e.target.value)}
            />
            {/* post button */}
            <div className="reply-box-send" onClick={onNewComment}>
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        {comments?.map((item, index) => {
          return (
            <Comment key={index} data={item} onDelete={() => onDelete(index)} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
