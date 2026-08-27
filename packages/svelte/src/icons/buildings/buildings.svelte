<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 21V6c0-1 1-2 2-2h5c1 0 2 1 2 2v15m3-13h2c1 0 2 1 2 2v11M3 21h18m-11-9v.01M10 16v.01M10 8v.01M7 12v.01M7 16v.01M7 8v.01M17 12v.01M17 16v.01\"/>";
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
