<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 8h-2a2 2 0 0 0-2 2 2 2 0 0 1-4 0V9a2 2 0 0 0-2-2H9a2 2 0 0 1-2-2v-.5M3 12h3a2 2 0 0 1 2 2v.5A1.5 1.5 0 0 0 9.5 16a1.5 1.5 0 0 1 1.5 1.5v3.25M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12m12 8.5V17a2 2 0 0 1 2-2h3.5\"/>";
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
