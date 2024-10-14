import "./../App.scss";

type Props = {
  content: string;
  setcontent: (text: string) => void;
  onNewComment: () => void;
};

export default function Post({ content, setcontent,onNewComment }: Props) {
  return (
    <div className="reply-box-wrap">
      <textarea
        className="reply-box-textarea"
        placeholder="tell something..."
        value={content}
        onChange={(e) => setcontent(e.target.value)}
      />
      <div className="reply-box-send" onClick={onNewComment}>
        <div className="send-text">post</div>
      </div>
    </div>
  );
}
