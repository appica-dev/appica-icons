<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M2 12a6 6 0 0 1 6-6h8a6 6 0 1 1 0 12H8a6 6 0 0 1-6-6\"/>";
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
