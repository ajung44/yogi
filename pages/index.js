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
import logo from '../src/assets/logo.png';
import logoSmall from '../src/assets/logo-small.png';
import UsContainer from '../containers/UsContainer';
import GalleryContainer from '../containers/GalleryContainer';
import { Restaurant, WithContext } from 'schema-dts';

export default function Home() {
  const [currCat, setCat] = useState("donburi");
  const [scrollVal, setScrollVal] = useState(0);
  const topRef = useRef(null);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);

  const category = new Map();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Yogi',
    alternateName: "요기",
    description: "The best Korean food in Suwanee",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '80 Horizon Dr STE 201',
      addressLocality: 'Suwanee',
      addressRegion: 'GA',
      postalCode: '30024',
      addressCountry: 'US',
    },
    telephone: '678-926-3019',
    servesCuisine: ['Korean', 'Asian'],
    priceRange: '$',
    openingHours: [
      'Mo 10:30-21:00',
      'Tu Closed',
      'We 10:30-21:00',
      'Th 10:30-21:00',
      'Fr 10:30-21:00',
      'Sa 10:30-21:00',
      'Su 11:00-20:00',
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0292062,
      longitude: -84.043746,
    },
    url: 'https://yogiatl.com',
    menu: 'https://www.clover.com/online-ordering/yogi-suwanee',
    acceptsReservations: 'No',
  };

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
        <title>Yogi - Korean Restaurant</title>
        <meta name="description" content="Welcome to Yogi, where you'll find familiar Korean dishes like Kimbap (김밥), Tteokbokki (떡볶이) to KBBQ experience like Bulgogi (불고기), Pork Belly (삼겹살), and more. Yogi is the perfect place for lunch or dinner with friends and family, and we always use the freshest ingredients available." />
        <link rel="icon" href="/logo-small.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <div className={styles.container}>
        <main>
          <NavContainer scrollVal={scrollVal} imageSrc={(scrollVal > 50) ? logoSmall : logo} topRef={topRef} menuRef={menuRef} aboutRef={aboutRef}/>
          <MainContainer topRef={topRef} />
          <UsContainer />
          <MenuContainer menuRef={menuRef} category={category} currCat={currCat} setCat={setCat}/>
          {/* <GalleryContainer /> */}
          <AboutContainer aboutRef={aboutRef}/>
        </main>
      </div>
    </>
  )
}
