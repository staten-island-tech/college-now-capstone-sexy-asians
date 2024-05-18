<template>
  <div class="video-container">
    <video ref="introVideo" @ended="onVideoEnded" autoplay>
      <source src="@/assets/introduction.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "IntroLoader",
  methods: {
    onVideoEnded() {
      this.$router.push("/DashboardView");
    },
  },
  mounted() {
    this.$refs.introVideo.play();
  },
};
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
