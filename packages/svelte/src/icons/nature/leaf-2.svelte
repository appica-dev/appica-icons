<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 21c.5-4.5 2.5-8 7-10m-4.5 4Q4 15 3 9a8.4 8.4 0 0 1 3.438.402 12 12 0 0 1-.052-.793C6.386 5.003 9.59 3 9.59 3s2.003 1.252 2.842 3.557Q15 5 19 5q.396 3.775-1.557 6.568C19.748 12.407 21 14.41 21 14.41S18 17 14 17c0 1 0 1 .5 3q-6 0-7-5\"/>";
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
