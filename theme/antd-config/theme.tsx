import { ThemeConfig } from 'antd';

export const AntdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#FE0000',
    colorLink: '#000',
    colorLinkHover: '#FE0000',
    colorLinkActive: '#FE0000',
  },
  components: {
    Layout: {
      colorBgBody: 'transparent',
      colorBgHeader: 'transparent',
    },
  },
};
