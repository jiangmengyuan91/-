import { Album } from './types';

// A curated list of major albums and hit songs
export const DISCOGRAPHY: Album[] = [
  {
    id: 'album-1',
    title: '第一张创作专辑 (First Album)',
    year: 1999,
    coverId: 10,
    songs: [
      { id: 'crazy-world', title: '疯狂世界 (Crazy World)' },
      { id: 'embrace', title: '拥抱 (Embrace)' },
      { id: 'peter-pan', title: '志明与春娇 (Peter & Mary)' },
    ]
  },
  {
    id: 'album-2',
    title: '爱情万岁 (Viva Love)',
    year: 2000,
    coverId: 11,
    songs: [
      { id: 'tenderness', title: '温柔 (Tenderness)' },
      { id: 'contentment', title: '知足 (Contentment)' }, // Note: Often associated here or compilation, placing for demo flow
      { id: '憨人', title: '憨人 (Fool)' },
    ]
  },
  {
    id: 'album-3',
    title: '人生海海 (People Life, Ocean Wild)',
    year: 2001,
    coverId: 12,
    songs: [
      { id: 'life-ocean', title: '人生海海 (People Life, Ocean Wild)' },
      { id: 'pure', title: '纯真 (Pure)' },
      { id: 'belief', title: '相信 (Belief)' },
    ]
  },
  {
    id: 'album-4',
    title: '时光机 (Time Machine)',
    year: 2003,
    coverId: 13,
    songs: [
      { id: 'stubborn', title: '倔强 (Stubborn)' }, // Actually God's Children, but mapping for simplified timeline flow in demo or user memory
      { id: 'time-machine', title: '时光机 (Time Machine)' },
      { id: 'armor', title: '武装 (Armour)' },
    ]
  },
  {
    id: 'album-5',
    title: '神的孩子都在跳舞',
    year: 2004,
    coverId: 14,
    songs: [
      { id: 'sun-wukong', title: '孙悟空 (Sun Wukong)' },
      { id: 'stubborn-real', title: '倔强 (Stubborn)' },
      { id: 'garbage-truck', title: '垃圾车 (Garbage Truck)' },
    ]
  },
  {
    id: 'album-6',
    title: '为爱而生 (Born to Love)',
    year: 2006,
    coverId: 15,
    songs: [
      { id: 'angel', title: '天使 (Angel)' },
      { id: 'loveing', title: '恋爱ing (Love-ing)' },
      { id: 'most-important', title: '最重要的小事 (The Most Important Thing)' },
    ]
  },
  {
    id: 'album-7',
    title: '后青春期的诗 (Poetry of the Day After)',
    year: 2008,
    coverId: 16,
    songs: [
      { id: 'suddenly-missing', title: '突然好想你 (Suddenly Missing You)' },
      { id: 'you-not-truly-happy', title: '你不是真正的快乐 (You Are Not Truly Happy)' },
      { id: 'survival', title: '生存以上 生活以下 (Survival)' },
    ]
  },
  {
    id: 'album-8',
    title: '第二人生 (Second Round)',
    year: 2011,
    coverId: 17,
    songs: [
      { id: 'noahs-ark', title: '诺亚方舟 (Noah\'s Ark)' },
      { id: 'cheers', title: '干杯 (Cheers)' },
      { id: 'starry-night', title: '星空 (Starry Night)' },
      { id: 'dont-leave', title: '我不愿让你一个人 (I Won\'t Let You Be Lonely)' },
    ]
  },
  {
    id: 'album-9',
    title: '自传 (History of Tomorrow)',
    year: 2016,
    coverId: 18,
    songs: [
      { id: 'party-animal', title: '派对动物 (Party Animal)' },
      { id: 'here-after-us', title: '后来的我们 (Here, After, Us)' },
      { id: 'tough', title: '顽固 (Tough)' },
      { id: 'song-about-you', title: '好好 (Song About You)' },
    ]
  }
];