import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(item) {
  return;
}

export default function CategoryView() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}
