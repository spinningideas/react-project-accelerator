import { CardTitle } from "@/components/ui/card";
import { APPLICATION_NAME } from "@/constants";

const SignInHeader = ({ className }: { className?: string }) => {
  const title = APPLICATION_NAME;

  return <CardTitle className={className}>{title}</CardTitle>;
};

export default SignInHeader;
