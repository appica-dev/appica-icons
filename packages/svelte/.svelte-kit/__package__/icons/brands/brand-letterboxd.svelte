<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12\"/>";
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
