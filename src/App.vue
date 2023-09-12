<template>
  <div class="min-h-screen bg-neutral-200">
    <header class="fixed top-0 left-0 right-0 bg-neutral-200 z-10">
      <div class="bg-blue-500 py-2 shadow-lg">
        <h1 class="text-white text-3xl" >&lt; /&gt; IT JOBS</h1>
      </div>
      <div class="flex text-blue-500 text-xl justify-center mt-6 mb-6">
        <h2 class="">{{ jobs.length }} Software developer jobs in the US</h2>
        <img width="25" height="25" alt="United States jobs" class="" src="https://static.devitjobs.us/utilities/united-states-flag.png">
      </div>
    </header>
   
    <main class="mt-20 pt-14 pl-16 pb-8 min-h-screen">
      <ul>
        <li v-for="job in jobs" :key="job._id" class="w-[90vw] mb-4 h-20 p-2 shadow bg-white flex">
          <div id="company-logo" class="w-14 h-12 mr-4">
            <img :src="job.logoImg"  alt="">
          </div>
          <div id="job-title" class="flex flex-col justify-between">
            <a :href="job.redirectJobUrl" target="_blank" class="font-semibold">{{ job.jobUrl }}</a>
            <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              <p class="text-sm mr-8">{{ job.company }}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p class="text-sm ">{{ job.address }}, {{ job.actualCity }}</p>
            </div>
          </div>
          <div id="job-details" class="flex flex-col absolute right-20">
            <p class="text-green-600 text-right">{{ job.annualSalaryFrom }} - {{ job.annualSalaryTo }} USD</p>
            <p class="flex flex-row">
              <span class="my-4 ml-4 bg-blue-100 text-blue-500 px-2 py1 text-sm rounded-full" v-for="list in job.technologies.slice(0, 3)" :key="list.id">{{ list }}</span>
            </p>
          </div>                    
        </li>
      </ul>
    </main>
    <footer class=" bg-blue-400 text-white h-12 flex justify-center items-center">
      <p>&copy; 2023 Obidare Opeyemi Emmanuel</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      url_base: 'https://devitjobs.us/api/jobsLight?ref=apislist.com',
      jobs:  [],
    }
  },
  mounted(){
    fetch(`${this.url_base}`)
      .then (res => res.json())
      .then (data => this.jobs = data)
      .catch (err => console.log(err.message))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
