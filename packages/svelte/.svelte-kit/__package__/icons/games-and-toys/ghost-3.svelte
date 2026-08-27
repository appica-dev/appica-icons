<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.004 9.987h.01m3.982 0h.01m-8.992.998a6.985 6.985 0 0 1 11.926-4.94 6.99 6.99 0 0 1 2.046 4.94v6.985a1.776 1.776 0 0 1-3.094 1.398 1.646 1.646 0 0 0-2.595 0 1.647 1.647 0 0 1-2.594 0 1.646 1.646 0 0 0-2.595 0 1.776 1.776 0 0 1-3.094-1.398z\"/>";
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
