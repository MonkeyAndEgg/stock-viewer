import { Box } from "@mui/material";

interface ContainerProps {
  children: JSX.Element;
}

export default function Container({ children }: ContainerProps) {

  return (
    <Box sx={{ height: 'calc(100vh - 80px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </Box>
  );
}