<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 12h.01M3 12h.01M5 15h.01M5 9h.01M19 15h.01M12 18h.01M12 6h.01M8 17h.01M8 7h.01M16 17h.01M16 7h.01M19 9h.01M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
