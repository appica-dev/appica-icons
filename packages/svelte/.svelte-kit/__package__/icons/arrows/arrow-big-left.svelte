<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.505 14.966h-7.961v3.546a.98.98 0 0 1-.614.913 1 1 0 0 1-1.085-.215L3.291 12.7a.985.985 0 0 1 0-1.398l6.554-6.512a.997.997 0 0 1 1.699.7v3.545h7.96c.265 0 .518.104.704.29a.99.99 0 0 1 .292.699v3.954a.99.99 0 0 1-.291.7 1 1 0 0 1-.704.29\"/>";
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
