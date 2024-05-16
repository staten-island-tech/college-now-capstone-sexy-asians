<template>
    <div class="video-container">
      <video ref="introVideo" @ended="onVideoEnded" autoplay>
        <source src="@/assets/introduction.mp4" type="video/mp4" />
      </video>
    </div>
  </template>