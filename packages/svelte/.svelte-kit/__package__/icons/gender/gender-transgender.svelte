<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 0v5m3-12 6-6m0 0v4m0-4h-4M9 9 3 3m0 0v4m0-4h4M5.5 8.5l3-3m1 13.5h5\"/>";
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
