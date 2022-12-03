<template>
  <div class="justify-center text-center">
    <h1
      class="text-3xl mt-14 font-bold text-center leading-tight text-gray-900"
    >
      وبلاگ
    </h1>
    <div class="w-2/5 mt-8 mx-auto">
      <SearchInput @filterPost="searchPost"></SearchInput>
    </div>
    <select class="md:hidden" v-model="selectedCategories[0]">
      <option value="">همه</option>
      <option
        v-for="(category, index) in categories"
        :key="index"
        :value="category._id"
      >
        {{ category.name }}
      </option>
    </select>
    <div class="container pl-20">
      <div class="relative grid grid-cols-4 min-h-screen">
        <!-- container for all cards -->
        <main
          class="bg-white col-span-4 sm:col-span-4 md:col-span-3 min-h-[150vh]"
        >
          <!-- card -->
          <div
            v-for="(post, index) in curentPostLists"
            :key="post._id"
            class="flex flex-col md:flex-row overflow-hidden bg-white shadow-[0px_0px_30px_rgba(0,200,83,0.05)] rounded-lg mt-10 w-100 mx-2"
          >
            <div class="h-100 items-end flex w-auto md:w-1/3">
              <button class="fill-btn">بیشتر</button>
            </div>
            <!-- content -->
            <div
              class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between"
            >
              <h3 class="text-right text-lg leading-tight">
                {{ post.title }}
              </h3>
              <p
                dir="rtl"
                style="
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
                class="mt-2"
              >
                {{ post.body }}
              </p>
              <p
                class="text-sm justify-between flex text-gray-700 uppercase tracking-wide font-semibold mt-2"
              >
                <span class="w-auto"
                  >{{
                    new Date(post.updatedAt).toLocaleDateString("fa-IR", {
                      timeZone: "Iran",
                      format: "YYYY MM DD",
                    })
                  }}
                  <img style="display: unset" src="~/assets/Vector-3.png"
                /></span>
                <span class="w-auto"
                  >{{ post.commentCount
                  }}<img style="display: unset" src="~/assets/Vector-4.png"
                /></span>
                <span class="w-auto">
                  {{ post.author }}
                  <img style="display: unset" src="~/assets/Vector-5.png"
                /></span>
              </p>
            </div>
            <!-- media -->
            <div class="h-64 w-auto md:w-1/2">
              <img
                class="inset-0 h-full w-full object-cover object-center"
                :src="post.introImageUrl.host + post.introImageUrl.path"
              />
            </div>
          </div>
          <!--/ card-->
          <Paginate
            :clickHandler="clickCallback"
            :pageCount="pageCount"
            prevText="<"
            nextText=">"
            :container-class="'pagination'"
            :page-class="'page-item'"
            :page-link-class="'page-link-item'"
            :prev-class="'prev-item'"
            :prev-link-class="'prev-link-item'"
            :next-class="'next-item'"
            :next-link-class="'next-link-item'"
            :break-view-class="'break-view'"
            :break-view-link-class="'break-view-link'"
          ></Paginate>
        </main>
        <!--/ flex-->

        <aside
          class="max-h-screen hidden sm:hidden md:block grid-rows-1 sticky top-12"
        >
          <div class="py-6 pl-6">
            <!-- Start right column area -->
            <div class="relative" style="min-height: 16rem">
              <div
                class="absolute w-full inset-0 rounded-lg flex justify-center items-center"
              >
                <div class="h-[200px] scroll-auto w-full">
                  <div
                    class="w-full justify-between flex"
                    v-for="(category, index) in categories"
                    :key="index"
                  >
                    <input
                      :id="category._id"
                      v-model="selectedCategories"
                      type="checkbox"
                      :value="category._id"
                      @change="setOptions($event, `filter[salary]`)"
                      class="h-4 w-4 shadow default:ring-2 indeterminate:bg-gray-300 checked:bg-blue-500"
                    />
                    <label :for="category._id">{{ category.name }}</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- End right column area -->
          </div>
        </aside>
        <!-- ... -->
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "~/components/SearchInput.vue";
import Paginate from "~/components/Paginate.vue";
import { computed, ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import { watch } from "@vue/runtime-core";
export default {
  components: { SearchInput, Paginate },
  data() {
    return {
      xxx: [],
      isOpen: false,
      postIndex: 0,
    };
  },
  setup(props) {
    const country = ref(null);
    const error = ref(null);
    const change = ref(false);
    const bordersArr = ref([]);
    const selectedCategories = ref([]);
    const postIndex = ref(0);
    const pageCount = ref(0);
    const router = useRouter();
    const route = useRoute();
    const searchText = ref(" ");
    const categories = ref([]);

    // const goBack = () => {
    //   router.push("/");
    // };

    // console.log(route.params.name);
    const queryString = computed(() => {
      let values = selectedCategories.value[0]
        ? "?category=" + selectedCategories.value[0]
        : "";
      console.log("values", values);
      return values;
    });
    const {
      data: posts,
      pending,
      refresh,
    } = useFetch(() => `https://challenge.webjar.ir/posts${queryString.value}`);
    console.log("queryString.value", queryString.value);
    console.log("posts", posts);
    // fetch a single country
    // getSingleCountry(route.params.name);

    const clickCallback = (page) => {
      postIndex.value = page * 4 - 4;
      console.log(page);
      //   this.fitleredPost()
    };

    const setOptions = (e, key) => {
      change.value = false;
      console.log("چگد:", e.target.checked);
      if (!e.target.checked) {
        selectedCategories.value = [];
        change.value = true;
      } else {
        selectedCategories.value = [e.target.value];
        change.value = true;
      }
      // console.log("selectedCategories.value",selectedCategories.value)
    };
    // // return all language names
    const curentPostLists = computed(() => {
      postIndex;
      var xxx = [];
      console.log(postIndex);
      var x =
        searchText.value == ""
          ? posts.value
          : posts.value.filter(function (post) {
              return post.title.includes(searchText.value);
            });
      console.log("xxxxx", x);
      pageCount.value = Math.ceil(Number(x.length / 4));
      x.forEach((post, index) => {
        if (index >= postIndex.value && index < postIndex.value + 4) {
          xxx.push(post);
        }
      });
      console.log("curentPostLists", [...xxx]);
      return [...xxx];
    });

    // // return all currency names
    // const currencies = computed(() => {
    //   if (country.value) {
    //     return country.value.currencies.map((currency) => {
    //       if (
    //         country.value.currencies.indexOf(currency) ===
    //         country.value.currencies.length - 1
    //       ) {
    //         return currency.name;
    //       } else {
    //         return currency.name + ", ";
    //       }
    //     });
    //   }
    // });

    // const formatPopulation = (value) => {
    //   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // };
    watch(
      () => posts.value,
      () => {
        console.log("postIndex.value", postIndex.value);
        postIndex.value = 5;
        postIndex.value = 0;
        getPostCount();
      }
    );
    watch(
      () => queryString.value,
      () => {
        // console.log('queryString.value',queryString.value)
        refresh();
      }
    );
    const getCategories = async () => {
      try {
        const res = await $fetch(`https://challenge.webjar.ir/post-categories`);
        // const data = await res.json();
        categories.value = res;
        console.log("hiii", res);
      } catch (err) {}
    };
    const getPostCount = async () => {
      // console.log("hiii")
      try {
        const res = await $fetch(
          `https://challenge.webjar.ir/posts/count${queryString.value}`
        );
        // const data = await res.json();
        pageCount.value = Math.ceil(Number(res / 4));
        console.log("hiii", res);
      } catch (err) {}
    };
    const searchPost = (searchTextt) => {
      searchText.value = searchTextt;
      // postIndex.value = 1;
      postIndex.value = 0;
    };
    onMounted(() => {
      getCategories();
      getPostCount();
    });

    return {
      posts,
      postIndex,
      clickCallback,
      curentPostLists,
      selectedCategories,
      setOptions,
      getPostCount,
      pageCount,
      searchPost,
      searchText,
      categories,
    };
  },
};
</script>
<style lang="postcss">
.fill-btn {
  background-color: #00c853;
  @apply px-10 pb-2   mt-2 border border-[#00C853]  text-white rounded-lg;

  &:hover {
    @apply drop-shadow-[0_5px_10px_rgba(0,200,83,0.25)];
  }
  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:focus {
    background: #00c853;
    border: 2px solid #00712f;
    @apply text-white border-2;
  }
}
.pagination {
  @apply w-full flex justify-center my-20;
}
.page-item {
  @apply w-[30px] h-[30px] rounded-lg border ml-2 border-[#00c853];
}
.page-item.active {
  @apply bg-[#00c853];
}
.page-item.active > .page-link-item {
  @apply text-[#FFFFFF];
}
.page-link-item {
  @apply text-[#00c853];
}
.prev-item {
  @apply w-[30px] h-[30px] rounded-lg border-0 ml-2;
}
.prev-link-item {
  @apply text-[#00c853];
}
.next-item {
  @apply w-[30px] h-[30px] rounded-lg border-0 ml-2;
}
.next-link-item {
  @apply text-[#00c853];
}
.break-view {
  @apply w-[30px] h-[30px] rounded-lg border-0 ml-2;
}
.break-view-item {
}
</style>
