import { Button, Col, Divider, Input, List, Row } from "antd";
import { useAtom } from "jotai";
import { useState } from "react";
import { postAtom } from "../atoms/post.atom";
import { useNavigate } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useAtom(postAtom);

  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");

  const onSetPost = () => {
    const payload = {
      id: (Number(posts.at(-1)?.id ?? 0) + 1).toString(),
      title: title,
      content: content,
    };
    setPosts([...posts, payload]);
    setTitle("");
    setcontent("");
  };

  const navigate = useNavigate();

  const onPostDetail = (id: string) => {
    navigate(`/${id}/detail`);
  };

  return (
    <div>
      <Row gutter={16}>
        <Col>
          <Input
            placeholder="Title"
            size="large"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Content"
            size="large"
            value={content}
            onChange={(e) => setcontent(e.target.value)}
          />
        </Col>
        <Col>
          <Button size="large" type="primary" onClick={onSetPost}>
            Post
          </Button>
        </Col>
      </Row>
      <Divider />
      <List
        size="large"
        header={<div>All Posts</div>}
        bordered
        dataSource={posts}
        renderItem={(item) => (
          <List.Item>
            <div>
              <p>ID: {item.id}</p>
              <p>Title: {item.title}</p>
              <p>Content: {item.content}</p>
            </div>
            <Button onClick={() => onPostDetail(item.id)}>Detail</Button>
          </List.Item>
        )}
      />
    </div>
  );
}
