<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 11a8.1 8.1 0 0 0-6.986-6.918 8.1 8.1 0 0 0-4.31.62M6.321 6.31A8 8 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 13.687 4.676M20 16a1 1 0 0 0-1-1M9.888 9.87a3 3 0 1 0 4.233 4.252m.595-3.397A3 3 0 0 0 13.29 9.29M3 3l18 18M4 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
