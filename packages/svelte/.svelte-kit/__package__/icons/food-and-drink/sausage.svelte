<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.195 5.519 3.952 3.53A1 1 0 0 1 4.8 2h1.392a1 1 0 0 1 .848 1.53L5.795 5.52m12.687 12.705 1.989-1.243a1 1 0 0 1 1.53.848v1.392a1 1 0 0 1-1.53.848l-1.991-1.245M5.5 5.5A2.5 2.5 0 0 0 3 8c0 7.18 5.82 13 13 13a2.5 2.5 0 0 0 0-5 8 8 0 0 1-8-8 2.5 2.5 0 0 0-2.5-2.5\"/>";
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
