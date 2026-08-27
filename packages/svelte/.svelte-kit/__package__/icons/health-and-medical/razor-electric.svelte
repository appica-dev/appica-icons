<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.5 2v2.222m0 0h9m-9 0 1.125 4.445h6.75L16.5 4.222M12 2v2.222M16.5 2v2.222M12 17.556v1.11M8.625 12v6.667c0 .884.356 1.732.989 2.357A3.4 3.4 0 0 0 12 22c.895 0 1.754-.351 2.387-.976a3.31 3.31 0 0 0 .988-2.357V12z\"/>";
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
