// App.tsx

import styled from "styled-components";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";

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
  background-color: rgba(255, 255, 255, 1);

`;



function App() {
  const x = useMotionValue(0);
  
  useMotionValueEvent(x, "change", (latest) => {
    console.log(latest);
  });

  return (
    <Wrapper>
      <Box
        style={{ x }} 
        drag="x"     
        dragSnapToOrigin
        
      />
    </Wrapper>
  );
}

export default App;
