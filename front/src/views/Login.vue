<template>
  <div class="login">
    <div class="login-container">
      <div class="login-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 920 115"
        >
          <defs>
            <text
              id="a3hPL2s5kP"
              x="118.78"
              y="263.59"
              alignment-baseline="before-edge"
              dominant-baseline="text-before-edge"
              font-family="Prosto One"
              font-size="150"
              font-style="normal"
              font-weight="400"
              letter-spacing="-7.5"
              style="line-height:100%"
              transform="translate(-127.1678 -297.6419)"
              xml:space="preserve"
            >
              <tspan x="118.78" alignment-baseline="before-edge" dy="0em">
                Foodtracker
              </tspan>
            </text>
          </defs>
          <g id="bDlXoz7sK">
            <use
              class="login-logo-svg"
              fill="#f08c00"
              xlink:href="#a3hPL2s5kP"
            />
            <use
              class="login-logo-svg-border"
              fill-opacity="0"
              stroke="#f08c00"
              stroke-width="2"
              xlink:href="#a3hPL2s5kP"
            />
          </g>
        </svg>
      </div>
      <div class="form-container">
        <div class="form-header">Zaloguj się</div>
        <form class="form" @submit.prevent="login" novalidate="true">
          <custom-input
            inputType="text"
            :focusFunction="clearErrors"
            :errorBool="usernameError"
            :errorText="usernameErrorMessage"
            labelText="Nazwa użytkownika"
            v-model="username"
          ></custom-input>
          <custom-input
            inputType="password"
            :focusFunction="clearErrors"
            :errorBool="passwordError"
            :errorText="passwordErrorMessage"
            labelText="Hasło"
            v-model="password"
          ></custom-input>
          <div class="form-buttons-container">
            <div class="col-6 p-0">
              <input class="form-btn" type="submit" value="Zaloguj" />
            </div>
            <div class="col-6 p-0 ">
              <div class="login-form-register">
                <div>
                  Nie masz jeszcze konta?
                </div>
                <div
                  class="login-form-register-link"
                  @click="$router.push('/register')"
                >
                  Zarejestruj się.
                </div>
              </div>
            </div>
          </div>
        </form>
        <transition name="error-transition">
          <div v-if="loginError" class="form-error">
            <i class="fas fa-exclamation-circle"></i>
            {{ loginErrorMessage }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import customInput from "../components/customInput.vue";
export default {
  name: "Login",
  components: { customInput },
  data() {
    return {
      username: "",
      password: "",
      usernameError: false,
      usernameErrorMessage: "",
      passwordError: false,
      passwordErrorMessage: "",
      loginError: false,
      loginErrorMessage: "",
      user: "",
    };
  },
  methods: {
    login() {
      this.clearErrors();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (!this.username) {
        this.usernameError = true;
        this.usernameErrorMessage = "Musisz podać nazwę użytkownika";
        return false;
      }
      if (!this.password) {
        this.passwordError = true;
        this.passwordErrorMessage = "Musisz podać hasło";
        return false;
      }
      if (!this.usernameError && !this.passwordError) {
        this.getUser();
      }
    },
    clearErrors() {
      this.usernameError = false;
      this.usernameErrorMessages = "";
      this.passwordError = false;
      this.passwordErrorMessages = "";
      this.loginError = false;
      this.loginErrorMessage = "";
    },
    async getUser() {
      try {
        const response = await axios.get(
          `http://localhost:5000/login/${this.username}`
        );
        this.user = response.data;
        if (!this.user) {
          this.loginError = true;
          this.loginErrorMessage =
            "Nie odnaleziono użytkownika o podanej nazwie";
          return false;
        }
        if (this.user.password != this.password) {
          this.loginError = true;
          this.loginErrorMessage = "Hasło jest niepoprawne";
          return false;
        } else {
          this.$store.commit("setLoggedUser", this.user);
          this.$router.push("/home");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss">
.login {
  @include flex-center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
}
.login-container {
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.login-logo {
  width: 100%;
  margin-bottom: 5rem;
  &-svg {
    opacity: 0;
    animation: opacity 3s linear forwards;
  }
  &-svg-border {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 5s linear forwards;
  }
}
@keyframes opacity {
  to {
    opacity: 1;
  }
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
.login-form-register {
  width: 90%;
  position: relative;
  left: 5%;
  &-link {
    color: $primaryYellow;
    cursor: pointer;
    font-weight: 500;
  }
}

@media (max-width: 992px) {
  .login-container {
    width: 90%;
  }
  .login-logo {
    margin-bottom: 3rem;
  }
}
@media (max-height: 800px) {
  .login {
    padding-top: 2rem;
    position: unset;
  }
  .login-logo {
    margin-bottom: 2rem;
  }
}
</style>
