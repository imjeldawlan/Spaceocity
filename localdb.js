const spaceCards = [
  {
    id: '3',
    title: 'The Milky Way',
    content:
      'It is the galaxy that contains our Solar System. It appears as a band because its disk-shaped structure is viewed from within. Galileo Galilei first resolved the band of light into individual stars with his telescope in 1610. Constellation: Sagittarius centre',
    image: require('./assets/milkyway.jpeg'),
    other_image:
      'https://media.istockphoto.com/photos/spiral-galaxy-illustration-of-milky-way-picture-id481229372?k=20&m=481229372&s=612x612&w=0&h=r-vNa2_NRHAyaQJj6o2UlGTfa9Dju2M8NH1AIpk9oHQ=',
    video: 'https://www.googleapis.com/drive/v3/files/1ozsAKIPab9MAguYVwciSZr1bMG43mxhl?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Milky Way',
    category: 'Galaxies',
  },

  {
    id: '1',
    title: 'Black Eye Galaxy',
    content:
      "It is a galaxy which was discovered by Edward Pigott in March 1779 and independently by Johann Elert Bode in April of the same year, as well as by Charles Messier in 1780. It has a spectacular dark band of absorbing dust in front of the galaxy's bright nucleus, giving rise to its nicknames of the Black Eye or Evil Eye galaxy. Constellation: Coma Berenices",
    image: require('./assets/blackeye.jpeg'),
    video:
      'https://www.googleapis.com/drive/v3/files/1W0abgd6dnH_Oypkky82FSTS8hvE1UXvc?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Black Eye Galaxy',
    category: 'Galaxies',
    other_image: 'https://apod.nasa.gov/apod/image/1304/M64HaLRGB_Pugh920.jpg',
  },

  {
    id: '2',
    title: 'NGC 4594',
    content:
      'This galaxy has a bright central nucleus and a large central bulge. The dark dust lane and a large central bulge together give it a shape of a sombrero. According to Astronomers. There are around 2,000 globular clusters swarm that can be seen in the center of the galaxy.                                                            Constellation: between the Virgo and Corvus.',
    image: require('./assets/sombrero.jpg'),
    video:
      'https://www.googleapis.com/drive/v3/files/16EFxX1DXiWN4JTSp9wlPHyvRB9Gl9XSv?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Sombrero Galaxy',
    category: 'Galaxies',
    other_image:
      'https://4.bp.blogspot.com/-kLYCqmzy32w/T53-N1X5zHI/AAAAAAAALbA/fJnTpdyyDuA/s1600/Sombrero%2BGalaxy%2B1.jpg',
  },

  {
    id: '4',
    title: 'Messier 81 ',
    content:
      'Bodes galaxy is a spiral galaxy situated 12 million light years away from in the constellation Ursa Major. It is one of the brightest galaxy visible in the skies of planet Earth. The beautifully detailed view of this galaxy contains a bright nucleus, grand spiral arms and sweeping cosmic dust lanes with a scale comparable to the Milky Way.',
    image: require('./assets/M81.jpg'),
    video:
      'https://www.googleapis.com/drive/v3/files/1V9FHYTQvYTiz78sMXgEFUXsTBFYc2APw?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Messier 81',
    category: 'Galaxies',
    other_image:
      'https://tse3.mm.bing.net/th?id=OIP.lcjB7bVeClkw4pezrT5QwwHaJr&pid=Api&P=0&w=300&h=300',
  },

  {
    id: '5',
    title: 'Andromeda Galaxy',
    content:
      'It is a spiral galaxy approximately 2.5 million light-years from Earth and the nearest major galaxy to the Milky Way. Its name stems from the area of the sky in which it appears the constellation of Andromeda.                                            Constellation: Andromeda',
    image:
      'https://astrodoc.ca/wp-content/uploads/2016/12/M31-7hr-HaRGB-Dec-2016.jpg',
    video:
      'https://www.googleapis.com/drive/v3/files/1xNw7WnS10wV8KCU8kRqVCGLsFzPrUK9t?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Andromeda Galaxy',
    category: 'Galaxies',
    other_image:
      'https://external-preview.redd.it/bIXThggRRszgN7doaN53WDf-AoYgVuJrt2FORYPpSko.jpg?auto=webp&s=9f25254c26064f71b42becb8a07c49442819c574',
  },

  {
    id: '6',
    title: 'Whirlpool Galaxy',
    content:
      'It is an interacting grand-design spiral galaxy with a Seyfert 2 active galactic nucleus located in the constellation Canes Venatici, and was the first galaxy to be classified as a spiral galaxy.                                                                      Constellation: Canes Venatici',
    image: require('./assets/whirpool.jpg'),
    video:
      'https://www.googleapis.com/drive/v3/files/1QodpSGrUkgvNRd-GyB2Xi3Z1W9FNuAxI?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Whirlpool Galaxy',
    category: 'Galaxies',
    other_image:
      'https://tse3.mm.bing.net/th?id=OIP.aun1WJlwZ3cn8R6sVV6enQHaE8&pid=Api&P=0&w=231&h=155',
  },

  {
    id: '7',
    title: 'Galaxy CR7',
    content:
      'It is a high-redshift Lyman-alpha emitter galaxy. The galaxy is observed as it was about 800 million years after the Big Bang, during the epoch of reionisation. With a light travel time of 12.9B years, it is one of the distant galaxies known. Cosmos Redshift 7 galaxy is named after footballer Cristiano Ronaldo. CR7 shows some of the expected signatures of Population III stars i.e. the first generation of stars produced during early galaxy formation.                                                        Constellation: Sextans',
    image: require('./assets/cosmos.jpg'),
    video:
      'https://www.googleapis.com/drive/v3/files/1JjIZnNvkcRQnyEkejymXSu8TacFauDKa?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Cosmos Redshift 7',
    category: 'Galaxies',
    other_image:
      'https://alchetron.com/cdn/cosmos-redshift-7-aad89b0e-c1e0-47ad-8cde-eccc20d0c3b-resize-750.jpg',
  },

  {
    id: '8',
    title: 'Polaris',
    content:
      'Brightest star in the constellation Ursa Minor Polaris, designated α Ursae Minoris (Latinized to Alpha Ursae Minoris, abbreviated Alpha UMi, α UMi), commonly the North Star or Pole Star, is the brightest star of the constellation Ursa Minor. It is very close to the north celestial pole, making it the current northern pole star. The revised Hipparcos parallax gives a distance to Polaris of about 433 light-years (133 parsecs)',
    image: require('./assets/polaris.jpg'),
    video:
      'https://www.googleapis.com/drive/v3/files/1t-z7z5Jjk5gPjpNFnXx9EWJxxo_75iLF?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Polaris',
    category: 'Stars',
    other_image: 'https://space.porn/wp-content/uploads/2020/03/Polaris.jpg',
  },

  {
    id: '9',
    title: 'Sirius',
    content:
      " Binary star system in the constellation of Canis Major Sirius is the brightest star in the night sky. Its name is derived from the Greek word Σείριος (Seirios, lit. 'glowing' or 'scorching'). The star is designated α Canis Majoris, Latinized to Alpha Canis Majoris, and abbreviated Alpha CMa or α CMa. With a visual apparent magnitude of −1.46, Sirius is almost twice as bright as Canopus, the next brightest star.",
    image: require('./assets/sirius.jpg'),
    video:
      'https://www.googleapis.com/drive/v3/files/1XxhA0Q_cEYL9cO0Mnkt4kXWNefRVwzyO?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Sirius',
    category: 'Stars',
    other_image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c6/Sirius.jpg',
  },

  {
    id: '10',
    title: 'Alpha Centauri ',
    content:
      " It is a gravitationally bound system of the closest stars and exoplanets to Earth's Solar System at 4.37 light-years (1.34 parsecs) from the Sun. The name is Latinized from α Centauri, and abbreviated Alpha Cen or α Cen. It is a triple star system, consisting of the three stars: α Centauri A (officially Rigil Kentaurus), α Centauri B (officially Toliman), and the closest star α Centauri C (officially Proxima Centauri).",
    image: require('./assets/centauri.jpg'),
    video:
      'https://www.googleapis.com/drive/v3/files/1xN9Dj3FYRU11zyOlPzQds1Zt7XLRtTHY?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Alpha centauri system',
    category: 'Stars',
    other_image:
      'http://www.nasa.gov/sites/default/files/thumbnails/image/alphacen.jpg',
  },

  {
    id: '11',
    title: 'Betelgeuse ',
    content:
      'Star in the constellation of Orion Betelgeuse is usually the tenth-brightest star in the night sky and, after Rigel, the second-brightest in the constellation of Orion. It is a distinctly reddish semiregular variable star whose apparent magnitude, varying between +0.0 and +1.6, has the widest range displayed by any first-magnitude star. At near-infrared wavelengths, Betelgeuse is the brightest star in the night sky.',
    image: require('./assets/betelguese.jpg'),
    video:
      'https://www.googleapis.com/drive/v3/files/1lJcgKNlEqOtiqoi9YCXASyD8-Xg0WNB8?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Betelgeuse',
    category: 'Stars',
    other_image:
      'https://cdn.images.express.co.uk/img/dynamic/151/590x/secondary/betelgeuse-2293172.jpg?r=1580741849614',
  },

  {
    id: '12',
    title: 'Rigel',
    content:
      'Orion is a prominent constellation located on the celestial equator and visible throughout the world. It is one of the most conspicuous and recognizable constellations in the night sky. It is named after Orion, a hunter in Greek mythology. Its brightest stars are blue-white Rigel (Beta Orionis) and red Betelgeuse (Alpha Orionis).',
    image: require('./assets/snack-icon.png'),
    video:
      'https://www.googleapis.com/drive/v3/files/1Om4zM3X7BSmj8PByZ5qSXSde7fXUoaFD?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Rigel',
    category: 'Stars',
    other_image:
      'https://earthsky.org/upl/2020/01/rigel-astropixels-Fred-Espenak-800.png',
  },

  {
    id: '13',
    title: 'Vega',
    content:
      "It is the brightest star in the northern constellation of Lyra. It has the Bayer designation α Lyrae, which is Latinised to Alpha Lyrae and abbreviated Alpha Lyr or α Lyr. This star is relatively close at only 25 light-years (7.7 pc) from the Sun. It is the fifth-brightest star in the night sky, and the second-brightest star in the northern celestial hemisphere, after Arcturus. Vega has been extensively studied by astronomers, leading it to be termed 'arguably the next most important star in the sky after the Sun' Vega was the northern pole star around 12,000 BC and will be so again around the year 13,727, when its declination will be +86° 14′. Vega was the first star other than the Sun to be photographed and the first to have its spectrum recorded.",
    image: require('./assets/vega.png'),
    video: 'https://www.googleapis.com/drive/v3/files/11E4b7o9BxXLigrHVz2vBO0MmN0NwdZ5L?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Vega',
    category: 'Stars',
    other_image:
      'http://en.es-static.us/upl/2015/07/Vega-espanak-e1468969973634.jpg',
  },

  {
    id: '14',
    title: 'Antares',
    image: require('./assets/antares-15.jpg'),
    content:
      "It is a Red supergiant star in the constellation Scorpius. Antares, designated α Scorpii (Latinised to Alpha Scorpii), is on average the fifteenth-brightest star in the night sky, and the brightest object in the constellation of Scorpius. Distinctly reddish when viewed with the naked eye, Antares is a slow irregular variable star that ranges in brightness from apparent magnitude +0.6 to +1.6. Often referred to as 'the heart of the scorpion', image:require('./assets/antares-15.jpg')",
    video: 'https://www.googleapis.com/drive/v3/files/1GMMuXpG7QrhSwlO873MJovUMsMOcYGpt?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    name: 'Antares',
    category: 'Stars',
    other_image:
      'http://www.constellation-guide.com/wp-content/uploads/2014/08/Antares.jpg',
  },
  {
    id: '15',
    title: 'AIM',
    name: 'AIM: Aeronomy of Ice in the Mesosphere',
        image: 'https://www.bahrainthismonth.com/uploads/blogs/images/7bb07629d2e3faef2415971f8537c173.jpg',

    content:
      'U.S. satellite designed to study noctilucent clouds. AIM was launched on April 25, 2007, by a Pegasus XL rocket that was dropped from an airplane. Noctilucent clouds are faint ice-bearing clouds that form at a height of about 80 km (50 miles) in the layer of the atmosphere called the mesosphere. These clouds were first seen in 1885 and have grown brighter since then. AIM is managed by Hampton University and thus is the first satellite to be managed by a historically black university.',
    video:
      'https://www.googleapis.com/drive/v3/files/1zkkTuYl1ktFaKHtqnFrgAGBArTUBjIvQ?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    category: 'Satelites',
    other_image:
      'https://tse1.mm.bing.net/th?id=OIP.mJRWN0OPoGWrmysAUpo3FwHaF7&pid=Api&P=0&w=236&h=190',
  },
  {
    id: '16',
    title: 'Swift',
    name: 'Swift',
    image:
      'https://img-new.cgtrader.com/items/28370/swift_satellite_3d_model_3ds_lwo_lw_lws_de461b69-fcc5-4b7e-9265-c1e541ef95bb.JPG',
    content:
      'designed to swing into the proper orientation to catch the first few seconds of gamma-ray bursts. It was launched on November 20, 2004. Swift has a gamma-ray telescope that makes the first detection of a gamma-ray burst.  In 2018 the mission was renamed after American astrophysicist Neil Gehrels, who was the satellite’s principal investigator until his death in 2017. By 2019, after almost 15 years of operation, Swift had detected more than 1,400 gamma-ray bursts. The most distant of these, GRB 090429B, detected on April 29, 2009, exploded about 13 billion light-years from Earth.',
    video:
      'https://www.googleapis.com/drive/v3/files/1XSuEK67_eckELM3pdOTT-9Dhpy2Ec2Od?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    category: 'Satelites',
    other_image: 'http://space.skyrocket.de/img_sat/swift__1.jpg',
  },
  {
    id: '17',
    title: 'Aryabhata',
    name: 'Aryabhata',
    image:
      'https://cdn.dnaindia.com/sites/default/files/2018/04/19/673726-226221-aryabhata-7.jpg',
    content:
      'Aryabhata, first unmanned Earth satellite built by India. It was named for a prominent Indian astronomer and mathematician of the 5th century CE. The satellite was assembled at Peenya, near Bangalore, but was launched from within the Soviet Union by a Russian-made rocket on April 19, 1975. Aryabhata weighed 794 pounds (360 kg) and was instrumented to explore conditions in Earth’s ionosphere, measure neutrons and gamma rays from the Sun, and perform investigations in X-ray astronomy. The scientific instruments had to be switched off during the fifth day in orbit because of a failure in the satellite’s electrical power system. ',

    video:
      'https://www.googleapis.com/drive/v3/files/1uU7RLHLuwWszbKALaCvX6CHp6t47ouZZ?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    category: 'Satelites',
    other_image:
      'https://www.telegraphindia.com/unsafe/930x523/smart/static.telegraphindia.com/derivative/THE_TELEGRAPH/1689465/16X9/image66c891ca-bf51-42ec-aabe-95eee0f67296.jpg',
  },
  {
    id: '18',
    title: 'Chandra X ray observatory',
    name: 'Chandra X ray observatory',
    content:
      'Chandra X-ray Observatory, U.S. satellite, one of the National Aeronautics and Space Administration (NASA) fleet of “Great Observatories” satellites, which is designed to make high-resolution images of celestial X-ray sources. In operation since 1999, it is named in honour of Subrahmanyan Chandrasekhar, a pioneer of the field of stellar evolution.In effect, Chandra is to X-ray astronomy what the Hubble Space Telescope is to optical astronomy. It focuses X-rays by using four pairs of nested iridium mirrors, with an aperture of 1.2 metres (4 feet) and a focal length of 10 metres (33 feet), and is capable of unprecedented spatial resolution.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQHKNLNEa6hSgJ3CAUyd5I6qA3voLqHOTbg&usqp=CAU',
    category: 'Satelites',
    video:
      'https://www.googleapis.com/drive/v3/files/159pnXhvoqgr8fe355kMsCBJ08KzNcOYZ?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    other_image:
      'https://cdn.vox-cdn.com/thumbor/c90lrk2O6_ADLLrSXQTVcuPjZnE=/0x0:1041x1041/1200x800/filters:focal(531x403:697x569)/cdn.vox-cdn.com/uploads/chorus_image/image/61778877/chandra_4k_v2.0.jpg',
  },
  {
    id: '19',
    title: 'Suzaku',
    name: 'Suzaku',
    image: 'https://c1.staticflickr.com/5/4120/4907504816_66f8125c9a_b.jpg',
    content:
      'Suzaku, also called Astro-EII, Japanese-U.S. satellite observatory designed to observe celestial X-ray sources. Suzaku was launched on July 10, 2005, from the Uchinoura Space Center and means “the vermilion bird of the south” in Japanese. It was designed to complement the U.S. Chandra X-Ray Observatory and Europe’s XMM-Newton spacecraft. Suzaku was equipped with X-ray instruments to study hot plasmas that occur in star clusters, around black holes, and in other regions. Among Suzaku’s discoveries was a white dwarf star that emits pulses of X-rays like a pulsar and evidence that cosmic rays are accelerated by magnetic fields in supernova remnants.',
    category: 'Satelites',
    video:
      'https://www.googleapis.com/drive/v3/files/1FUMHjGk77ji3lhpvOpYNGKl2FLxjf425?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    other_image:
      'http://spaceflightnow.com/wp-content/uploads/2015/09/suzaku.png',
  },
  {
    id: '20',
    title: 'Gamma Ray telescope',
    name: 'Gamma Ray telescope',
    image: 
      'https://cdn.britannica.com/68/141468-050-20F9E6EF/rendition-Gamma-ray-Large-Area-Space-Telescope-artist.jpg',
    content:
      'International Gamma-Ray Astrophysics Laboratory, European Space Agency–Russian–U.S. satellite observatory designed to study gamma rays emitted from astronomical objects. Integral was launched by Russia from the Baikonur Cosmodrome in Kazakhstan on October 17, 2002. It carried a gamma-ray imager and spectrometer to study the most-energetic events in the universe. It mapped the sky in the 511-kiloelectron-volt emission line that arises from electron-positron annihilation and found that the emission is concentrated toward the centre of the Milky Way Galaxy. ',
    category: 'Satelites',
    video:
      'https://www.googleapis.com/drive/v3/files/1n2yVUYwrHhlyZ-5KNKijfCDq6as5Q6YQ?alt=media&key=AIzaSyD4bpWPQTX_FKKJt4jVjCr-Tr2E16bnYc0',
    other_image:
      'https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/edu_what_is_the_fermi_space_telescope.jpg?itok=xdlUUv-q',
  },
];

export default spaceCards;
