import { useState, useEffect, ReactNode } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Providers } from '@/components/providers';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-grow animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="w-full text-black antialiased">
      {props.meta}
      <Providers>
        <Header />
        <div className="mx-auto mt-[96px]">
          <main className="content text-xl">{props.children}</main>
        </div>
        <Footer />
      </Providers>
    </div>
  );
};

export { Main };
