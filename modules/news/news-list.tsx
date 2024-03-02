/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import NewsCard from '@/components/news/list-card';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import data from '@/data/news.json';
import { AppDispatch, RootState } from '@/redux/store';
import { setScroll, clearScroll } from '@/redux/reducers/scrollSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function NewsListComponent() {
  const router = useRouter();

  const scrollOption = useSelector(
    (state: RootState) => state.scrl.scrollOption
  );

  const dispatch: AppDispatch = useDispatch();

  // Define initial scroll position state
  const [scrly, setScrlY] = useState<number>(0);

  //set scroll to state
  useEffect(() => {
    const handleRouteChange = () => {
      // Store scroll position when navigating to blog details page
      const scrollPosition = window.scrollY;
      setScrlY(scrollPosition);
    };

    // Listen for popstate event when navigating to a new page
    window.addEventListener('scroll', handleRouteChange);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleRouteChange);
    };
  }, []);

  //load window scroll when returning from details page
  useEffect(() => {
    const { scrly } = scrollOption ?? { scrly: 0 };
    // console.log(scrly);

    if (scrly) {
      //set scroll position
      window.scrollTo(0, scrly);
      // localStorage.removeItem('scrollPosition');
      dispatch(clearScroll());
    }
  }, []);

  //go details page when click on link from this page
  const onClickHandler =
    (url: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault(); // Prevent default action
      console.log(scrly);
      if (scrly >= 0) {
        // Convert scroll position to number and handle scroll
        localStorage.setItem('scrollPosition', scrly.toString());
      }
      router.push(url);
    };

  //function for cart component to go through
  const clickHandler = (url: string) => {
    if (scrly >= 0) {
      dispatch(setScroll({ scrly: scrly }));
    }
    router.push(url);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data &&
        data.map((item, index) => (
          <div className="p-2" key={index}>
            <NewsCard
              onClick={() => clickHandler('/news/details')}
              data={{ ...item, scrly }}
            />
          </div>
        ))}
    </main>
  );
}
