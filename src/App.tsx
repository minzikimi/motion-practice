// App.tsx

import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: tomato;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display:grid;
  grid-template-columns : repeat(2, 1fr);

  `;

const Circle = styled(motion.div)`
background-color:white;
height:70px;
width:70px;
border-radius:50%;
place-self:center;
`

function App() {
  return (
    <Wrapper>
      <Box>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Box>
    </Wrapper>
  );
}

export default App;
