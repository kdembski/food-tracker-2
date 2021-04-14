<template>
  <div class="home">
    <div class="main-container">
      <!-- home container -->
      <div clas="home-container">
        <!-- home header -->
        <div class="home-header">
          Witaj {{ $store.state.loggedUser.user_name }}
        </div>
        <div class="home-stats">
          <!-- first icon container -->
          <div class="col-4 home-stats-icon-container">
            <!-- first icon svg -->
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 160 180"
              height="160"
            >
              <defs>
                <path
                  id="a2hVr2OLS2"
                  d="M154.68 2.25c1.58 78.24 2.57 127.14 2.96 146.71.01.5-.36.93-.86 1-46.1 6.54-69.16 12.39-69.16 17.56 0 5.23 23.55 8.78 70.63 10.63-77.14-.66-125.36-1.07-144.65-1.23-6.48-.06-11.67-5.41-11.52-11.89.74-32.56 2.64-115.56 3.37-147.4.19-8.55 7.18-15.38 15.74-15.38h133.49z"
                />
                <path
                  id="b1O85LvuT5"
                  d="M17.36 148.72c-21.35.02-19.42 29.57 0 29.43 12.94-.09 59.7-.09 140.27 0 .03 0 .04-.04.02-.06-4.52-2.89-6.93-7.59-7.25-14.1-.3-6.12 1.61-10.97 5.75-14.56.28-.24.11-.71-.27-.71-78.22-.01-124.39-.01-138.52 0z"
                />
                <path id="abUVHM8zY" d="M16.32 148.59L19.87 1l-3.55 147.59z" />
                <path id="a1KxDXTfcg" d="M25.43 161.96H150.4 25.43z" />
                <path
                  id="am405ymOS"
                  d="M73.71 42.14h26.77v29.44H73.71V42.14z"
                />
                <path
                  id="bD4dErdCb"
                  d="M102.1 35.78c0 8.28-6.72 15-15 15-8.28 0-15-6.72-15-15 0-8.28 6.72-15 15-15 8.28 0 15 6.72 15 15z"
                />
                <path
                  id="dPDVXvcj"
                  d="M115.51 43.47c0 6.9-5.6 12.5-12.5 12.5s-12.5-5.6-12.5-12.5 5.6-12.5 12.5-12.5 12.5 5.6 12.5 12.5z"
                />
                <path
                  id="bb703RMz1"
                  d="M83.58 43.47c0 6.9-5.6 12.5-12.5 12.5s-12.5-5.6-12.5-12.5 5.6-12.5 12.5-12.5 12.5 5.6 12.5 12.5z"
                />
                <text
                  id="a46my5epkU"
                  x="85.36"
                  y="90.2"
                  alignment-baseline="before-edge"
                  dominant-baseline="text-before-edge"
                  font-family="Roboto"
                  font-size="50"
                  font-style="normal"
                  font-weight="400"
                  letter-spacing="0"
                  style="line-height:100%"
                  transform="translate(1.7395 -9.674)"
                  xml:space="preserve"
                >
                  <tspan
                    x="85.36"
                    alignment-baseline="before-edge"
                    dy="0em"
                    text-anchor="middle"
                  >
                    {{ $store.state.recipes.length }}
                  </tspan>
                </text>
              </defs>
              <use fill-opacity="0" stroke="#000" xlink:href="#i1AjRzYIk" />
              <use fill-opacity="0" stroke="#000" xlink:href="#dKUs0NdCU" />
              <use fill="#fff" xlink:href="#a2hVr2OLS2" />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#a2hVr2OLS2"
              />
              <use fill="#fff" xlink:href="#b1O85LvuT5" />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#b1O85LvuT5"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#abUVHM8zY"
              />
              <use id="bwuBOuLpz" fill="#f08c00" xlink:href="#a46my5epkU" />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#a1KxDXTfcg"
              />
              <use fill="#f08c00" xlink:href="#am405ymOS" />
              <use fill="#f08c00" xlink:href="#bD4dErdCb" />
              <g>
                <use fill="#f08c00" xlink:href="#dPDVXvcj" />
              </g>
              <g>
                <use fill="#f08c00" xlink:href="#bb703RMz1" />
              </g>
            </svg>
            <!-- first icon text -->
            <div class="home-stats-icon-text">
              <div v-if="$store.state.recipes.length == 0">
                Nie masz na swojej liście zapisanego żadnego przepisu
              </div>
              <div v-else-if="$store.state.recipes.length == 1">
                Masz na swojej liście zapisany <b>1</b> przepis.
              </div>
              <div
                v-else-if="
                  $store.state.recipes.length > 1 &&
                    $store.state.recipes.length < 5
                "
              >
                Masz na swojej liście zapisane
                <b>{{ $store.state.recipes.length }}</b> przepisy.
              </div>
              <div v-else-if="$store.state.recipes.length >= 5">
                Masz na swojej liście zapisanych
                <b>{{ $store.state.recipes.length }}</b> przepisów.
              </div>
            </div>
          </div>
          <!-- second icon container -->
          <div class="col-4 home-stats-icon-container">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 180 180"
              height="160"
              width="160"
            >
              <defs>
                <path id="a" d="M180 178.25H2V0" />
                <path id="b" d="M13.23 128.25h40v50h-40v-50z" />
                <path id="c" d="M71 78.25h40v100H71v-100z" />
                <path id="d" d="M130.77 28.25h40v150h-40v-150z" />
                <path
                  id="e"
                  d="M74.33 38.99L91 60.5l16.67-21.51H97.1V16.17H84.87v22.82H74.33z"
                />
              </defs>
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#a"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#b"
              />
              <use fill="#f08c00" xlink:href="#c" />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#c"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#d"
              />
              <g>
                <use
                  fill-opacity="0"
                  stroke="#f08c00"
                  stroke-width="4"
                  xlink:href="#e"
                />
              </g>
            </svg>
            <div class="home-stats-icon-text">
              Średnia ilość kalorii na dzień w zeszłym tygodiu wyniosła:
              <b>2137 Kcal</b>
            </div>
          </div>
          <!-- third icon container -->
          <div class="col-4 home-stats-icon-container">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 180 180"
              width="160"
              height="160"
            >
              <defs>
                <path id="c7modpylq" d="M2.17 2h157.66v176H2.17V2z" />
                <path id="dngrkh8oS" d="M73.33 19.56h-56 56z" />
                <path id="fdoizjysW" d="M73.33 33.62h-56 56z" />
                <path id="aeYUbRRVc" d="M40.58 48.43H17.33h23.25z" />
                <path id="ctzjVcXUH" d="M73.33 94.66h-56 56z" />
                <path id="a5NXUY6r3" d="M73.33 108.72h-56 56z" />
                <path id="d8gCVifPTV" d="M54.33 123.54h-37 37z" />
                <path id="d6i4gPYs6" d="M73.33 138.1h-56 56z" />
                <path id="bDHYpQyhG" d="M144.01 94.66h-56 56z" />
                <path id="b1NQSdGFZS" d="M106.68 108.72H88.01h18.67z" />
                <path id="ddWEij27W" d="M144.01 123.54h-56 56z" />
                <path id="h4JzMB4EZ" d="M115.1 138.1H88.01h27.09z" />
                <path id="aFNpA2z4c" d="M144.01 153.29h-56 56z" />
                <path id="g1wpeKs4qz" d="M88.01 17.1h56v56h-56v-56z" />
                <path
                  id="cHRzLCn3F"
                  d="M146.16 66.81l-9.17 79.29-9.09-12.03-14.64 6.57 21.31-70.56 11.59-3.27z"
                />
                <path
                  id="a3Jw4nRqhK"
                  d="M143.38 66.81l9.17 79.29 9.09-12.03 14.64 6.57-21.31-70.56-11.59-3.27z"
                />
                <path
                  id="c42rPqR09"
                  d="M179.01 47.29c0 19.32-15.68 35-35 35-19.31 0-35-15.68-35-35s15.69-35 35-35c19.32 0 35 15.68 35 35z"
                />
                <text
                  id="b5TWg8d3pX"
                  x="138.64"
                  y="21.43"
                  alignment-baseline="before-edge"
                  dominant-baseline="text-before-edge"
                  font-family="Roboto"
                  font-size="40"
                  font-style="normal"
                  font-weight="700"
                  letter-spacing="0"
                  style="line-height:100%"
                  transform="translate(8.091 1.9868)"
                  xml:space="preserve"
                >
                  <tspan
                    x="138.64"
                    alignment-baseline="before-edge"
                    dy="0em"
                    text-anchor="middle"
                  >
                    #1
                  </tspan>
                </text>
              </defs>
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#c7modpylq"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#dngrkh8oS"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#fdoizjysW"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#aeYUbRRVc"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#ctzjVcXUH"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#a5NXUY6r3"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#d8gCVifPTV"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#d6i4gPYs6"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#bDHYpQyhG"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#b1NQSdGFZS"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#ddWEij27W"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#h4JzMB4EZ"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#aFNpA2z4c"
              />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#g1wpeKs4qz"
              />
              <use fill="#fff" xlink:href="#cHRzLCn3F" />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#cHRzLCn3F"
              />
              <use fill="#fff" xlink:href="#a3Jw4nRqhK" />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="4"
                xlink:href="#a3Jw4nRqhK"
              />
              <g>
                <use fill="#f08c00" xlink:href="#c42rPqR09" />
              </g>
              <g id="a1G4aqTSq">
                <use fill="#fff" xlink:href="#b5TWg8d3pX" />
              </g>
            </svg>
            <div class="home-stats-icon-text">
              Twój ulubiony przepis to:
              <b>Puree ziemniaczane z jajkami w sosie musztardowym</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.home {
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
}
.home-header {
  font-size: 50px;
  font-weight: 500;
  margin: 0 0 6rem 0;
  text-align: center;
}
.home-stats {
  display: flex;
  &-icon {
    &-container {
      padding: 0 2rem;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &-text {
      font-size: 25px;
      font-weight: 300;
      color: $lightGrey;
      margin-top: 2rem;
      text-align: center;
    }
  }
}
</style>
