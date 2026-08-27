<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m10.5 15.5 1.5 2 1.5-2M9 6.75q3-1 6 0M5 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m11 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M17.5 9a4.5 4.5 0 1 0 3.5 1.671L22 9zm-11 0A4.5 4.5 0 1 1 3 10.671L2 9z\"/>";
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
