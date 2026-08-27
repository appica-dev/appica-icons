<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 7a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6m0 0V2M9 13a3 3 0 1 0 6 0M5 13h14m-7 7v2m3-3 2 1.5M9 19l-2 1.5\"/>";
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
