<template>
  <div class="bg-neutral-200 min-h-screen">
    <header class="fixed top-0 left-0 right-0 bg-neutral-200 z-10">
      <div class="bg-blue-500 py-2 shadow-lg">
        <h1 class="text-white text-3xl">&lt; /&gt; IT JOBS</h1>
      </div>
      <div
        class="flex text-blue-500 text-xl justify-center my-6 gap-2 sm:my-4 sm:text-lg"
      >
        <h2 class="">{{ jobs.length }} Software developer jobs in the US</h2>
        <img
          width="25"
          height="25"
          alt="United States jobs"
          class=""
          src="https://static.devitjobs.us/utilities/united-states-flag.png"
        />
      </div>
    </header>

    <main
      class="mt-20 pt-14 mb-8 flex flex-col items-center sm:pl-0 sm:flex sm:flex-col sm:mt-16 sm:py-14 sm:items-center"
      v-if="!isLoading"
    >
      <ul>
        <li
          v-for="job in paginatedData"
          :key="job._id"
          class="w-[90vw] mb-4 h-20 p-2 shadow bg-white flex sm:flex-col sm:items-center sm:h-max sm:gap-1"
        >
          <div id="company-logo" class="w-14 h-12 mr-4 sm:mr-0 sm:w-9">
            <img :src="job.logoImg" alt="" />
          </div>
          <div id="job-title" class="flex flex-col justify-between sm:block">
            <a
              :href="job.redirectJobUrl"
              target="_blank"
              class="font-semibold"
              >{{ job.jobUrl }}</a
            >
            <div class="flex sm:mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              <p class="text-sm mr-8 sm:mr-10">{{ job.company }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p class="text-sm">{{ job.address }}, {{ job.actualCity }}</p>
            </div>
          </div>
          <div
            id="job-details"
            class="flex flex-1 mr-4 sm:mr-0 flex-col gap-4 sm:relative"
          >
            <p class="text-green-600 text-right sm:text-center">
              {{ job.annualSalaryFrom }} - {{ job.annualSalaryTo }} USD
            </p>
            <p class="flex flex-row gap-4 justify-end">
              <span
                class="bg-blue-100 text-blue-500 px-2 py-0 text-sm rounded-full"
                v-for="list in job.technologies.slice(0, 3)"
                :key="list.id"
                >{{ list }}</span
              >
            </p>
          </div>
        </li>
      </ul>
      <div
        id="page-numbering"
        class="flex gap-4 justify-center mt-8 items-center"
      >
        <button
          @click="pageNumber--"
          :disabled="pageNumber == 1"
          class="py-1 px-3 shadow rounded-full bg-blue-500 text-white"
        >
          Previous
        </button>
        <span
          >Page:
          <input
            type="number"
            name="page"
            id="page"
            min="1"
            :max="pageCount"
            v-model.lazy.trim="pageNumber"
            class="w-[3.5em] p-1"
          />
          / {{ pageCount }}</span
        >
        <button
          @click="pageNumber++"
          :disabled="pageNumber >= pageCount"
          class="py-1 px-3 shadow rounded-full bg-blue-500 text-white"
        >
          Next
        </button>
      </div>
    </main>
    <Loader :isLoading="isLoading" />
    <footer
      class="bg-blue-400 text-white h-10 flex justify-center items-center fixed bottom-0 right-0 left-0"
    >
      <p>&copy; 2023 Obidare Opeyemi Emmanuel</p>
    </footer>
  </div>
</template>

<script>
import Loader from "./components/LoadingPage.vue";

export default {
  name: "App",
  components: {
    Loader,
  },
  data() {
    return {
      url_base: "https://devitjobs.us/api/jobsLight?ref=apislist.com",
      jobs: [],
      pageNumber: 1, // default to page 1
      size: 5,
      isLoading: true,
    };
  },
  mounted() {
    fetch(`${this.url_base}`)
      .then((res) => res.json())
      .then((data) => {
        this.jobs = data;
        this.isLoading = false;
      })
      .catch((err) => console.log(err.message));

    // setTimeout(() => {
    //   this.isLoading = false; // Hide the loader after a delay
    // }, 5000); // Adjust the delay time as needed
  },

  computed: {
    pageCount() {
      let l = this.jobs.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = (this.pageNumber - 1) * this.size,
        end = start + this.size;
      return this.jobs.slice(start, end);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  -webkit-tap-highlight-color: transparent;
}
</style>
