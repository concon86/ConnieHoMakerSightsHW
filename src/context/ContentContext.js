import { createContext, useContext, useEffect, useState } from 'react';
export const ContentContext = createContext({});

const animals = [
  {
    "id": 1,
    "name": "Marlie",
    "breed": "Dachshund",
    "location": "Tompson County SPCA",
    "daysOld": 365,
    "sex": "female",
    "type": "dog",
    "saved": true,
    "scores": {
      "kindness": 80,
      "activity": 78,
      "healthy": 70
    }
  },
  {
    "id": 2,
    "name": "Billy Bum",
    "breed": "Beagle",
    "location": "Tompson County SPCA",
    "daysOld": 184,
    "sex": "male",
    "type": "dog",
    "saved": false,
    "scores": {
      "kindness": 20,
      "activity": 18,
      "healthy": 16
    }
  },
  {
    "id": 3,
    "name": "Waldo",
    "breed": "Siamese",
    "img": "https://www.thesprucepets.com/thmb/zWFJ8eKg2SWxBx0QVhiYYB2gQpM=/1080x721/filters:no_upscale()/37348687_179210919505845_8579658165484781568_n-5b69b1b346e0fb00500b0880.jpg",
    "location": "Acme SPCA",
    "daysOld": 440,
    "sex": "female",
    "type": "cat",
    "saved": false,
    "scores": {
      "kindness": 69,
      "activity": 49,
      "healthy": 80
    }
  },
  {
    "id": 4,
    "name": "Smalls",
    "breed": "Flemish Giant",
    "location": "Sunshine SPCA",
    "daysOld": 100,
    "sex": "female",
    "type": "bunny",
    "saved": true,
    "scores": {
      "kindness": 89,
      "activity": 49,
      "healthy": 80
    }
  },
  {
    "id": 5,
    "name": "Bartin",
    "breed": "French Bulldog",
    "location": "San Francisco SPCA",
    "daysOld": 488,
    "sex": "male",
    "type": "dog",
    "saved": false,
    "scores": {
      "kindness": 78,
      "activity": 49,
      "healthy": 55
    }
  },
  {
    "id": 6,
    "name": "Garfield",
    "breed": "Maine Coon",
    "location": "Tompson County SPCA",
    "daysOld": 440,
    "sex": "female",
    "type": "cat",
    "saved": false,
    "scores": {
      "kindness": 63,
      "activity": 52,
      "healthy": 80
    }
  },
  {
    "id": 7,
    "name": "Lessie",
    "breed": "Husky",
    "location": "Tompson County SPCA",
    "daysOld": 280,
    "sex": "female",
    "type": "dog",
    "saved": false,
    "scores": {
      "kindness": 69,
      "activity": 59,
      "healthy": 80
    }
  },
  {
    "id": 8,
    "name": "Hops",
    "breed": "Dwarf Rabbit",
    "img": "https://i.pinimg.com/originals/9f/db/ca/9fdbca1a8470d125005d39c35cd4b07e.jpg",
    "location": "Acme SPCA",
    "daysOld": 182,
    "sex": "male",
    "type": "bunny",
    "saved": false,
    "scores": {
      "kindness": 77,
      "activity": 49,
      "healthy": 77
    }
  }
];


const bios = [
  {
    "id": 1,
    "bio": "A happy dog."
  },
  {
    "id": 2,
    "bio": "A sad dog."
  },
  {
    "id": 3,
    "bio": "Hard to find cat."
  },
  {
    "id": 4,
    "bio": "A big personality."
  },
  {
    "id": 5,
    "bio": "Sadly, no accent."
  },
  {
    "id": 6,
    "bio": "Not orange."
  },
  {
    "id": 7,
    "bio": "Hint of musk on this husk."
  },
  {
    "id": 8,
    "bio": "Hates walking."
  }
];

// combine the array for the animals
const arr = bios.map(b => {
  const findAnimals = animals.find(a => a.id === b.id);
  if (findAnimals) return { ...b, ...findAnimals }
  return b;
})

const ContentProvider = ({ children }) => {
  const [itemChosen, setItemChosen] = useState();
  const [filter, setFilter] = useState('');
  const [search, setSearchName] = useState('');
  const [animalsArr, setAnimalArr] = useState(arr)

  useEffect(() => {
    if (filter) {
      // reset search on filter
      if (search) (setSearchName(''));
      setAnimalArr(arr.filter(it => it.type === filter))
    } else {
      setAnimalArr(arr)
    }
    // eslint-disable-next-line
  }, [filter]) //disable to call to search since its a initial call cleanup

  useEffect(() => {
    if (search) {
      // reset filter on search
      if (filter) (setFilter(''));
      setAnimalArr(arr.filter(it => it.name.toLowerCase().includes(search.toLowerCase())))
    } else {
      setAnimalArr(arr)
    }
    // eslint-disable-next-line
  }, [search]) //disable to call to filter since its a initial call cleanup

  const content = {
    itemChosen,
    setItemChosen,
    animalsArr,
    filter,
    setFilter,
    search,
    setSearchName
  };

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}

export default ContentProvider;

export const useContentContext = () => useContext(ContentContext);
