<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 20h10M9.452 5.425 12 5l6 1m0 0 3 6a3 3 0 0 1-2.127 2.871M18 6l-2.677 5.355M12 3v5m0 4v8M3 3l18 18M9 12 6 6l-3 6a3 3 0 0 0 6 0\"/>";
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
