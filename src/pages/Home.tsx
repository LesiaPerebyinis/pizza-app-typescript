
import PizzaList from '../components/PizzaList';

export default function Home() {
  return (
    <main className='grow'>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 grow text-brand-blue">
        <PizzaList />
      </section>
    </main>
  );
}
