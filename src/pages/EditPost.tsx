import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postAtom } from "../atoms/post.atom";
import { Button, Col, Divider, Input, Row } from "antd";

export default function EditDetail() {
  const { id } = useParams();
  const [posts, setPosts] = useAtom(postAtom);

  const [text, settext] = useState<string>("");

  const navigate = useNavigate();

  const selectedPost = () => {
    return posts.find((post) => post.id == id) ?? { id: "", message: "" };
  };

  useEffect(() => {
    settext(selectedPost().message);
  }, []);

  const onEditPost = () => {
    const payload = {
      ...selectedPost(),
      message: text,
    };
    const tmpPost = [...posts];
    tmpPost.splice(
      posts.findIndex((post) => post.id == id),
      1,
      payload
    );
    setPosts(tmpPost);
    navigate(-1);
  };

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <Divider/>
      <Row gutter={16}>
        <Col>
          <Input
            placeholder=""
            size="large"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
        </Col>
        <Col>
          <Button size="large" type="primary" onClick={onEditPost}>
            Edit
          </Button>
        </Col>
      </Row>
    </div>
  );
}
