<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m16 4.995 3 3.001-2 1 4 4.002-3 1 4 4.001h-9M15 21v-3m-7-5.002-2-2.001m2 1 2-2M8 21V7.996m-2.177 8.002a3 3 0 0 1-2.743-3.69 3 3 0 0 1 .304-4.835A3.002 3.002 0 0 1 8 3.765a3 3 0 0 1 4.615 3.708 3 3 0 0 1 .305 4.834 3 3 0 0 1-2.92 3.696H6z\"/>";
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
