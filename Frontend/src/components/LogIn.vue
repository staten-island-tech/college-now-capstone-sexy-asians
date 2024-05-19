<template>
  <div class="all">
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>

    <div class="front">
      <form>
        <h3>Login Here</h3>

        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" class="email1" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Password" class="password" />
        </div>

        <div>
          <input
            @click.prevent="login"
            type="submit"
            value="Log in"
            class="login"
          />
          <div class="link" @click.prevent="flip">
            Don't have an account? Signup
          </div>
        </div>
      </form>
    </div>

    <div class="back">
      <form>
        <h3>Signup Here</h3>

        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" class="email2" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Password" class="password1" />
        </div>

        <div>
          <label>Retype Password</label>
          <input
            type="password"
            placeholder="Retype Password"
            class="password2"
          />
        </div>

        <div>
          <input
            @click.prevent="signup"
            type="submit"
            value="Sign up"
            class="login"
          />
          <div class="link" @click.prevent="flip">
            Already have an account? Login
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userData = ref();
async function login() {
  try {
    const req = {
      email: document.querySelector(".email1").value,
      password: document.querySelector(".password").value,
    };
    const email = ref(req.email);
    const password = ref(req.password);

    let res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    let user = await res.json();
    userData.value = user;
    console.log(userData.value.user);
  } catch (error) {
    console.log(error);
  }
}
async function signup() {
  const req = {
    email: document.querySelector(".email2").value,
    password: document.querySelector(".password1").value,
    passwordConfirm: document.querySelector(".password2").value,
  };
  const email = ref(req.email);
  const password = ref(req.password);
  const confirm = ref(req.passwordConfirm);

  if (password.value !== confirm.value) {
    alert("Passwords do not match");
  } else {
    console.log(email, password);
    try {
      let res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      });
      let user = await res.json();
      userData.value = user;
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  }
}

function flip() {
  document.querySelector(".all").classList.toggle("flip");
}
</script>

<style scoped>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: #080710;
}

/* shapes */
.background {
  width: 430px;
  height: 520px;
  position: absolute;
}
.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}
.shape:first-child {
  background: linear-gradient(#1845ad, #23a2f6);
  left: -80px;
  top: -80px;
}
.shape:last-child {
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -30px;
  bottom: -80px;
}

/* login/signup form */
form {
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder {
  color: #e5e5e5;
}
.login {
  margin-top: 30px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

.link {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
}

.all {
  margin-top: 13rem;
  perspective: 1000px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.back {
  transform: rotateY(180deg);
  position: absolute;
  top: 0px;
}
.all.flip {
  transform: rotateY(180deg);
}
</style>
