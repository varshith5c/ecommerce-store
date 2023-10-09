import { Button } from "../ui/button";

export default function BackButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Button>Back</Button>
    </div>
  );
}
