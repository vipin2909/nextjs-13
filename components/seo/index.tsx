import { FC, memo } from "react";

import Head from "next/head";

export type Props = {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
  languages?: string[];
  defaultLanguage?: string;
};

const cutTags = (text = "") => text.replace(/<\/?.+?>/gi, "");

const prepareData = ({
  title,
  description,
  image,
  keywords,
  languages,
  defaultLanguage,
}: Props) => ({
  title: cutTags(title),
  description: cutTags(description).substring(0, 250),
  image,
  keywords,
  languages,
  defaultLanguage,
});

const SEO: FC<Props> = (props: Props) => {
  const {
    title,
    description,
    image,
    keywords,
    languages,
    defaultLanguage,
  }: Props = prepareData(props);
  return (
    <Head>
      {title ? <title>{title}</title> : <title>Watani</title>}
      <meta property="title" content={title} />
      <meta property="twitter:title" content={title} />
      <meta property="facebook:title" content={title} />
      {description && <meta name="description" content={description} />}
      {keywords && <meta property="keywords" content={keywords} />}
      {/* <meta name="robots" content="index, follow"/>  */}
      <meta name="robots" content="noindex, nofollow" />
      <meta property="og:title" content={title} />
      {description && <meta name="og:description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {defaultLanguage && (
        <meta property="og:locale" content={defaultLanguage} />
      )}
      {languages &&
        languages.map((lang: string) => (
          <meta key={lang} property="og:locale:alternate" content={lang} />
        ))}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default memo(SEO);
