<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m15.043 16.996-3.03 2.996-7.5-7.419a4.99 4.99 0 0 1-1.039-5.702 5 5 0 0 1 3.018-2.638 5.005 5.005 0 0 1 5.52 1.782 5 5 0 0 1 5.28-1.811 5 5 0 0 1 3.048 2.344 4.99 4.99 0 0 1-.405 5.562m-.922 3.887v2.997m0 2.996V22\"/>";
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
