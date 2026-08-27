<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 11a2 2 0 0 1 2 2m3 3V9m0 0-3-3m3 3h-1a1 1 0 0 1-1-1V7M4 20V6c0-.548.22-1.044.577-1.405M8 4h4a2 2 0 0 1 2 2v4m0 4v6M3 20h12M4 11h7M3 3l18 18\"/>";
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
