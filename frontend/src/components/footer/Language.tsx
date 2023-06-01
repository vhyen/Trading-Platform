import { useState } from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

export default function Language() {
  const [language, setLanguge] = useState("English");
  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        title={language}
        variant="light"
        style={{
          border: "#000 solid 1px",
          height:"40px"
        }}
        onSelect={(eventKey: any) => setLanguge(eventKey)}
      >
        {language != "English" && (
          <Dropdown.Item eventKey="English">English</Dropdown.Item>
        )}
        {language != "Vietnamese" && (
          <Dropdown.Item eventKey="Vietnamese">Vietnamese</Dropdown.Item>
        )}
        {language != "France" && (
          <Dropdown.Item eventKey="France">France</Dropdown.Item>
        )}
      </DropdownButton>
    </>
  );
}
