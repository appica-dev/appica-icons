<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 12 4.698 4.034a.5.5 0 0 0-.546.124.56.56 0 0 0-.12.568L6.5 12M21 12 4.698 19.966a.5.5 0 0 1-.546-.124.56.56 0 0 1-.12-.568L6.5 12M21 12H6.5\"/>";
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
