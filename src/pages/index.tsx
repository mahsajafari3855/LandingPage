import Image from 'next/image'
import { Inter } from 'next/font/google'
import CursusIntegerSection from './components/cursusIntegerSection/CursusIntegerSection';
import SearchBar from './components/SearchBar';
import RegisterSection from './components/RegisterSection';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    < >
      <div className=" flex item-center justify-center">
        <SearchBar />
      </div>
      <CursusIntegerSection withSkew={false} />
      <RegisterSection withSkew={true} backgroundClass="bg-yellow" />
    </>
  );
}
