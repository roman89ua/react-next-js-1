import { Col, Row } from "react-bootstrap";
import { NextPage } from "next";
import Link from "next/link";

const ClientsPage: NextPage = () => {
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

  return (
    <Row>
      <h1 className="text-center">Clients Page!</h1>

      <Col>
        <ul>
          {clientsObj.map((client) => (
            <li key={client.id}>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};
export default ClientsPage;
