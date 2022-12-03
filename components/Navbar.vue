<template>
  <div>
    <div>
      <nav class="bg-white shadow-[0px_0px_40px_rgba(0,0,0,0.05);]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <button type="button" @click="onShowModal" class="outline-btn">
                  ورود
                </button>

                <!-- Profile dropdown -->
                <!-- <div class="ml-3 relative">
                    <div>
                      <button
                        @click="toggle"
                        class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                      >
                        <img
                          class="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt
                        >
                      </button>
                    </div>
                    <transition
                      enter-active-class="transition ease-out duration-100"
                      enter-class="transform opacity-0 scale-95"
                      enter-to-class="transform opacity-100 scale-100"
                      leave-active-class="transition ease-in duration-75"
                      leave-class="transform opacity-100 scale-100"
                      leave-to-class="transform opacity-0 scale-95"
                    >
                      <div
                        v-show="isOpen"
                        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                      >
                        <div
                          class="py-1 rounded-md bg-white shadow-xs"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="user-menu"
                        >
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >Your Profile</a>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >Settings</a>
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >Sign out</a>
                        </div>
                      </div>
                    </transition>
                  </div> -->
              </div>
            </div>
            <div class="flex items-center">
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline">
                  <NuxtLink
                    active="bbbb"
                    exact-active-class="bbbb"
                    to="/"
                    class="px-8 py-6 text-sm font-medium border-b-white border-b-2 text-[#373737] hover:text-[#00C853] hover:border-b-2 hover:border-b-[#00C853]"
                    >خانه</NuxtLink
                  >
                  <NuxtLink
                    to="/service"
                    exact-active-class="bbbb"
                    class="px-8 py-6 text-sm font-medium border-b-white border-b-2 text-[#373737] hover:text-[#00C853] hover:border-b-2 hover:border-b-[#00C853]"
                    >خدمات</NuxtLink
                  >
                  <NuxtLink
                    to="/product"
                    exact-active-class="bbbb"
                    class="px-8 py-6 text-sm font-medium border-b-white border-b-2 text-[#373737] hover:text-[#00C853] hover:border-b-2 hover:border-b-[#00C853]"
                    >محصولات</NuxtLink
                  >
                  <NuxtLink
                    to="blog"
                    exact-active-class="bbbb"
                    class="px-8 py-6 text-sm font-medium border-b-white border-b-2 text-[#373737] hover:text-[#00C853] hover:border-b-2 hover:border-b-[#00C853]"
                    >وبلاگ</NuxtLink
                  >
                </div>
              </div>
              <div class="flex flex-row px-8 py-6">
                <img class="h-8" src="~/assets/Vector.png" alt="logo" />
                <img class="h-8" src="~/assets/Vector-1.png" alt="logo-1" />
                <img class="h-8" src="~/assets/Vector-2.png" alt="logo-2" />
              </div>
            </div>

            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <button
                @click="toggle"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                <svg
                  :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                <svg
                  :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
          <div class="px-2 pt-2 pb-3 sm:px-3">
            <NuxtLink
              to="/"
              class="block px-3 py-2 rounded-md text-base text-gray-300 font-medium text-white hover:text-white hover:bg-[#00c853] focus:outline-none focus:text-white focus:bg-[#00c853]"
              >خانه</NuxtLink
            >
            <NuxtLink
              to="/product"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#00c853] focus:outline-none focus:text-white focus:bg-[#00c853]"
              >محصولات</NuxtLink
            >
            <NuxtLink
              to="/service"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#00c853] focus:outline-none focus:text-white focus:bg-[#00c853]"
              >خدمات</NuxtLink
            >
            <NuxtLink
              to="/blog"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#00c853] focus:outline-none focus:text-white focus:bg-[#00c853]"
              >وبلاگ</NuxtLink
            >
          </div>
        </div>
      </nav>

      <header class="bg-white mt-10">
        <div
          dir="rtl"
          class="text-right max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <NuxtLink to="/" class="leading-tight text-gray-900 mr-10">
            خانه</NuxtLink
          >
          <span v-if="$route.path !== '/'"> {{ ">" }}</span>
          <span
            v-if="$route.path !== '/'"
            class="leading-tight text-[#00c853] mr-2"
          >
            {{ roterName }}
          </span>
        </div>
      </header>
    </div>

    <transition name="modal">
      <Modal v-if="modalShow" @close="closModal">
        <!--
        you can use custom content here to overwrite
        default content
      -->
        <!-- <template v-slot:header>
       
        <h1 class="text-center">ورود به حساب  کاربری</h1>
      </template> -->
        <template v-slot:body>
          <div class="flex items-center justify-center min-h-full">
            <div>
              <h3 class="text-2xl font-bold text-center mb-e4">
                ورود به حساب کاربری
              </h3>
              <form class="mt-10" action="#3">
                <div dir="rtl" class="mb-4 last:mb-0">
                  <div class="relative mb-6">
                    <label :class="[haseError ? 'text-[#FF2424]' : '']" for="userName">نام کاربری</label>

                    <div class="relative group mt-1 rounded-md">
                      <input
                        dir="rtl"
                        type="text"
                        name="price"
                        v-model="username"
                        :class="[
                          username.length > 0
                            ? 'border-[#000000]'
                            : 'border-white',
                          haseError ? 'login-input-has-error' : '',
                        ]"
                        class="text-right block login-input w-full pl-7 pr-12 caret focus:pr-12 focus:caret-[#00C853] sm:text-sm"
                        id="userName"
                        placeholder="نام کاربری خود را وارد کنید"
                      />
                      <div class="search-icon-container">
                        <span class="text-[#7B7B7B] sm:text-sm">
                          <svg
                            :class="[haseError ? 'stroke-[#FF2424]' : '']"
                            class="svg-icon stroke-[#7B7B7B] group-focus-within:stroke-[#00C853] search-icon"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div
                      class="absolute left-0 w-full pr-1 mt-1 text-xs leading-none text-right text-red-500 top-full"
                    >
                      <div class="hidden">Field is required</div>
                    </div>
                  </div>
                </div>
                <div dir="rtl" class="mb-4 last:mb-0">
                  <div class="relative mb-6">
                    <label :class="[haseError ? 'text-[#FF2424]' : '']" for="userPassword">رمز عبور</label>

                    <div class="relative group mt-1 rounded-md">
                      <button
                        type="button"
                        @click.stop="showPassIcon"
                        :class="[!showPass ? 'hidden' : 'block']"
                        class="absolute inset-y-3 left-5 flex items-center;"
                      >
                        <span class="text-[#7B7B7B] sm:text-sm">
                          <svg
                            style="width: 24px; height: 24px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"
                            />
                          </svg>
                        </span>
                      </button>
                      <button
                        type="button"
                        @click.stop="showPassIcon"
                        :class="[showPass ? 'hidden' : 'block']"
                        class="absolute inset-y-3 left-5 flex items-center;"
                      >
                        <span class="text-[#7B7B7B] sm:text-sm">
                          <svg
                            style="width: 24px; height: 24px"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                            />
                          </svg>
                        </span>
                      </button>
                      <input
                        dir="rtl"
                        name="price"
                        v-model="password"
                        :class="[haseError ? 'login-input-has-error' : '']"
                        class="text-right block login-input w-full pl-7 pr-12 caret focus:pr-12 focus:caret-[#00C853] sm:text-sm"
                        id="userPassword"
                        :type="showPass ? 'text' : 'password'"
                        placeholder="رمز عبور خود را وارد کنید"
                      />
                      <div class="search-icon-container">
                        <span class="text-[#7B7B7B] sm:text-sm">
                          <svg
                            :class="[haseError ? 'stroke-[#FF2424]' : '']"
                            class="svg-icon stroke-[#7B7B7B] group-focus-within:stroke-[#00C853] search-icon"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div
                      class="absolute left-0 w-full pr-1 mt-1 text-xs leading-none text-right text-red-500 top-full"
                    >
                      <div class="hidden">Field is required</div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end mb-4 last:mb-0">
                  <div class="mr-4 w-full last:mr-0">
                    <button
                      type="button"
                      @click.stop="login"
                      class="text-center fill-btn w-full items-center no-underline transition leading-none select-none outline-none focus:outline-none relative text-white h-10 px-4 text-base rounded"
                    >
                      <svg
                        v-if="isSubmit"
                        class="animate-spin h-5 w-5 mr-3 ..."
                        viewBox="0 0 24 24"
                      >
                        <!-- ... -->
                      </svg>

                      <span v-else>ورود</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </template>
      </Modal>
    </transition>
  </div>
