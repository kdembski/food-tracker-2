<template>
  <transition appear name="opacity-transition">
    <div id="app">
      <transition name="opacity-transition">
        <div
          v-if="navbar"
          id="nav"
          :class="{ minimized: minimizeNav && navbarCollapsed }"
        >
          <div class="navbar-container">
            <div
              :class="{
                'main-nav': windowWidth > 992,
                'mobile-nav': windowWidth <= 992,
                collapsed: navbarCollapsed && windowWidth <= 992,
              }"
            >
              <div class="nav-logo-svg-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 920 115"
                  @click="pushRouterToHome"
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
                      <tspan
                        x="118.78"
                        alignment-baseline="before-edge"
                        dy="0em"
                      >
                        Foodtracker
                      </tspan>
                    </text>
                  </defs>
                  <g id="bDlXoz7sK">
                    <use fill="#f08c00" xlink:href="#a3hPL2s5kP" />
                  </g>
                </svg>
              </div>
              <div class="links-container">
                <router-link class="navbar-link" to="/recipes"
                  >Przepisy</router-link
                >
                <router-link class="navbar-link" to="/calendar"
                  >Kalendarz</router-link
                >
                <router-link class="navbar-link" to="/ingredients"
                  >Składniki</router-link
                >
                <a class="navbar-link logout" @click="logout">Wyloguj</a>
              </div>
              <div
                class="collapse-btn-container"
                :class="{ collapsed: navbarCollapsed }"
                @click="navbarCollapsed = !navbarCollapsed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 150 100"
                  class="collapse-btn"
                >
                  <rect
                    id="rect1"
                    x="10"
                    y="5"
                    rx="5"
                    ry="5"
                    width="130"
                    height="8"
                    fill="#323232"
                  />
                  <rect
                    id="rect2"
                    x="24"
                    y="10"
                    rx="5"
                    ry="5"
                    width="130"
                    height="8"
                    fill="#323232"
                    transform="rotate(36, 24, 10)"
                  />
                  <rect
                    id="rect3"
                    x="20"
                    y="86"
                    rx="5"
                    ry="5"
                    width="130"
                    height="8"
                    fill="#323232"
                    transform="rotate(-36, 20, 86)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <transition name="opacity-transition" mode="out-in">
        <loader v-if="$store.state.loading"></loader>
        <router-view v-if="!$store.state.loading" />
      </transition>
    </div>
  </transition>
</template>

