<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 5h1.4a1 1 0 0 1 .882.53L14 8.75M21 15a10 10 0 0 1-8 4H5.561a2 2 0 0 1-1.94-1.515l-.136-.545A16.3 16.3 0 0 1 3 13a2 2 0 0 1 2-2h2c3.148 0 7.111-1.482 9-4 0 0 5 2 5 8m0 0H3.25\"/>";
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
