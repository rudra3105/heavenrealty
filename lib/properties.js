export const properties = [
  {
    slug: 'sama-savli-premium-villa',
    title: 'Sama-Savli Premium Villa',
    price: '₹1.45 Cr',
    type: '4 BHK Villa',
    location: 'Sama-Savli Road, Vadodara',
    area: '2850 sq.ft.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80'
    ],
    specs: {
      bedrooms: '4',
      bathrooms: '4',
      parking: '2 Cars',
      facing: 'East',
      possession: 'Ready to Move',
      amenities: 'Club House, Garden, Security, Children Play Area'
    },
    description:
      'A premium villa in one of Vadodara\'s most desirable neighborhoods with modern architecture, top ventilation, and high-end specifications for comfortable family living.'
  },
  {
    slug: 'gotri-luxury-apartment',
    title: 'Gotri Luxury Apartment',
    price: '₹78 Lakh',
    type: '3 BHK Apartment',
    location: 'Gotri, Vadodara',
    area: '1820 sq.ft.',
    image:
      'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617098610400-fc8e7a3d04bc?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1617104551722-3b2d5136641b?auto=format&fit=crop&w=1400&q=80'
    ],
    specs: {
      bedrooms: '3',
      bathrooms: '3',
      parking: '1 Car',
      facing: 'North-East',
      possession: 'Under Construction',
      amenities: 'Gym, Swimming Pool, Security, Landscaped Garden'
    },
    description:
      'A stylish apartment project in Gotri with spacious rooms, premium finishes, and excellent city connectivity. Ideal for both end-users and long-term investors.'
  },
  {
    slug: 'ajwa-road-investment-plot',
    title: 'Ajwa Road Investment Plot',
    price: '₹39 Lakh',
    type: 'Residential Plot',
    location: 'Ajwa Road, Vadodara',
    area: '2200 sq.ft.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1400&q=80'
    ],
    specs: {
      dimensions: '40 x 55',
      road: '30 Ft Wide',
      zoning: 'Residential',
      title: 'Clear Title',
      possession: 'Immediate Registration',
      amenities: 'Gated Entry, Street Lights, Water & Drainage Line'
    },
    description:
      'A strategically located residential plot on Ajwa Road with high future appreciation potential and access to rapidly developing social infrastructure.'
  }
];

export const findProperty = (slug) => properties.find((property) => property.slug === slug);
