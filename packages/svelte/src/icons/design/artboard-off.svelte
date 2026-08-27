<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 8h3a1 1 0 0 1 1 1v3m-.284 3.698A1 1 0 0 1 15 16H9a1 1 0 0 1-1-1V9c0-.273.11-.52.287-.7M3 8h1m-1 8h1M8 3v1m8-1v1m4 4h1m-1 8h1M8 20v1m8-1v1M3 3l18 18\"/>";
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
