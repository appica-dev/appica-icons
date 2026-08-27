<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16 6h3a1 1 0 0 1 1 1v9m-.606 3.435A2 2 0 0 1 16 18v-2m0-4V5a1 1 0 0 0-1-1H8m-3.735.321A1 1 0 0 0 4 5v12a3 3 0 0 0 3 3h11M8 12h4m-4 4h4M3 3l18 18\"/>";
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
