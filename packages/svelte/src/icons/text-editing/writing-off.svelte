<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16 7h4m-4 9v1l2 2m0 0 .5-.5m-.5.5H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6m14 5V5c0-1.121-.879-2-2-2s-2 .879-2 2v7M3 3l18 18\"/>";
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
