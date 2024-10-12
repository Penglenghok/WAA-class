import { useEffect, useState } from "react";
import "./App.scss";
import Comment from "./components/Comment";
import avatar from "./images/bozai.png";
import { orderBy } from "lodash";
import moment from "moment";

const user = {
  uid: "30009257",
  avatar,
  uname: "John",
};

const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

const App = () => {
  const [comments, setcomments] = useState<Array<any>>([]);
  const [content, setcontent] = useState("");

  const [currentFilter, setcurrentFilter] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3004/comments").then((response) => {
      response.json().then((data) => {
        setcomments(data);
      });
    });
  }, []);

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
            <span className="total-reply">{comments.length}</span>
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
