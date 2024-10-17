import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postAtom } from "../atoms/post.atom";
import { Button, Col, Divider, Input, Row } from "antd";

export default function EditDetail() {
  const { id } = useParams();

  const [posts, setPosts] = useAtom(postAtom);

  const [content, setContent] = useState<string>("");
  const [title, settitle] = useState<string>("");

  const navigate = useNavigate();

  const selectedPost = () => {
    return (
      posts.find((post) => post.id == id) ?? { id: "", content: "", title: "" }
    );
  };

  useEffect(() => {
    setContent(selectedPost().content);
    settitle(selectedPost().title);
  }, []);

  const onEditPost = () => {
    const payload = {
      ...selectedPost(),
      title: title,
      content: content,
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
      <Divider />
      <Row gutter={16}>
        <Col>
          <Input
            placeholder="Title"
            size="large"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <Input
            placeholder="Content"
            size="large"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
