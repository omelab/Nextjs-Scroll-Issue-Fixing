'use client';

import { ConfigProvider } from 'antd';
import { AntdTheme } from '@/theme/antd-config/theme';

export const AntdConfigProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ConfigProvider theme={AntdTheme}>{children}</ConfigProvider>;
};
