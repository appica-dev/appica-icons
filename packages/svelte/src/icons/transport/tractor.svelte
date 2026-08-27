<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 15v.01M17 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-6.5m9.5-1.8V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5M18 5h-1a1 1 0 0 0-1 1v4M3 15a4 4 0 1 0 8 0 4 4 0 0 0-8 0\"/>";
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
