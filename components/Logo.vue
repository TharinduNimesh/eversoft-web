<script setup>
const config = useAppConfig();
const colorMode = useColorMode();
const colors = {
  red: {
    light: "#ef4444",
    dark: "#f87171",
  },
  orange: {
    light: "#f97316",
    dark: "#fb923c",
  },
  amber: {
    light: "#f59e0b",
    dark: "#fbbf24",
  },
  yellow: {
    light: "#eab308",
    dark: "#facc15",
  },
  lime: {
    light: "#84cc16",
    dark: "#a3e635",
  },
  green: {
    light: "#22c55e",
    dark: "#4ade80",
  },
  emerald: {
    light: "#10b981",
    dark: "#34d399",
  },
  teal: {
    light: "#14b8a6",
    dark: "#2dd4bf",
  },
  cyan: {
    light: "#14b8a6",
    dark: "#2dd4bf",
  },
  sky: {
    light: "#0ea5e9",
    dark: "#38bdf8",
  },
  blue: {
    light: "#3b82f6",
    dark: "#60a5fa",
  },
  indigo: {
    light: "#6366f1",
    dark: "#818cf8",
  },
  violet: {
    light: "#8b5cf6",
    dark: "#a78bfa",
  },
  purple: {
    light: "#a855f7",
    dark: "#d946ef",
  },
  fuchsia: {
    light: "#d946ef",
    dark: "#e879f9",
  },
  pink: {
    light: "#ec4899",
    dark: "#f472b6",
  },
  rose: {
    light: "#f43f5e",
    dark: "#fda4af",
  },
};

const color = computed(() => {
    return colors[config.ui.primary || "blue"][colorMode.value];
});
</script>

<template>
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000.000000 1000.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)"
      :fill="color"
      stroke="none"
    >
      <path
        d="M4705 9743 c-706 -24 -1480 -164 -2165 -392 -238 -80 -499 -176 -512
-189 -23 -23 -188 -785 -173 -800 1 -2 34 12 71 31 155 78 517 224 764 309
590 202 1224 326 1883 369 228 15 856 6 1067 -15 571 -56 1038 -152 1557 -318
l191 -61 31 -161 c50 -260 95 -606 79 -606 -4 0 -54 18 -110 41 -191 76 -572
198 -793 253 -259 65 -417 96 -655 130 -362 52 -504 61 -960 61 -372 -1 -451
-4 -635 -24 -234 -25 -486 -65 -705 -110 -144 -31 -398 -95 -407 -104 -7 -8
-22 -121 -38 -292 -96 -1050 134 -2116 649 -3005 100 -171 208 -340 220 -340
27 0 435 394 483 467 14 21 10 30 -61 150 -306 510 -508 1090 -586 1683 -34
260 -50 621 -34 757 l7 51 111 21 c132 25 370 55 556 72 178 16 693 16 900 1
614 -47 1247 -200 1825 -440 174 -72 544 -262 740 -381 l180 -108 7 36 c3 20
12 158 19 306 18 387 -3 787 -62 1200 -25 177 -99 542 -142 705 l-34 125 -139
53 c-1036 392 -2046 562 -3129 525z"
      />
      <path
        d="M1175 8756 c-11 -7 -87 -53 -170 -101 -82 -48 -239 -147 -347 -219
-169 -112 -198 -135 -198 -156 0 -14 -7 -92 -15 -175 -15 -157 -40 -646 -33
-665 2 -7 35 14 73 46 102 84 370 282 499 369 l112 76 17 177 c20 210 73 576
93 645 6 20 -3 21 -31 3z"
      />
      <path
        d="M8793 8748 c24 -94 80 -503 102 -745 l7 -71 136 -94 c155 -106 350
-251 465 -345 l77 -64 0 153 c0 191 -28 621 -46 705 -7 34 -406 297 -678 448
-69 38 -69 38 -63 13z"
      />
      <path
        d="M2370 7851 c-472 -214 -893 -461 -1285 -757 -269 -202 -617 -510
-623 -551 -8 -57 74 -579 134 -848 291 -1310 889 -2486 1792 -3520 136 -155
509 -527 682 -679 203 -179 416 -346 439 -346 31 0 447 139 614 206 143 57
148 59 125 74 -164 107 -470 343 -708 546 -143 121 -542 520 -676 674 -875
1007 -1440 2178 -1673 3474 -17 92 -29 171 -26 176 8 13 256 214 360 292 120
90 274 193 279 187 2 -2 11 -67 20 -144 135 -1147 569 -2230 1263 -3150 202
-268 417 -514 616 -704 l67 -64 62 28 c101 44 374 187 494 258 804 478 1463
1170 1913 2011 l53 98 -141 142 c-119 119 -217 233 -339 391 -18 23 -25 27
-29 15 -32 -80 -239 -472 -301 -571 -383 -612 -870 -1099 -1460 -1459 -122
-74 -97 -84 -241 95 -294 362 -493 671 -700 1085 -360 723 -552 1441 -602
2261 -11 189 -7 646 7 772 4 32 3 57 -2 56 -5 -1 -56 -22 -114 -48z"
      />
      <path
        d="M8910 7036 c0 -74 -27 -394 -46 -536 -187 -1452 -786 -2776 -1751
-3873 -138 -158 -488 -507 -626 -626 l-108 -93 -102 37 c-245 91 -621 259
-615 276 2 4 49 43 105 88 312 246 679 604 948 926 117 139 360 470 459 623
415 647 720 1368 879 2075 l24 109 -41 30 c-175 128 -451 298 -686 421 -691
363 -1549 569 -2360 566 -149 0 -397 -13 -405 -20 -13 -13 41 -341 86 -529
l31 -125 316 0 c338 -1 459 -11 757 -61 298 -51 674 -160 950 -276 219 -91
565 -271 565 -293 0 -6 -23 -79 -50 -163 -286 -870 -765 -1649 -1415 -2297
-417 -417 -829 -726 -1334 -1001 l-143 -77 23 -19 c13 -10 87 -62 164 -116
589 -412 1144 -683 1852 -905 l112 -35 143 115 c907 724 1657 1667 2166 2723
368 763 618 1611 717 2435 l17 140 -84 80 c-146 140 -522 455 -542 455 -3 0
-6 -24 -6 -54z"
      />
      <path
        d="M4905 938 c-111 -57 -427 -196 -563 -248 l-113 -43 93 -54 c149 -88
351 -196 519 -278 l156 -77 259 131 c293 147 510 270 497 281 -4 4 -42 20 -83
35 -136 51 -332 136 -499 216 -90 43 -169 79 -175 79 -6 -1 -47 -19 -91 -42z"
      />
    </g>
  </svg>
</template>
