<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 12H9a6 6 0 0 1-6-6V4h3a6 6 0 0 1 6 6v10m0-6a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3\"/>";
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
