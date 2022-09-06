import { Button, Row } from "react-bootstrap";
import { NextPage } from "next";
import { useRouter } from "next/router";

const CurrentClientPage: NextPage = () => {
  const { query, push } = useRouter();
  const clientsObj = [
    {
      id: "roman",
      name: "Roman Kostiuk",
      ClientProjectId: "marketPlace",
    },
    {
      id: "julia",
      name: "Julia Bolgak",
      ClientProjectId: "BeautySalon",
    },
    {
      id: "sofia",
      name: "Sofia Kostiuk",
      ClientProjectId: "dentistsShop",
    },
  ];

  function onLoadProjectPage(projectId: string) {
    const currentClientObj = clientsObj.find(
      (client) => client.id === projectId
    );
    push({
      pathname: "[id]/[clientProjectId]",
      query: {
        id: currentClientObj?.id,
        clientProjectId: currentClientObj?.ClientProjectId,
      },
    });
  }

  return (
    <Row>
      <h1 className="text-center">CurrentClientPage</h1>
      <p>{`Client with id: ${query?.id || ""} `}</p>
      <Button
        onClick={() => onLoadProjectPage(query?.id as string)}
        variant="primary"
      >
        Load clients project
      </Button>
    </Row>
  );
};
export default CurrentClientPage;
