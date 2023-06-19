import { Home } from '@/home';
import PrivateLayout from '@/layout/PrivateLayout';

export default function HomePage() {
  return (
    <PrivateLayout>
      <Home />
    </PrivateLayout>
  );
}
