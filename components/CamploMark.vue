<script setup lang="ts">
import { useId } from 'vue'
const cid = useId()
</script>

<template>
  <svg
    viewBox="0 -5.5 66 66"
    xmlns="http://www.w3.org/2000/svg"
    shape-rendering="geometricPrecision"
    aria-hidden="true"
  >
    <defs>
      <clipPath :id="`door-cutout-${cid}`">
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M 0 -10 H 66 V 66 H 0 Z M 32.5 40 L 33.5 40 L 36 54.5 L 30 54.5 Z"
        />
      </clipPath>
    </defs>
    <g :clip-path="`url(#door-cutout-${cid})`">
      <g transform="translate(3, 0)">
        <!-- tree: squared edges (flat apex + chamfered shoulders + chamfered bottom corners) -->
        <path
          d="M 29.25 3 L 30.75 3 L 47.43 19.44 L 47.2 20 L 40 20 L 57.49 41.38 L 57.2 42 L 2.8 42 L 2.51 41.38 L 20 20 L 12.8 20 L 12.57 19.44 Z"
          fill="#3E6B31"
          stroke="#3E6B31"
          stroke-width="3.5"
          stroke-linejoin="miter"
          stroke-miterlimit="4"
        />
        <!-- tent: squared edges (flat apex + chamfered feet) -->
        <path
          d="M 29.5 27 L 30.5 27 L 45.60 53.31 L 45.2 54 L 14.8 54 L 14.40 53.31 Z"
          fill="#E8853B"
        />
      </g>
    </g>
  </svg>
</template>
