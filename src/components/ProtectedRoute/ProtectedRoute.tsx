import { Navigate } from "react-router-dom";

interface ProtectRoutesProps {
  children: JSX.Element;
  condition: boolean;
  redirectUrl: string;
}

export default function ProtectedRoute({ children, condition, redirectUrl }: ProtectRoutesProps) {

  if (!condition) {
    return <Navigate to={redirectUrl} />;
  }

  return children;
}