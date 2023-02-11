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

    <div className={styles.container}>
      <Head>
        <title>Yogi - Korean-American Fusion Restaurant at Suwanee, Georgia</title>
        <link rel="icon" href="/logo-small.png" />
        <link rel="stylesheet" href="https://use.typekit.net/qiw3ifg.css"></link>
        <meta name="description" content="We serve the best Asian-American Fusion Food in Suwanee. Whether that's Donburi (Rice bowl), Maki rolls, Noodles, Tempura, Korean Omelettes, we aim to provide the best there is in Suwanee and all of Metro Atlanta area!"></meta>
      </Head>

      <main>
        <NavContainer scrollVal={scrollVal} imageSrc={(scrollVal > 50) ? logoSmall : logo} topRef={topRef} menuRef={menuRef} aboutRef={aboutRef}/>
        <MainContainer topRef={topRef} />
        <MenuContainer menuRef={menuRef} category={category} currCat={currCat} setCat={setCat}/>
        <AboutContainer aboutRef={aboutRef}/>
      </main>
    </div>
  )
}
