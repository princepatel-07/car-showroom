
import { cars } from "../data/carsData";
import CarCard from "../components/CarCard";

export default function Cars() {
  return (
    <div className="grid">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
