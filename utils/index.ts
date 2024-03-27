// const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "a2a2c4ac50mshdf65ca5d1fd1154p1b11c2jsnb2b1d3f01850",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
//   }
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "a2a2c4ac50mshdf65ca5d1fd1154p1b11c2jsnb2b1d3f01850",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com"
  };

  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", { headers: headers });

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
