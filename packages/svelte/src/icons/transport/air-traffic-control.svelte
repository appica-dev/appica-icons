<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.999 3h2m-1 0v3m-3.5 0 1.5 10v5m5.5-15-1.5 10v5M5.996 6H18a2 2 0 0 1 1.916 2.575l-1.8 6A2 2 0 0 1 16.202 16H7.797a2 2 0 0 1-1.916-1.425l-1.8-6A2 2 0 0 1 5.997 6\"/>";
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
