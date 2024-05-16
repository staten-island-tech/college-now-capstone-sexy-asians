<template>
    <div class="video-container">
      <video ref="introVideo" @ended="onVideoEnded" autoplay>
        <source src="@/assets/introduction.mp4" type="video/mp4" />
        Not
      </video>
    </div>
  </template>

/* Play and go to push to dashboard when end */
<script>
export default {
  name: "IntroLoader",
  methods: {
    onVideoEnded() {
      this.$router.push("/dashboard");
    }
  },
  mounted() {
    this.$refs.introVideo.play();
  }
}
</script>