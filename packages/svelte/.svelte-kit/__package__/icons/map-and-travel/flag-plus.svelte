<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.433 15.29A4.97 4.97 0 0 1 12 13.97a4.99 4.99 0 0 0-7 0m0 0V4.934a4.99 4.99 0 0 1 7 0 4.99 4.99 0 0 0 7 0v7.027M5 13.969v7.027m11-2.008h6m-3-3.011V22\"/>";
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
