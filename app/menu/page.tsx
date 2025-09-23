import { Container } from "@/components/container";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function MenuPage() {
  return (
    <Container className="h-full min-h-[calc(100vh-var(--header-height))] py-10">
      <Card>
        <CardHeader>
          <CardTitle>Menu</CardTitle>
        </CardHeader>
      </Card>
    </Container>
  );
}
