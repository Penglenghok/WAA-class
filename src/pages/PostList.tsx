import { Button, Col, Divider, Input, List, Row } from "antd";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { postAtom } from "../atoms/post.atom";
import { useNavigate } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useAtom(postAtom);

  const [text, settext] = useState("");

  const onSetPost = () => {
    const payload = {
      id: (Number(posts.at(-1)?.id ?? 0) + 1).toString(),
      message: text,
    };
    setPosts([...posts, payload]);
    settext("");
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
            placeholder="Post Message"
            size="large"
            value={text}
            onChange={(e) => settext(e.target.value)}
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
              <p>Message: {item.message}</p>
            </div>
            <Button onClick={() => onPostDetail(item.id)}>Detail</Button>
          </List.Item>
        )}
      />
    </div>
  );
}
