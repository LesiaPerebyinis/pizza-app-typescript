
import PizzaList from '../components/PizzaList';

export default function Home() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
      <section>
        <PizzaList />
      </section>
    </main>
  );
}
