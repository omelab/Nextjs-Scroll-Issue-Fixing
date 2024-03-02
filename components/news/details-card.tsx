/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Card, Layout, Menu } from 'antd';
import Meta from 'antd/es/card/Meta';

interface NewsCardProps {
  onClick: () => void;
  data: {
    img: string;
    title: string;
    description: string;
  };
}

const DetailsCard: React.FC<NewsCardProps> = ({ onClick, data }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={data.img} />}
      onClick={onClick}
    >
      <Meta title="Europe Street beat" description="www.freepik.com" />
    </Card>
  );
};
export default DetailsCard;
