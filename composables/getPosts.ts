import { ref } from "vue";

const getCountries = () => {
  const error = ref(null);
  const countries = ref([]);
  const isPending = ref(false);

  const loadCountries = async () => {
    error.value = null;
    isPending.value = true;

    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      countries.value = data;
      isPending.value = false;
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
      isPending.value = false;
    }
  };

  return { error, countries, loadCountries, isPending };
};

export default getCountries;
