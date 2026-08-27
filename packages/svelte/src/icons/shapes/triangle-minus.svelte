<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 13.137h6m-4.637-9.231L2.257 17.183a1.85 1.85 0 0 0-.006 1.869c.166.285.404.522.692.689s.615.255.95.259h16.215c.334-.004.661-.093.949-.26.288-.166.526-.403.692-.688a1.85 1.85 0 0 0-.005-1.868l-8.107-13.28a1.9 1.9 0 0 0-.697-.662 1.94 1.94 0 0 0-1.88 0 1.9 1.9 0 0 0-.697.663z\"/>";
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
