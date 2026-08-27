<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.507 10.498 9 12v3h3l1.493-1.498m2-2.01 4.89-4.907a2.1 2.1 0 0 0-2.97-2.97L12.5 8.511M16 5l3 3M7.476 7.471a7 7 0 1 0 9.054 9.055M3 3l18 18\"/>";
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
