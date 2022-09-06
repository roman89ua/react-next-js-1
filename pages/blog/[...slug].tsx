import { Row } from "react-bootstrap";
import { NextPage } from "next";
import { useRouter } from "next/router";

const BlogPage: NextPage = () => {
  const { query } = useRouter();
  return (
    <Row>
      <h1 className="text-center">Blog Page!</h1>
      <p>
        all query params:{" "}
        {Array.isArray(query?.slug) &&
          !!query?.slug?.length &&
          query?.slug?.map((s: string) => (
            <span className="danger">{`${s}, `}</span>
          ))}
      </p>
    </Row>
  );
};
export default BlogPage;
