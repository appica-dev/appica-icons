<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12 9-7.971 4.428A2 2 0 0 0 3 15.177V16a2 2 0 0 0 2 2h1m6-9 7.971 4.428A2 2 0 0 1 21 15.177V16a2 2 0 0 1-2 2h-1m-6-9c-1.457-.81-1.993-2.333-2-4a2 2 0 1 1 4 0M6 18a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2M6 18v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
