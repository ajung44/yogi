import Head from 'next/head';
import styles from '../styles/Home.module.css';
import menu from "../json/menu.json";
import Item from "../components/Item.jsx";
import CatSelector from '../components/CatSelector';
import { useState, useMemo, useEffect, useRef } from 'react';
import MainContainer from '../containers/MainContainer';
import MenuContainer from '../containers/MenuContainer';
import AboutContainer from '../containers/AboutContainer';
import NavContainer from '../containers/NavContainer';
import logo from '../public/logo.png';
import logoSmall from '../public/logo-small.png';
import UsContainer from '../containers/UsContainer';
import GalleryContainer from '../containers/GalleryContainer';

export default function Home() {
  const [currCat, setCat] = useState("donburi");
  const [scrollVal, setScrollVal] = useState(0);
  const topRef = useRef(null);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);

  const category = new Map();

  function handleScroll() {
    const position = window.pageYOffset;
    setScrollVal(position);
  }

  useMemo(() => {
    for (const cat in menu) {
      const items = [];

      for (const item in menu[cat]) {
        const allItems = menu[cat][item];
        items.push(<Item 
          key={`${cat}${allItems.id}`}
          ide={allItems.id}
          name={allItems.name}
          price={allItems.price}
          accompaniment={allItems.accompaniment}
          description={allItems.description}
          hot={allItems.hot}
          extra={allItems.extra}
          pic={allItems.pic}
        />);
      }

      category.set(cat, items);
    }

  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  },[])
  return (
    <>
      <Head >
        <title>Yogi - Korean American Restaurant in Suwanee, Georgia</title>
        <meta name="description" content="Korean restaurant located 80 Horizon Dr #201 Suwanee, Georgia 30024. Yogi is the perfect place for lunch or dinner. Take your food to-go, or dine-in at the restaurant! No matter what you choose, you'll surely won't be disappointed with our wide ranges of casual Korean food we offer. " />
        <link rel="icon" href="/logo-small.png" />
        <link rel="stylesheet" href="https://use.typekit.net/qiw3ifg.css"></link>
      </Head>
      <div className={styles.container}>
        <main>
          <NavContainer scrollVal={scrollVal} imageSrc={(scrollVal > 50) ? logoSmall : logo} topRef={topRef} menuRef={menuRef} aboutRef={aboutRef}/>
          <MainContainer topRef={topRef} />
          <UsContainer />
          <MenuContainer menuRef={menuRef} category={category} currCat={currCat} setCat={setCat}/>
          <GalleryContainer />
          <AboutContainer aboutRef={aboutRef}/>
        </main>
      </div>
    </>
  )
}
