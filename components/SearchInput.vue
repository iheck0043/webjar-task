<template>
  <div class="relative group mt-1 rounded-md shadow-sm">
    <input
      dir="rtl"
      type="text"
      name="price"
      v-model="searchInput"
      id="price"
      class="text-right block search-input w-full pl-7 pr-12 caret focus:pr-5 focus:caret-[#00C853] sm:text-sm"
      placeholder="جستجو کنید..."
      @input="filterPostWithSearchInput"
    />
    <div class="search-icon-container group-focus-within:left-5 ">
      <span class="text-[#7B7B7B] sm:text-sm">
        <svg
          class="svg-icon stroke-[#7B7B7B] group-focus-within:stroke-[#00C853] search-icon"
          aria-labelledby="title desc"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.9 19.7"
        >
          <title id="title">Search Icon</title>
          <desc id="desc">A magnifying glass icon.</desc>
          <g class="search-path" fill="none" >
            <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
            <circle cx="8" cy="8" r="7" />
          </g>
        </svg>
      </span>
    </div>
    <!-- <div class="absolute inset-y-0 right-0 flex items-center">
      <label for="currency" class="sr-only">Currency</label>
      <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    searchInput:""
  },
  mounted() {},
  methods: {
    filterPostWithSearchInput(value){
if(this.searchInput.length>2){
  this.$emit('filterPost',this.searchInput)
}
if(this.searchInput.length==0){
  this.$emit('filterPost',this.searchInput)
}
    }
  },
};
</script>

<style lang="postcss">
.svg-icon.search-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
}

.search-icon-container {
  @apply pointer-events-none absolute inset-y-0 right-5 flex items-center;
}

.search-input {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  @apply rounded-lg h-12;
  &:focus {
    box-shadow: 0px 0px 10px rgba(0, 148, 255, 0.1);
    outline: none;
  }
}
</style>
