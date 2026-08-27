<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-3.5L10 12m7 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-3.5L10 12m-3 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h3\"/>";
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
