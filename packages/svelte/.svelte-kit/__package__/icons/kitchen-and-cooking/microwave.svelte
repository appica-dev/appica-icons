<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 6v12m3-6h.01M18 15h.01M18 9h.01M6.5 10.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0m-5 3c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0M3 7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"/>";
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
