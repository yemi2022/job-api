<template>
  <div v-if="isLoading" class="loader">
    <!-- You can customize the loader's HTML and CSS here -->
    <div class="spinner"></div>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
  },
};
</script>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #343fdb;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

p {
  color: white;
  margin-top: 10px;
}
</style>
