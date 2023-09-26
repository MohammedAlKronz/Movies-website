import { AllMOVIES } from "../types/moviesType";

// 2. Create Reducer
// ملاحظة: سمي الرديوسر باسم الاحاجة الي هو حيعملها
// هاد الرديوسر حيجيبلي كل قائمة الافلام، وحيعمل البحث، ويعملي البجنيشن الي هو رقم الصفحات
// state => هي القيمة الي انا عاوز اخزنها جوا الستور او هي البيانات تعتي
const initialValue = { movies: [], pageCount: 0 };
export const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case AllMOVIES:
      return { movies: action.data, pageCount: action.pages };
    default:
      return state;
  }
};
