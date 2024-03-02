/* eslint-disable @next/next/no-img-element */
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';

interface NewsCardProps {
  onClick: (url: string) => void; // Change the type of onClick to accept a URL parameter
  data: {
    img: string;
    title: string;
    description: string;
    scrly: number;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ onClick, data }) => {
  const onClickHandler =
    (url: string) => (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault(); // Prevent default action
      onClick(url);
    };

  //this code or using anchor links
  // const onClickHandler =
  //   (url: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
  //     event.preventDefault(); // Prevent default action
  //     onClick(url);
  //   };

  return (
    <Card
      hoverable
      style={{ width: 240, height: 380 }}
      cover={
        <div style={{ overflow: 'hidden', height: '300px' }}>
          <img alt="example" style={{ width: '240px' }} src={data.img} />
        </div>
      }
      onClick={onClickHandler('/news/details')}
    >
      <Meta title="Europe Street beat" description="www.freepik.com" />
    </Card>
  );
};

export default NewsCard;
