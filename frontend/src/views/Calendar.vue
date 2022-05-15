<template>
  <div class="calendar">
    <div class="main-container">
      <!-- calendar -->
      <div class="calendar-container">
        <!-- calendar first column -->
        <div class="calendar-column">
          <div class="calendar-column-date"></div>
          <div class="calendar-row-icon">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 200 200"
              v-tooltip="{
                content: 'Śniadanie',
                delay: { show: 200, hide: 100 },
              }"
            >
              <defs>
                <path
                  id="a"
                  d="M122.27 136.61c-2.25 6.83-6.17 12.33-11.75 16.5-8.38 6.25-17.56 6-31.75 6.25-14.19.25-18.75-1-26.25-5.5-5-3-8.92-8.75-11.75-17.25-14.25 3.92-23.75 1.75-28.5-6.5-7.13-12.38-7.13-32.56 0-43 4.75-6.96 14-8.38 27.75-4.25v-6.55c0-2.74 2.21-4.95 4.95-4.95h73.06c2.34 0 4.24 1.9 4.24 4.24v61.01z"
                />
                <path
                  id="b"
                  d="M25.56 94.54c-4.88 3.06-5.19 6.93-5 15 .19 8.06 1.12 12.68 5.75 15 3.08 1.54 7.67.95 13.75-1.75v-26.5c-6.42-3.21-11.25-3.8-14.5-1.75z"
                />
                <path
                  id="c"
                  d="M96.77 101.55c4.04-2.33 9.62 1.44 16.75 11.31l-15.25 11c-5.04-12.54-5.54-19.97-1.5-22.31z"
                />
                <path
                  id="d"
                  d="M118.02 111.86c-5.63.31-20.37 11.2-20.75 16-.12 1.51 1.59 4.53 5.13 9.07 4.67 5.99 10.73 10.77 17.64 13.93 1.1.5 3.84 1.75 8.23 3.75-.68-4.98-1.1-8.09-1.27-9.33-1.07-7.87-.69-15.87 1.13-23.6.16-.64.53-2.24 1.14-4.81-3.75-3.55-7.5-5.22-11.25-5.01z"
                />
                <path
                  id="e"
                  d="M131.02 158.86c2.09 1.31 8.6 1.21 19.53-.3 8.03-1.12 15.66-4.16 22.26-8.88 6.98-4.99 10.63-8.93 10.96-11.82.36-3.14-1.85-8.2-6.63-15.17-3.89-5.68-8.61-10.74-14-15.02-5.6-4.45-9.56-6.49-11.87-6.12-6.19 1-14.31 4.39-18.25 7.81-1.68 1.46-3.46 6.49-5.34 15.1-1.27 5.81-1.67 11.78-1.19 17.71.77 9.71 2.28 15.28 4.53 16.69z"
                />
                <path
                  id="f"
                  d="M159.03 104.43c2.9 2.37 4.72 3.84 5.44 4.43 6.3 5.13 11.51 11.46 15.31 18.64.4.76 1.41 2.67 3.03 5.73 2.19-4.42 3.56-7.18 4.1-8.29 3.69-7.43 5.51-15.65 5.32-23.95-.13-5.31-.61-8.27-1.46-8.9-.31-.22-.92-.4-1.84-.52-7.05-.97-14.22-.65-21.16.92l-.75.17c-1.89.43-3.47 1.72-4.26 3.49-.5 1.11-1.75 3.87-3.73 8.28z"
                />
                <path
                  id="g"
                  d="M187.52 91.02c-3.84-13.36-7.8-19.91-11.89-19.66-4.08.25-6.2 7-6.36 20.25l18.25-.59z"
                />
                <path
                  id="h"
                  d="M59.52 57.36c-1.56-1.69-1.38-5.44 1-8 2.37-2.56 4.5-5.25 4.75-9.25s-2.13-6-4.75-9.75c-2.63-3.75-2.06-6.38-1-8.25"
                />
                <path
                  id="i"
                  d="M78.64 57.36c-1.56-1.69-1.37-5.44 1-8 2.38-2.56 4.5-5.25 4.75-9.25s-2.12-6-4.75-9.75c-2.62-3.75-2.06-6.38-1-8.25"
                />
                <path
                  id="j"
                  d="M97.62 57.36c-1.56-1.69-1.37-5.44 1-8 2.38-2.56 4.5-5.25 4.75-9.25s-2.12-6-4.75-9.75c-2.62-3.75-2.06-6.38-1-8.25"
                />
                <path
                  id="k"
                  d="M179.51 179.61c6.75 0 12.34-5.25 12.76-11.98.1-1.58-.07 1.22.1-1.47.22-3.46-2.53-6.39-6-6.39H26.74c-3.75 0-6.69 3.21-6.36 6.95.23 2.57.02.2.18 1.99.54 6.17 5.71 10.9 11.9 10.9h147.05z"
                />
              </defs>
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#a"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#b"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#c"
              />
              <use fill="#fff" xlink:href="#d" />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#d"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#e"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#f"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#g"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#h"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#i"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#j"
              />
              <g>
                <use
                  fill-opacity="0"
                  stroke="#969696"
                  stroke-width="5"
                  xlink:href="#k"
                />
              </g>
            </svg>
          </div>
          <div class="calendar-row-icon">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 200 200"
              v-tooltip="{
                content: 'Obiad',
                delay: { show: 200, hide: 100 },
              }"
            >
              <defs>
                <path
                  id="b3oEayL8jf"
                  d="M155 100c0 30.36-24.64 55-55 55s-55-24.64-55-55 24.64-55 55-55 55 24.64 55 55z"
                />
                <path
                  id="a4E084FJRK"
                  d="M72.32 31.01v30.42-30.42h13v30.42-30.42h12.66v32c-.27 5.56-1.89 9.89-4.83 13-1.74 1.84-3.22 3.22-4.46 4.14-2.11 1.58-3.31 4.1-3.21 6.74 1.32 35.2 2.28 56.13 2.87 62.81.95 10.69-2.1 15.53-9.03 15.23-6.94-.31-9.4-5.94-8.42-16.53.61-6.63 1.38-27.2 2.31-61.72.07-2.48-1.18-4.82-3.28-6.15-1.86-1.18-3.48-2.69-4.86-4.52-2.23-2.94-3.59-7.28-4.09-13v-32h11.34z"
                />
                <path
                  id="ghTQbG8si"
                  d="M114.96 106.61c.02.98.82 1.76 1.81 1.76h7.07c.75 0 1.34.66 1.27 1.41-.55 5.41-1.92 18.94-4.11 40.59-.79 9.42 2.04 14.28 8.5 14.57 6.46.29 9.54-4.31 9.25-13.82V54.76l-.09-7.77c-.3-12.44-4.43-17.26-12.41-14.48-4.47 1.56-7.42 6.25-8.87 14.06-2.25 12.17-3.24 24.54-2.95 36.92.11 4.97.34 14.77.53 23.12z"
                />
                <path
                  id="b33BRUVLc"
                  d="M187.5 100c0 48.29-39.21 87.5-87.5 87.5S12.5 148.29 12.5 100 51.71 12.5 100 12.5s87.5 39.21 87.5 87.5z"
                />
                <path
                  id="b3xnGheFzB"
                  d="M26 94.12c.63-7.87 1.96-14.54 4-20 2.04-5.45 5.04-11.12 9-17"
                />
                <path
                  id="b6Y9i1VN3V"
                  d="M174.13 104.75c-.63 7.87-1.96 14.54-4 20-2.05 5.46-5.05 11.12-9 17"
                />
              </defs>
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#b3oEayL8jf"
              />
              <use fill="#fff" xlink:href="#a4E084FJRK" />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#a4E084FJRK"
              />
              <use fill="#fff" xlink:href="#ghTQbG8si" />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#ghTQbG8si"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#b33BRUVLc"
              />
              <g>
                <use
                  fill-opacity="0"
                  stroke="#969696"
                  stroke-width="5"
                  xlink:href="#b3xnGheFzB"
                />
              </g>
              <g>
                <use
                  fill-opacity="0"
                  stroke="#969696"
                  stroke-width="5"
                  xlink:href="#b6Y9i1VN3V"
                />
              </g>
            </svg>
          </div>
          <div class="calendar-row-icon">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 200 200"
              v-tooltip="{
                content: 'Przekąska',
                delay: { show: 200, hide: 100 },
              }"
            >
              <defs>
                <path
                  id="cewbYlmWV"
                  d="M22.99 133.97c1.9.64 3.25 2.34 3.45 4.34.1 1.01.17 1.72.3 2.98.12 1.17 1.1 2.07 2.29 2.07h6.34c.76 0 1.36.64 1.29 1.4-.12 1.55-.35 4.35-.47 5.78-.09 1.07.76 1.98 1.83 1.98h7.48c.15 0 .27.13.26.28-.15 1.8-.4 4.85-.5 6.13-.12 1.53 1.08 2.84 2.62 2.84h5.35c1.12 0 1.97 1.01 1.79 2.11-.23 1.43-.56 3.43-.78 4.82-.2 1.22.74 2.32 1.98 2.32h5.6c1.48 0 2.63 1.31 2.44 2.78-.16 1.29-.16 1.25-.28 2.25-.28 2.24 1.46 4.22 3.72 4.22h2.96c1.14 0 2.03.98 1.93 2.12-.11 1.22-.23 2.45-.33 3.59-.14 1.59.53 3.13 1.79 4.1.76.59.74.58 1.44 1.11 1.37 1.06 3.3.97 4.57-.21 1.46-1.36 5.12-4.76 10.97-10.21-9.35-11.22-19.43-22.25-30.25-33.08-10.82-10.83-22.38-21.47-34.67-31.92-6.31 6.99-10.25 11.35-11.83 13.1-.71.78-.38 2.03.62 2.37 2.24.76 6.05 2.04 8.09 2.73z"
                />
                <path
                  id="a8o5GInhB"
                  d="M60.6 147.44c10.88 10.86 21.02 22.03 30.43 33.5 11.4-8.86 22.42-18.53 33.07-29 10.66-10.47 20.93-21.75 30.84-33.83-11.11-8.92-22.17-18.75-33.17-29.5s-21.94-22.42-32.83-35c-11.81 9.08-22.97 18.8-33.5 29.16-10.53 10.37-20.42 21.37-29.67 33 12.35 10.25 23.96 20.81 34.83 31.67z"
                />
                <path
                  id="beI6Jdnqs"
                  d="M106.07 60.77l27.75 25.25c3.59-20.7 1.25-35.29-7-43.75-8.25-8.45-15.16-2.29-20.75 18.5z"
                />
                <path
                  id="a1GbAedRj"
                  d="M129.07 89.52c33.09 5.34 51.84 6.09 56.25 2.25 6.63-5.75-1.4-27.93-20.89-31-13-2.04-25.37 5.55-37.1 22.75l1.74 6z"
                />
                <path
                  id="a3yLs0gNeW"
                  d="M121.42 88.42c11.2 10.72 22.37 20.73 33.52 30.02 5.65-6.49 9.18-10.54 10.59-12.16.51-.58.53-1.45.05-2.05-.67-.85-1.4-1.77-1.95-2.48-.88-1.1-2.21-1.75-3.63-1.75h-4c-1.39 0-2.48-1.2-2.35-2.58.12-1.23.14-1.4.23-2.39.19-1.98-1.42-3.66-3.4-3.55-1.05.06-2.5.14-4.06.23-.64.03-1.18-.47-1.18-1.11v-6.33c0-1.52-1.43-2.65-2.92-2.29-1.48.36-3.69.89-5.34 1.29-1.04.25-2.02-.56-1.97-1.62.08-1.68.24-5.15.33-6.96.04-.77-.58-1.42-1.35-1.42h-8.68c-.13 0-.23-.1-.22-.23.17-1.82.53-5.92.67-7.46.08-.86-.63-1.6-1.5-1.55-1.5.08-4.93.27-6.58.36-.5.03-.92-.39-.9-.89.06-1.58.15-4.05.2-5.29.05-1.52-.96-2.86-2.43-3.22-1.13-.28-2.48-.61-3.73-.91-1.21-.3-2.22-1.12-2.75-2.25-1-2.11-3.58-7.57-4.69-9.9-.15-.33-.58-.42-.85-.18-1.84 1.58-6.44 5.53-13.79 11.86 10.59 12.48 21.48 24.09 32.68 34.81z"
                />
                <path
                  id="b3JfmuFrZu"
                  d="M179.07 46.02c12.25-10.18 5.13-39.25-5.25-38.5-4.42.32-9.09 6.06-17.84 15.99-8.75 9.94-23.18 15.32-15.91 24.51 7.28 9.19 26.75 8.19 39-2z"
                />
                <path
                  id="cINTkN2Qo"
                  d="M82.81 133.87c13.01 1.74 25.55-18.69 19.06-24.54-2.76-2.5-8.78-2.14-19.6-1.91-10.81.23-22.33-5.51-23.36 3.99-1.04 9.5 10.9 20.71 23.9 22.46z"
                />
                <path
                  id="j35XHRYI3f"
                  d="M82.41 118.24c2.39-12.9 25.71-18.46 29.25-10.47 1.51 3.41-.7 9.01-4.29 19.22-3.59 10.21-1.73 22.93-11.08 20.96-9.34-1.97-16.27-16.81-13.88-29.71z"
                />
              </defs>
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#cewbYlmWV"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#a8o5GInhB"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#beI6Jdnqs"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#a1GbAedRj"
              />
              <use fill="#fff" xlink:href="#a3yLs0gNeW" />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#a3yLs0gNeW"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#b3JfmuFrZu"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#cINTkN2Qo"
              />
              <g>
                <use fill="#fff" xlink:href="#j35XHRYI3f" />
                <use
                  fill-opacity="0"
                  stroke="#969696"
                  stroke-width="5"
                  xlink:href="#j35XHRYI3f"
                />
              </g>
            </svg>
          </div>
          <div class="calendar-row-icon">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 200 200"
              v-tooltip="{
                content: 'Kolacja',
                delay: { show: 200, hide: 100 },
              }"
            >
              <defs>
                <path
                  id="a4neNfQPbg"
                  d="M31.79 32.36c1.9 3.6 2.85 6.58 2.1 9.94-.75 3.35-3.82 6-8 6-4.19 0-8.5-3.94-8-9.25.27-2.88 2.33-7.47 6.17-13.77.84-1.36 2.82-1.36 3.65 0 1.72 2.82 3.08 5.18 4.08 7.08z"
                />
                <path
                  id="aojPVjcz"
                  d="M26 57.05h7.13c.97 0 1.76.79 1.76 1.76v57.24h6.75c-.17 11.08-1.17 17.83-3 20.25-1.84 2.41-4.5 4.16-8 5.25v27c4.33.25 7.41.91 9.25 2 1.83 1.08 2.83 3.58 3 7.5H8.14c.25-3.92 1.41-6.42 3.5-7.5 2.08-1.09 5-1.75 8.75-2v-27c-2.79-.88-5.21-2.63-7.25-5.25-1.87-2.41-2.87-8.58-2.98-18.53-.01-.95.75-1.72 1.71-1.72h4.52V59.17c0-1.18.95-2.12 2.12-2.12H26V48.3v8.75z"
                />
                <path
                  id="akTP25jrY"
                  d="M51.39 165.3c8.66-43 31.5-64.42 68.5-64.25 37 .16 58.5 21.58 64.5 64.25h-133z"
                />
                <path
                  id="f151AAeK4"
                  d="M30.39 131.3c4.58 5.94 10.59 10.06 18.02 12.36.73.23 1.23.91 1.23 1.67v19.08c0 2.12-1.03 4.11-2.77 5.34-1.56 1.11-5.47 3.87-11.73 8.3h41.5c-6.57-4.65-10.67-7.55-12.31-8.71-1.38-.97-2.19-2.54-2.19-4.22v-19.76c0-.77.53-1.44 1.28-1.61 6.15-1.39 11.81-4.96 16.97-10.7 5.27-5.88 7.3-19.22 6.1-40.02-.06-.98-.86-1.73-1.84-1.73H27.63c-1.19 0-2.18.92-2.26 2.11-1.25 19.3.42 31.92 5.02 37.89z"
                />
                <path
                  id="g26PfsEzdg"
                  d="M55.89 135.8c-11.63 0-18.61-6.96-20.94-20.86-.03-.21.13-.39.34-.39h41.87c.25 0 .43.22.38.46-2.83 13.86-10.04 20.79-21.65 20.79z"
                />
                <path
                  id="a1ixBoKFiJ"
                  d="M75.14 178.05h110c5.16-.05 7.75-2.13 7.75-6.25 0-4.13-2.59-6.3-7.75-6.5H63.86c-.8 0-1.19.97-.6 1.52 1.58 1.5 5.54 5.24 11.88 11.23z"
                />
                <path
                  id="aGCiiu6kl"
                  d="M126.64 101.55c1-9.84-1.25-14.75-6.75-14.75s-7.67 4.91-6.5 14.75"
                />
              </defs>
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#a4neNfQPbg"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#aojPVjcz"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#akTP25jrY"
              />
              <use fill="#fff" xlink:href="#f151AAeK4" />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#f151AAeK4"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#g26PfsEzdg"
              />
              <use
                fill-opacity="0"
                stroke="#969696"
                stroke-width="5"
                xlink:href="#a1ixBoKFiJ"
              />
              <g>
                <use
                  fill-opacity="0"
                  stroke="#969696"
                  stroke-width="5"
                  xlink:href="#aGCiiu6kl"
                />
              </g>
            </svg>
          </div>
        </div>
        <!-- calendar column -->
        <div
          v-for="(day, index) in currentWeek"
          :key="index"
          class="calendar-column"
        >
          <div class="calendar-column-date">
            {{ String(day.day).padStart(2, "0") }}.{{
              String(day.month + 1).padStart(2, "0")
            }}
          </div>
          <div
            v-for="meal in day.meals"
            :key="meal.date_id"
            class="calendar-row"
          >
            <i class="fas fa-plus"></i>
            <calendar-meal :meal="meal" :key="meal.date_id"></calendar-meal>
          </div>
        </div>
      </div>
    </div>
    <div class="calendar-recipes-list-overlay">
      <div class="calendar-recipes-list-modal">
        <div class="calendar-recipes-list-header">Wybierz przepis</div>
        <div class="calendar-recipes-list-close-btn">
          <i class="fas fa-times"></i>
        </div>
        <div class="calendar-recipes-list-container">
          <div class="calendar-recipes-list">
            <div
              class="calendar-recipes-list-item"
              v-for="(recipe, index) in recipes"
              :key="index"
            >
              {{ recipe.recipe_name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import calendarMeal from "../components/calendarMeal.vue";
export default {
  components: { calendarMeal },
  name: "Calendar",
  data() {
    return {
      currentDate: "",
    };
  },
  methods: {
    //get current date
    getCurrentDate() {
      this.currentDate = new Date();
    },
    //get all meals of week
    getWeekMeals(week) {
      week.forEach((day) => {
        try {
          axios
            .get(
              `http://localhost:5000/calendar/${this.$store.state.loggedUser.user_id}` +
                `%${day.day}` +
                `%${day.month}` +
                `%${day.year}`
            )
            .then((response) => {
              response.data.forEach((meal) => {
                day.meals[meal.meal_number] = meal;
              });
              this.$forceUpdate();
            });
        } catch (err) {
          console.log(err);
        }
      });
    },
  },
  computed: {
    //recipes list
    recipes: function() {
      return this.$store.state.recipes;
    },
    //set and get current week
    currentWeek: function() {
      var firstDay = new Date(this.currentDate);
      var dayNumber = firstDay.getDay();
      if (dayNumber == 0) {
        dayNumber = 7;
      }
      firstDay.setDate(firstDay.getDate());
      firstDay.setDate(firstDay.getDate() - dayNumber);
      var week = [];

      for (let i = 1; i <= 7; i++) {
        firstDay.setDate(firstDay.getDate() + 1);

        let day = firstDay.getDate();
        let month = firstDay.getMonth();
        let year = firstDay.getFullYear();
        let meals = [{}, {}, {}, {}];
        week.push({ day, month, year, meals });
        this.getWeekMeals(week);
      }
      return week;
    },
    previousWeek: function() {
      var firstDay = new Date(this.currentDate);
      var dayNumber = firstDay.getDay();
      if (dayNumber == 0) {
        dayNumber = 7;
      }
      firstDay.setDate(firstDay.getDate() - 7);
      firstDay.setDate(firstDay.getDate() - dayNumber);
      var week = [];

      for (let i = 1; i <= 7; i++) {
        firstDay.setDate(firstDay.getDate() + 1);

        let day = firstDay.getDate();
        let month = firstDay.getMonth();
        let year = firstDay.getFullYear();
        week.push({ day, month, year });
      }
      return week;
    },
  },
  created() {
    this.getCurrentDate();
  },
};
</script>

<style lang="scss">
//calendar
.calendar-container {
  display: grid;
  grid-template-columns: 90px repeat(7, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}
.calendar-column {
  display: grid;
  gap: 1rem;
  &-date {
    display: flex;
    justify-content: center;
    height: 40px;
    font-size: 24px;
    color: $lightGrey;
  }
}
.calendar-row {
  position: relative;
  @include flex-center;
  border: 1px solid $lighterGrey;
  font-size: 40px;
  color: $lightGrey;
  background-color: rgb(250, 250, 250);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  &:hover {
    background-color: rgb(240, 240, 240);
    color: $primaryGrey;
  }
  height: calc(16vh - 1rem);
  width: 100%;
  cursor: pointer;
  &-icon {
    position: relative;
    @include flex-center;
    height: calc(16vh - 1rem);
    width: 100%;
    padding: 0 10% 0 0;
  }
}

//calendar recipes list
@keyframes recipes-list-animation {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.calendar-recipes-list {
  &-modal {
    background-color: white;
    height: 70vh;
    width: 80vw;
    box-shadow: $lightShadow;
    position: relative;
    opacity: 0;
    animation: recipes-list-animation 0.2s 0.2s ease-out forwards;
  }
  &-overlay {
    @include flex-center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(#000000, 0.6);
    z-index: 1000;
  }
  &-header {
    @include flex-center;
    height: 15%;
    font-size: 30px;
    font-weight: 500;
    color: $primaryGrey;
  }
  &-container {
    height: 85%;
    padding: 0 1.5rem;
    border-top: 1px solid $lighterGrey;
    //border-bottom: 1px solid $lighterGrey;
  }
  &-close-btn {
    position: absolute;
    top: 5px;
    right: 15px;
    color: $lightGrey;
    font-size: 30px;
    cursor: pointer;
    &:hover {
      color: $primaryYellow;
    }
  }
}
</style>
