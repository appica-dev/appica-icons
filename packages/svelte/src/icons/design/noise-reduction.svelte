<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.01 18H10m4.01-4H14m2.01-2H16m2.01-2H18m-1.99 6H16m-1.99 2H14m4.01-4H18m-5.99 2H12m9-4a9 9 0 0 1-2.636 6.364A9 9 0 0 1 12 21a9 9 0 0 1-6.364-2.636A9 9 0 0 1 3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9z\"/>";
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
