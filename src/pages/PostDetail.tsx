import { useAtomValue } from "jotai";
import { useNavigate, useParams } from "react-router-dom";
import { postAtom } from "../atoms/post.atom";
import { Button, Card, Divider } from "antd";

export default function PostDetail() {
  const { id } = useParams();
  const posts = useAtomValue(postAtom);

  const selectedPost = () => {
    return posts.find((post) => post.id == id);
  };

  const navigate = useNavigate();

  const onEditPost = () => {
    navigate(`/${id}/edit`);
  };

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <Divider />

      <Card>
        <p>
          ID: <b>{selectedPost()?.id}</b>
        </p>
        <p>
          Name: <b>{selectedPost()?.message}</b>
        </p>

        <Button onClick={onEditPost} type="primary">
          Edit Post
        </Button>
      </Card>
    </div>
  );
}
