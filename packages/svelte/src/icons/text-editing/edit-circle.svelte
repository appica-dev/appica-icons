<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m16 5 3 3M9 7.07A7 7 0 0 0 10 21a7 7 0 0 0 6.93-6M12 15l8.386-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3z\"/>";
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
