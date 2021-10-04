export const storedRooms = [
  {
    id: '001',
    type: 0,
    discount: 10,
    price: 1000,
    roomPicUrl:
      'https://images.unsplash.com/photo-1530334580314-1e7a340426a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80',
    facility: {
      wifi: true,
      bathtub: true,
      breakfast: true,
      privateBath: true,
      sofa: false,
      tv: false,
    },
  },
  {
    id: '002',
    type: 4,
    discount: 10,
    price: 1000,
    roomPicUrl:
      'https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80',
    facility: {
      wifi: true,
      bathtub: true,
      breakfast: true,
      privateBath: true,
      sofa: false,
      tv: false,
    },
  },
];

export const roomTypes = [
  '經濟雙人房',
  '海景三人房',
  '典雅景觀房',
  '尊享豪華房',
  '商務雙人房',
  '溫泉雙人房',
  '總統套房',
  '奢華家庭房',
];

export const facilityType = {
  wifi: 'wifi',
  bathtub: '浴缸',
  privateBath: '獨立衛浴',
  breakfast: '早餐',
  sofa: '沙發',
  tv: '電視',
  privatePool: '獨立泳池'
};