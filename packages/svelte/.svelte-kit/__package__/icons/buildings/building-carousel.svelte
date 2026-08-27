<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4M8 22l4-10 4 10M3 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
