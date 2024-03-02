/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { AppDispatch, RootState } from '@/redux/store';
import { setScroll, clearScroll } from '@/redux/reducers/scrollSlice';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ListComponent() {
  const router = useRouter();

  const scrollOption = useSelector(
    (state: RootState) => state.scrl.scrollOption
  );

  const dispatch: AppDispatch = useDispatch();

  // Define initial scroll position state
  const [scrly, setScrlY] = useState<number>(0);

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

  useEffect(() => {
    const { scrly } = scrollOption ?? { scrly: 0 };
    console.log(scrly);

    if (scrly) {
      //set scroll position
      window.scrollTo(0, scrly);
      // localStorage.removeItem('scrollPosition');
      dispatch(clearScroll());
    }
  }, []);

  const onClickHandler =
    (url: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault(); // Prevent default action
      if (scrly >= 0) {
        dispatch(setScroll({ scrly: scrly }));
      }
      router.push(url);
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center min-h-96 bg-orange-900 p-20">
        <div>
          <h1>hello wrold</h1>
          <h2> What is Lorem Ipsum? </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a
            href="http://example.com"
            onClick={onClickHandler('/details')}
            className="mt-5 block text-orange-600"
          >
            Go Details {scrly}
          </a>
        </div>
      </div>

      <div className="flex items-center min-h-96 bg-lime-700 p-20">
        <div>
          <h1>hello wrold</h1>
          <h2> What is Lorem Ipsum? </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a
            href="http://example.com"
            onClick={onClickHandler('/details')}
            className="mt-5 block text-orange-600"
          >
            Go Details {scrly}
          </a>
        </div>
      </div>

      <div className="flex items-center min-h-96 bg-emerald-900 p-20">
        <div>
          <h1>hello wrold</h1>
          <h2> What is Lorem Ipsum? </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a
            href="http://example.com"
            onClick={onClickHandler('/details')}
            className="mt-5 block text-orange-600"
          >
            Go Details {scrly}
          </a>
        </div>
      </div>

      <div className="flex items-center min-h-96 bg-sky-600 p-20">
        <div>
          <h1>hello wrold</h1>
          <h2> What is Lorem Ipsum? </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a
            href="http://example.com"
            onClick={onClickHandler('/details')}
            className="mt-5 block text-orange-600"
          >
            Go Details {scrly}
          </a>
        </div>
      </div>

      <div className="flex items-center min-h-96 bg-teal-700 p-20">
        <div>
          <h1>hello wrold</h1>
          <h2> What is Lorem Ipsum? </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a
            href="http://example.com"
            onClick={onClickHandler('/details')}
            className="mt-5 block text-orange-600"
          >
            Go Details {scrly}
          </a>
        </div>
      </div>

      <div className="flex items-center min-h-96 bg-emerald-900 p-20">
        <div>
          <h1>hello wrold</h1>
          <h2> What is Lorem Ipsum? </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a
            href="http://example.com"
            onClick={onClickHandler('/details')}
            className="mt-5 block text-orange-600"
          >
            Go Details {scrly}
          </a>
        </div>
      </div>
    </main>
  );
}
