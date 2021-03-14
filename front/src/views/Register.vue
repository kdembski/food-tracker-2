<template>
  <div class="register">
    <div class="register-container">
      <div class="form-container">
        <div class="form-header">Załóż konto</div>
        <form class="form" @submit.prevent="register" novalidate="true">
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
          <custom-input
            inputType="password"
            :focusFunction="clearErrors"
            :errorBool="confirmPasswordError"
            :errorText="confirmPasswordErrorMessage"
            labelText="Potwierdź hasło"
            v-model="confirmPassword"
          ></custom-input>
          <div class="form-buttons-container">
            <div class="col-6 p-0">
              <input class="form-btn" type="submit" value="Zarejestuj" />
            </div>
            <div class="col-6 p-0 ">
              <div class="register-form-login">
                <div>
                  Masz już konto?
                </div>
                <div class="register-form-login-link" @click="routerPush">
                  Zaloguj się.
                </div>
              </div>
            </div>
          </div>
        </form>
        <transition name="error-transition">
          <div v-if="registerError" class="form-error">
            <i class="fas fa-exclamation-circle"></i>
            {{ registerErrorMessage }}
          </div>
        </transition>
        <transition name="error-transition">
          <div v-if="registerSuccess" class="form-success">
            <i class="fas fa-check-circle"></i>
            {{ registerSuccessMessage }}
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
  name: "Register",
  components: { customInput },
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      usernameError: false,
      usernameErrorMessage: "",
      passwordError: false,
      passwordErrorMessage: "",
      confirmPasswordError: false,
      confirmPasswordErrorMessage: "",
      registerError: false,
      registerErrorMessage: "",
      registerSuccess: false,
      registerSuccessMessage: "",
      user: "",
    };
  },
  methods: {
    routerPush() {
      this.$router.push("/");
    },
    register() {
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
      if (!this.confirmPassword) {
        this.confirmPasswordError = true;
        this.confirmPasswordErrorMessage = "Musisz potwierdzić hasło";
        return false;
      }
      if (this.password != this.confirmPassword) {
        this.confirmPasswordError = true;
        this.confirmPasswordErrorMessage = "Hasła do siebie nie pasują";
        return false;
      }
      if (
        !this.usernameError &&
        !this.passwordError &&
        !this.confirmPasswordError
      ) {
        this.getUser();
      }
    },
    clearErrors() {
      this.usernameError = false;
      this.usernameErrorMessages = "";
      this.passwordError = false;
      this.passwordErrorMessages = "";
      this.confirmPasswordError = false;
      this.confirmPasswordErrorMessages = "";
      this.registerError = false;
      this.registerErrorMessage = "";
    },
    async registerUser() {
      try {
        await axios.post("http://localhost:5000/register", {
          user_name: this.username,
          password: this.password,
        });
        this.registerSuccess = true;
        this.registerSuccessMessage = "Konto zarejestrowane pomyślnie";
        setTimeout(() => {
          this.routerPush();
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    },
    async getUser() {
      try {
        const response = await axios.get(
          `http://localhost:5000/login/${this.username}`
        );
        if (response.data != "") {
          this.registerError = true;
          this.registerErrorMessage = "Nazwa użytkownika jest zajęta";
        } else {
          this.registerUser();
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss">
.register {
  @include flex-center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
}
.register-container {
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.register-form-login {
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
  .register-container {
    width: 90%;
  }
  .register-logo {
    margin-bottom: 3rem;
  }
}
@media (max-height: 800px) {
  .register {
    padding-top: 2rem;
    position: unset;
  }
  .register-logo {
    margin-bottom: 2rem;
  }
}
</style>
