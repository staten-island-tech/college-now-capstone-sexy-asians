<template>
  <div class="dashboard-container">
    <h1 class="dashboard-title">Hello. This is PokeGacha.</h1>
    <p class="dashboard-description">
      Discover, collect, and gamble your favorite Pokémon...with a gacha story.
    </p>

    <div class="button-container">
      <router-link to="/catalog" class="nav-button">The Catalog</router-link>
      <router-link to="/user/collection" class="nav-button"
        >My Pokémons</router-link
      >
    </div>

    <div class="features-container">
      <div class="bento-box">Hunt!</div>
      <div class="bento-box">Them.</div>
      <div class="bento-box">All!</div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { onMounted } from "vue";

export default {
  name: "DashboardView",
  components: {},
  setup() {
    onMounted(() => {
      gsap.from(".dashboard-title", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "bounce",
        repeat: -1,
        yoyo: true,
      });
      gsap.from(".dashboard-description", {
        duration: 2,
        x: -50,
        opacity: 0,
        ease: "power3.out",
      });
      gsap.from(".nav-button", {
        duration: 2,
        scale: 0,
        opacity: 0,
        ease: "back.out(1.7)",
        stagger: 0.3,
      });
      gsap.from(".bento-box", {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.2,
      });
      gsap.to(".pokemon-icon", {
        duration: 5,
        x: "100vw",
        ease: "linear",
        repeat: -1,
        stagger: 2,
      });
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: url("https://media.discordapp.net/attachments/917589799299321897/1245771290996904038/wp10311728-pokemon-landscape-wallpapers.jpg?ex=6659f66d&is=6658a4ed&hm=d329186e91afa3f314aca1df9a1769bdaf7c9dd9c1a6a7c12cdfa55ffbb67125&=&format=webp&width=895&height=503")
    no-repeat center center/cover;
}

.dashboard-title {
  font-size: 6rem;
  margin-bottom: 1rem;
  color: #ffcb05;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  font-family: "Press Start 2P", cursive;
}

.dashboard-description {
  font-size: 1.5rem;
  color: #3b4cca;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  font-family: "Roboto", sans-serif;
}

.button-container {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 10rem;
}

.nav-button {
  background-color: #ffcb05;
  color: #3b4cca;
  padding: 1rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.25rem;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.nav-button:hover {
  transform: scale(1.1);
}

.features-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 2rem;
}

.bento-box {
  width: 150px;
  height: 150px;
  background-color: #ffcb05;
  color: #3b4cca;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: "Press Start 2P", cursive;
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.99;
  }
}

.dashboard-container::before {
  content: "";
  position: absolute;
  top: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: url("https://img.icons8.com/ios/452/pikachu.png") no-repeat
    center/cover;
  opacity: 0.2;
  animation: float 6s ease-in-out infinite;
}

.dashboard-container::after {
  content: "";
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: url("https://img.icons8.com/ios/452/pokeball.png") no-repeat
    center/cover;
  opacity: 0.2;
  animation: float 8s ease-in-out infinite;
}

.pokemon-icon {
  position: absolute;
  top: 50%;
  left: -100px;
  width: 50px;
  height: 50px;
  background: url("https://img.icons8.com/ios/452/pokeball.png") no-repeat
    center/cover;
  opacity: 0.5;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