</template>

<script>
import Modal from "~/components/LoginModal.vue";

export default {
  components: { Modal },
  data() {
    return {
      isOpen: false,
    };
  },
  setup() {
    const isSubmit = ref(false);
    const showPass = ref(false);
    const modalShow = ref(false);
    const username = ref("");
    const password = ref("");
    const haseError = ref(false);
    const onShowModal = () => {
      modalShow.value = true;
    };
    const closModal = () => {
      modalShow.value = false;
    };
    const showPassIcon = () => {
      showPass.value = !showPass.value;
    };
    const login = async () => {
      isSubmit.value = true;

      await $fetch(`https://challenge.webjar.ir/auth/login`, {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
          userName: username.value,
          password: password.value,
        }),
      })
        .then((response) => {
          console.log("response", response);
          haseError.value = false;
          modalShow.value = false;
          isSubmit.value = false;
          username.value = "";
          password.value = "";
          localStorage.setItem("accessToken", response.token.accessToken);
          localStorage.setItem("refreshToken", response.token.refreshToken);
        })
        .catch((error) => {
          // this.errorMessage = error;
          if (error) {
            console.error("There was an error!", error);
            haseError.value = true;

            isSubmit.value = false;
          }
        });
    };
    return {
      modalShow,
      onShowModal,
      showPass,
      showPassIcon,
      closModal,
      username,
      password,
      login,
      isSubmit,
      haseError,
    };
  },
  mounted() {
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    roterName() {
      if (this.$route.path == "/blog") {
        return "بلاگ";
      } else if (this.$route.path == "/service") {
        return "خدمات";
      } else if (this.$route.path == "/product") {
        return "محصولات";
      }
    },
  },
};
</script>

<style lang="postcss">
.bbbb {
  border-bottom: 2px solid #00c853;
  color: #00c853;
  background-color: white;
}
.outline-btn {
  @apply px-10 pb-2  mt-2 border border-[#00C853] bg-white text-[#00C853] rounded-lg;

  &:hover {
    @apply drop-shadow-[0_5px_10px_rgba(0,200,83,0.25)];
  }
  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:focus {
    @apply border-2 border-[#00E15D];
  }
}
.login-input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  @apply rounded-lg h-12;
  &:focus {
    border: 1px solid #00c853;
    outline: none;
  }
}
.login-input-has-error {
  border: 1px solid rgb(255, 36, 36);
}
</style>
