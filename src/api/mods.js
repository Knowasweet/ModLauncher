export async function fetchMods() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Modification name',
          img: '../assets/img/mods/mod-1.png',
          tags: ['subscription+', 'sky', 'textures'],
          downloadCount: 15000,
          relevanceTag: 'HOT',
          isFavorite: false
        },
        {
          id: 2,
          name: 'Modification name',
          img: '../assets/img/mods/mod-2.png',
          tags: ['subscription+', 'sky', 'textures'],
          downloadCount: 15000,
          relevanceTag: null,
          isFavorite: false
        },
        {
          id: 3,
          name: 'Modification name',
          img: '../assets/img/mods/mod-3.png',
          tags: ['subscription+', 'sky', 'textures'],
          downloadCount: 15000,
          relevanceTag: 'NEW',
          isFavorite: false
        },
        {
          id: 4,
          name: 'Modification name',
          img: '../assets/img/mods/mod-4.png',
          tags: ['subscription+', 'sky', 'textures'],
          downloadCount: 15000,
          relevanceTag: null,
          isFavorite: false
        },
        {
          id: 5,
          name: 'Modification name',
          img: '../assets/img/mods/mod-1.png',
          tags: ['subscription+', 'sky', 'textures'],
          downloadCount: 15000,
          relevanceTag: 'HOT',
          isFavorite: false
        },
        {
          id: 6,
          name: 'Modification name',
          img: '../assets/img/mods/mod-2.png',
          tags: ['subscription+', 'sky', 'textures'],
          downloadCount: 15000,
          relevanceTag: null,
          isFavorite: false
        },
        {
          id: 7,
          name: 'Modification name',
          img: '../assets/img/mods/mod-3.png',
          tags: ['subscription+', 'sky', 'textures'],
          downloadCount: 15000,
          relevanceTag: 'NEW',
          isFavorite: false
        }
      ])
    }, 2000)
  })
}

export async function fetchMainMod() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Modification name',
        description:
          'Are you ready to embark on the wildest bureaucratic adventure of your life, do you have a passion for enforcing regulations that nobody asked for: Then buckle up, because the Bureau of Land Mismanagement is looking for its next Ranger to join our illustrious team of paper-pushing eco-warriors!',
        thumbnails: [
          '../assets/img/mod/thumbnails/thumbnail-0.png',
          '../assets/img/mod/thumbnails/thumbnail-1.png',
          '../assets/img/mod/thumbnails/thumbnail-2.png',
          '../assets/img/mod/thumbnails/thumbnail-3.png',
          '../assets/img/mod/thumbnails/thumbnail-4.png'
        ]
      })
    }, 2000)
  })
}
