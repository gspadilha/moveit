import { NextRouter } from 'next/dist/next-server/lib/router/router';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { PropsWithChildren } from 'react';

export default interface IApp
  extends PropsWithChildren<AppPropsType<NextRouter, {}>> {}
