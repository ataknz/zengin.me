import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a software developer and a 3D Art enthusiast in Istanbul, Turkey.
          I'm currently working at an E-commerce platform.
        </p>

        <p>
          I'm interested in 3D CG and animation. Hopefully, I'll be sharing my
          works shortly.
        </p>

        <p>
          I'm also a senior in Translation and Interpretation in English. So
          natural languages are one of my interests as well as programming
          languages.
        </p>

        <p>
          Apart from this, I like playing video games and being creative in my
          free time.
        </p>

        <p>
          I always want to create the best solutions and products for the
          people. I believe with hard work and passion, I'll be able to
          contribute to our ever-growing technology, and create immersive and
          unique works.
        </p>

        <p>
          Lastly if you have any enquiries, please contact me from{" "}
          <a href="mailto:atakanzzengin@gmail.com" id="link">
            atakanzzengin@gmail.com
          </a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}