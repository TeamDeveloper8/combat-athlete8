export type DemoFood = {
  meal: string;
  name: string;
  quantity: string;
};

const STORAGE_KEY = "combat-athlete-foods";

export function getFoods(): DemoFood[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export function addFood(food: DemoFood) {
  const foods = getFoods();

  foods.push(food);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(foods)
  );
}

export function clearFoods() {
  localStorage.removeItem(STORAGE_KEY);
}