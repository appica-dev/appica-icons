<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 12H6m0 0a3 3 0 0 1-3-3V7c0-1.083.574-2.033 1.435-2.56M6 12a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h12c.547 0 1.084-.148 1.552-.432M8 4h10a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3m0 0h-2m2 0a3 3 0 0 1 3 3v2M7 8v.01M7 16v.01M3 3l18 18\"/>";
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
