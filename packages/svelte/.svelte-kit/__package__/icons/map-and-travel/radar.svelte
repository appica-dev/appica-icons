<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.003 8.993A5 5 0 0 0 7.61 14.39c.343.629.817 1.177 1.39 1.607M20.49 8.993A9.005 9.005 0 0 0 9.5 3.356a9 9 0 0 0-6.273 10.64 9 9 0 0 0 5.778 6.499m11.999-8.5h-8.002a1.001 1.001 0 1 0-1 1V21a9 9 0 0 0 9.002-9.005\"/>";
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
