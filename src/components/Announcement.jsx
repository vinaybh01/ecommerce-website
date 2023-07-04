import { styled } from "styled-components";

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-style: 14px;
`;
function Announcement() {
  return (
    <div>
      <Container>Super Deal! Free Shipping on Orders Over $50</Container>
    </div>
  );
}

export default Announcement;
