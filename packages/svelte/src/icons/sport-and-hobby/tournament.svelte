<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2m7-6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-4m-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6m0 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0\"/>";
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
