import "./../App.scss";
type Props = { data: any; onDelete: () => void };

export default function Comment({ data, onDelete }: Props) {
  const { user, content, like, ctime } = data;
  return (
    <div className="reply-list">
      {/* comment item */}
      <div className="reply-item">
        {/* profile */}
        <div className="root-reply-avatar">
          <div className="bili-avatar">
            <img
              className="bili-avatar-img"
              src="https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0"
              alt=""
            />
          </div>
        </div>

        <div className="content-wrap">
          {/* username */}
          <div className="user-info">
            <div className="user-name">{user?.uname}</div>
          </div>
          {/* comment content */}
          <div className="root-reply">
            <span className="reply-content">{content}</span>
            <div className="reply-info">
              {/* comment created time */}
              <span className="reply-time">{ctime}</span>
              {/* total likes */}
              <span className="reply-time">Like:{like}</span>
              <span className="delete-btn" onClick={onDelete}>
                Delete
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
