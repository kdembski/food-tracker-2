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
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 202 216"
              width="202"
              height="216"
            >
              <defs>
                <path
                  d="M17.31 0C100.05 0.23 151.76 0.38 172.45 0.43C174.95 0.44 176.97 2.47 176.97 4.97C176.97 47.18 176.97 168.44 176.97 210.43C176.97 213.51 174.48 216 171.41 216C139.7 216 50.6 216 19.01 216C15.01 216 11.1 214.87 7.72 212.73C6.17 211.76 8.21 213.04 7.03 212.3C2.66 209.54 0 204.72 0 199.54C0 160.21 0 56.24 0 18.34C0 9.43 6.44 1.82 15.22 0.35C15.5 0.3 16.2 0.19 17.31 0Z"
                  id="d2tHZcThlf"
                ></path>
                <path
                  d="M169.73 210.35C170.88 210.35 171.81 209.42 171.81 208.27C171.81 204.7 171.81 195.78 171.81 181.51L17.31 181.51C8.72 185.13 4.57 190.28 4.83 196.95C5.07 202.92 8.62 207.16 15.48 209.68C16.69 210.13 17.97 210.35 19.25 210.35C49.76 210.35 139.24 210.35 169.73 210.35Z"
                  id="d1nc7elvCp"
                ></path>
                <path
                  d="M120.36 1.18L194.43 12.91L173.99 141.97L99.92 130.23L120.36 1.18Z"
                  id="b3Xu446mHt"
                ></path>
                <path
                  d="M17.66 73.77L174.01 57.33L187.67 187.28L31.32 203.72L17.66 73.77Z"
                  id="o4L5xMa4e"
                ></path>
                <path
                  d="M25.23 183.29L171.81 183.29L171.81 193.33L25.23 193.33L25.23 183.29Z"
                  id="dbErPB7fx"
                ></path>
                <path
                  d="M70.6 8.94L200.9 41.43L159.85 206.06L29.55 173.57L70.6 8.94Z"
                  id="aNBUoPnNq"
                ></path>
                <path
                  d="M25.23 180.47L171.81 180.47L171.81 186.11L25.23 186.11L25.23 180.47Z"
                  id="ahpzcH6Zj"
                ></path>
                <path
                  d="M17.31 0.05C100.09 0.02 151.84 0.01 172.53 0C175.72 0 178.31 2.58 178.31 5.77C178.31 40.92 178.31 139.55 178.31 174.44C178.31 178.34 175.14 181.51 171.24 181.51C150.71 181.51 99.4 181.51 17.31 181.51L17.31 0.05Z"
                  id="k28Miy0odB"
                ></path>
                <path
                  d="M82.69 38.92L113.34 38.92C113.34 52.91 113.34 61.65 113.34 65.14C113.34 66.59 112.17 67.76 110.72 67.76C105.11 67.76 90.99 67.76 85.4 67.76C83.9 67.76 82.69 66.55 82.69 65.05C82.69 61.57 82.69 52.86 82.69 38.92Z"
                  id="b1lB5MJgtg"
                ></path>
                <path
                  d="M93.58 43.02C93.58 48.41 88.55 52.78 82.36 52.78C76.16 52.78 71.13 48.41 71.13 43.02C71.13 37.63 76.16 33.26 82.36 33.26C88.55 33.26 93.58 37.63 93.58 43.02Z"
                  id="bbUwyOhNh"
                ></path>
                <path
                  d="M109.03 32.18C109.03 37.57 104 41.94 97.81 41.94C91.61 41.94 86.58 37.57 86.58 32.18C86.58 26.79 91.61 22.42 97.81 22.42C104 22.42 109.03 26.79 109.03 32.18Z"
                  id="hnI2zK3LM"
                ></path>
                <path
                  d="M123.45 43.02C123.45 48.41 118.42 52.78 112.23 52.78C106.03 52.78 101 48.41 101 43.02C101 37.63 106.03 33.26 112.23 33.26C118.42 33.26 123.45 37.63 123.45 43.02Z"
                  id="bihOvQUq5"
                ></path>
                <text
                  id="c2EDfZQLRy"
                  x="244.05"
                  y="208.84"
                  font-size="64"
                  font-family="Roboto"
                  font-weight="700"
                  font-style="normal"
                  letter-spacing="3.2"
                  alignment-baseline="before-edge"
                  transform="matrix(1 0 0 1 -146.2451852431403 -111.60177148466215)"
                  style="line-height:100%"
                  xml:space="preserve"
                  dominant-baseline="text-before-edge"
                >
                  <tspan
                    x="244.05"
                    dy="0em"
                    alignment-baseline="before-edge"
                    dominant-baseline="text-before-edge"
                    text-anchor="middle"
                  >
                    {{ $store.state.recipes.length }}
                  </tspan>
                </text>
                <path
                  d="M38.34 87.75L157.27 87.75L157.27 90.75L38.34 90.75L38.34 87.75Z"
                  id="m5bdVzKGeh"
                ></path>
                <path
                  d="M6.01 44.5C2.57 47.38 0.57 51.67 0 57.36L0 63.05C1.24 57.45 3.63 53.38 7.18 50.84C10.73 48.3 14.11 47.07 17.31 47.15L17.31 39.83C13.22 40.06 9.45 41.62 6.01 44.5Z"
                  id="b1WXZgfyji"
                ></path>
                <path
                  d="M6.01 62C2.57 64.88 0.57 69.17 0 74.86L0 80.55C1.24 74.95 3.63 70.88 7.18 68.34C10.73 65.8 14.11 64.57 17.31 64.65L17.31 57.33C13.22 57.56 9.45 59.12 6.01 62Z"
                  id="bCmfMaDjU"
                ></path>
              </defs>
              <g>
                <g>
                  <g>
                    <use
                      xlink:href="#d2tHZcThlf"
                      opacity="1"
                      fill="#f9ad00"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#d1nc7elvCp"
                      opacity="1"
                      fill="#fafafa"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#b3Xu446mHt"
                      opacity="1"
                      fill="#f3f3f3"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#o4L5xMa4e"
                      opacity="1"
                      fill="#dbdbdb"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#dbErPB7fx"
                      opacity="1"
                      fill="#fafafa"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#aNBUoPnNq"
                      opacity="1"
                      fill="#ffe399"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#ahpzcH6Zj"
                      opacity="1"
                      fill="#fafafa"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#k28Miy0odB"
                      opacity="1"
                      fill="#f08c00"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#b1lB5MJgtg"
                      opacity="1"
                      fill="#ffffff"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#bbUwyOhNh"
                      opacity="1"
                      fill="#ffffff"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#hnI2zK3LM"
                      opacity="1"
                      fill="#ffffff"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#bihOvQUq5"
                      opacity="1"
                      fill="#ffffff"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g id="a1Wokl7qen">
                    <use
                      xlink:href="#c2EDfZQLRy"
                      opacity="1"
                      fill="#ffffff"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#m5bdVzKGeh"
                      opacity="1"
                      fill="#f5f4f4"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#b1WXZgfyji"
                      opacity="1"
                      fill="#ffffff"
                      fill-opacity="1"
                    ></use>
                  </g>
                  <g>
                    <use
                      xlink:href="#bCmfMaDjU"
                      opacity="1"
                      fill="#ffffff"
                      fill-opacity="1"
                    ></use>
                  </g>
                </g>
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
              viewBox="0 0 200 215"
              width="220"
              height="240"
              style="margin-top: -20px"
            >
              <defs>
                <path
                  id="a"
                  d="M200 104.89c0 45-35.62 81.53-79.49 81.53s-79.49-36.53-79.49-81.53 35.62-81.54 79.49-81.54S200 59.89 200 104.89z"
                />
                <path
                  id="b"
                  d="M42.38 166.09L200 164.61 168.75 207H0l42.38-40.91z"
                />
                <path id="c" d="M0 207h168.75v8H0v-8z" />
                <path
                  id="d"
                  d="M168.75 207L200 164.61v7.3c0 .68-.22 1.35-.63 1.9-4.08 5.49-14.29 19.22-30.62 41.19v-8z"
                />
                <path
                  id="e"
                  d="M72.12 193.61c0 4.95-11.2 8.97-25 8.97s-25-4.02-25-8.97c0-4.95 11.2-8.96 25-8.96s25 4.01 25 8.96z"
                />
                <path
                  id="f"
                  d="M64.29 143c1.56 0 2.83 1.27 2.83 2.84v46.81h-40v-47.22c0-1.34 1.09-2.43 2.43-2.43h34.74z"
                />
                <path
                  id="g"
                  d="M67.12 145.16c0 3.3-8.96 5.97-20 5.97s-20-2.67-20-5.97c0-3.29 8.96-5.96 20-5.96s20 2.67 20 5.96z"
                />
                <path
                  id="h"
                  d="M67.12 192.65c0 3.29-8.96 5.97-20 5.97s-20-2.68-20-5.97c0-3.29 8.96-5.97 20-5.97s20 2.68 20 5.97z"
                />
                <path
                  id="i"
                  d="M128.45 184.99c0 4.95-11.2 8.97-25 8.97-13.79 0-25-4.02-25-8.97 0-4.95 11.21-8.96 25-8.96 13.8 0 25 4.01 25 8.96z"
                />
                <path
                  id="j"
                  d="M120.62 84.03c1.56 0 2.83 1.27 2.83 2.83v97.17h-40V86.46c0-1.34 1.09-2.43 2.43-2.43h34.74z"
                />
                <path
                  id="k"
                  d="M123.45 85.71c0 3.3-8.96 5.97-20 5.97-11.03 0-20-2.67-20-5.97 0-3.29 8.97-5.96 20-5.96 11.04 0 20 2.67 20 5.96z"
                />
                <path
                  id="l"
                  d="M123.45 184.03c0 3.29-8.96 5.97-20 5.97-11.03 0-20-2.68-20-5.97 0-3.29 8.97-5.97 20-5.97 11.04 0 20 2.68 20 5.97z"
                />
                <path
                  id="m"
                  d="M184.37 176.03c0 4.95-11.2 8.96-25 8.96-13.79 0-25-4.01-25-8.96 0-4.95 11.21-8.97 25-8.97 13.8 0 25 4.02 25 8.97z"
                />
                <path
                  id="n"
                  d="M176.54 25.06c1.57 0 2.83 1.27 2.83 2.84v147.16h-40V27.49c0-1.34 1.09-2.43 2.44-2.43h34.73z"
                />
                <path
                  id="o"
                  d="M179.37 26.91c0 3.3-8.96 5.97-20 5.97-11.03 0-20-2.67-20-5.97 0-3.29 8.97-5.96 20-5.96 11.04 0 20 2.67 20 5.96z"
                />
                <path
                  id="p"
                  d="M179.37 175.06c0 3.3-8.96 5.97-20 5.97-11.03 0-20-2.67-20-5.97 0-3.29 8.97-5.96 20-5.96 11.04 0 20 2.67 20 5.96z"
                />
                <path
                  id="q"
                  d="M83.84 30.95l-2.51 3.66 26.01 18.79 16.4-18.78 1.9-3.67h-13.63L112 5.65H96.79l-2.06 3.19 4.81 22.11h-15.7z"
                />
                <path
                  id="r"
                  d="M81.33 34.58l21.19 24.26 21.2-24.26h-13.44V8.84H94.73v25.74h-13.4z"
                />
                <path id="s" d="M110.29 8.84l1.72-3.19v25.3l-1.72 3.6V8.84z" />
              </defs>
              <use fill="#f5f5f5" xlink:href="#a" />
              <use fill="#e3e3e3" xlink:href="#b" />
              <use fill="#989898" xlink:href="#c" />
              <use fill="silver" xlink:href="#d" />
              <use fill="#d8d8d8" xlink:href="#e" />
              <use fill="#ffd598" xlink:href="#f" />
              <use fill="#ffeacc" xlink:href="#g" />
              <use fill="#ffd598" xlink:href="#h" />
              <use fill="#d8d8d8" xlink:href="#i" />
              <use fill="#f08c00" xlink:href="#j" />
              <use fill="#f6ad46" xlink:href="#k" />
              <use fill="#f08c00" xlink:href="#l" />
              <use fill="#d8d8d8" xlink:href="#m" />
              <use fill="#ffd598" xlink:href="#n" />
              <use fill="#ffeacc" xlink:href="#o" />
              <use fill="#ffd598" xlink:href="#p" />
              <use fill="#f6ad46" xlink:href="#q" />
              <use fill="#f08c00" xlink:href="#r" />
              <use fill="#f6ce95" xlink:href="#s" />
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
              viewBox="0 0 200 215"
              width="200"
              height="215"
            >
              <defs>
                <path
                  id="bx1kduQjN"
                  d="M5.38-1.65l170.89 5.97-7.11 203.54-170.89-5.97L5.38-1.65z"
                />
                <path
                  id="d99pDbrpLx"
                  d="M82.11 33.58c1.47.05 2.62 1.28 2.57 2.76-.02.53.02-.54 0 0-.05 1.47-1.29 2.62-2.76 2.57-13.12-.46-49.83-1.74-62.96-2.2-1.47-.05-2.62-1.29-2.57-2.76.02-.53-.02.53 0 0 .05-1.47 1.29-2.62 2.76-2.57 13.12.46 49.83 1.74 62.96 2.2z"
                />
                <path
                  id="ckApcKGF"
                  d="M82.59 19.69c1.48.05 2.63 1.29 2.58 2.76-.02.53.01-.53 0 0-.06 1.47-1.29 2.62-2.76 2.57-13.13-.46-49.84-1.74-62.96-2.2-1.48-.05-2.63-1.28-2.58-2.76.02-.53-.01.54 0 0 .06-1.47 1.29-2.62 2.76-2.57 13.13.46 49.84 1.74 62.96 2.2z"
                />
                <path
                  id="b1rNWnWwNV"
                  d="M94.76 74.8l2.15-61.63 68.3 2.39-2.16 61.63-68.29-2.39zm8.81-7.4l13.21-11.11 8.4 4.15 13.34-14.96 16.36 21.14 1.52-43.66-51.22-1.79-1.61 46.23zm16.86-36.99l.3.04.3.04.29.06.29.07.28.08.28.09.27.1.27.1.26.12.25.13.25.13.25.14.23.15.23.16.23.16.21.18.21.18.2.18.19.2.19.2.17.2.17.21.16.22.15.22.14.23.13.24.12.24.11.24.1.25.08.25.08.26.07.26.06.26.04.27.03.27.03.27v.55l-.01.28-.03.28-.04.27-.05.26-.07.27-.07.26-.09.25-.09.25-.11.25-.12.24-.12.23-.14.23-.15.23-.15.22-.17.21-.17.21-.18.2-.19.19-.2.19-.2.17-.22.18-.22.16-.22.16-.24.15-.24.14-.24.13-.26.13-.25.11-.27.11-.27.1-.27.08-.28.08-.28.07-.29.06-.29.05-.3.04-.3.03-.3.01-.31.01-.3-.01-.31-.01-.31-.03-.3-.04-.29-.05-.29-.05-.29-.07-.28-.08-.28-.09-.28-.1-.26-.11-.26-.11-.26-.13-.25-.13-.24-.14-.24-.15-.23-.16-.22-.17-.22-.17-.21-.18-.2-.18-.19-.2-.18-.2-.18-.2-.17-.22-.15-.21-.15-.23-.14-.23-.13-.23-.12-.24-.11-.24-.1-.25-.09-.25-.08-.26-.07-.26-.05-.26-.05-.27-.03-.27-.02-.27-.01-.28v-.28l.02-.27.03-.28.04-.27.05-.27.06-.26.08-.26.08-.25.1-.25.1-.25.12-.24.13-.24.13-.23.15-.22.16-.22.16-.21.17-.21.18-.2.19-.19.2-.19.21-.18.21-.17.22-.16.23-.16.23-.15.24-.14.25-.13.25-.13.26-.11.26-.11.27-.1.28-.09.27-.08.29-.06.29-.06.29-.05.29-.04.3-.03.3-.02h.62l.3.02.31.03z"
                />
                <path
                  id="b2vTiNMUj"
                  d="M78.92 125c1.47.05 2.62 1.28 2.57 2.76-.02.53.02-.54 0 0-.05 1.47-1.29 2.62-2.76 2.57-13.12-.46-49.84-1.74-62.96-2.2-1.47-.05-2.62-1.29-2.57-2.76.02-.53-.02.54 0 0 .05-1.47 1.28-2.62 2.75-2.57 13.13.46 49.84 1.74 62.97 2.2z"
                />
                <path
                  id="cB9a1kEib"
                  d="M77.93 153.34c1.47.05 2.62 1.29 2.57 2.76-.02.53.02-.53 0 0-.05 1.47-1.29 2.62-2.76 2.57-13.12-.46-49.84-1.74-62.96-2.2-1.47-.05-2.62-1.28-2.57-2.76.02-.53-.02.54 0 0 .05-1.47 1.28-2.62 2.76-2.57 13.12.46 49.83 1.74 62.96 2.2z"
                />
                <path
                  id="c1eiODeByw"
                  d="M78.41 139.38c1.48.05 2.63 1.28 2.58 2.75-.02.54.02-.53 0 0-.05 1.48-1.29 2.63-2.76 2.58-13.13-.46-49.84-1.74-62.96-2.2-1.48-.05-2.63-1.29-2.58-2.76.02-.53-.01.53 0 0 .06-1.47 1.29-2.62 2.76-2.57 13.13.46 49.84 1.74 62.96 2.2z"
                />
                <path
                  id="d4xcfwMzDA"
                  d="M79.89 97.09c1.47.06 2.62 1.29 2.57 2.76-.02.53.02-.53 0 0-.05 1.47-1.28 2.63-2.76 2.57-13.12-.45-49.83-1.74-62.96-2.19-1.47-.06-2.62-1.29-2.57-2.76.02-.54-.02.53 0 0 .05-1.47 1.29-2.63 2.76-2.57 13.12.45 49.84 1.74 62.96 2.19z"
                />
                <path
                  id="a2a28PmaYM"
                  d="M159.11 113.76c1.47.06 2.62 1.29 2.57 2.76-.02.54.02-.53 0 0-.05 1.47-1.29 2.63-2.76 2.57-13.12-.45-49.83-1.74-62.96-2.19-1.47-.06-2.62-1.29-2.57-2.76.02-.54-.02.53 0 0 .05-1.47 1.28-2.63 2.76-2.57 13.12.45 49.83 1.74 62.96 2.19z"
                />
                <path
                  id="a5i2CwthbM"
                  d="M157.63 156.12c1.47.06 2.62 1.29 2.57 2.76-.02.54.02-.53 0 0-.05 1.47-1.29 2.63-2.76 2.57-13.12-.45-49.83-1.74-62.96-2.19-1.47-.06-2.62-1.29-2.57-2.76.02-.54-.02.53 0 0 .05-1.47 1.28-2.63 2.76-2.57 13.12.45 49.83 1.74 62.96 2.19z"
                />
                <path
                  id="alQM2BWSW"
                  d="M158.12 142.16c1.47.05 2.62 1.28 2.57 2.76-.02.53.02-.54 0 0-.05 1.47-1.29 2.62-2.76 2.57-13.13-.46-49.84-1.74-62.96-2.2-1.47-.05-2.63-1.29-2.57-2.76.01-.53-.02.53 0 0 .05-1.47 1.28-2.62 2.75-2.57 13.13.46 49.84 1.74 62.97 2.2z"
                />
                <path
                  id="a546oMzHjk"
                  d="M159.59 99.88c1.47.05 2.63 1.28 2.57 2.76-.01.53.02-.54 0 0-.05 1.47-1.28 2.62-2.75 2.57-13.13-.46-49.84-1.74-62.97-2.2-1.47-.05-2.62-1.29-2.57-2.76.02-.53-.02.53 0 0 .05-1.47 1.29-2.62 2.76-2.57 13.13.46 49.84 1.74 62.96 2.2z"
                />
                <path
                  id="a4nmHlTvNV"
                  d="M156.63 184.8c1.47.05 2.62 1.29 2.57 2.76-.02.53.02-.54 0 0-.05 1.47-1.29 2.62-2.76 2.57-13.12-.46-49.84-1.74-62.96-2.2-1.47-.05-2.62-1.29-2.57-2.76.02-.53-.02.54 0 0 .05-1.47 1.28-2.62 2.76-2.57 13.12.46 49.83 1.74 62.96 2.2z"
                />
                <path
                  id="a1wOnMdQzj"
                  d="M47.99 45.98c1.47.05 2.62 1.29 2.57 2.76-.02.53.02-.53 0 0-.05 1.47-1.29 2.62-2.76 2.57-6.39-.22-22.92-.8-29.31-1.02-1.47-.05-2.63-1.29-2.57-2.76.01-.53-.02.53 0 0 .05-1.47 1.28-2.62 2.75-2.57 6.4.22 22.92.8 29.32 1.02z"
                />
                <path
                  id="e4Q567FOA"
                  d="M45.76 109.81c1.47.05 2.62 1.28 2.57 2.75-.02.54.02-.53 0 0-.05 1.48-1.28 2.63-2.76 2.58-6.39-.23-22.92-.8-29.31-1.03-1.47-.05-2.63-1.28-2.57-2.76.01-.53-.02.54 0 0 .05-1.47 1.28-2.62 2.75-2.57 6.4.23 22.92.8 29.32 1.03z"
                />
                <path
                  id="a1Jsz821Rg"
                  d="M124.97 126.61c1.47.05 2.63 1.28 2.57 2.76-.01.53.02-.54 0 0-.05 1.47-1.28 2.62-2.75 2.57-6.4-.23-22.92-.8-29.32-1.03-1.47-.05-2.62-1.28-2.57-2.75.02-.54-.02.53 0 0 .05-1.48 1.28-2.63 2.76-2.58 6.39.23 22.92.8 29.31 1.03z"
                />
                <path
                  id="a1JjFUXajU"
                  d="M123.46 169.77c1.48.05 2.63 1.28 2.58 2.76-.02.53.02-.54 0 0-.05 1.47-1.29 2.62-2.76 2.57-6.4-.23-22.92-.8-29.32-1.03-1.47-.05-2.62-1.28-2.57-2.75.02-.54-.02.53 0 0 .05-1.48 1.29-2.63 2.76-2.58 6.4.23 22.92.8 29.31 1.03z"
                />
                <path
                  id="fcPKD6bUu"
                  d="M161.83 97.66c3.08 15.48 7.3 30.83 12.65 46.06 5.34 15.23 11.82 30.34 19.43 45.32l-16.35-4.25-14.99 18.84c-3.89-16.46-6.49-32.7-7.79-48.72-1.3-16.03-1.3-32.28 0-48.76-2.35 16.89-5.08 32.49-8.19 46.8-3.11 14.3-7.15 28.21-12.13 41.7l-10.69-18.36-16.39 2.85c5.69-8.53 12.02-19.77 18.97-33.71 6.96-13.95 12.76-29.15 17.4-45.63l18.08-2.14z"
                />
                <path
                  id="cEtDfwFt"
                  d="M192.94 73.34c-.39 22.75-19.44 40.89-42.5 40.49-23.06-.4-41.46-19.2-41.07-41.95.4-22.75 19.45-40.9 42.51-40.5 23.06.41 41.46 19.2 41.06 41.96z"
                />
                <text
                  id="bI3VGJTj4"
                  x="127.24"
                  y="17.04"
                  alignment-baseline="before-edge"
                  dominant-baseline="text-before-edge"
                  font-family="Roboto"
                  font-size="44"
                  font-style="normal"
                  font-weight="700"
                  letter-spacing="0"
                  style="line-height:100%"
                  transform="rotate(1.1592 -1351.3335 85.4106)"
                  xml:space="preserve"
                >
                  <tspan x="127.24" alignment-baseline="before-edge" dy="0em">
                    #1
                  </tspan>
                </text>
              </defs>
              <filter
                id="shadow4522437"
                width="203"
                height="234.51"
                x="-11.73"
                y="-11.65"
                filterUnits="userSpaceOnUse"
                primitiveUnits="userSpaceOnUse"
              >
                <feFlood />
                <feComposite in2="SourceAlpha" operator="in" />
                <feGaussianBlur />
                <feOffset dx="5" dy="5" result="afterOffset" />
                <feFlood flood-color="#d7d7d7" flood-opacity="1" />
                <feComposite in2="afterOffset" operator="in" />
                <feMorphology operator="dilate" />
                <feComposite in2="SourceAlpha" operator="out" />
              </filter>
              <path
                id="c1nPBMrGmo"
                fill="#fff"
                fill-opacity="1"
                d="M5.38-1.65l170.89 5.97-7.11 203.54-170.89-5.97L5.38-1.65z"
                filter="url(#shadow4522437)"
              />
              <use fill="#f6f6f6" xlink:href="#bx1kduQjN" />
              <use fill="#d7d7d7" xlink:href="#d99pDbrpLx" />
              <use fill="#d7d7d7" xlink:href="#ckApcKGF" />
              <use fill="#d7d7d7" xlink:href="#b1rNWnWwNV" />
              <use fill="#d7d7d7" xlink:href="#b2vTiNMUj" />
              <use fill="#d7d7d7" xlink:href="#cB9a1kEib" />
              <use fill="#d7d7d7" xlink:href="#c1eiODeByw" />
              <use fill="#d7d7d7" xlink:href="#d4xcfwMzDA" />
              <use fill="#d7d7d7" xlink:href="#a2a28PmaYM" />
              <use fill="#d7d7d7" xlink:href="#a5i2CwthbM" />
              <use fill="#d7d7d7" xlink:href="#alQM2BWSW" />
              <use fill="#d7d7d7" xlink:href="#a546oMzHjk" />
              <use fill="#d7d7d7" xlink:href="#a4nmHlTvNV" />
              <use fill="#d7d7d7" xlink:href="#a1wOnMdQzj" />
              <use fill="#d7d7d7" xlink:href="#e4Q567FOA" />
              <use fill="#d7d7d7" xlink:href="#a1Jsz821Rg" />
              <use fill="#d7d7d7" xlink:href="#a1JjFUXajU" />
              <use fill="#fff" xlink:href="#fcPKD6bUu" />
              <use
                fill-opacity="0"
                stroke="#f08c00"
                stroke-width="6"
                xlink:href="#fcPKD6bUu"
              />
              <g>
                <use fill="#f08c00" xlink:href="#cEtDfwFt" />
                <use
                  fill-opacity="0"
                  stroke="#f9ad00"
                  stroke-width="3"
                  xlink:href="#cEtDfwFt"
                />
              </g>
              <g id="a1EuwhIJzo">
                <filter
                  id="shadow5100286"
                  width="66.11"
                  height="64.07"
                  x="121.24"
                  y="11.04"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="1" dy="1" result="afterOffset" />
                  <feFlood flood-color="#000" flood-opacity=".5" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <text
                  id="b6nncUVARk"
                  x="127.24"
                  y="17.04"
                  fill="#fff"
                  fill-opacity="1"
                  alignment-baseline="before-edge"
                  dominant-baseline="text-before-edge"
                  filter="url(#shadow5100286)"
                  font-family="Roboto"
                  font-size="44"
                  font-style="normal"
                  font-weight="700"
                  letter-spacing="0"
                  style="line-height:100%"
                  transform="rotate(1.1592 -1351.3335 85.4106)"
                  xml:space="preserve"
                >
                  <tspan x="127.24" alignment-baseline="before-edge" dy="0em">
                    #1
                  </tspan>
                </text>
                <use fill="#fff" xlink:href="#bI3VGJTj4" />
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
      opacity: 0;
      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          animation: slide-up 0.6s 0.2s * $i ease-out forwards;
        }
      }
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
