import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

interface IMeta {
  title: string;
  description?: string;
}

export const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? (
          <>
            <meta name='description' content={description} />
            <meta name='og:title' content={title} />
            <meta name='og:description' content={description} />
          </>
        ) : (
          <meta name='robots' content='noindex, nofollow' />
        )}
      </Head>
      {children}
    </>
  );
};
