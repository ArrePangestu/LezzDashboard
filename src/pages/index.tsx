import Dashboard from '@/components/Dashboard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Dashboard />
        <Footer />
      </main>
    </div>
  );
}
