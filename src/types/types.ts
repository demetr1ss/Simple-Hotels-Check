export type HotelType = {
  location: {
    country: string;
    geo: {
      lon: number;
      lat: number;
    };
    state: string | null;
    name: string;
  };
  priceAvg: number;
  pricePercentile: {
    3: number;
    10: number;
    35: number;
    50: number;
    75: number;
    99: number;
  };
  hotelName: string;
  stars: number;
  locationId: number;
  hotelId: number;
  priceFrom: number;
  checkIn: string;
  isFavorite: boolean;
  duration: number;
};

export type QueryParamsType = {
  location: string;
  checkIn: string;
  duration: number;
};

export type URLRequestType = {
  location: string;
  checkIn: string;
  currency: string;
  checkOut: string;
  limit: string;
};
