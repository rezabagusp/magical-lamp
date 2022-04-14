import React from 'react';
import Head from 'next/head';
import { APP_BASE_URL } from '../../constants';

const DEFAULT_TITLE = 'Niconime!';
const DEFAULT_DESCRIPTION = 'One stop leading anime aggrator for everyone!';

const DEFAULT_IMAGE_WIDTH = 612;
const DEFAULT_IMAGE_HEIGHT = 396;
const DEFAULT_IMAGE_URL = `${APP_BASE_URL}/images/niconime-logo-banner.jpg`;
const DEFAULT_URL = APP_BASE_URL;
const DEFAULT_AUTHOR = 'Niconime  Editorial';
const DEFAULT_OG_TYPE = 'website';

interface Props {
  title?: string,
  description?: string,
  image?: string,
  width?: number,
  height?: number,
  type?: string,
  author?: string,
  url?: string,
}

const SEO = ({
  title,
  description,
  image,
  width,
  height,
  type,
  author,
  url,
}: Props): JSX.Element => {
  const metaTitle = title || DEFAULT_TITLE;
  const metaDesc = description || DEFAULT_DESCRIPTION;
  const metaImage = image || DEFAULT_IMAGE_URL;
  const metaWidth = width || DEFAULT_IMAGE_WIDTH;
  const metaHeight = height || DEFAULT_IMAGE_HEIGHT;
  const metaURL = url || DEFAULT_URL;
  const metaAuthor = author || DEFAULT_AUTHOR;
  const metaOgType = type || DEFAULT_OG_TYPE;

  return (
    <Head>
      <meta key="viewport" name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDesc} />
      <meta name="author" content={metaAuthor} />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content={String(metaWidth)} />
      <meta property="og:image:height" content={String(metaHeight)} />
      <meta property="og:url" content={metaURL} />
      <meta property="og:type" content={metaOgType} />
      <meta property="og:locale" content="en_ID" />
      <meta property="og:site_name" content="Niconime.Tv" />
      <meta property="twitter:image" content={metaImage} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDesc} />
      <meta property="twitter:url" content={metaURL} />
      <meta property="twitter:card" content="summary_large_image" />
      <title>{`${metaTitle} | Niconime`}</title>
    </Head>
  );
};

export default SEO;
