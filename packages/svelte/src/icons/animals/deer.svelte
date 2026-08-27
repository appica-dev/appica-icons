<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 3c0 2 1 3 4 3m0 0q3 0 3 3M7 6Q3 7 2 9m19-6c0 2-1 3-4 3m0 0c-2 0-3 .333-3 3m3-3q4 1 5 3m-6.815 5.889.095-.18a4 4 0 1 1-6.56 0M17 3q0 2-1 3M7 3q0 2 1 3m.5 4L7 9m8.5 1L17 9m-5 6h.01M12 18c-1 0-4-3-4-6q0-3 4-3t4 3c0 3-3 6-4 6\"/>";
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
