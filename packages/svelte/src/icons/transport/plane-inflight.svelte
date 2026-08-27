<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 21h18m-6-9.965h5c.53 0 1.04.212 1.414.589a2.015 2.015 0 0 1 0 2.842 2 2 0 0 1-1.414.59H5l-3-6.03h3l2 2.01h3L8 4h3z\"/>";
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
