import {Channel, ChannelListItem} from '../channels';

export const CHANNELS_MOCK: ChannelListItem[] = [
  {
    id: 1,
    total: 1000,
    slug: 'ruArt',
    name: 'ruArt',
    description: 'Art channel for russian-speaking people',
    subscribers: 1000,
    image: 'https://imagedelivery.net/mssO-_kwanSvEI-s1CMX-Q/1c5f71d0-2e4f-46a5-e53a-5edee2fd1700/public'
  },
  {
    id: 2,
    total: 300000,
    slug: 'java-job',
    name: 'Java Job | Вакансии',
    description: 'Вакансии для Java программистов',
    subscribers: 300000,
    image: 'https://imagedelivery.net/mssO-_kwanSvEI-s1CMX-Q/ae631b76-147d-4a67-7e3a-e1188f0d4b00/public'
  },
  {
    id: 3,
    total: 40000000,
    slug: 'lingvo',
    name: 'Работа и вакансии для переводчиков — Лингвохантер',
    description: 'Вакансии для переводчиков',
    subscribers: 40000000,
    image: 'https://imagedelivery.net/mssO-_kwanSvEI-s1CMX-Q/cd22af3c-32b9-40f1-ce68-d24a2bd0f300/public'
  }
];

export const CHANNEL_1_MOCK: Channel = {
  id: 1,
  total: 1000,
  slug: 'ruArt',
  name: 'ruArt',
  description: 'Art channel for russian-speaking people',
  subscribers: 1000,
  image: 'https://imagedelivery.net/mssO-_kwanSvEI-s1CMX-Q/1c5f71d0-2e4f-46a5-e53a-5edee2fd1700/public',
  stats: {
    series: [20, 40, 50, 25, 30, 75, 20],
    labels: [1631535600000, 1631622000000, 1631708400000, 1631794800000, 1631881200000, 1631967600000, 1632054000000]
  }
};

export const CHANNEL_2_MOCK: Channel = {
  id: 2,
  total: 300000,
  slug: 'java-job',
  name: 'Java Job | Вакансии',
  description: 'Вакансии для Java программистов',
  subscribers: 300000,
  image: 'https://imagedelivery.net/mssO-_kwanSvEI-s1CMX-Q/ae631b76-147d-4a67-7e3a-e1188f0d4b00/public',
  stats: {
    series: [20, 40, 50, 25, 30, 75, 20],
    labels: [1631535600000, 1631622000000, 1631708400000, 1631794800000, 1631881200000, 1631967600000, 1632054000000]
  }
};

export const CHANNEL_3_MOCK: Channel = {
  id: 3,
  total: 40000000,
  slug: 'lingvo',
  name: 'Работа и вакансии для переводчиков — Лингвохантер',
  description: 'Вакансии для переводчиков',
  subscribers: 40000000,
  image: 'https://imagedelivery.net/mssO-_kwanSvEI-s1CMX-Q/cd22af3c-32b9-40f1-ce68-d24a2bd0f300/public',
  stats: {
    series: [20, 40, 50, 25, 30, 75, 20],
    labels: [1631535600000, 1631622000000, 1631708400000, 1631794800000, 1631881200000, 1631967600000, 1632054000000]
  }
};
