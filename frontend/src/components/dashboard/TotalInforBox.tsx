import { Col } from "react-bootstrap";

export default function TotalInfoBox({ highlight, description }: any) {
  return (
    <>
      <style className="text/css">
        {`
          .highlight{
            font-weight: 600;
            font-size: 40px;
            line-height: 48px;
            margin-bottom:0;
          }
      `}
      </style>
      <Col>
        <p className="highlight">{highlight}</p>
        <p>{description}</p>
      </Col>
    </>
  );
}
