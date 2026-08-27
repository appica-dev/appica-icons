<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m9.992 15-2.007-3-4.015 8c-2.212-3.061-2.625-7.098-.915-10.463A10.14 10.14 0 0 1 12 4a10.14 10.14 0 0 1 8.945 5.537c1.71 3.365 1.297 7.402-.915 10.463l-4.517-8-1.505 1.5M14.5 15l-3-6L9 13.5\"/>";
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
