'use client';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useEffect, useState } from 'react';

export default function ListComponent() {
  const router = useRouter();

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
    const scrollPos = localStorage.getItem('scrollPosition');
    console.log(`initial scroll ${scrollPos}`);
    if (scrollPos) {
      const position = parseInt(scrollPos);
      window.scrollTo(0, position);
    }
  }, []);

  const handleClick = (
    scrollPosition: string | undefined
  ): MouseEventHandler<HTMLButtonElement> => {
    return (event) => {
      console.log(scrollPosition);
      if (scrollPosition !== undefined) {
        // Convert scroll position to number and handle scroll
        localStorage.setItem('scrollPosition', scrollPosition);
      }
      router.push('/ui');
    };
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
          <button
            onClick={handleClick(scrly?.toString())}
            className="mt-5 block text-orange-600"
          >
            Go UI {scrly}
          </button>
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
          <button
            onClick={handleClick(scrly?.toString())}
            className="mt-5 block text-orange-600"
          >
            Go UI {scrly}
          </button>
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
          <button
            onClick={handleClick(scrly?.toString())}
            className="mt-5 block text-orange-600"
          >
            Go UI {scrly}
          </button>
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
          <button
            onClick={handleClick(scrly?.toString())}
            className="mt-5 block text-orange-600"
          >
            Go UI {scrly}
          </button>
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
          <button
            onClick={handleClick(scrly?.toString())}
            className="mt-5 block text-orange-600"
          >
            Go UI {scrly}
          </button>
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
          <button
            onClick={handleClick(scrly?.toString())}
            className="mt-5 block text-emerald-300"
          >
            Go UI {scrly}
          </button>
        </div>
      </div>
    </main>
  );
}