<script>
import loader from "./components/loader.vue";
export default {
  components: { loader },
  data() {
    return {
      windowWidth: "",
      windowHeight: "",
      scrollpx: "",
      navbarCollapsed: true,
      minimizeNav: false,
    };
  },
  methods: {
    logout() {
      this.$store.commit("setLoggedUser", "");
      this.$store.commit("setRecipes", []);
      this.$router.push("/");
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
    handleScroll() {
      this.scrollpx = window.scrollY;
      if (this.scrollpx > 90 && !this.minimizeNav) {
        this.minimizeNav = true;
      }
      if (this.scrollpx < 10 && this.minimizeNav) {
        this.minimizeNav = false;
      }
    },
    pushRouterToHome() {
      if (this.$route.name != "Home") {
        this.$router.push("/home");
      }
    },
  },
  computed: {
    navbar: function() {
      if (this.$route.name == "Login" || this.$route.name == "Register")
        return false;
      else return true;
    },
    currentPath: function() {
      return this.$route.path;
    },
  },
  watch: {
    currentPath: function() {
      this.navbarCollapsed = true;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prosto+One&display=swap");
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  &.minimized {
    transform: translateY(-1.75rem);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  }
}
.navbar-container {
  width: 1500px;
  margin: auto;
  padding: 2.5rem 1.5rem 0.75rem 1.5rem;
}
.main-nav {
  display: flex;
  justify-content: space-between;
  & .links-container {
    display: inline-flex;
    align-items: center;
  }
  & .navbar-link {
    font-size: 22px;
    font-weight: 400;
    color: $lightGrey;
    margin: 0 1.5rem;
    transition: all 0.1s ease-in-out;
    &:hover {
      color: $primaryYellow;
      text-decoration: none;
    }
    &.router-link-exact-active {
      color: $primaryYellow;
    }

    &.logout {
      cursor: pointer;
      color: $primaryYellow;
      padding: 0.5rem 1.75rem;
      border-radius: 50px;
      font-size: 18px;
      font-weight: 500;
      margin-right: 0;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
      background-color: white;
      &:hover {
        background-color: $lightYellow;
        color: $primaryGrey;
      }
    }
  }
  & .nav-logo-svg-container {
    width: 350px;
    cursor: pointer;
  }
  & .collapse-btn-container {
    display: none;
  }
}
.mobile-nav {
  display: flex;
  justify-content: start;
  position: relative;
  &.collapsed {
    & .links-container {
      transform: translateY(-150%);
      opacity: 0;
      transition: opacity 0.3s ease-out, transform 0s 0.3s;
    }
    & .navbar-link {
      transform: translateY(-20%);
      opacity: 0;
    }
  }
  & .links-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 100%;
    left: -1.5rem;
    width: 100vw;
    background-color: white;
    padding: 2rem 0;
    transition: opacity 0.3s ease-out, transform 0s;
  }
  & .navbar-link {
    @include flex-center;
    font-size: 25px;
    font-weight: 400;
    color: $lightGrey;
    padding: 0.75rem 0;
    transition: color 0.2s ease-in-out, opacity 0.3s ease-out,
      transform 0.3s ease-out;
    &:hover {
      color: $primaryYellow;
      text-decoration: none;
    }
    &.router-link-exact-active {
      color: $primaryYellow;
    }

    &.logout {
      font-size: 28px;
      cursor: pointer;
      color: $primaryGrey;
      font-weight: 700;
    }
  }
  & .nav-logo-svg-container {
    width: 250px;
    cursor: pointer;
  }
  & .collapse-btn-container {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(31.25px * 1.5);
    height: 31.25px;
    & .collapse-btn {
      & #rect1 {
        transition: transform 0.3s ease-out, opacity 0.3s ease-out;
        opacity: 0;
      }
      & #rect2,
      & #rect3 {
        transition: all 0.3s ease-out;
      }
    }
    &.collapsed {
      & .collapse-btn {
        & #rect1 {
          opacity: 1;
        }
        & #rect2 {
          transform: rotate(0deg);
          x: 10px;
          y: 46px;
        }
        & #rect3 {
          transform: rotate(0deg);
          x: 10px;
          y: 87px;
        }
      }
    }
  }
}

@media (max-width: 1500px) {
  .navbar-container {
    width: 100%;
    margin: 0;
  }
}
@media (max-width: 1200px) {
  .navbar-container {
    padding: 2rem 1.5rem 0.75rem 1.5rem;
  }
  #nav {
    &.minimized {
      transform: translateY(-1.25rem);
    }
  }
}
@media (max-width: 576px) {
  .navbar-container {
    padding: 1.5rem 1rem 0.75rem 1rem;
  }
  #nav {
    &.minimized {
      transform: translateY(-0.75rem);
    }
  }
  .mobile-nav {
    & .links-container {
      height: 100vh;
      top: -24px;
      padding: 10rem 0;
      left: -1rem;
    }
  }
}
@media (max-width: 400px) {
  .mobile-nav {
    & .nav-logo-svg-container {
      width: 200px;
    }
    & .collapse-btn-container {
      width: calc(25.27px * 1.5);
      height: 25.27px;
    }
  }
}
@media (max-height: 500px) {
  .mobile-nav {
    & .links-container {
      height: 100vh;
      top: -16px;
      padding: 5rem 0;
    }
  }
}
</style>
